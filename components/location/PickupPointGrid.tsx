import Link from 'next/link';
import { Plane, Anchor, Building2, ArrowRight } from 'lucide-react';

export type PickupPointCard = {
  name: string;
  slug: string;
  description: string;
  href: string;
  type: 'airport' | 'port' | 'office';
};

interface PickupPointGridProps {
  points: PickupPointCard[];
  heading?: string;
  intro?: string;
}

const ICONS: Record<PickupPointCard['type'], React.ReactNode> = {
  airport: <Plane size={22} strokeWidth={1.5} />,
  port: <Anchor size={22} strokeWidth={1.5} />,
  office: <Building2 size={22} strokeWidth={1.5} />,
};

// Server Component
export function PickupPointGrid({
  points,
  heading = '¿Dónde recogemos el coche?',
  intro,
}: PickupPointGridProps) {
  return (
    <section
      className="section-padding bg-[var(--color-stone)]"
      aria-labelledby="pickup-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="mb-10">
          <h2 id="pickup-heading" className="text-2xl lg:text-3xl font-semibold text-[var(--color-ink)] mb-3">
            {heading}
          </h2>
          {intro && (
            <p className="text-[var(--color-vapor)] max-w-xl">{intro}</p>
          )}
        </div>

        <ul
          className={[
            'grid gap-4',
            points.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
          ].join(' ')}
          role="list"
        >
          {points.map((point) => (
            <li key={point.slug}>
              <Link
                href={point.href}
                className="group flex items-start gap-4 p-5 bg-[var(--color-surface)] border border-[var(--color-mist)] rounded-[var(--radius-md)] hover:border-[var(--color-gold)]/50 hover:shadow-[var(--shadow-card)] transition-all duration-200"
              >
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[var(--color-stone)] rounded-[var(--radius-sm)] text-[var(--color-gold)]"
                  aria-hidden="true"
                >
                  {ICONS[point.type]}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[var(--color-ink)] mb-1 group-hover:text-[var(--color-gold)] transition-colors">
                    {point.name}
                  </h3>
                  <p className="text-sm text-[var(--color-vapor)] leading-snug mb-2">
                    {point.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-gold)] group-hover:gap-2 transition-all">
                    Ver instrucciones
                    <ArrowRight size={12} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
