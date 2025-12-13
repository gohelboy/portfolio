/**
 * Get the base URL dynamically based on the current domain
 * Supports multiple domains: dwarkesh.vercel.app, gohelboy.vercel.app, gohel.vercel.app
 */
export function getBaseUrl() {
  // Client-side
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  // Server-side - Vercel provides VERCEL_URL environment variable
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // For local development
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }

  // Default fallback (used during build time)
  return "https://gohelboy.vercel.app";
}
