# CFS / Builders — The Sellout Engine for Builders

Next.js 14 + Tailwind + Framer Motion. Marketing site for CFS, the AI lead-qualification engine for Bengaluru real-estate builders, by Wonder Creative Studio.

## Setup

```bash
cd cfs-website
npm install
cp .env.example .env.local
npm run dev
```

The site lives under `/builders-cfs`. The root path `/` redirects there.

## Structure

- `app/builders-cfs/**` — routes (home, pricing, the-engine, case studies, micro-markets, compare, about, contact, legal)
- `components/builders-cfs/**` — UI components
- `lib/builders-cfs/**` — constants, pricing, corridors, case data, events, WhatsApp/CTA helpers

## Deploy

```bash
vercel --prod
```
