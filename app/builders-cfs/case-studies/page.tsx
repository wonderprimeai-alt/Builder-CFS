/**
 * /builders-cfs/case-studies — index.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import {
  AmbientGlow,
  Accent,
  Eyebrow,
  Reveal,
  SectionHeading,
  BentoCard
} from '@/components/builders-cfs/Primitives';
import { CTASection } from '@/components/builders-cfs/CTASection';
import { CASES } from '@/lib/builders-cfs/cases';

export const metadata: Metadata = {
  title: 'The Work — Case Studies + Methodology Benchmarks | CFS for Builders',
  description:
    'One live engagement (Living Structures, Whitefield). Three methodology benchmarks projected from the working model. Honestly labelled — never misrepresented.'
};

export default function CaseStudiesIndexPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <AmbientGlow />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 md:pt-28 pb-16">
          <Reveal>
            <Eyebrow>THE WORK</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <SectionHeading as="h1" className="mt-5 max-w-3xl">
              One live engagement.
              <br />
              <Accent>Three methodology benchmarks.</Accent>
            </SectionHeading>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-bld-soft text-[17px] leading-[1.65]">
              Benchmarks are projected from the working model — clearly labelled, never misrepresented as delivered
              client outcomes. Real client metrics shown only with permission, marked &ldquo;indicative&rdquo; until
              finalised.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {CASES.map((c, i) => (
              <Reveal key={c.slug} delay={i}>
                <Link href={`/builders-cfs/case-studies/${c.slug}`} className="block group h-full">
                  <BentoCard className="h-full overflow-hidden">
                    <div
                      className="relative z-[1] -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6 overflow-hidden border-b border-bld-edge"
                      style={{ aspectRatio: '16 / 9' }}
                    >
                      <Image
                        src={c.image}
                        alt={`${c.project} — ${c.corridor}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bld-ink/70 via-transparent to-transparent" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span
                        className={
                          c.kind === 'live'
                            ? 'font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime'
                            : 'font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute'
                        }
                      >
                        {c.status}
                      </span>
                      <ArrowRight
                        className="h-4 w-4 text-bld-mute group-hover:text-bld-lime group-hover:translate-x-0.5 transition-all"
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="mt-4 font-display font-semibold text-bld-white text-[26px] md:text-[28px] leading-tight tracking-[-0.01em]">
                      {c.project}
                    </h3>
                    <p className="mt-1 text-[13.5px] text-bld-mute">{c.corridor}</p>
                    <p className="mt-2 text-[13px] text-bld-soft">{c.ticketBand} · {c.units} units</p>
                    <div className="mt-6 grid grid-cols-4 gap-3 border-t border-bld-edge pt-5">
                      {c.stats.map((s) => (
                        <div key={s.label}>
                          <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-bld-mute">
                            {s.label}
                          </div>
                          <div className="font-display font-bold text-bld-white text-[16px] tabular-nums mt-0.5">
                            {s.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </BentoCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="GET STARTED"
        headline="Want a benchmark"
        highlight="for your project?"
        sub="Talk to Priya. Tell her your corridor, units, and ticket band — she'll send a CFS projection in 60 seconds."
        ctaLabel="Get a projection on WhatsApp"
        context="case-study"
        source="cases-index"
      />
    </>
  );
}
