// JSON-LD / Schema.org generators
// All return plain objects to be serialized in <SchemaOrg> component

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hereandnow.es';

type LocaleString = { es: string; en?: string };
type LocaleText = { es: string; en?: string };

function l(field: LocaleString | LocaleText | undefined, locale: 'es' | 'en' = 'es'): string {
  if (!field) return '';
  return field[locale] ?? field.es ?? '';
}

// ── Organization + LocalBusiness ───────────────────────────────
export function generateOrganizationSchema(settings: {
  siteName?: string;
  logo?: { asset?: { url: string } };
  phone?: string;
  email?: string;
  instagramUrl?: string;
  threadsUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'CarRental'],
    '@id': `${SITE_URL}/#organization`,
    name: settings.siteName ?? 'Here & Now',
    url: SITE_URL,
    logo: settings.logo?.asset?.url,
    telephone: settings.phone,
    email: settings.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle de la Figuera, 5, local 58',
      addressLocality: 'El Campello',
      addressRegion: 'Alicante',
      postalCode: '03560',
      addressCountry: 'ES',
    },
    sameAs: [settings.instagramUrl, settings.threadsUrl].filter(Boolean),
  };
}

// ── LocalBusiness for a pickup point ───────────────────────────
export function generateLocalBusinessSchema(settings: { siteName: string }, pickupPoint: {
  name: LocaleString;
  address?: string;
  coordinates?: { lat: number; lng: number };
  phone?: string;
  openingHours?: Array<{ days: string[]; opens: string; closes: string; closed?: boolean }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: settings.siteName,
    url: SITE_URL,
    telephone: pickupPoint.phone,
    address: pickupPoint.address
      ? { '@type': 'PostalAddress', streetAddress: pickupPoint.address, addressCountry: 'ES' }
      : undefined,
    geo: pickupPoint.coordinates
      ? { '@type': 'GeoCoordinates', latitude: pickupPoint.coordinates.lat, longitude: pickupPoint.coordinates.lng }
      : undefined,
    openingHoursSpecification: pickupPoint.openingHours
      ?.filter((oh) => !oh.closed)
      .map((oh) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: oh.days,
        opens: oh.opens,
        closes: oh.closes,
      })),
  };
}

// ── Product (car detail page) ───────────────────────────────────
export function generateCarProductSchema(
  car: {
    name: LocaleString;
    shortDescription?: LocaleText;
    gallery?: Array<{ asset?: { url: string } }>;
    brand?: { name: string };
  },
  availabilities: Array<{
    pricePerDay: number;
    currency: string;
    location?: string;
  }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: l(car.name),
    description: car.shortDescription ? l(car.shortDescription) : undefined,
    image: car.gallery?.map((img) => img.asset?.url).filter(Boolean),
    brand: car.brand ? { '@type': 'Brand', name: car.brand.name } : undefined,
    offers: availabilities.map((av) => ({
      '@type': 'Offer',
      price: av.pricePerDay,
      priceCurrency: av.currency,
      availability: 'https://schema.org/InStock',
      areaServed: av.location,
    })),
  };
}

// ── FAQPage ─────────────────────────────────────────────────────
export function generateFAQSchema(faqs: Array<{
  question: LocaleString;
  answer: { es: string[]; en?: string[] };
}>, locale: 'es' | 'en' = 'es') {
  function toPlainText(paragraphs: string[] | undefined): string {
    return (paragraphs ?? []).join(' ');
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: l(faq.question, locale),
      acceptedAnswer: {
        '@type': 'Answer',
        text: toPlainText(faq.answer?.[locale] ?? faq.answer?.es),
      },
    })),
  };
}

// ── BreadcrumbList ──────────────────────────────────────────────
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ── WebSite (homepage only) ─────────────────────────────────────
export function generateWebSiteSchema(siteName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: siteName,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/flota?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'es',
  };
}
