import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { SchemaOrg } from '@/components/shared/SchemaOrg';
import { generateLegalPageSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { LegalContent } from '@/components/shared/LegalContent';
import { COOKIES_CONTENT } from '@/data/legal/cookies';

const PAGE_TITLE = 'Política de Cookies — Here & Now';
const PAGE_DESCRIPTION =
  'Política de cookies de Here & Now: qué son las cookies, cómo las utilizamos y cómo puede gestionarlas desde su navegador.';

export const metadata: Metadata = buildMetadata({
  path: '/cookies',
  fallbackTitle: PAGE_TITLE,
  fallbackDescription: PAGE_DESCRIPTION,
});

export default function CookiesPage() {
  const schema = generateLegalPageSchema({
    name: PAGE_TITLE,
    path: '/cookies',
    description: PAGE_DESCRIPTION,
  });

  return (
    <>
      <SchemaOrg schema={schema} />

      {/* Breadcrumbs */}
      <div className="bg-[var(--color-canvas)] border-b border-[var(--color-mist)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Política de Cookies' }]} />
        </div>
      </div>

      {/* Page header */}
      <div className="section-padding pb-0">
        <div className="max-w-[720px] mx-auto px-6 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3">
            Legal
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-ink)] mb-4">
            Política de Cookies
          </h1>
        </div>
      </div>

      {/* Legal content — comfortable reading width */}
      <section className="section-padding" aria-labelledby="cookies-content">
        <div className="max-w-[720px] mx-auto px-6 lg:px-12">
          <LegalContent blocks={COOKIES_CONTENT} />
        </div>
      </section>
    </>
  );
}
