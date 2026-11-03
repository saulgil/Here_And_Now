import { LOCATIONS } from '@/data/locations';
import type { Location } from '@/types';

export function getAllLocations(): Location[] {
  return LOCATIONS;
}

export function getLocationBySlug(slug: string): Location | null {
  return LOCATIONS.find((loc) => loc.slug.current === slug) ?? null;
}

export function getAllLocationSlugs(): { slug: string }[] {
  return LOCATIONS.map((loc) => ({ slug: loc.slug.current }));
}
