import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { getAllActiveCars, getPickupPointBySlug } from '@/lib/sanity/fetch';
import type { CarListItem, FAQ, PickupPoint } from '@/types/sanity';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { PickupPageTemplate, type PickupPageStaticContent } from '@/components/location/PickupPageTemplate';

export const metadata: Metadata = buildMetadata({
  path: '/alicante/oficina',
  fallbackTitle: 'Alquiler coches El Campello, Alicante — Oficina propia Here & Now',
  fallbackDescription:
    'Visita nuestra oficina en Calle de la Figuera 5, El Campello (Alicante). Atención personalizada, flota Mercedes premium. Abierto todo el año.',
});

const OFICINA_FAQS: FAQ[] = [
  {
    _id: 'alc-of-1',
    question: { es: '¿Cuál es el horario de atención de la oficina?' },
    answer: { es: [{ _key: 'a1', _type: 'block', style: 'normal', markDefs: [], children: [{ _key: 'c1', _type: 'span', marks: [], text: 'La oficina atiende de lunes a domingo en horario flexible, adaptado a las llegadas y salidas de los clientes. Recomendamos confirmar la hora exacta al reservar. Llámanos al 625 305 620 para cualquier consulta de horario.' }] }] },
    category: 'alicante',
  },
  {
    _id: 'alc-of-2',
    question: { es: '¿Puedo ver los vehículos en persona antes de reservar?' },
    answer: { es: [{ _key: 'a2', _type: 'block', style: 'normal', markDefs: [], children: [{ _key: 'c2', _type: 'span', marks: [], text: 'Sí, es una de las ventajas de nuestra oficina propia. Puedes venir a ver los vehículos, resolver dudas en persona con nuestro equipo y después decidir. Somos la única empresa de alquiler de Mercedes con oficina propia en la provincia.' }] }] },
    category: 'alicante',
  },
  {
    _id: 'alc-of-3',
    question: { es: '¿Cómo llego a El Campello desde Alicante capital?' },
    answer: { es: [{ _key: 'a3', _type: 'block', style: 'normal', markDefs: [], children: [{ _key: 'c3', _type: 'span', marks: [], text: 'El Campello está a solo 14 km al norte de Alicante capital, aproximadamente 15 minutos por la N-332. También puedes llegar en el TRAM (tranvía) desde Alicante, línea 3, hasta la parada El Campello.' }] }] },
    category: 'alicante',
  },
  {
    _id: 'alc-of-4',
    question: { es: '¿Hay aparcamiento cerca de la oficina?' },
    answer: { es: [{ _key: 'a4', _type: 'block', style: 'normal', markDefs: [], children: [{ _key: 'c4', _type: 'span', marks: [], text: 'Sí. El Campello dispone de varias zonas de aparcamiento público cerca de la oficina. En el centro del pueblo el aparcamiento suele estar disponible y es de pago por horas.' }] }] },
    category: 'alicante',
  },
];

const CONTENT: PickupPageStaticContent = {
  h1: 'Alquiler de coches — Oficina propia en El Campello, Alicante',
  metaTitle: 'Alquiler coches El Campello, Alicante — Oficina propia Here & Now',
  metaDescription: 'Visita nuestra oficina en Calle de la Figuera 5, El Campello (Alicante). Atención personalizada, flota Mercedes premium. Abierto todo el año.',
  eyebrow: 'Oficina propia · El Campello, Alicante',
  intro: 'Somos la única empresa de alquiler de coches Mercedes con oficina física propia en la provincia de Alicante. Atención personalizada, los vehículos a la vista y nuestro equipo disponible para resolver cualquier duda.',
  locationSlug: 'alicante',
  locationName: 'Alicante',
  pointSlug: 'oficina',
  pointType: 'office',
  address: 'Calle de la Figuera, 5, local 58 — 03560 El Campello (Alicante)',
  mapsUrl: 'https://www.google.es/maps/place/Alquiler+Coches+Here+and+Now/@38.405728,-0.4103166,17z',
  openingHoursText: 'Abierto todo el año',
  steps: [
    'Ven a nuestra oficina en la Calle de la Figuera, 5, local 58 (El Campello). Hay aparcamiento cerca.',
    'Nuestro equipo te mostrará los vehículos disponibles y resolverá todas tus dudas en persona.',
    'Tramitamos el contrato, verificamos la documentación y gestionamos la fianza.',
    'Entregas o recibimos el Mercedes en la propia oficina. También hacemos recogida en casa.',
  ],
  localContext:
    'El Campello es un municipio costero a 14 km al norte de Alicante capital, conocido por sus playas de bandera azul y su casco histórico. Nuestra oficina está ubicada a pocos minutos del TRAM (tranvía de Alicante) y de la playa. Desde aquí, la autovía AP-7 te conecta con todo el norte de la Costa Blanca (Benidorm, Calpe, Altea) en menos de 40 minutos, y con el sur (Guardamar, Torrevieja) en 30.',
  faqs: OFICINA_FAQS,
  breadcrumbLabel: 'Oficina El Campello',
};

export default async function AlicanteOficinaPage() {
  const [cars, point] = await Promise.all([
    getAllActiveCars(),
    getPickupPointBySlug('alicante', 'oficina'),
  ]);

  const alicanteCars = ((cars as CarListItem[] | null) ?? []).filter(
    (c) => c.availableLocations?.includes('alicante'),
  );

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hereandnow.es';

  const schemas = [
    generateBreadcrumbSchema([
      { name: 'Inicio', url: siteUrl },
      { name: 'Alicante', url: `${siteUrl}/alicante` },
      { name: 'Oficina El Campello', url: `${siteUrl}/alicante/oficina` },
    ]),
    // Full LocalBusiness with coordinates — this is the primary physical office
    generateLocalBusinessSchema(
      { siteName: 'Here & Now — Oficina El Campello' },
      {
        name: { es: 'Here & Now — Oficina El Campello' },
        address: 'Calle de la Figuera, 5, local 58',
        coordinates: { lat: 38.4057238, lng: -0.4077417 },
        phone: '+34625305620',
        openingHours: [
          { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '09:00', closes: '21:00' },
        ],
      },
    ),
    generateFAQSchema(OFICINA_FAQS, 'es'),
  ];

  return (
    <PickupPageTemplate
      content={CONTENT}
      sanityPoint={point as PickupPoint | null}
      cars={alicanteCars}
      schemas={schemas}
    />
  );
}
