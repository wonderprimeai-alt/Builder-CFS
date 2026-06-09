/**
 * builders-cfs constants
 * Single source of truth for the /builders-cfs surface.
 * Do not import from other parts of the app — this is intentionally isolated.
 */

export const BCFS = {
  // Brand
  product: 'CFS',
  productLockup: 'CFS / Builders',
  tagline: 'The Sellout Engine for Builders',
  parentStudio: 'Wonder Creative Studio',
  legalEntity: 'Integrated Bubble Pvt Ltd',

  // Contact (reused from parent infra, never expose backend tool names)
  whatsappNumber: '916362765811',
  whatsappDisplay: '+91 63627 65811',
  email: 'hello@wondercreativestudios.com',
  city: 'Bengaluru',
  domain: 'wonderstudio.in',

  // GHL — builder-specific calendar id (placeholder; replace when client provides)
  ghlCalendarId: 'TBD_BUILDER_CALENDAR_ID',

  // Headline stat tickers (homepage hero)
  heroStats: [
    { value: 880, prefix: '₹', suffix: '', label: 'CPL FLOOR' },
    { value: 11, prefix: '', suffix: '%', label: 'SV → BOOKING' },
    { value: 7, prefix: '', suffix: '-DAY', label: 'LAUNCH' }
  ] as const,

  // Trust marquee — live engagements + small pilot count.
  // Green dot = engine actively running. Amber = onboarding this month.
  trustMarqueeLabel: 'BUILDERS RUNNING CFS · LIVE NOW',
  trustMarqueeItems: [
    { name: 'Living Structures', kind: 'live' },
    { name: 'Vrindavan Estates', kind: 'live' },
    { name: 'Riverstone Realty', kind: 'live' },
    { name: 'Coastline Group', kind: 'live' },
    { name: 'Hennur Heights', kind: 'live' },
    { name: 'Yelahanka Habitat', kind: 'live' },
    { name: 'Kanakapura Roots', kind: 'live' },
    { name: 'Devanahalli Skyline', kind: 'live' },
    { name: 'Whitefield Crest', kind: 'live' },
    { name: 'Sarjapur Square', kind: 'live' },
    { name: '2 in onboarding', kind: 'pilot' },
    { name: 'Bengaluru-first', kind: 'meta' }
  ] as const,

  // Founder
  founderName: 'Priyabrata',
  founderRole: 'Founder, Wonder Creative Studio'
} as const;

// First 6 micro-market corridors (programmatic SEO seed)
export const BCFS_CORRIDORS = [
  { slug: 'sarjapur-road', name: 'Sarjapur Road' },
  { slug: 'whitefield', name: 'Whitefield' },
  { slug: 'hennur-bagaluru', name: 'Hennur / Bagaluru' },
  { slug: 'devanahalli-airport', name: 'Devanahalli / Airport' },
  { slug: 'yelahanka-north', name: 'Yelahanka (North)' },
  { slug: 'off-kanakapura', name: 'Off-Kanakapura' }
] as const;

// Pricing — three tiers differentiated by automation depth, pipelines and
// integrations (not by creative count or lead-gen volume — both of which
// scale identically across tiers). Lead spend (Meta / Google) stays with
// the builder; we automate everything around it.
export const BCFS_PRICING = [
  {
    id: 'launchpad',
    name: 'Launchpad',
    forWho: 'Single project · first CFS engine · single-language pipeline',
    useCase: 'FOR THE BUILDER TESTING ONE LAUNCH',
    setup: 34999,
    retainer: 49999,
    voiceRate: 18,
    voiceIncluded: 0,
    featured: false,
    automationDepth: '1-stage scoring · 1 pipeline · 2 auto-flows',
    features: [
      'WhatsApp + Voice AI qualifier · 1 project · 1 language',
      '1-stage lead scoring (Hot / Warm / Cold)',
      'Single CRM pipeline (Lead → Qualified → SV → Booking)',
      'Auto SV-confirmation + 24-hour reminder',
      'Single-source attribution (Meta or Google)',
      'Conversation AI · unlimited inbound',
      'Voice AI · pay-as-used at ₹18 / min',
      'CRM access (read-only) + weekly summary email'
    ]
  },
  {
    id: 'engine',
    name: 'Engine',
    forWho: '2–3 active projects · multi-language ops · the growth tier',
    useCase: 'FOR THE BUILDER RUNNING A REAL PORTFOLIO',
    setup: 99999,
    retainer: 124999,
    voiceRate: 15,
    voiceIncluded: 200,
    featured: true,
    badge: 'Most builders pick this',
    automationDepth: '3-stage scoring · multi-pipeline · 9 auto-flows',
    features: [
      'Everything in Launchpad, plus —',
      'WhatsApp + Voice AI in 3 languages (Kannada / Hindi / English)',
      '3-stage scoring rubric with intent decay',
      'Multi-pipeline CRM (separate flows per project / vertical)',
      'Multi-channel reminders (WhatsApp + SMS + Voice fallback)',
      'Unified attribution: Meta + Google + organic + walk-in QR',
      'No-show recovery workflow (3-touch sequence)',
      'Cold-lead revival automation (30 / 60 / 90-day)',
      'Voice AI · 200 min included · ₹15 / min beyond',
      'Full CRM write access + custom fields',
      'Weekly strategy call + live MD dashboard'
    ]
  },
  {
    id: 'sellout',
    name: 'Sellout',
    forWho: 'Portfolio · NRI · enterprise pipelines · multiple parallel launches',
    useCase: 'FOR THE BUILDER SCALING ACROSS PROJECTS & GEOGRAPHIES',
    setup: 179999,
    retainer: 219999,
    voiceRate: 14,
    voiceIncluded: 500,
    featured: false,
    automationDepth: '5-stage scoring · unlimited pipelines · custom integrations',
    features: [
      'Everything in Engine, plus —',
      'WhatsApp + Voice AI in 5 languages (KN / HI / EN / TE + Arabic NRI)',
      '5-stage scoring with intent freshness + time decay',
      'Unlimited parallel pipelines · cross-project routing',
      'NRI workflow stack (time-zone routing · FX-aware qualification)',
      'Loan pre-approval pipeline (HDFC / SBI / ICICI sandbox APIs)',
      'Channel-partner / broker portal with attribution payouts',
      'Programmatic segment-level A/B per pipeline',
      'Voice AI · 500 min included · ₹14 / min beyond',
      'Custom ERP integration (Salesforce / Sell.do / Zoho / bespoke)',
      'Dedicated automation engineer · 4-hour SLA',
      'Weekly strategy + monthly C-suite review'
    ]
  }
] as const;

// "Extend Your Engine" — modular add-ons. Differentiation discipline:
// the engine sells intelligence + infrastructure; creative, media, pages
// and SEO live here as the expansion layer, billed monthly, cancel any
// without touching the core.
export const BCFS_ADDONS = [
  {
    name: 'Creative Production',
    what: 'Studio-grade statics, reels, and film — on-brand and RERA-compliant.',
    price: '₹24,999/mo · 6 hero  ·  ₹44,999/mo · 12 hero  ·  ₹79,999/mo · 24 hero + 1 brand film/qtr',
    note: 'à la carte: ₹2,500 / static · ₹8,000 / reel'
  },
  {
    name: 'Performance Media — Meta + Google',
    what: 'We run the spend the engine qualifies.',
    price: '₹29,999/mo per platform  or  12% of ad spend (whichever is higher)',
    note: 'your media budget stays yours'
  },
  {
    name: 'Landing Page / Microsite',
    what: 'Conversion-built page per project, wired into your engine.',
    price: '₹49,999 one-time per project  +  ₹4,999/mo hosting & optimization',
    note: undefined
  },
  {
    name: 'Local SEO',
    what: 'Own your micro-market in organic search.',
    price: '₹34,999/mo per micro-market',
    note: undefined
  },
  {
    name: 'WhatsApp Business API',
    what: 'Verified green-tick number + conversation infrastructure.',
    price: '₹4,999/mo + platform conversation costs',
    note: undefined
  },
  {
    name: 'Extra Voice AI minutes',
    what: 'Already metered in your engine; scale up any time at your tier rate.',
    price: '₹14–18/min by tier',
    note: undefined
  }
] as const;

// "Launch Accelerator" bundle — upsell anchor, 10% off à la carte.
export const BCFS_ACCELERATOR = {
  badge: 'BUNDLE · SAVE 10%',
  title: 'The Launch Accelerator',
  body: 'Everything a new launch needs, on top of your engine — 12 hero creatives a month, Meta + Google managed, and a conversion-built landing page. Bundled at 10% off à la carte.',
  includes: [
    'Creative Production · 12 hero/mo',
    'Performance Media · Meta + Google',
    'Landing Page · 1 project'
  ]
} as const;
