/**
 * Minimal fallback contact form for buyers who won't WhatsApp.
 * Submits via `mailto:` for now — wire to GHL inbound webhook before launch.
 */
'use client';

import { Send, Check } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { BCFS } from '@/lib/builders-cfs/constants';
import { bcfsEvents } from '@/lib/builders-cfs/events';
import { cn } from '@/lib/builders-cfs/cn';

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const subject = `[CFS] Enquiry · ${fd.get('company') || 'Builder'}`;
    const body = `Name: ${fd.get('name')}
Company: ${fd.get('company')}
Phone: ${fd.get('phone')}
Project: ${fd.get('project')}
Micro-market: ${fd.get('corridor')}
Units: ${fd.get('units')}
Message: ${fd.get('message')}`;
    const href = `mailto:${BCFS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    bcfsEvents.clickWhatsAppCTA('contact-form', 'contact');
    setTimeout(() => {
      setDone(true);
      setSubmitting(false);
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-bld-edge bg-bld-ink-2 p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field name="name" label="NAME" required />
        <Field name="company" label="COMPANY" required />
        <Field name="phone" label="PHONE" type="tel" required />
        <Field name="project" label="PROJECT NAME" />
        <Field name="corridor" label="MICRO-MARKET" placeholder="e.g. Sarjapur Road" />
        <Field name="units" label="UNITS" type="number" placeholder="e.g. 180" />
      </div>
      <div className="mt-5">
        <label className="block font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute mb-2">
          MESSAGE
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-xl border border-bld-edge bg-bld-ink px-4 py-3 text-[14.5px] text-bld-white placeholder:text-bld-mute focus:border-bld-edge-lime focus:outline-none focus:ring-1 focus:ring-bld-lime resize-none"
          placeholder="What you want to know"
        />
      </div>
      <div className="mt-3 text-[11px] text-bld-mute leading-relaxed">
        By submitting you agree to be contacted on the details above. DPDP-compliant — your data is used only to
        respond to this enquiry. See{' '}
        <a href="/builders-cfs/legal/privacy" className="text-bld-soft underline hover:text-bld-lime">
          privacy
        </a>
        .
      </div>
      <button
        type="submit"
        disabled={submitting || done}
        className={cn(
          'mt-6 inline-flex h-12 px-6 items-center justify-center gap-2 rounded-full font-medium text-sm transition-all',
          done
            ? 'bg-bld-lime/80 text-bld-ink cursor-default'
            : 'bg-bld-lime text-bld-ink hover:shadow-[0_0_40px_0_rgba(200,255,0,0.45)]'
        )}
      >
        {done ? (
          <>
            <Check className="h-4 w-4" strokeWidth={2.5} />
            Sent
          </>
        ) : (
          <>
            <Send className="h-4 w-4" strokeWidth={2} />
            {submitting ? 'Sending…' : 'Send message'}
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = 'text',
  required = false,
  placeholder
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute mb-2">
        {label}
        {required && <span className="text-bld-warn ml-1">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full h-11 rounded-xl border border-bld-edge bg-bld-ink px-4 text-[14.5px] text-bld-white placeholder:text-bld-mute focus:border-bld-edge-lime focus:outline-none focus:ring-1 focus:ring-bld-lime"
      />
    </label>
  );
}
