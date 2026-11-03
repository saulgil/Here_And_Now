import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { getCarsByLocation } from '@/lib/data/cars';
import { getLocationBySlug } from '@/lib/data/locations';
import { getFaqsByCategory } from '@/lib/data/faqs';
import { getTestimonialsByLocation } from '@/lib/data/testimonials';
import { SchemaOrg } from '@/components/shared/SchemaOrg';
import {
  generateFAQSchema,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
} from '@/lib/schema';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { LocationHero } from '@/components/location/LocationHero';
import { CarGrid } from '@/components/car/CarGrid';
import { PickupPointGrid } from '@/components/location/PickupPointGrid';
import type { PickupPointCard } from '@/components/location/PickupPointGrid';
import { WhyHereSection } from '@/components/location/WhyHereSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';
import { WhatsAppCTA } from '@/components/shared/WhatsAppCTA';

// ── Metadata ──────────────────────────────────────────────────────
export const metadata: Metadata = buildMetadata({
  path: '/ibiza',
  fallbackTitle: 'Alquiler de coches Mercedes en Ibiza — Reserva online',
  fallbackDescription:
    'Alquila un Mercedes en Ibiza desde 130€/día. Recogida en aeropuerto, puerto u otro punto. Mercedes Clase V con hasta 8 plazas. Sin sorpresas.',
});

const IBIZA_PICKUP_POINTS: PickupPointCard[] = [
  {
    name: 'Aeropuerto de Ibiza (IBZ)',
    slug: 'aeropuerto-ibiza',
    description: 'Terminal de llegadas, planta baja. Te esperamos con el vehículo preparado.',
    href: '/ibiza/aeropuerto',
    type: 'airport',
  },
  {
    name: 'Puerto de Ibiza',
    slug: 'puerto-ibiza',
    description: 'Zona de alquiler junto a la dársena. Ideal si llegas en ferri o yate.',
    href: '/ibiza/puerto',
    type: 'port',
  },
];

const IBIZA_REASONS = [
  {
    title: 'Libertad para explorar la isla',
    description: 'Ibiza tiene calas y playas a las que solo se puede llegar en coche. Un Mercedes te da acceso a los rincones más exclusivos, más allá de los circuitos turísticos habituales.',
  },
  {
    title: 'Un coche a la altura de Ibiza',
    description: 'Ibiza es sinónimo de estilo y exclusividad. Llegar a cualquier lugar de la isla al volante de un Mercedes es la forma más coherente de vivirla. El vehículo perfecto para una experiencia premium.',
  },
  {
    title: 'Recogida directa al aterrizar',
    description: 'Te esperamos en el aeropuerto o el puerto con el vehículo preparado. Sin esperas, sin formularios interminables. Empieza tu aventura en Ibiza desde el primer minuto.',
  },
];

// ── Page ──────────────────────────────────────────────────────────
export default function IbizaPage() {
  const ibizaCars = getCarsByLocation('ibiza');
  const ibizaLocation = getLocationBySlug('ibiza');
  const testimonialsData = getTestimonialsByLocation('ibiza');
  const faqs = getFaqsByCategory('ibiza');

  const priceFrom = ibizaCars.length > 0
    ? Math.min(...ibizaCars.map((c) => c.minPrice ?? 130))
    : 130;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hereandnow.es';

  const heroImage = ibizaLocation?.heroImage?.asset?.url;
  const heroAlt = ibizaLocation?.heroImage?.alt?.es;

  // Structured data
  const schemas = [
    generateBreadcrumbSchema([
      { name: 'Inicio', url: siteUrl },
      { name: 'Ibiza', url: `${siteUrl}/ibiza` },
    ]),
    generateFAQSchema(faqs, 'es'),
    generateLocalBusinessSchema(
      { siteName: 'Here & Now — Ibiza' },
      { name: { es: 'Here & Now Ibiza' }, phone: '+34625305620' },
    ),
  ];

  return (
    <>
      <SchemaOrg schema={schemas} />

      {/* Breadcrumbs */}
      <div className="bg-[var(--color-canvas)] border-b border-[var(--color-mist)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3">
          <Breadcrumbs
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Ibiza' },
            ]}
          />
        </div>
      </div>

      {/* 1 — Hero */}
      <LocationHero
        heading="Alquiler de coches Mercedes en Ibiza"
        description="Te proporcionamos la mejor manera de explorar Ibiza con nuestros vehículos de lujo en alquiler."
        priceFrom={priceFrom}
        pickupCount={2}
        imageUrl={heroImage}
        imageAlt={heroAlt}
      />

      {/* 2 — Fleet (Ibiza cars only) */}
      <section
        id="flota-section"
        className="section-padding"
        aria-labelledby="ibiza-fleet-heading"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <CarGrid
            cars={ibizaCars}
            heading="Vehículos disponibles en Ibiza"
            subheading="Elige el Mercedes perfecto para tu escapada a Ibiza."
          />
        </div>
      </section>

      {/* 3 — Pickup points */}
      <PickupPointGrid
        points={IBIZA_PICKUP_POINTS}
        intro="Operamos en los dos puntos de entrada principales a la isla."
      />

      {/* 4 — Why Ibiza (unique local content) */}
      <WhyHereSection
        heading="¿Por qué alquilar un Mercedes en Ibiza?"
        reasons={IBIZA_REASONS}
      />

      {/* 5 — Quick guide teaser */}
      <div className="bg-[var(--color-stone)] border-y border-[var(--color-mist)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-[var(--color-ink)] mb-1">
              Antes de coger el coche en Ibiza...
            </p>
            <p className="text-sm text-[var(--color-vapor)]">
              Reserva con antelación en julio–agosto. Muchas calas del norte solo son accesibles en coche.
            </p>
          </div>
          <a
            href="/guias/alquiler-coches-ibiza"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors whitespace-nowrap"
          >
            Ver guía completa →
          </a>
        </div>
      </div>

      {/* 6 — Testimonials (Ibiza only) */}
      <TestimonialsSection testimonials={testimonialsData} />

      {/* 7 — FAQ (Ibiza-specific questions) */}
      <section className="section-padding" aria-labelledby="faq-ibiza">
        <div className="max-w-[760px] mx-auto px-6 lg:px-0">
          <FAQSection
            faqs={faqs}
            heading="Preguntas frecuentes — Ibiza"
            showContactLink
          />
        </div>
      </section>

      {/* 8 — CTA */}
      <CTASection
        heading="Reserva tu Mercedes en Ibiza"
        subheading="Empieza tu aventura en la isla desde el primer minuto."
        buttons={[
          { label: 'Reservar ahora en Ibiza', href: '/flota', variant: 'primary' },
          { label: 'Contactar', href: '/contacto', variant: 'secondary' },
        ]}
        phone="625 305 620"
      />

      <WhatsAppCTA message="Hola, me interesa alquilar un coche Mercedes en Ibiza." />
    </>
  );
}
