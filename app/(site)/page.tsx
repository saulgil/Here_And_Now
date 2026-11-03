import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import {
  getActiveCars,
} from '@/lib/data/cars';
import { getLocationBySlug } from '@/lib/data/locations';
import { getFaqsByCategory } from '@/lib/data/faqs';
import { getFeaturedTestimonials } from '@/lib/data/testimonials';
import { SchemaOrg } from '@/components/shared/SchemaOrg';
import { generateFAQSchema, generateLocalBusinessSchema } from '@/lib/schema';
import { HeroHome } from '@/components/sections/HeroHome';
import { CarGrid } from '@/components/car/CarGrid';
import { DestinationCards } from '@/components/sections/DestinationCards';
import { BrandStatement } from '@/components/sections/BrandStatement';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';
import { WhatsAppCTA } from '@/components/shared/WhatsAppCTA';

// ── Metadata ──────────────────────────────────────────────────────
export const metadata: Metadata = buildMetadata({
  path: '/',
  fallbackTitle: 'Alquiler de coches Mercedes en Ibiza y Alicante',
  fallbackDescription:
    'Alquila un Mercedes premium en Ibiza o Alicante. Flota exclusiva, recogida en aeropuerto o puerto. Reserva online sin costes ocultos desde 130€/día.',
});

// ── Page ──────────────────────────────────────────────────────────
export default async function HomePage() {
  const carList = getActiveCars();
  const ibizaLoc = getLocationBySlug('ibiza');
  const alicanteLoc = getLocationBySlug('alicante');
  const testimonialsData = getFeaturedTestimonials();
  const faqs = getFaqsByCategory('general');

  // Minimum price from fleet
  const priceFrom = carList.length > 0
    ? Math.min(...carList.map((c) => c.minPrice ?? 130))
    : 130;

  // Structured data
  const faqSchema = generateFAQSchema(faqs, 'es');
  const localBusinessSchema = generateLocalBusinessSchema(
    { siteName: 'Here & Now' },
    {
      name: { es: 'Oficina Here & Now Alicante' },
      address: 'Calle de la Figuera, 5, local 58',
      coordinates: { lat: 38.4057238, lng: -0.4077417 },
      phone: '+34625305620',
    },
  );

  return (
    <>
      {/* Page-level structured data */}
      <SchemaOrg schema={[faqSchema, localBusinessSchema]} />

      {/* 1 — Hero */}
      <HeroHome
        priceFrom={priceFrom}
        pickupPoints={5}
      />

      {/* 2 — Fleet highlight */}
      <section className="section-padding" aria-labelledby="flota-heading">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="mb-2">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3">
              Nuestra flota
            </p>
          </div>
          <CarGrid
            cars={carList}
            heading="Nuestra flota de Mercedes"
            subheading="Elegimos exclusivamente Mercedes para tu viaje, porque cada kilómetro recorrido es un testimonio de innovación y confort incomparable."
          />
          {carList.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[var(--color-vapor)] mb-4">
                Flota disponible próximamente.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3 — Destination cards */}
      <DestinationCards ibiza={ibizaLoc} alicante={alicanteLoc} />

      {/* 4 — Value proposition */}
      <ValueProposition />

      {/* 5 — Brand statement */}
      <BrandStatement />

      {/* 6 — How it works */}
      <HowItWorks />

      {/* 7 — Testimonials */}
      <TestimonialsSection testimonials={testimonialsData} />

      {/* 8 — FAQ */}
      <section className="section-padding" aria-labelledby="faq-home-heading">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 max-w-[760px]">
          <FAQSection
            faqs={faqs}
            heading="Preguntas frecuentes sobre el alquiler"
            showContactLink
          />
        </div>
      </section>

      {/* 9 — Final CTA */}
      <CTASection
        heading="¿Listo para reservar?"
        subheading="Elige tu destino y reserva en menos de 5 minutos."
        phone="625 305 620"
      />

      {/* WhatsApp floating (mobile only) */}
      <WhatsAppCTA
        message="Hola, me interesa alquilar un coche Mercedes en Ibiza o Alicante."
      />
    </>
  );
}
