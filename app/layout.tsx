import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import { SITE } from '@/lib/constants';
import './globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap'
});

const body = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap'
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.siteUrl),
  title: 'Client Filter System — AI Lead Qualification for Interior Designers, Real Estate & Healthcare | Wonder',
  description:
    "Stop wasting time on unqualified leads. Wonder's AI Client Filter qualifies every lead on WhatsApp — budget, timeline, scope — before they reach your calendar. 89% fewer wasted consultations. Setup in 14 days.",
  keywords: [
    'AI lead qualification',
    'WhatsApp AI',
    'CRM',
    'lead scoring',
    'interior design leads',
    'real estate leads',
    'healthcare appointments',
    'India',
    'Bangalore'
  ],
  authors: [{ name: SITE.founder }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Wonder Client Filter System — Only Qualified Clients Reach You',
    description:
      'AI qualifies your leads 24/7 on WhatsApp. Interior designers, real estate agents, and healthcare clinics save 20+ hours/month.',
    url: SITE.siteUrl,
    siteName: SITE.name,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wonder Client Filter System',
    description: 'AI qualifies your leads 24/7 on WhatsApp. 89% fewer wasted consultations.',
    images: ['/og-image.jpg']
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;

  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'Client Filter System',
              brand: { '@type': 'Brand', name: SITE.name },
              description:
                'AI-powered WhatsApp lead qualification system for interior designers, real estate agents, and healthcare clinics in India.',
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'INR',
                lowPrice: '25000',
                highPrice: '75000',
                offerCount: '3'
              }
            })
          }}
        />
      </head>
      <body className="font-body bg-bg-primary text-text-primary antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-lime focus:text-text-on-lime focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        {children}

        {pixelId && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">{`
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${pixelId}');
              fbq('track', 'PageView');
            `}</Script>
            <noscript>
              <img
                height={1}
                width={1}
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}

        {ga4Id && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4Id}');
            `}</Script>
          </>
        )}
      </body>
    </html>
  );
}
