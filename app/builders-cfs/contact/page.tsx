/**
 * /builders-cfs/contact — WhatsApp-first contact.
 * Minimal fallback form for buyers who won't use WhatsApp.
 */
import type { Metadata } from 'next';
import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import {
  AmbientGlow,
  Accent,
  Eyebrow,
  Reveal,
  SectionHeading
} from '@/components/builders-cfs/Primitives';
import { WhatsAppCTA } from '@/components/builders-cfs/WhatsAppCTA';
import { ContactForm } from '@/components/builders-cfs/ContactForm';
import { TypedMessage } from '@/components/builders-cfs/TypedMessage';
import { BCFS } from '@/lib/builders-cfs/constants';

export const metadata: Metadata = {
  title: 'Contact — Talk to Priya | CFS for Builders',
  description: `WhatsApp-first contact. ${BCFS.whatsappDisplay} · ${BCFS.email} · ${BCFS.city}, India.`
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <AmbientGlow />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 md:pt-28 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>CONTACT</Eyebrow>
              </Reveal>
              <Reveal delay={1}>
                <SectionHeading as="h1" className="mt-5">
                  The fastest path is
                  <br />
                  <Accent>WhatsApp.</Accent>
                </SectionHeading>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-6 max-w-xl text-bld-soft text-[17px] md:text-[18px] leading-[1.65]">
                  Priya replies in under 60 seconds during working hours. She qualifies your project, sends a 4-page
                  audit if relevant, and books a walkthrough if we&apos;re a fit.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div className="mt-8">
                  <WhatsAppCTA context="contact" source="contact-hero" size="lg" pulseDot>
                    Talk to Priya on WhatsApp
                  </WhatsAppCTA>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={2}>
                <TypedMessage />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Contact details strip */}
      <section className="relative border-t border-bld-edge bg-bld-ink-2/40 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <Detail icon={MessageCircle} label="WHATSAPP" value={BCFS.whatsappDisplay} href={`https://wa.me/${BCFS.whatsappNumber}`} />
          <Detail icon={Mail} label="EMAIL" value={BCFS.email} href={`mailto:${BCFS.email}`} />
          <Detail icon={MapPin} label="HQ" value={`${BCFS.city}, India`} />
          <Detail icon={Clock} label="RESPONSE TIME" value="< 60 sec (working hrs)" />
        </div>
      </section>

      {/* Fallback form */}
      <section className="relative border-t border-bld-edge py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>FORM FALLBACK</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mt-5">
                Prefer not to WhatsApp?
                <br />
                <Accent>Send a note.</Accent>
              </SectionHeading>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-5 text-bld-soft text-[15px] leading-[1.65]">
                Goes into the same qualifier pipeline. Priya will message you back on WhatsApp within working hours.
              </p>
            </Reveal>
          </div>
          <Reveal delay={3}>
            <div className="mt-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
  href
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const body = (
    <div className="flex items-start gap-3">
      <div className="h-10 w-10 shrink-0 rounded-xl border border-bld-edge-lime bg-bld-lime-dim grid place-items-center">
        <Icon className="h-4 w-4 text-bld-lime" strokeWidth={2} />
      </div>
      <div>
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute">{label}</div>
        <div className="mt-1 text-bld-white text-[15px]">{value}</div>
      </div>
    </div>
  );
  if (href)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:text-bld-lime transition-colors">
        {body}
      </a>
    );
  return body;
}
