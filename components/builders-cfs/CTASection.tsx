/**
 * Reusable bottom-of-page WhatsApp conversion block with spotlight.
 * Use at the end of every long page.
 */
import { AmbientGlow, Eyebrow, Reveal } from './Primitives';
import { WhatsAppCTA } from './WhatsAppCTA';
import type { WhatsAppContext } from '@/lib/builders-cfs/whatsapp';

interface CTASectionProps {
  eyebrow?: string;
  headline: string;
  highlight?: string;
  sub?: string;
  ctaLabel?: string;
  context: WhatsAppContext;
  source: string;
  inject?: Record<string, string | number | undefined>;
  footnote?: string;
}

export function CTASection({
  eyebrow = 'GET STARTED',
  headline,
  highlight,
  sub,
  ctaLabel = 'Get the audit on WhatsApp',
  context,
  source,
  inject,
  footnote = 'No calendar. No form. The product is the demo.'
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-bld-edge bg-bld-ink py-24 md:py-32">
      <AmbientGlow />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <Reveal>
          <Eyebrow align="center">{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-5 font-display font-semibold text-bld-white tracking-[-0.02em] leading-[1.04] text-[40px] md:text-[60px]">
            {headline}
            {highlight && (
              <>
                {' '}
                <span className="text-bld-lime">{highlight}</span>
              </>
            )}
          </h2>
        </Reveal>
        {sub && (
          <Reveal delay={2}>
            <p className="mt-6 text-bld-soft text-[17px] md:text-lg leading-relaxed max-w-2xl mx-auto">
              {sub}
            </p>
          </Reveal>
        )}
        <Reveal delay={3}>
          <div className="mt-10">
            <WhatsAppCTA context={context} source={source} inject={inject} size="lg" pulseDot>
              {ctaLabel}
            </WhatsAppCTA>
          </div>
          {footnote && (
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-bld-mute">
              {footnote}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
