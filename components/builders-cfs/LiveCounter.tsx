/**
 * Pseudo-live counter — value ticks up at a slow steady rate.
 * Used for "qualified visits this month" signature moment.
 */
'use client';

import { useEffect, useState } from 'react';

export function LiveCounter({
  startAt = 1248,
  incrementMs = 4200,
  className
}: {
  startAt?: number;
  incrementMs?: number;
  className?: string;
}) {
  const [v, setV] = useState(startAt);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setV((x) => x + 1), incrementMs);
    return () => clearInterval(id);
  }, [incrementMs]);
  return (
    <span className={className} aria-label={`${v.toLocaleString('en-IN')} qualified site visits this month`}>
      {v.toLocaleString('en-IN')}
    </span>
  );
}
