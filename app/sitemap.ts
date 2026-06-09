import type { MetadataRoute } from 'next';
import { CASES } from '@/lib/builders-cfs/cases';
import { CORRIDORS } from '@/lib/builders-cfs/corridors';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://wonderstudio.in';
  const now = new Date();

  const staticPages = [
    '/builders-cfs',
    '/builders-cfs/the-engine',
    '/builders-cfs/creative-studio',
    '/builders-cfs/pricing',
    '/builders-cfs/compare/vs-realatte',
    '/builders-cfs/case-studies',
    '/builders-cfs/micro-markets',
    '/builders-cfs/about',
    '/builders-cfs/contact',
    '/builders-cfs/resources/builder-bytes',
    '/builders-cfs/legal/privacy',
    '/builders-cfs/legal/terms',
    '/builders-cfs/legal/rera-disclosures'
  ];

  const dynamicCases = CASES.map((c) => `/builders-cfs/case-studies/${c.slug}`);
  const dynamicCorridors = CORRIDORS.map((c) => `/builders-cfs/micro-markets/${c.slug}`);

  return [...staticPages, ...dynamicCases, ...dynamicCorridors].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: p === '/builders-cfs' ? 'weekly' : 'monthly',
    priority:
      p === '/builders-cfs'
        ? 1
        : p.includes('/case-studies/') || p.includes('/micro-markets/')
          ? 0.7
          : 0.8
  }));
}
