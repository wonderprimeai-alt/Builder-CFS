import type { Metadata } from 'next';
import { Eyebrow } from '@/components/builders-cfs/Primitives';
import { BCFS } from '@/lib/builders-cfs/constants';

export const metadata: Metadata = {
  title: 'Terms of Service | CFS for Builders',
  description: 'Service terms, billing, cancellation, and IP for CFS engagements.'
};

export default function TermsPage() {
  return (
    <>
      <Eyebrow>LEGAL · TERMS</Eyebrow>
      <h1 className="mt-5 font-display font-semibold text-bld-white text-[36px] md:text-[44px] tracking-[-0.02em] leading-[1.04]">
        Terms of Service
      </h1>
      <p className="mt-4 font-mono text-[11px] tracking-[0.18em] uppercase text-bld-mute">
        Last updated: April 2026
      </p>

      <H2>1. Parties</H2>
      <p>
        These terms govern the engagement between {BCFS.legalEntity} (&ldquo;CFS&rdquo;, &ldquo;we&rdquo;) and the
        business client (&ldquo;Client&rdquo;, &ldquo;you&rdquo;) who has signed up for any of the CFS plans:
        Launchpad, Engine, or Sellout.
      </p>

      <H2>2. The service</H2>
      <p>
        CFS provides a managed marketing &amp; sales infrastructure service for residential real estate builders. The
        scope of each plan is set out at <span className="text-bld-white">/builders-cfs/pricing</span> and forms part
        of these terms by reference.
      </p>

      <H2>3. Billing</H2>
      <Ul
        items={[
          'Setup fee is invoiced at engagement start and payable within 7 days.',
          'Monthly retainer is invoiced on the 1st of each calendar month.',
          'Voice AI usage is invoiced monthly in arrears, at the per-tier rate, against actual minutes consumed.',
          'Media spend is your obligation, paid directly to Meta / Google / portals — CFS manages but does not invoice for media.',
          'All amounts are exclusive of GST, which is added at the applicable rate.'
        ]}
      />

      <H2>4. Cancellation</H2>
      <Ul
        items={[
          'Setup fee is non-refundable once the 7-day build has commenced.',
          'You may cancel any time after Month 1 with 15 days written notice. No 12-month lock-in.',
          'On cancellation, we deactivate the qualifier and dashboard; you retain ownership of your ad accounts and CRM data exports.'
        ]}
      />

      <H2>5. Media spend ownership</H2>
      <p>
        Ad accounts (Meta Business Manager, Google Ads, portal accounts) are owned by you. CFS is granted manager
        access for the duration of the engagement. At end of engagement, CFS access is removed and accounts remain
        with you.
      </p>

      <H2>6. Intellectual property on creative</H2>
      <Ul
        items={[
          'Creative assets produced under your engagement (reels, statics, hero films, copy) are licensed to you for use on your own marketing channels in perpetuity.',
          'CFS retains the right to feature anonymised case-study versions of the work on its own marketing surfaces unless you object in writing.',
          'Source files for hero films can be supplied at end of engagement on request.'
        ]}
      />

      <H2>7. Service levels</H2>
      <Ul
        items={[
          '7-day launch for Launchpad and Engine, 14-day for Sellout — assuming asset handover within 3 business days.',
          'Inbound qualifier response time: &lt; 60 seconds during published working hours.',
          'Sellout plan: 4-hour SLA to dedicated growth manager.',
          'Dashboard uptime target: 99.5% per calendar quarter.'
        ]}
      />

      <H2>8. Compliance</H2>
      <p>
        We deliver creative compliant with K-RERA advertising rules, but final responsibility for project-level RERA
        disclosures (registration number, statutory disclaimers) rests with you as the project promoter. See{' '}
        <a href="/builders-cfs/legal/rera-disclosures" className="text-bld-lime hover:underline">
          /legal/rera-disclosures
        </a>
        .
      </p>

      <H2>9. Liability</H2>
      <p>
        Our aggregate liability for any claim under or in connection with the engagement is capped at the total fees
        paid to CFS in the 6 months preceding the claim. We are not liable for indirect or consequential losses
        (loss of revenue, profits, reputation).
      </p>

      <H2>10. Governing law</H2>
      <p>
        These terms are governed by Indian law. Disputes are subject to the exclusive jurisdiction of the courts at
        Bengaluru, Karnataka.
      </p>

      <H2>11. Contact</H2>
      <p>
        For any commercial / contractual question, email{' '}
        <a className="text-bld-lime hover:underline" href={`mailto:${BCFS.email}`}>
          {BCFS.email}
        </a>
        .
      </p>
    </>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 font-display font-semibold text-bld-white text-[22px] md:text-[24px] tracking-[-0.01em] leading-[1.2]">
      {children}
    </h2>
  );
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((i) => (
        <li
          key={i}
          className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-bld-lime"
          dangerouslySetInnerHTML={{ __html: i }}
        />
      ))}
    </ul>
  );
}
