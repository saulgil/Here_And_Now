import type { MetadataRoute } from 'next';
import { getAllCarSlugs } from '@/lib/data/cars';
import { getAllLocationSlugs } from '@/lib/data/locations';
import { getAllPickupPointSlugs } from '@/lib/data/pickup-points';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hereandnow.es';

export default function sitemap(): MetadataRoute.Sitemap {
  const cars = getAllCarSlugs();
  const locations = getAllLocationSlugs();
  const pickupPoints = getAllPickupPointSlugs();

  // Only routes that actually exist under app/ today. Legal/guides pages
  // are referenced by next.config.ts redirects as future destinations but
  // have no page.tsx yet — do not list them here until they exist (see
  // docs/development/sanity-removal-plan.md and sitemap-404 fix).
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/flota`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/contacto`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/privacidad`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terminos-y-condiciones`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/aviso-legal`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const locationRoutes: MetadataRoute.Sitemap = (locations ?? []).map((loc) => ({
    url: `${SITE_URL}/${loc.slug}`,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const pickupPointRoutes: MetadataRoute.Sitemap = (pickupPoints ?? []).map((pp) => ({
    url: `${SITE_URL}/${pp.locationSlug}/${pp.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const carRoutes: MetadataRoute.Sitemap = (cars ?? []).map((car) => ({
    url: `${SITE_URL}/flota/${car.slug}`,
    changeFrequency: 'weekly',
    priority: 0.95,
  }));

  return [
    ...staticRoutes,
    ...locationRoutes,
    ...pickupPointRoutes,
    ...carRoutes,
  ];
}
