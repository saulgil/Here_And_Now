import type { Location } from '@/types';

// Migrated from scripts/seed-sanity.ts (location-ibiza, location-alicante).
// No heroImage exists yet (see docs/content/fleet-review.md) — components
// already fall back to a gradient when heroImage is absent.
export const LOCATIONS: Location[] = [
  {
    _id: 'location-ibiza',
    name: { es: 'Ibiza', en: 'Ibiza' },
    slug: { current: 'ibiza' },
    countryCode: 'ES',
    region: 'Islas Baleares',
    shortDescription: {
      es: 'La isla del lujo y las playas cristalinas. Explora Ibiza en un Mercedes y descubre sus calas más exclusivas.',
      en: 'The island of luxury and crystal-clear beaches. Explore Ibiza in a Mercedes and discover its most exclusive coves.',
    },
    seo: {
      metaTitle: {
        es: 'Alquiler de coches Mercedes en Ibiza — Reserva online | Here & Now',
        en: 'Mercedes Car Rental in Ibiza — Book online | Here & Now',
      },
      metaDescription: {
        es: 'Alquila un Mercedes en Ibiza desde 130€/día. Recogida en aeropuerto, puerto u otro punto. Mercedes Clase V con hasta 8 plazas. Sin sorpresas.',
        en: 'Rent a Mercedes in Ibiza from €130/day. Pick-up at airport, port or other point. Mercedes V Class with up to 8 seats.',
      },
      noindex: false,
    },
  },
  {
    _id: 'location-alicante',
    name: { es: 'Alicante', en: 'Alicante' },
    slug: { current: 'alicante' },
    countryCode: 'ES',
    region: 'Comunidad Valenciana',
    shortDescription: {
      es: 'La Costa Blanca en un Mercedes. Disponible todo el año con oficina propia en El Campello.',
      en: 'The Costa Blanca in a Mercedes. Available year-round with our own office in El Campello.',
    },
    seo: {
      metaTitle: {
        es: 'Alquiler de coches Mercedes en Alicante — Reserva online | Here & Now',
        en: 'Mercedes Car Rental in Alicante — Book online | Here & Now',
      },
      metaDescription: {
        es: 'Alquila un Mercedes en Alicante desde 130€/día. Oficina propia en El Campello, aeropuerto y puerto. Mercedes Clase V 8 plazas. Reserva ahora.',
        en: 'Rent a Mercedes in Alicante from €130/day. Own office in El Campello, airport and port. Mercedes V Class 8 seats. Book now.',
      },
      noindex: false,
    },
  },
];
