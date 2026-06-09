/**
 * /builders-cfs/pricing — full pricing page.
 * Transparent. Setup + retainer + metered voice. Sellout Calculator. FAQ.
 */
import type { Metadata } from 'next';
import { Info } from 'lucide-react';
import {
  AmbientGlow,
  Accent,
  Eyebrow,
  Reveal,
  SectionHeading
} from '@/components/builders-cfs/Primitives';
import { PricingCard } from '@/components/builders-cfs/PricingCard';
import { SelloutCalculator } from '@/components/builders-cfs/SelloutCalculator';
import { FAQ } from '@/components/builders-cfs/FAQ';
import { CTASection } from '@/components/builders-cfs/CTASection';
import { WhatsAppCTA } from '@/components/builders-cfs/WhatsAppCTA';
import { Check } from 'lucide-react';
import { BCFS_PRICING, BCFS_ADDONS, BCFS_ACCELERATOR } from '@/lib/builders-cfs/constants';

export const metadata: Metadata = {
  title: 'Pricing — Setup + Retainer + What You Use | CFS for Builders',
  description:
    'Three tiers — Launchpad ₹34,999 + ₹49,999, Engine ₹99,999 + ₹1,24,999, Sellout ₹1,79,999 + ₹2,19,999. Differentiated by automation depth, pipelines and integrations. Voice AI metered at cost-plus. No 12-month lock-in.'
};

const PRICING_FAQ = [
  {
    q: 'Is there a lock-in?',
    a: 'No long-term lock-in. Setup covers the 7-day build; after Month 1 you can stop anytime. We bet on our own work — if the engine doesn\'t earn its retainer, you leave.'
  },
  {
    q: 'Who pays for ad spend?',
    a: 'You do — it\'s your media budget, and you keep full ownership of the ad accounts (Meta, Google). CFS manages the spend as a pass-through; no markup. You see every rupee at platform cost.'
  },
  {
    q: 'How is Voice AI billed?',
    a: 'Per minute, at cost-plus, metered transparently. Engine includes 200 min/mo; Sellout includes 500 min/mo. Overage is billed at the per-tier rate (₹14–18/min). Your dashboard shows minutes used live.'
  },
  {
    q: 'What actually changes between Launchpad, Engine, and Sellout?',
    a: 'Automation depth, pipeline count, and integration ceiling — not creative count or lead-gen volume. Launchpad runs 1-stage scoring + a single pipeline. Engine adds 3-stage scoring with intent decay, multi-pipeline routing, no-show recovery, and cold-lead revival flows. Sellout adds 5-stage scoring, unlimited parallel pipelines, NRI / loan / partner integrations, and a dedicated automation engineer.'
  },
  {
    q: 'What languages does the Voice AI speak?',
    a: 'Kannada, Hindi, Telugu, English on every tier. Arabic for Gulf-NRI campaigns (Sellout tier add-on). All native lip-sync — not subtitle overlays.'
  },
  {
    q: 'How fast can we launch?',
    a: '7 days from kickoff and asset handover for Launchpad and Engine. 14 days for Sellout (additional brand-film production). If you have your project shots + RERA paperwork ready, we go live the second week.'
  },
  {
    q: 'Can I change tiers mid-month?',
    a: 'Yes — upgrade any time (we prorate the retainer difference). Downgrades are at the next billing cycle.'
  },
  {
    q: 'Do you work with builders outside Bengaluru?',
    a: 'Built for Bengaluru and Tier-2 Indian cities. We have working benchmarks for Pune, Hyderabad, Mangaluru, and NCR. Talk to Priya about your market.'
  },
  {
    q: 'How is this different from a big agency?',
    a: 'No ₹5L minimum, no 60–90 day setup, no 12-month lock-in, regional voice AI, 48-hour creative output, and a single live dashboard instead of four. We replace the chaos of fragmented vendors — not the agency model.'
  }
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <AmbientGlow />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 md:pt-28 pb-16">
          <Reveal>
            <Eyebrow>PRICING</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <SectionHeading as="h1" className="mt-5 max-w-3xl">
              Buy the engine.
              <br />
              <Accent>Not the agency.</Accent>
            </SectionHeading>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-[620px] text-bld-soft text-[17px] md:text-[18px] leading-[1.65]">
              Three engines, separated by how much intelligence your sales motion needs — scoring depth, pipelines,
              languages, integrations. Creative and paid media plug in when you&apos;re ready. The system is yours to
              keep.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-4 max-w-2xl text-bld-mute text-[13.5px] leading-[1.6]">
              Voice AI metered at cost-plus · Conversation AI bundled · media spend is yours ·{' '}
              <span className="text-bld-soft">no lock-in after Month 1</span>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {BCFS_PRICING.map((tier, i) => (
              <Reveal key={tier.id} delay={i}>
                <PricingCard
                  id={tier.id}
                  name={tier.name}
                  forWho={tier.forWho}
                  useCase={tier.useCase}
                  setup={tier.setup}
                  retainer={tier.retainer}
                  voiceRate={tier.voiceRate}
                  voiceIncluded={tier.voiceIncluded}
                  features={tier.features}
                  featured={tier.featured}
                  badge={'badge' in tier ? tier.badge : undefined}
                  automationDepth={tier.automationDepth}
                />
              </Reveal>
            ))}
          </div>

          {/* Under-card footnote */}
          <Reveal delay={3}>
            <p className="mt-8 mx-auto max-w-3xl text-center text-[13px] text-bld-mute leading-[1.7]">
              All engines: 7-day launch · you own your CRM, leads, and ad accounts · no lock-in after Month 1 · GST
              extra. Voice AI billed monthly on actual usage. Media spend billed by the platform, directly to you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Extend Your Engine — add-on menu */}
      <section className="relative border-t border-bld-edge py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>EXTEND YOUR ENGINE</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mt-5">
                Add power
                <br />
                <Accent>as you grow.</Accent>
              </SectionHeading>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 text-bld-soft text-[16px] md:text-[17px] leading-[1.65]">
                The engine qualifies and converts. These bolt on when you want to feed it more — modular, monthly,
                cancel any add-on without touching your core.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 divide-y divide-bld-edge border-y border-bld-edge">
            {BCFS_ADDONS.map((addon, i) => (
              <Reveal key={addon.name} delay={i % 3}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-6 md:items-center group">
                  <div className="md:col-span-4">
                    <h3 className="font-display font-semibold text-bld-white text-[17px] md:text-[18px] leading-snug">
                      {addon.name}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] text-bld-soft leading-[1.55]">{addon.what}</p>
                  </div>
                  <div className="md:col-span-6">
                    <p className="font-mono text-[12px] tracking-[0.04em] text-bld-lime leading-[1.7] tabular-nums">
                      {addon.price}
                    </p>
                    {addon.note && (
                      <p className="mt-1 font-mono text-[10.5px] tracking-[0.06em] uppercase text-bld-mute">
                        {addon.note}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <WhatsAppCTA
                      context="pricing-engine"
                      source={`addon-${addon.name.toLowerCase().split(' ')[0].replace(/[^a-z]/g, '')}`}
                      variant="outline"
                      size="sm"
                      className="justify-center"
                      withArrow={false}
                    >
                      Add
                    </WhatsAppCTA>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Launch Accelerator bundle */}
          <Reveal delay={2}>
            <div className="mt-12 rounded-3xl border border-bld-edge-lime bg-bld-lime-dim/[0.06] shadow-[0_0_60px_-24px_rgba(200,255,0,0.4)] p-7 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-center">
                <div className="lg:col-span-8">
                  <span className="inline-flex items-center rounded-full bg-bld-lime px-3 py-1 font-mono text-[10px] tracking-[0.22em] uppercase text-bld-ink">
                    {BCFS_ACCELERATOR.badge}
                  </span>
                  <h3 className="mt-5 font-display font-semibold text-bld-white text-[26px] md:text-[32px] tracking-[-0.02em] leading-[1.1]">
                    {BCFS_ACCELERATOR.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-bld-soft text-[15.5px] md:text-[16px] leading-[1.65]">
                    {BCFS_ACCELERATOR.body}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2.5">
                    {BCFS_ACCELERATOR.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[13.5px] text-bld-soft">
                        <Check className="h-4 w-4 text-bld-lime shrink-0" strokeWidth={2.2} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <WhatsAppCTA
                    context="pricing-engine"
                    source="pricing-accelerator"
                    variant="solid"
                    size="md"
                    className="w-full lg:w-auto justify-center"
                    withArrow
                  >
                    Power up a launch
                  </WhatsAppCTA>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Metered usage explainer */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl border border-bld-edge bg-bld-ink-2 p-6 md:p-10">
              <div className="flex items-start gap-4">
                <Info className="h-5 w-5 text-bld-lime shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">
                    HOW METERING WORKS
                  </div>
                  <h2 className="mt-3 font-display font-semibold text-bld-white text-[24px] md:text-[28px] tracking-[-0.02em] leading-[1.15]">
                    Conversation AI is free. Voice AI is metered. <br />Media is pass-through.
                  </h2>
                  <ul className="mt-5 space-y-3 text-[15px] text-bld-soft leading-[1.65]">
                    <li>
                      <span className="text-bld-white">Conversation AI (WhatsApp + web chat)</span> — bundled. Costs us
                      almost nothing per conversation. Unlimited inbound on every tier.
                    </li>
                    <li>
                      <span className="text-bld-white">Voice AI</span> — real per-minute infra cost. You pay only for
                      what runs (₹14–18/min, tier-dependent). Bundled minutes on Engine + Sellout. Dashboard shows
                      live consumption.
                    </li>
                    <li>
                      <span className="text-bld-white">Media spend</span> — paid by you, to Meta / Google directly. CFS
                      manages it. No markup. You own the ad accounts.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Calculator */}
      <section className="relative py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <Reveal>
              <Eyebrow>CALCULATOR</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mt-5">
                Pulled out a calculator?
                <br />
                <Accent>We already built one.</Accent>
              </SectionHeading>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <SelloutCalculator />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>FAQ</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mt-5">
                Pricing,
                <br />
                <Accent>answered honestly.</Accent>
              </SectionHeading>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <div className="mt-10">
              <FAQ items={PRICING_FAQ} />
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="STILL HAVE QUESTIONS?"
        headline="Talk pricing"
        highlight="on WhatsApp."
        sub="Priya can walk you through the exact monthly cost for your project — no slides, no proposal cycle."
        ctaLabel="Talk pricing on WhatsApp"
        context="pricing-engine"
        source="pricing-final"
      />
    </>
  );
}
