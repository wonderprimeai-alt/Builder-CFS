import type { Metadata } from 'next';
import { Eyebrow } from '@/components/builders-cfs/Primitives';
import { BCFS } from '@/lib/builders-cfs/constants';

export const metadata: Metadata = {
  title: 'K-RERA Disclosures | CFS for Builders',
  description:
    'How CFS handles K-RERA advertising compliance: registration numbers, statutory disclaimers, and the marketing service-provider boundary.'
};

export default function ReraPage() {
  return (
    <>
      <Eyebrow>LEGAL · K-RERA</Eyebrow>
      <h1 className="mt-5 font-display font-semibold text-bld-white text-[36px] md:text-[44px] tracking-[-0.02em] leading-[1.04]">
        K-RERA Disclosures
      </h1>
      <p className="mt-4 font-mono text-[11px] tracking-[0.18em] uppercase text-bld-mute">
        Karnataka RERA · Marketing service-provider notice · Last updated: April 2026
      </p>

      <H2>What CFS is</H2>
      <p>
        CFS (Client Filter System) is a <span className="text-bld-white">marketing service provider</span>. We
        produce advertising creative and operate lead-qualification infrastructure for residential real estate
        promoters / builders registered under the Karnataka Real Estate Regulatory Authority (K-RERA).
      </p>

      <H2>What CFS is not</H2>
      <Ul
        items={[
          'CFS is not a promoter, developer, builder, or seller of any real estate project.',
          'CFS does not collect or hold deposits, booking amounts, or sale consideration.',
          'CFS is not a real estate agent / broker as defined under the RERA Act, 2016.',
          'CFS does not give buyers investment advice or guarantee any specific outcome on any project.'
        ]}
      />

      <H2>Project advertising compliance</H2>
      <p>
        Any creative we produce for a registered project carries the project&apos;s K-RERA registration number and the
        statutory disclaimer prescribed under the Karnataka Real Estate (Regulation and Development) Rules. Builders
        are responsible for ensuring registration numbers and disclaimers shown are current and accurate; CFS supplies
        these from the project intake brief signed off by the builder.
      </p>

      <H2>Builder responsibility</H2>
      <p>
        Builders retain full and final responsibility for:
      </p>
      <Ul
        items={[
          'Maintaining valid K-RERA registration for advertised projects.',
          'Approving all advertising content prior to publication.',
          'Ensuring that all promised amenities, possession dates, and unit specifications shown in creative match RERA filings.',
          'Handling buyer complaints, deposits, sale agreements, and conveyance — none of which CFS engages in.'
        ]}
      />

      <H2>Misleading advertising</H2>
      <p>
        We will not knowingly produce or place creative that contains misleading claims about projects, amenities,
        possession dates, or returns. If new information emerges that makes existing creative misleading, we will
        pull or update it within 24 hours of being notified.
      </p>

      <H2>Disclaimer language</H2>
      <p>
        Project-specific creative will include a footer disclaimer substantially in the form:{' '}
        <em>
          &ldquo;[Project name] is registered with K-RERA under registration no. PRM/KA/RERA/XXXX/XXX/PR/XXXXXX/XXX. All
          plans, designs, dimensions and specifications are indicative and subject to changes as may be required by the
          relevant authorities.&rdquo;
        </em>
      </p>

      <H2>Contact</H2>
      <p>
        For RERA compliance questions, email{' '}
        <a className="text-bld-lime hover:underline" href={`mailto:${BCFS.email}`}>
          {BCFS.email}
        </a>{' '}
        with the project name and registration number.
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
