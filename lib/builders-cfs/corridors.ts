/**
 * Bengaluru micro-market dataset for programmatic SEO.
 * First 6 corridors per master handoff §11. Content drafted from public
 * knowledge — client should redline before launch.
 */

export interface Corridor {
  slug: string;
  name: string;
  aliases?: string[];
  image: string;
  intro: string;
  buyerProfile: string;
  typicalTicket: string;
  dominantBuilders: string;
  demandDrivers: string[];
  cfsAngle: {
    channelMix: string;
    languageMix: string;
    creativeAngle: string;
  };
  benchmark: {
    cpl: string;
    svToBook: string;
    sellout: string;
    note: string;
  };
  faq: { q: string; a: string }[];
  related: string[];
}

export const CORRIDORS: Corridor[] = [
  {
    slug: 'sarjapur-road',
    name: 'Sarjapur Road',
    aliases: ['Sarjapur', 'Sarjapur ORR'],
    image: '/builders-cfs/creatives/softens.png',
    intro:
      'The flagship IT-corridor real-estate spine of east Bengaluru — driven by Wipro, RGA Tech Park, and a 12 km belt of mid-to-premium residential launches. Sarjapur is where IT families upgrade from 2 BHK rentals to 3 BHK homes, and where most builders fight a high-CPL battle.',
    buyerProfile:
      'IT professionals (Wipro / Cisco / IBM / startup employees), dual-income households, 32–44 age band, upgrade buyers from inner-city rentals.',
    typicalTicket: '₹1.2 – 2.6 Cr · mostly 3 BHK · 1100 – 1650 sqft',
    dominantBuilders:
      'A mix of Tier-1 brands (Prestige, Sobha, Brigade) and ambitious Tier-2 builders launching 100–300 unit projects every quarter.',
    demandDrivers: [
      'Wipro + RGA Tech Park anchor employment',
      'ORR connectivity + Sarjapur–Marathahalli arterial',
      'Forthcoming Sarjapur metro line (BMRCL Ph3)',
      'Top-tier schools: Inventure, Greenwood, TISB',
      'Mature lifestyle infra (malls, F&B, hospitals)'
    ],
    cfsAngle: {
      channelMix: 'Meta + Google heavy. Lower MagicBricks/99acres yield.',
      languageMix: 'English + Hindi dominant. Kannada secondary.',
      creativeAngle:
        'Lifestyle-led: school proximity, dual-income financial planning, gated community amenities. Strong reel + UGC formats.'
    },
    benchmark: {
      cpl: '₹1,150',
      svToBook: '11%',
      sellout: '14 mo',
      note: 'Qualified-lead CPL for a well-positioned 150–200 unit launch at ₹1.5–2 Cr ticket.'
    },
    faq: [
      {
        q: 'What CPL should I budget for Sarjapur Road?',
        a: 'Raw Meta/Google leads land ₹600 – ₹900, but qualified-lead CPL for a mid-ticket project realistically runs ₹1,000 – ₹1,800. Sub-₹1,200 is achievable with CFS-grade qualification stripping junk inbound before it touches your sales team.'
      },
      {
        q: 'Is voice AI in Kannada useful here?',
        a: 'Less than Whitefield or Hennur, but still ~20% of inbound prefers Kannada. We default to English + Hindi primary, Kannada on demand.'
      },
      {
        q: 'How fast can a Sarjapur launch hit 20+ SV / week?',
        a: 'Typically week 3 of a properly instrumented campaign — given media budget of ₹3L+/mo and creative refresh every 7 days.'
      }
    ],
    related: ['whitefield', 'hennur-bagaluru', 'off-kanakapura']
  },
  {
    slug: 'whitefield',
    name: 'Whitefield',
    aliases: ['Whitefield East', 'ITPL'],
    image: '/builders-cfs/creatives/penthouse.png',
    intro:
      'The original east Bengaluru tech-corridor real-estate market. ITPL, EPIP, and a dense employer base produce the city’s most sophisticated upgrade buyer — and the most discerning. Premium 2.5 BHK and 3 BHK projects compete on amenity depth, not just price.',
    buyerProfile:
      'Senior IT professionals, MNC managers, NRI-returning buyers. 35–50 age band. Often second-home upgrade from a 2 BHK in nearby Mahadevapura or Marathahalli.',
    typicalTicket: '₹1.4 – 3.2 Cr · 2.5 / 3 / 4 BHK · 1300 – 2200 sqft',
    dominantBuilders:
      'Saturated with Tier-1 brands. Tier-2 builders win on micro-locality (Hope Farm vs ITPL vs Varthur) and on amenity differentiation.',
    demandDrivers: [
      'ITPL + EPIP employment dense',
      'Purple line metro extension (operational)',
      'Hospitals: Manipal, Sakra, Columbia Asia',
      'International schools: TISB, Inventure, Stonehill',
      'Mature retail + entertainment (Phoenix Marketcity, VR Bengaluru)'
    ],
    cfsAngle: {
      channelMix: 'Meta + Google + LinkedIn (for senior IT). 99acres mid-yield.',
      languageMix: 'English primary. Hindi 30%. Kannada 25%.',
      creativeAngle:
        'Amenity-led + school-proximity reels. Hero films work well for ₹2 Cr+ projects. NRI follow-on for ex-Whitefield-now-Singapore buyers.'
    },
    benchmark: {
      cpl: '₹1,480',
      svToBook: '12%',
      sellout: '12–14 mo',
      note: 'Living Structures (live engagement) holds ₹1,480 qualified CPL, 12% no-show — see case study.'
    },
    faq: [
      {
        q: 'Why is Whitefield CPL higher than Sarjapur?',
        a: 'Buyer ticket size is higher (₹2 Cr avg vs ₹1.6 Cr in Sarjapur) and creative bar is higher. Competition from Tier-1 brands also bids up Meta CPMs. CFS offsets this by qualifying hard at the top.'
      },
      {
        q: 'Should I run Telugu creative for Whitefield?',
        a: 'Only if your project is < ₹1.5 Cr ticket and targeting service-industry buyers. For ₹1.8 Cr+, Telugu yields are low. We confirm during onboarding based on your unit mix.'
      },
      {
        q: 'How do NRI Whitefield campaigns work?',
        a: 'Time-zone aware voice AI for US/Singapore working hours, KYC-first qualification, walkthrough video shared remotely. CFS Sellout tier includes NRI add-on.'
      }
    ],
    related: ['sarjapur-road', 'hennur-bagaluru', 'devanahalli-airport']
  },
  {
    slug: 'hennur-bagaluru',
    name: 'Hennur / Bagaluru',
    aliases: ['Hennur Road', 'Bagaluru', 'Thanisandra extension'],
    image: '/builders-cfs/creatives/with-memory-wide.png',
    intro:
      'North-east Bengaluru’s emerging mid-premium corridor. Hennur–Bagaluru sits between Manyata Tech Park and the airport, attracting both tech-belt commuters and airport-adjacent investors. Ticket sizes are catching up to Whitefield but CPL economics are still favourable.',
    buyerProfile:
      'Manyata Tech Park employees, KIAL-adjacent professionals, NRI investors looking for airport-zone appreciation plays. 30–45 age band.',
    typicalTicket: '₹0.9 – 1.8 Cr · mostly 2 / 3 BHK · 950 – 1500 sqft',
    dominantBuilders:
      'Tier-2 dominant. Tier-1 brands have selective entries. Strong opportunity for narrative-led mid-tier launches.',
    demandDrivers: [
      'Manyata Tech Park (15 min)',
      'KIAL Airport (25 min)',
      'STRR + ORR connectivity',
      'Forthcoming Hennur metro extension',
      'Cleaner air + less density vs inner east'
    ],
    cfsAngle: {
      channelMix: 'Meta + Google + 99acres + walk-in QR strong here.',
      languageMix: 'Hindi 35% · English 35% · Kannada 20% · Telugu 10%.',
      creativeAngle:
        'Appreciation-narrative + airport-proximity. Strong UGC + reel formats. Hero films for ₹1.5 Cr+ launches.'
    },
    benchmark: {
      cpl: '₹980',
      svToBook: '13%',
      sellout: '13 mo',
      note: 'Qualified CPL is meaningfully lower than Whitefield for a similar buyer income tier.'
    },
    faq: [
      {
        q: 'Is Hennur–Bagaluru still under-priced vs Whitefield?',
        a: 'Yes — typically 20–30% lower ticket for comparable unit configurations, with similar buyer-profile mix. Appreciation thesis is real but should be substantiated with infra timeline data.'
      },
      {
        q: 'What is the best lead magnet for this corridor?',
        a: 'Airport-proximity calculator (drive time + rental yield projection) + a 4-page micro-market PDF. Both convert well at the qualifier stage.'
      },
      {
        q: 'How do I avoid Manyata Tech Park CPL inflation?',
        a: 'Use behavioural targeting (interest + workplace) rather than radius-based Meta targeting. CFS sets up audiences during setup.'
      }
    ],
    related: ['devanahalli-airport', 'yelahanka-north', 'whitefield']
  },
  {
    slug: 'devanahalli-airport',
    name: 'Devanahalli / Airport',
    aliases: ['Devanahalli', 'KIAL Belt', 'Airport Road'],
    image: '/builders-cfs/creatives/markix-banner.png',
    intro:
      'The airport-adjacent appreciation belt. Devanahalli and adjoining nodes are increasingly home to investor + end-user buyers banking on Bengaluru’s northward expansion. Plotted developments and mid-rise residential launches dominate.',
    buyerProfile:
      'Mix of investors (40%), airport-zone professionals (30%), NRI long-hold buyers (30%). 30–55 age range.',
    typicalTicket: '₹0.8 – 1.6 Cr · plotted ₹0.5 – 1.2 Cr · 2 / 3 BHK + plots',
    dominantBuilders:
      'Mixed — Tier-1 plotted plays (Prestige, Brigade) plus aggressive Tier-2 high-rise launches.',
    demandDrivers: [
      'KIAL Airport (Bengaluru’s only)',
      'Aerospace SEZ + ITIR development zone',
      'STRR + new highway connectivity',
      'Forthcoming airport metro line',
      'Lower land cost vs other corridors'
    ],
    cfsAngle: {
      channelMix: 'Heavy Meta + Google + portals. Walk-in QR strong for plotted.',
      languageMix: 'Hindi 30% · English 30% · Kannada 25% · Telugu 15%.',
      creativeAngle:
        'Appreciation projection-led. Plotted-development carousels work well. NRI Gulf is a meaningful slice.'
    },
    benchmark: {
      cpl: '₹920',
      svToBook: '14%',
      sellout: '12 mo',
      note: 'Lowest qualified CPL among Bengaluru’s primary corridors, but buyer intent must be verified harder.'
    },
    faq: [
      {
        q: 'Are plotted-development leads different from apartment leads?',
        a: 'Yes — plotted buyers are 60% investor / 40% end-user, vs apartments which flip the ratio. Qualifier scripts differ; CFS configures both at setup.'
      },
      {
        q: 'Does Gulf-NRI work for Devanahalli plots?',
        a: 'Strongly. Gulf buyers want appreciation plays + low entry ticket. Arabic creative + KYC-first voice AI is the play. We have a working benchmark for this (Coastline).'
      },
      {
        q: 'When does the airport metro actually come?',
        a: 'BMRCL Phase 2B timelines indicate 2027–28 commissioning. We recommend not building speculative metro-completion narratives into creative.'
      }
    ],
    related: ['yelahanka-north', 'hennur-bagaluru']
  },
  {
    slug: 'yelahanka-north',
    name: 'Yelahanka (North)',
    aliases: ['Yelahanka', 'North Bengaluru'],
    image: '/builders-cfs/creatives/run-home.png',
    intro:
      'A mature, well-loved north Bengaluru micro-market with the best per-rupee livability in the city. Air-force station legacy, mature green cover, and proximity to both KIAL and Manyata make it a quietly strong residential market.',
    buyerProfile:
      'Air-force + ex-defence families, Manyata professionals, KIAL-adjacent staff, return-from-abroad families. 32–55.',
    typicalTicket: '₹1.0 – 2.0 Cr · 2 / 3 BHK · 1000 – 1700 sqft',
    dominantBuilders:
      'Tier-1 + Tier-2 mix. Boutique builders win here on amenity-vs-ticket ratio.',
    demandDrivers: [
      'Manyata Tech Park (20 min)',
      'KIAL Airport (20 min)',
      'Established green cover + parks',
      'Reputed schools: Vidyaniketan, Canadian International',
      'Mature retail (Elements Mall, RMZ Galleria)'
    ],
    cfsAngle: {
      channelMix: 'Meta + Google + 99acres. Walk-in QR mid-yield.',
      languageMix: 'English 40% · Hindi 30% · Kannada 25% · Telugu 5%.',
      creativeAngle:
        'Livability + green-cover narrative. Hero films + lifestyle reels perform. Less appreciation-led than Devanahalli.'
    },
    benchmark: {
      cpl: '₹1,240',
      svToBook: '12%',
      sellout: '13 mo',
      note: 'Sticky end-user market — sellout pace is steady, not explosive.'
    },
    faq: [
      {
        q: 'Is Yelahanka still good for new launches?',
        a: 'Yes for end-user-led 100–250 unit launches with strong amenity differentiation. Less suited for pure investor pitches.'
      },
      {
        q: 'How do I compete with Tier-1 brands here?',
        a: 'Win on amenity-vs-ticket ratio + community story. CFS Creative Studio outputs hero films on a budget that historically required ₹5L+ shoots.'
      },
      {
        q: 'What is the typical NRI mix in Yelahanka?',
        a: '15–20% NRI, mostly Gulf and US. Lower than Whitefield but meaningful.'
      }
    ],
    related: ['devanahalli-airport', 'hennur-bagaluru']
  },
  {
    slug: 'off-kanakapura',
    name: 'Off-Kanakapura',
    aliases: ['Kanakapura Road', 'South Bengaluru', 'JP Nagar extensions'],
    image: '/builders-cfs/creatives/farmlands-family.jpg',
    intro:
      'South Bengaluru’s value-end corridor — Kanakapura Road and its tributaries. End-user dominant, family-led, slower sellout cycles but lower CPL and lower competitive intensity. Strong for mid-ticket 3 BHK launches.',
    buyerProfile:
      'Govt + PSU + service-sector families, Bangalore-born buyers, education-led families. 35–55. Strong intergenerational decision-making.',
    typicalTicket: '₹0.8 – 1.6 Cr · mostly 3 BHK · 1100 – 1500 sqft',
    dominantBuilders:
      'Tier-2 dominant. Tier-1 has selective entries. Strong opportunity for community-led narrative builders.',
    demandDrivers: [
      'Metro Green line (operational)',
      'NICE Road + Mysore Road connectivity',
      'Established schools (Carmel, NPS, BGS)',
      'Major hospitals (Apollo, Fortis, Sagar)',
      'Lower density + better air vs east corridors'
    ],
    cfsAngle: {
      channelMix: 'Meta + Google + 99acres strong. Walk-in QR + community referrals matter.',
      languageMix: 'Kannada 45% · English 25% · Hindi 20% · Tamil 10%.',
      creativeAngle:
        'Family + education-led. Kannada-native reels essential. Less amenity-led, more practicality-led.'
    },
    benchmark: {
      cpl: '₹880',
      svToBook: '14%',
      sellout: '15 mo',
      note: 'Slower decision cycle (45–60 day site-visit-to-book) but high close rate once qualified.'
    },
    faq: [
      {
        q: 'Why is Kanakapura CPL lower than east corridors?',
        a: 'Less competition from Tier-1 brands and lower Meta CPMs. But sales-cycle is longer — budget for 45–60 days between SV and booking.'
      },
      {
        q: 'How important is Kannada voice AI here?',
        a: 'Critical. Nearly half of inbound prefers Kannada. We default to Kannada-primary for this corridor.'
      },
      {
        q: 'Can I run NRI campaigns for Kanakapura?',
        a: 'Some Gulf/US NRI demand exists from Bangalore-roots families. Not a primary play, but worth a 15% spend allocation if your project fits.'
      }
    ],
    related: ['sarjapur-road']
  }
];

export function getCorridor(slug: string): Corridor | undefined {
  return CORRIDORS.find((c) => c.slug === slug);
}
