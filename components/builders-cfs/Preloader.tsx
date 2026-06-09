/**
 * 400ms preloader — brand mark + thin lime progress bar.
 * Dismissable on scroll. Skipped entirely on prefers-reduced-motion.
 */
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { easeBcfs } from '@/lib/builders-cfs/motion';

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('bcfs-preload-shown')) {
      setDone(true);
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDone(true);
      sessionStorage.setItem('bcfs-preload-shown', '1');
      return;
    }
    const t = setTimeout(() => {
      setDone(true);
      sessionStorage.setItem('bcfs-preload-shown', '1');
    }, 600);
    const dismiss = () => {
      setDone(true);
      sessionStorage.setItem('bcfs-preload-shown', '1');
    };
    window.addEventListener('scroll', dismiss, { once: true, passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', dismiss);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          aria-hidden
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: easeBcfs }}
          className="fixed inset-0 z-[300] bg-bld-ink grid place-items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easeBcfs }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-[12px] tracking-[0.32em] uppercase text-bld-lime">CFS</span>
              <span className="h-3 w-px bg-bld-edge" aria-hidden />
              <span className="font-mono text-[12px] tracking-[0.32em] uppercase text-bld-soft">Builders</span>
            </div>
            <div className="h-[2px] w-32 overflow-hidden rounded-full bg-bld-ink-3">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.55, ease: easeBcfs }}
                className="h-full bg-bld-lime origin-left"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
