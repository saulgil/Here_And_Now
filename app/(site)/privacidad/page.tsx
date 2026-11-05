import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/utils/metadata';
import { SchemaOrg } from '@/components/shared/SchemaOrg';
import { generateLegalPageSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { LegalContent } from '@/components/shared/LegalContent';
import { PRIVACY_CONTENT } from '@/data/legal/privacy';

const PAGE_TITLE = 'Política de Privacidad — Here & Now';
const PAGE_DESCRIPTION =
  'Política de privacidad de Here & Now: quién trata sus datos, con qué finalidad, durante cuánto tiempo y cuáles son sus derechos como usuario.';

export const metadata: Metadata = buildMetadata({
  path: '/privacidad',
  fallbackTitle: PAGE_TITLE,
  fallbackDescription: PAGE_DESCRIPTION,
});

export default function PrivacidadPage() {
  const schema = generateLegalPageSchema({
    name: PAGE_TITLE,
    path: '/privacidad',
    description: PAGE_DESCRIPTION,
  });

  return (
    <>
      <SchemaOrg schema={schema} />

      {/* Breadcrumbs */}
      <div className="bg-[var(--color-canvas)] border-b border-[var(--color-mist)]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Privacidad' }]} />
        </div>
      </div>

      {/* Page header */}
      <div className="section-padding pb-0">
        <div className="max-w-[720px] mx-auto px-6 lg:px-12">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-gold)] mb-3">
            Legal
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-ink)] mb-4">
            Política de Privacidad
          </h1>
        </div>
      </div>

      {/* Legal content — comfortable reading width */}
      <section className="section-padding" aria-labelledby="privacidad-content">
        <div className="max-w-[720px] mx-auto px-6 lg:px-12">
          <LegalContent blocks={PRIVACY_CONTENT} />
        </div>
      </section>
    </>
  );
}
