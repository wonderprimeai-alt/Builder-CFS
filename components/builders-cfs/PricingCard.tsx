/**
 * PricingCard — tier card with Setup/Retainer/Voice-AI breakdown + feature list.
 * Featured variant gets lime border + glow.
 */
'use client';

import { Check, Sparkles } from 'lucide-react';
import { WhatsAppCTA } from './WhatsAppCTA';
import type { WhatsAppContext } from '@/lib/builders-cfs/whatsapp';
import { cn } from '@/lib/builders-cfs/cn';

interface PricingCardProps {
  id: 'launchpad' | 'engine' | 'sellout';
  name: string;
  forWho: string;
  useCase?: string;
  setup: number;
  retainer: number;
  voiceRate: number;
  voiceIncluded: number;
  features: ReadonlyArray<string>;
  featured?: boolean;
  badge?: string;
  automationDepth?: string;
}

const CONTEXT_MAP: Record<PricingCardProps['id'], WhatsAppContext> = {
  launchpad: 'pricing-launchpad',
  engine: 'pricing-engine',
  sellout: 'pricing-sellout'
};

function inr(n: number): string {
  return `₹${n.toLocaleString('en-IN')}`;
}

export function PricingCard({
  id,
  name,
  forWho,
  useCase,
  setup,
  retainer,
  voiceRate,
  voiceIncluded,
  features,
  featured = false,
  badge,
  automationDepth
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border p-6 md:p-7 bg-bld-ink-3',
        featured
          ? 'border-bld-edge-lime shadow-[0_0_60px_-20px_rgba(200,255,0,0.45)]'
          : 'border-bld-edge'
      )}
    >
      {featured && badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-bld-lime px-3 py-1 font-mono text-[10px] tracking-[0.22em] uppercase text-bld-ink">
          <Sparkles className="h-3 w-3" strokeWidth={2.5} />
          {badge}
        </div>
      )}

      <div className="flex items-baseline justify-between">
        <h3 className="font-display font-semibold text-bld-white text-[24px] md:text-[28px]">
          {name}
        </h3>
      </div>
      <p className="mt-2 text-[13px] text-bld-soft leading-snug">{forWho}</p>
      {useCase && (
        <p className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-bld-mute min-h-[2.4em]">
          {useCase}
        </p>
      )}

      <div className="mt-5 space-y-2 border-t border-bld-edge pt-5">
        <Line label="Setup (one-time)" value={inr(setup)} />
        <Line label="Retainer / month" value={inr(retainer)} accent={featured} />
        <Line
          label={voiceIncluded > 0 ? `Voice AI · ${voiceIncluded} min incl.` : 'Voice AI · pay-as-used'}
          value={`${inr(voiceRate)}/min`}
          sub
        />
      </div>

      {automationDepth && (
        <div
          className={cn(
            'mt-4 rounded-md border px-3 py-2.5',
            featured
              ? 'border-bld-edge-lime bg-bld-lime-dim/30'
              : 'border-bld-edge bg-bld-ink-2/60'
          )}
        >
          <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-bld-mute">
            AUTOMATION STACK
          </div>
          <div
            className={cn(
              'mt-1 font-mono text-[11.5px] leading-snug tabular-nums',
              featured ? 'text-bld-lime' : 'text-bld-soft'
            )}
          >
            {automationDepth}
          </div>
        </div>
      )}

      <ul className="mt-6 space-y-2.5 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-bld-soft">
            <Check className="h-4 w-4 text-bld-lime mt-0.5 shrink-0" strokeWidth={2.2} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <WhatsAppCTA
          context={CONTEXT_MAP[id]}
          source={`pricing-${id}`}
          variant={featured ? 'solid' : 'outline'}
          size="md"
          className="w-full justify-center"
          withArrow
        >
          {featured ? `Start with ${name}` : `Talk to Priya · ${name}`}
        </WhatsAppCTA>
      </div>
    </div>
  );
}

function Line({
  label,
  value,
  sub = false,
  accent = false
}: {
  label: string;
  value: string;
  sub?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between">
      <span
        className={cn(
          'font-mono tracking-[0.18em] uppercase',
          sub ? 'text-[10px] text-bld-mute' : 'text-[10.5px] text-bld-soft'
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          'font-display font-bold tabular-nums',
          sub
            ? 'text-[14px] text-bld-soft'
            : accent
              ? 'text-[22px] text-bld-lime'
              : 'text-[20px] text-bld-white'
        )}
      >
        {value}
      </span>
    </div>
  );
}
