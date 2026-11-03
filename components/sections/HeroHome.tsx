import Link from 'next/link';

interface HeroHomeProps {
  heading?: string;
  subheading?: string;
  priceFrom?: number;
  pickupPoints?: number;
}

// Server Component — pure links, no interactivity needed
export function HeroHome({
  heading = 'Alquiler de coches Mercedes en Ibiza y Alicante',
  subheading = 'Exclusividad, confort y servicio premium. Sin sorpresas.',
  priceFrom = 130,
  pickupPoints = 5,
}: HeroHomeProps) {
  return (
    <section
      className="relative min-h-[85svh] flex items-center justify-center text-[var(--color-canvas)]"
      aria-label="Presentación"
    >
      {/* Background — dark gradient (replace with Sanity image/video when available) */}
      <div
        className="absolute inset-0 bg-[var(--color-night)]"
        aria-hidden="true"
      >
        {/* Subtle warm overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-night)] via-[#1a1208] to-[var(--color-night)] opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-20 text-center">

        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-gold)] mb-6">
          Mercedes-Benz Exclusivo
        </p>

        {/* H1 */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.06] tracking-[-0.02em] mb-6 text-balance">
          {heading}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[var(--color-fog)] mb-12 max-w-xl mx-auto leading-relaxed">
          {subheading}
        </p>

        {/* Destination CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-12">
          <Link
            href="/ibiza"
            className={[
              'group flex flex-col items-center justify-center',
              'w-full sm:w-56 py-5 px-8',
              'bg-[var(--color-gold)] text-[var(--color-ink)]',
              'rounded-[var(--radius-sm)]',
              'hover:bg-[var(--color-gold-deep)] transition-colors duration-150',
            ].join(' ')}
          >
            <span className="font-bold text-sm tracking-[0.08em] uppercase">Reservar en Ibiza</span>
            <span className="text-xs mt-1 opacity-70">Aeropuerto · Puerto</span>
          </Link>

          <Link
            href="/alicante"
            className={[
              'group flex flex-col items-center justify-center',
              'w-full sm:w-56 py-5 px-8',
              'border-[1.5px] border-[var(--color-canvas)]/40 text-[var(--color-canvas)]',
              'rounded-[var(--radius-sm)]',
              'hover:border-[var(--color-canvas)] transition-colors duration-150',
            ].join(' ')}
          >
            <span className="font-bold text-sm tracking-[0.08em] uppercase">Reservar en Alicante</span>
            <span className="text-xs mt-1 opacity-70">Aeropuerto · Oficina · Puerto</span>
          </Link>
        </div>

        {/* Support text */}
        <p className="text-sm text-[var(--color-fog)] flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span>Desde <strong className="text-[var(--color-canvas)] font-semibold">{priceFrom}€</strong>/día</span>
          <span aria-hidden="true" className="hidden sm:inline text-[var(--color-fog)]/40">·</span>
          <span>Recogida en aeropuerto o puerto</span>
          <span aria-hidden="true" className="hidden sm:inline text-[var(--color-fog)]/40">·</span>
          <span>{pickupPoints} puntos de recogida</span>
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase text-[var(--color-canvas)]">Scroll</span>
        <div className="w-px h-8 bg-[var(--color-canvas)]/40 animate-pulse" />
      </div>
    </section>
  );
}
