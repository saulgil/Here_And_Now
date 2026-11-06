import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { SchemaOrg } from '@/components/shared/SchemaOrg';
import { generateLegalPageSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { LegalContent } from '@/components/shared/LegalContent';
import { CANCELLATION_CONTENT } from '@/data/legal/cancellation';

const PAGE_TITLE = 'Política de Cancelación — Here & Now';
const PAGE_DESCRIPTION =
  'Política de cancelación y devoluciones de Here & Now: plazos de cancelación, reembolsos, condiciones de devolución de la fianza y procedimiento de reclamaciones.';

export const metadata: Metadata = buildMetadata({
  path: '/politica-cancelacion',
  fallbackTitle: PAGE_TITLE,
  fallbackDescription: PAGE_DESCRIPTION,
});

export default function PoliticaCancelacionPage() {
  const schema = generateLegalPageSchema({
    name: PAGE_TITLE,
    path: '/politica-cancelacion',
    description: PAGE_DESCRIPTION,
  });

  return (
    <>
      <SchemaOrg schema={schema} />

      {/* Breadcrumbs */}
      <div className="bg-[var(--color-canvas)] border-b border-[var(--color-mist)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Política de Cancelación' }]} />
        </div>
      </div>

      {/* Page header */}
      <div className="section-padding pb-0">
        <div className="max-w-[720px] mx-auto px-6 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3">
            Legal
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-ink)] mb-4">
            Política de Cancelación
          </h1>
        </div>
      </div>

      {/* Legal content — comfortable reading width */}
      <section className="section-padding" aria-labelledby="politica-cancelacion-content">
        <div className="max-w-[720px] mx-auto px-6 lg:px-12">
          <LegalContent blocks={CANCELLATION_CONTENT} />
        </div>
      </section>
    </>
  );
}
