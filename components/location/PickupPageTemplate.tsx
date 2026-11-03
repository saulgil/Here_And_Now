import Link from 'next/link';
import { MapPin, Clock, Phone, ChevronRight, ExternalLink } from 'lucide-react';
import { SchemaOrg } from '@/components/shared/SchemaOrg';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CarGrid } from '@/components/car/CarGrid';
import { CarBookingForm } from '@/components/car/CarBookingForm';
import { FAQSection } from '@/components/sections/FAQSection';
import { RichText } from '@/components/shared/RichText';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import type { CarListItem, FAQ, PickupPoint } from '@/types';

export type PickupPageStaticContent = {
  // SEO
  h1: string;
  metaTitle: string;
  metaDescription: string;
  // Page content
  eyebrow: string;
  intro: string;
  // Location context
  locationSlug: 'ibiza' | 'alicante';
  locationName: string;
  pointSlug: string;
  pointType: 'airport' | 'port' | 'office';
  // Static operational info (shown when no local data overrides it)
  address?: string;
  iataCode?: string;
  mapsUrl?: string;
  openingHoursText?: string;
  // "How to find us" steps
  steps: string[];
  // Local context paragraph (unique per page — anti-duplication)
  localContext: string;
  // FAQs
  faqs: FAQ[];
  // Breadcrumb label for this point
  breadcrumbLabel: string;
};

interface PickupPageTemplateProps {
  content: PickupPageStaticContent;
  dataPoint?: PickupPoint | null;
  cars: CarListItem[];
  schemas: object[];
}

// Server Component — reused by all 5 pickup landing pages
export function PickupPageTemplate({
  content,
  dataPoint,
  cars,
  schemas,
}: PickupPageTemplateProps) {
  // Merge local data over static fallbacks
  const displayName = dataPoint?.name?.es ?? content.h1;
  const displayAddress = dataPoint?.address ?? content.address;
  const displayIntro = dataPoint?.shortDescription?.es ?? content.intro;

  const minPrice = cars.length > 0
    ? Math.min(...cars.map((c) => c.minPrice ?? 130))
    : 130;

  return (
    <>
      <SchemaOrg schema={schemas} />

      {/* Breadcrumbs */}
      <div className="bg-[var(--color-canvas)] border-b border-[var(--color-mist)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: content.locationName, href: `/${content.locationSlug}` },
              { label: content.breadcrumbLabel },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[var(--color-night)] text-[var(--color-canvas)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3">
            {content.eyebrow}
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-[-0.02em] mb-4 max-w-2xl text-balance leading-[1.08]">
            {content.h1}
          </h1>
          <p className="text-lg text-[var(--color-fog)] max-w-xl mb-8">
            {displayIntro}
          </p>

          {/* Key facts */}
          <div className="flex flex-wrap gap-4 text-sm">
            {displayAddress && (
              <span className="flex items-center gap-1.5 text-[var(--color-fog)]">
                <MapPin size={14} className="text-[var(--color-gold)]" aria-hidden />
                {displayAddress}
              </span>
            )}
            {content.openingHoursText && (
              <span className="flex items-center gap-1.5 text-[var(--color-fog)]">
                <Clock size={14} className="text-[var(--color-gold)]" aria-hidden />
                {content.openingHoursText}
              </span>
            )}
            <span className="flex items-center gap-1.5 text-[var(--color-fog)]">
              <Phone size={14} className="text-[var(--color-gold)]" aria-hidden />
              <a href="tel:+34625305620" className="hover:text-[var(--color-canvas)] transition-colors">
                625 305 620
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 xl:gap-14 items-start">

          {/* Left column */}
          <div className="space-y-10">

            {/* How to find us */}
            <section aria-labelledby="instrucciones-heading">
              <h2 id="instrucciones-heading" className="text-2xl font-semibold text-[var(--color-ink)] mb-6">
                Cómo recoger tu coche
              </h2>

              {/* Local instructions (rich text) or static steps */}
              {dataPoint?.instructions?.es ? (
                <div className="text-[var(--color-vapor)] leading-relaxed">
                  <RichText value={dataPoint.instructions.es} />
                </div>
              ) : (
                <ol className="space-y-4">
                  {content.steps.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-gold)] text-[var(--color-ink)] text-xs font-bold flex items-center justify-center"
                        aria-hidden
                      >
                        {i + 1}
                      </span>
                      <p className="text-[var(--color-vapor)] pt-0.5">{step}</p>
                    </li>
                  ))}
                </ol>
              )}

              {/* Google Maps link */}
              {content.mapsUrl && (
                <a
                  href={content.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors"
                >
                  <MapPin size={14} aria-hidden />
                  Ver en Google Maps
                  <ExternalLink size={12} aria-hidden />
                </a>
              )}
            </section>

            {/* Local context (unique content per page) */}
            <section aria-labelledby="context-heading">
              <h2 id="context-heading" className="text-2xl font-semibold text-[var(--color-ink)] mb-4">
                {content.pointType === 'airport'
                  ? `Desde el aeropuerto a ${content.locationName}`
                  : content.pointType === 'office'
                    ? 'Nuestra oficina en El Campello'
                    : `Desde el puerto a ${content.locationName}`}
              </h2>
              <p className="text-[var(--color-vapor)] leading-relaxed">
                {content.localContext}
              </p>
            </section>

            {/* Available fleet */}
            {cars.length > 0 && (
              <section aria-labelledby="fleet-pickup-heading">
                <h2 id="fleet-pickup-heading" className="text-2xl font-semibold text-[var(--color-ink)] mb-6">
                  Vehículos disponibles para recogida aquí
                </h2>
                <CarGrid cars={cars} />
              </section>
            )}

            {/* FAQ */}
            {content.faqs.length > 0 && (
              <FAQSection
                faqs={content.faqs}
                heading="Preguntas frecuentes"
                showContactLink
              />
            )}
          </div>

          {/* Right: Booking form */}
          <div className="lg:sticky lg:top-20">
            <CarBookingForm
              carName={`Vehículo en ${displayName}`}
              carSlug={`${content.locationSlug}-${content.pointSlug}`}
              priceFrom={minPrice}
              availableLocations={[content.locationSlug]}
            />

            {/* Back to location */}
            <div className="mt-6 pt-6 border-t border-[var(--color-mist)]">
              <Link
                href={`/${content.locationSlug}`}
                className="inline-flex items-center gap-1.5 text-sm text-[var(--color-vapor)] hover:text-[var(--color-ink)] transition-colors"
              >
                <ChevronRight size={14} className="rotate-180" aria-hidden />
                Ver todos los servicios en {content.locationName}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
