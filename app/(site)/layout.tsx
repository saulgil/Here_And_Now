import { getSiteSettings } from '@/lib/data/site';
import type { SiteSettings } from '@/types';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SchemaOrg } from '@/components/shared/SchemaOrg';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/schema';

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = (await getSiteSettings()) as SiteSettings;

  const schemas = [
    generateWebSiteSchema(settings?.siteName ?? 'Here & Now'),
    generateOrganizationSchema(settings ?? { siteName: 'Here & Now' }),
  ];

  return (
    <>
      {/* Global structured data */}
      <SchemaOrg schema={schemas} />

      {/* Skip navigation link */}
      <a href="#main-content" className="skip-link">
        Ir al contenido principal
      </a>

      <Header settings={settings} />

      <main id="main-content">
        {children}
      </main>

      <Footer settings={settings} />
    </>
  );
}
