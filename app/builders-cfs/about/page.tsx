/**
 * /builders-cfs/about — Wonder Creative Studio + founder story.
 */
import type { Metadata } from 'next';
import { Linkedin } from 'lucide-react';
import {
  AmbientGlow,
  Accent,
  Eyebrow,
  Reveal,
  SectionHeading,
  StatTicker,
  BentoCard
} from '@/components/builders-cfs/Primitives';
import { HandwrittenName } from '@/components/builders-cfs/SignatureArt';
import { CTASection } from '@/components/builders-cfs/CTASection';
import { BCFS } from '@/lib/builders-cfs/constants';

export const metadata: Metadata = {
  title: 'About — Wonder Creative Studio | CFS for Builders',
  description:
    'Built in Bengaluru by Wonder Creative Studio (Integrated Bubble Pvt Ltd). Tier-2/3 builders deserve Tier-1 growth infrastructure.'
};

const BELIEFS = [
  {
    title: 'Outcomes, not impressions.',
    body:
      'Site visits walked in. Bookings closed. Sellout %. That\'s the report. Everything else (CPMs, CTRs, reach) is plumbing — necessary but not the headline.'
  },
  {
    title: 'Speed compounds.',
    body:
      'A 7-day launch beats a 90-day perfect launch every time. Tier-2 buyers don\'t wait. Tier-2 markets move in days. We\'re built for that pace.'
  },
  {
    title: 'Transparency disarms.',
    body:
      'Show the math. Show the meter. Show the dashboard. The fastest way to earn trust is to remove every reason for the buyer to be suspicious.'
  },
  {
    title: 'Regional language is not a feature.',
    body:
      'It\'s the product. Kannada, Hindi, Telugu — native, not subtitle. Tier-2 buyers convert in their language, not yours.'
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <AmbientGlow />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 md:pt-28 pb-16">
          <Reveal>
            <Eyebrow>ABOUT</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <SectionHeading as="h1" className="mt-5 max-w-3xl">
              Tier-2 builders deserve
              <br />
              <Accent>Tier-1 growth infrastructure.</Accent>
            </SectionHeading>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-bld-soft text-[17px] md:text-[18px] leading-[1.65]">
              CFS is a {BCFS.parentStudio} product, built in {BCFS.city}. We exist because the Tier-2/3 builder
              shouldn&apos;t have to choose between a five-vendor circus and a ₹5L+/mo agency lock-in.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The thesis */}
      <section className="relative border-t border-bld-edge py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>THE THESIS</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mt-5">
                Tier-2 builders don&apos;t need
                <br />
                <Accent>a fifth vendor.</Accent>
              </SectionHeading>
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <p className="text-bld-soft text-[16px] md:text-[17px] leading-[1.75]">
                Almost every ₹40–100 Cr Bengaluru builder we&apos;ve met runs the same fragmented stack: a freelance Meta-ads
                operator, a cousin&apos;s design studio, a sales junior on a personal WhatsApp, and an MD who can&apos;t leave the
                site office. The math doesn&apos;t work. Lead response is 6 hours when it should be 60 seconds. Creative
                takes 3 weeks when it should take 48 hours. Voice calls are made in English to buyers who&apos;d rather speak
                Kannada.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-bld-soft text-[16px] md:text-[17px] leading-[1.75]">
                We built CFS because Tier-1 agencies won&apos;t solve this — their economics don&apos;t allow it. And
                Tier-2 freelancers can&apos;t solve it — their depth doesn&apos;t allow it. Someone has to install one
                stack that replaces four vendors, ship in 7 days, and price like a product, not a retainer mystery.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="relative border-t border-bld-edge bg-bld-ink-2/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>HOW WE THINK</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mt-5">
                Four beliefs.
                <br />
                <Accent>Built into the product.</Accent>
              </SectionHeading>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {BELIEFS.map((b, i) => (
              <Reveal key={b.title} delay={i}>
                <BentoCard className="h-full">
                  <h3 className="font-display font-semibold text-bld-white text-[22px] tracking-[-0.01em]">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] text-bld-soft leading-[1.7]">{b.body}</p>
                </BentoCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="relative border-t border-bld-edge py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <Reveal>
                <div className="aspect-square rounded-3xl border border-bld-edge bg-gradient-to-br from-[#1a2a1a] via-[#0e1a0e] to-bld-ink overflow-hidden grid place-items-center">
                  <div className="text-center">
                    <div className="font-display font-bold text-bld-lime text-[80px] leading-none">
                      {BCFS.founderName[0]}
                    </div>
                    <div className="mt-2 font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute">
                      FOUNDER
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <Eyebrow>THE FOUNDER</Eyebrow>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="mt-5 font-display font-semibold text-bld-white text-[40px] md:text-[52px] tracking-[-0.02em] leading-[1.04]">
                  <HandwrittenName name={BCFS.founderName} />
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-2 font-mono text-[11px] tracking-[0.22em] uppercase text-bld-soft">
                  {BCFS.founderRole}
                </p>
              </Reveal>
              <Reveal delay={3}>
                <p className="mt-6 text-bld-soft text-[16px] md:text-[17px] leading-[1.75]">
                  Founder of {BCFS.parentStudio} ({BCFS.legalEntity}), built in {BCFS.city}. {BCFS.founderName} works on the
                  things you see: the engine, the creative bar, the language coverage. He also picks up Priya&apos;s
                  WhatsApp every once in a while.
                </p>
              </Reveal>
              <Reveal delay={4}>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="https://wonderstudio.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-bld-edge text-bld-soft hover:border-bld-edge-lime hover:text-bld-lime transition-colors text-sm"
                  >
                    {BCFS.parentStudio}
                  </a>
                  <a
                    href="https://www.linkedin.com/in/priyabrata-roy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-bld-edge text-bld-soft hover:border-bld-edge-lime hover:text-bld-lime transition-colors text-sm"
                  >
                    <Linkedin className="h-3.5 w-3.5" strokeWidth={2} />
                    LinkedIn
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="relative border-t border-bld-edge bg-bld-ink-2/40 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <StatTicker value={1} suffix=" live" label="ENGAGEMENT" />
            <StatTicker value={3} suffix=" pilots" label="IN MOTION" />
            <StatTicker value={4} suffix=" langs" label="VOICE AI" />
            <StatTicker value={7} suffix=" days" label="LAUNCH SLA" />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="MEET THE PRODUCT"
        headline="The fastest way to know us"
        highlight="is to talk to Priya."
        sub="She's been trained on the same playbook we install for our builders. Treat the conversation as a free demo."
        ctaLabel="Talk to Priya on WhatsApp"
        context="contact"
        source="about-final"
      />
    </>
  );
}
