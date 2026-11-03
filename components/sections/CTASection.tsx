import Link from 'next/link';
import { Phone } from 'lucide-react';

interface CTAButton {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

interface CTASectionProps {
  heading: string;
  subheading?: string;
  buttons?: CTAButton[];
  phone?: string;
  className?: string;
}

// Server Component
export function CTASection({
  heading,
  subheading,
  buttons = [
    { label: 'Reservar en Ibiza', href: '/ibiza', variant: 'primary' },
    { label: 'Reservar en Alicante', href: '/alicante', variant: 'secondary' },
  ],
  phone,
  className,
}: CTASectionProps) {
  return (
    <section
      className={`bg-[var(--color-night)] text-[var(--color-canvas)] ${className ?? ''}`}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16 lg:py-20 text-center">
        <h2
          id="cta-heading"
          className="text-3xl lg:text-4xl font-semibold mb-4 text-balance"
        >
          {heading}
        </h2>

        {subheading && (
          <p className="text-[var(--color-fog)] text-lg mb-10 max-w-xl mx-auto">
            {subheading}
          </p>
        )}

        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {buttons.map((btn, i) => (
              <Link
                key={i}
                href={btn.href}
                className={[
                  'inline-flex items-center justify-center h-12 px-8 font-semibold text-sm tracking-[0.06em] uppercase rounded-[var(--radius-sm)] transition-colors w-full sm:w-auto',
                  btn.variant === 'secondary'
                    ? 'border-[1.5px] border-[var(--color-canvas)]/40 text-[var(--color-canvas)] hover:border-[var(--color-canvas)]'
                    : 'bg-[var(--color-gold)] text-[var(--color-ink)] hover:bg-[var(--color-gold-deep)]',
                ].join(' ')}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        )}

        {phone && (
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 text-sm text-[var(--color-vapor)] hover:text-[var(--color-fog)] transition-colors"
          >
            <Phone size={14} aria-hidden="true" />
            ¿Prefieres llamar? {phone}
          </a>
        )}
      </div>
    </section>
  );
}
