/**
 * FAQ accordion — builder-specific objection handling.
 * Single-open accordion, smooth expand, keyboard accessible.
 */
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { easeBcfs } from '@/lib/builders-cfs/motion';
import { cn } from '@/lib/builders-cfs/cn';

export interface FAQItem {
  q: string;
  a: string;
}

export function FAQ({ items, className }: { items: FAQItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn('divide-y divide-bld-edge border-y border-bld-edge', className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between py-5 md:py-6 text-left transition-colors hover:text-bld-lime"
            >
              <span
                className={cn(
                  'font-display text-[18px] md:text-[20px] tracking-[-0.01em] pr-6 transition-colors',
                  isOpen ? 'text-bld-white' : 'text-bld-soft group-hover:text-bld-white'
                )}
              >
                {item.q}
              </span>
              <Plus
                className={cn(
                  'h-4 w-4 shrink-0 transition-all duration-300',
                  isOpen ? 'rotate-45 text-bld-lime' : 'text-bld-mute'
                )}
                strokeWidth={2}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: easeBcfs }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-10 text-[15px] leading-[1.65] text-bld-soft">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
