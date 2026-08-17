import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(src: string): string {
  if (!src) return "/Portfolio/placeholder.svg"
  if (src.startsWith("http://") || src.startsWith("https://")) return src
  if (src.startsWith("/Portfolio")) return src

  return src.startsWith("/") ? `/Portfolio${src}` : `/Portfolio/${src}`
}