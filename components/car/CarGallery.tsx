'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { urlFor } from '@/lib/sanity/image';
import type { SanityImageWithAlt } from '@/types/sanity';

interface CarGalleryProps {
  images: SanityImageWithAlt[];
  locale?: 'es' | 'en';
}

export function CarGallery({ images, locale = 'es' }: CarGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const active = images[activeIndex];
  const total = images.length;

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % total) + total) % total);
  }, [total]);

  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);

  const getImgSrc = (img: SanityImageWithAlt, w: number) => {
    const source = img.asset._id
      ? { _ref: img.asset._id, _type: 'reference' as const }
      : img.asset.url;
    return urlFor(source).width(w).quality(85).url();
  };

  if (!images.length) return null;

  return (
    <>
      {/* Main gallery */}
      <div className="select-none">
        {/* Primary image */}
        <button
          className="relative w-full aspect-[16/10] overflow-hidden rounded-[var(--radius-md)] cursor-zoom-in group"
          onClick={openLightbox}
          aria-label={`Ver imagen ${activeIndex + 1} de ${total} en pantalla completa`}
        >
          <Image
            src={getImgSrc(active, 1400)}
            alt={active.alt[locale] ?? active.alt.es}
            fill
            priority={activeIndex === 0}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
          {/* Counter overlay */}
          <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full">
            {activeIndex + 1} / {total}
          </span>
          {/* Prev/Next arrows */}
          {total > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goTo(activeIndex - 1); }}
                aria-label="Imagen anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goTo(activeIndex + 1); }}
                aria-label="Imagen siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </button>

        {/* Thumbnails */}
        {total > 1 && (
          <div
            className="flex gap-2 mt-2 overflow-x-auto pb-1 scroll-smooth"
            role="tablist"
            aria-label="Imágenes del vehículo"
          >
            {images.map((img, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Imagen ${i + 1}`}
                onClick={() => goTo(i)}
                className={[
                  'flex-shrink-0 relative w-20 h-14 rounded overflow-hidden transition-opacity',
                  i === activeIndex
                    ? 'ring-2 ring-[var(--color-gold)] opacity-100'
                    : 'opacity-50 hover:opacity-80',
                ].join(' ')}
              >
                <Image
                  src={getImgSrc(img, 200)}
                  alt={img.alt[locale] ?? img.alt.es}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Galería de imágenes"
          onClick={(e) => e.target === lightboxRef.current && closeLightbox()}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            aria-label="Cerrar galería"
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white"
          >
            <X size={24} />
          </button>

          {/* Counter */}
          <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {activeIndex + 1} / {total}
          </span>

          {/* Main lightbox image */}
          <div className="relative max-w-5xl w-full mx-4 aspect-[16/10]">
            <Image
              src={getImgSrc(active, 1920)}
              alt={active.alt[locale] ?? active.alt.es}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation */}
          {total > 1 && (
            <>
              <button
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Imagen anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white/70 hover:text-white"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={() => goTo(activeIndex + 1)}
                aria-label="Imagen siguiente"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white/70 hover:text-white"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
