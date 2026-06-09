/**
 * /builders-cfs/micro-markets/[corridor] — dynamic per-corridor page.
 */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import {
  AmbientGlow,
  Accent,
  Eyebrow,
  Reveal,
  SectionHeading,
  BentoCard
} from '@/components/builders-cfs/Primitives';
import { FAQ } from '@/components/builders-cfs/FAQ';
import { CTASection } from '@/components/builders-cfs/CTASection';
import { CORRIDORS, getCorridor } from '@/lib/builders-cfs/corridors';

export function generateStaticParams() {
  return CORRIDORS.map((c) => ({ corridor: c.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ corridor: string }>;
}): Promise<Metadata> {
  const { corridor } = await params;
  const c = getCorridor(corridor);
  if (!c) return {};
  return {
    title: `${c.name} — Real Estate Marketing & Lead Qualification | CFS for Builders`,
    description: `${c.intro.slice(0, 160)}`,
    alternates: { canonical: `/builders-cfs/micro-markets/${c.slug}` }
  };
}

export default async function CorridorPage({
  params
}: {
  params: Promise<{ corridor: string }>;
}) {
  const { corridor } = await params;
  const c = getCorridor(corridor);
  if (!c) notFound();

  return (
    <>
      {/* LocalBusiness + FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                name: `CFS — Real Estate Marketing in ${c.name}, Bengaluru`,
                areaServed: { '@type': 'Place', name: `${c.name}, Bengaluru, India` },
                description: c.intro,
                provider: { '@type': 'Organization', name: 'Wonder Creative Studio' }
              },
              {
                '@type': 'FAQPage',
                mainEntity: c.faq.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a }
                }))
              }
            ]
          })
        }}
      />

      <section className="relative overflow-hidden">
        <AmbientGlow />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 md:pt-28 pb-16">
          <Reveal>
            <Link
              href="/builders-cfs/micro-markets"
              className="inline-flex items-center gap-2 text-bld-mute hover:text-bld-lime text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              All micro-markets
            </Link>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-8 inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-bld-lime" strokeWidth={2} />
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">
                BENGALURU · MICRO-MARKET
              </span>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <SectionHeading as="h1" className="mt-5 max-w-4xl">
              Real estate marketing in
              <br />
              <Accent>{c.name}.</Accent>
            </SectionHeading>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-6 max-w-3xl text-bld-soft text-[16px] md:text-[18px] leading-[1.65]">{c.intro}</p>
          </Reveal>
          <Reveal delay={4}>
            <div
              className="mt-10 relative overflow-hidden rounded-3xl border border-bld-edge"
              style={{ aspectRatio: '21 / 9' }}
            >
              <Image
                src={c.image}
                alt={`${c.name} — Bengaluru micro-market`}
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

      {/* Benchmark strip */}
      <section className="relative border-t border-bld-edge bg-bld-ink-2/40 py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <Bench label="CPL BENCHMARK" value={c.benchmark.cpl} />
            <Bench label="SV → BOOK" value={c.benchmark.svToBook} />
            <Bench label="SELLOUT" value={c.benchmark.sellout} />
            <Bench label="TICKET BAND" value={c.typicalTicket.split('·')[0].trim()} small />
          </div>
          <p className="mt-6 text-[12px] text-bld-mute leading-relaxed max-w-2xl">{c.benchmark.note}</p>
        </div>
      </section>

      {/* Intel: Buyer / Builders / Drivers */}
      <section className="relative border-t border-bld-edge py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>MICRO-MARKET INTEL</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mt-5">
                Who buys here.
                <br />
                <Accent>Why they buy.</Accent>
              </SectionHeading>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            <Reveal>
              <BentoCard className="h-full">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">BUYER PROFILE</div>
                <p className="mt-3 text-[14.5px] text-bld-soft leading-[1.65]">{c.buyerProfile}</p>
              </BentoCard>
            </Reveal>
            <Reveal delay={1}>
              <BentoCard className="h-full">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">DOMINANT BUILDERS</div>
                <p className="mt-3 text-[14.5px] text-bld-soft leading-[1.65]">{c.dominantBuilders}</p>
              </BentoCard>
            </Reveal>
            <Reveal delay={2}>
              <BentoCard className="h-full">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">DEMAND DRIVERS</div>
                <ul className="mt-3 space-y-1.5 text-[13.5px] text-bld-soft leading-[1.55]">
                  {c.demandDrivers.map((d) => (
                    <li key={d} className="pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-bld-lime">
                      {d}
                    </li>
                  ))}
                </ul>
              </BentoCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CFS angle */}
      <section className="relative border-t border-bld-edge bg-bld-ink-2/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>HOW CFS SELLS HERE</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mt-5">
                The engine
                <br />
                <Accent>tuned for {c.name}.</Accent>
              </SectionHeading>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            <Angle label="CHANNEL MIX" body={c.cfsAngle.channelMix} />
            <Angle label="LANGUAGE MIX" body={c.cfsAngle.languageMix} />
            <Angle label="CREATIVE ANGLE" body={c.cfsAngle.creativeAngle} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative border-t border-bld-edge py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>{c.name.toUpperCase()} · FAQ</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mt-5">
                Common questions
                <br />
                <Accent>about this corridor.</Accent>
              </SectionHeading>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <div className="mt-10">
              <FAQ items={c.faq} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related corridors */}
      {c.related.length > 0 && (
        <section className="relative border-t border-bld-edge bg-bld-ink-2/40 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute mb-6">
              RELATED CORRIDORS
            </div>
            <div className="flex flex-wrap gap-3">
              {c.related.map((r) => {
                const rc = getCorridor(r);
                if (!rc) return null;
                return (
                  <Link
                    key={r}
                    href={`/builders-cfs/micro-markets/${r}`}
                    className="inline-flex items-center gap-2 rounded-full border border-bld-edge bg-bld-ink-3 px-4 h-10 text-[13px] text-bld-soft hover:border-bld-edge-lime hover:text-bld-lime transition-colors"
                  >
                    {rc.name}
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection
        eyebrow={`LAUNCHING IN ${c.name.toUpperCase()}?`}
        headline="Get a corridor-specific"
        highlight="plan on WhatsApp."
        sub={`Tell Priya your units + ticket band. She'll send a CFS projection tuned for ${c.name} buyers in 60 seconds.`}
        ctaLabel="Get a plan on WhatsApp"
        context="micro-market"
        source={`corridor-${c.slug}`}
        inject={{ corridor: c.name }}
      />
    </>
  );
}

function Bench({ label, value, small = false }: { label: string; value: string; small?: boolean }) {
  return (
    <div>
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute">{label}</div>
      <div
        className={
          small
            ? 'mt-2 font-display font-bold text-bld-white text-[18px] md:text-[22px] tabular-nums leading-tight'
            : 'mt-2 font-display font-bold text-bld-lime text-[26px] md:text-[34px] tabular-nums leading-none'
        }
      >
        {value}
      </div>
    </div>
  );
}

function Angle({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-2xl border border-bld-edge bg-bld-ink p-5 md:p-6 h-full">
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-lime">{label}</div>
      <p className="mt-3 text-[14.5px] text-bld-soft leading-[1.65]">{body}</p>
    </div>
  );
}
