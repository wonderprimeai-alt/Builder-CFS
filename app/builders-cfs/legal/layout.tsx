/**
 * Shared layout for /builders-cfs/legal/* — narrow column, prose-style.
 */
import type { ReactNode } from 'react';

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-6 lg:px-8 pt-20 md:pt-28 pb-24 text-bld-soft text-[15px] md:text-[16px] leading-[1.75]">
      {children}
    </article>
  );
}
