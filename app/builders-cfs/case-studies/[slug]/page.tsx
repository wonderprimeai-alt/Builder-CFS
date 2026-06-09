/**
 * /builders-cfs/case-studies/[slug] — dynamic case study.
 */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Quote } from 'lucide-react';
import {
  AmbientGlow,
  Accent,
  Eyebrow,
  Reveal,
  SectionHeading,
  BentoCard
} from '@/components/builders-cfs/Primitives';
import { CTASection } from '@/components/builders-cfs/CTASection';
import { CASES, getCase } from '@/lib/builders-cfs/cases';

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  return {
    title: `${c.project} — ${c.status} | CFS for Builders`,
    description: `${c.project} (${c.corridor}). ${c.context.slice(0, 140)}...`
  };
}

export default async function CaseStudyPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  return (
    <>
      <section className="relative overflow-hidden">
        <AmbientGlow />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 md:pt-28 pb-16">
          <Reveal>
            <Link
              href="/builders-cfs/case-studies"
              className="inline-flex items-center gap-2 text-bld-mute hover:text-bld-lime text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              All work
            </Link>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span
                className={
                  c.kind === 'live'
                    ? 'inline-flex items-center gap-2 rounded-full border border-bld-edge-lime bg-bld-lime-dim/30 px-3 py-1 font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime'
                    : 'inline-flex items-center gap-2 rounded-full border border-bld-edge bg-bld-ink-2 px-3 py-1 font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute'
                }
              >
                {c.kind === 'live' && (
                  <span className="relative inline-flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bld-lime opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-bld-lime" />
                  </span>
                )}
                {c.status}
              </span>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <SectionHeading as="h1" className="mt-6 max-w-4xl">
              {c.project}
            </SectionHeading>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-4 text-bld-soft text-[16px] md:text-[18px]">
              {c.corridor} · {c.ticketBand} · {c.units} units
            </p>
          </Reveal>
          <Reveal delay={4}>
            <div
              className="mt-10 relative overflow-hidden rounded-3xl border border-bld-edge"
              style={{ aspectRatio: '21 / 9' }}
            >
              <Image
                src={c.image}
                alt={`${c.project} — ${c.corridor}`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1216px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bld-ink/60 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stat strip */}
      <section className="relative border-t border-bld-edge bg-bld-ink-2/40 py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {c.stats.map((s) => (
              <Reveal key={s.label}>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute">{s.label}</div>
                  <div className="mt-2 font-display font-bold text-bld-lime text-[28px] md:text-[36px] tabular-nums leading-none">
                    {s.value}
                  </div>
                  {s.note && (
                    <div className="mt-1 font-mono text-[10px] tracking-[0.18em] uppercase text-bld-soft">
                      {s.note}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          {c.metricsIndicative && (
            <p className="mt-8 text-[12px] text-bld-mute">
              * Indicative metrics, in-progress engagement. Final numbers shared with the client&apos;s permission.
            </p>
          )}
        </div>
      </section>

      {/* Context + Problem */}
      <section className="relative border-t border-bld-edge py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>CONTEXT</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-5 font-display font-semibold text-bld-white text-[28px] md:text-[36px] leading-[1.15] tracking-[-0.02em]">
                Buyer profile
                <br />
                <Accent>+ situation.</Accent>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-5 text-[14px] font-mono uppercase tracking-[0.18em] text-bld-mute">BUYER</p>
              <p className="mt-2 text-bld-soft text-[15.5px] leading-[1.7]">{c.buyerProfile}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">CONTEXT</div>
                <p className="mt-3 text-bld-soft text-[15.5px] md:text-[16px] leading-[1.75]">{c.context}</p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="rounded-2xl border border-bld-edge bg-bld-warn/[0.04] p-5 md:p-6">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-warn">THE PROBLEM</div>
                <p className="mt-3 text-bld-soft text-[15.5px] leading-[1.7]">{c.problem}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we built */}
      <section className="relative border-t border-bld-edge bg-bld-ink-2/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>WHAT WE BUILT</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mt-5">
                The engine
                <br />
                <Accent>configured for this.</Accent>
              </SectionHeading>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {c.whatWeBuilt.map((item, i) => (
              <Reveal key={item} delay={i % 2}>
                <BentoCard className="h-full">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[12px] tracking-[0.18em] text-bld-lime mt-0.5 shrink-0">
                      0{i + 1}
                    </span>
                    <p className="text-[15px] text-bld-soft leading-[1.6]">{item}</p>
                  </div>
                </BentoCard>
              </Reveal>
            ))}
          </div>
          {/* Engine config */}
          <Reveal delay={3}>
            <div className="mt-10 rounded-2xl border border-bld-edge bg-bld-ink p-6 md:p-8">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute mb-5">
                ENGINE CONFIG
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {c.engineConfig.map((cfg) => (
                  <div key={cfg.label}>
                    <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-bld-mute">{cfg.label}</div>
                    <div className="mt-1.5 font-display font-semibold text-bld-white text-[16px]">{cfg.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quote */}
      {c.quote && (
        <section className="relative border-t border-bld-edge py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <Reveal>
              <Quote className="h-7 w-7 text-bld-lime mx-auto" strokeWidth={2} />
            </Reveal>
            <Reveal delay={1}>
              <blockquote className="mt-6 font-display font-semibold text-bld-white text-[26px] md:text-[36px] leading-[1.2] tracking-[-0.01em]">
                &ldquo;{c.quote.text}&rdquo;
              </blockquote>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 font-mono text-[11px] tracking-[0.22em] uppercase text-bld-mute">— {c.quote.author}</p>
            </Reveal>
          </div>
        </section>
      )}

      <CTASection
        eyebrow="GET STARTED"
        headline={`Want a ${c.project} for`}
        highlight="your project?"
        sub="Talk to Priya. She'll spec the engine for your specific corridor + unit mix in 60 seconds."
        ctaLabel="Spec my engine on WhatsApp"
        context="case-study"
        source={`case-${c.slug}`}
      />
    </>
  );
}
