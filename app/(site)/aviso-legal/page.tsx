import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { SchemaOrg } from '@/components/shared/SchemaOrg';
import { generateLegalPageSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { LegalContent } from '@/components/shared/LegalContent';
import { LEGAL_NOTICE_CONTENT } from '@/data/legal/legal-notice';

const PAGE_TITLE = 'Aviso Legal — Here & Now';
const PAGE_DESCRIPTION =
  'Aviso legal de Here & Now: datos de identificación del titular, condiciones de uso del sitio web, propiedad intelectual, enlaces y legislación aplicable.';

export const metadata: Metadata = buildMetadata({
  path: '/aviso-legal',
  fallbackTitle: PAGE_TITLE,
  fallbackDescription: PAGE_DESCRIPTION,
});

export default function AvisoLegalPage() {
  const schema = generateLegalPageSchema({
    name: PAGE_TITLE,
    path: '/aviso-legal',
    description: PAGE_DESCRIPTION,
  });

  return (
    <>
      <SchemaOrg schema={schema} />

      {/* Breadcrumbs */}
      <div className="bg-[var(--color-canvas)] border-b border-[var(--color-mist)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Aviso Legal' }]} />
        </div>
      </div>

      {/* Page header */}
      <div className="section-padding pb-0">
        <div className="max-w-[720px] mx-auto px-6 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3">
            Legal
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-ink)] mb-4">
            Aviso Legal
          </h1>
        </div>
      </div>

      {/* Legal content — comfortable reading width */}
      <section className="section-padding" aria-labelledby="aviso-legal-content">
        <div className="max-w-[720px] mx-auto px-6 lg:px-12">
          <LegalContent blocks={LEGAL_NOTICE_CONTENT} />
        </div>
      </section>
    </>
  );
}
