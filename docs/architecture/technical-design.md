# Diseño técnico — nueva web Here & Now

> Stack: Next.js 15 · TypeScript · Tailwind CSS 4 · Sanity v3 · Vercel  
> Fuente: `docs/architecture/sitemap-new.md`, `docs/architecture/content-model.md`, `docs/seo/`  
> Fecha: 2026-11-02  
> Estado: diseño técnico — **no implementar todavía**

---

## 1. PRINCIPIOS TÉCNICOS

1. **Servidor primero.** Server Components por defecto. Un Client Component debe justificarse.
2. **Cero JavaScript innecesario al cliente.** Cada KB de JS que no llega al navegador mejora el LCP.
3. **SEO no es un añadido.** Los metadatos, el structured data y las URLs se diseñan en el modelo, no se parchean después.
4. **El contenido manda el cache.** La revalidación es por tag, no por tiempo. La web es fresca cuando Sanity cambia, no cada N minutos.
5. **Complejidad mínima.** Si un patrón de App Router resuelve el problema, no se añade una librería.

---

## 2. ESTRUCTURA DE PROYECTO

```
here-and-now/
│
├── app/                          # App Router — toda la aplicación
│   ├── (site)/                   # Route group sin segmento en URL
│   │   ├── layout.tsx            # Layout raíz: header, footer, providers
│   │   ├── page.tsx              # /  (homepage)
│   │   │
│   │   ├── ibiza/
│   │   │   ├── page.tsx          # /ibiza/
│   │   │   ├── aeropuerto/
│   │   │   │   └── page.tsx      # /ibiza/aeropuerto/
│   │   │   └── puerto/
│   │   │       └── page.tsx      # /ibiza/puerto/
│   │   │
│   │   ├── alicante/
│   │   │   ├── page.tsx          # /alicante/
│   │   │   ├── aeropuerto/
│   │   │   │   └── page.tsx
│   │   │   ├── oficina/
│   │   │   │   └── page.tsx
│   │   │   └── puerto/
│   │   │       └── page.tsx
│   │   │
│   │   ├── flota/
│   │   │   ├── page.tsx          # /flota/
│   │   │   └── [car-slug]/
│   │   │       └── page.tsx      # /flota/[slug]
│   │   │
│   │   ├── guias/
│   │   │   ├── page.tsx          # /guias/
│   │   │   └── [guide-slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── contacto/
│   │   │   └── page.tsx
│   │   │
│   │   ├── terminos-y-condiciones/
│   │   │   └── page.tsx
│   │   ├── politica-cancelacion/
│   │   │   └── page.tsx
│   │   ├── privacidad/
│   │   │   └── page.tsx
│   │   ├── aviso-legal/
│   │   │   └── page.tsx
│   │   └── cookies/
│   │       └── page.tsx
│   │
│   ├── studio/                   # Sanity Studio embebido
│   │   └── [[...tool]]/
│   │       └── page.tsx
│   │
│   ├── api/
│   │   ├── revalidate/
│   │   │   └── route.ts          # Webhook de Sanity → revalidateTag
│   │   └── contact/
│   │       └── route.ts          # Endpoint de formulario de contacto
│   │
│   ├── sitemap.ts                # Generación dinámica de sitemap.xml
│   ├── robots.ts                 # Generación de robots.txt
│   └── not-found.tsx             # Página 404 personalizada
│
├── components/
│   ├── ui/                       # Componentes base (sin lógica de negocio)
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   └── ...
│   ├── layout/
│   │   ├── Header.tsx            # Server Component
│   │   ├── Footer.tsx            # Server Component
│   │   ├── MobileNav.tsx         # Client Component (estado del drawer)
│   │   └── StickyBookingBar.tsx  # Client Component (aparece al scroll)
│   ├── car/
│   │   ├── CarCard.tsx           # Server Component
│   │   ├── CarGallery.tsx        # Client Component (swipe, lightbox)
│   │   ├── CarSpecs.tsx          # Server Component
│   │   └── CarBookingForm.tsx    # Client Component (formulario interactivo)
│   ├── location/
│   │   ├── LocationHero.tsx      # Server Component
│   │   ├── PickupPointCard.tsx   # Server Component
│   │   └── LocationFleet.tsx     # Server Component
│   ├── sections/
│   │   ├── HeroHome.tsx          # Client Component (video background)
│   │   ├── FleetGrid.tsx         # Server Component
│   │   ├── FAQAccordion.tsx      # Client Component (accordion state)
│   │   ├── Testimonials.tsx      # Server Component
│   │   └── ValueProps.tsx        # Server Component
│   └── shared/
│       ├── PortableText.tsx      # Renderizador de Portable Text
│       ├── SanityImage.tsx       # Wrapper de next/image con Sanity
│       └── SchemaOrg.tsx         # Inyector de JSON-LD
│
├── lib/
│   ├── sanity/
│   │   ├── client.ts             # createClient config
│   │   ├── queries.ts            # GROQ queries
│   │   ├── fetch.ts              # fetchSanity wrapper con cache tags
│   │   └── image.ts             # urlFor helper
│   ├── schema/
│   │   └── index.ts              # JSON-LD generators
│   ├── booking/
│   │   └── service.ts            # Abstracción del sistema de reserva
│   └── utils/
│       ├── metadata.ts           # Helpers de generateMetadata
│       ├── i18n.ts               # Helpers de localización ES/EN
│       └── redirects.ts          # Lista de 301 redirect pairs
│
├── sanity/
│   ├── schemaTypes/
│   │   ├── documents/            # Los 11 tipos de documento del content-model
│   │   └── objects/              # Los 9 tipos de objeto reutilizable
│   ├── lib/
│   │   └── image.ts
│   └── sanity.config.ts          # Configuración del Studio
│
├── public/
│   └── fonts/                    # ClashGrotesk self-hosted
│
├── styles/
│   └── globals.css               # Tokens CSS + @font-face ClashGrotesk
│
├── middleware.ts                 # Locale detection, redirects 301
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── .env.local                    # Variables de entorno (ver sección 14)
```

---

## 3. APP ROUTER Y RENDERING STRATEGY

### Estrategia por tipo de página

| Ruta | Render | `revalidate` | Justificación |
|------|--------|-------------|--------------|
| `/` | SSG + ISR | on-demand (Sanity webhook) | Contenido cambia poco; SEO crítico |
| `/ibiza/`, `/alicante/` | SSG + ISR | on-demand | Ídem |
| `/ibiza/aeropuerto/`, etc. | SSG + ISR | on-demand | Ídem |
| `/flota/` | SSG + ISR | on-demand | Lista de vehículos |
| `/flota/[car-slug]` | SSG + ISR | on-demand | Ficha del vehículo, SEO crítico |
| `/guias/` | SSG + ISR | on-demand | Hub de guías |
| `/guias/[guide-slug]` | SSG + ISR | on-demand | Artículos |
| `/contacto/` | SSG | estático | Sin datos dinámicos |
| Páginas legales | SSG | estático | Cambian raramente |
| `/studio/[[...tool]]` | Dynamic | — | Sanity Studio, requiere auth |
| `api/revalidate` | Edge | — | Webhook endpoint |
| `api/contact` | Edge | — | Formulario de contacto |

### Implementación del cache en `layout.tsx` raíz

```typescript
// app/(site)/layout.tsx
import { ReactNode } from 'react';
import { getSiteSettings } from '@/lib/sanity/fetch';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// No 'use client' — Server Component por defecto
export default async function SiteLayout({ children }: { children: ReactNode }) {
  // Fetch en Server Component — resultado cacheado por tag 'siteSettings'
  const settings = await getSiteSettings();

  return (
    <>
      <Header settings={settings} />
      <main id="main-content">{children}</main>
      <Footer settings={settings} />
    </>
  );
}
```

### `generateStaticParams` para rutas dinámicas

```typescript
// app/(site)/flota/[car-slug]/page.tsx
export async function generateStaticParams() {
  const cars = await getAllCarSlugs(); // GROQ: *[_type=='car']{slug}
  return cars.map((car) => ({ 'car-slug': car.slug.current }));
}

// app/(site)/guias/[guide-slug]/page.tsx
export async function generateStaticParams() {
  const guides = await getAllGuideSlugs();
  return guides.map((guide) => ({ 'guide-slug': guide.slug.current }));
}
```

---

## 4. SERVER COMPONENTS VS CLIENT COMPONENTS

### Regla de decisión

```
¿Necesita el componente...
  - useState o useReducer?          → Client Component
  - useEffect o lifecycle hooks?    → Client Component
  - event listeners (click, scroll, touch)? → Client Component
  - APIs solo de browser (window, localStorage)? → Client Component
  - Animaciones controladas por JS?  → Client Component
  
  Si ninguna → Server Component (default)
```

### Mapa de Client Components (la lista completa)

| Componente | Por qué es Client |
|------------|------------------|
| `MobileNav.tsx` | Estado de apertura del drawer |
| `StickyBookingBar.tsx` | Detecta scroll position |
| `CarGallery.tsx` | Swipe touch, lightbox, estado de foto activa |
| `CarBookingForm.tsx` | Estado del formulario completo, cálculo de precio en tiempo real |
| `FAQAccordion.tsx` | Estado de acordeón expandido/colapsado |
| `HeroHome.tsx` | Video background (autoplay requiere DOM) |
| `FleetFilter.tsx` | Filtros de catálogo con URL params |
| `PriceCalculator.tsx` | Cálculo de precio en tiempo real |
| `CookieBanner.tsx` | Estado de consentimiento, localStorage |
| `DatePicker.tsx` | State del calendario |

### Boundary pattern (Client Islands)

Los Client Components son "islas" dentro de Server Components. Pasar solo las props serializables necesarias:

```typescript
// Server Component (page.tsx)
import { CarGallery } from '@/components/car/CarGallery';
import { getCarBySlug } from '@/lib/sanity/fetch';

export default async function CarPage({ params }) {
  const car = await getCarBySlug(params['car-slug']);
  
  // Solo pasamos datos serializables — no el objeto Sanity completo
  return (
    <CarGallery
      images={car.gallery.map(img => ({
        url: img.asset.url,
        alt: img.alt.es,
        width: img.asset.metadata.dimensions.width,
        height: img.asset.metadata.dimensions.height,
        blurHash: img.asset.metadata.blurHash,
      }))}
    />
  );
}
```

---

## 5. SANITY INTEGRATION

### Cliente configurado

```typescript
// lib/sanity/client.ts
import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-10-01';

// Cliente para fetch en Server Components (con CDN)
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  // Stega solo en preview
  stega: {
    enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview',
    studioUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/studio`,
  },
});

// Cliente para Sanity Studio (sin CDN, con auth)
export const studioClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
```

### Wrapper de fetch con cache tags

```typescript
// lib/sanity/fetch.ts
import { sanityClient } from './client';
import { unstable_cache } from 'next/cache';

// Wrapper que añade cache tags por tipo de documento Sanity
export async function fetchSanity<T>(
  query: string,
  params: Record<string, unknown> = {},
  tags: string[] = [],
): Promise<T> {
  // En desarrollo: sin cache (siempre fresco)
  if (process.env.NODE_ENV === 'development') {
    return sanityClient.fetch<T>(query, params);
  }
  
  // En producción: cache con tags para revalidación selectiva
  const cachedFetch = unstable_cache(
    async () => sanityClient.fetch<T>(query, params),
    [query, JSON.stringify(params)],
    {
      tags,
      revalidate: false, // Solo revalida por webhook, no por tiempo
    },
  );
  return cachedFetch();
}

// Helpers tipados por entidad
export const getCarBySlug = (slug: string) =>
  fetchSanity<Car>(CAR_BY_SLUG_QUERY, { slug }, ['car', `car:${slug}`]);

export const getAllCars = () =>
  fetchSanity<Car[]>(ALL_CARS_QUERY, {}, ['car']);

export const getLocationBySlug = (slug: string) =>
  fetchSanity<Location>(LOCATION_BY_SLUG_QUERY, { slug }, ['location', `location:${slug}`]);

export const getSiteSettings = () =>
  fetchSanity<SiteSettings>(SITE_SETTINGS_QUERY, {}, ['siteSettings']);
```

### Webhook de revalidación

```typescript
// app/api/revalidate/route.ts
import { revalidateTag } from 'next/cache';
import { parseBody } from 'next-sanity/webhook';

export async function POST(req: Request) {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string;
      slug?: { current: string };
    }>(req, process.env.SANITY_WEBHOOK_SECRET);

    if (!isValidSignature) {
      return new Response('Invalid signature', { status: 401 });
    }

    // Revalida por tipo y por slug cuando aplica
    revalidateTag(body._type);
    if (body.slug?.current) {
      revalidateTag(`${body._type}:${body.slug.current}`);
    }

    // Siempre revalida siteSettings (nav, footer)
    if (body._type === 'siteSettings') {
      revalidateTag('siteSettings');
    }

    return Response.json({ revalidated: true });
  } catch (err) {
    return new Response(String(err), { status: 500 });
  }
}
```

### Tags de cache por tipo de documento

| Sanity `_type` | Cache tags |
|----------------|-----------|
| `car` | `['car', 'car:{slug}']` |
| `carAvailability` | `['carAvailability', 'car', 'car:{car.slug}']` |
| `location` | `['location', 'location:{slug}']` |
| `pickupPoint` | `['pickupPoint', 'location:{parent.slug}']` |
| `faq` | `['faq']` |
| `guide` | `['guide', 'guide:{slug}']` |
| `page` | `['page', 'page:{slug}']` |
| `testimonial` | `['testimonial']` |
| `siteSettings` | `['siteSettings']` |

### GROQ queries principales

```typescript
// lib/sanity/queries.ts

// ── Vehículo por slug ────────────────────────────────────────────
export const CAR_BY_SLUG_QUERY = `
  *[_type == 'car' && slug.current == $slug][0]{
    name,
    slug,
    brand->{name, logo},
    model,
    variant,
    year,
    category->{name, slug},
    passengers,
    doors,
    transmission,
    fuel,
    power,
    luggage,
    colorExterior,
    colorInterior,
    shortDescription,
    fullDescription,
    features,
    minAge,
    minLicenseYears,
    kmIncluded,
    kmExtraPrice,
    mainImage{asset->{url,metadata{blurHash,dimensions}}, alt},
    gallery[]{asset->{url,metadata{blurHash,dimensions}}, alt},
    faqs[]->{question, answer},
    seo
  }
`;

// ── Disponibilidades de un coche ─────────────────────────────────
export const CAR_AVAILABILITY_QUERY = `
  *[_type == 'carAvailability' && car._ref == $carId && isActive == true]{
    pricePerDay,
    currency,
    location->{name, slug},
    availablePickupPoints[]->{name, slug, address, coordinates},
    extras[]{name, price, pricingModel},
    coverages[]{name, slug, price, pricingModel, franchiseAmount, depositAmountCard, description, isDefault}
  }
`;

// ── Todos los coches activos ─────────────────────────────────────
export const ALL_ACTIVE_CARS_QUERY = `
  *[_type == 'car' && count(*[_type=='carAvailability' && car._ref==^._id && isActive==true]) > 0]{
    name,
    slug,
    passengers,
    transmission,
    fuel,
    year,
    mainImage{asset->{url,metadata{blurHash,dimensions}}, alt},
    "minPrice": min(*[_type=='carAvailability' && car._ref==^._id && isActive==true].pricePerDay),
    "availableLocations": *[_type=='carAvailability' && car._ref==^._id && isActive==true].location->slug.current
  }
`;

// ── Location por slug ────────────────────────────────────────────
export const LOCATION_BY_SLUG_QUERY = `
  *[_type == 'location' && slug.current == $slug][0]{
    name,
    slug,
    shortDescription,
    fullDescription,
    heroImage{asset->{url,metadata{blurHash,dimensions}}, alt},
    faqs[]->{question, answer},
    seo
  }
`;

// ── Site settings (navigation) ───────────────────────────────────
export const SITE_SETTINGS_QUERY = `
  *[_type == 'siteSettings'][0]{
    siteName,
    logo{asset->{url}},
    phone,
    email,
    whatsappUrl,
    instagramUrl,
    threadsUrl,
    mainNav[]{label, href, children[]{label, href}},
    footerNavCol1, footerNavCol2, footerNavLegal,
    defaultSeo
  }
`;
```

---

## 6. IMAGE HANDLING

### Componente SanityImage

```typescript
// components/shared/SanityImage.tsx
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/image';

interface SanityImageProps {
  asset: SanityImageAsset;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export function SanityImage({
  asset,
  alt,
  width,
  height,
  priority = false,
  className,
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
}: SanityImageProps) {
  return (
    <Image
      src={urlFor(asset).width(width * 2).url()} // 2x para retina
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      placeholder={asset.metadata?.blurHash ? 'blur' : 'empty'}
      blurDataURL={asset.metadata?.blurHash
        ? `data:image/png;base64,${asset.metadata.blurHash}`
        : undefined}
      sizes={sizes}
      className={className}
    />
  );
}
```

### Configuración de next/image

```typescript
// next.config.ts
import { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
    formats: ['image/avif', 'image/webp'], // AVIF primero (mejor compresión)
    deviceSizes: [390, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [64, 128, 256, 384],
    minimumCacheTTL: 2592000, // 30 días en CDN
  },
};
export default config;
```

### Reglas de `priority` y `sizes`

```typescript
// Hero de página (siempre priority)
<SanityImage priority={true} sizes="100vw" />

// Imagen principal del vehículo en ficha
<SanityImage priority={true} sizes="(max-width: 1024px) 100vw, 60vw" />

// Imágenes de galería
<SanityImage sizes="(max-width: 640px) 80px, (max-width: 1024px) 120px, 160px" />

// Cards de flota en grid
<SanityImage sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
```

---

## 7. METADATA API (SEO)

### Metadatos de página dinámica

```typescript
// app/(site)/flota/[car-slug]/page.tsx
import { Metadata } from 'next';

type Props = {
  params: Promise<{ 'car-slug': string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { 'car-slug': slug } = await params;
  const car = await getCarBySlug(slug);
  const locale = 'es'; // TODO: leer de acceptLanguage o cookie

  if (!car) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;
  const canonicalUrl = `${siteUrl}/flota/${slug}`;

  return {
    title: car.seo.metaTitle[locale],
    description: car.seo.metaDescription[locale],
    alternates: {
      canonical: canonicalUrl,
      // Cuando existan URLs /en/ — añadir hreflang aquí
      // languages: { 'es': canonicalUrl, 'en': `${siteUrl}/en/fleet/${slug}` },
    },
    openGraph: {
      title: car.seo.metaTitle[locale],
      description: car.seo.metaDescription[locale],
      url: canonicalUrl,
      type: 'website',
      locale: 'es_ES',
      images: car.seo.ogImage
        ? [{ url: urlFor(car.seo.ogImage).width(1200).height(630).url() }]
        : [{ url: urlFor(car.mainImage.asset).width(1200).height(630).url() }],
      siteName: 'Here & Now',
    },
    twitter: {
      card: 'summary_large_image',
      title: car.seo.metaTitle[locale],
      description: car.seo.metaDescription[locale],
    },
    robots: car.seo.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  };
}
```

### Layout raíz con metadatos base

```typescript
// app/(site)/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  // Fallback para páginas sin generateMetadata
  title: {
    default: 'Alquiler de coches Mercedes en Ibiza y Alicante | Here & Now',
    template: '%s | Here & Now',
  },
  description: 'Alquila un Mercedes premium en Ibiza o Alicante...',
  openGraph: {
    siteName: 'Here & Now',
    locale: 'es_ES',
  },
};
```

---

## 8. JSON-LD / SCHEMA.ORG

### Generadores de schema en `lib/schema/`

```typescript
// lib/schema/index.ts
import { Thing } from 'schema-dts';

export function generateOrganizationSchema(settings: SiteSettings): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'CarRental'],
    name: settings.siteName,
    url: process.env.NEXT_PUBLIC_SITE_URL,
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

export function generateCarProductSchema(
  car: Car,
  availabilities: CarAvailability[],
): WithContext<Product> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: car.name.es,
    description: car.shortDescription.es,
    image: car.gallery.map(img => img.asset.url),
    brand: { '@type': 'Brand', name: car.brand.name },
    offers: availabilities.map((av) => ({
      '@type': 'Offer',
      price: av.pricePerDay,
      priceCurrency: av.currency,
      availability: 'https://schema.org/InStock',
      areaServed: av.location.name.es,
    })),
  };
}

export function generateFAQSchema(faqs: FAQ[]): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question.es,
      acceptedAnswer: {
        '@type': 'Answer',
        text: toPlainText(faq.answer.es), // Portable Text → string
      },
    })),
  };
}

export function generateLocalBusinessSchema(
  settings: SiteSettings,
  pickupPoint: PickupPoint,
): WithContext<LocalBusiness> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/#business`,
    name: settings.siteName,
    image: settings.logo?.asset?.url,
    telephone: settings.phone,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: pickupPoint.address,
      addressLocality: 'El Campello',
      addressCountry: 'ES',
    },
    geo: pickupPoint.coordinates
      ? {
          '@type': 'GeoCoordinates',
          latitude: pickupPoint.coordinates.lat,
          longitude: pickupPoint.coordinates.lng,
        }
      : undefined,
    openingHoursSpecification: pickupPoint.openingHours?.map((oh) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: oh.days.map(capitalizeDay),
      opens: oh.opens,
      closes: oh.closes,
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[],
): WithContext<BreadcrumbList> {
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
```

### Componente de inyección de schema

```typescript
// components/shared/SchemaOrg.tsx
interface SchemaOrgProps {
  schema: object | object[];
}

// Server Component — no añade JS al cliente
export function SchemaOrg({ schema }: SchemaOrgProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
```

---

## 9. SITEMAP Y ROBOTS

### Sitemap dinámico

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [cars, locations, guides, pickupPoints] = await Promise.all([
    getAllCarSlugs(),
    getAllLocationSlugs(),
    getAllGuideSlugs(),
    getAllPickupPointSlugs(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteUrl}/flota`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/contacto`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${siteUrl}/guias`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${siteUrl}/terminos-y-condiciones`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/politica-cancelacion`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/privacidad`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${siteUrl}/aviso-legal`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${siteUrl}/cookies`, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const locationRoutes = locations.flatMap((loc) => [
    {
      url: `${siteUrl}/${loc.slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]);

  const pickupPointRoutes = pickupPoints.map((pp) => ({
    url: `${siteUrl}/${pp.location.slug}/${pp.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const carRoutes = cars.map((car) => ({
    url: `${siteUrl}/flota/${car.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.95,
  }));

  const guideRoutes = guides.map((guide) => ({
    url: `${siteUrl}/guias/${guide.slug}`,
    lastModified: new Date(guide.updatedAt ?? guide.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...locationRoutes,
    ...pickupPointRoutes,
    ...carRoutes,
    ...guideRoutes,
  ];
}
```

### Robots.txt

```typescript
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/studio/',
          '/api/',
        ],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  };
}
```

---

## 10. ROUTING Y MIDDLEWARE

### Redirects 301 (desde `urls-map.md`)

Los redirects de URLs antiguas se definen en `next.config.ts` para que los maneje Vercel Edge:

```typescript
// next.config.ts
const redirects = async () => [
  // Páginas antiguas → nuevas URLs
  { source: '/nuestra-flota', destination: '/flota', permanent: true },
  { source: '/alquiler-coches-ibiza-mercedes', destination: '/ibiza', permanent: true },
  { source: '/alquiler-coches-alicante-mercedes', destination: '/alicante', permanent: true },
  { source: '/alquiler-coches-mercedes', destination: '/', permanent: true },
  { source: '/contacto-alquiler-coches-alicante-ibiza', destination: '/contacto', permanent: true },
  { source: '/politica-privacidad', destination: '/privacidad', permanent: true },
  { source: '/politica-de-cookies-ue', destination: '/cookies', permanent: true },
  { source: '/politica-de-cancelacion-y-devolucion', destination: '/politica-cancelacion', permanent: true },
  { source: '/busqueda-coches-de-alquiler', destination: '/flota', permanent: true },
  { source: '/mercedes-clase-v-220d-avantgard-largo-ibiza', destination: '/flota/mercedes-clase-v-avantgard-largo', permanent: true },
  { source: '/mercedes-clase-v-220d-largo', destination: '/flota', permanent: true },
  { source: '/mercedes-glc-220d-4matic', destination: '/flota', permanent: true },
  { source: '/hola-mundo', destination: '/', permanent: true },
  // Taxonomías WooCommerce
  { source: '/brw_Pasajeros/:path*', destination: '/flota', permanent: true },
  { source: '/brw_tipo/:path*', destination: '/flota', permanent: true },
  { source: '/categoria-producto/ibiza/:path*', destination: '/ibiza', permanent: true },
  { source: '/categoria-producto/alicante/:path*', destination: '/alicante', permanent: true },
  // Productos WooCommerce → ficha del coche
  { source: '/producto/mercedes-clase-v-220d-avantgard-largo-ibiza', destination: '/flota/mercedes-clase-v-avantgard-largo', permanent: true },
  { source: '/producto/mercedes-clase-v-220d-avantgard-largo', destination: '/flota/mercedes-clase-v-avantgard-largo', permanent: true },
];
```

### Middleware (edge)

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Proteger Sanity Studio en producción (solo acceso autenticado)
  if (pathname.startsWith('/studio')) {
    // En producción: requiere cookie de sesión Sanity
    if (process.env.NODE_ENV === 'production') {
      const hasStudioSession = request.cookies.has('__studio_session');
      if (!hasStudioSession) {
        return NextResponse.redirect(new URL('/studio', request.url));
      }
    }
  }

  // Normalizar trailing slash (Vercel lo maneja, pero como fallback)
  if (pathname !== '/' && pathname.endsWith('/')) {
    return NextResponse.redirect(
      new URL(pathname.slice(0, -1), request.url),
      { status: 301 },
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api).*)'],
};
```

---

## 11. FORMULARIOS Y SERVER ACTIONS

### Formulario de contacto

```typescript
// app/actions/contact.ts
'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  destination: z.enum(['ibiza', 'alicante', 'both']).optional(),
  message: z.string().min(10).max(1000),
  gdprConsent: z.literal('true'),
});

export type ContactFormState = {
  status: 'idle' | 'success' | 'error';
  errors?: Partial<Record<keyof z.infer<typeof contactSchema>, string>>;
  message?: string;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      status: 'error',
      errors: Object.fromEntries(
        Object.entries(parsed.error.flatten().fieldErrors).map(([k, v]) => [k, v?.[0]]),
      ),
    };
  }

  try {
    // Enviar email via Resend (u otro proveedor configurado en env)
    await sendEmail({
      to: process.env.CONTACT_EMAIL!,
      subject: `Consulta de ${parsed.data.name}`,
      html: formatContactEmail(parsed.data),
    });

    return { status: 'success', message: 'Mensaje enviado correctamente.' };
  } catch {
    return { status: 'error', message: 'Error al enviar. Por favor, llámanos.' };
  }
}
```

```typescript
// components/ContactForm.tsx — Client Component
'use client';

import { useActionState } from 'react';
import { submitContactForm, type ContactFormState } from '@/app/actions/contact';

const initialState: ContactFormState = { status: 'idle' };

export function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, initialState);

  return (
    <form action={action} noValidate>
      {/* Campos del formulario */}
      {state.status === 'success' && <SuccessMessage />}
      {state.status === 'error' && state.message && <ErrorMessage message={state.message} />}
      <button type="submit" disabled={isPending} aria-busy={isPending}>
        {isPending ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  );
}
```

### Integración con sistema de reserva (abstracción)

```typescript
// lib/booking/service.ts
// Esta abstracción permite cambiar el backend de reservas sin tocar los componentes

export interface BookingService {
  createBooking(params: BookingParams): Promise<BookingResult>;
  getAvailability(carId: string, locationId: string, dates: DateRange): Promise<Availability>;
}

// Implementación actual (WooCommerce REST API o custom)
export const bookingService: BookingService = {
  async createBooking(params) {
    // Llamada a WooCommerce REST API v3 o sistema propio
    const response = await fetch(`${process.env.BOOKING_API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(
          `${process.env.WOOCOMMERCE_KEY}:${process.env.WOOCOMMERCE_SECRET}`
        ).toString('base64')}`,
      },
      body: JSON.stringify(params),
    });
    return response.json();
  },

  async getAvailability(carId, locationId, dates) {
    // TODO: implementar lógica de disponibilidad real
    return { available: true };
  },
};
```

---

## 12. PERFORMANCE Y CORE WEB VITALS

### Objetivos

| Métrica | Objetivo | Crítico |
|---------|----------|---------|
| LCP | < 2.5s | Imagen del hero |
| INP | < 200ms | Formulario de reserva, filtros |
| CLS | < 0.1 | Imágenes con dimensiones, fonts |
| TTFB | < 800ms | Vercel Edge + CDN Sanity |
| FCP | < 1.8s | CSS inline crítico |

### Optimizaciones implementadas por defecto

**Fuentes (ClashGrotesk):**
```css
/* styles/globals.css */
@font-face {
  font-family: 'ClashGrotesk';
  src: url('/fonts/ClashGrotesk-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* FOUT mínimo: muestra sistema primero, intercambia luego */
}
/* (repetir para cada peso) */
```

```html
<!-- En layout.tsx <head> via metadata link -->
<link rel="preload" href="/fonts/ClashGrotesk-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
<link rel="preload" href="/fonts/ClashGrotesk-Semibold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
```

**LCP — imagen del hero:**
```typescript
// La imagen del hero es SIEMPRE priority=true
// Marcada con fetchpriority="high" internamente por next/image
<SanityImage priority={true} sizes="100vw" fetchpriority="high" />
```

**CLS — reservar espacio para imágenes:**
```typescript
// SIEMPRE pasar width y height a next/image
// Usar aspect-ratio en el contenedor para que el navegador reserve espacio
<div style={{ aspectRatio: '16/9' }}>
  <SanityImage width={1920} height={1080} ... />
</div>
```

**Bundle splitting:**
```typescript
// Componentes pesados: carga diferida
import dynamic from 'next/dynamic';

const CarGallery = dynamic(() => import('@/components/car/CarGallery'), {
  loading: () => <GallerySkeleton />, // Placeholder mientras carga
  ssr: false, // No necesita SSR (solo interactivo)
});

const CookieBanner = dynamic(() => import('@/components/shared/CookieBanner'), {
  ssr: false,
});
```

**Third-party scripts (analytics, etc.):**
```typescript
// Cargar scripts de terceros sin bloquear el render
import Script from 'next/script';

// En layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=..."
  strategy="afterInteractive" // Solo después de que la página sea interactiva
/>
```

---

## 13. ACCESIBILIDAD (TÉCNICO)

### Skip link

```typescript
// app/(site)/layout.tsx — primer elemento del body
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
>
  Ir al contenido principal
</a>
```

### Focus management en modales/drawers

```typescript
// components/layout/MobileNav.tsx
import { useEffect, useRef } from 'react';
import FocusTrap from 'focus-trap-react'; // o implementación manual

function MobileNav({ isOpen, onClose }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Mueve el foco al primer elemento del drawer al abrirse
      closeButtonRef.current?.focus();
      // Bloquea el scroll del body
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <FocusTrap active={isOpen}>
      <div role="dialog" aria-modal="true" aria-label="Menú de navegación">
        <button ref={closeButtonRef} onClick={onClose} aria-label="Cerrar menú">
          {/* × icono */}
        </button>
        {/* Contenido del drawer */}
      </div>
    </FocusTrap>
  );
}
```

### `prefers-reduced-motion` en CSS global

```css
/* styles/globals.css */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 14. ANALYTICS (DESACOPLADO)

### Principio: el tracking no bloquea el render

```typescript
// lib/analytics/index.ts
// Abstracción que permite cambiar el proveedor sin tocar componentes

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
}

export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === 'undefined') return;

  // Google Analytics 4 (si está cargado)
  if (typeof window.gtag === 'function') {
    window.gtag('event', event.name, event.properties);
  }

  // Plausible (si está cargado)
  if (typeof window.plausible === 'function') {
    window.plausible(event.name, { props: event.properties });
  }
}

// Eventos clave del negocio
export const analyticsEvents = {
  bookingStarted: (carSlug: string, location: string) =>
    trackEvent({ name: 'booking_started', properties: { car: carSlug, location } }),
  bookingCompleted: (carSlug: string, total: number) =>
    trackEvent({ name: 'booking_completed', properties: { car: carSlug, total } }),
  contactFormSubmitted: () =>
    trackEvent({ name: 'contact_form_submitted' }),
  locationViewed: (location: string) =>
    trackEvent({ name: 'location_viewed', properties: { location } }),
};
```

### Carga de scripts con consentimiento de cookies

```typescript
// components/shared/ConsentAwareAnalytics.tsx
'use client';

import Script from 'next/script';
import { useConsent } from '@/hooks/useConsent';

export function ConsentAwareAnalytics() {
  const { analyticsConsented } = useConsent();

  if (!analyticsConsented) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
```

---

## 15. VARIABLES DE ENTORNO

```bash
# .env.local (nunca commitear)

# ── Sanity ────────────────────────────────────────
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
SANITY_API_TOKEN=sk...           # Write token para webhooks y Studio
SANITY_WEBHOOK_SECRET=xxxx       # Secreto del webhook de revalidación

# ── Site ──────────────────────────────────────────
NEXT_PUBLIC_SITE_URL=https://hereandnow.es
NEXT_PUBLIC_VERCEL_ENV=production

# ── Booking backend ───────────────────────────────
BOOKING_API_URL=https://...      # WooCommerce REST API base URL
WOOCOMMERCE_KEY=ck_...
WOOCOMMERCE_SECRET=cs_...

# ── Email (formulario de contacto) ───────────────
CONTACT_EMAIL=info@hereandnow.es
RESEND_API_KEY=re_...            # o SENDGRID_API_KEY

# ── Analytics (opcionales) ────────────────────────
NEXT_PUBLIC_GA_ID=G-...
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=hereandnow.es

# ── Stripe/Redsys (futuro) ────────────────────────
# REDSYS_MERCHANT_CODE=...
# REDSYS_SECRET_KEY=...
```

### Convención de prefijos

| Prefijo | Acceso | Uso |
|---------|--------|-----|
| `NEXT_PUBLIC_` | Cliente + servidor | IDs públicos, URLs, feature flags |
| Sin prefijo | Solo servidor | Tokens, secrets, claves de API |

---

## 16. DEPLOYMENT (VERCEL)

### Configuración de Vercel

```json
// vercel.json
{
  "framework": "nextjs",
  "buildCommand": "next build",
  "installCommand": "npm ci",
  "regions": ["mad1"], // Madrid — más cercano a Ibiza/Alicante
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    },
    {
      "source": "/fonts/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/_next/static/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### Pipeline de CI/CD

```
main branch → Vercel Production deployment
   - Build: next build
   - Checks: TypeScript, ESLint
   - Deploy: auto

preview branches → Vercel Preview deployment
   - URL única por PR
   - Sanity useCdn: false (datos frescos)
   - Stega habilitado (overlay editable)

Sanity webhook → POST /api/revalidate
   - Trigger: documento publicado/actualizado
   - Efecto: revalidateTag(document._type)
   - Resultado: páginas afectadas se regeneran en siguiente request
```

### Sanity Studio en producción

```typescript
// app/studio/[[...tool]]/page.tsx
import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity/sanity.config';

export const dynamic = 'force-dynamic'; // Studio siempre dinámico

export default function StudioPage() {
  return <NextStudio config={config} />;
}
```

El Studio está accesible en `https://hereandnow.es/studio`. Protegido con autenticación de Sanity (solo usuarios con rol en el proyecto pueden acceder).

---

## Resumen de decisiones arquitectónicas

| Decisión | Elección | Alternativa rechazada | Motivo |
|---------|----------|----------------------|--------|
| Rendering | SSG + ISR on-demand | SSR / SSG puro con timer | On-demand = fresco cuando cambia Sanity, sin requests innecesarios |
| Client Components | Mínimos, islands | Todos Client (Next.js pages) | Menos JS = mejor LCP, mejor TTI |
| Cache | Tags por documento Sanity | `revalidate: 3600` | La web es fresca siempre que el contenido cambia, no cada hora |
| Fuentes | Self-hosted WOFF2 | Google Fonts CDN | Elimina petición externa, mejor TTFB, privacidad |
| Booking backend | Abstracción desacoplada | WooCommerce hard-coded | Permite cambiar de backend sin reescribir UI |
| Analytics | Desacoplado + consentimiento | Hardcoded | GDPR compliance, cambio de proveedor sin deploy |
| Imágenes | next/image + Sanity CDN | img nativo | LCP optimizado, AVIF/WebP automático, blur placeholder |
| Formularios | Server Actions | API routes | Menos boilerplate, progressive enhancement nativo |
| Redirects | next.config.ts + Vercel Edge | middleware.ts | Edge es más rápido que middleware para 301s estáticos |
| Sitemap | Dinámico en `app/sitemap.ts` | Estático o plugin | Se actualiza automáticamente al añadir contenido en Sanity |
