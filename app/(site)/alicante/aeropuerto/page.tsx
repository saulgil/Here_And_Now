import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { getAllActiveCars, getPickupPointBySlug } from '@/lib/sanity/fetch';
import type { CarListItem, FAQ, PickupPoint } from '@/types/sanity';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { PickupPageTemplate, type PickupPageStaticContent } from '@/components/location/PickupPageTemplate';

export const metadata: Metadata = buildMetadata({
  path: '/alicante/aeropuerto',
  fallbackTitle: 'Alquiler coches Aeropuerto Alicante (ALC) — Mercedes premium',
  fallbackDescription:
    'Recoge tu Mercedes en el Aeropuerto de Alicante-Elche. Check-in rápido, coches premium disponibles. Reserva online con antelación.',
});

const ALICANTE_AIRPORT_FAQS: FAQ[] = [
  {
    _id: 'alc-ap-1',
    question: { es: '¿Cómo llego desde el Aeropuerto de Alicante a vuestra oficina de El Campello?' },
    answer: { es: [{ _key: 'a1', _type: 'block', style: 'normal', markDefs: [], children: [{ _key: 'c1', _type: 'span', marks: [], text: 'Desde el aeropuerto ALC hasta nuestra oficina en El Campello son aproximadamente 25 km por la autovía AP-7. El trayecto dura unos 20-25 minutos. Si prefieres, también hacemos recogida directa en el aeropuerto.' }] }] },
    category: 'alicante',
  },
  {
    _id: 'alc-ap-2',
    question: { es: '¿El Aeropuerto de Alicante-Elche opera todo el año?' },
    answer: { es: [{ _key: 'a2', _type: 'block', style: 'normal', markDefs: [], children: [{ _key: 'c2', _type: 'span', marks: [], text: 'Sí. El Aeropuerto de Alicante-Elche (ALC) opera durante todo el año y es uno de los más transitados de España. Nuestro servicio está disponible los 12 meses, con conexiones desde toda Europa.' }] }] },
    category: 'alicante',
  },
  {
    _id: 'alc-ap-3',
    question: { es: '¿Cuánto tiempo tarda el check-in en el aeropuerto de Alicante?' },
    answer: { es: [{ _key: 'a3', _type: 'block', style: 'normal', markDefs: [], children: [{ _key: 'c3', _type: 'span', marks: [], text: 'El proceso suele durar entre 10 y 15 minutos. Verificamos tu documentación, gestionamos la fianza y revisamos el vehículo juntos. Recomendamos tener todos los documentos preparados para agilizarlo.' }] }] },
    category: 'alicante',
  },
];

const CONTENT: PickupPageStaticContent = {
  h1: 'Alquiler de coches en el Aeropuerto de Alicante-Elche (ALC)',
  metaTitle: 'Alquiler coches Aeropuerto Alicante (ALC) — Mercedes premium | Here & Now',
  metaDescription: 'Recoge tu Mercedes en el Aeropuerto de Alicante-Elche. Check-in rápido, coches premium disponibles. Reserva online con antelación.',
  eyebrow: 'Aeropuerto de Alicante-Elche · ALC',
  intro: 'Servicio de recogida de Mercedes premium en el Aeropuerto de Alicante-Elche. Empieza tu aventura por la Costa Blanca desde el primer momento.',
  locationSlug: 'alicante',
  locationName: 'Alicante',
  pointSlug: 'aeropuerto',
  pointType: 'airport',
  iataCode: 'ALC',
  address: 'Aeropuerto de Alicante-Elche Miguel Hernández, 03195 L\'Altet',
  mapsUrl: 'https://www.google.es/maps/place/Aeropuerto+de+Alicante-Elche/',
  openingHoursText: 'Horario según llegadas',
  steps: [
    'Aterriza en el Aeropuerto de Alicante-Elche (ALC). Recoge tu equipaje en la cinta correspondiente.',
    'Sal a la zona de llegadas (planta baja). Busca a nuestro representante con un cartel con tu nombre.',
    'Presentamos la documentación (DNI/pasaporte + carnet de conducir) y tramitamos la fianza.',
    'Revisión conjunta del vehículo y firma del contrato. En 10-15 minutos, listo para la Costa Blanca.',
  ],
  localContext:
    'El Aeropuerto de Alicante-Elche está a solo 9 km del centro de Alicante y a 25 km de nuestra oficina en El Campello. Desde aquí, con el Mercedes tienes acceso a toda la Costa Blanca: Benidorm a 45 km, Calpe y su Peñón de Ifach a 65 km, y Torrevieja a 40 km en dirección sur. El aeropuerto ALC conecta con más de 100 destinos europeos todo el año, lo que lo convierte en la puerta de entrada más utilizada a la provincia.',
  faqs: ALICANTE_AIRPORT_FAQS,
  breadcrumbLabel: 'Aeropuerto de Alicante',
};

export default async function AlicanteAeropuertoPage() {
  const [cars, point] = await Promise.all([
    getAllActiveCars(),
    getPickupPointBySlug('alicante', 'aeropuerto'),
  ]);

  const alicanteCars = ((cars as CarListItem[] | null) ?? []).filter(
    (c) => c.availableLocations?.includes('alicante'),
  );

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hereandnow.es';

  const schemas = [
    generateBreadcrumbSchema([
      { name: 'Inicio', url: siteUrl },
      { name: 'Alicante', url: `${siteUrl}/alicante` },
      { name: 'Aeropuerto de Alicante', url: `${siteUrl}/alicante/aeropuerto` },
    ]),
    generateLocalBusinessSchema(
      { siteName: 'Here & Now — Aeropuerto Alicante' },
      { name: { es: 'Here & Now — Aeropuerto de Alicante-Elche' }, phone: '+34625305620' },
    ),
    generateFAQSchema(ALICANTE_AIRPORT_FAQS, 'es'),
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
