// Base URL configuration for GitHub Pages deployment
export const BASE_URL = '/guarderiacpp';

// Helper function to get asset URLs
export function getAssetUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE_URL}/${cleanPath}`;
}
