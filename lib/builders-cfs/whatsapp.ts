/**
 * Context-aware WhatsApp deep-link builder.
 * Every primary CTA on /builders-cfs opens wa.me with a pre-filled message
 * keyed to the page/section. See master handoff §7.4.
 */

import { BCFS } from './constants';

export type WhatsAppContext =
  | 'nav'
  | 'home-hero'
  | 'home-final'
  | 'pricing-launchpad'
  | 'pricing-engine'
  | 'pricing-sellout'
  | 'case-study'
  | 'micro-market'
  | 'creative-studio'
  | 'engine'
  | 'compare'
  | 'contact';

interface BuildOptions {
  context: WhatsAppContext;
  /** project / corridor / case slug to inject into the message */
  inject?: Record<string, string | number | undefined>;
}

const TEMPLATES: Record<WhatsAppContext, string> = {
  nav: 'Hi Priya, I want to see the Sellout Engine.',
  'home-hero': 'Hi Priya, show me the engine live for my project.',
  'home-final': 'Hi Priya, I want the 4-page audit for my project.',
  'pricing-launchpad': 'Hi Priya, Launchpad plan for our builder business.',
  'pricing-engine':
    'Hi Priya, Engine plan — we have a {units}-unit project in {corridor}.',
  'pricing-sellout': 'Hi Priya, Sellout plan enquiry.',
  'case-study': 'Hi Priya, can I see the full {project} case study?',
  'micro-market':
    "Hi Priya, we're launching in {corridor} — what can CFS do?",
  'creative-studio': 'Hi Priya, I want sample creative for my project.',
  engine: 'Hi Priya, walk me through the four-stage engine.',
  compare: 'Hi Priya, how do you compare to a big agency for us?',
  contact: 'Hi Priya, I want to talk to the team about my project.'
};

function interpolate(template: string, inject?: Record<string, string | number | undefined>) {
  if (!inject) return template;
  return template.replace(/\{(\w+)\}/g, (m, key) => {
    const v = inject[key];
    return v === undefined || v === '' ? m : String(v);
  });
}

export function buildWhatsAppMessage({ context, inject }: BuildOptions): string {
  return interpolate(TEMPLATES[context], inject);
}

export function buildWhatsAppHref(opts: BuildOptions): string {
  const text = encodeURIComponent(buildWhatsAppMessage(opts));
  return `https://wa.me/${BCFS.whatsappNumber}?text=${text}`;
}
