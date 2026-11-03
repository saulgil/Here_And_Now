import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { getCarsByLocation } from '@/lib/data/cars';
import { getPickupPointBySlug } from '@/lib/data/pickup-points';
import type { FAQ } from '@/types';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { PickupPageTemplate, type PickupPageStaticContent } from '@/components/location/PickupPageTemplate';

export const metadata: Metadata = buildMetadata({
  path: '/ibiza/aeropuerto',
  fallbackTitle: 'Alquiler coches Aeropuerto Ibiza (IBZ) — Mercedes sin esperas',
  fallbackDescription:
    'Recoge tu Mercedes en el Aeropuerto de Ibiza. Check-in rápido, sin colas. Clase V hasta 8 plazas. Reserva online y recoge al aterrizar.',
});

const IBIZA_AIRPORT_FAQS: FAQ[] = [
  {
    _id: 'ibz-ap-1',
    question: { es: '¿Dónde exactamente está el punto de recogida en el aeropuerto?' },
    answer: { es: ['Nuestro equipo te espera en la zona de llegadas de la Terminal del Aeropuerto de Ibiza. Te identificaremos con un cartel con tu nombre. Si tienes alguna duda, llámanos al 625 305 620.'] },
    category: 'ibiza',
  },
  {
    _id: 'ibz-ap-2',
    question: { es: '¿Qué pasa si mi vuelo llega tarde?' },
    answer: { es: ['No te preocupes. Monitorizamos los vuelos en tiempo real. Si hay retrasos, nuestro equipo esperará. Si el retraso es significativo, te pedimos que nos avises al teléfono de contacto para coordinarnos.'] },
    category: 'ibiza',
  },
  {
    _id: 'ibz-ap-3',
    question: { es: '¿Cuánto tiempo tarda el proceso de check-in al recoger el coche?' },
    answer: { es: ['El check-in suele durar entre 10 y 15 minutos. Necesitamos verificar tu documentación (DNI/pasaporte + carnet de conducir) y gestionar la fianza. Tener los documentos preparados agiliza el proceso.'] },
    category: 'ibiza',
  },
  {
    _id: 'ibz-ap-4',
    question: { es: '¿Puedo reservar el coche el mismo día que llego?' },
    answer: { es: ['Recomendamos reservar con antelación, especialmente en julio y agosto. Sin embargo, si hay disponibilidad, aceptamos reservas de último momento. Contáctanos directamente por teléfono o WhatsApp.'] },
    category: 'ibiza',
  },
];

const CONTENT: PickupPageStaticContent = {
  h1: 'Alquiler de coches en el Aeropuerto de Ibiza (IBZ)',
  metaTitle: 'Alquiler coches Aeropuerto Ibiza (IBZ) — Mercedes sin esperas | Here & Now',
  metaDescription: 'Recoge tu Mercedes en el Aeropuerto de Ibiza. Check-in rápido, sin colas. Clase V hasta 8 plazas. Reserva online y recoge al aterrizar.',
  eyebrow: 'Aeropuerto de Ibiza · IBZ',
  intro: 'Te esperamos en el aeropuerto con el vehículo preparado. Empieza tu aventura en Ibiza desde el primer minuto sin esperas ni complicaciones.',
  locationSlug: 'ibiza',
  locationName: 'Ibiza',
  pointSlug: 'aeropuerto',
  pointType: 'airport',
  iataCode: 'IBZ',
  address: 'Aeropuerto de Ibiza (IBZ), 07820 Sant Josep de sa Talaia',
  mapsUrl: 'https://www.google.es/maps/place/Aeropuerto+de+Ibiza/',
  openingHoursText: 'Horario según llegadas',
  steps: [
    'Aterriza en el Aeropuerto de Ibiza (IBZ). Recoge tu equipaje en la zona de bagajes.',
    'Dirígete a la zona de llegadas. Busca a nuestro representante con un cartel con tu nombre.',
    'Presentamos la documentación (DNI/pasaporte + carnet) y gestionamos la fianza.',
    'Revisamos juntos el estado del vehículo y firma del contrato. En 10-15 minutos, listo para salir.',
  ],
  localContext:
    'El Aeropuerto de Ibiza está situado a tan solo 7 km del centro de Eivissa y a 20 km de San Antonio de Portmany. Con nuestro Mercedes, en menos de 20 minutos puedes estar en cualquier punto del sur de la isla. Las playas de ses Salines, el casco histórico de Dalt Vila o los chiringuitos de ses Figueretes son tus primeras paradas.',
  faqs: IBIZA_AIRPORT_FAQS,
  breadcrumbLabel: 'Aeropuerto de Ibiza',
};

export default function IbizaAeropuertoPage() {
  const ibizaCars = getCarsByLocation('ibiza');
  const point = getPickupPointBySlug('ibiza', 'aeropuerto');

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hereandnow.es';

  const schemas = [
    generateBreadcrumbSchema([
      { name: 'Inicio', url: siteUrl },
      { name: 'Ibiza', url: `${siteUrl}/ibiza` },
      { name: 'Aeropuerto de Ibiza', url: `${siteUrl}/ibiza/aeropuerto` },
    ]),
    generateLocalBusinessSchema(
      { siteName: 'Here & Now — Aeropuerto Ibiza' },
      { name: { es: 'Here & Now — Aeropuerto de Ibiza' }, phone: '+34625305620' },
    ),
    generateFAQSchema(IBIZA_AIRPORT_FAQS, 'es'),
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
