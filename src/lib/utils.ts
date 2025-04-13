import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names and merges them with Tailwind utility classes
 * This utility function helps to properly combine conflicting Tailwind classes
 * and ensures the last class takes precedence over previously defined ones.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}