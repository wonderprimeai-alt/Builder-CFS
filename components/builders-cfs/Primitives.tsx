/**
 * Builders-CFS primitives: small visual atoms used everywhere.
 * Keep these dumb and presentational. No data fetching, no analytics.
 */
'use client';

import { AnimatePresence, motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { easeBcfs, reveal } from '@/lib/builders-cfs/motion';
import { cn } from '@/lib/builders-cfs/cn';

// ---------------------------------------------------------------------------
// Eyebrow — uppercase mono lime label above headlines.
// Optional `number` prop renders a structural "01 ·" indicator.
// ---------------------------------------------------------------------------
export function Eyebrow({
  children,
  className,
  align = 'left',
  number
}: {
  children: ReactNode;
  className?: string;
  align?: 'left' | 'center';
  number?: string;
}) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-bld-lime',
        align === 'center' && 'justify-center',
        className
      )}
    >
      {number ? (
        <>
          <span className="text-bld-lime/70 tabular-nums">{number}</span>
          <span className="text-bld-mute" aria-hidden>
            ·
          </span>
        </>
      ) : (
        <span className="h-px w-6 bg-bld-lime/40" aria-hidden />
      )}
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// SectionHeading — display headline with one lime keyword highlight slot
// ---------------------------------------------------------------------------
export function SectionHeading({
  children,
  className,
  as: Tag = 'h2'
}: {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}) {
  return (
    <Tag
      className={cn(
        'font-display font-semibold text-bld-white tracking-[-0.02em] leading-[1.04]',
        Tag === 'h1'
          ? 'text-[44px] md:text-[68px]'
          : 'text-[36px] md:text-[52px]',
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-bld-lime">{children}</span>;
}

// ---------------------------------------------------------------------------
// Reveal — scroll-reveal wrapper (16-24px translate + opacity), staggered
// ---------------------------------------------------------------------------
export function Reveal({
  children,
  delay = 0,
  className
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// StatTicker — count-up animated number + mono label
// ---------------------------------------------------------------------------
export function StatTicker({
  value,
  prefix = '',
  suffix = '',
  label,
  duration = 1.2,
  className
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const from = 0;
    const to = value;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      // expo-out approx
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(from + (to - from) * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <div ref={ref} className={cn('flex flex-col gap-1', className)}>
      <div className="font-display font-bold text-[28px] md:text-[36px] leading-none text-bld-white tabular-nums">
        {prefix}
        {display.toLocaleString('en-IN')}
        {suffix}
      </div>
      <div className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-bld-mute">
        {label}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// BentoCard — layered dark card with hover lift + mouse-tilt + lime edge.
// Tilt follows cursor (≤4deg), drops on prefers-reduced-motion.
// ---------------------------------------------------------------------------
export function BentoCard({
  children,
  className,
  glow = true,
  tilt = true
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  tilt?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [3, -3]), { stiffness: 180, damping: 22 });
  const ry = useSpring(useTransform(mx, [0, 1], [-3, 3]), { stiffness: 180, damping: 22 });
  const spotX = useTransform(mx, (v) => `${v * 100}%`);
  const spotY = useTransform(my, (v) => `${v * 100}%`);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (!tilt) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }
  function handleLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ y: -3 }}
      style={tilt ? { rotateX: rx, rotateY: ry, transformPerspective: 800 } : undefined}
      transition={{ duration: 0.45, ease: easeBcfs }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-bld-edge bg-bld-ink-3 p-6 md:p-8',
        'transition-colors duration-300 hover:border-bld-edge-lime',
        className
      )}
    >
      {glow && (
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-bld-card opacity-60" />
      )}
      {/* Cursor-follow lime spotlight on hover (live via CSS vars) */}
      {tilt && (
        <motion.div
          aria-hidden
          style={
            {
              ['--bld-x' as never]: spotX,
              ['--bld-y' as never]: spotY,
              background:
                'radial-gradient(280px circle at var(--bld-x) var(--bld-y), rgba(200,255,0,0.08), transparent 60%)'
            } as React.CSSProperties
          }
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      )}
      <div className="relative">{children}</div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Marquee — infinite horizontal scroll, pause on hover (CSS-driven, perf-cheap)
// ---------------------------------------------------------------------------
export function Marquee({
  children,
  speed = 30,
  className
}: {
  children: ReactNode;
  /** seconds for one full loop */
  speed?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden',
        '[mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]',
        className
      )}
    >
      <div
        className="flex w-max gap-12 animate-[bldMarquee_var(--bld-mq-d)_linear_infinite] group-hover:[animation-play-state:paused]"
        style={{ ['--bld-mq-d' as never]: `${speed}s` }}
      >
        {children}
        {children}
      </div>
      <style jsx>{`
        @keyframes bldMarquee {
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

// ---------------------------------------------------------------------------
// AmbientGlow — radial lime spotlight. Tracks cursor on desktop.
// ---------------------------------------------------------------------------
export function AmbientGlow({ className, follow = true }: { className?: string; follow?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!follow) return;
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: globalThis.MouseEvent) => {
      const r = el.getBoundingClientRect();
      setPos({ x: e.clientX - r.left, y: Math.max(0, e.clientY - r.top) });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [follow]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      <div className="absolute inset-0 bg-bld-spotlight" />
      {pos && (
        <div
          className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-500"
          style={{
            left: pos.x,
            top: pos.y,
            background:
              'radial-gradient(circle, rgba(200,255,0,0.06) 0%, transparent 60%)'
          }}
        />
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// WordReveal — splits children string into words, reveals each with stagger.
// Use for Display XL/L headlines. Triggers once when in view.
// ---------------------------------------------------------------------------
export function WordReveal({
  text,
  className,
  delay = 0,
  highlight,
  as: Tag = 'h2'
}: {
  text: string;
  className?: string;
  delay?: number;
  /** word(s) to render in lime accent */
  highlight?: string[];
  as?: 'h1' | 'h2' | 'h3' | 'p';
}) {
  const words = text.split(' ');
  const wrapClass = cn(
    'inline-block',
    Tag !== 'p' &&
      'font-display font-semibold text-bld-white tracking-[-0.02em] leading-[1.04]',
    Tag === 'h1' && 'text-[44px] md:text-[68px]',
    Tag === 'h2' && 'text-[36px] md:text-[52px]',
    Tag === 'h3' && 'text-[28px] md:text-[36px]',
    className
  );

  return (
    <Tag className={wrapClass}>
      {words.map((w, i) => {
        const isAccent = highlight?.includes(w.replace(/[.,!?]/g, ''));
        return (
          <span key={i} className="inline-block overflow-hidden align-baseline mr-[0.25em] last:mr-0">
            <motion.span
              initial={{ y: '100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                ease: easeBcfs,
                delay: delay + i * 0.04
              }}
              className={cn('inline-block', isAccent && 'text-bld-lime')}
            >
              {w}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}

// ---------------------------------------------------------------------------
// RotatingWord — cycles a list of strings every interval. For hero headlines.
// ---------------------------------------------------------------------------
export function RotatingWord({
  words,
  interval = 3500,
  className
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  // Width based on longest word for layout stability
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), '');

  return (
    <span className={cn('relative inline-block align-baseline text-bld-lime', className)}>
      <span className="invisible">{longest}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-110%', opacity: 0 }}
          transition={{ duration: 0.5, ease: easeBcfs }}
          className="absolute left-0 top-0 whitespace-nowrap"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// ---------------------------------------------------------------------------
// LiveDot — pulsing lime dot for "live" indicators
// ---------------------------------------------------------------------------
export function LiveDot({ label = 'LIVE' }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">
      <span className="relative inline-flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bld-lime opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-bld-lime" />
      </span>
      {label}
    </span>
  );
}
