/**
 * Typed-out WhatsApp message preview — signature moment for /contact.
 */
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

export function TypedMessage({
  prefix = 'Hi Priya, ',
  options = [
    'I want to see the engine live for my project.',
    'we are launching 180 units in Whitefield.',
    'I want the 4-page funnel audit.',
    'walk me through the Engine plan in 10 minutes.'
  ],
  cyclePauseMs = 2200
}: {
  prefix?: string;
  options?: string[];
  cyclePauseMs?: number;
}) {
  const [optIdx, setOptIdx] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'pause' | 'erasing'>('typing');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(options[0]);
      return;
    }
    const full = options[optIdx];
    let id: ReturnType<typeof setTimeout>;
    if (phase === 'typing') {
      if (text.length < full.length) {
        id = setTimeout(() => setText(full.slice(0, text.length + 1)), 36);
      } else {
        id = setTimeout(() => setPhase('pause'), cyclePauseMs);
      }
    } else if (phase === 'pause') {
      id = setTimeout(() => setPhase('erasing'), 100);
    } else {
      if (text.length > 0) {
        id = setTimeout(() => setText(text.slice(0, -1)), 18);
      } else {
        setPhase('typing');
        setOptIdx((i) => (i + 1) % options.length);
      }
    }
    return () => clearTimeout(id);
  }, [text, phase, optIdx, options, cyclePauseMs]);

  return (
    <div className="rounded-2xl border border-bld-edge bg-bld-ink-2 overflow-hidden max-w-md">
      <div className="flex items-center justify-between px-4 py-3 border-b border-bld-edge bg-bld-ink-3">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-full bg-bld-lime/15 grid place-items-center border border-bld-edge-lime">
            <span className="font-mono text-[10px] text-bld-lime">P</span>
          </div>
          <div>
            <div className="text-[13px] text-bld-white">Priya · CFS</div>
            <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-bld-mute">online</div>
          </div>
        </div>
        <MessageCircle className="h-4 w-4 text-bld-lime" strokeWidth={2} />
      </div>
      <div className="p-4 min-h-[100px] flex items-end">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-bld-lime/12 border border-bld-edge-lime px-3.5 py-2.5 text-[13px] text-bld-white leading-snug">
          {prefix}
          {text}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
            className="inline-block w-[2px] h-[14px] align-text-bottom bg-bld-lime ml-0.5"
          />
        </div>
      </div>
      <div className="border-t border-bld-edge p-3 flex items-center gap-2">
        <div className="flex-1 h-9 rounded-full border border-bld-edge bg-bld-ink px-3.5 grid place-items-start text-[12px] text-bld-mute">
          <span className="self-center">Reply…</span>
        </div>
        <div className="h-9 w-9 rounded-full bg-bld-lime grid place-items-center">
          <Send className="h-3.5 w-3.5 text-bld-ink" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
