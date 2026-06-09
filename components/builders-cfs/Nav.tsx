/**
 * Sticky top nav for /builders-cfs.
 * Transparent at top, backdrop-blur after 24px scroll, bottom border.
 * Mobile: slide-in sheet.
 */
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppCTA } from './WhatsAppCTA';
import { cn } from '@/lib/builders-cfs/cn';

const LINKS = [
  { label: 'Engine', href: '/builders-cfs/the-engine' },
  { label: 'Creative', href: '/builders-cfs/creative-studio' },
  { label: 'Pricing', href: '/builders-cfs/pricing' },
  { label: 'Work', href: '/builders-cfs/case-studies' },
  { label: 'Micro-Markets', href: '/builders-cfs/micro-markets' }
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-bld-edge bg-bld-ink/80 backdrop-blur-md'
          : 'border-b border-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/builders-cfs"
          className="group flex items-center gap-2 font-display font-bold tracking-tight text-bld-white"
        >
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-bld-lime">CFS</span>
          <span className="h-3 w-px bg-bld-edge" aria-hidden />
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-bld-soft group-hover:text-bld-white transition-colors">
            Builders
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-bld-soft hover:text-bld-white transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <WhatsAppCTA
            context="nav"
            source="nav"
            size="sm"
            variant="solid"
            withArrow={false}
            pulseDot
          >
            Talk to Priya
          </WhatsAppCTA>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-bld-edge text-bld-white"
          aria-label="Open menu"
        >
          <Menu className="h-4 w-4" />
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={cn(
          'md:hidden fixed inset-0 z-[60] bg-bld-ink transition-opacity duration-300',
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-bld-edge">
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-bld-lime">
            CFS / Builders
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-bld-edge text-bld-white"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex flex-col gap-1 px-6 py-8">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl text-bld-white py-3 border-b border-bld-edge/50"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-8">
            <WhatsAppCTA context="nav" source="nav-mobile" size="lg" pulseDot>
              Talk to Priya
            </WhatsAppCTA>
          </div>
        </div>
      </div>
    </header>
  );
}
