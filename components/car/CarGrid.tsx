import { CarCard } from './CarCard';
import type { CarListItem } from '@/types/sanity';

interface CarGridProps {
  cars: CarListItem[];
  heading?: string;
  subheading?: string;
  locale?: 'es' | 'en';
  className?: string;
}

// Server Component
export function CarGrid({ cars, heading, subheading, locale = 'es', className }: CarGridProps) {
  if (!cars || cars.length === 0) {
    return (
      <div className={`text-center py-16 ${className ?? ''}`}>
        <p className="text-[var(--color-vapor)]">No hay vehículos disponibles en este momento.</p>
      </div>
    );
  }

  return (
    <section className={className}>
      {(heading || subheading) && (
        <div className="mb-10">
          {heading && (
            <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-ink)] mb-3">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="text-lg text-[var(--color-vapor)] max-w-2xl">
              {subheading}
            </p>
          )}
        </div>
      )}

      <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        role="list"
      >
        {cars.map((car) => (
          <li key={car._id}>
            <CarCard car={car} locale={locale} />
          </li>
        ))}
      </ul>
    </section>
  );
}
