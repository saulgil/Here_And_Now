import Link from 'next/link';
import { Users, Settings2, Fuel, Calendar, MapPin } from 'lucide-react';
import { SanityImage } from '@/components/shared/SanityImage';
import type { CarListItem } from '@/types/sanity';

const FUEL_LABELS: Record<string, string> = {
  diesel: 'Diésel',
  gasolina: 'Gasolina',
  hibrido: 'Híbrido',
  electrico: 'Eléctrico',
};

const TRANSMISSION_LABELS: Record<string, string> = {
  automatic: 'Automático',
  manual: 'Manual',
};

interface CarCardProps {
  car: CarListItem;
  locale?: 'es' | 'en';
}

// Server Component — no interactivity, just data display
export function CarCard({ car, locale = 'es' }: CarCardProps) {
  const name = car.name[locale] ?? car.name.es;
  const alt = car.mainImage.alt[locale] ?? car.mainImage.alt.es;
  const href = `/flota/${car.slug.current}`;

  return (
    <article className="group bg-[var(--color-surface)] border border-[var(--color-mist)] rounded-[var(--radius-md)] overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-[transform,box-shadow] duration-250">

      {/* Image + availability badges */}
      <div className="relative">
        <Link href={href} tabIndex={-1} aria-hidden="true">
          <div className="aspect-[16/10] overflow-hidden">
            <SanityImage
              asset={car.mainImage.asset}
              alt={alt}
              width={800}
              height={500}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </Link>

        {/* Availability badges */}
        {car.availableLocations && car.availableLocations.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-1.5" aria-label="Disponible en">
            {car.availableLocations.includes('ibiza') && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[var(--color-night)]/80 backdrop-blur-sm text-[var(--color-canvas)] text-xs font-medium rounded-full">
                <MapPin size={10} aria-hidden="true" />
                Ibiza
              </span>
            )}
            {car.availableLocations.includes('alicante') && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[var(--color-night)]/80 backdrop-blur-sm text-[var(--color-canvas)] text-xs font-medium rounded-full">
                <MapPin size={10} aria-hidden="true" />
                Alicante
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Name */}
        <h3 className="font-semibold text-base text-[var(--color-ink)] mb-3 leading-tight">
          <Link href={href} className="hover:text-[var(--color-gold)] transition-colors">
            {name}
          </Link>
        </h3>

        {/* Specs row */}
        <ul className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4" aria-label="Especificaciones">
          <li className="flex items-center gap-1.5 text-sm text-[var(--color-vapor)]">
            <Users size={14} aria-hidden="true" className="text-[var(--color-fog)]" />
            <span>{car.passengers} plazas</span>
          </li>
          <li className="flex items-center gap-1.5 text-sm text-[var(--color-vapor)]">
            <Settings2 size={14} aria-hidden="true" className="text-[var(--color-fog)]" />
            <span>{TRANSMISSION_LABELS[car.transmission] ?? car.transmission}</span>
          </li>
          <li className="flex items-center gap-1.5 text-sm text-[var(--color-vapor)]">
            <Fuel size={14} aria-hidden="true" className="text-[var(--color-fog)]" />
            <span>{FUEL_LABELS[car.fuel] ?? car.fuel}</span>
          </li>
          {car.year && (
            <li className="flex items-center gap-1.5 text-sm text-[var(--color-vapor)]">
              <Calendar size={14} aria-hidden="true" className="text-[var(--color-fog)]" />
              <span>{car.year}</span>
            </li>
          )}
        </ul>

        {/* Price */}
        {car.minPrice && (
          <p className="mb-4">
            <span className="text-xs text-[var(--color-vapor)] uppercase tracking-wider">Desde </span>
            <strong className="text-2xl font-bold text-[var(--color-ink)] tabular-nums tracking-tight">
              {car.minPrice}€
            </strong>
            <span className="text-sm text-[var(--color-vapor)]">/día</span>
          </p>
        )}

        {/* CTA */}
        <Link
          href={href}
          className="flex items-center justify-center w-full h-11 bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold text-xs tracking-[0.06em] uppercase rounded-[var(--radius-sm)] hover:bg-[var(--color-gold-deep)] transition-colors"
        >
          Ver y reservar
        </Link>
      </div>
    </article>
  );
}
