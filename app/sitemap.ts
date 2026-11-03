import type { MetadataRoute } from 'next';
import {
  getAllCarSlugs,
  getAllLocationSlugs,
  getAllGuideSlugs,
  getAllPickupPointSlugs,
} from '@/lib/sanity/fetch';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hereandnow.es';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [cars, locations, guides, pickupPoints] = await Promise.all([
    getAllCarSlugs(),
    getAllLocationSlugs(),
    getAllGuideSlugs(),
    getAllPickupPointSlugs(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/flota`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/guias`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/contacto`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/terminos-y-condiciones`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/politica-cancelacion`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/privacidad`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/aviso-legal`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/cookies`, changeFrequency: 'yearly', priority: 0.2 },
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

  const guideRoutes: MetadataRoute.Sitemap = (guides ?? []).map((guide) => ({
    url: `${SITE_URL}/guias/${guide.slug}`,
    lastModified: new Date(guide.updatedAt ?? guide.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...locationRoutes,
    ...pickupPointRoutes,
    ...carRoutes,
    ...guideRoutes,
  ];
}
