import { getSiteSettings } from '@/lib/data/site';
import { getActiveCars } from '@/lib/data/cars';
import type { SiteSettings } from '@/types';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SchemaOrg } from '@/components/shared/SchemaOrg';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/schema';

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = (await getSiteSettings()) as SiteSettings;

  // "Nuestra flota" dropdown is generated here from the active cars data
  // layer rather than hardcoded in data/site.ts, so adding/removing an
  // active car updates the nav automatically.
  const fleetChildren = getActiveCars().map((car) => ({
    label: { es: car.name.es, en: car.name.en },
    href: `/flota/${car.slug.current}`,
  }));
  const mainNav = settings?.mainNav?.map((item) =>
    item.href === '/flota' && item.label.es === 'Nuestra flota'
      ? { ...item, children: fleetChildren }
      : item
  );
  const headerSettings = settings ? { ...settings, mainNav } : settings;

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

      <Header settings={headerSettings} />

      <main id="main-content">
        {children}
      </main>

      <Footer settings={settings} />
    </>
  );
}
