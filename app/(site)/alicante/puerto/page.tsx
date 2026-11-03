import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { getAllActiveCars, getPickupPointBySlug } from '@/lib/sanity/fetch';
import type { CarListItem, FAQ, PickupPoint } from '@/types/sanity';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { PickupPageTemplate, type PickupPageStaticContent } from '@/components/location/PickupPageTemplate';

export const metadata: Metadata = buildMetadata({
  path: '/alicante/puerto',
  fallbackTitle: 'Alquiler coches Puerto de Alicante — Recogida en el muelle',
  fallbackDescription:
    'Alquila un Mercedes directamente en el Puerto de Alicante. Ideal para cruceristas y pasajeros de ferri. Recogida al bajar del barco.',
});

const ALICANTE_PORT_FAQS: FAQ[] = [
  {
    _id: 'alc-pt-1',
    question: { es: '¿Puedo alquilar el coche si llego en crucero a Alicante?' },
    answer: { es: [{ _key: 'a1', _type: 'block', style: 'normal', markDefs: [], children: [{ _key: 'c1', _type: 'span', marks: [], text: 'Sí. Muchos cruceristas aprovechan las escalas en Alicante para explorar la Costa Blanca con nuestros vehículos. Comunícanos el horario de llegada del crucero y la duración de la escala para preparar la entrega.' }] }] },
    category: 'alicante',
  },
  {
    _id: 'alc-pt-2',
    question: { es: '¿Cuánto tiempo tengo para explorar Alicante desde el puerto?' },
    answer: { es: [{ _key: 'a2', _type: 'block', style: 'normal', markDefs: [], children: [{ _key: 'c2', _type: 'span', marks: [], text: 'El Puerto de Alicante está en el centro de la ciudad. En 30 minutos en coche puedes ver el Castillo de Santa Bárbara, las playas del Postiguet y San Juan, y el casco histórico. Para la Costa Blanca norte (Benidorm), necesitarías al menos 4 horas.' }] }] },
    category: 'alicante',
  },
  {
    _id: 'alc-pt-3',
    question: { es: '¿Hay ferri desde Alicante a Ibiza?' },
    answer: { es: [{ _key: 'a3', _type: 'block', style: 'normal', markDefs: [], children: [{ _key: 'c3', _type: 'span', marks: [], text: 'Sí, Baleària opera rutas entre Alicante e Ibiza con cierta frecuencia, especialmente en temporada de verano. Si planeas viajar en ferri a Ibiza, también ofrecemos servicio de alquiler en el Puerto de Ibiza.' }] }] },
    category: 'alicante',
  },
];

const CONTENT: PickupPageStaticContent = {
  h1: 'Alquiler de coches en el Puerto de Alicante',
  metaTitle: 'Alquiler coches Puerto de Alicante — Recogida en el muelle | Here & Now',
  metaDescription: 'Alquila un Mercedes directamente en el Puerto de Alicante. Ideal para cruceristas y pasajeros de ferri. Recogida al bajar del barco.',
  eyebrow: 'Puerto de Alicante · Terminal de Cruceros',
  intro: 'Recogida de vehículos directamente en el muelle del Puerto de Alicante. Perfecto para cruceristas que quieren explorar la Costa Blanca durante una escala.',
  locationSlug: 'alicante',
  locationName: 'Alicante',
  pointSlug: 'puerto',
  pointType: 'port',
  address: 'Puerto de Alicante, Muelle de Levante, 03001 Alicante',
  mapsUrl: 'https://www.google.es/maps/place/Puerto+de+Alicante/',
  openingHoursText: 'Según llegadas de cruceros y ferris',
  steps: [
    'Indica en tu reserva el nombre del buque y la hora estimada de atraque.',
    'Al desembarcar, dirígete a la zona de pasajeros del muelle. Busca a nuestro representante.',
    'Tramitamos el contrato en el muelle (10-15 min). Solo necesitas DNI/pasaporte y carnet.',
    'Entregamos el vehículo en el lugar acordado y te orientamos sobre los principales destinos cercanos.',
  ],
  localContext:
    'El Puerto de Alicante está en el corazón de la ciudad, junto al Paseo de la Explanada y el Castillo de Santa Bárbara. Desde aquí, Alicante capital es accesible a pie en 10 minutos. En coche, las playas de San Juan están a 5 km, Benidorm a 45 km, y el aeropuerto ALC a 12 km. Una posición estratégica para explorar toda la provincia durante una escala o como punto de inicio de un road trip por la Costa Blanca.',
  faqs: ALICANTE_PORT_FAQS,
  breadcrumbLabel: 'Puerto de Alicante',
};

export default async function AlicantePuertoPage() {
  const [cars, point] = await Promise.all([
    getAllActiveCars(),
    getPickupPointBySlug('alicante', 'puerto'),
  ]);

  const alicanteCars = ((cars as CarListItem[] | null) ?? []).filter(
    (c) => c.availableLocations?.includes('alicante'),
  );

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hereandnow.es';

  const schemas = [
    generateBreadcrumbSchema([
      { name: 'Inicio', url: siteUrl },
      { name: 'Alicante', url: `${siteUrl}/alicante` },
      { name: 'Puerto de Alicante', url: `${siteUrl}/alicante/puerto` },
    ]),
    generateLocalBusinessSchema(
      { siteName: 'Here & Now — Puerto Alicante' },
      { name: { es: 'Here & Now — Puerto de Alicante' }, phone: '+34625305620' },
    ),
    generateFAQSchema(ALICANTE_PORT_FAQS, 'es'),
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
