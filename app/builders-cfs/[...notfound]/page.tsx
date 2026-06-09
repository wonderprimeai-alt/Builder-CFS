/**
 * Catch-all → ensures unmatched /builders-cfs/* routes render our branded 404
 * (Next 14 requires this since segment not-found.tsx only fires when notFound() is thrown).
 */
import { notFound } from 'next/navigation';

export default function CatchAll() {
  notFound();
}
