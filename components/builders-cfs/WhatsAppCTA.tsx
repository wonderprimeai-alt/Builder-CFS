/**
 * WhatsAppCTA — THE primary CTA across the entire /builders-cfs surface.
 * Every conversion path lands here. Magnetic hover (≤6px translate),
 * lime glow on hover, analytics fired on click.
 */
'use client';

import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, type MouseEvent } from 'react';
import { buildWhatsAppHref, type WhatsAppContext } from '@/lib/builders-cfs/whatsapp';
import { bcfsEvents } from '@/lib/builders-cfs/events';
import { easeBcfs } from '@/lib/builders-cfs/motion';
import { cn } from '@/lib/builders-cfs/cn';

type Variant = 'solid' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface WhatsAppCTAProps {
  context: WhatsAppContext;
  source: string;
  inject?: Record<string, string | number | undefined>;
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  pulseDot?: boolean;
}

export function WhatsAppCTA({
  context,
  source,
  inject,
  children = 'Talk to Priya on WhatsApp',
  variant = 'solid',
  size = 'md',
  className,
  withArrow = true,
  pulseDot = false
}: WhatsAppCTAProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18 });
  const sy = useSpring(my, { stiffness: 220, damping: 18 });
  const tx = useTransform(sx, (v) => v);
  const ty = useTransform(sy, (v) => v);

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    mx.set(Math.max(-6, Math.min(6, dx * 0.18)));
    my.set(Math.max(-4, Math.min(4, dy * 0.18)));
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const handleClick = () => {
    bcfsEvents.clickWhatsAppCTA(source, context);
  };

  const sizes: Record<Size, string> = {
    sm: 'h-9 px-4 text-[13px]',
    md: 'h-11 px-5 text-sm',
    lg: 'h-14 px-7 text-[15px]'
  };

  const variants: Record<Variant, string> = {
    solid:
      'bg-bld-lime text-bld-ink hover:shadow-[0_0_40px_0_rgba(200,255,0,0.45)]',
    outline:
      'border border-bld-edge-lime text-bld-lime hover:bg-bld-lime-dim hover:border-bld-lime',
    ghost: 'text-bld-white/90 hover:text-bld-lime'
  };

  return (
    <motion.a
      ref={ref}
      href={buildWhatsAppHref({ context, inject })}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      style={{ x: tx, y: ty }}
      transition={{ duration: 0.4, ease: easeBcfs }}
      className={cn(
        'group relative inline-flex items-center gap-2 rounded-full font-medium',
        'transition-shadow duration-500',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bld-lime focus-visible:ring-offset-2 focus-visible:ring-offset-bld-ink',
        sizes[size],
        variants[variant],
        className
      )}
    >
      {pulseDot && (
        <span className="relative inline-flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-50" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
        </span>
      )}
      {variant !== 'ghost' && <MessageCircle className="h-4 w-4" strokeWidth={2} />}
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      )}
    </motion.a>
  );
}
