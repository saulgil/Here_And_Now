import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { getCarsByLocation } from '@/lib/data/cars';
import { getPickupPointBySlug } from '@/lib/data/pickup-points';
import type { FAQ } from '@/types';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { PickupPageTemplate, type PickupPageStaticContent } from '@/components/location/PickupPageTemplate';

export const metadata: Metadata = buildMetadata({
  path: '/ibiza/puerto',
  fallbackTitle: 'Alquiler coches Puerto de Ibiza — Recogida en el muelle',
  fallbackDescription:
    'Alquila tu Mercedes directamente en el Puerto de Ibiza. Recogida al bajar del ferri o del yate. Reserva online y te esperamos en el muelle.',
});

const IBIZA_PORT_FAQS: FAQ[] = [
  {
    _id: 'ibz-pt-1',
    question: { es: '¿Operáis con todas las compañías de ferri que llegan a Ibiza?' },
    answer: { es: ['Sí. Atendemos llegadas de todas las compañías que operan en el Puerto de Ibiza (Baleària, Trasmediterranea, etc.). Indica la compañía y hora de llegada al reservar para que podamos coordinarnos.'] },
    category: 'ibiza',
  },
  {
    _id: 'ibz-pt-2',
    question: { es: '¿Puedo devolver el coche en el puerto al final de mi estancia?' },
    answer: { es: ['Sí. Podemos recoger el vehículo en el puerto cuando te vayas. Coordina el punto de entrega al hacer la reserva o avísanos con antelación.'] },
    category: 'ibiza',
  },
  {
    _id: 'ibz-pt-3',
    question: { es: '¿Cuánto se tarda en llegar del puerto al centro de Ibiza?' },
    answer: { es: ['El Puerto de Ibiza está en el centro mismo de la ciudad (Eivissa). Desde el muelle a Dalt Vila son apenas 5 minutos a pie. En coche llegas a las playas del sur en 15 minutos.'] },
    category: 'ibiza',
  },
];

const CONTENT: PickupPageStaticContent = {
  h1: 'Alquiler de coches en el Puerto de Ibiza',
  metaTitle: 'Alquiler coches Puerto de Ibiza — Recogida en el muelle | Here & Now',
  metaDescription: 'Alquila tu Mercedes directamente en el Puerto de Ibiza. Recogida al bajar del ferri o del yate. Reserva online y te esperamos en el muelle.',
  eyebrow: 'Puerto de Ibiza · Eivissa',
  intro: 'Si llegas a Ibiza en ferri o en yate, te recogemos en el muelle con el Mercedes preparado. Sin traslados, sin esperas innecesarias.',
  locationSlug: 'ibiza',
  locationName: 'Ibiza',
  pointSlug: 'puerto',
  pointType: 'port',
  address: 'Puerto de Ibiza, Paseo Marítimo de Eivissa, 07800 Ibiza',
  mapsUrl: 'https://www.google.es/maps/place/Puerto+de+Ibiza/',
  openingHoursText: 'Según llegadas de ferri',
  steps: [
    'Indica en tu reserva la compañía de ferri o el número de amarre de tu embarcación.',
    'Al desembarcar, dirígete a la zona de recogida de vehículos en el paseo del puerto.',
    'Nuestro representante te estará esperando con un cartel identificativo.',
    'Tramitamos la documentación en el lugar (10 minutos) y sales directamente desde el puerto.',
  ],
  localContext:
    'El Puerto de Ibiza es el punto de entrada más dinámico de la isla. Desde aquí, el casco histórico amurallado de Dalt Vila está a 5 minutos a pie. Con el Mercedes, en 20 minutos llegas a las playas de ses Salines (las más exclusivas de la isla), y en 30 al norte rural de Sant Joan de Labritja. Una ubicación ideal para comenzar la exploración de la isla de inmediato.',
  faqs: IBIZA_PORT_FAQS,
  breadcrumbLabel: 'Puerto de Ibiza',
};

export default function IbizaPuertoPage() {
  const ibizaCars = getCarsByLocation('ibiza');
  const point = getPickupPointBySlug('ibiza', 'puerto');

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hereandnow.es';

  const schemas = [
    generateBreadcrumbSchema([
      { name: 'Inicio', url: siteUrl },
      { name: 'Ibiza', url: `${siteUrl}/ibiza` },
      { name: 'Puerto de Ibiza', url: `${siteUrl}/ibiza/puerto` },
    ]),
    generateLocalBusinessSchema(
      { siteName: 'Here & Now — Puerto Ibiza' },
      { name: { es: 'Here & Now — Puerto de Ibiza' }, phone: '+34625305620' },
    ),
    generateFAQSchema(IBIZA_PORT_FAQS, 'es'),
  ];

  return (
    <PickupPageTemplate
      content={CONTENT}
      dataPoint={point}
      cars={ibizaCars}
      schemas={schemas}
    />
  );
}
