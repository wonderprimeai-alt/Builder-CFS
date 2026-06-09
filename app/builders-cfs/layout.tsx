/**
 * /builders-cfs route group layout.
 * Owns its own background, metadata, Lenis scroll, Nav, and Footer.
 * Isolated from the rest of the site by namespaced tokens (bld-*).
 */
import type { Metadata } from 'next';
import { Nav } from '@/components/builders-cfs/Nav';
import { Footer } from '@/components/builders-cfs/Footer';
import { LenisProvider } from '@/components/builders-cfs/LenisProvider';
import { ScrollProgress } from '@/components/builders-cfs/ScrollProgress';
import { CustomCursor } from '@/components/builders-cfs/CustomCursor';
import { PageTransition } from '@/components/builders-cfs/PageTransition';
import { Preloader } from '@/components/builders-cfs/Preloader';
import './bcfs.css';

export const metadata: Metadata = {
  title: 'CFS — The Sellout Engine for Bengaluru Builders | AI Lead Qualification, Voice AI & Creative',
  description:
    'CFS is the AI sales team for builders without a CMO. Lead → Site Visit → Booking. 7-day launch, WhatsApp + voice AI in Kannada/Hindi/Telugu, AI Creative Studio. Transparent pricing, no lock-in.',
  keywords: [
    'real estate marketing Bengaluru',
    'builder lead qualification',
    'voice AI Kannada',
    'site visit booking',
    'real estate AI India',
    'K-RERA marketing',
    'sellout engine'
  ],
  openGraph: {
    title: 'CFS — The Sellout Engine for Builders',
    description:
      'AI sales team for builders without a CMO. Built once. Runs forever.',
    type: 'website',
    locale: 'en_IN'
  },
  robots: { index: true, follow: true }
};

export const viewport = {
  themeColor: '#08080A'
};

export default function BuildersCfsLayout({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      {/* Wrapper overrides root layout's bg-bg-primary with the builders-cfs ink color */}
      <div className="bg-bld-ink text-bld-white min-h-screen antialiased">
        <Nav />
        <main id="main" className="pt-16">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </div>
    </LenisProvider>
  );
}
