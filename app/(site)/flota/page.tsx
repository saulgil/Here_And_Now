import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { getActiveCars } from '@/lib/data/cars';
import { SchemaOrg } from '@/components/shared/SchemaOrg';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { CarGrid } from '@/components/car/CarGrid';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = buildMetadata({
  path: '/flota',
  fallbackTitle: 'Flota Mercedes de alquiler — Ibiza y Alicante',
  fallbackDescription:
    'Explora nuestra flota exclusiva de Mercedes para alquilar en Ibiza y Alicante. Clase V 8 plazas, GLC 4MATIC y más. Reserva online desde 130€/día.',
});

export default async function FlotaPage() {
  const carList = getActiveCars();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hereandnow.es';

  return (
    <>
      <SchemaOrg
        schema={generateBreadcrumbSchema([
          { name: 'Inicio', url: siteUrl },
          { name: 'Flota', url: `${siteUrl}/flota` },
        ])}
      />

      {/* Breadcrumbs */}
      <div className="bg-[var(--color-canvas)] border-b border-[var(--color-mist)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Flota' }]} />
        </div>
      </div>

      {/* Page header */}
      <div className="section-padding pb-0">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3">
            Exclusivamente Mercedes
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-ink)] mb-4">
            Nuestra flota de alquiler
          </h1>
          <p className="text-lg text-[var(--color-vapor)] max-w-xl">
            Elegimos exclusivamente Mercedes para tu viaje. Disponible en Ibiza y Alicante.
          </p>
        </div>
      </div>

      {/* Fleet grid */}
      <section className="section-padding" aria-labelledby="fleet-h1">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <CarGrid cars={carList} />
          {carList.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[var(--color-vapor)] mb-2">Flota disponible próximamente.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        heading="¿Necesitas más información?"
        subheading="Contacta con nosotros para consultas especiales o grupos grandes."
        buttons={[
          { label: 'Contactar', href: '/contacto', variant: 'primary' },
          { label: 'Ver en Ibiza', href: '/ibiza', variant: 'secondary' },
        ]}
        phone="625 305 620"
      />
    </>
  );
}
