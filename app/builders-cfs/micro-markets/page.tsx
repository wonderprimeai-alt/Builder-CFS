/**
 * /builders-cfs/micro-markets — index of corridors.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';
import {
  AmbientGlow,
  Accent,
  Eyebrow,
  Reveal,
  SectionHeading,
  BentoCard
} from '@/components/builders-cfs/Primitives';
import { CTASection } from '@/components/builders-cfs/CTASection';
import { CompassRose } from '@/components/builders-cfs/SignatureArt';
import { CORRIDORS } from '@/lib/builders-cfs/corridors';

export const metadata: Metadata = {
  title: 'Bengaluru Micro-Markets — Real Estate Marketing by Corridor | CFS',
  description:
    'Corridor-specific real estate marketing playbooks for Bengaluru: Sarjapur, Whitefield, Hennur, Devanahalli, Yelahanka, Off-Kanakapura. Buyer profile, CPL benchmarks, channel mix, language mix.'
};

export default function MicroMarketsIndexPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <AmbientGlow />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 md:pt-28 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-9">
              <Reveal>
                <Eyebrow>MICRO-MARKETS</Eyebrow>
              </Reveal>
              <Reveal delay={1}>
                <SectionHeading as="h1" className="mt-5 max-w-3xl">
                  Bengaluru, corridor by corridor.
                  <br />
                  <Accent>Real numbers. Real playbooks.</Accent>
                </SectionHeading>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-6 max-w-2xl text-bld-soft text-[17px] leading-[1.65]">
                  Each corridor has its own buyer profile, language mix, ticket band, and CPL benchmark. Pick yours
                  below. The engine configures differently for each.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-3 hidden lg:flex justify-end">
              <Reveal delay={2}>
                <CompassRose active="east" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORRIDORS.map((c, i) => (
              <Reveal key={c.slug} delay={i}>
                <Link href={`/builders-cfs/micro-markets/${c.slug}`} className="block group h-full">
                  <BentoCard className="h-full overflow-hidden">
                    <div
                      className="relative z-[1] -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6 overflow-hidden border-b border-bld-edge"
                      style={{ aspectRatio: '16 / 9' }}
                    >
                      <Image
                        src={c.image}
                        alt={`${c.name} — Bengaluru micro-market`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bld-ink/70 via-transparent to-transparent" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-bld-lime" strokeWidth={2} />
                        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">
                          {c.benchmark.cpl} CPL
                        </span>
                      </div>
                      <ArrowRight
                        className="h-4 w-4 text-bld-mute group-hover:text-bld-lime group-hover:translate-x-0.5 transition-all"
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="mt-4 font-display font-semibold text-bld-white text-[22px] md:text-[24px] leading-tight tracking-[-0.01em]">
                      {c.name}
                    </h3>
                    <p className="mt-2 text-[13px] text-bld-soft leading-relaxed">{c.typicalTicket}</p>
                    <div className="mt-5 pt-4 border-t border-bld-edge grid grid-cols-3 gap-3">
                      <div>
                        <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-bld-mute">SV→BOOK</div>
                        <div className="mt-1 font-display font-bold text-bld-white text-[15px] tabular-nums">
                          {c.benchmark.svToBook}
                        </div>
                      </div>
                      <div>
                        <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-bld-mute">SELLOUT</div>
                        <div className="mt-1 font-display font-bold text-bld-white text-[15px] tabular-nums">
                          {c.benchmark.sellout}
                        </div>
                      </div>
                      <div>
                        <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-bld-mute">LANG MIX</div>
                        <div className="mt-1 font-display font-bold text-bld-white text-[15px]">{c.cfsAngle.languageMix.split('·')[0].trim().split(' ')[0]}</div>
                      </div>
                    </div>
                  </BentoCard>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={6}>
            <p className="mt-10 text-center text-[13px] text-bld-mute">
              More corridors in active development: Electronic City Ph2, Hosur Road, Tumkur Road, Bidadi,
              Channasandra, Bellandur, Kasavanahalli, Anekal/Attibele.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="OTHER MARKETS"
        headline="Outside Bengaluru?"
        highlight="Ask anyway."
        sub="We have working benchmarks for Pune, Hyderabad, Mangaluru, and NCR. Talk to Priya about your micro-market."
        ctaLabel="Talk to Priya on WhatsApp"
        context="micro-market"
        source="micro-index"
        inject={{ corridor: 'my city' }}
      />
    </>
  );
}
