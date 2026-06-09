/**
 * Custom cursor — desktop only.
 * Inner dot + outer ring follower. Scales / fills lime on interactive elements.
 * Respects prefers-reduced-motion and disables on touch devices.
 */
'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const ringX = useSpring(mx, { stiffness: 280, damping: 28, mass: 0.5 });
  const ringY = useSpring(my, { stiffness: 280, damping: 28, mass: 0.5 });

  const [active, setActive] = useState(false);
  const [variant, setVariant] = useState<'default' | 'hover' | 'cta'>('default');
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isFine = window.matchMedia('(pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFine || reduceMotion) return;
    setEnabled(true);
    setMounted(true);

    document.body.classList.add('bcfs-cursor-hidden');

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      setActive(true);
    };
    const onLeave = () => setActive(false);
    const onEnter = () => setActive(true);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest('a, button, [role="button"], input[type="range"]');
      if (!interactive) {
        setVariant('default');
        return;
      }
      if (interactive.matches('a[href*="wa.me"], button[type="submit"], [data-cta="solid"]')) {
        setVariant('cta');
      } else {
        setVariant('hover');
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseover', onOver);

    return () => {
      document.body.classList.remove('bcfs-cursor-hidden');
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseover', onOver);
    };
  }, [mx, my]);

  if (!enabled || !mounted) return null;

  const ringSize = variant === 'cta' ? 56 : variant === 'hover' ? 40 : 28;
  const dotSize = variant === 'cta' ? 0 : 5;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        aria-hidden
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          opacity: active ? 1 : 0
        }}
        transition={{ width: { duration: 0.25 }, height: { duration: 0.25 }, opacity: { duration: 0.2 } }}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[200] mix-blend-difference rounded-full border ${
          variant === 'cta' ? 'border-transparent bg-bld-lime/90' : 'border-bld-lime/80'
        }`}
      />
      {/* Inner dot */}
      <motion.div
        aria-hidden
        style={{
          x: mx,
          y: my,
          width: dotSize,
          height: dotSize,
          opacity: active && variant !== 'cta' ? 1 : 0
        }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[201] rounded-full bg-bld-lime"
      />
      <style jsx global>{`
        .bcfs-cursor-hidden,
        .bcfs-cursor-hidden a,
        .bcfs-cursor-hidden button,
        .bcfs-cursor-hidden [role='button'] {
          cursor: none !important;
        }
        @media (hover: none), (pointer: coarse) {
          .bcfs-cursor-hidden,
          .bcfs-cursor-hidden a,
          .bcfs-cursor-hidden button,
          .bcfs-cursor-hidden [role='button'] {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}
