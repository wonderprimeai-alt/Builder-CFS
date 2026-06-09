/**
 * /builders-cfs/resources/builder-bytes — newsletter / insights hub.
 */
import type { Metadata } from 'next';
import { ArrowRight, Mail } from 'lucide-react';
import {
  AmbientGlow,
  Accent,
  Eyebrow,
  Reveal,
  SectionHeading,
  BentoCard
} from '@/components/builders-cfs/Primitives';
import { NewsletterSignup } from '@/components/builders-cfs/NewsletterSignup';
import { CTASection } from '@/components/builders-cfs/CTASection';

export const metadata: Metadata = {
  title: 'Builder Bytes — Insights for Indian Real Estate Marketing | CFS',
  description:
    'Short, sharp insights for builder marketing. CPL benchmarks by micro-market, K-RERA compliance, what\'s working on Meta this month, NRI campaign teardowns.'
};

const PAST_ISSUES = [
  {
    no: 'BB · 04',
    date: 'Apr 2026',
    title: 'Sarjapur qualified CPL is breaking ₹1,800 again — here\'s why.',
    blurb:
      'Meta CPM in the east corridor jumped 14% in March. Three of the four big launches retargeted the same audience. Here\'s what to do instead.'
  },
  {
    no: 'BB · 03',
    date: 'Mar 2026',
    title: 'K-RERA marketing compliance: the 5 mistakes we still see.',
    blurb:
      'Most builder ads we audit miss at least 2 mandatory disclosures. Here\'s the checklist + a template for compliant Meta + Google copy.'
  },
  {
    no: 'BB · 02',
    date: 'Feb 2026',
    title: 'Gulf-NRI campaigns: Arabic creative + Hindi voice = 4× conversion.',
    blurb:
      'A teardown of a Mangaluru launch that held ₹3.2K qualified CPL on Gulf-NRI. Mix of formats, languages, and the qualifier configuration that closed.'
  },
  {
    no: 'BB · 01',
    date: 'Jan 2026',
    title: 'The 4-page funnel audit, explained.',
    blurb:
      'What we look at when a builder MD says "fix my marketing." Where leads leak, how response time eats your CPL, and the projection model we use.'
  }
];

export default function BuilderBytesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <AmbientGlow />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 md:pt-28 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>BUILDER BYTES</Eyebrow>
              </Reveal>
              <Reveal delay={1}>
                <SectionHeading as="h1" className="mt-5">
                  Short, sharp,
                  <br />
                  <Accent>builder-only.</Accent>
                </SectionHeading>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-6 max-w-2xl text-bld-soft text-[17px] md:text-[18px] leading-[1.65]">
                  Monthly. 4-minute read. CPL benchmarks by micro-market, K-RERA marketing compliance, what&apos;s
                  working on Meta this month, NRI campaign teardowns. No marketing fluff. No 50-page reports.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={2}>
                <NewsletterSignup />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Past issues */}
      <section className="relative border-t border-bld-edge py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>PAST ISSUES</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mt-5">
                Archive.
                <br />
                <Accent>Newest first.</Accent>
              </SectionHeading>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {PAST_ISSUES.map((issue, i) => (
              <Reveal key={issue.no} delay={i}>
                <BentoCard className="h-full">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">
                      {issue.no}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-bld-mute">
                      {issue.date}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-bld-white text-[20px] md:text-[22px] leading-tight tracking-[-0.01em]">
                    {issue.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-bld-soft leading-[1.65]">{issue.blurb}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-bld-lime text-[13px] font-medium opacity-60">
                    Read issue
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                  </div>
                </BentoCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="WANT MORE?"
        headline="WhatsApp delivers"
        highlight="faster than email."
        sub="If you'd rather a live conversation about your specific funnel — Priya is one message away."
        ctaLabel="Talk to Priya on WhatsApp"
        context="contact"
        source="bytes-final"
      />
    </>
  );
}
