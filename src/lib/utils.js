import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes safely, resolving conflicts via tailwind-merge
 * and supporting conditional classes via clsx.
 *
 * @param {...(string|undefined|null|boolean|Record<string,boolean>)} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
