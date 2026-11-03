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
  path: '/alicante',
  fallbackTitle: 'Alquiler de coches Mercedes en Alicante — Reserva online',
  fallbackDescription:
    'Alquila un Mercedes en Alicante desde 130€/día. Oficina propia en El Campello, aeropuerto y puerto. Mercedes Clase V 8 plazas. Reserva ahora.',
});

const ALICANTE_PICKUP_POINTS: PickupPointCard[] = [
  {
    name: 'Oficina El Campello',
    slug: 'oficina-alicante',
    description: 'Calle de la Figuera, 5, local 58. Atención personalizada. Abierto todo el año.',
    href: '/alicante/oficina',
    type: 'office',
  },
  {
    name: 'Aeropuerto de Alicante-Elche (ALC)',
    slug: 'aeropuerto-alicante',
    description: 'Terminal de llegadas, zona de alquiler de vehículos. Servicio express.',
    href: '/alicante/aeropuerto',
    type: 'airport',
  },
  {
    name: 'Puerto de Alicante',
    slug: 'puerto-alicante',
    description: 'Muelle de cruceros y ferris. Recogida al bajar del barco.',
    href: '/alicante/puerto',
    type: 'port',
  },
];

// Different reasons than Ibiza — no duplication
const ALICANTE_REASONS = [
  {
    title: 'Alquiler de coches Mercedes en Alicante: lujo y comodidad a tu alcance',
    description: 'Alicante, con su clima soleado y sus playas de arena fina, es el lugar perfecto para disfrutar de un coche Mercedes. Nuestro servicio en Alicante te ofrece una selección exclusiva de coches que satisfacen los gustos más exigentes.',
  },
  {
    title: 'Alquiler flexible y adaptado a tus necesidades',
    description: 'Tanto si visitas Alicante por turismo, negocios o una escapada de fin de semana, nuestros vehículos están disponibles todo el año. El Mercedes Clase V es perfecto para grupos y familias que quieren explorar la Costa Blanca con total comodidad.',
  },
  {
    title: 'Oficina propia en El Campello',
    description: 'Somos la única empresa de alquiler de coches Mercedes con oficina física propia en la provincia de Alicante. Atención personalizada, los vehículos a la vista y nuestro equipo listo para resolver cualquier duda antes de salir.',
  },
];

// ── Page ──────────────────────────────────────────────────────────
export default function AlicantePage() {
  const alicanteCars = getCarsByLocation('alicante');
  const alicanteLocation = getLocationBySlug('alicante');
  const testimonialsData = getTestimonialsByLocation('alicante');
  const faqs = getFaqsByCategory('alicante');

  const priceFrom = alicanteCars.length > 0
    ? Math.min(...alicanteCars.map((c) => c.minPrice ?? 130))
    : 130;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hereandnow.es';

  const heroImage = alicanteLocation?.heroImage?.asset?.url;
  const heroAlt = alicanteLocation?.heroImage?.alt?.es;

  // Structured data — Alicante has the physical office so we include the full address
  const schemas = [
    generateBreadcrumbSchema([
      { name: 'Inicio', url: siteUrl },
      { name: 'Alicante', url: `${siteUrl}/alicante` },
    ]),
    generateFAQSchema(faqs, 'es'),
    generateLocalBusinessSchema(
      { siteName: 'Here & Now — Alicante' },
      {
        name: { es: 'Here & Now Alicante' },
        address: 'Calle de la Figuera, 5, local 58',
        coordinates: { lat: 38.4057238, lng: -0.4077417 },
        phone: '+34625305620',
        openingHours: [
          { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '09:00', closes: '21:00' },
        ],
      },
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
              { label: 'Alicante' },
            ]}
          />
        </div>
      </div>

      {/* 1 — Hero */}
      <LocationHero
        heading="Alquiler de coches Mercedes en Alicante"
        description="Descubre la mejor manera de explorar la Costa Blanca con nuestros Mercedes en alquiler."
        priceFrom={priceFrom}
        pickupCount={3}
        badges={['Oficina propia en El Campello']}
        imageUrl={heroImage}
        imageAlt={heroAlt}
      />

      {/* 2 — Fleet (Alicante cars only) */}
      <section
        id="flota-section"
        className="section-padding"
        aria-labelledby="alicante-fleet-heading"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <CarGrid
            cars={alicanteCars}
            heading="Vehículos disponibles en Alicante"
            subheading="Elige el Mercedes perfecto para explorar la Costa Blanca."
          />
        </div>
      </section>

      {/* 3 — Pickup points (3 for Alicante, vs 2 for Ibiza) */}
      <PickupPointGrid
        points={ALICANTE_PICKUP_POINTS}
        intro="Tres opciones para que la recogida sea lo más cómoda posible."
      />

      {/* 4 — Why Alicante (genuinely different content from Ibiza) */}
      <WhyHereSection
        heading="Alquiler de coches Mercedes en Alicante"
        reasons={ALICANTE_REASONS}
      />

      {/* 5 — Office callout (unique to Alicante — Ibiza doesn't have this) */}
      <section
        className="bg-[var(--color-night)] text-[var(--color-canvas)]"
        aria-labelledby="office-heading"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-lg">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-gold)] mb-2">
              Atención personalizada
            </p>
            <h2 id="office-heading" className="text-xl font-semibold mb-2">
              Oficina propia en El Campello, Alicante
            </h2>
            <p className="text-[var(--color-fog)] text-sm leading-relaxed">
              Calle de la Figuera, 5, local 58 · 03560 El Campello
            </p>
            <p className="text-[var(--color-fog)] text-sm mt-1">
              Abierto todo el año · Teléfono:{' '}
              <a
                href="tel:+34625305620"
                className="text-[var(--color-canvas)] hover:text-[var(--color-gold)] transition-colors"
              >
                625 305 620
              </a>
            </p>
          </div>
          <a
            href="/alicante/oficina"
            className="flex-shrink-0 inline-flex h-11 items-center px-6 border-[1.5px] border-[var(--color-canvas)]/40 text-[var(--color-canvas)] font-semibold text-sm tracking-wide uppercase rounded-[var(--radius-sm)] hover:border-[var(--color-canvas)] transition-colors"
          >
            Ver dirección y horarios
          </a>
        </div>
      </section>

      {/* 6 — Testimonials (Alicante filter) */}
      <TestimonialsSection testimonials={testimonialsData} />

      {/* 7 — FAQ (Alicante-specific questions — different from Ibiza) */}
      <section className="section-padding" aria-labelledby="faq-alicante">
        <div className="max-w-[760px] mx-auto px-6 lg:px-0">
          <FAQSection
            faqs={faqs}
            heading="Preguntas frecuentes — Alicante"
            showContactLink
          />
        </div>
      </section>

      {/* 8 — CTA */}
      <CTASection
        heading="Reserva tu Mercedes en Alicante"
        subheading="Visítanos en nuestra oficina de El Campello o reserva online en minutos."
        buttons={[
          { label: 'Reservar ahora en Alicante', href: '/flota', variant: 'primary' },
          { label: 'Visitar nuestra oficina', href: '/alicante/oficina', variant: 'secondary' },
        ]}
        phone="625 305 620"
      />

      <WhatsAppCTA message="Hola, me interesa alquilar un coche Mercedes en Alicante." />
    </>
  );
}
