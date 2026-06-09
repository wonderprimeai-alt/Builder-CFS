/**
 * Per-page signature SVG moments — Pass 3.
 * Small, hand-drawn-feeling marks that make a page memorable.
 */
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { easeBcfs } from '@/lib/builders-cfs/motion';

// ---------------------------------------------------------------------------
// LeadArrow — animated arrow between "Lead → Site Visit → Booking" in subhead
// ---------------------------------------------------------------------------
export function LeadArrow() {
  return (
    <motion.svg
      width="22"
      height="10"
      viewBox="0 0 22 10"
      fill="none"
      aria-hidden
      className="inline-block align-middle"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: easeBcfs }}
    >
      <motion.path
        d="M0 5 H18 M14 1 L18 5 L14 9"
        stroke="#C8FF00"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeBcfs }}
      />
    </motion.svg>
  );
}

// ---------------------------------------------------------------------------
// EngineConnector — vertical line that draws between 4 stage cards on scroll
// Used on /the-engine page.
// ---------------------------------------------------------------------------
export function EngineConnector() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const height = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-px h-full hidden lg:block"
    >
      <motion.div style={{ height }} className="w-px bg-gradient-to-b from-bld-lime via-bld-lime/40 to-transparent" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// HandwrittenName — stroke-draw SVG for founder name (About page)
// ---------------------------------------------------------------------------
export function HandwrittenName({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-3">
      <motion.svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden
      >
        <motion.path
          d="M2 18 C5 12, 8 6, 11 2 C14 6, 17 12, 20 18"
          stroke="#C8FF00"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: easeBcfs }}
        />
      </motion.svg>
      <span>{name}</span>
    </span>
  );
}

// ---------------------------------------------------------------------------
// CompassRose — animated SVG with Bengaluru micro-market quadrants
// Used on /micro-markets index page.
// ---------------------------------------------------------------------------
export function CompassRose({ active = 'east' }: { active?: 'north' | 'south' | 'east' | 'west' }) {
  const quadrants = {
    north: { d: 'M50 50 L50 5 A45 45 0 0 1 95 50 Z', label: 'N' },
    east: { d: 'M50 50 L95 50 A45 45 0 0 1 50 95 Z', label: 'E' },
    south: { d: 'M50 50 L50 95 A45 45 0 0 1 5 50 Z', label: 'S' },
    west: { d: 'M50 50 L5 50 A45 45 0 0 1 50 5 Z', label: 'W' }
  } as const;
  return (
    <svg width="120" height="120" viewBox="0 0 100 100" aria-hidden className="text-bld-mute">
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.4" />
      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.3" />
      {Object.entries(quadrants).map(([key, q]) => (
        <path
          key={key}
          d={q.d}
          fill={key === active ? 'rgba(200,255,0,0.10)' : 'transparent'}
          stroke={key === active ? '#C8FF00' : 'currentColor'}
          strokeWidth={key === active ? 1 : 0.5}
          opacity={key === active ? 1 : 0.5}
        />
      ))}
      <circle cx="50" cy="50" r="2" fill="#C8FF00" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// CornerMark — small lime corner accent for hero strips
// ---------------------------------------------------------------------------
export function CornerMark({ className = '' }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <path d="M0 0 L20 0 L20 8 M0 0 L0 20 L8 20" stroke="#C8FF00" strokeWidth="1.2" opacity="0.6" />
    </svg>
  );
}
