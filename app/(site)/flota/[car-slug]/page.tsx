import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import {
  getAllCarSlugs,
  getCarBySlug,
  getCarAvailabilities,
  getActiveCars,
} from '@/lib/data/cars';
import { getFaqsByCategory } from '@/lib/data/faqs';
import type { Car, CarListItem, CarAvailability, FAQ } from '@/types';
import { SchemaOrg } from '@/components/shared/SchemaOrg';
import { generateCarProductSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CarGallery } from '@/components/car/CarGallery';
import { CarSpecs } from '@/components/car/CarSpecs';
import { CarBookingForm } from '@/components/car/CarBookingForm';
import { StickyBookingBar } from '@/components/car/StickyBookingBar';
import { CarGrid } from '@/components/car/CarGrid';
import { FAQSection } from '@/components/sections/FAQSection';
import { RichText } from '@/components/shared/RichText';
import { Users, Settings2, Fuel, Calendar, MapPin, Gauge, Navigation } from 'lucide-react';

// ── Static params (build-time SSG) ──────────────────────────────
export async function generateStaticParams() {
  const slugs = getAllCarSlugs();
  return slugs.map((s) => ({ 'car-slug': s.slug }));
}

// ── Metadata ──────────────────────────────────────────────────────
type Props = { params: Promise<{ 'car-slug': string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { 'car-slug': slug } = await params;
  const car: Car | null = getCarBySlug(slug);
  if (!car) return {};

  const availabilities: CarAvailability[] = getCarAvailabilities(car._id);
  const minPrice = availabilities.length
    ? Math.min(...availabilities.map((a) => a.pricePerDay))
    : undefined;

  const title = [
    `Alquiler ${car.name.es}`,
    car.passengers ? `${car.passengers} plazas` : '',
    minPrice ? `desde ${minPrice}€/día` : '',
  ]
    .filter(Boolean)
    .join(' — ');

  return buildMetadata({
    path: `/flota/${slug}`,
    fallbackTitle: title,
    fallbackDescription: car.shortDescription?.es ?? undefined,
    ogImageFallback: car.mainImage?.asset,
    seo: car.seo,
  });
}

// ── Fuel / Transmission labels ────────────────────────────────────
const FUEL: Record<string, string> = {
  diesel: 'Diésel', gasolina: 'Gasolina', hibrido: 'Híbrido', electrico: 'Eléctrico',
};
const TRANS: Record<string, string> = {
  automatic: 'Automático', manual: 'Manual',
};

// ── Page ──────────────────────────────────────────────────────────
export default async function CarDetailPage({ params }: Props) {
  const { 'car-slug': slug } = await params;

  const typedCar: Car | null = getCarBySlug(slug);
  if (!typedCar) notFound();

  const allCarsTyped: CarListItem[] = getActiveCars();
  const typedAvailabilities: CarAvailability[] = getCarAvailabilities(typedCar._id);
  const carFaqs: FAQ[] = typedCar.faqs?.length ? [] : getFaqsByCategory('vehicle');

  const relatedCars = allCarsTyped
    .filter((c) => c.slug.current !== slug)
    .slice(0, 3);

  const faqs: FAQ[] = typedCar.faqs?.length ? typedCar.faqs : carFaqs;

  const minPrice = typedAvailabilities.length
    ? Math.min(...typedAvailabilities.map((a) => a.pricePerDay))
    : undefined;

  const availableLocations = typedAvailabilities.map((a) => a.location);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hereandnow.es';

  // ── Structured data ────────────────────────────────────────────
  const schemas = [
    generateBreadcrumbSchema([
      { name: 'Inicio', url: siteUrl },
      { name: 'Flota', url: `${siteUrl}/flota` },
      { name: typedCar.name.es, url: `${siteUrl}/flota/${slug}` },
    ]),
    generateCarProductSchema(typedCar, typedAvailabilities),
    ...(faqs.length ? [generateFAQSchema(faqs, 'es')] : []),
  ];

  return (
    <>
      <SchemaOrg schema={schemas} />

      {/* Sticky booking bar (Client — appears on scroll) */}
      <StickyBookingBar
        carName={typedCar.name.es}
        priceFrom={minPrice}
      />

      {/* Breadcrumbs */}
      <div className="bg-[var(--color-canvas)] border-b border-[var(--color-mist)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Flota', href: '/flota' },
              { label: typedCar.name.es },
            ]}
          />
        </div>
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-8 lg:py-12">
        {/*
          Column DOM order is intentionally RIGHT-first, LEFT-second so the
          H1 (vehicle name, in the right sidebar) precedes the H2 content
          sections (description, specs…) in document order — required for
          correct heading semantics. CSS `order-1` / `order-2` restores the
          expected visual layout (wide content column on the left, narrower
          sidebar on the right) at every breakpoint.
        */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-8 xl:gap-12 items-start">

          {/* ── RIGHT: H1 + Booking — FIRST in DOM for heading order ── */}
          <div className="order-2 space-y-6 lg:sticky lg:top-20">

            {/* Car intro (desktop only — mobile version is in the left column below) */}
            <div className="hidden lg:block">
              <CarIntroBlock
                car={typedCar}
                minPrice={minPrice}
                availableLocations={availableLocations}
              />
            </div>

            {/* Booking form */}
            <CarBookingForm
              carName={typedCar.name.es}
              carSlug={slug}
              priceFrom={minPrice}
              availableLocations={availableLocations}
            />
          </div>

          {/* ── LEFT: Gallery + Description + Specs — SECOND in DOM ── */}
          <div className="order-1 space-y-8">

            {/* Gallery */}
            {typedCar.gallery && typedCar.gallery.length > 0 ? (
              <CarGallery images={typedCar.gallery} />
            ) : typedCar.mainImage ? (
              <div className="aspect-[16/10] rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-stone)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={typedCar.mainImage.asset.url}
                  alt={typedCar.mainImage.alt?.es ?? typedCar.name.es}
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                />
              </div>
            ) : null}

            {/* Car name + quick specs (mobile-only — desktop shows in right column above) */}
            <div className="lg:hidden">
              <CarIntroBlock
                car={typedCar}
                minPrice={minPrice}
                availableLocations={availableLocations}
              />
            </div>

            {/* Description */}
            {typedCar.fullDescription?.es && (
              <div>
                <h2 className="text-xl font-semibold text-[var(--color-ink)] mb-4">
                  Descripción del vehículo
                </h2>
                <div className="text-[var(--color-vapor)] leading-relaxed">
                  <RichText value={typedCar.fullDescription.es} />
                </div>
              </div>
            )}

            {/* Technical specs */}
            <div>
              <h2 className="text-xl font-semibold text-[var(--color-ink)] mb-4">
                Especificaciones técnicas
              </h2>
              <CarSpecs car={typedCar} />
            </div>

            {/* Features */}
            {typedCar.features?.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-[var(--color-ink)] mb-4">
                  Equipamiento incluido
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {typedCar.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-vapor)]">
                      <span className="text-[var(--color-gold)] font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>{f.es}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Rental conditions — h2 consistent with the other content section headings above */}
            <div className="bg-[var(--color-stone)] rounded-[var(--radius-md)] p-5">
              <h2 className="font-semibold text-[var(--color-ink)] mb-3 text-sm">
                Condiciones del alquiler
              </h2>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-[var(--color-vapor)]">
                <li className="flex items-center gap-2">
                  <Users size={14} className="text-[var(--color-fog)]" aria-hidden />
                  Edad mínima: {typedCar.minAge} años
                </li>
                <li className="flex items-center gap-2">
                  <Navigation size={14} className="text-[var(--color-fog)]" aria-hidden />
                  Carnet mínimo: {typedCar.minLicenseYears} años
                </li>
                <li className="flex items-center gap-2">
                  <Gauge size={14} className="text-[var(--color-fog)]" aria-hidden />
                  {typedCar.kmIncluded} km/día incluidos
                </li>
                <li className="flex items-center gap-2">
                  <Gauge size={14} className="text-[var(--color-fog)]" aria-hidden />
                  +{typedCar.kmExtraPrice}€/km adicional
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ (if any) ────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="section-padding bg-[var(--color-stone)]">
          <div className="max-w-[760px] mx-auto px-6 lg:px-0">
            <FAQSection
              faqs={faqs}
              heading={`Preguntas frecuentes — ${typedCar.name.es}`}
              showContactLink
            />
          </div>
        </section>
      )}

      {/* ── Related cars ────────────────────────────────────────── */}
      {relatedCars.length > 0 && (
        <section className="section-padding">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <h2 className="text-2xl font-semibold text-[var(--color-ink)] mb-8">
              Otros vehículos disponibles
            </h2>
            <CarGrid cars={relatedCars} />
          </div>
        </section>
      )}
    </>
  );
}

// ── CarIntroBlock — name, specs pills, price, availability ───────
function CarIntroBlock({
  car,
  minPrice,
  availableLocations,
}: {
  car: Car;
  minPrice?: number;
  availableLocations: string[];
}) {
  return (
    <div>
      {/* Brand */}
      {car.brand && (
        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[var(--color-vapor)] mb-2">
          {car.brand.name}
        </p>
      )}

      {/* Name */}
      <h1 className="text-2xl lg:text-3xl font-bold text-[var(--color-ink)] mb-4 leading-tight">
        {car.name.es}
      </h1>

      {/* Spec pills */}
      <ul className="flex flex-wrap gap-2 mb-5" aria-label="Especificaciones">
        <li className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-stone)] rounded-full text-xs font-medium text-[var(--color-vapor)]">
          <Users size={12} aria-hidden /> {car.passengers} plazas
        </li>
        <li className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-stone)] rounded-full text-xs font-medium text-[var(--color-vapor)]">
          <Settings2 size={12} aria-hidden /> {TRANS[car.transmission] ?? car.transmission}
        </li>
        <li className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-stone)] rounded-full text-xs font-medium text-[var(--color-vapor)]">
          <Fuel size={12} aria-hidden /> {FUEL[car.fuel] ?? car.fuel}
        </li>
        {car.year && (
          <li className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-stone)] rounded-full text-xs font-medium text-[var(--color-vapor)]">
            <Calendar size={12} aria-hidden /> {car.year}
          </li>
        )}
      </ul>

      {/* Price */}
      {minPrice && (
        <p className="mb-4">
          <span className="text-xs text-[var(--color-vapor)] uppercase tracking-wider">Desde </span>
          <strong className="text-3xl font-bold text-[var(--color-ink)] tabular-nums tracking-tight">
            {minPrice}€
          </strong>
          <span className="text-sm text-[var(--color-vapor)]">/día</span>
        </p>
      )}

      {/* Availability */}
      {availableLocations.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {availableLocations.includes('ibiza') && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[var(--color-gold)]/10 text-[var(--color-gold-deep)] text-xs font-semibold rounded-full border border-[var(--color-gold)]/20">
              <MapPin size={10} aria-hidden /> Disponible en Ibiza
            </span>
          )}
          {availableLocations.includes('alicante') && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[var(--color-dusk)]/10 text-[var(--color-dusk)] text-xs font-semibold rounded-full border border-[var(--color-dusk)]/20">
              <MapPin size={10} aria-hidden /> Disponible en Alicante
            </span>
          )}
        </div>
      )}

      {/* Short description */}
      {car.shortDescription?.es && (
        <p className="text-sm text-[var(--color-vapor)] leading-relaxed">
          {car.shortDescription.es}
        </p>
      )}
    </div>
  );
}
