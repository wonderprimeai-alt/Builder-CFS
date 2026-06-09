/**
 * /builders-cfs/the-engine — How it works deep page.
 * Four jobs: Capture · Qualify · Book · Convert.
 */
import type { Metadata } from 'next';
import {
  Layers,
  MessageSquare,
  Mic,
  BarChart3,
  Globe,
  Smartphone,
  Calendar,
  Bell,
  Database,
  Sparkles
} from 'lucide-react';
import {
  AmbientGlow,
  Accent,
  Eyebrow,
  Reveal,
  SectionHeading,
  StatTicker,
  BentoCard,
  LiveDot
} from '@/components/builders-cfs/Primitives';
import { WhatsAppCTA } from '@/components/builders-cfs/WhatsAppCTA';
import { CTASection } from '@/components/builders-cfs/CTASection';

export const metadata: Metadata = {
  title: 'The Engine — Capture · Qualify · Book · Convert | CFS for Builders',
  description:
    'Four jobs. One stack. Zero gaps. WhatsApp + Voice AI qualifier, unified capture across channels, auto-booking, multi-channel nurture, one live dashboard.'
};

export default function TheEnginePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <AmbientGlow />
        <div className="absolute inset-0 bg-bld-grid [background-size:42px_42px] opacity-[0.3]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 md:pt-28 pb-16">
          <Reveal>
            <Eyebrow>THE ENGINE</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <SectionHeading as="h1" className="mt-5 max-w-3xl">
              Four jobs.
              <br />
              <Accent>One stack.</Accent> Zero gaps.
            </SectionHeading>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-bld-soft text-[17px] md:text-[18px] leading-[1.65]">
              The full-funnel instrumentation that replaces the freelancer + agency + intern stack.
              One pipeline. One dashboard. Outcome accountable.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-bld-edge pt-8 max-w-md">
              <StatTicker value={60} suffix="s" label="QUALIFY" />
              <StatTicker value={4} suffix=" langs" label="VOICE AI" />
              <StatTicker value={7} suffix=" days" label="GO LIVE" />
            </div>
          </Reveal>
        </div>
      </section>

      <StageSection
        anchor="capture"
        step={1}
        title="Capture"
        eyebrow="ONE PIPELINE · EVERYTHING"
        headline="Every channel. Every lead. Nothing missed."
        body="Unified capture across Meta, Google, MagicBricks, 99acres, WhatsApp inbound, walk-in QR, and direct calls. One CRM pipeline replaces the spreadsheets, the personal phones, and the 'check with my sales head' delay."
        icon={Layers}
        bullets={[
          { icon: Globe, label: 'Meta + Google + portals + walk-in QR' },
          { icon: Smartphone, label: 'WhatsApp inbound auto-captured with context' },
          { icon: Database, label: 'CRM pipeline keyed to your project + unit mix' }
        ]}
      />

      <StageSection
        anchor="qualify"
        step={2}
        title="Qualify"
        eyebrow="THE WEDGE · 60 SECONDS"
        headline="WhatsApp + Voice AI. 60 seconds. Kannada, Hindi, Telugu, English."
        body="Priya — your AI qualifier — handles every inbound on WhatsApp and follow-up voice calls in regional languages. Budget, loan-status, timeline, BHK-fit, decision-maker — all scored against a real rubric. Hot leads (≥75) get routed live. Warm leads get the 4-page funnel audit. Cold leads enter nurture."
        icon={MessageSquare}
        bullets={[
          { icon: Sparkles, label: 'Scoring rubric: units · stage · CPL pain · ICP fit · budget · DM present' },
          { icon: Mic, label: 'Voice AI follow-up in Kannada / Hindi / Telugu / English' },
          { icon: MessageSquare, label: 'Real-time intent + sentiment surfaced to your sales head' }
        ]}
        hero
      />

      <StageSection
        anchor="book"
        step={3}
        title="Book"
        eyebrow="HOT LEADS · AUTO-ROUTED"
        headline="Hot leads → site visits in under 4 minutes."
        body="Qualified-hot leads are auto-routed to your sales head with the full qualification payload (transcript, score, intent, budget, language preference). Calendar slots are offered inside WhatsApp. A 4-touch reminder sequence (WhatsApp + voice) cuts no-shows by half."
        icon={Calendar}
        bullets={[
          { icon: Calendar, label: 'In-WhatsApp calendar slot selection (no app needed)' },
          { icon: Bell, label: '4-touch reminder sequence: 24h · 6h · 1h · 15 min' },
          { icon: Mic, label: 'Voice reminder call for high-ticket buyers' }
        ]}
      />

      <StageSection
        anchor="convert"
        step={4}
        title="Convert"
        eyebrow="ONE LIVE DASHBOARD"
        headline="CPL, SVs, sellout %. One screen. Updated live."
        body="After the site visit, multi-channel nurture catches every dropoff: WhatsApp follow-ups, voice check-ins, retargeting ad pools. Your MD sees one dashboard — CPL, lead-to-SV %, SV-to-book %, sellout pace — updated live, with comparison to micro-market benchmarks."
        icon={BarChart3}
        bullets={[
          { icon: BarChart3, label: 'Live dashboard for the MD: CPL · SV · Sellout %' },
          { icon: Bell, label: 'Multi-channel nurture for SV no-shows + non-converters' },
          { icon: Database, label: 'Micro-market benchmarking built in' }
        ]}
      />

      {/* The stack we install */}
      <section className="relative py-20 md:py-28 border-t border-bld-edge bg-bld-ink-2/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>THE STACK · 7 DAYS</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mt-5">
                Installed in <Accent>seven days.</Accent>
                <br />
                Live in fourteen.
              </SectionHeading>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {STACK.map((s, i) => (
              <Reveal key={s.label} delay={i}>
                <BentoCard className="h-full">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">
                    {s.label}
                  </div>
                  <p className="mt-3 text-[13px] text-bld-soft leading-relaxed">{s.body}</p>
                </BentoCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="SEE IT WORK"
        headline="Watch the engine qualify"
        highlight="your lead."
        sub="Talk to Priya. She'll qualify your project in 60 seconds and show you what the engine would do for it."
        ctaLabel="Talk to Priya on WhatsApp"
        context="engine"
        source="engine-page"
      />
    </>
  );
}

// ---------------------------------------------------------------------------

function StageSection({
  anchor,
  step,
  title,
  eyebrow,
  headline,
  body,
  icon: Icon,
  bullets,
  hero = false
}: {
  anchor: string;
  step: number;
  title: string;
  eyebrow: string;
  headline: string;
  body: string;
  icon: typeof Layers;
  bullets: { icon: typeof Layers; label: string }[];
  hero?: boolean;
}) {
  return (
    <section
      id={anchor}
      className={`relative scroll-mt-20 border-t border-bld-edge py-20 md:py-28 ${
        hero ? 'bg-bld-ink-2/40' : ''
      }`}
    >
      {/* Connector line dot — signature moment for /the-engine */}
      <div
        aria-hidden
        className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="h-3 w-3 rounded-full bg-bld-lime shadow-[0_0_20px_rgba(200,255,0,0.6)]" />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">
              <span className="tabular-nums">0{step}/04</span>
              <span className="text-bld-mute">/</span>
              <span>{eyebrow}</span>
              {hero && (
                <>
                  <span className="text-bld-mute">/</span>
                  <LiveDot label="THE WEDGE" />
                </>
              )}
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-5 font-display font-semibold text-bld-white tracking-[-0.02em] leading-[1.04] text-[34px] md:text-[48px]">
              <span className="inline-flex items-center gap-3">
                <Icon className="h-7 w-7 md:h-9 md:w-9 text-bld-lime" strokeWidth={2} />
                {title}.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 text-bld-white text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.005em]">
              {headline}
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-5 text-bld-soft text-[15px] md:text-[16px] leading-[1.7]">{body}</p>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <div className="space-y-3">
            {bullets.map((b, i) => (
              <Reveal key={b.label} delay={i}>
                <div className="rounded-2xl border border-bld-edge bg-bld-ink-3 p-5 md:p-6 flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl border border-bld-edge-lime bg-bld-lime-dim grid place-items-center">
                    <b.icon className="h-4 w-4 text-bld-lime" strokeWidth={2} />
                  </div>
                  <p className="text-[15px] md:text-[16px] text-bld-soft leading-[1.55] pt-1.5">
                    {b.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const STACK = [
  {
    label: 'CRM LAYER',
    body: 'Pipeline, contact records, source tracking, lead scoring. Replaces spreadsheets + WhatsApp groups.'
  },
  {
    label: 'CONVERSATION AI',
    body: 'WhatsApp + web chat qualifier (Priya). Bundled — runs at near-zero per-conversation cost.'
  },
  {
    label: 'VOICE AI',
    body: 'Inbound + outbound qualifier in Kannada / Hindi / Telugu / English. Metered per minute at cost-plus.'
  },
  {
    label: 'CREATIVE STUDIO',
    body: '12–24 hero creatives / month. Reels, statics, hero films, UGC. 48-hour brief-to-cut.'
  },
  {
    label: 'AUTOMATION LAYER',
    body: 'Routing, scoring, reminders, retargeting, nurture sequences. The connective tissue.'
  }
];
