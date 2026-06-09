/**
 * Analytics event helpers for /builders-cfs.
 * Fires to dataLayer (GA4) + fbq (Meta Pixel) when available.
 * See master handoff §14.
 */

import type { WhatsAppContext } from './whatsapp';

type Json = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (...args: unknown[]) => void;
  }
}

function pushGA(event: string, params?: Json) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...(params ?? {}) });
}

function pushPixel(event: string, params?: Json) {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', event, params);
}

export const bcfsEvents = {
  viewHeroShowcase() {
    pushGA('view_hero_showcase');
  },
  switchShowcaseTab(tab: string) {
    pushGA('switch_showcase_tab', { tab });
  },
  useCalculator(inputs: Json) {
    pushGA('use_calculator', { inputs });
  },
  clickWhatsAppCTA(source: string, message: WhatsAppContext) {
    pushGA('click_whatsapp_cta', { source, message });
    pushPixel('Contact', { method: 'whatsapp', source });
  },
  viewPricing() {
    pushGA('view_pricing');
  },
  viewCaseStudy(slug: string) {
    pushGA('view_case_study', { slug });
  },
  viewMicroMarket(corridor: string) {
    pushGA('view_micro_market', { corridor });
  },
  newsletterSignup() {
    pushGA('newsletter_signup');
    pushPixel('Lead', { source: 'newsletter' });
  }
} as const;
