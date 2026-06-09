/**
 * Footer for /builders-cfs — sitemap, contact, parent-site link, compliance.
 */
import Link from 'next/link';
import { BCFS } from '@/lib/builders-cfs/constants';

const COLS = [
  {
    label: 'PRODUCT',
    links: [
      { label: 'The Engine', href: '/builders-cfs/the-engine' },
      { label: 'Creative Studio', href: '/builders-cfs/creative-studio' },
      { label: 'Pricing', href: '/builders-cfs/pricing' },
      { label: 'How we compare', href: '/builders-cfs/compare/vs-realatte' }
    ]
  },
  {
    label: 'WORK',
    links: [
      { label: 'Case Studies', href: '/builders-cfs/case-studies' },
      { label: 'Micro-Markets', href: '/builders-cfs/micro-markets' },
      { label: 'Builder Bytes', href: '/builders-cfs/resources/builder-bytes' }
    ]
  },
  {
    label: 'STUDIO',
    links: [
      { label: 'About', href: '/builders-cfs/about' },
      { label: 'Contact', href: '/builders-cfs/contact' },
      { label: 'Wonder Studio', href: 'https://wonderstudio.in' }
    ]
  },
  {
    label: 'LEGAL',
    links: [
      { label: 'Privacy', href: '/builders-cfs/legal/privacy' },
      { label: 'Terms', href: '/builders-cfs/legal/terms' },
      { label: 'RERA Disclosures', href: '/builders-cfs/legal/rera-disclosures' }
    ]
  }
] as const;

export function Footer() {
  return (
    <footer className="relative border-t border-bld-edge bg-bld-ink-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-12">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-bld-lime">
                CFS
              </span>
              <span className="h-3 w-px bg-bld-edge" aria-hidden />
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-bld-soft">
                Builders
              </span>
            </div>
            <p className="mt-4 text-sm text-bld-soft leading-relaxed max-w-[260px]">
              The Sellout Engine for Builders. AI sales team for builders without a CMO.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href={`https://wa.me/${BCFS.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-bld-white hover:text-bld-lime transition-colors"
              >
                {BCFS.whatsappDisplay}
              </a>
              <a
                href={`mailto:${BCFS.email}`}
                className="block text-sm text-bld-soft hover:text-bld-white transition-colors"
              >
                {BCFS.email}
              </a>
              <p className="text-sm text-bld-mute">{BCFS.city}, India</p>
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.label}>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute mb-4">
                {col.label}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-bld-soft hover:text-bld-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-bld-edge flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-bld-mute">
          <p>
            © {new Date().getFullYear()} {BCFS.legalEntity}. A {BCFS.parentStudio} product.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Made in {BCFS.city} · For builders, by builders
          </p>
        </div>
      </div>
    </footer>
  );
}
