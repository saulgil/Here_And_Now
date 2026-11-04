import type { FAQ } from '@/types';

// Consolidated from the hardcoded fallback arrays already used in
// production across app/(site)/page.tsx (STATIC_FAQS), app/(site)/ibiza/*
// (IBIZA_FAQS, IBIZA_AIRPORT_FAQS, IBIZA_PORT_FAQS) and app/(site)/alicante/*
// (ALICANTE_FAQS, ALICANTE_AIRPORT_FAQS, OFICINA_FAQS, ALICANTE_PORT_FAQS),
// plus the 10 FAQ documents from scripts/seed-sanity.ts. These were the
// real content shown to users (Sanity was always empty in production).
//
// category values match the ones already used by getFaqsByCategory():
// 'general' | 'ibiza' | 'alicante' | 'vehicle'. Pickup-point-specific FAQs
// (aeropuerto/puerto/oficina) are NOT filtered by lib/data/faqs.ts — they
// stay inline in each page's CONTENT object during the page-migration
// phase, to avoid changing page behaviour before it is verified.

export const FAQS: FAQ[] = [
  // ── general (homepage) ──────────────────────────────────────────
  {
    _id: 'faq-req',
    question: { es: '¿Cuáles son los requisitos para alquilar un coche?' },
    answer: { es: ['Debes tener un mínimo de 26 años y al menos 2 años de antigüedad del carnet de conducir. Es necesario presentar DNI o pasaporte y una tarjeta de crédito para la fianza.'] },
    category: 'general',
  },
  {
    _id: 'faq-price',
    question: { es: '¿Qué incluye el precio del alquiler?' },
    answer: { es: ['El precio incluye el vehículo por día, 250 km diarios, asistencia en carretera 24h y la cobertura básica. Los kilómetros adicionales se cobran a 0,50€/km.'] },
    category: 'general',
  },
  {
    _id: 'faq-pickup',
    question: { es: '¿Dónde puedo recoger y entregar el vehículo?' },
    answer: { es: ['Operamos en varios puntos de Ibiza (aeropuerto y puerto) y Alicante (aeropuerto, puerto y nuestra oficina propia en El Campello). También podemos acordar otros puntos.'] },
    category: 'general',
  },
  {
    _id: 'faq-cancel',
    question: { es: '¿Puedo cancelar mi reserva?' },
    answer: { es: ['Sí. Consulta nuestra política de cancelación para ver los plazos y condiciones. Trabajamos con flexibilidad para adaptarnos a tus necesidades.'] },
    category: 'general',
  },

  // ── ibiza (location hub) ────────────────────────────────────────
  {
    _id: 'ibz-faq-1',
    question: { es: '¿Puedo recoger el coche directamente en el aeropuerto de Ibiza?' },
    answer: { es: ['Sí. Operamos con servicio de recogida en el Aeropuerto de Ibiza (IBZ). Nuestro equipo te espera en el área de llegadas con el vehículo preparado. Solo necesitas confirmar tu hora de aterrizaje al reservar.'] },
    category: 'ibiza',
  },
  {
    _id: 'ibz-faq-2',
    question: { es: '¿Es necesario reservar con antelación en temporada alta?' },
    answer: { es: ['En julio y agosto la demanda es muy alta. Recomendamos reservar con al menos 2 semanas de antelación para garantizar la disponibilidad del vehículo y el punto de recogida que prefieras.'] },
    category: 'ibiza',
  },
  {
    _id: 'ibz-faq-3',
    question: { es: '¿Puedo entregar el coche en el puerto si regreso en ferri?' },
    answer: { es: ['Sí. Puedes entregar el vehículo en el Puerto de Ibiza si tu vuelta es en ferri. Comunícanos el punto de entrega al hacer la reserva.'] },
    category: 'ibiza',
  },
  {
    _id: 'ibz-faq-4',
    question: { es: '¿Cuántos kilómetros incluye el alquiler al día?' },
    answer: { es: ['Cada día de alquiler incluye 250 km. Los kilómetros adicionales se facturan a 0,50€/km. Para una semana en Ibiza, los 250 km diarios son más que suficientes para explorar toda la isla.'] },
    category: 'ibiza',
  },

  // ── alicante (location hub) ──────────────────────────────────────
  {
    _id: 'alc-faq-1',
    question: { es: '¿Tenéis oficina física en Alicante?' },
    answer: { es: ['Sí. Disponemos de oficina propia en El Campello (Alicante), en la Calle de la Figuera, 5, local 58. Es el único punto de la provincia donde puedes ver los vehículos en persona y resolver cualquier consulta de forma presencial. También ofrecemos recogida en el aeropuerto y el puerto de Alicante.'] },
    category: 'alicante',
  },
  {
    _id: 'alc-faq-2',
    question: { es: '¿Podéis alquilar coches durante todo el año en Alicante?' },
    answer: { es: ['Sí. A diferencia de otros destinos, el alquiler en Alicante está disponible los 12 meses del año. Nuestra oficina en El Campello opera todo el año y el aeropuerto de Alicante-Elche conecta con toda Europa durante todo el año.'] },
    category: 'alicante',
  },
  {
    _id: 'alc-faq-3',
    question: { es: '¿El aeropuerto de Alicante está cerca de vuestra oficina?' },
    answer: { es: ['El aeropuerto de Alicante-Elche (ALC) está a aproximadamente 25 km de nuestra oficina en El Campello. Si llegas en avión, también ofrecemos recogida directa en el aeropuerto para mayor comodidad.'] },
    category: 'alicante',
  },
  {
    _id: 'alc-faq-4',
    question: { es: '¿Puedo devolver el coche en un punto diferente al de recogida?' },
    answer: { es: ['Sí, es posible. Puedes recoger el coche en el aeropuerto y devolverlo en nuestra oficina de El Campello, por ejemplo, o viceversa. Consulta las condiciones al hacer la reserva ya que puede aplicar un cargo adicional.'] },
    category: 'alicante',
  },

  // ── vehicle (car detail page) ────────────────────────────────────
  {
    _id: 'faq-clase-v-plazas',
    question: { es: '¿Cuántas plazas tiene el Mercedes Clase V?' },
    answer: { es: ['El Mercedes-Benz Clase V 250 d Avantgarde Largo tiene 8 plazas, repartidas en hasta tres filas de asientos. Todas las plazas cuentan con cinturones de seguridad homologados.'] },
    category: 'vehicle',
  },
  {
    _id: 'faq-clase-v-km',
    question: { es: '¿Cuántos kilómetros incluye el alquiler cada día?' },
    answer: { es: ['El alquiler incluye 250 km por día. Los kilómetros adicionales se facturan a 0,50€/km. Para la mayoría de estancias en Ibiza o Alicante, los 250 km diarios son más que suficientes.'] },
    category: 'vehicle',
  },
];
