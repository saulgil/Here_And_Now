import { unstable_cache } from 'next/cache';
import { sanityClient } from './client';
import type {
  SiteSettings, CarListItem, Car, Location, FAQ, Guide, Testimonial, CarAvailability, PickupPoint
} from '@/types/sanity';
import {
  PICKUP_POINT_BY_SLUG_QUERY,
  SITE_SETTINGS_QUERY,
  CAR_BY_SLUG_QUERY,
  ALL_CAR_SLUGS_QUERY,
  ALL_ACTIVE_CARS_QUERY,
  CAR_AVAILABILITIES_QUERY,
  LOCATION_BY_SLUG_QUERY,
  ALL_LOCATION_SLUGS_QUERY,
  PICKUP_POINTS_BY_LOCATION_QUERY,
  ALL_PICKUP_POINT_SLUGS_QUERY,
  FAQS_BY_CATEGORY_QUERY,
  GUIDE_BY_SLUG_QUERY,
  ALL_GUIDE_SLUGS_QUERY,
  FEATURED_TESTIMONIALS_QUERY,
} from './queries';

/** Core fetch wrapper with on-demand cache tags. Returns null on Sanity API errors. */
async function fetchSanity<T>(
  query: string,
  params: Record<string, unknown> = {},
  tags: string[] = [],
): Promise<T | null> {
  const doFetch = (): Promise<T | null> =>
    sanityClient
      .fetch<T>(query, params)
      .catch((err: Error) => {
        // Gracefully degrade when Sanity is not configured or returns an error
        if (process.env.NODE_ENV === 'development') {
          console.warn('[Sanity] Fetch error (configure NEXT_PUBLIC_SANITY_PROJECT_ID):', err.message);
        }
        return null;
      });

  if (process.env.NODE_ENV === 'development') {
    return doFetch();
  }

  const cached = unstable_cache(doFetch, [query, JSON.stringify(params)], {
    tags,
    revalidate: false,
  });
  return cached();
}

// ── Public fetch helpers ────────────────────────────────────────

export function getSiteSettings() {
  return fetchSanity<SiteSettings>(SITE_SETTINGS_QUERY, {}, ['siteSettings']);
}

export function getCarBySlug(slug: string) {
  return fetchSanity<Car>(CAR_BY_SLUG_QUERY, { slug }, ['car', `car:${slug}`]);
}

export function getAllCarSlugs() {
  return fetchSanity<{ slug: string }[]>(ALL_CAR_SLUGS_QUERY, {}, ['car']);
}

export function getAllActiveCars() {
  return fetchSanity<CarListItem[]>(ALL_ACTIVE_CARS_QUERY, {}, ['car', 'carAvailability']);
}

export function getCarAvailabilities(carId: string) {
  return fetchSanity<CarAvailability[]>(CAR_AVAILABILITIES_QUERY, { carId }, ['carAvailability', `car:${carId}`]);
}

export function getLocationBySlug(slug: string) {
  return fetchSanity<Location>(LOCATION_BY_SLUG_QUERY, { slug }, ['location', `location:${slug}`]);
}

export function getAllLocationSlugs() {
  return fetchSanity<{ slug: string }[]>(ALL_LOCATION_SLUGS_QUERY, {}, ['location']);
}

export function getPickupPointsByLocation(locationSlug: string) {
  return fetchSanity<PickupPoint[]>(PICKUP_POINTS_BY_LOCATION_QUERY, { locationSlug }, ['pickupPoint', `location:${locationSlug}`]);
}

export function getPickupPointBySlug(locationSlug: string, pointSlug: string) {
  return fetchSanity<PickupPoint>(
    PICKUP_POINT_BY_SLUG_QUERY,
    { locationSlug, pointSlug },
    ['pickupPoint', `location:${locationSlug}`],
  );
}

export function getAllPickupPointSlugs() {
  return fetchSanity<{ slug: string; locationSlug: string }[]>(ALL_PICKUP_POINT_SLUGS_QUERY, {}, ['pickupPoint']);
}

export function getFaqsByCategory(category: string) {
  return fetchSanity<FAQ[]>(FAQS_BY_CATEGORY_QUERY, { category }, ['faq']);
}

export function getGuideBySlug(slug: string) {
  return fetchSanity<Guide>(GUIDE_BY_SLUG_QUERY, { slug }, ['guide', `guide:${slug}`]);
}

export function getAllGuideSlugs() {
  return fetchSanity<{ slug: string; publishedAt: string; updatedAt?: string }[]>(
    ALL_GUIDE_SLUGS_QUERY, {}, ['guide'],
  );
}

export function getFeaturedTestimonials() {
  return fetchSanity<Testimonial[]>(FEATURED_TESTIMONIALS_QUERY, {}, ['testimonial']);
}
