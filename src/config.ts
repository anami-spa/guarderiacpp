// Base URL configuration for domain deployment
export const BASE_URL = '';

// Helper function to get asset URLs
export function getAssetUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE_URL}/${cleanPath}`;
}
