/**
 * Builder Bytes newsletter signup.
 * Wires to GHL email list at launch — currently a UI shell with success state.
 */
'use client';

import { Check, Mail } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { bcfsEvents } from '@/lib/builders-cfs/events';
import { cn } from '@/lib/builders-cfs/cn';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    bcfsEvents.newsletterSignup();
    // TODO: POST to GHL email list endpoint when wired.
    setDone(true);
  }

  return (
    <div className="rounded-3xl border border-bld-edge bg-bld-ink-2 p-6 md:p-8">
      <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">
        <Mail className="h-3.5 w-3.5" strokeWidth={2} />
        SUBSCRIBE
      </div>
      <h3 className="mt-4 font-display font-semibold text-bld-white text-[24px] md:text-[28px] leading-[1.15] tracking-[-0.01em]">
        One issue a month.
        <br />
        Four minutes.
      </h3>
      <p className="mt-3 text-[14px] text-bld-soft leading-[1.65]">
        Builder-only insights. No marketing fluff. Unsubscribe in one click.
      </p>

      {done ? (
        <div className="mt-6 rounded-xl border border-bld-edge-lime bg-bld-lime-dim/30 p-4 flex items-center gap-3">
          <Check className="h-5 w-5 text-bld-lime" strokeWidth={2.5} />
          <p className="text-[14px] text-bld-white">
            Subscribed. First issue lands next month.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@yourbuilder.com"
            className="w-full h-12 rounded-xl border border-bld-edge bg-bld-ink px-4 text-[14.5px] text-bld-white placeholder:text-bld-mute focus:border-bld-edge-lime focus:outline-none focus:ring-1 focus:ring-bld-lime"
          />
          <button
            type="submit"
            className={cn(
              'w-full inline-flex h-12 items-center justify-center gap-2 rounded-full bg-bld-lime text-bld-ink text-sm font-medium',
              'hover:shadow-[0_0_40px_0_rgba(200,255,0,0.45)] transition-all'
            )}
          >
            Subscribe to Builder Bytes
          </button>
          <p className="text-[11px] text-bld-mute leading-relaxed">
            DPDP-compliant. Used only for Builder Bytes. We won&apos;t pass your email anywhere else.
          </p>
        </form>
      )}
    </div>
  );
}
