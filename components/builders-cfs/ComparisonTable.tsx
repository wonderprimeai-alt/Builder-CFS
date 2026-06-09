/**
 * ComparisonTable — CFS vs the typical alternatives a Tier-2/2.5 builder
 * faces: a big marketing agency, an in-house team, or a freelancer stack.
 * We do NOT name agencies — comparison is about operating models, not brands.
 * Sticky header, CFS column highlighted lime + animated tracer line.
 */
'use client';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const ROWS = [
  {
    label: 'Minimum spend',
    agency: '₹5L+/mo retainer',
    inhouse: '₹8L+ headcount',
    freelancer: '₹50K + chaos',
    cfs: '₹34,999 setup + ₹49,999/mo'
  },
  {
    label: 'Setup time',
    agency: '60–90 days',
    inhouse: '3–6 months',
    freelancer: 'Never converges',
    cfs: '7–14 days'
  },
  {
    label: 'Voice AI · regional languages',
    agency: 'English only',
    inhouse: 'Manual sales calls',
    freelancer: 'Not offered',
    cfs: 'Kannada · Hindi · Telugu · Arabic'
  },
  {
    label: 'Scoring depth',
    agency: 'Hot / Warm tag',
    inhouse: 'Sales-head gut feel',
    freelancer: 'None',
    cfs: 'Up to 5-stage with intent decay'
  },
  {
    label: 'Pipelines',
    agency: '1–2 generic',
    inhouse: 'Spreadsheet',
    freelancer: 'WhatsApp groups',
    cfs: 'Multi · cross-project routing'
  },
  {
    label: 'Lock-in',
    agency: '12-month contracts',
    inhouse: 'Salaried, permanent',
    freelancer: 'Per-project',
    cfs: 'None after Month 1'
  },
  {
    label: 'Live MD dashboard',
    agency: 'Monthly PPT',
    inhouse: 'Four siloed tools',
    freelancer: 'WhatsApp updates',
    cfs: 'Single live view'
  }
] as const;

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto -mx-6 md:mx-0">
      <div className="min-w-[760px] px-6 md:px-0 relative">
        {/* Tracer line — runs top to bottom inside the CFS column */}
        <motion.div
          aria-hidden
          className="absolute top-0 bottom-0 right-0 w-px pointer-events-none hidden md:block"
          style={{ background: 'linear-gradient(to bottom, transparent, #C8FF00 50%, transparent)' }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3.6, ease: 'easeInOut', repeat: Infinity }}
        />
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="text-left p-4 font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute font-normal">
                What matters
              </th>
              <th className="text-left p-4 font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute font-normal">
                Big marketing agency
              </th>
              <th className="text-left p-4 font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute font-normal">
                In-house team
              </th>
              <th className="text-left p-4 font-mono text-[10px] tracking-[0.22em] uppercase text-bld-mute font-normal">
                Freelancer stack
              </th>
              <th className="text-left p-4 font-mono text-[11px] tracking-[0.22em] uppercase text-bld-lime font-semibold">
                CFS
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr
                key={row.label}
                className={i % 2 === 0 ? 'bg-bld-ink-2/40' : ''}
              >
                <td className="p-4 align-top text-[14px] text-bld-soft border-t border-bld-edge">
                  {row.label}
                </td>
                <td className="p-4 align-top text-[14px] text-bld-mute border-t border-bld-edge">
                  {row.agency}
                </td>
                <td className="p-4 align-top text-[14px] text-bld-mute border-t border-bld-edge">
                  {row.inhouse}
                </td>
                <td className="p-4 align-top text-[14px] text-bld-mute border-t border-bld-edge">
                  {row.freelancer}
                </td>
                <td className="p-4 align-top text-[14px] text-bld-white border-t border-bld-edge-lime bg-bld-lime-dim/30">
                  <span className="inline-flex items-start gap-2">
                    <Check
                      className="h-4 w-4 text-bld-lime mt-0.5 shrink-0"
                      strokeWidth={2.5}
                    />
                    <span>{row.cfs}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
