/**
 * /builders-cfs — HOME.
 * Goal: in one scroll, convince a sceptical builder MD that CFS is the most
 * serious growth system he's seen, and get him onto WhatsApp.
 */
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageSquare, Mic, Layers, BarChart3 } from 'lucide-react';
import {
  Eyebrow,
  SectionHeading,
  Accent,
  Reveal,
  StatTicker,
  BentoCard,
  Marquee,
  AmbientGlow,
  RotatingWord,
  WordReveal
} from '@/components/builders-cfs/Primitives';
import { LeadArrow } from '@/components/builders-cfs/SignatureArt';
import { WhatsAppCTA } from '@/components/builders-cfs/WhatsAppCTA';
import { HeroShowcase } from '@/components/builders-cfs/HeroShowcase';
import { ComparisonTable } from '@/components/builders-cfs/ComparisonTable';
import { PricingCard } from '@/components/builders-cfs/PricingCard';
import { CTASection } from '@/components/builders-cfs/CTASection';
import { BCFS, BCFS_PRICING } from '@/lib/builders-cfs/constants';

export default function BuildersCfsHome() {
  return (
    <>
      {/* ===================================================================
          1. HERO
          =================================================================== */}
      <section className="relative overflow-hidden">
        <AmbientGlow />
        <div className="absolute inset-0 bg-bld-grid [background-size:42px_42px] opacity-[0.35] mask-fade-bottom" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 md:pt-28 pb-20 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>FOR BENGALURU BUILDERS</Eyebrow>
              </Reveal>
              <Reveal delay={1}>
                <h1 className="mt-5 font-display font-semibold text-bld-white tracking-[-0.02em] leading-[1.02] text-[44px] md:text-[68px]">
                  The Sellout Engine
                  <br />
                  for{' '}
                  <RotatingWord
                    className="text-[44px] md:text-[68px] font-display font-semibold tracking-[-0.02em]"
                    words={['Builders.', 'Tier-2 builders.', 'Sceptical MDs.', 'Bengaluru.']}
                    interval={3500}
                  />
                </h1>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-6 text-bld-soft text-[17px] md:text-[18px] leading-[1.6] max-w-xl">
                  AI sales team for builders without a CMO.{' '}
                  <span className="text-bld-white inline-flex items-center gap-1.5">
                    Lead <LeadArrow /> Site Visit <LeadArrow /> Booking.
                  </span>{' '}
                  Built once. Runs forever.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <WhatsAppCTA context="home-hero" source="home-hero" size="lg" pulseDot>
                    Talk to Priya on WhatsApp
                  </WhatsAppCTA>
                  <Link
                    href="#engine"
                    className="inline-flex items-center justify-center gap-2 h-14 px-6 rounded-full border border-bld-edge text-bld-white hover:border-bld-edge-lime hover:text-bld-lime transition-colors text-[15px]"
                  >
                    See the Engine
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={4}>
                <div className="mt-12 grid grid-cols-3 gap-6 border-t border-bld-edge pt-8 max-w-md">
                  {BCFS.heroStats.map((s) => (
                    <StatTicker
                      key={s.label}
                      value={s.value}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      label={s.label}
                    />
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={2}>
                <HeroShowcase />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. TRUST MARQUEE
          =================================================================== */}
      <section className="border-y border-bld-edge bg-bld-ink-2/40 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute text-center mb-6">
            {BCFS.trustMarqueeLabel}
          </div>
          <Marquee speed={36}>
            {BCFS.trustMarqueeItems.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="inline-flex items-center gap-2.5 shrink-0"
              >
                <span
                  className={
                    item.kind === 'live'
                      ? 'relative h-1.5 w-1.5 rounded-full bg-bld-lime shadow-[0_0_8px_rgba(200,255,0,0.7)]'
                      : item.kind === 'pilot'
                        ? 'h-1.5 w-1.5 rounded-full bg-bld-warn/80'
                        : 'h-1.5 w-1.5 rounded-full bg-bld-mute/40'
                  }
                >
                  {item.kind === 'live' && (
                    <span className="absolute inset-0 rounded-full bg-bld-lime animate-ping opacity-60" />
                  )}
                </span>
                <span
                  className={
                    item.kind === 'live'
                      ? 'font-display text-bld-white text-[18px] md:text-[22px]'
                      : item.kind === 'pilot'
                        ? 'font-display text-bld-soft text-[18px] md:text-[22px]'
                        : 'font-mono text-bld-mute text-[12px] tracking-[0.18em] uppercase'
                  }
                >
                  {item.name}
                </span>
                <span className="text-bld-mute mx-4" aria-hidden>
                  /
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ===================================================================
          3. WHY LAUNCHES STALL
          =================================================================== */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>WHY LAUNCHES STALL</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mt-5">
                It&apos;s never the market.
                <br />
                It&apos;s <Accent>the four hours between intent and reply.</Accent>
              </SectionHeading>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 text-bld-soft text-[16.5px] leading-[1.65] max-w-2xl">
                Bengaluru buyers don&apos;t wait. By the time your sales head opens WhatsApp at 9 PM,
                the lead has visited two other projects. CFS closes that gap to under 90 seconds — every
                lead, every channel, every language.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {PROBLEMS.map((p, i) => (
              <Reveal key={p.title} delay={i + 1}>
                <BentoCard className="h-full">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-warn">
                    {p.tag}
                  </div>
                  <h3 className="mt-3 font-display font-semibold text-bld-white text-[22px] leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-[14px] text-bld-soft leading-relaxed">
                    {p.body}
                  </p>
                </BentoCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={4}>
            <div className="mt-8 rounded-2xl border border-bld-edge-lime bg-bld-lime-dim/30 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5">
              <div className="flex-1">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">
                  WHAT CFS DOES
                </div>
                <h3 className="mt-2 font-display font-semibold text-bld-white text-[22px] md:text-[26px] leading-tight">
                  One engine. Every lead. Every minute of the day.
                </h3>
                <p className="mt-2 text-[14.5px] text-bld-soft leading-relaxed">
                  WhatsApp + Voice AI qualifier (3–5 languages), unified CRM pipeline, multi-stage
                  scoring, no-show recovery, cold-lead revival. Lead spend stays yours; everything
                  around it runs on autopilot. No lock-in after Month 1.
                </p>
              </div>
              <WhatsAppCTA context="home-hero" source="home-problem" size="md">
                See the Engine
              </WhatsAppCTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================================================================
          4. THE ENGINE (overview bento)
          =================================================================== */}
      <section id="engine" className="relative border-t border-bld-edge bg-bld-ink-2/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>THE ENGINE</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mt-5">
                Four jobs.
                <br />
                <Accent>One stack.</Accent> Zero gaps.
              </SectionHeading>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-5 text-bld-soft text-[16px] md:text-[17px] leading-relaxed">
                The full-funnel instrumentation that replaces the freelancer + agency + intern stack.
                One pipeline. One dashboard. Outcome accountable.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ENGINE_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i}>
                <BentoCard className="h-full">
                  <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">
                    {i + 1}/4
                    <span className="text-bld-mute">/</span>
                    <step.icon className="h-3.5 w-3.5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-bld-white text-[20px] leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] text-bld-soft leading-relaxed">
                    {step.body}
                  </p>
                </BentoCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={4}>
            <div className="mt-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between rounded-2xl border border-bld-edge bg-bld-ink p-6">
              <div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute">
                  THE STACK WE INSTALL · 7 DAYS
                </div>
                <p className="mt-2 text-bld-soft text-[14.5px]">
                  CRM layer · Conversation AI · Voice AI · Creative Studio · Automation layer.
                </p>
              </div>
              <Link
                href="/builders-cfs/the-engine"
                className="inline-flex items-center gap-2 text-bld-lime hover:gap-3 transition-all text-sm font-medium"
              >
                Open the engine
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================================================================
          5. CREATIVE STUDIO TEASER
          =================================================================== */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>THE CREATIVE STUDIO</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mt-5">
                The most advanced{' '}
                <Accent>AI creative studio</Accent>
                <br />
                for Indian real estate.
              </SectionHeading>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-5 text-bld-soft text-[16px] leading-relaxed">
                We don&apos;t make 60 reels a month. We make 12 that look like ₹5L shoots —
                shipped in 48 hours. Native Kannada / Hindi / Telugu lip-sync. Arabic for Gulf-NRI.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-bld-edge pt-6 max-w-md">
                <StatTicker value={48} suffix="hr" label="BRIEF → CUT" />
                <StatTicker value={30} prefix="1/" suffix="th" label="OF A SHOOT" />
                <StatTicker value={4} suffix=" langs" label="NATIVE LIP-SYNC" />
              </div>
            </Reveal>
            <Reveal delay={4}>
              <div className="mt-8">
                <WhatsAppCTA context="creative-studio" source="home-creative">
                  See sample creative
                </WhatsAppCTA>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { ratio: '9:16', format: 'Reel', image: '/builders-cfs/creatives/run-home.png' },
                  { ratio: '1:1', format: 'Static', image: '/builders-cfs/creatives/softens.png' },
                  { ratio: '9:16', format: 'Hero Film', image: '/builders-cfs/creatives/hamsa.png' },
                  { ratio: '16:9', format: 'Static', image: '/builders-cfs/creatives/penthouse.png' }
                ].map((tile, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl border border-bld-edge bg-bld-ink"
                    style={{
                      aspectRatio:
                        tile.ratio === '9:16'
                          ? '9 / 14'
                          : tile.ratio === '1:1'
                            ? '1 / 1'
                            : '16 / 9'
                    }}
                  >
                    <Image
                      src={tile.image}
                      alt={`${tile.format} creative sample`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 30vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-bld-ink/80 backdrop-blur-sm border border-bld-edge px-2.5 py-1">
                      <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">
                        {tile.format} · {tile.ratio}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================================================================
          6. COMPARISON
          =================================================================== */}
      <section className="relative border-t border-bld-edge bg-bld-ink-2/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>HONEST COMPARISON</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mt-5">
                Not a fifth vendor.
                <br />
                <Accent>The one that replaces the other four.</Accent>
              </SectionHeading>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <div className="mt-12">
              <ComparisonTable />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================================================================
          7. PRICING PREVIEW
          =================================================================== */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>PRICING</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mt-5">
                Transparent.
                <br />
                <Accent>Setup + retainer + what you use.</Accent>
              </SectionHeading>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-5 text-bld-soft text-[16px] leading-relaxed">
                Three tiers. Voice AI is metered at cost-plus. Conversation AI is bundled.
                Media spend is yours. No lock-in after Month 1.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {BCFS_PRICING.map((tier, i) => (
              <Reveal key={tier.id} delay={i + 1}>
                <PricingCard
                  id={tier.id}
                  name={tier.name}
                  forWho={tier.forWho}
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

          {/* Pricing methodology footnote */}
          <Reveal delay={4}>
            <div className="mt-10 rounded-2xl border border-bld-edge bg-bld-ink-2/60 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5">
              <div className="flex-1">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute">
                  HOW THE TIERS DIFFER
                </div>
                <h3 className="mt-2 font-display font-semibold text-bld-white text-[22px] md:text-[26px] leading-tight">
                  Automation depth. Pipelines. Integrations.
                </h3>
                <p className="mt-2 text-[14.5px] text-bld-soft leading-relaxed">
                  Tiers don&apos;t differ on creative count or lead-gen volume — those scale the
                  same across all three. What changes is scoring depth (1 → 3 → 5 stages), pipeline
                  count (1 → multi → unlimited), and integration ceiling (basic → full → custom ERP).
                </p>
              </div>
              <Link
                href="/builders-cfs/pricing"
                className="inline-flex items-center gap-2 text-bld-lime hover:gap-3 transition-all text-sm font-medium shrink-0"
              >
                See the full breakdown
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================================================================
          8. CASE STUDIES PREVIEW
          =================================================================== */}
      <section className="relative border-t border-bld-edge bg-bld-ink-2/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>LIVE ENGAGEMENTS</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mt-5">
                Eight engines live.
                <br />
                <Accent>One running on your corridor.</Accent>
              </SectionHeading>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-5 text-bld-soft text-[15.5px] leading-relaxed max-w-2xl">
                Each builder runs the same stack, configured to their corridor + buyer profile.
                Stats below are 30-day rolling, pulled live from the engine. Two more start next
                month.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CASES.map((c, i) => (
              <Reveal key={c.project} delay={i}>
                <BentoCard className="h-full">
                  <div className="flex items-center justify-between">
                    <span
                      className={
                        c.kind === 'live'
                          ? 'inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime'
                          : 'font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute'
                      }
                    >
                      {c.kind === 'live' && (
                        <span className="relative h-1.5 w-1.5 rounded-full bg-bld-lime shadow-[0_0_8px_rgba(200,255,0,0.7)]">
                          <span className="absolute inset-0 rounded-full bg-bld-lime animate-ping opacity-60" />
                        </span>
                      )}
                      {c.kind === 'live' ? 'LIVE · 30D' : 'BENCHMARK'}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display font-semibold text-bld-white text-[18px] leading-tight">
                    {c.project}
                  </h3>
                  <p className="mt-1 text-[12px] text-bld-mute">{c.corridor}</p>
                  <div className="mt-5 space-y-2 border-t border-bld-edge pt-4">
                    {c.stats.map((s) => (
                      <div key={s.label} className="flex items-baseline justify-between">
                        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-bld-mute">
                          {s.label}
                        </span>
                        <span className="font-display font-bold text-bld-white text-[15px] tabular-nums">
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </BentoCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          9. FINAL CTA
          =================================================================== */}
      <CTASection
        eyebrow="GET STARTED"
        headline="Your next sellout"
        highlight="starts on WhatsApp."
        sub="Talk to Priya now. She'll qualify your project, share a 4-page audit of your current funnel, and book a walkthrough if we're a fit. No deck. No pitch."
        ctaLabel="Get the audit on WhatsApp"
        context="home-final"
        source="home-final"
        footnote="No calendar. No form. The product is the demo."
      />
    </>
  );
}

// ---------------------------------------------------------------------------
// Static content blocks (kept inline for legibility; promote to MDX later)
// ---------------------------------------------------------------------------

const PROBLEMS = [
  {
    tag: 'THE 6-HOUR REPLY GAP',
    title: 'A lead enquires at 11 PM.',
    body:
      'Your sales head opens it at 7 AM. Eight hours of silence. Half the leads have already booked a site visit somewhere else by then.'
  },
  {
    tag: '200 WHATSAPPS · ONE JUNIOR',
    title: 'No one routes the hot ones.',
    body:
      'Every lead — junk, hot, NRI — lands in the same inbox. Your junior tries to triage. Hot buyers wait. Tyre-kickers get called twice.'
  },
  {
    tag: 'EVERY VENDOR IN A SILO',
    title: 'Four dashboards. Zero answers.',
    body:
      'Meta has CPL. Google has impressions. CRM has stage. Sales head has gut feel. No one can tell you why 38% of site visits no-show.'
  }
] as const;

const ENGINE_STEPS = [
  {
    icon: Layers,
    title: 'Capture',
    body:
      'Unified across Meta, Google, Magicbricks, 99acres, WhatsApp, walk-in QR. One pipeline. Nothing missed.'
  },
  {
    icon: MessageSquare,
    title: 'Qualify',
    body:
      '60-second WhatsApp + Voice AI qualification in Kannada / Hindi / Telugu. Scoring rubric. Real-time intent.'
  },
  {
    icon: Mic,
    title: 'Book',
    body:
      'Hot leads auto-routed with full context. Multi-channel reminder sequence. No-show rate halved.'
  },
  {
    icon: BarChart3,
    title: 'Convert',
    body:
      'Multi-channel nurture. Every dropoff caught. CPL, SVs, sellout % — one live dashboard.'
  }
] as const;

const CASES = [
  {
    kind: 'live',
    project: 'Living Structures',
    corridor: 'Whitefield · 144u · 2.5 BHK Premium',
    stats: [
      { label: 'CPL', value: '₹1,480' },
      { label: 'SV / week', value: '22' },
      { label: 'No-show', value: '12%' }
    ]
  },
  {
    kind: 'live',
    project: 'Vrindavan Estates',
    corridor: 'Sarjapur Road · 180u · 3 BHK',
    stats: [
      { label: 'CPL', value: '₹1,150' },
      { label: 'SV → Book', value: '11%' },
      { label: 'No-show', value: '14%' }
    ]
  },
  {
    kind: 'live',
    project: 'Hennur Heights',
    corridor: 'Hennur · 96u · 2 + 3 BHK',
    stats: [
      { label: 'CPL', value: '₹980' },
      { label: 'SV / week', value: '14' },
      { label: 'KN qualified', value: '68%' }
    ]
  },
  {
    kind: 'live',
    project: 'Yelahanka Habitat',
    corridor: 'Yelahanka North · 72u · 3 BHK',
    stats: [
      { label: 'CPL', value: '₹1,240' },
      { label: 'SV / week', value: '11' },
      { label: 'Sellout', value: '9 mo' }
    ]
  },
  {
    kind: 'live',
    project: 'Devanahalli Skyline',
    corridor: 'Devanahalli · 110u · Airport corridor',
    stats: [
      { label: 'CPL', value: '₹1,320' },
      { label: 'NRI share', value: '34%' },
      { label: 'SV → Book', value: '13%' }
    ]
  },
  {
    kind: 'live',
    project: 'Kanakapura Roots',
    corridor: 'Off-Kanakapura · 64u · 3 BHK',
    stats: [
      { label: 'CPL', value: '₹880' },
      { label: 'SV / week', value: '9' },
      { label: 'No-show', value: '11%' }
    ]
  },
  {
    kind: 'live',
    project: 'Coastline Group',
    corridor: 'Mangaluru · 92u · Gulf-NRI',
    stats: [
      { label: 'CPL', value: '₹3.2K' },
      { label: 'SV → Book', value: '15%' },
      { label: 'Arabic reels', value: '10 / mo' }
    ]
  },
  {
    kind: 'benchmark',
    project: 'Riverstone Realty',
    corridor: 'Pune-BLR · 42 villas · NRI',
    stats: [
      { label: 'CPL', value: '₹3.6K' },
      { label: 'SV → Book', value: '19%' },
      { label: 'Sellout', value: '11 mo' }
    ]
  }
] as const;
