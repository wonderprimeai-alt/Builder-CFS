/**
 * /builders-cfs/compare/vs-realatte — honest comparison.
 * Frames CFS vs the three operating models a Tier-2/2.5 builder faces.
 * We do NOT name agencies — comparison is about models, not brands.
 */
import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import {
  AmbientGlow,
  Accent,
  Eyebrow,
  Reveal,
  SectionHeading
} from '@/components/builders-cfs/Primitives';
import { ComparisonTable } from '@/components/builders-cfs/ComparisonTable';
import { CTASection } from '@/components/builders-cfs/CTASection';

export const metadata: Metadata = {
  title: 'How CFS compares to a big agency, an in-house team, or freelancers',
  description:
    'When a big agency is the right call. When an in-house team is. When CFS is. Three honest operating models compared, no name-calling. Built for the Tier-2/2.5 builder who needs speed, transparency and a single live dashboard.'
};

const WHEN_AGENCY = [
  'Mandate size ₹5L+/mo retainer for 12+ months',
  'Brand-building is a primary KPI, not sellout velocity',
  'You need 100+ creative pieces a month across many projects',
  'You have a full-time internal CMO to manage them',
  'Your projects are predominantly Tier-1 luxury (₹5 Cr+ ticket)'
];

const WHEN_CFS = [
  'You\'re a Tier-2 / 2.5 builder doing 50–300 unit launches',
  'You need outcome accountability, not impressions',
  'You want to be live in 7 days, not 90',
  'You want regional voice AI (Kannada / Hindi / Telugu / Arabic NRI)',
  'You want one live dashboard, not four siloed tools',
  'You want to know exactly what you pay — no retainer mystery'
];

export default function ComparePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <AmbientGlow />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 md:pt-28 pb-16">
          <Reveal>
            <Eyebrow>HONEST COMPARISON</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <SectionHeading as="h1" className="mt-5 max-w-3xl">
              Not a fifth vendor.
              <br />
              <Accent>The one that replaces the other four.</Accent>
            </SectionHeading>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-bld-soft text-[17px] leading-[1.65]">
              The Bengaluru builder typically faces three operating models — a big marketing agency, an in-house team,
              or a stitched-together stack of freelancers. CFS is built specifically for the Tier-2/2.5 builder who
              needs speed, transparency and a single live dashboard, without the lock-in. Different jobs. Different fits.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative border-t border-bld-edge py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <ComparisonTable />
          </Reveal>
        </div>
      </section>

      <section className="relative border-t border-bld-edge bg-bld-ink-2/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="rounded-3xl border border-bld-edge bg-bld-ink-3 p-6 md:p-8 h-full">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute">
                WHEN A BIG AGENCY IS THE RIGHT CALL
              </div>
              <h3 className="mt-4 font-display font-semibold text-bld-white text-[24px] md:text-[28px] leading-[1.15]">
                If you check all five, hire a big marketing agency.
              </h3>
              <ul className="mt-6 space-y-3">
                {WHEN_AGENCY.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14.5px] text-bld-soft leading-relaxed">
                    <Check className="h-4 w-4 text-bld-soft mt-0.5 shrink-0" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[13px] text-bld-mute leading-relaxed">
                Agencies in this tier are excellent at what they do — for the clients they&apos;re built for.
                We won&apos;t compete on their turf, and we don&apos;t need to.
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="rounded-3xl border border-bld-edge-lime bg-bld-lime-dim/30 p-6 md:p-8 h-full">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">
                WHEN CFS IS THE RIGHT CALL
              </div>
              <h3 className="mt-4 font-display font-semibold text-bld-white text-[24px] md:text-[28px] leading-[1.15]">
                If you check any three of these, CFS will work harder for you.
              </h3>
              <ul className="mt-6 space-y-3">
                {WHEN_CFS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14.5px] text-bld-soft leading-relaxed">
                    <Check className="h-4 w-4 text-bld-lime mt-0.5 shrink-0" strokeWidth={2.2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="HONEST CONVERSATION"
        headline="Not sure which fits?"
        highlight="Ask Priya."
        sub="She'll qualify your project against both models and recommend the right one — even if it's not us."
        ctaLabel="Talk to Priya on WhatsApp"
        context="compare"
        source="compare-final"
      />
    </>
  );
}
