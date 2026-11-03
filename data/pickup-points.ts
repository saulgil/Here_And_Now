import type { PickupPoint } from '@/types';

// Migrated from scripts/seed-sanity.ts (pickupPoint documents). Addresses,
// coordinates, phone and opening hours are the verified values already
// used across app/(site)/ibiza/* and app/(site)/alicante/* pages.
export const PICKUP_POINTS: PickupPoint[] = [
  {
    _id: 'pickup-aeropuerto-ibiza',
    name: { es: 'Aeropuerto de Ibiza (IBZ)', en: 'Ibiza Airport (IBZ)' },
    slug: { current: 'aeropuerto' },
    locationSlug: 'ibiza',
    address: 'Aeropuerto de Ibiza (IBZ), 07820 Sant Josep de sa Talaia',
    coordinates: { lat: 38.8729, lng: 1.3732 },
    phone: '+34625305620',
    shortDescription: {
      es: 'Terminal de llegadas, planta baja. Te esperamos con el vehículo preparado.',
      en: 'Arrivals terminal, ground floor. We wait for you with the vehicle ready.',
    },
    seo: {
      metaTitle: { es: 'Alquiler coches Aeropuerto Ibiza (IBZ) — Mercedes sin esperas | Here & Now' },
      metaDescription: { es: 'Recoge tu Mercedes en el Aeropuerto de Ibiza. Check-in rápido. Clase V hasta 8 plazas. Reserva online.' },
      noindex: false,
    },
  },
  {
    _id: 'pickup-puerto-ibiza',
    name: { es: 'Puerto de Ibiza', en: 'Port of Ibiza' },
    slug: { current: 'puerto' },
    locationSlug: 'ibiza',
    address: 'Puerto de Ibiza, Paseo Marítimo de Eivissa, 07800 Ibiza',
    coordinates: { lat: 38.9067, lng: 1.4333 },
    phone: '+34625305620',
    shortDescription: {
      es: 'Zona de alquiler junto a la dársena. Ideal si llegas en ferri o yate.',
      en: 'Rental area next to the marina. Ideal if you arrive by ferry or yacht.',
    },
    seo: {
      metaTitle: { es: 'Alquiler coches Puerto de Ibiza — Recogida en el muelle | Here & Now' },
      metaDescription: { es: 'Alquila tu Mercedes en el Puerto de Ibiza. Recogida al bajar del ferri. Reserva online.' },
      noindex: false,
    },
  },
  {
    _id: 'pickup-aeropuerto-alicante',
    name: { es: 'Aeropuerto de Alicante-Elche (ALC)', en: 'Alicante-Elche Airport (ALC)' },
    slug: { current: 'aeropuerto' },
    locationSlug: 'alicante',
    address: "Aeropuerto de Alicante-Elche Miguel Hernández, 03195 L'Altet",
    coordinates: { lat: 38.2822, lng: -0.5582 },
    phone: '+34625305620',
    shortDescription: {
      es: 'Terminal de llegadas, zona de alquiler de vehículos. Servicio express.',
      en: 'Arrivals terminal, vehicle rental area. Express service.',
    },
    seo: {
      metaTitle: { es: 'Alquiler coches Aeropuerto Alicante (ALC) — Mercedes premium | Here & Now' },
      metaDescription: { es: 'Recoge tu Mercedes en el Aeropuerto de Alicante-Elche. Reserva online con antelación.' },
      noindex: false,
    },
  },
  {
    _id: 'pickup-oficina-alicante',
    name: { es: 'Oficina El Campello', en: 'El Campello Office' },
    slug: { current: 'oficina' },
    locationSlug: 'alicante',
    address: 'Calle de la Figuera, 5, local 58 — 03560 El Campello (Alicante)',
    coordinates: { lat: 38.4057238, lng: -0.4077417 },
    phone: '+34625305620',
    openingHours: [
      {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '21:00',
        closed: false,
      },
    ],
    shortDescription: {
      es: 'Oficina propia. Atención personalizada. Abierto todo el año.',
      en: 'Own office. Personalized attention. Open year-round.',
    },
    seo: {
      metaTitle: { es: 'Alquiler coches El Campello, Alicante — Oficina propia Here & Now' },
      metaDescription: { es: 'Visita nuestra oficina en Calle de la Figuera 5, El Campello. Atención personalizada. Flota Mercedes premium.' },
      noindex: false,
    },
  },
  {
    _id: 'pickup-puerto-alicante',
    name: { es: 'Puerto de Alicante', en: 'Port of Alicante' },
    slug: { current: 'puerto' },
    locationSlug: 'alicante',
    address: 'Puerto de Alicante, Muelle de Levante, 03001 Alicante',
    coordinates: { lat: 38.3352, lng: -0.4819 },
    phone: '+34625305620',
    shortDescription: {
      es: 'Muelle de cruceros y ferris. Recogida al bajar del barco.',
      en: 'Cruise and ferry pier. Pick-up as you disembark.',
    },
    seo: {
      metaTitle: { es: 'Alquiler coches Puerto de Alicante — Recogida en el muelle | Here & Now' },
      metaDescription: { es: 'Alquila un Mercedes en el Puerto de Alicante. Ideal para cruceristas. Recogida al bajar del barco.' },
      noindex: false,
    },
  },
];
