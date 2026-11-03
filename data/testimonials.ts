import type { Testimonial } from '@/types';

// Migrated from scripts/seed-sanity.ts (testimonial-eliseo, testimonial-jose-antonio,
// testimonial-clara) — same content already used as the static fallback in
// components/sections/TestimonialsSection.tsx.
export const TESTIMONIALS: Testimonial[] = [
  {
    _id: 'testimonial-eliseo',
    author: 'Eliseo Pérez',
    text: {
      es: '¡Una experiencia inigualable! Here & Now nos brindó el lujo y la comodidad que buscábamos para nuestra escapada en Ibiza. Desde la reserva hasta la entrega del vehículo, el servicio fue impecable. ¡Definitivamente volveremos!',
    },
    location: { name: { es: 'Ibiza' }, slug: { current: 'ibiza' } },
    rating: 5,
  },
  {
    _id: 'testimonial-jose-antonio',
    author: 'José Antonio Puigcerver',
    text: {
      es: '¡La mejor forma de explorar Ibiza con estilo! Gracias a Here & Now, pude recorrer la isla en un vehículo de lujo que superó todas mis expectativas. Su atención al detalle y su flota de primera clase hacen que sea la opción número uno para alquiler de coches en la isla.',
    },
    location: { name: { es: 'Ibiza' }, slug: { current: 'ibiza' } },
    rating: 5,
  },
  {
    _id: 'testimonial-clara',
    author: 'Clara García',
    text: {
      es: 'Una experiencia de alquiler de coches excepcional. Here & Now no solo ofrece una selección impresionante de vehículos de lujo, sino también un servicio al cliente excepcional. ¡Recomendaría esta agencia a cualquiera que busque una experiencia premium en Ibiza!',
    },
    location: { name: { es: 'Ibiza' }, slug: { current: 'ibiza' } },
    rating: 5,
  },
];
