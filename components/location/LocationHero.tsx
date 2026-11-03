import Link from 'next/link';
import { MapPin, ChevronDown } from 'lucide-react';

interface LocationHeroProps {
  heading: string;
  description: string;
  priceFrom: number;
  pickupCount: number;
  badges?: string[];
  fleetAnchor?: string; // ID to scroll to
  imageUrl?: string;
  imageAlt?: string;
}

// Server Component — each location passes its own copy
export function LocationHero({
  heading,
  description,
  priceFrom,
  pickupCount,
  badges = [],
  fleetAnchor = 'flota-section',
  imageUrl,
  imageAlt,
}: LocationHeroProps) {
  return (
    <section
      className="relative min-h-[75svh] flex items-end pb-12 text-[var(--color-canvas)]"
      aria-label="Presentación del destino"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={imageAlt ?? heading}
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
        ) : (
          <div className="absolute inset-0 bg-[var(--color-night)]" />
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-night)]/90 via-[var(--color-night)]/40 to-[var(--color-night)]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--color-gold)]/90 text-[var(--color-ink)] text-xs font-semibold rounded-full">
            Desde {priceFrom}€/día
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 backdrop-blur-sm text-[var(--color-canvas)] text-xs font-medium rounded-full">
            <MapPin size={11} aria-hidden="true" />
            {pickupCount} puntos de recogida
          </span>
          {badges.map((badge) => (
            <span key={badge} className="inline-flex items-center px-3 py-1 bg-white/15 backdrop-blur-sm text-[var(--color-canvas)] text-xs font-medium rounded-full">
              {badge}
            </span>
          ))}
        </div>

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.06] tracking-[-0.02em] mb-4 max-w-2xl text-balance">
          {heading}
        </h1>

        {/* Description */}
        <p className="text-lg text-[var(--color-fog)] mb-8 max-w-xl leading-relaxed">
          {description}
        </p>

        {/* CTA */}
        <Link
          href={`#${fleetAnchor}`}
          className="inline-flex items-center gap-2 h-12 px-8 bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold text-sm tracking-[0.06em] uppercase rounded-[var(--radius-sm)] hover:bg-[var(--color-gold-deep)] transition-colors"
        >
          Ver vehículos disponibles
          <ChevronDown size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
