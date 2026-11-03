import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import {
  getAllActiveCars,
  getLocationBySlug,
  getFaqsByCategory,
  getFeaturedTestimonials,
} from '@/lib/sanity/fetch';
import type { CarListItem, FAQ, Location, Testimonial } from '@/types/sanity';
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

// ── Static FAQ fallback (shown when Sanity returns null) ──────────
const STATIC_FAQS: FAQ[] = [
  {
    _id: 'faq-req',
    question: { es: '¿Cuáles son los requisitos para alquilar un coche?' },
    answer: {
      es: [
        {
          _key: 'a1', _type: 'block', style: 'normal',
          children: [{ _key: 'c1', _type: 'span', text: 'Debes tener un mínimo de 26 años y al menos 2 años de antigüedad del carnet de conducir. Es necesario presentar DNI o pasaporte y una tarjeta de crédito para la fianza.', marks: [] }],
          markDefs: [],
        },
      ],
    },
    category: 'general',
  },
  {
    _id: 'faq-price',
    question: { es: '¿Qué incluye el precio del alquiler?' },
    answer: {
      es: [
        {
          _key: 'a2', _type: 'block', style: 'normal',
          children: [{ _key: 'c2', _type: 'span', text: 'El precio incluye el vehículo por día, 250 km diarios, asistencia en carretera 24h y la cobertura básica. Los kilómetros adicionales se cobran a 0,50€/km.', marks: [] }],
          markDefs: [],
        },
      ],
    },
    category: 'general',
  },
  {
    _id: 'faq-pickup',
    question: { es: '¿Dónde puedo recoger y entregar el vehículo?' },
    answer: {
      es: [
        {
          _key: 'a3', _type: 'block', style: 'normal',
          children: [{ _key: 'c3', _type: 'span', text: 'Operamos en varios puntos de Ibiza (aeropuerto y puerto) y Alicante (aeropuerto, puerto y nuestra oficina propia en El Campello). También podemos acordar otros puntos.', marks: [] }],
          markDefs: [],
        },
      ],
    },
    category: 'general',
  },
  {
    _id: 'faq-cancel',
    question: { es: '¿Puedo cancelar mi reserva?' },
    answer: {
      es: [
        {
          _key: 'a4', _type: 'block', style: 'normal',
          children: [{ _key: 'c4', _type: 'span', text: 'Sí. Consulta nuestra política de cancelación para ver los plazos y condiciones. Trabajamos con flexibilidad para adaptarnos a tus necesidades.', marks: [] }],
          markDefs: [],
        },
      ],
    },
    category: 'general',
  },
];

// ── Page ──────────────────────────────────────────────────────────
export default async function HomePage() {
  // Parallel Sanity fetches — all gracefully return null on error
  const [cars, ibiza, alicante, testimonials, sanityFaqs] = await Promise.all([
    getAllActiveCars(),
    getLocationBySlug('ibiza'),
    getLocationBySlug('alicante'),
    getFeaturedTestimonials(),
    getFaqsByCategory('general'),
  ]);

  const carList = (cars as CarListItem[] | null) ?? [];
  const ibizaLoc = ibiza as Location | null;
  const alicanteLoc = alicante as Location | null;
  const faqs = ((sanityFaqs as FAQ[] | null)?.length ? sanityFaqs as FAQ[] : STATIC_FAQS);
  const testimonialsData = testimonials as Testimonial[] | null;

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
                Conecta Sanity para mostrar la flota de vehículos disponibles.
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
