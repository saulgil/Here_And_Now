import { PICKUP_POINTS } from '@/data/pickup-points';
import { LOCATIONS } from '@/data/locations';
import type { PickupPoint } from '@/types';

function withLocationRef(point: PickupPoint): PickupPoint {
  const location = LOCATIONS.find((loc) => loc.slug.current === point.locationSlug);
  return location
    ? { ...point, location: { _id: location._id, name: location.name, slug: location.slug } }
    : point;
}

export function getPickupPointsByLocation(locationSlug: string): PickupPoint[] {
  return PICKUP_POINTS
    .filter((p) => p.locationSlug === locationSlug)
    .map(withLocationRef);
}

export function getPickupPointBySlug(locationSlug: string, pointSlug: string): PickupPoint | null {
  const point = PICKUP_POINTS.find(
    (p) => p.locationSlug === locationSlug && p.slug.current === pointSlug,
  );
  return point ? withLocationRef(point) : null;
}

export function getAllPickupPointSlugs(): { slug: string; locationSlug: string }[] {
  return PICKUP_POINTS.map((p) => ({ slug: p.slug.current, locationSlug: p.locationSlug }));
}
