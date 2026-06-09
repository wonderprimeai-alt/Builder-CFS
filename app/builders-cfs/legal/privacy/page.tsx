import type { Metadata } from 'next';
import { Eyebrow } from '@/components/builders-cfs/Primitives';
import { BCFS } from '@/lib/builders-cfs/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | CFS for Builders',
  description: 'DPDP Act 2023 compliant privacy notice.'
};

export default function PrivacyPage() {
  return (
    <>
      <Eyebrow>LEGAL · PRIVACY</Eyebrow>
      <h1 className="mt-5 font-display font-semibold text-bld-white text-[36px] md:text-[44px] tracking-[-0.02em] leading-[1.04]">
        Privacy Policy
      </h1>
      <p className="mt-4 font-mono text-[11px] tracking-[0.18em] uppercase text-bld-mute">
        DPDP Act 2023 compliant · Last updated: April 2026
      </p>

      <H2>1. Who we are</H2>
      <p>
        CFS (Client Filter System) is a product of {BCFS.parentStudio}, operated by {BCFS.legalEntity}, registered in
        India with its principal office in {BCFS.city}. References to &ldquo;we&rdquo;, &ldquo;us&rdquo; and
        &ldquo;our&rdquo; in this notice mean {BCFS.legalEntity}, acting as the data fiduciary under the Digital
        Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;).
      </p>

      <H2>2. What data we collect</H2>
      <p>We collect only what we need to provide CFS and answer your enquiries. Specifically:</p>
      <Ul
        items={[
          'Contact details you submit through forms, WhatsApp, or email (name, phone, email, company)',
          'Project context you share with us (project name, micro-market, units, ticket band)',
          'WhatsApp / voice conversation transcripts collected by our qualifier system',
          'Anonymised usage analytics: pages viewed, scroll depth, CTA clicks',
          'Cookies for session continuity and analytics (Meta Pixel, GA4)'
        ]}
      />

      <H2>3. Why we collect it</H2>
      <Ul
        items={[
          'To respond to your enquiry and qualify your project',
          'To deliver the CFS service if you become a client',
          'To improve the engine and creative outputs',
          'To send Builder Bytes (only with explicit opt-in)',
          'To comply with applicable laws (tax, K-RERA advertising rules)'
        ]}
      />

      <H2>4. Your rights as a Data Principal</H2>
      <p>Under the DPDP Act you have the right to:</p>
      <Ul
        items={[
          'Access the personal data we hold about you',
          'Correct inaccurate or outdated data',
          'Erase your data (subject to legal retention requirements)',
          'Nominate someone to exercise your rights in case of incapacity',
          'Withdraw consent for any specific processing at any time',
          'Lodge a grievance with our Grievance Officer (below) and, if unresolved, with the Data Protection Board of India'
        ]}
      />

      <H2>5. Data retention</H2>
      <p>
        We retain enquiry data for 24 months from last contact. Client engagement data is retained for the duration of
        the engagement plus 7 years (for tax / compliance). Voice / chat transcripts older than 12 months are
        anonymised. You can request earlier deletion via the Grievance Officer.
      </p>

      <H2>6. Sharing</H2>
      <p>
        We do not sell personal data. We share with: (a) infrastructure providers under DPA contracts (cloud,
        analytics); (b) tax / legal advisors as required by law; (c) your nominated representatives if you instruct
        us. We do not share with marketing partners.
      </p>

      <H2>7. Children</H2>
      <p>
        CFS is a B2B service. We do not knowingly collect data from anyone under 18. If you believe we have, contact
        the Grievance Officer and we will delete it.
      </p>

      <H2>8. Cross-border transfers</H2>
      <p>
        Some processors (e.g. cloud hosting) may store data outside India. We use only providers with adequate
        protections and DPA contracts in place. The Government of India may from time to time restrict transfer to
        specific countries — we comply with such restrictions immediately.
      </p>

      <H2>9. Cookies</H2>
      <p>
        We use strictly-necessary cookies for site functionality and analytical cookies (Meta Pixel, GA4) only with
        consent on first visit. You can withdraw consent any time via your browser settings.
      </p>

      <H2>10. Grievance Officer</H2>
      <p>
        Any complaint, request, or concern should be addressed to: <br />
        <span className="text-bld-white">Grievance Officer · {BCFS.parentStudio}</span>
        <br />
        Email: <a className="text-bld-lime hover:underline" href={`mailto:${BCFS.email}`}>{BCFS.email}</a>
        <br />
        Address: {BCFS.city}, India
        <br />
        Response SLA: within 7 business days.
      </p>

      <H2>11. Updates</H2>
      <p>
        We will update this notice as regulation or our practices evolve. Material changes will be communicated to
        active clients by email. The latest version is always on this page.
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
        <li key={i} className="pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-bld-lime">
          {i}
        </li>
      ))}
    </ul>
  );
}
