/**
 * Standalone Sellout Calculator — fuller version for /pricing.
 * Inputs drive outputs and an indicative monthly CFS cost.
 */
'use client';

import { Calculator } from 'lucide-react';
import { useState } from 'react';
import { bcfsEvents } from '@/lib/builders-cfs/events';
import { cn } from '@/lib/builders-cfs/cn';
import { BCFS_PRICING } from '@/lib/builders-cfs/constants';
import { WhatsAppCTA } from './WhatsAppCTA';

type Tier = 'launchpad' | 'engine' | 'sellout';

// Single source of truth — derived from the locked pricing tiers so the
// calculator never drifts from the published numbers.
const TIER_DEFAULTS = Object.fromEntries(
  BCFS_PRICING.map((t) => [t.id, { retainer: t.retainer, voiceIncluded: t.voiceIncluded, voiceRate: t.voiceRate }])
) as Record<Tier, { retainer: number; voiceIncluded: number; voiceRate: number }>;

export function SelloutCalculator() {
  const [units, setUnits] = useState(180);
  const [ticket, setTicket] = useState(1.2);
  const [months, setMonths] = useState(14);
  const [svToBook, setSvToBook] = useState(11);
  const [tier, setTier] = useState<Tier>('engine');

  const t = TIER_DEFAULTS[tier];
  const totalGDV = units * ticket; // Cr
  const bookingsPerMonth = Math.round(units / months);
  const svPerMonth = Math.round((bookingsPerMonth * 100) / Math.max(1, svToBook));
  const gdvPerMonth = totalGDV / months;
  const estVoiceMins = Math.round(svPerMonth * 1.4);
  const voiceOverage = Math.max(0, estVoiceMins - t.voiceIncluded) * t.voiceRate;
  const cfsMonthly = t.retainer + voiceOverage;
  const cpb = bookingsPerMonth > 0 ? cfsMonthly / bookingsPerMonth : 0;

  const handleTierChange = (next: Tier) => {
    setTier(next);
    bcfsEvents.useCalculator({ units, ticket, months, svToBook, tier: next });
  };

  return (
    <div className="rounded-3xl border border-bld-edge bg-bld-ink-2 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Inputs */}
        <div className="lg:col-span-7 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-bld-edge">
          <div className="flex items-center gap-2 mb-1">
            <Calculator className="h-4 w-4 text-bld-lime" strokeWidth={2} />
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">
              SELLOUT CALCULATOR
            </span>
          </div>
          <h3 className="mt-3 font-display font-semibold text-bld-white text-[26px] md:text-[32px] leading-[1.08] tracking-[-0.02em]">
            What will this <span className="text-bld-lime">actually cost</span> per month?
          </h3>
          <p className="mt-2 text-[14px] text-bld-soft max-w-md">
            Move the sliders. Numbers are indicative, not inflated — based on real working benchmarks.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Slider label="Total units" value={units} setValue={setUnits} min={20} max={500} suffix=" units" />
            <Slider label="Avg ticket size" value={ticket} setValue={setTicket} min={0.4} max={6} step={0.1} prefix="₹ " suffix=" Cr" />
            <Slider label="Months to sellout" value={months} setValue={setMonths} min={6} max={36} suffix=" mo" />
            <Slider label="SV → Booking %" value={svToBook} setValue={setSvToBook} min={4} max={25} suffix="%" />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {(['launchpad', 'engine', 'sellout'] as Tier[]).map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => handleTierChange(id)}
                className={cn(
                  'inline-flex h-9 px-4 rounded-full text-sm font-mono uppercase tracking-[0.18em] transition-colors',
                  tier === id
                    ? 'bg-bld-lime text-bld-ink'
                    : 'border border-bld-edge text-bld-soft hover:border-bld-edge-lime hover:text-bld-lime'
                )}
              >
                {id}
              </button>
            ))}
          </div>
        </div>

        {/* Outputs */}
        <div className="lg:col-span-5 p-6 md:p-10 bg-bld-ink">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute mb-5">
            PROJECTION
          </div>

          <div className="space-y-4">
            <Metric label="Site visits / mo" value={String(svPerMonth)} />
            <Metric label="Bookings / mo" value={String(bookingsPerMonth)} />
            <Metric label="GDV / mo" value={`₹${gdvPerMonth.toFixed(1)} Cr`} />
            <Metric label="Total GDV" value={`₹${totalGDV.toFixed(0)} Cr`} sub />
          </div>

          <div className="my-6 h-px bg-bld-edge" />

          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute mb-3">
            CFS COST THIS MONTH
          </div>
          <div className="space-y-3">
            <Metric label={`${tier} retainer`} value={`₹${t.retainer.toLocaleString('en-IN')}`} sub />
            <Metric
              label={`Voice AI · ~${estVoiceMins} min${t.voiceIncluded > 0 ? ` (${t.voiceIncluded} incl.)` : ''}`}
              value={`₹${voiceOverage.toLocaleString('en-IN')}`}
              sub
            />
            <div className="pt-3 border-t border-bld-edge flex items-end justify-between">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">
                TOTAL
              </span>
              <span className="font-display font-bold text-bld-lime text-[28px] md:text-[32px] tabular-nums">
                ₹{cfsMonthly.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="flex items-end justify-between">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute">
                Implied cost / booking
              </span>
              <span className="font-display font-bold text-bld-soft text-[14px] tabular-nums">
                ₹{cpb > 0 ? cpb.toLocaleString('en-IN', { maximumFractionDigits: 0 }) : '—'}
              </span>
            </div>
          </div>

          <div className="mt-7">
            <WhatsAppCTA
              context="pricing-engine"
              source="calculator"
              size="md"
              className="w-full justify-center"
              inject={{ units, corridor: 'your micro-market' }}
            >
              Get this as a 1-page plan on WhatsApp
            </WhatsAppCTA>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  setValue,
  min,
  max,
  step = 1,
  prefix = '',
  suffix = ''
}: {
  label: string;
  value: number;
  setValue: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="rounded-xl border border-bld-edge bg-bld-ink p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute">{label}</span>
        <span className="font-display font-bold text-bld-white text-base tabular-nums">
          {prefix}{value}{suffix}
        </span>
      </div>
      <div className="relative h-1.5 rounded-full bg-bld-ink-3">
        <div className="absolute inset-y-0 left-0 rounded-full bg-bld-lime" style={{ width: `${pct}%` }} />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          aria-label={label}
        />
        <span
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-bld-lime shadow-[0_0_12px_rgba(200,255,0,0.6)] pointer-events-none"
          style={{ left: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function Metric({ label, value, sub = false }: { label: string; value: string; sub?: boolean }) {
  return (
    <div className="flex items-end justify-between">
      <span
        className={cn(
          'font-mono tracking-[0.18em] uppercase',
          sub ? 'text-[10px] text-bld-mute' : 'text-[11px] text-bld-soft'
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          'font-display font-bold tabular-nums',
          sub ? 'text-[14px] text-bld-soft' : 'text-[22px] text-bld-white'
        )}
      >
        {value}
      </span>
    </div>
  );
}
