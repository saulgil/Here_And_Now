/**
 * Sanity seed script — Here & Now content migration
 *
 * Migrates content classified as KEEP / KEEP_AND_IMPROVE / MERGE
 * from the old WordPress site to the new Sanity data model.
 *
 * Source: docs/content/content-migration.md, docs/content/cars-final.md
 *
 * Run:
 *   npx tsx scripts/seed-sanity.ts
 *
 * Requires:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_TOKEN
 *   (set in .env or pass as environment variables)
 */

import 'dotenv/config';
import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset  = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
const token    = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error('❌  Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-10-01',
  useCdn: false,
  token,
});

// ── Helpers ────────────────────────────────────────────────────────
function ref(id: string) { return { _type: 'reference', _ref: id }; }
function slug(s: string) { return { _type: 'slug', current: s }; }
function ls(es: string, en?: string) { return en ? { es, en } : { es }; }
function lt(es: string, en?: string) { return en ? { es, en } : { es }; }
function key(s: string) { return s.replace(/\W+/g, '-').toLowerCase().substring(0, 20); }

function block(text: string) {
  return [{
    _key: key(text),
    _type: 'block',
    style: 'normal',
    markDefs: [],
    children: [{ _key: `c-${key(text)}`, _type: 'span', marks: [], text }],
  }];
}

function lbc(es: string, en?: string) {
  return en ? { es: block(es), en: block(en) } : { es: block(es) };
}

// ── upsert: create or replace by _id ─────────────────────────────
async function upsert(doc: Record<string, unknown>) {
  try {
    await client.createOrReplace(doc as Parameters<typeof client.createOrReplace>[0]);
    console.log(`  ✓  ${doc._type} / ${doc._id}`);
  } catch (err) {
    console.error(`  ✗  ${doc._type} / ${doc._id}:`, (err as Error).message);
  }
}

// ═══════════════════════════════════════════════════════════════════
// SEED DATA
// ═══════════════════════════════════════════════════════════════════

async function seed() {
  console.log('\n🚀  Here & Now — Sanity seed starting…\n');

  // ── 1. BRAND ────────────────────────────────────────────────────
  console.log('── Brand');
  await upsert({
    _id: 'brand-mercedes-benz',
    _type: 'brand',
    name: 'Mercedes-Benz',
    slug: slug('mercedes-benz'),
    description: lt(
      'La marca alemana de referencia en vehículos premium. Fundada en 1926, es sinónimo de ingeniería de precisión, confort y tecnología de vanguardia.',
      'The German reference brand in premium vehicles. Founded in 1926, synonymous with precision engineering, comfort and cutting-edge technology.',
    ),
  });

  // ── 2. CAR CATEGORY ─────────────────────────────────────────────
  console.log('── CarCategory');
  await upsert({
    _id: 'carcat-monovolumen',
    _type: 'carCategory',
    name: ls('Monovolumen', 'Minivan'),
    slug: slug('monovolumen'),
    description: lt(
      'Vehículos de gran tamaño con hasta 8 plazas. Perfectos para grupos, familias y traslados premium con equipaje.',
      'Large vehicles with up to 8 seats. Perfect for groups, families and premium transfers with luggage.',
    ),
    icon: 'Car',
    order: 1,
  });

  // ── 3. LOCATIONS ─────────────────────────────────────────────────
  console.log('── Locations');
  await upsert({
    _id: 'location-ibiza',
    _type: 'location',
    name: ls('Ibiza', 'Ibiza'),
    slug: slug('ibiza'),
    countryCode: 'ES',
    region: 'Islas Baleares',
    shortDescription: lt(
      'La isla del lujo y las playas cristalinas. Explora Ibiza en un Mercedes y descubre sus calas más exclusivas.',
      'The island of luxury and crystal-clear beaches. Explore Ibiza in a Mercedes and discover its most exclusive coves.',
    ),
    seo: {
      metaTitle: ls(
        'Alquiler de coches Mercedes en Ibiza — Reserva online | Here & Now',
        'Mercedes Car Rental in Ibiza — Book online | Here & Now',
      ),
      metaDescription: ls(
        'Alquila un Mercedes en Ibiza desde 130€/día. Recogida en aeropuerto, puerto u otro punto. Mercedes Clase V con hasta 8 plazas. Sin sorpresas.',
        'Rent a Mercedes in Ibiza from €130/day. Pick-up at airport, port or other point. Mercedes V Class with up to 8 seats.',
      ),
      noindex: false,
    },
  });

  await upsert({
    _id: 'location-alicante',
    _type: 'location',
    name: ls('Alicante', 'Alicante'),
    slug: slug('alicante'),
    countryCode: 'ES',
    region: 'Comunidad Valenciana',
    shortDescription: lt(
      'La Costa Blanca en un Mercedes. Disponible todo el año con oficina propia en El Campello.',
      'The Costa Blanca in a Mercedes. Available year-round with our own office in El Campello.',
    ),
    seo: {
      metaTitle: ls(
        'Alquiler de coches Mercedes en Alicante — Reserva online | Here & Now',
        'Mercedes Car Rental in Alicante — Book online | Here & Now',
      ),
      metaDescription: ls(
        'Alquila un Mercedes en Alicante desde 130€/día. Oficina propia en El Campello, aeropuerto y puerto. Mercedes Clase V 8 plazas. Reserva ahora.',
        'Rent a Mercedes in Alicante from €130/day. Own office in El Campello, airport and port. Mercedes V Class 8 seats. Book now.',
      ),
      noindex: false,
    },
  });

  // ── 4. PICKUP POINTS ─────────────────────────────────────────────
  console.log('── PickupPoints');

  // Ibiza — Aeropuerto
  await upsert({
    _id: 'pickup-aeropuerto-ibiza',
    _type: 'pickupPoint',
    name: ls('Aeropuerto de Ibiza (IBZ)', 'Ibiza Airport (IBZ)'),
    slug: slug('aeropuerto'),
    location: ref('location-ibiza'),
    address: 'Aeropuerto de Ibiza (IBZ), 07820 Sant Josep de sa Talaia',
    coordinates: { _type: 'geopoint', lat: 38.8729, lng: 1.3732 },
    phone: '+34625305620',
    shortDescription: lt(
      'Terminal de llegadas, planta baja. Te esperamos con el vehículo preparado.',
      'Arrivals terminal, ground floor. We wait for you with the vehicle ready.',
    ),
    seo: {
      metaTitle: ls('Alquiler coches Aeropuerto Ibiza (IBZ) — Mercedes sin esperas | Here & Now'),
      metaDescription: ls('Recoge tu Mercedes en el Aeropuerto de Ibiza. Check-in rápido. Clase V hasta 8 plazas. Reserva online.'),
      noindex: false,
    },
  });

  // Ibiza — Puerto
  await upsert({
    _id: 'pickup-puerto-ibiza',
    _type: 'pickupPoint',
    name: ls('Puerto de Ibiza', 'Port of Ibiza'),
    slug: slug('puerto'),
    location: ref('location-ibiza'),
    address: 'Puerto de Ibiza, Paseo Marítimo de Eivissa, 07800 Ibiza',
    coordinates: { _type: 'geopoint', lat: 38.9067, lng: 1.4333 },
    phone: '+34625305620',
    shortDescription: lt(
      'Zona de alquiler junto a la dársena. Ideal si llegas en ferri o yate.',
      'Rental area next to the marina. Ideal if you arrive by ferry or yacht.',
    ),
    seo: {
      metaTitle: ls('Alquiler coches Puerto de Ibiza — Recogida en el muelle | Here & Now'),
      metaDescription: ls('Alquila tu Mercedes en el Puerto de Ibiza. Recogida al bajar del ferri. Reserva online.'),
      noindex: false,
    },
  });

  // Alicante — Aeropuerto
  await upsert({
    _id: 'pickup-aeropuerto-alicante',
    _type: 'pickupPoint',
    name: ls('Aeropuerto de Alicante-Elche (ALC)', 'Alicante-Elche Airport (ALC)'),
    slug: slug('aeropuerto'),
    location: ref('location-alicante'),
    address: 'Aeropuerto de Alicante-Elche Miguel Hernández, 03195 L\'Altet',
    coordinates: { _type: 'geopoint', lat: 38.2822, lng: -0.5582 },
    phone: '+34625305620',
    shortDescription: lt(
      'Terminal de llegadas, zona de alquiler de vehículos. Servicio express.',
      'Arrivals terminal, vehicle rental area. Express service.',
    ),
    seo: {
      metaTitle: ls('Alquiler coches Aeropuerto Alicante (ALC) — Mercedes premium | Here & Now'),
      metaDescription: ls('Recoge tu Mercedes en el Aeropuerto de Alicante-Elche. Reserva online con antelación.'),
      noindex: false,
    },
  });

  // Alicante — Oficina El Campello (PRIMARY office)
  await upsert({
    _id: 'pickup-oficina-alicante',
    _type: 'pickupPoint',
    name: ls('Oficina El Campello', 'El Campello Office'),
    slug: slug('oficina'),
    location: ref('location-alicante'),
    address: 'Calle de la Figuera, 5, local 58 — 03560 El Campello (Alicante)',
    coordinates: { _type: 'geopoint', lat: 38.4057238, lng: -0.4077417 },
    phone: '+34625305620',
    openingHours: [
      {
        _key: 'oh-1',
        _type: 'openingHours',
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '21:00',
        closed: false,
      },
    ],
    shortDescription: lt(
      'Oficina propia. Atención personalizada. Abierto todo el año.',
      'Own office. Personalized attention. Open year-round.',
    ),
    seo: {
      metaTitle: ls('Alquiler coches El Campello, Alicante — Oficina propia Here & Now'),
      metaDescription: ls('Visita nuestra oficina en Calle de la Figuera 5, El Campello. Atención personalizada. Flota Mercedes premium.'),
      noindex: false,
    },
  });

  // Alicante — Puerto
  await upsert({
    _id: 'pickup-puerto-alicante',
    _type: 'pickupPoint',
    name: ls('Puerto de Alicante', 'Port of Alicante'),
    slug: slug('puerto'),
    location: ref('location-alicante'),
    address: 'Puerto de Alicante, Muelle de Levante, 03001 Alicante',
    coordinates: { _type: 'geopoint', lat: 38.3352, lng: -0.4819 },
    phone: '+34625305620',
    shortDescription: lt(
      'Muelle de cruceros y ferris. Recogida al bajar del barco.',
      'Cruise and ferry pier. Pick-up as you disembark.',
    ),
    seo: {
      metaTitle: ls('Alquiler coches Puerto de Alicante — Recogida en el muelle | Here & Now'),
      metaDescription: ls('Alquila un Mercedes en el Puerto de Alicante. Ideal para cruceristas. Recogida al bajar del barco.'),
      noindex: false,
    },
  });

  // ── 5. CAR — Mercedes Clase V 220d Avantgard LARGO ─────────────
  console.log('── Car');
  await upsert({
    _id: 'car-mercedes-clase-v-avantgard-largo',
    _type: 'car',
    name: ls(
      'Mercedes Clase V 220d Avantgard LARGO',
      'Mercedes V Class 220D Avantgard Long',
    ),
    internalId: 'car-001',
    slug: slug('mercedes-clase-v-avantgard-largo'),
    brand: ref('brand-mercedes-benz'),
    model: 'Clase V 220d',
    variant: 'Avantgard LARGO',
    year: 2024,
    category: ref('carcat-monovolumen'),
    // ── Technical specs (verified from web) ────────────────────
    passengers: 8,
    doors: 4,
    lateralDoors: true,
    transmission: 'automatic',
    gearbox: '9G-TRONIC',
    fuel: 'diesel',
    // power: UNKNOWN — not available in current site
    // luggage: UNKNOWN — not available in current site
    colorExterior: ls('Negro Obsidiana Metalizado', 'Obsidian Black Metallic'),
    colorInterior: ls('Cuero', 'Leather'),
    wheels: 'Aleación 6,5J x 16',
    // ── Rental conditions ───────────────────────────────────────
    minAge: 26,
    minLicenseYears: 2,
    kmIncluded: 250,
    kmExtraPrice: 0.5,
    // ── Content ─────────────────────────────────────────────────
    shortDescription: lt(
      'Descubre Mercedes Avantgard largo monovolumen de alta gama y de gran tamaño para una experiencia de viaje inigualable con sus 8 cómodas plazas.',
      'Discover the Mercedes Avantgard Long, a premium large minivan for an unrivalled travel experience with its 8 comfortable seats.',
    ),
    fullDescription: lbc(
      'Descubre el Mercedes Clase V, la quinta esencia del monovolumen de gran tamaño que redefine tu viaje en familia o con amigos a Ibiza o Alicante. Este vehículo no solo promete espacio de sobra, sino también una experiencia de viaje inigualable con sus ocho cómodas plazas. Viajar en el Mercedes Clase V es adentrarse en un mundo donde el espacio y la tecnología de última generación se fusionan para ofrecer momentos únicos e inolvidables.',
      'Discover the Mercedes V Class, the quintessence of the large minivan that redefines your trip with family or friends to Ibiza or Alicante. This vehicle not only promises ample space, but also an unrivalled travel experience with its eight comfortable seats.',
    ),
    features: [
      ls('Transmisión automática 9G-TRONIC', '9G-TRONIC automatic transmission'),
      ls('Sensores y cámaras de estacionamiento', 'Parking sensors and cameras'),
      ls('Retrovisores ajustables automáticamente', 'Automatic mirror adjustment'),
      ls('Tomas de corriente 12V en filas traseras', '12V sockets in rear rows'),
      ls('Aire acondicionado TEMPMATIC (zona trasera)', 'TEMPMATIC rear-zone air conditioning'),
      ls('Puertas laterales automáticas', 'Automatic sliding doors'),
      ls('Banco de 3 plazas confort en primera y segunda fila', '3-seat comfort bench in rows 1 and 2'),
      ls('Cristales tintados negros', 'Black tinted windows'),
    ],
    // ── Images ──────────────────────────────────────────────────
    // NOTE: Images must be uploaded manually to Sanity.
    // Source URLs are documented in images.md (WP IDs 963-969)
    // mainImage and gallery will be populated after asset upload
    // ── SEO ─────────────────────────────────────────────────────
    seo: {
      metaTitle: ls(
        'Alquiler Mercedes Clase V Avantgard LARGO — 8 plazas desde 130€/día | Here & Now',
        'Mercedes V Class Avantgard Long Rental — 8 seats from €130/day | Here & Now',
      ),
      metaDescription: ls(
        'Alquila el Mercedes Clase V Avantgard LARGO en Ibiza o Alicante. 8 plazas, automático, recogida en aeropuerto. Desde 130€/día. Reserva ahora.',
        'Rent the Mercedes V Class Avantgard Long in Ibiza or Alicante. 8 seats, automatic, airport pick-up. From €130/day. Book now.',
      ),
      noindex: false,
    },
  });

  // ── 6. CAR AVAILABILITIES ────────────────────────────────────────
  console.log('── CarAvailabilities');

  const extras_ibiza = [
    { _key: 'ext-bb',  _type: 'extra', name: ls('Silleta de bebé (0>9 kg)', 'Baby seat (0-9 kg)'), price: 6.90, pricingModel: 'one_time', maxQuantity: 1 },
    { _key: 'ext-bn',  _type: 'extra', name: ls('Silleta de niño (9>18 kg)', 'Child seat (9-18 kg)'), price: 6.90, pricingModel: 'one_time', maxQuantity: 1 },
    { _key: 'ext-el',  _type: 'extra', name: ls('Elevador (booster)', 'Booster seat'), price: 6.90, pricingModel: 'one_time', maxQuantity: 1 },
    { _key: 'ext-ca',  _type: 'extra', name: ls('Conductor adicional', 'Additional driver'), price: 8.95, pricingModel: 'one_time', maxQuantity: 1 },
  ];

  // NOTE: Alicante uses per_day billing for extras (inconsistency documented in cars-final.md)
  // Kept as-is for fidelity; verify with business before changing
  const extras_alicante = extras_ibiza.map((e) => ({ ...e, pricingModel: 'per_day' as const }));

  const coverages = [
    {
      _key: 'cov-basica',
      _type: 'coverage',
      name: ls('Cobertura básica', 'Basic coverage'),
      slug: 'basica',
      price: 0,
      pricingModel: 'per_booking',
      franchiseAmount: 850,   // Avantgarde
      depositAmountCard: 1500,
      includesRoadside: true,
      description: lt(
        'Franquicia mínima 850€ (Avantgarde). Fianza con tarjeta 1.500€. Asistencia en carretera incluida.',
        'Minimum franchise €850 (Avantgarde). Card deposit €1,500. Roadside assistance included.',
      ),
      isDefault: true,
    },
    {
      _key: 'cov-total',
      _type: 'coverage',
      name: ls('Cobertura total', 'Full coverage'),
      slug: 'total',
      price: 45.50,
      pricingModel: 'per_booking',
      franchiseAmount: 0,
      depositAmountCard: 0, // MISSING — verify exact amount
      includesRoadside: true,
      description: lt(
        'Sin franquicia. Asistencia en carretera incluida.',
        'No franchise. Roadside assistance included.',
      ),
      isDefault: false,
    },
  ];

  await upsert({
    _id: 'availability-v-ibiza',
    _type: 'carAvailability',
    car: ref('car-mercedes-clase-v-avantgard-largo'),
    location: ref('location-ibiza'),
    isActive: true,
    pricePerDay: 130,
    currency: 'EUR',
    availablePickupPoints: [
      ref('pickup-aeropuerto-ibiza'),
      ref('pickup-puerto-ibiza'),
    ],
    extras: extras_ibiza,
    coverages,
  });

  await upsert({
    _id: 'availability-v-alicante',
    _type: 'carAvailability',
    car: ref('car-mercedes-clase-v-avantgard-largo'),
    location: ref('location-alicante'),
    isActive: true,
    pricePerDay: 130,
    currency: 'EUR',
    availablePickupPoints: [
      ref('pickup-aeropuerto-alicante'),
      ref('pickup-oficina-alicante'),
      ref('pickup-puerto-alicante'),
    ],
    extras: extras_alicante,
    coverages,
  });

  // ── 7. TESTIMONIALS ──────────────────────────────────────────────
  console.log('── Testimonials');

  await upsert({
    _id: 'testimonial-eliseo',
    _type: 'testimonial',
    author: 'Eliseo Pérez',
    text: lt(
      '¡Una experiencia inigualable! Here & Now nos brindó el lujo y la comodidad que buscábamos para nuestra escapada en Ibiza. Desde la reserva hasta la entrega del vehículo, el servicio fue impecable. ¡Definitivamente volveremos!',
    ),
    location: ref('location-ibiza'),
    rating: 5,
    featured: true,
    source: 'web',
  });

  await upsert({
    _id: 'testimonial-jose-antonio',
    _type: 'testimonial',
    author: 'José Antonio Puigcerver',
    text: lt(
      '¡La mejor forma de explorar Ibiza con estilo! Gracias a Here & Now, pude recorrer la isla en un vehículo de lujo que superó todas mis expectativas. Su atención al detalle y su flota de primera clase hacen que sea la opción número uno para alquiler de coches en la isla.',
    ),
    location: ref('location-ibiza'),
    rating: 5,
    featured: true,
    source: 'web',
  });

  await upsert({
    _id: 'testimonial-clara',
    _type: 'testimonial',
    author: 'Clara García',
    text: lt(
      'Una experiencia de alquiler de coches excepcional. Here & Now no solo ofrece una selección impresionante de vehículos de lujo, sino también un servicio al cliente excepcional. ¡Recomendaría esta agencia a cualquiera que busque una experiencia premium en Ibiza!',
    ),
    location: ref('location-ibiza'),
    rating: 5,
    featured: true,
    source: 'web',
  });

  // ── 8. FAQs ──────────────────────────────────────────────────────
  console.log('── FAQs');

  const faqData = [
    // General
    {
      _id: 'faq-requisitos',
      question: ls('¿Cuáles son los requisitos para alquilar un coche?', 'What are the requirements to rent a car?'),
      answer: lbc(
        'Debes tener un mínimo de 26 años y al menos 2 años de antigüedad del carnet de conducir. Es necesario presentar DNI o pasaporte y una tarjeta de crédito para la fianza. La fianza se devuelve íntegramente al finalizar el alquiler sin incidencias.',
        'You must be at least 26 years old with a minimum of 2 years\' driving licence. You must present ID or passport and a credit card for the deposit.',
      ),
      category: 'general',
      order: 1,
    },
    {
      _id: 'faq-precio',
      question: ls('¿Qué incluye el precio del alquiler?', 'What does the rental price include?'),
      answer: lbc(
        'El precio incluye el vehículo por día, 250 km diarios, asistencia en carretera 24h y la cobertura básica. Los kilómetros adicionales se cobran a 0,50€/km. Puedes añadir coberturas adicionales, silletas o conductor extra.',
        'The price includes the vehicle per day, 250 km per day, 24h roadside assistance and basic coverage. Additional kilometres are charged at €0.50/km.',
      ),
      category: 'general',
      order: 2,
    },
    {
      _id: 'faq-recogida',
      question: ls('¿Dónde puedo recoger y entregar el vehículo?', 'Where can I pick up and return the vehicle?'),
      answer: lbc(
        'Operamos en varios puntos de Ibiza (aeropuerto y puerto) y Alicante (aeropuerto, puerto y nuestra oficina propia en El Campello). También podemos acordar otros puntos de recogida o entrega.',
        'We operate at several points in Ibiza (airport and port) and Alicante (airport, port and our own office in El Campello).',
      ),
      category: 'general',
      order: 3,
    },
    {
      _id: 'faq-cancelacion',
      question: ls('¿Puedo cancelar mi reserva?', 'Can I cancel my booking?'),
      answer: lbc(
        'Sí. Consulta nuestra política de cancelación para ver los plazos y condiciones. Trabajamos con flexibilidad para adaptarnos a tus necesidades.',
        'Yes. Check our cancellation policy for deadlines and conditions.',
      ),
      category: 'booking',
      order: 4,
    },
    // Ibiza-specific
    {
      _id: 'faq-ibiza-aeropuerto',
      question: ls('¿Puedo recoger el coche directamente en el aeropuerto de Ibiza?'),
      answer: lbc(
        'Sí. Operamos con servicio de recogida en el Aeropuerto de Ibiza (IBZ). Nuestro equipo te espera en el área de llegadas con el vehículo preparado. Solo necesitas confirmar tu hora de aterrizaje al reservar.',
      ),
      category: 'ibiza',
      order: 1,
      relatedLocations: [ref('location-ibiza')],
    },
    {
      _id: 'faq-ibiza-temporada',
      question: ls('¿Es necesario reservar con antelación en temporada alta?'),
      answer: lbc(
        'En julio y agosto la demanda es muy alta. Recomendamos reservar con al menos 2 semanas de antelación para garantizar la disponibilidad del vehículo y el punto de recogida que prefieras.',
      ),
      category: 'ibiza',
      order: 2,
      relatedLocations: [ref('location-ibiza')],
    },
    // Alicante-specific
    {
      _id: 'faq-alicante-oficina',
      question: ls('¿Tenéis oficina física en Alicante?'),
      answer: lbc(
        'Sí. Disponemos de oficina propia en El Campello (Alicante), en la Calle de la Figuera, 5, local 58. Es el único punto de la provincia donde puedes ver los vehículos en persona y resolver cualquier consulta de forma presencial.',
      ),
      category: 'alicante',
      order: 1,
      relatedLocations: [ref('location-alicante')],
    },
    {
      _id: 'faq-alicante-anio',
      question: ls('¿Podéis alquilar coches durante todo el año en Alicante?'),
      answer: lbc(
        'Sí. A diferencia de otros destinos, el alquiler en Alicante está disponible los 12 meses del año. Nuestra oficina en El Campello opera todo el año y el aeropuerto de Alicante-Elche conecta con toda Europa durante todo el año.',
      ),
      category: 'alicante',
      order: 2,
      relatedLocations: [ref('location-alicante')],
    },
    // Vehicle-specific
    {
      _id: 'faq-clase-v-plazas',
      question: ls('¿Cuántas plazas tiene el Mercedes Clase V?'),
      answer: lbc(
        'El Mercedes Clase V 220d Avantgard LARGO tiene 8 plazas, repartidas en hasta tres filas de asientos. Todas las plazas cuentan con cinturones de seguridad homologados.',
      ),
      category: 'vehicle',
      order: 1,
      relatedCars: [ref('car-mercedes-clase-v-avantgard-largo')],
    },
    {
      _id: 'faq-clase-v-km',
      question: ls('¿Cuántos kilómetros incluye el alquiler cada día?'),
      answer: lbc(
        'El alquiler incluye 250 km por día. Los kilómetros adicionales se facturan a 0,50€/km. Para la mayoría de estancias en Ibiza o Alicante, los 250 km diarios son más que suficientes.',
      ),
      category: 'vehicle',
      order: 2,
      relatedCars: [ref('car-mercedes-clase-v-avantgard-largo')],
    },
  ] as const;

  for (const faq of faqData) {
    await upsert({ ...faq, _type: 'faq' });
  }

  // ── 9. SITE SETTINGS (singleton) ────────────────────────────────
  console.log('── SiteSettings');
  await upsert({
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: 'Here & Now',
    tagline: ls(
      'Alquiler de coches Mercedes en Ibiza y Alicante',
      'Mercedes Car Rental in Ibiza and Alicante',
    ),
    // logo: requires manual upload to Sanity assets
    phone: '+34625305620',
    // email: UNKNOWN — not available in current site
    instagramUrl: 'https://www.instagram.com/hereandnowibiza/',
    threadsUrl: 'https://www.threads.net/@hereandnowibiza',
    // facebookUrl: broken link in current site, not migrated
    mainNav: [
      { _key: 'nav-flota',   _type: 'navItem', label: ls('Nuestra flota', 'Our fleet'), href: '/flota',
        children: [
          { _key: 'nav-v',    label: ls('Mercedes Clase V Avantgard Largo', 'Mercedes V Class Avantgard Long'), href: '/flota/mercedes-clase-v-avantgard-largo' },
        ],
      },
      { _key: 'nav-ibiza',   _type: 'navItem', label: ls('Ibiza', 'Ibiza'), href: '/ibiza',
        children: [
          { _key: 'nav-ibz-ap', label: ls('Aeropuerto de Ibiza', 'Ibiza Airport'), href: '/ibiza/aeropuerto' },
          { _key: 'nav-ibz-pt', label: ls('Puerto de Ibiza', 'Port of Ibiza'), href: '/ibiza/puerto' },
        ],
      },
      { _key: 'nav-alicante', _type: 'navItem', label: ls('Alicante', 'Alicante'), href: '/alicante',
        children: [
          { _key: 'nav-alc-ap', label: ls('Aeropuerto de Alicante', 'Alicante Airport'), href: '/alicante/aeropuerto' },
          { _key: 'nav-alc-of', label: ls('Oficina El Campello', 'El Campello Office'), href: '/alicante/oficina' },
          { _key: 'nav-alc-pt', label: ls('Puerto de Alicante', 'Port of Alicante'), href: '/alicante/puerto' },
        ],
      },
      { _key: 'nav-contacto', _type: 'navItem', label: ls('Contacto', 'Contact'), href: '/contacto' },
      { _key: 'nav-reserva',  _type: 'navItem', label: ls('Reservar', 'Book'),
        href: '/flota',
        children: [
          { _key: 'nav-res-ibz', label: ls('Alquiler en Ibiza', 'Car rental in Ibiza'), href: '/ibiza' },
          { _key: 'nav-res-alc', label: ls('Alquiler en Alicante', 'Car rental in Alicante'), href: '/alicante' },
        ],
      },
    ],
    footerNavCol1: [
      { _key: 'fn1-ibz',  _type: 'navItem', label: ls('Reserva en Ibiza', 'Book in Ibiza'), href: '/ibiza' },
      { _key: 'fn1-ibz-ap', _type: 'navItem', label: ls('Aeropuerto de Ibiza', 'Ibiza Airport'), href: '/ibiza/aeropuerto' },
      { _key: 'fn1-ibz-pt', _type: 'navItem', label: ls('Puerto de Ibiza', 'Port of Ibiza'), href: '/ibiza/puerto' },
    ],
    footerNavCol2: [
      { _key: 'fn2-alc',  _type: 'navItem', label: ls('Reserva en Alicante', 'Book in Alicante'), href: '/alicante' },
      { _key: 'fn2-alc-ap', _type: 'navItem', label: ls('Aeropuerto de Alicante', 'Alicante Airport'), href: '/alicante/aeropuerto' },
      { _key: 'fn2-alc-of', _type: 'navItem', label: ls('Oficina El Campello', 'El Campello Office'), href: '/alicante/oficina' },
      { _key: 'fn2-alc-pt', _type: 'navItem', label: ls('Puerto de Alicante', 'Port of Alicante'), href: '/alicante/puerto' },
    ],
    footerNavLegal: [
      { _key: 'fleg-tc',   _type: 'navItem', label: ls('Términos y Condiciones'), href: '/terminos-y-condiciones' },
      { _key: 'fleg-can',  _type: 'navItem', label: ls('Política de Cancelación'), href: '/politica-cancelacion' },
      { _key: 'fleg-priv', _type: 'navItem', label: ls('Privacidad'), href: '/privacidad' },
      { _key: 'fleg-al',   _type: 'navItem', label: ls('Aviso Legal'), href: '/aviso-legal' },
      { _key: 'fleg-ck',   _type: 'navItem', label: ls('Cookies'), href: '/cookies' },
    ],
  });

  // ── 10. SITE PAGES (legal) ───────────────────────────────────────
  // NOTE: Body text for legal pages is NOT fully captured from the current site.
  // Pages are created with placeholder bodies — content must be copied manually.
  console.log('── SitePages (legal shells — bodies need manual fill)');

  const legalPages = [
    { _id: 'sitepage-terminos',   slug: 'terminos-y-condiciones', title: ls('Términos y Condiciones'), type: 'legal', oldUrl: '/terminos-y-condiciones/' },
    { _id: 'sitepage-cancelacion', slug: 'politica-cancelacion', title: ls('Política de Cancelación y Devoluciones'), type: 'legal', oldUrl: '/politica-de-cancelacion-y-devolucion/' },
    { _id: 'sitepage-privacidad', slug: 'privacidad', title: ls('Política de Privacidad'), type: 'legal', oldUrl: '/politica-privacidad/' },
    { _id: 'sitepage-aviso',      slug: 'aviso-legal', title: ls('Aviso Legal'), type: 'legal', oldUrl: '/aviso-legal/' },
    { _id: 'sitepage-cookies',    slug: 'cookies', title: ls('Política de Cookies'), type: 'legal', oldUrl: '/politica-de-cookies-ue/' },
  ];

  for (const p of legalPages) {
    await upsert({
      _id: p._id,
      _type: 'sitePage',
      title: p.title,
      slug: slug(p.slug),
      pageType: 'legal',
      isPublished: false, // ← NOT published until body text is filled
      body: lbc('⚠️ Contenido pendiente de copiar desde el sitio WordPress original.'),
      seo: {
        metaTitle: p.title,
        metaDescription: ls(`Información legal de Here & Now — ${p.title.es}`),
        noindex: false,
      },
    });
  }

  console.log('\n✅  Seed completed.\n');
  console.log('⚠️  MANUAL STEPS REQUIRED:');
  console.log('   1. Upload car images to Sanity (see images.md WP IDs 963-969)');
  console.log('   2. Upload location hero images for Ibiza and Alicante');
  console.log('   3. Upload logo SVG (hereandnowibiza-logo.svg)');
  console.log('   4. Copy legal page body text from current WordPress site');
  console.log('   5. Verify carAvailability extras pricing model (one_time vs per_day inconsistency)');
  console.log('   6. Add car.power and car.luggage when available');
  console.log('   7. Add car.email to siteSettings when available');
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
