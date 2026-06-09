/**
 * /builders-cfs/creative-studio — AI Creative Studio portfolio + method.
 */
import type { Metadata } from 'next';
import Image from 'next/image';
import { Film, Image as ImageIcon, Layers, Sparkles, Languages, Clock } from 'lucide-react';
import {
  AmbientGlow,
  Accent,
  Eyebrow,
  Reveal,
  SectionHeading,
  StatTicker,
  BentoCard
} from '@/components/builders-cfs/Primitives';
import { CTASection } from '@/components/builders-cfs/CTASection';
import { WhatsAppCTA } from '@/components/builders-cfs/WhatsAppCTA';
import { cn } from '@/lib/builders-cfs/cn';

export const metadata: Metadata = {
  title: 'Creative Studio — The most advanced AI creative studio for Indian real estate | CFS',
  description:
    '12 hero creatives a month. 48-hour brief to cut. Native Kannada / Hindi / Telugu / English lip-sync. Arabic for Gulf-NRI. Indistinguishable from a ₹5L shoot.'
};

const PORTFOLIO = [
  { project: 'Run Home', market: 'Yelahanka', format: 'Reel', ratio: '9:16', lang: 'Kannada + English', image: '/builders-cfs/creatives/run-home.png' },
  { project: 'The Hour The House Softens', market: 'North-East BLR', format: 'Static carousel', ratio: '1:1', lang: 'English', image: '/builders-cfs/creatives/softens.png' },
  { project: 'For The Few Who Arrive Last', market: 'Penthouse Collection', format: 'Hero Film', ratio: '16:9', lang: 'English (NRI)', image: '/builders-cfs/creatives/penthouse.png' },
  { project: 'A New Chapter Of Living', market: 'Sarjapur–Attibele', format: 'UGC reel', ratio: '9:16', lang: 'English + Hindi', image: '/builders-cfs/creatives/markix-portrait.png' },
  { project: 'Above The Noise', market: 'Cubbon Park', format: 'Reel', ratio: '9:16', lang: 'English', image: '/builders-cfs/creatives/above-noise.png' },
  { project: 'Beautiful & Healthy', market: 'NCR Farmlands', format: 'Static', ratio: '4:5', lang: 'Hindi + English', image: '/builders-cfs/creatives/farmlands-family.jpg' },
  { project: 'Modern, With Memory', market: 'Bennigana­halli', format: 'Hero Film', ratio: '16:9', lang: 'Kannada + English', image: '/builders-cfs/creatives/with-memory-wide.png' },
  { project: 'Healthy Living, Peaceful Luxury', market: 'Talegaon', format: 'Reel', ratio: '9:16', lang: 'Hindi', image: '/builders-cfs/creatives/shree-aangan.jpg' }
];

const FILTERS = ['All', 'Reel', 'Static carousel', 'Hero Film', 'UGC reel', 'Static'];

const METHOD = [
  {
    icon: Sparkles,
    title: 'Reference-character consistency',
    body: 'One brand-face across every reel. We train a reference identity once — every output stays consistent.'
  },
  {
    icon: Layers,
    title: 'Multi-aspect output',
    body: 'Every hero piece ships in 9:16, 1:1, 4:5, 16:9. Meta, Google, MagicBricks, 99acres — covered.'
  },
  {
    icon: Languages,
    title: '4-language native lip-sync',
    body: 'Kannada, Hindi, Telugu, English — native phonetics, not subtitle overlays. Arabic for Gulf-NRI campaigns.'
  },
  {
    icon: Clock,
    title: '48-hour brief-to-cut',
    body: 'Brief Monday morning. First-cut Wednesday morning. Three rev rounds. Live by Friday.'
  }
];

export default function CreativeStudioPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <AmbientGlow />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 md:pt-28 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>THE CREATIVE STUDIO</Eyebrow>
              </Reveal>
              <Reveal delay={1}>
                <SectionHeading as="h1" className="mt-5">
                  The most advanced{' '}
                  <Accent>AI creative studio</Accent>
                  <br />
                  for Indian real estate.
                </SectionHeading>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-6 text-bld-soft text-[17px] md:text-[18px] leading-[1.65] max-w-2xl">
                  We don&apos;t make 60 reels a month. We make 12 that look like ₹5L shoots — shipped in 48 hours. Native
                  Kannada / Hindi / Telugu / English lip-sync. Arabic for Gulf-NRI. Multi-aspect, multi-platform.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div className="mt-8">
                  <WhatsAppCTA context="creative-studio" source="creative-hero" size="lg" pulseDot>
                    See sample creative for my project
                  </WhatsAppCTA>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={2}>
                <div className="rounded-3xl border border-bld-edge bg-bld-ink-2 p-6 md:p-8 space-y-5">
                  <StatTicker value={48} suffix="hr" label="BRIEF → CUT" />
                  <div className="h-px bg-bld-edge" />
                  <StatTicker value={30} prefix="1/" suffix="th" label="OF A REAL SHOOT" />
                  <div className="h-px bg-bld-edge" />
                  <StatTicker value={4} suffix=" langs" label="NATIVE LIP-SYNC" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="relative border-t border-bld-edge py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <Reveal>
                <Eyebrow>THE WORK</Eyebrow>
              </Reveal>
              <Reveal delay={1}>
                <SectionHeading className="mt-5">
                  Twelve hero pieces.
                  <br />
                  <Accent>Multi-aspect.</Accent> Multi-language.
                </SectionHeading>
              </Reveal>
            </div>
            <Reveal delay={2}>
              <div className="flex flex-wrap gap-2">
                {FILTERS.map((f, i) => (
                  <button
                    key={f}
                    type="button"
                    className={cn(
                      'inline-flex h-8 px-3 rounded-full text-[12px] font-mono uppercase tracking-[0.18em] transition-colors',
                      i === 0
                        ? 'bg-bld-lime text-bld-ink'
                        : 'border border-bld-edge text-bld-soft hover:border-bld-edge-lime hover:text-bld-lime'
                    )}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PORTFOLIO.map((tile, i) => (
              <Reveal key={tile.project} delay={i % 4}>
                <CreativeTile {...tile} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="relative border-t border-bld-edge bg-bld-ink-2/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>HOW WE MAKE IT</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mt-5">
                Four rules.
                <br />
                <Accent>No exceptions.</Accent>
              </SectionHeading>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {METHOD.map((m, i) => (
              <Reveal key={m.title} delay={i}>
                <BentoCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 shrink-0 rounded-xl border border-bld-edge-lime bg-bld-lime-dim grid place-items-center">
                      <m.icon className="h-4 w-4 text-bld-lime" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-bld-white text-[20px] tracking-[-0.01em]">
                        {m.title}
                      </h3>
                      <p className="mt-2 text-[14.5px] text-bld-soft leading-relaxed">{m.body}</p>
                    </div>
                  </div>
                </BentoCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="THE CREATIVE STUDIO"
        headline="Want a sample reel"
        highlight="for your project?"
        sub="WhatsApp Priya. She'll spec a 60-second hero reel for your project in 4 hours — no commitment, no deck."
        ctaLabel="Get sample creative on WhatsApp"
        context="creative-studio"
        source="creative-final"
      />
    </>
  );
}

function CreativeTile({
  project,
  market,
  format,
  ratio,
  lang,
  image
}: {
  project: string;
  market: string;
  format: string;
  ratio: string;
  lang: string;
  image: string;
}) {
  const isReel = ratio === '9:16';
  const isFilm = ratio === '16:9';
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-bld-edge bg-bld-ink cursor-default"
      style={{
        aspectRatio: isReel ? '9 / 14' : isFilm ? '16 / 10' : ratio === '4:5' ? '4 / 5' : '1 / 1'
      }}
    >
      <Image
        src={image}
        alt={`${project} — ${format}`}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-bld-ink/80 backdrop-blur-sm border border-bld-edge px-2.5 py-1">
        {isFilm ? (
          <Film className="h-3 w-3 text-bld-lime" strokeWidth={2} />
        ) : (
          <ImageIcon className="h-3 w-3 text-bld-lime" strokeWidth={2} />
        )}
        <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-bld-lime">{ratio}</span>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-3 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-bld-lime">{format}</div>
        <div className="text-[13px] text-bld-white mt-1 leading-tight">{project}</div>
        <div className="text-[11px] text-bld-mute mt-0.5">{market}</div>
        <div className="text-[10px] text-bld-soft mt-1.5 font-mono uppercase tracking-[0.15em]">{lang}</div>
      </div>
    </div>
  );
}
