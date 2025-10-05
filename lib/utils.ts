import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to get the correct asset path for GitHub Pages
// Since basePath is set in next.config.mjs, Next.js should handle this automatically
// But for static assets, we need to add it manually
export function getAssetPath(path: string): string {
  // In development, no prefix needed
  if (process.env.NODE_ENV === 'development') {
    return path
  }
  // In production, add the basePath prefix
  const basePath = '/Portfolio'
  // If path already starts with basePath, return as is
  if (path.startsWith(basePath)) {
    return path
  }
  // Add basePath to the path
  return `${basePath}${path}`
}
