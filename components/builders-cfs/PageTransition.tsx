/**
 * Route transition wrapper — 250ms fade + lime sweep at top.
 * Hooks into pathname changes to animate enter/exit.
 */
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { type ReactNode } from 'react';
import { easeBcfs } from '@/lib/builders-cfs/motion';

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.45, ease: easeBcfs }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Lime sweep on route change */}
      <AnimatePresence>
        <motion.div
          key={`sweep-${pathname}`}
          aria-hidden
          initial={{ scaleX: 0, transformOrigin: 'left' }}
          animate={{ scaleX: 1, transformOrigin: 'left' }}
          exit={{ scaleX: 1, transformOrigin: 'right', transition: { duration: 0.35, ease: easeBcfs } }}
          transition={{ duration: 0.45, ease: easeBcfs }}
          className="fixed top-0 left-0 right-0 h-[2px] bg-bld-lime/40 z-[59] pointer-events-none origin-left"
        />
      </AnimatePresence>
    </>
  );
}
