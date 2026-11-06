import { CarCard } from './CarCard';
import type { CarListItem } from '@/types';

interface CarGridProps {
  cars: CarListItem[];
  heading?: string;
  subheading?: string;
  locale?: 'es' | 'en';
  className?: string;
  headingLevel?: 2 | 3;
  prioritizeFirst?: boolean;
}

// Server Component
export function CarGrid({ cars, heading, subheading, locale = 'es', className, headingLevel = 3, prioritizeFirst = true }: CarGridProps) {
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
        {cars.map((car, index) => (
          <li key={car._id}>
            <CarCard car={car} locale={locale} priority={prioritizeFirst && index === 0} headingLevel={headingLevel} />
          </li>
        ))}
      </ul>
    </section>
  );
}
