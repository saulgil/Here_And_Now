import Link from 'next/link';
import { MapPin } from 'lucide-react';
import type { Location } from '@/types/sanity';

interface DestinationCardsProps {
  ibiza?: Location | null;
  alicante?: Location | null;
}

// Server Component
export function DestinationCards({ ibiza, alicante }: DestinationCardsProps) {
  const destinations = [
    {
      data: ibiza,
      slug: 'ibiza',
      name: 'Ibiza',
      tagline: 'La isla del lujo y las playas cristalinas',
      pickupPoints: 'Aeropuerto · Puerto',
      cta: 'Alquilar en Ibiza',
      href: '/ibiza',
      // Fallback gradient when no image available
      gradient: 'from-[#0d2a3a] to-[#1a4a5a]',
    },
    {
      data: alicante,
      slug: 'alicante',
      name: 'Alicante',
      tagline: 'La Costa Blanca en un Mercedes',
      pickupPoints: 'Aeropuerto · Oficina · Puerto',
      cta: 'Alquilar en Alicante',
      href: '/alicante',
      gradient: 'from-[#2a1a0a] to-[#4a3a1a]',
    },
  ];

  return (
    <section
      className="section-padding bg-[var(--color-canvas)]"
      aria-labelledby="destinos-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3">
            Elige tu destino
          </p>
          <h2 id="destinos-heading" className="text-3xl lg:text-4xl font-semibold text-[var(--color-ink)]">
            Ibiza o Alicante
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {destinations.map((dest) => {
            const heroImage = dest.data?.heroImage;
            const name = dest.data?.name?.es ?? dest.name;
            const tagline = dest.data?.shortDescription?.es ?? dest.tagline;

            return (
              <Link
                key={dest.slug}
                href={dest.href}
                className="group relative overflow-hidden rounded-[var(--radius-md)] aspect-[4/3] md:aspect-[3/2] flex items-end"
                aria-label={`${dest.cta} — ${name}`}
              >
                {/* Background — image from Sanity or gradient fallback */}
                {heroImage?.asset?.url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={heroImage.asset.url}
                    alt={heroImage.alt?.es ?? name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${dest.gradient} group-hover:opacity-90 transition-opacity`}
                    aria-hidden="true"
                  />
                )}

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[var(--color-night)]/85 via-[var(--color-night)]/20 to-transparent"
                  aria-hidden="true"
                />

                {/* Content */}
                <div className="relative z-10 p-6 text-[var(--color-canvas)] w-full">
                  <div className="flex items-center gap-1.5 mb-2">
                    <MapPin size={14} className="text-[var(--color-gold)]" aria-hidden="true" />
                    <span className="text-xs text-[var(--color-fog)]">{dest.pickupPoints}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{name}</h3>
                  <p className="text-sm text-[var(--color-fog)] mb-4">{tagline}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[var(--color-gold)] group-hover:gap-3 transition-all">
                    {dest.cta}
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
