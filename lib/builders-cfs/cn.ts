/** Tiny className helper scoped to builders-cfs (avoids touching shared utils). */
import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
