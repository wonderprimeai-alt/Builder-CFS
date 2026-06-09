export const SITE = {
  name: 'Wonder Creative Studio',
  product: 'Client Filter System',
  founder: 'Priyabrata Roy',
  parent: 'Integrated Bubble Pvt Ltd',
  city: 'Bangalore, India',
  email: 'hello@wondercreativestudios.com',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '916362765811',
  whatsappBase: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '916362765811'}`,
  ghlBookingUrl:
    process.env.NEXT_PUBLIC_GHL_BOOKING_URL ||
    'https://app.wondercreativestudios.com/widget/booking/yzHd6nZANaJddEGjpnD9',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://wonderstudio.in'
};

/**
 * Build a booking URL with vertical/package context + UTMs forwarded.
 * GHL custom fields can map these query params automatically.
 */
export const buildBookingUrl = (opts: {
  vertical?: string;
  packageId?: string;
  utm?: Record<string, string>;
}) => {
  const url = new URL(SITE.ghlBookingUrl);
  if (opts.vertical) url.searchParams.set('vertical', opts.vertical);
  if (opts.packageId) url.searchParams.set('package', opts.packageId);
  if (opts.utm) {
    Object.entries(opts.utm).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  return url.toString();
};

/**
 * Build a WhatsApp deep link with a prefilled vertical + package context.
 */
export const buildWhatsAppUrl = (opts: { vertical?: string; packageId?: string; custom?: string } = {}) => {
  const base = SITE.whatsappBase;
  let text = `Hi Wonder! I'd like to know more about the Client Filter System`;
  if (opts.packageId) text += ` (${opts.packageId.charAt(0).toUpperCase() + opts.packageId.slice(1)} package)`;
  if (opts.vertical) text += ` for ${opts.vertical}`;
  if (opts.custom) text = opts.custom;
  return `${base}?text=${encodeURIComponent(text)}`;
};

export const PACKAGES = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Stop chasing junk. Install the filter and only get qualified leads.',
    setup: 25000,
    monthly: 15000,
    timeline: { kickoff: 'D1\u20132', build: 'D3\u20136', crm: 'D7\u201310', live: 'D11\u201314' },
    features: [
      'WhatsApp AI Qualifier (Priya)',
      'Vertical-specific qualification script',
      'Lead intake + scoring engine',
      'Budget & timeline qualification flow',
      'Wonder OS CRM \u2014 contact + pipeline setup',
      'Auto lead tagging (Hot / Warm / Cold)',
      'Basic 3-touch nurture sequence',
      'Live performance dashboard'
    ],
    outcomes: [
      'Stop spending time on unqualified calls',
      'Only speak to budget-confirmed leads',
      'Clear visibility of your entire pipeline'
    ],
    bestFor: 'Solo practitioners, small studios'
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Full filter-to-consultation pipeline. From lead-in to deal closed.',
    setup: 45000,
    monthly: 25000,
    popular: true,
    timeline: { kickoff: 'D1\u20132', build: 'D3\u20138', crm: 'D9\u201312', live: 'D13\u201314' },
    features: [
      'Everything in Starter',
      'Auto-booking to Google Calendar',
      'Lead brief sent before each meeting',
      'Multi-source intake (Insta, web, ads, referrals)',
      'Automated 7-touch closure sequence',
      'Advanced scoring (budget \u00D7 urgency \u00D7 intent)',
      'WhatsApp + Email nurture combo',
      'Real-time dashboard + weekly report',
      'Priority support'
    ],
    outcomes: [
      '3\u20135\u00D7 more consultations booked automatically',
      'Every hot lead followed up with precision',
      'Clear attribution \u2014 what works, what doesn\u2019t'
    ],
    bestFor: 'Growing studios, multi-person teams'
  },
  {
    id: 'scale',
    name: 'Scale',
    tagline: 'Complete lead cycle, fully customised. Done for you.',
    setup: 75000,
    monthly: 40000,
    timeline: { kickoff: 'D1\u20134', build: 'D5\u201310', crm: 'D11\u201313', live: 'D14' },
    features: [
      'Everything in Growth',
      'Fully customised lead lifecycle',
      'Multi-channel: WhatsApp + Insta DM + Web chat + Email + SMS',
      'Custom AI persona trained on your brand voice',
      'Dedicated account manager',
      'Monthly strategy call (1hr)',
      'Quarterly system audit & optimisation',
      'Priority support (4hr SLA)'
    ],
    outcomes: [
      'Complete revenue system on autopilot',
      'AI that sounds and responds like your brand',
      'Proactive strategy \u2014 not just execution'
    ],
    bestFor: 'Established businesses, agencies, multi-location'
  }
] as const;

export type PackageId = (typeof PACKAGES)[number]['id'];

export const ADDONS = [
  {
    id: 'meta-leadgen',
    name: 'Meta Lead Gen',
    price: 20000,
    description: 'Campaign creation & optimisation across Facebook + Instagram.',
    iconName: 'Megaphone'
  },
  {
    id: 'google-leadgen',
    name: 'Google Lead Gen',
    price: 20000,
    description: 'Search + Display campaign creation & optimisation.',
    iconName: 'Search'
  },
  {
    id: 'social-media',
    name: 'Social Media Mgmt',
    price: 15000,
    description: '12 posts per month — 8 statics + 4 reels, fully produced.',
    iconName: 'Instagram'
  },
  {
    id: 'seo',
    name: 'Advanced SEO',
    price: 15000,
    description: 'Technical + content SEO — built to rank, not just exist.',
    iconName: 'TrendingUp'
  },
  {
    id: 'consultation',
    name: 'Growth Consultation',
    price: 8000,
    description: '90-minute strategy session with the Wonder team.',
    iconName: 'Target'
  }
] as const;
