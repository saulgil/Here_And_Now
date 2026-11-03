'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface StickyBookingBarProps {
  carName: string;
  priceFrom?: number;
  bookingAnchor?: string;
}

// Appears after scrolling past the gallery/hero area
export function StickyBookingBar({
  carName,
  priceFrom,
  bookingAnchor = 'formulario-reserva',
}: StickyBookingBarProps) {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel placed at the bottom of the gallery/hero */}
      <div ref={sentinelRef} aria-hidden="true" />

      {/* Sticky bar */}
      <div
        className={[
          'fixed bottom-0 left-0 right-0 z-30 bg-[var(--color-surface)] border-t border-[var(--color-mist)]',
          'transform transition-transform duration-250',
          visible ? 'translate-y-0' : 'translate-y-full',
        ].join(' ')}
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        aria-hidden={!visible}
      >
        <div className="max-w-[1280px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="hidden sm:block min-w-0">
            <p className="text-sm font-semibold text-[var(--color-ink)] truncate">{carName}</p>
            {priceFrom && (
              <p className="text-xs text-[var(--color-vapor)]">
                Desde <strong className="text-[var(--color-ink)] tabular-nums">{priceFrom}€</strong>/día
              </p>
            )}
          </div>
          <Link
            href={`#${bookingAnchor}`}
            className="flex-shrink-0 inline-flex items-center justify-center h-10 px-6 bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold text-sm tracking-[0.06em] uppercase rounded-[var(--radius-sm)] hover:bg-[var(--color-gold-deep)] transition-colors"
          >
            Reservar
          </Link>
        </div>
      </div>
    </>
  );
}
