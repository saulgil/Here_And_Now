import { Star } from 'lucide-react';
import type { Testimonial } from '@/types';

// Static fallback used when Sanity is not configured
const STATIC_TESTIMONIALS: Array<Omit<Testimonial, '_id'>> = [
  {
    author: 'Eliseo Pérez',
    text: {
      es: '¡Una experiencia inigualable! Here & Now nos brindó el lujo y la comodidad que buscábamos para nuestra escapada en Ibiza. Desde la reserva hasta la entrega del vehículo, el servicio fue impecable. ¡Definitivamente volveremos!',
    },
    location: { name: { es: 'Ibiza' }, slug: { current: 'ibiza' } },
    rating: 5,
  },
  {
    author: 'José Antonio Puigcerver',
    text: {
      es: '¡La mejor forma de explorar Ibiza con estilo! Gracias a Here & Now, pude recorrer la isla en un vehículo de lujo que superó todas mis expectativas. Su atención al detalle y su flota de primera clase hacen que sea la opción número uno para alquiler de coches en la isla.',
    },
    location: { name: { es: 'Ibiza' }, slug: { current: 'ibiza' } },
    rating: 5,
  },
  {
    author: 'Clara García',
    text: {
      es: 'Una experiencia de alquiler de coches excepcional. Here & Now no solo ofrece una selección impresionante de vehículos de lujo, sino también un servicio al cliente excepcional. ¡Recomendaría esta agencia a cualquiera que busque una experiencia premium en Ibiza!',
    },
    location: { name: { es: 'Ibiza' }, slug: { current: 'ibiza' } },
    rating: 5,
  },
];

interface TestimonialsSectionProps {
  testimonials?: Testimonial[] | null;
  locale?: 'es' | 'en';
}

// Server Component
export function TestimonialsSection({ testimonials, locale = 'es' }: TestimonialsSectionProps) {
  const items = (testimonials && testimonials.length > 0)
    ? testimonials
    : (STATIC_TESTIMONIALS as Testimonial[]);

  return (
    <section
      className="section-padding bg-[var(--color-stone)]"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3">
            Opiniones reales
          </p>
          <h2 id="reviews-heading" className="text-3xl lg:text-4xl font-semibold text-[var(--color-ink)]">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-3 text-[var(--color-vapor)]">
            Diferentes experiencias con nuestros coches Mercedes en Ibiza y Alicante.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          role="list"
        >
          {items.slice(0, 3).map((t, i) => {
            const text = t.text[locale] ?? t.text.es;
            const locationName = t.location?.name[locale] ?? t.location?.name.es;

            return (
              <li
                key={t._id ?? i}
                className="bg-[var(--color-surface)] rounded-[var(--radius-md)] p-6 border border-[var(--color-mist)]"
              >
                {/* Stars */}
                {t.rating && (
                  <div
                    className="flex gap-0.5 mb-4"
                    aria-label={`${t.rating} de 5 estrellas`}
                  >
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        fill="currentColor"
                        className="text-[var(--color-gold)]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                )}

                {/* Quote */}
                <blockquote className="text-[var(--color-vapor)] text-sm leading-relaxed mb-5">
                  &ldquo;{text}&rdquo;
                </blockquote>

                {/* Author */}
                <footer className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full bg-[var(--color-stone)] flex items-center justify-center text-xs font-bold text-[var(--color-vapor)]"
                    aria-hidden="true"
                  >
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-semibold text-[var(--color-ink)] not-italic">
                      {t.author}
                    </cite>
                    {locationName && (
                      <p className="text-xs text-[var(--color-fog)]">{locationName}</p>
                    )}
                  </div>
                </footer>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
