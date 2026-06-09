/**
 * /builders-cfs/* 404 — branded single-screen.
 */
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AmbientGlow, Eyebrow } from '@/components/builders-cfs/Primitives';
import { WhatsAppCTA } from '@/components/builders-cfs/WhatsAppCTA';

export default function NotFound() {
  return (
    <section className="relative min-h-[calc(100vh-200px)] overflow-hidden flex items-center">
      <AmbientGlow />
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <Eyebrow align="center">PAGE NOT FOUND</Eyebrow>
        <h1 className="mt-6 font-display font-semibold text-bld-white tracking-[-0.04em] leading-[0.9] text-[100px] md:text-[180px]">
          <span className="text-bld-lime">4</span>0<span className="text-bld-lime">4</span>
        </h1>
        <p className="mt-4 text-bld-soft text-[16px] md:text-[18px] leading-[1.6] max-w-md mx-auto">
          The page doesn&apos;t exist or moved. Talk to Priya anyway — she&apos;ll point you to whatever you were looking
          for.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <WhatsAppCTA context="contact" source="404" size="md" pulseDot>
            Talk to Priya on WhatsApp
          </WhatsAppCTA>
          <Link
            href="/builders-cfs"
            className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full border border-bld-edge text-bld-white hover:border-bld-edge-lime hover:text-bld-lime transition-colors text-sm"
          >
            Back to home
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
