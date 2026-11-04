import type { Car } from '@/types';

// ── Flota — 2 vehículos CONFIRMED ──────────────────────────────────
// Ver docs/content/fleet-review.md para la justificación completa de cada
// campo. Resumen:
//
// - car-mercedes-clase-v-avantgard-largo (Ibiza) — producto WooCommerce
//   publicado y verificado (ID 2176). Specs, precio, puntos de recogida,
//   extras y coberturas confirmados en la web real.
// - car-mercedes-clase-v-largo (Alicante) — producto WooCommerce (ID 200),
//   confirmado como real por el negocio. Su ficha pública estaba vacía, por
//   lo que las especificaciones técnicas obligatorias (pasajeros, puertas,
//   transmisión, combustible, edad mínima, carnet mínimo, km incluidos) se
//   HEREDAN del vehículo hermano (mismo modelo Mercedes Clase V) y quedan
//   marcadas como PENDIENTES de confirmación exacta para esta variante
//   concreta. Equipamiento/prestaciones específicas (gearbox, color, llantas,
//   features, fotos) NO se inventan — se dejan sin definir hasta que el
//   negocio las confirme.
//
// mainImage/gallery de ambos vehículos usan ahora las fotos reales
// aportadas por el negocio, una carpeta exclusiva por vehículo — no se
// comparte ninguna imagen entre los dos modelos:
// - public/images/cars/mercedes-clase-v-250d-avantgarde-largo-4matic/ (Ibiza — car-mercedes-clase-v-avantgard-largo)
// - public/images/cars/mercedes-clase-v-250d-avantgarde-largo/ (Alicante — car-mercedes-clase-v-largo)
// NOTE: la carpeta de imágenes usada por cada vehículo NO coincide con el
// nombre de carpeta igual a su propio slug — la asociación correcta
// vehículo↔ubicación↔carpeta fue corregida tras detectarse que estaba
// invertida. Ver GALLERY_IBIZA / GALLERY_ALICANTE más abajo.

const EXTRAS_IBIZA = [
  { name: { es: 'Silleta de bebé (0>9 kg)', en: 'Baby seat (0-9 kg)' }, price: 6.9, pricingModel: 'one_time' as const, maxQuantity: 1 },
  { name: { es: 'Silleta de niño (9>18 kg)', en: 'Child seat (9-18 kg)' }, price: 6.9, pricingModel: 'one_time' as const, maxQuantity: 1 },
  { name: { es: 'Elevador (booster)', en: 'Booster seat' }, price: 6.9, pricingModel: 'one_time' as const, maxQuantity: 1 },
  { name: { es: 'Conductor adicional', en: 'Additional driver' }, price: 8.95, pricingModel: 'one_time' as const, maxQuantity: 1 },
];

// NOTE: Alicante bills extras per_day (vs one_time in Ibiza) — this is an
// inconsistency already present in the source data (see cars-final.md,
// inconsistency #1). Preserved as-is; not "fixed" without a business decision.
// Reused for car-mercedes-clase-v-largo (Alicante) too — its own extras were
// never confirmed independently (product page was empty), so the existing
// verified Alicante pricing is applied as the best available data, marked
// as inherited/pending exact confirmation in fleet-review.md.
const EXTRAS_ALICANTE = EXTRAS_IBIZA.map((e) => ({ ...e, pricingModel: 'per_day' as const }));

// Real photos for the Ibiza vehicle (car-mercedes-clase-v-avantgard-largo,
// "Mercedes-Benz Clase V 250 d Avantgarde Largo"). The correct source
// folder for this car's real photos is
// public/images/cars/mercedes-clase-v-250d-avantgarde-largo-4matic/
// (vehicle↔location↔folder association fixed — was previously swapped).
const GALLERY_IBIZA = [
  '01.png', '02.png', '03.png', '04.png', '05.jpg', '06.jpg', '07.jpg', '08.jpeg', '09.png',
].map((file) => ({
  asset: { url: `/images/cars/mercedes-clase-v-250d-avantgarde-largo-4matic/${file}` },
  alt: {
    es: 'Mercedes-Benz Clase V 250 d Avantgarde Largo',
    en: 'Mercedes-Benz V-Class 250 d Avantgarde Long',
  },
}));

// Real photos for the Alicante vehicle (car-mercedes-clase-v-largo,
// "Mercedes-Benz Clase V 250 d Avantgarde Largo 4MATIC"). The correct
// source folder for this car's real photos is
// public/images/cars/mercedes-clase-v-250d-avantgarde-largo/
// (vehicle↔location↔folder association fixed — was previously swapped).
const GALLERY_ALICANTE = [
  '01.png', '02.png', '03.jpg', '04.jpg', '05.png', '06.png', '07.png', '08.png',
].map((file) => ({
  asset: { url: `/images/cars/mercedes-clase-v-250d-avantgarde-largo/${file}` },
  alt: {
    es: 'Mercedes-Benz Clase V 250 d Avantgarde Largo 4MATIC',
  },
}));

// Coverages for car-mercedes-clase-v-avantgard-largo (Ibiza) — verified on
// the live site (franchise 850€/Avantgarde, deposit 1500€, full coverage
// 45.50€/booking).
const COVERAGES_AVANTGARD = [
  {
    name: { es: 'Cobertura básica', en: 'Basic coverage' },
    slug: 'basica',
    price: 0,
    pricingModel: 'per_booking' as const,
    franchiseAmount: 850,
    depositAmountCard: 1500,
    includesRoadside: true,
    description: {
      es: 'Franquicia mínima 850€ (Avantgarde). Fianza con tarjeta 1.500€. Asistencia en carretera incluida.',
      en: 'Minimum franchise €850 (Avantgarde). Card deposit €1,500. Roadside assistance included.',
    },
    isDefault: true,
  },
  {
    name: { es: 'Cobertura total', en: 'Full coverage' },
    slug: 'total',
    price: 45.5,
    pricingModel: 'per_booking' as const,
    franchiseAmount: 0,
    depositAmountCard: 0, // MISSING in source data — see fleet-review.md
    includesRoadside: true,
    description: {
      es: 'Sin franquicia. Asistencia en carretera incluida.',
      en: 'No franchise. Roadside assistance included.',
    },
    isDefault: false,
  },
];

// Coverages for car-mercedes-clase-v-largo (Alicante) — the product page was
// never published, so its own coverage terms were never confirmed directly.
// The live site's coverage copy mentions "franquicia mín. 650€ Clase V"
// (i.e. the non-Avantgarde trim) separately from "850€ Avantgarde y GLC",
// so the lower franchise tier is used here (cars-final.md marks this as
// [INFERRED] from verified coverage text, not fabricated from scratch).
// Deposit and full-coverage price are NOT confirmed for this trim and are
// left as pending (0 / reused structure) — see fleet-review.md.
const COVERAGES_LARGO = [
  {
    name: { es: 'Cobertura básica', en: 'Basic coverage' },
    slug: 'basica',
    price: 0,
    pricingModel: 'per_booking' as const,
    franchiseAmount: 650, // [INFERRED from live coverage copy] — see fleet-review.md
    depositAmountCard: 0, // PENDING — not confirmed for this trim, see fleet-review.md
    includesRoadside: true,
    description: {
      es: 'Franquicia mínima 650€ (Clase V). Fianza con tarjeta pendiente de confirmar. Asistencia en carretera incluida.',
      en: 'Minimum franchise €650 (Clase V). Card deposit pending confirmation. Roadside assistance included.',
    },
    isDefault: true,
  },
];

export const CARS: Car[] = [
  {
    _id: 'car-mercedes-clase-v-avantgard-largo',
    name: {
      es: 'Mercedes-Benz Clase V 250 d Avantgarde Largo',
      en: 'Mercedes-Benz V-Class 250 d Avantgarde Long',
    },
    internalId: 'car-001',
    slug: { current: 'mercedes-clase-v-250d-avantgarde-largo' },
    brand: { name: 'Mercedes-Benz' },
    model: 'Clase V 250 d',
    variant: 'Avantgarde Largo',
    year: 2024,
    category: { name: { es: 'Monovolumen', en: 'Minivan' }, slug: { current: 'monovolumen' } },

    passengers: 8,
    doors: 4,
    lateralDoors: true,
    transmission: 'automatic',
    gearbox: '9G-TRONIC',
    fuel: 'diesel',
    // power / luggage: unknown — never published on the current site
    colorExterior: { es: 'Negro Obsidiana Metalizado', en: 'Obsidian Black Metallic' },
    colorInterior: { es: 'Cuero', en: 'Leather' },
    wheels: 'Aleación 6,5J x 16',

    minAge: 26,
    minLicenseYears: 2,
    kmIncluded: 250,
    kmExtraPrice: 0.5,

    shortDescription: {
      es: 'Descubre Mercedes-Benz Avantgarde largo monovolumen de alta gama y de gran tamaño para una experiencia de viaje inigualable con sus 8 cómodas plazas.',
      en: 'Discover the Mercedes-Benz Avantgarde Long, a premium large minivan for an unrivalled travel experience with its 8 comfortable seats.',
    },
    fullDescription: {
      es: [
        'Descubre el Mercedes Clase V, la quinta esencia del monovolumen de gran tamaño que redefine tu viaje en familia o con amigos a Ibiza o Alicante. Este vehículo no solo promete espacio de sobra, sino también una experiencia de viaje inigualable con sus ocho cómodas plazas. Viajar en el Mercedes Clase V es adentrarse en un mundo donde el espacio y la tecnología de última generación se fusionan para ofrecer momentos únicos e inolvidables.',
      ],
    },
    features: [
      { es: 'Transmisión automática 9G-TRONIC', en: '9G-TRONIC automatic transmission' },
      { es: 'Sensores y cámaras de estacionamiento', en: 'Parking sensors and cameras' },
      { es: 'Retrovisores ajustables automáticamente', en: 'Automatic mirror adjustment' },
      { es: 'Tomas de corriente 12V en filas traseras', en: '12V sockets in rear rows' },
      { es: 'Aire acondicionado TEMPMATIC (zona trasera)', en: 'TEMPMATIC rear-zone air conditioning' },
      { es: 'Puertas laterales automáticas', en: 'Automatic sliding doors' },
      { es: 'Banco de 3 plazas confort en primera y segunda fila', en: '3-seat comfort bench in rows 1 and 2' },
      { es: 'Cristales tintados negros', en: 'Black tinted windows' },
    ],

    mainImage: GALLERY_IBIZA[0],
    gallery: GALLERY_IBIZA,

    active: true,
    featured: true,

    // Only available in Ibiza — the Alicante destination is now covered by
    // the separate confirmed vehicle car-mercedes-clase-v-largo (see below).
    availability: [
      {
        location: 'ibiza',
        active: true,
        pricePerDay: 130,
        currency: 'EUR',
        pickupPoints: ['aeropuerto', 'puerto'],
        extras: EXTRAS_IBIZA,
        coverages: COVERAGES_AVANTGARD,
      },
    ],

    seo: {
      metaTitle: {
        es: 'Alquiler Mercedes-Benz Clase V 250 d Avantgarde Largo — 8 plazas desde 130€/día | Here & Now',
        en: 'Mercedes-Benz V-Class 250 d Avantgarde Long Rental — 8 seats from €130/day | Here & Now',
      },
      metaDescription: {
        es: 'Alquila el Mercedes-Benz Clase V 250 d Avantgarde Largo en Ibiza. 8 plazas, automático, recogida en aeropuerto o puerto. Desde 130€/día. Reserva ahora.',
        en: 'Rent the Mercedes-Benz V-Class 250 d Avantgarde Long in Ibiza. 8 seats, automatic, airport or port pick-up. From €130/day. Book now.',
      },
      noindex: false,
    },
  },

  {
    _id: 'car-mercedes-clase-v-largo',
    name: {
      es: 'Mercedes-Benz Clase V 250 d Avantgarde Largo 4MATIC',
      // en: PENDING — no English name was ever published for this product.
    },
    internalId: 'car-002',
    slug: { current: 'mercedes-clase-v-250d-avantgarde-largo-4matic' },
    brand: { name: 'Mercedes-Benz' },
    model: 'Clase V 250 d',
    variant: 'Avantgarde Largo 4MATIC',
    // year/category: not confirmed for this specific trim — omitted rather
    // than guessed (category "Monovolumen" would be safe but is left out
    // to avoid asserting anything not explicitly confirmed for car-002).

    // ── Technical specs — INHERITED from car-mercedes-clase-v-avantgard-largo ──
    // This product's own page was never published (empty page, draft
    // WooCommerce product ID 200/2287), so these required fields have no
    // confirmed value of their own. Per explicit decision: reuse the sister
    // vehicle's confirmed specs rather than leaving the UI broken, clearly
    // marked here and in docs/content/fleet-review.md as PENDING exact
    // confirmation for this specific variant. Equipment-only optional
    // fields (gearbox, lateralDoors, colorExterior, colorInterior, wheels,
    // power, luggage) are deliberately NOT inherited — they are omitted.
    passengers: 8, // INHERITED / PENDING confirmation for this variant
    doors: 4, // INHERITED / PENDING confirmation for this variant
    transmission: 'automatic', // INHERITED / PENDING confirmation for this variant
    fuel: 'diesel', // INHERITED / PENDING confirmation for this variant
    minAge: 26, // INHERITED / PENDING confirmation for this variant
    minLicenseYears: 2, // INHERITED / PENDING confirmation for this variant
    kmIncluded: 250, // INHERITED / PENDING confirmation for this variant
    kmExtraPrice: 0.5, // INHERITED / PENDING confirmation for this variant

    shortDescription: {
      es: 'Mercedes-Benz Clase V 250 d Avantgarde Largo 4MATIC. Ficha técnica, fotos y descripción pendientes de confirmación por parte del negocio.',
    },
    // fullDescription: PENDING — no description was ever published for this product.
    features: [], // PENDING — no equipment/features confirmed for this product; not invented.

    mainImage: GALLERY_ALICANTE[0],
    gallery: GALLERY_ALICANTE,

    active: true,
    featured: false,

    // Only available in Alicante.
    availability: [
      {
        location: 'alicante',
        active: true,
        pricePerDay: 140, // confirmed — WooCommerce draft product ID 200, now confirmed real
        currency: 'EUR',
        pickupPoints: ['aeropuerto', 'oficina', 'puerto'],
        extras: EXTRAS_ALICANTE, // inherited from sister vehicle's Alicante pricing — see note above
        coverages: COVERAGES_LARGO,
      },
    ],

    seo: {
      metaTitle: {
        es: 'Alquiler Mercedes-Benz Clase V 250 d Avantgarde Largo 4MATIC — Alicante desde 140€/día | Here & Now',
      },
      metaDescription: {
        es: 'Alquila el Mercedes-Benz Clase V 250 d Avantgarde Largo 4MATIC en Alicante. Recogida en aeropuerto, oficina o puerto. Desde 140€/día. Reserva ahora.',
      },
      noindex: false,
    },
  },
];
