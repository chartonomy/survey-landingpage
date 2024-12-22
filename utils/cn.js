import { twMerge } from "tailwind-merge";
import { clsx } from 'clsx'

/**
 * Merge and deduplicate tailwind classes
 * @param args {string[]}
 * @return {string}
 */
export const cn = (...args) => {
  return twMerge(clsx(args))
}
