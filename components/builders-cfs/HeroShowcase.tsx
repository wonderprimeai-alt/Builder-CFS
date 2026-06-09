/**
 * HeroShowcase — the 4-tab interactive product demo.
 * Tabs: Qualify · Calculate · Create · Track.
 * Real styled DOM (not screenshots) with continuous micro-motion.
 * Pass 2 polish: 3D mouse-tilt, tab glow bloom, typing dots, count-to ticker,
 * Create hover shimmer, Funnel hover tooltips.
 */
'use client';

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  BarChart3,
  Calculator,
  CheckCircle2,
  Image as ImageIcon,
  MessageSquare,
  Mic,
  Phone,
  TrendingDown,
  TrendingUp
} from 'lucide-react';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import Image from 'next/image';
import { LiveDot } from './Primitives';
import { bcfsEvents } from '@/lib/builders-cfs/events';
import { easeBcfs } from '@/lib/builders-cfs/motion';
import { cn } from '@/lib/builders-cfs/cn';
import { BCFS_PRICING } from '@/lib/builders-cfs/constants';

// Engine tier figures — single source of truth for the mini calculator.
const ENGINE_TIER = BCFS_PRICING.find((t) => t.id === 'engine')!;

type TabId = 'qualify' | 'calculate' | 'create' | 'track';
const TABS: Array<{ id: TabId; label: string; icon: typeof MessageSquare }> = [
  { id: 'qualify', label: 'Qualify', icon: MessageSquare },
  { id: 'calculate', label: 'Calculate', icon: Calculator },
  { id: 'create', label: 'Create', icon: ImageIcon },
  { id: 'track', label: 'Track', icon: BarChart3 }
];

export function HeroShowcase() {
  const [tab, setTab] = useState<TabId>('qualify');
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [1.5, -1.5]), { stiffness: 140, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-1.5, 1.5]), { stiffness: 140, damping: 18 });

  useEffect(() => {
    bcfsEvents.viewHeroShowcase();
  }, []);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const handleTab = (id: TabId) => {
    setTab(id);
    bcfsEvents.switchShowcaseTab(id);
  };

  return (
    <div className="relative" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {/* Outer glow that intensifies when window is being tilted */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-3xl bg-bld-lime/[0.05] blur-3xl opacity-60"
      />
      {/* Window chrome */}
      <motion.div
        ref={ref}
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
        className="relative overflow-hidden rounded-2xl border border-bld-edge bg-bld-ink-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]"
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-bld-edge bg-bld-ink-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-bld-mute">CFS.engine</span>
          </div>
          <LiveDot />
        </div>

        {/* Tabs */}
        <div className="flex border-b border-bld-edge bg-bld-ink-3 overflow-x-auto scrollbar-none">
          {TABS.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => handleTab(t.id)}
                className={cn(
                  'relative inline-flex items-center gap-2 px-4 md:px-5 py-3 text-sm transition-colors whitespace-nowrap',
                  active ? 'text-bld-white' : 'text-bld-mute hover:text-bld-soft'
                )}
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                {t.label}
                {active && (
                  <>
                    <motion.span
                      layoutId="bcfs-tab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-bld-lime"
                      transition={{ duration: 0.45, ease: easeBcfs }}
                    />
                    {/* Tab glow bloom */}
                    <motion.span
                      key={t.id}
                      aria-hidden
                      initial={{ opacity: 0.7, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.6 }}
                      transition={{ duration: 0.7, ease: easeBcfs }}
                      className="absolute inset-0 rounded-md bg-bld-lime/20 pointer-events-none"
                    />
                  </>
                )}
              </button>
            );
          })}
        </div>

        {/* Body */}
        <div className="relative min-h-[460px] md:min-h-[520px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.4, ease: easeBcfs }}
              className="p-5 md:p-6"
            >
              {tab === 'qualify' && <TabQualify />}
              {tab === 'calculate' && <TabCalculate />}
              {tab === 'create' && <TabCreate />}
              {tab === 'track' && <TabTrack />}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

// ===========================================================================
// TAB 1 — QUALIFY · WhatsApp chat (left) + Voice call (right)
// ===========================================================================

type Bubble =
  | { from: 'priya'; text: string }
  | { from: 'lead'; text: string };

// Priya (the AI) qualifying a real home buyer who just enquired on Meta
// for a 3 BHK at Vrindavan Estates, Sarjapur Road. Builder-side reads this
// and sees what their inbound looks like once CFS is live.
const QUALIFY_SCRIPT: Bubble[] = [
  { from: 'priya', text: 'Hi Arjun! Saw your enquiry for Vrindavan Estates, Sarjapur. 2.5 or 3 BHK?' },
  { from: 'lead', text: '3 BHK. Need possession by Dec 2027.' },
  { from: 'priya', text: 'Got it. Budget range — does ₹1.4 – 1.8 Cr fit?' },
  { from: 'lead', text: '₹1.6 Cr range. HDFC loan pre-approved.' },
  { from: 'priya', text: 'Perfect fit. Saturday 11 AM site visit at Sarjapur — confirm?' },
  { from: 'lead', text: 'Confirmed. Send location.' },
  { from: 'priya', text: 'Done. Sales head Vinay will meet you. Reminder 1 hour before.' }
];

function TabQualify() {
  // visibleCount: how many bubbles are fully shown
  // typingNext: true while next bubble is "typing" before appearing
  const [visible, setVisible] = useState(1);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (visible >= QUALIFY_SCRIPT.length) {
      const reset = setTimeout(() => {
        setVisible(1);
        setTyping(false);
      }, 4500);
      return () => clearTimeout(reset);
    }
    const showTyping = setTimeout(() => setTyping(true), 500);
    const reveal = setTimeout(() => {
      setTyping(false);
      setVisible((v) => v + 1);
    }, 1300);
    return () => {
      clearTimeout(showTyping);
      clearTimeout(reveal);
    };
  }, [visible]);

  const nextBubble = QUALIFY_SCRIPT[visible];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
      {/* WhatsApp chat */}
      <div className="lg:col-span-3 rounded-xl border border-bld-edge bg-bld-ink overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-bld-edge bg-bld-ink-3">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-full bg-bld-lime/15 grid place-items-center border border-bld-edge-lime">
              <span className="font-mono text-[10px] text-bld-lime">P</span>
            </div>
            <div>
              <div className="text-[13px] text-bld-white">Priya · CFS</div>
              <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-bld-mute">
                AI Qualifier · WhatsApp
              </div>
            </div>
          </div>
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-bld-lime">ACTIVE</span>
        </div>
        <div className="flex-1 p-4 space-y-2.5 min-h-[260px]">
          {QUALIFY_SCRIPT.slice(0, visible).map((b, i) => (
            <ChatBubble key={i} from={b.from} text={b.text} />
          ))}
          <AnimatePresence>
            {typing && nextBubble && (
              <TypingDots from={nextBubble.from} />
            )}
          </AnimatePresence>
        </div>
        <div className="border-t border-bld-edge p-3 grid grid-cols-3 gap-2 text-[11px]">
          <Stat label="BUYER SCORE" value="88" lime />
          <Stat label="INTENT" value="HOT" />
          <Stat label="BOOKED" value="Sat 11 AM" />
        </div>
      </div>

      {/* Voice call */}
      <div className="lg:col-span-2 rounded-xl border border-bld-edge bg-bld-ink p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[13px] text-bld-white">
            <Phone className="h-3.5 w-3.5 text-bld-lime" strokeWidth={2} />
            Voice Agent
          </div>
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-bld-lime">LIVE</span>
        </div>
        <Waveform />
        <div className="rounded-md border border-bld-edge bg-bld-ink-2 p-3">
          <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-bld-mute mb-1">
            KANNADA · LIVE TRANSCRIPT
          </div>
          <p className="text-[13px] text-bld-soft leading-snug">
            &ldquo;Namaskara Lakshmi-avare, Whitefield project visit-ge Saturday convenient-aa?
            Loan-pre-approval helli koodisteeni.&rdquo;
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Stat label="BUYER INTENT" value="86%" lime />
          <Stat label="LANG" value="KN" />
        </div>
        <div className="mt-auto rounded-md border border-bld-edge bg-bld-ink-2 px-3 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mic className="h-3.5 w-3.5 text-bld-mute" strokeWidth={2} />
            <span className="text-[12px] text-bld-soft">Metered usage</span>
          </div>
          <span className="font-mono text-[12px] text-bld-white tabular-nums">₹16.40 / 4.1 min</span>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({ from, text }: { from: 'priya' | 'lead'; text: string }) {
  const isPriya = from === 'priya';
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: easeBcfs }}
      className={cn('flex', isPriya ? 'justify-start' : 'justify-end')}
    >
      <div
        className={cn(
          'max-w-[78%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug',
          isPriya
            ? 'bg-bld-ink-3 text-bld-soft border border-bld-edge rounded-tl-md'
            : 'bg-bld-lime/12 text-bld-white border border-bld-edge-lime rounded-tr-md'
        )}
      >
        {text}
      </div>
    </motion.div>
  );
}

/** Typing dots indicator — three pulsing dots in a bubble-shaped container. */
function TypingDots({ from }: { from: 'priya' | 'lead' }) {
  const isPriya = from === 'priya';
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -3 }}
      transition={{ duration: 0.3, ease: easeBcfs }}
      className={cn('flex', isPriya ? 'justify-start' : 'justify-end')}
    >
      <div
        className={cn(
          'rounded-2xl px-3 py-2.5 flex items-center gap-1',
          isPriya
            ? 'bg-bld-ink-3 border border-bld-edge rounded-tl-md'
            : 'bg-bld-lime/12 border border-bld-edge-lime rounded-tr-md'
        )}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className={cn('h-1.5 w-1.5 rounded-full', isPriya ? 'bg-bld-mute' : 'bg-bld-lime')}
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
            transition={{ duration: 0.9, ease: 'easeInOut', repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function Stat({ label, value, lime = false }: { label: string; value: string; lime?: boolean }) {
  return (
    <div className="rounded-md border border-bld-edge bg-bld-ink-2 px-2.5 py-2">
      <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-bld-mute">{label}</div>
      <div className={cn('font-display font-bold text-sm mt-0.5', lime ? 'text-bld-lime' : 'text-bld-white')}>
        {value}
      </div>
    </div>
  );
}

const WAVE_HEIGHTS = Array.from({ length: 36 }).map((_, i) =>
  Math.round(20 + Math.sin(i * 0.6) * 12 + Math.cos(i * 0.3) * 6)
);

function Waveform() {
  return (
    <div className="h-12 rounded-md border border-bld-edge bg-bld-ink-2 flex items-center justify-center gap-[3px] px-3 relative overflow-hidden">
      {WAVE_HEIGHTS.map((h, i) => (
        <span
          key={i}
          className="block w-[2px] rounded-full bg-bld-lime"
          style={{
            height: `${h}%`,
            animation: `bldWave 1.2s ease-in-out ${(i * 0.04).toFixed(2)}s infinite alternate`
          }}
        />
      ))}
      {/* Periodic "speech pulse" sweep */}
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-bld-lime/0 via-bld-lime/15 to-bld-lime/0"
        style={{ animation: 'bldSweep 4.5s ease-in-out infinite' }}
      />
      <style jsx>{`
        @keyframes bldWave {
          from {
            transform: scaleY(0.4);
            opacity: 0.5;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }
        @keyframes bldSweep {
          0%,
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: translateX(400%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

// ===========================================================================
// TAB 2 — CALCULATE · mini Sellout Calculator with smooth-counting outputs
// ===========================================================================

function useCountTo(target: number, duration = 0.5) {
  const [v, setV] = useState(target);
  const from = useRef(target);
  useEffect(() => {
    if (target === from.current) return;
    const start = performance.now();
    const initial = from.current;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setV(initial + (target - initial) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else from.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return v;
}

function TabCalculate() {
  const [units, setUnits] = useState(180);
  const [ticket, setTicket] = useState(1.2);
  const [months, setMonths] = useState(14);
  const [svToBook, setSvToBook] = useState(11);

  const totalGDV = units * ticket;
  const bookingsPerMonth = Math.round(units / months);
  const svPerMonth = Math.round((bookingsPerMonth * 100) / Math.max(1, svToBook));
  const gdvPerMonth = totalGDV / months;
  const estVoiceMins = Math.round(svPerMonth * 1.4);
  const voiceOverage = Math.max(0, estVoiceMins - ENGINE_TIER.voiceIncluded) * ENGINE_TIER.voiceRate;
  const cfsMonthly = ENGINE_TIER.retainer + voiceOverage;

  const svAnim = useCountTo(svPerMonth);
  const bookAnim = useCountTo(bookingsPerMonth);
  const costAnim = useCountTo(cfsMonthly);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
      <div className="lg:col-span-3 space-y-4">
        <Slider label="Total units" value={units} setValue={setUnits} min={20} max={500} suffix=" units" />
        <Slider
          label="Avg ticket size"
          value={ticket}
          setValue={setTicket}
          min={0.4}
          max={6}
          step={0.1}
          prefix="₹ "
          suffix=" Cr"
        />
        <Slider label="Months to sellout" value={months} setValue={setMonths} min={6} max={36} suffix=" mo" />
        <Slider label="SV → Booking %" value={svToBook} setValue={setSvToBook} min={4} max={25} suffix="%" />
      </div>

      <div className="lg:col-span-2 rounded-xl border border-bld-edge bg-bld-ink p-5 space-y-4">
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute">PROJECTION</div>
        <Metric label="Site visits / mo" value={String(Math.round(svAnim))} />
        <Metric label="Bookings / mo" value={String(Math.round(bookAnim))} />
        <Metric label="GDV / mo" value={`₹${gdvPerMonth.toFixed(1)} Cr`} />
        <div className="h-px bg-bld-edge" />
        <div className="space-y-2">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute">CFS THIS MONTH</div>
          <Metric label="Engine retainer" value={`₹${ENGINE_TIER.retainer.toLocaleString('en-IN')}`} sub />
          <Metric
            label={`Voice AI · ~${estVoiceMins} min (${ENGINE_TIER.voiceIncluded} incl.)`}
            value={`₹${voiceOverage.toLocaleString('en-IN')}`}
            sub
          />
          <div className="pt-2 border-t border-bld-edge flex items-end justify-between">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">TOTAL</div>
            <div className="font-display font-bold text-bld-lime text-2xl tabular-nums">
              ₹{Math.round(costAnim).toLocaleString('en-IN')}
            </div>
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
          {prefix}
          {value}
          {suffix}
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
          sub ? 'text-sm text-bld-soft' : 'text-xl text-bld-white'
        )}
      >
        {value}
      </span>
    </div>
  );
}

// ===========================================================================
// TAB 3 — CREATE · creative tiles grid with hover shimmer
// ===========================================================================

const CREATIVE_TILES = [
  { format: 'Reel', ratio: '9:16', image: '/builders-cfs/creatives/shree-aangan.jpg' },
  { format: 'Static', ratio: '1:1', image: '/builders-cfs/creatives/with-memory.png' },
  { format: 'Hero Film', ratio: '16:9', image: '/builders-cfs/creatives/with-memory-wide.png' },
  { format: 'UGC', ratio: '9:16', image: '/builders-cfs/creatives/above-noise.png' }
];

function TabCreate() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {CREATIVE_TILES.map((t, i) => (
          <CreativeTile key={i} {...t} />
        ))}
      </div>
      <div className="rounded-xl border border-bld-edge bg-bld-ink p-4 flex items-start gap-3">
        <ImageIcon className="h-4 w-4 text-bld-lime mt-0.5 shrink-0" strokeWidth={2} />
        <p className="text-[13px] text-bld-soft leading-relaxed">
          12 hero creatives / month + multi-aspect variants.{' '}
          <span className="text-bld-white">Indistinguishable from a ₹5L shoot.</span> 48-hour brief to cut. 4-language
          native lip-sync.
        </p>
      </div>
    </div>
  );
}

function CreativeTile({
  format,
  ratio,
  image
}: {
  format: string;
  ratio: string;
  image: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.35, ease: easeBcfs }}
      className="group relative overflow-hidden rounded-xl border border-bld-edge cursor-default bg-bld-ink"
      style={{
        aspectRatio: ratio === '9:16' ? '9 / 16' : ratio === '1:1' ? '1 / 1' : '16 / 9'
      }}
    >
      <Image
        src={image}
        alt={`${format} creative sample`}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover"
      />

      {/* Hover loading-shimmer sweep */}
      <span
        aria-hidden
        className="absolute inset-y-0 -left-1/3 w-1/3 z-10 bg-gradient-to-r from-transparent via-bld-lime/15 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[400%] transition-transform duration-1000 ease-out skew-x-[-12deg]"
      />

      <div className="absolute top-2.5 left-2.5 z-10 inline-flex items-center gap-1.5 rounded-full bg-bld-ink/80 backdrop-blur-sm border border-bld-edge px-2 py-0.5">
        <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-bld-lime">
          {format} · {ratio}
        </span>
      </div>
    </motion.div>
  );
}

// ===========================================================================
// TAB 4 — TRACK · dashboard with funnel + metrics + hover tooltips
// ===========================================================================

const FUNNEL = [
  { label: 'Leads', value: 100, color: '#A8A8A8', note: 'All inbound across channels' },
  { label: 'Qualified', value: 64, color: '#A8A8A8', note: 'Score ≥ 45 (warm + hot)' },
  { label: 'SV Walked', value: 22, color: '#9DCC00', note: 'Geotagged at site' },
  { label: 'Booked', value: 9, color: '#C8FF00', note: 'EOI / booking complete' }
];

function TabTrack() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
      <div className="lg:col-span-2 grid grid-cols-1 gap-3">
        <DashCard label="CPL" value="₹1,480" delta="-43%" deltaDir="down" isGood />
        <DashCard label="Site visits / wk" value="22" delta="+175%" deltaDir="up" isGood />
        <DashCard label="Sellout %" value="61%" delta="+18 pts" deltaDir="up" isGood />
      </div>
      <div className="lg:col-span-3 rounded-xl border border-bld-edge bg-bld-ink p-5">
        <div className="flex items-center justify-between mb-5">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute">
            ENGAGEMENT FUNNEL · LAST 30 DAYS
          </div>
          <LiveDot label="REALTIME" />
        </div>
        <div className="space-y-3">
          {FUNNEL.map((row, i) => {
            const max = FUNNEL[0].value;
            const pct = (row.value / max) * 100;
            return <FunnelRow key={row.label} row={row} pct={pct} index={i} />;
          })}
        </div>
        <div className="mt-5 pt-5 border-t border-bld-edge flex items-start gap-2 text-[12px] text-bld-soft">
          <CheckCircle2 className="h-4 w-4 text-bld-lime mt-0.5 shrink-0" strokeWidth={2} />
          <p>
            <span className="text-bld-white">9 bookings</span> from 100 leads.
            <span className="text-bld-mute"> 9% lead → booking, 41% SV-walk-in → booking.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function FunnelRow({
  row,
  pct,
  index
}: {
  row: (typeof FUNNEL)[number];
  pct: number;
  index: number;
}) {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex items-center gap-4 relative" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="w-24 font-mono text-[10px] tracking-[0.18em] uppercase text-bld-mute">{row.label}</div>
      <div className="flex-1 h-7 rounded-md bg-bld-ink-3 overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.9, ease: easeBcfs, delay: 0.1 + index * 0.08 }}
          className="h-full rounded-md"
          style={{ backgroundColor: row.color }}
        />
        <AnimatePresence>
          {hover && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 rounded-md border border-bld-edge bg-bld-ink-2 px-2.5 py-1.5 text-[11px] text-bld-soft whitespace-nowrap z-10 shadow-lg"
            >
              {row.note}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="w-12 text-right font-display font-bold text-bld-white tabular-nums text-sm">{row.value}</div>
    </div>
  );
}

function DashCard({
  label,
  value,
  delta,
  deltaDir,
  isGood
}: {
  label: string;
  value: string;
  delta: string;
  deltaDir: 'up' | 'down';
  isGood: boolean;
}) {
  const Arrow = deltaDir === 'up' ? TrendingUp : TrendingDown;
  const deltaColor = isGood ? 'text-bld-lime' : 'text-bld-warn';
  return (
    <div className="rounded-xl border border-bld-edge bg-bld-ink p-4">
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute">{label}</div>
      <div className="mt-2 flex items-end justify-between">
        <div className="font-display font-bold text-bld-white text-3xl tabular-nums">{value}</div>
        <div className={cn('inline-flex items-center gap-1 text-[12px] font-mono', deltaColor)}>
          <Arrow className="h-3.5 w-3.5" strokeWidth={2} />
          {delta}
        </div>
      </div>
    </div>
  );
}
