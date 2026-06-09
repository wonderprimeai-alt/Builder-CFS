/**
 * Motion primitives for /builders-cfs.
 * Single easing curve (expo-out), reduced-motion safe.
 * Use these instead of ad-hoc transition objects so motion feels engineered.
 */

import type { Transition, Variants } from 'framer-motion';

/** Primary easing — cubic-bezier(0.22, 1, 0.36, 1) — expo-out feel. */
export const easeBcfs: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const reveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeBcfs, delay: i * 0.08 }
  })
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeBcfs } }
};

export const stagger = (delay = 0.08): Transition => ({
  staggerChildren: delay
});

/** Use in a hook to gate animations when user prefers reduced motion. */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
