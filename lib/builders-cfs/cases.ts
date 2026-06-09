/**
 * Case studies dataset.
 * Living Structures is the only LIVE engagement; others are clearly labelled
 * benchmarks projected from the working model (master handoff §8.7).
 */

export type CaseKind = 'live' | 'benchmark';

export interface CaseStudy {
  slug: string;
  kind: CaseKind;
  project: string;
  corridor: string;
  image: string; // hero creative
  status: string; // badge text
  ticketBand: string;
  units: number;
  buyerProfile: string;
  context: string;
  problem: string;
  whatWeBuilt: string[];
  engineConfig: { label: string; value: string }[];
  stats: { label: string; value: string; note?: string }[];
  quote?: { text: string; author: string };
  metricsIndicative?: boolean;
}

export const CASES: CaseStudy[] = [
  {
    slug: 'living-structures-whitefield',
    kind: 'live',
    project: 'Living Structures',
    corridor: 'Whitefield · 2.5 BHK Premium',
    image: '/builders-cfs/creatives/markix-banner.png',
    status: 'Live engagement',
    ticketBand: '₹1.4 – 1.9 Cr',
    units: 144,
    buyerProfile: 'IT professionals · dual-income · 32–44 age',
    context:
      'Mid-launch tier-2.5 builder with a slow-moving 144-unit Whitefield project. CFS came in at week 14 of a 36-month sellout target. Sales head was personally qualifying leads on a private phone. Half the inbound was waiting 6+ hours for a reply.',
    problem:
      'Qualified-lead CPL had drifted from ₹1,480 (month 1) to ₹2,600 by week 14. No-show rate sat at 38%. Tier-2 buyers were moving to a competitor 2 km away because that builder replied in 8 minutes.',
    whatWeBuilt: [
      'WhatsApp + Voice AI qualifier in Kannada / Hindi / English',
      '60-second intake → automatic budget + loan + timeline check',
      'Hot-lead auto-route to Sales Head with full context payload',
      'Site-visit booking with 4-touch reminder sequence (WhatsApp + Voice)',
      '12 hero creatives + Kannada native lip-sync for Meta + Google',
      'Live CPL / SV / sellout dashboard for the MD'
    ],
    engineConfig: [
      { label: 'Plan', value: 'Engine' },
      { label: 'Voice AI', value: 'Kannada · Hindi · English' },
      { label: 'Channels', value: 'Meta · Google · 99acres · Walk-in QR' },
      { label: 'Setup time', value: '11 days' }
    ],
    stats: [
      { label: 'CPL', value: '₹1,480', note: 'from ₹2,600' },
      { label: 'SV / week', value: '22', note: 'from 8' },
      { label: 'No-show', value: '12%', note: 'from 38%' },
      { label: 'Response time', value: '< 90 sec', note: 'from 6 hrs' }
    ],
    quote: {
      text:
        'I stopped checking WhatsApp every 15 minutes. The voice agent qualified leads in Kannada at 11pm. Site visits stopped feeling random.',
      author: 'Sales Head, Living Structures'
    },
    metricsIndicative: true
  },
  {
    slug: 'vrindavan-estates-sarjapur',
    kind: 'benchmark',
    project: 'Vrindavan Estates',
    corridor: 'Sarjapur Road · 180u · 3BHK',
    image: '/builders-cfs/creatives/softens.png',
    status: 'Methodology benchmark',
    ticketBand: '₹1.6 – 2.4 Cr',
    units: 180,
    buyerProfile: 'IT corridor families · upgrade buyers',
    context:
      'Projected benchmark from the working model. Tier-1 IT-corridor builder targeting 14-month sellout on a 180-unit 3BHK project. Heavy competition from 4 adjacent launches.',
    problem:
      'Without CFS: estimated qualified CPL ₹2,200+, 40%+ no-show, 9% SV→book. Sales-team bandwidth burn on unqualified inbound.',
    whatWeBuilt: [
      'AI qualifier triages 100% of inbound in under 60 seconds',
      'NRI + domestic split routing (US/Singapore investors flagged separately)',
      '4-language creative output for Meta + Google',
      'Walk-in QR + 99acres pipeline unified',
      'Live SV-to-booking dashboard'
    ],
    engineConfig: [
      { label: 'Plan', value: 'Engine' },
      { label: 'Voice AI', value: 'Kannada · Hindi · English · Telugu' },
      { label: 'Channels', value: 'Meta · Google · MagicBricks · 99acres' },
      { label: 'Setup time', value: '7 days (target)' }
    ],
    stats: [
      { label: 'CPL', value: '₹1,150' },
      { label: 'SV → Book', value: '11%' },
      { label: 'Sellout', value: '14 mo' },
      { label: 'GDV', value: '₹360 Cr' }
    ]
  },
  {
    slug: 'riverstone-villas-pune-blr',
    kind: 'benchmark',
    project: 'Riverstone Realty',
    corridor: 'Pune-BLR Highway · 42 villas · NRI',
    image: '/builders-cfs/creatives/penthouse.png',
    status: 'Methodology benchmark',
    ticketBand: '₹4.2 – 6.8 Cr',
    units: 42,
    buyerProfile: 'NRI (US / Singapore) · 38–55 · investment-led',
    context:
      'Projected benchmark for a premium 42-villa launch with 70% NRI buyer expectation. Time-zone aware qualification is mandatory.',
    problem:
      'NRI leads are sparse and high-ticket. Cost per genuine qualified lead can exceed ₹5,000. Time-zone misalignment killed past launches — leads went cold by morning.',
    whatWeBuilt: [
      'Time-zone aware voice AI calling — US/Singapore working hours',
      'NRI-specific creative (Arabic for Gulf, English-NRI tone)',
      'KYC + budget verification before site-visit booking',
      'Walkthrough recording auto-shared to remote buyer',
      'Premium hero film (1 per project) + 24 creatives / mo'
    ],
    engineConfig: [
      { label: 'Plan', value: 'Sellout' },
      { label: 'Voice AI', value: 'English (US) · English (UK)' },
      { label: 'Channels', value: 'Meta + LinkedIn + Google + NRI portals' },
      { label: 'Setup time', value: '14 days' }
    ],
    stats: [
      { label: 'CPL', value: '₹3.6K', note: 'NRI' },
      { label: 'SV → Book', value: '19%' },
      { label: 'Sellout', value: '11 mo' },
      { label: 'GDV', value: '₹230 Cr' }
    ]
  },
  {
    slug: 'coastline-mangaluru',
    kind: 'benchmark',
    project: 'Coastline Group',
    corridor: 'Mangaluru · 92u · Gulf-NRI',
    image: '/builders-cfs/creatives/slow-mornings.jpg',
    status: 'Methodology benchmark',
    ticketBand: '₹1.1 – 1.8 Cr',
    units: 92,
    buyerProfile: 'Gulf-NRI (Dubai / Doha / Riyadh) · 35–55',
    context:
      'Projected benchmark for a coastal-town builder targeting Gulf-NRI buyers. Sales cycles are long-distance; trust signals matter more than CPL.',
    problem:
      'Gulf buyers want native Arabic content + Hindi/Kannada call follow-ups + tax-clarity from day one. Generic real-estate ads under-perform 4×.',
    whatWeBuilt: [
      'Arabic-language native creative (10 reels / mo)',
      'Hindi + Kannada voice AI for follow-up calls',
      'NRI tax & remittance explainer landing pages',
      'KYC-first qualification before site-visit',
      'Geo-aware ad targeting by Gulf city'
    ],
    engineConfig: [
      { label: 'Plan', value: 'Sellout' },
      { label: 'Voice AI', value: 'Hindi · Kannada · English' },
      { label: 'Channels', value: 'Meta + Google + Gulf portals' },
      { label: 'Setup time', value: '12 days' }
    ],
    stats: [
      { label: 'CPL', value: '₹3.2K', note: 'Gulf-NRI' },
      { label: 'SV → Book', value: '15%' },
      { label: 'Sellout', value: '13 mo' },
      { label: 'GDV', value: '₹140 Cr' }
    ]
  }
];

export function getCase(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}
