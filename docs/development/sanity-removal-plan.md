# Plan de eliminación de Sanity — Here & Now

> Fecha: 2026-11-03
> Objetivo: sustituir Sanity por una capa de datos local TypeScript, **sin cambiar URLs, SEO, diseño ni textos**, de forma incremental (capa nueva primero, borrado de Sanity al final).
> Alcance actual del negocio: 2 vehículos (Mercedes Clase V Avantgard Largo confirmado + otro a revisar), Ibiza y Alicante, cambios de contenido poco frecuentes.

---

## 1. Inventario — qué usa Sanity

### 1.1 Schemas de Sanity (`sanity/schemaTypes/`)

**Documentos** (11): `brand`, `car`, `carAvailability`, `carCategory`, `faq`, `guide`, `location`, `pickupPoint`, `sitePage`, `siteSettings` (singleton), `testimonial`.

**Objetos embebidos** (9): `coverage`, `extra`, `imageWithAlt`, `localeBlockContent`, `localeString`, `localeText`, `navItem`, `openingHours`, `seoFields`.

Config: `sanity/sanity.config.ts` (Studio en `/studio`, plugins `structureTool` + `visionTool`), `sanity/schemaTypes/index.ts` (agrega todo), `sanity/lib/image.ts` (`urlFor` propio del Studio).

### 1.2 Queries GROQ (`lib/sanity/queries.ts`)

14 queries: `SITE_SETTINGS_QUERY`, `CAR_BY_SLUG_QUERY`, `ALL_CAR_SLUGS_QUERY`, `ALL_ACTIVE_CARS_QUERY`, `CAR_AVAILABILITIES_QUERY`, `LOCATION_BY_SLUG_QUERY`, `ALL_LOCATION_SLUGS_QUERY`, `PICKUP_POINT_BY_SLUG_QUERY`, `PICKUP_POINTS_BY_LOCATION_QUERY`, `ALL_PICKUP_POINT_SLUGS_QUERY`, `FAQS_BY_CATEGORY_QUERY`, `GUIDE_BY_SLUG_QUERY`, `ALL_GUIDE_SLUGS_QUERY`, `FEATURED_TESTIMONIALS_QUERY`.

### 1.3 Llamadas a Sanity (`lib/sanity/fetch.ts`)

Wrapper `fetchSanity()` (usa `unstable_cache` + tags en producción, sin cache en dev, degrada a `null` si falla) y 14 funciones públicas: `getSiteSettings`, `getCarBySlug`, `getAllCarSlugs`, `getAllActiveCars`, `getCarAvailabilities`, `getLocationBySlug`, `getAllLocationSlugs`, `getPickupPointsByLocation`, `getPickupPointBySlug`, `getAllPickupPointSlugs`, `getFaqsByCategory`, `getGuideBySlug`, `getAllGuideSlugs`, `getFeaturedTestimonials`.

Cliente: `lib/sanity/client.ts` (`sanityClient`, `writeSanityClient`). Imagen: `lib/sanity/image.ts` (`urlFor`, usa `@sanity/image-url` sobre `sanityClient`).

### 1.4 Páginas que consumen Sanity (todas vía `lib/sanity/fetch.ts`)

| Página | Funciones usadas |
|---|---|
| `app/(site)/layout.tsx` | `getSiteSettings` |
| `app/(site)/page.tsx` (home) | `getAllActiveCars`, `getLocationBySlug('ibiza'/'alicante')`, `getFeaturedTestimonials`, `getFaqsByCategory('general')` |
| `app/(site)/flota/page.tsx` | `getAllActiveCars` |
| `app/(site)/flota/[car-slug]/page.tsx` | `getAllCarSlugs` (generateStaticParams), `getCarBySlug`, `getCarAvailabilities`, `getAllActiveCars`, `getFaqsByCategory('vehicle')` |
| `app/(site)/ibiza/page.tsx` | `getAllActiveCars`, `getLocationBySlug('ibiza')`, `getFeaturedTestimonials`, `getFaqsByCategory('ibiza')` |
| `app/(site)/ibiza/aeropuerto/page.tsx`, `/puerto/page.tsx` | `getAllActiveCars`, `getPickupPointBySlug('ibiza', slug)` |
| `app/(site)/alicante/page.tsx` | `getAllActiveCars`, `getLocationBySlug('alicante')`, `getFeaturedTestimonials`, `getFaqsByCategory('alicante')` |
| `app/(site)/alicante/aeropuerto/`, `/oficina/`, `/puerto/page.tsx` | `getAllActiveCars`, `getPickupPointBySlug('alicante', slug)` |
| `app/sitemap.ts` | `getAllCarSlugs`, `getAllLocationSlugs`, `getAllGuideSlugs`, `getAllPickupPointSlugs` |

`app/robots.ts`, `app/not-found.tsx`, `app/layout.tsx` (root) y `app/actions/*.ts` **no** usan Sanity.

### 1.5 Componentes dependientes de Sanity

| Componente | Dependencia Sanity |
|---|---|
| `components/shared/SanityImage.tsx` | `urlFor` de `lib/sanity/image` |
| `components/shared/PortableText.tsx` | `@portabletext/react` + `@portabletext/types` |
| `components/car/CarCard.tsx`, `CarGrid.tsx`, `CarSpecs.tsx` | tipos `CarListItem`/`Car` de `types/sanity` |
| `components/car/CarGallery.tsx` | `urlFor` + tipo `SanityImageWithAlt` |
| `components/location/PickupPageTemplate.tsx` | tipos `CarListItem/FAQ/PickupPoint`, `PortableText`, generadores de `lib/schema` |
| `components/sections/DestinationCards.tsx` | tipo `Location` |
| `components/sections/FAQSection.tsx` | tipo `FAQ`, `PortableText`, `generateFAQSchema` |
| `components/sections/TestimonialsSection.tsx` | tipo `Testimonial` |
| `components/layout/Header.tsx`, `Footer.tsx` | shape de `SiteSettings` (tipado local, no importan `types/sanity` directamente) |

Resto de componentes (`Breadcrumbs`, `ContactForm`, `SchemaOrg`, `WhatsAppCTA`, `MobileNav`, `CarBookingForm`, `StickyBookingBar`, `LocationHero`, `PickupPointGrid`, `WhyHereSection`, `BrandStatement`, `CTASection`, `HeroHome`, `HowItWorks`, `ValueProposition`) son agnósticos de Sanity — solo reciben props ya resueltas. **No requieren cambios.**

### 1.6 generateMetadata / SEO / JSON-LD dependientes de Sanity

- `lib/utils/metadata.ts` → `buildMetadata()` usa `urlFor` de `lib/sanity/image` para `ogImage` y recibe `seo` (shape `SeoFields` de Sanity).
- `lib/schema/index.ts` → generadores JSON-LD (`generateOrganizationSchema`, `generateLocalBusinessSchema`, `generateCarProductSchema`, `generateFAQSchema`, `generateBreadcrumbSchema`, `generateWebSiteSchema`) reciben objetos con shape de Sanity (`LocaleString`, Portable Text en FAQ) pero **no importan nada de Sanity directamente** — son puras funciones de transformación. Solo `generateFAQSchema` asume que `answer` es Portable Text (array de blocks) y lo convierte a texto plano.
- `app/(site)/flota/[car-slug]/page.tsx` → `generateMetadata` usa `getCarBySlug` + `getCarAvailabilities`.

### 1.7 Sitemap

`app/sitemap.ts` depende de 4 funciones `getAllXSlugs` de Sanity para las rutas dinámicas. Las rutas estáticas están hardcodeadas (no dependen de Sanity).

### 1.8 Imágenes de Sanity

- `components/shared/SanityImage.tsx` y `components/car/CarGallery.tsx` usan `urlFor()` (`@sanity/image-url`) para construir URLs del CDN de Sanity.
- `next.config.ts` → `images.remotePatterns` permite `https://cdn.sanity.io/images/**`.
- **No existe carpeta `/public`** en el proyecto — no hay imágenes locales todavía. Esto es un hallazgo crítico: las imágenes reales de los vehículos nunca llegaron a subirse a Sanity (ver `docs/content/migration-report.md` — sección MISSING_INFORMATION) y tampoco están en el repo. Se documenta en `docs/content/fleet-review.md` (paso posterior).

### 1.9 PortableText

Usado en: `components/shared/PortableText.tsx` (wrapper), `components/sections/FAQSection.tsx`, `components/location/PickupPageTemplate.tsx`. Siempre renderiza contenido `LocaleBlockContent` (`{es: Block[], en?: Block[]}`).

### 1.10 Studio

`app/studio/[[...tool]]/page.tsx` (monta `NextStudio` con `sanity/sanity.config.ts`, `force-dynamic`, `noindex`). Excluido del middleware (`middleware.ts` matcher) y de `robots.ts` (`disallow: ['/studio/']`).

### 1.11 Webhooks / revalidation

`app/api/revalidate/route.ts` — POST, valida `SANITY_WEBHOOK_SECRET` vía `next-sanity/webhook`, llama `revalidateTag(_type)` y, si aplica, `revalidateTag(`${_type}:${slug}`)`; caso especial `carAvailability` también revalida `car`. `lib/sanity/fetch.ts` usa `unstable_cache` con esos mismos tags.

### 1.12 Variables de entorno de Sanity

En `.env`/`env.placeholder`: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`.
Solo en `env.example` (nunca configuradas): `SANITY_API_TOKEN`, `SANITY_WEBHOOK_SECRET`.
No-Sanity (se mantienen tal cual): `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_VERCEL_ENV`, `BOOKING_API_URL`, `WOOCOMMERCE_KEY`, `WOOCOMMERCE_SECRET`, `CONTACT_EMAIL`, `RESEND_API_KEY`, `NEXT_PUBLIC_GA_ID` (estos últimos ni siquiera están implementados en código aún, solo documentados).

### 1.13 Scripts

`scripts/seed-sanity.ts` — único script relacionado con Sanity (`npx tsx scripts/seed-sanity.ts`). Contiene **todo el contenido real migrado de WordPress** (coches, locations, pickup points, FAQs, testimonios, siteSettings, legal pages) — es la fuente de datos más fiable para la migración a TypeScript local (paso 8 del plan general).

### 1.14 Dependencias npm de Sanity

`package.json` → dependencies: `@portabletext/react`, `@sanity/client`, `@sanity/image-url`, `@sanity/vision`, `next-sanity`, `sanity`. Ninguna se usa fuera del árbol Sanity (confirmado por el análisis de componentes/páginas/libs anterior).

### 1.15 Tipos

`types/sanity.ts` — todos los tipos (`LocaleString`, `LocaleText`, `PortableTextBlock`, `Car`, `Location`, `PickupPoint`, `CarAvailability`, `FAQ`, `Testimonial`, `SiteSettings`, etc.) son shapes genéricos de dominio, no acoplados a la API de Sanity en sí (no incluyen `_rev`, `_type` de Sanity salvo `_id`). **Reutilizables casi 1:1** como tipos de dominio (`Car`, `Location`, etc.), quitando el prefijo "Sanity" y los campos puramente de Sanity (`SanitySlug`→`string`, `SanityAsset`→ruta de imagen local, etc.).

---

## 2. Cómo se sustituirá cada dependencia

| Dependencia Sanity | Sustituto |
|---|---|
| `lib/sanity/fetch.ts` (14 funciones) | `lib/data/*.ts` — mismas firmas de función, mismo tipo de retorno, leyendo de `data/*.ts` en memoria (sin red, sin cache de Next necesaria pero se puede mantener `unstable_cache` si aporta valor — probablemente innecesario con datos locales). |
| `lib/sanity/queries.ts` (GROQ) | Eliminado — el filtrado/orden se hace con funciones JS normales (`.filter`, `.find`, `.sort`) en `lib/data/*.ts`. |
| `lib/sanity/client.ts` | Eliminado. |
| `lib/sanity/image.ts` (`urlFor`) | `components/shared/SanityImage.tsx` pasa a usar `next/image` directo con rutas de `/public/images/...` (sin builder de URLs remotas). Se renombra conceptualmente pero se evalúa si conviene mantener el nombre del archivo para minimizar el diff en los imports (`CarGallery`, `CarCard`, etc. no cambian su interfaz de props). |
| `types/sanity.ts` | `types/index.ts` (o similar) con los mismos tipos de dominio, sin acoplar a Sanity. Los componentes actualizan el import path únicamente. |
| Schemas Sanity (`sanity/schemaTypes/*`) | Sirven de referencia para los tipos TS y para `data/*.ts` (ya están muy bien documentados) — no tienen sustituto directo porque no se necesita UI de edición de contenido. |
| `scripts/seed-sanity.ts` | Fuente de datos para poblar `data/cars.ts`, `data/locations.ts`, `data/pickup-points.ts`, `data/faqs.ts`, `data/testimonials.ts`, `data/site.ts` manualmente. |
| `app/studio/[[...tool]]/page.tsx` + `sanity/` (carpeta completa) | Eliminados (paso 14, al final). |
| `app/api/revalidate/route.ts` | Eliminado (no aplica sin CMS remoto). |
| `lib/utils/metadata.ts` (`buildMetadata`) | Se mantiene igual, solo cambia el import de `urlFor` (de `lib/sanity/image` a la nueva utilidad de imagen local) o se adapta para recibir ya una URL/ruta resuelta en vez de un `SanityImageSource`. |
| `lib/schema/index.ts` (JSON-LD) | Se mantiene prácticamente igual — son funciones puras. Solo `generateFAQSchema` debe seguir aceptando Portable Text **o** texto plano, según cómo se decida representar las respuestas de FAQ en el nuevo modelo (ver decisión en sección Riesgos). |
| PortableText (`@portabletext/react`) | Si el contenido migrado es simple (párrafos cortos), se sustituye por texto plano / arrays de strings tipados y un render sencillo (`<p>` por línea). Se decide por caso tras revisar el contenido real migrado (mayoría de `fullDescription`/`answer` son 1 párrafo). |
| Variables de entorno Sanity | Eliminadas de `.env`, `env.example`, `env.placeholder`. |
| Dependencias npm Sanity | Eliminadas de `package.json` al final (paso 14), tras confirmar que ningún archivo las importa. |

---

## 3. Arquitectura de datos propuesta

```
types/
└── index.ts              # Car, Location, PickupPoint, FAQ, Testimonial, SiteSettings, Promotion...

data/
├── cars.ts                # array CARS: Car[]
├── locations.ts            # array LOCATIONS: Location[]
├── pickup-points.ts        # array PICKUP_POINTS: PickupPoint[]
├── promotions.ts           # array PROMOTIONS: Promotion[]
├── faqs.ts                 # array FAQS: FAQ[]
├── testimonials.ts         # array TESTIMONIALS: Testimonial[]
└── site.ts                 # SITE_SETTINGS: SiteSettings

lib/
└── data/
    ├── cars.ts             # getAllCars, getActiveCars, getCarBySlug, getCarsByLocation
    ├── locations.ts        # getAllLocations, getLocationBySlug
    ├── pickup-points.ts     # getPickupPointsByLocation, getPickupPointBySlug, getAllPickupPointSlugs
    ├── promotions.ts        # getActivePromotions
    ├── faqs.ts              # getFaqsByCategory
    ├── testimonials.ts      # getFeaturedTestimonials
    └── site.ts              # getSiteSettings
```

Los componentes y páginas **solo cambian el import**: `from '@/lib/sanity/fetch'` → `from '@/lib/data/cars'` (etc.), manteniendo el mismo nombre de función y la misma forma de los datos devueltos siempre que sea posible, para minimizar el diff.

---

## 4. Archivos que se MODIFICARÁN (import paths / adaptación de tipos)

- `app/(site)/layout.tsx`
- `app/(site)/page.tsx`
- `app/(site)/flota/page.tsx`, `app/(site)/flota/[car-slug]/page.tsx`
- `app/(site)/ibiza/page.tsx`, `/aeropuerto/`, `/puerto/`
- `app/(site)/alicante/page.tsx`, `/aeropuerto/`, `/oficina/`, `/puerto/`
- `app/sitemap.ts`
- `lib/utils/metadata.ts`
- `components/shared/SanityImage.tsx` (posible rename a `AppImage.tsx`, a decidir con el usuario o mantener nombre por compatibilidad)
- `components/shared/PortableText.tsx` (posible simplificación, a evaluar según contenido real)
- `components/car/CarCard.tsx`, `CarGrid.tsx`, `CarSpecs.tsx`, `CarGallery.tsx`
- `components/location/PickupPageTemplate.tsx`
- `components/sections/DestinationCards.tsx`, `FAQSection.tsx`, `TestimonialsSection.tsx`
- `package.json` (quitar dependencias, al final)
- `.env`, `env.example`, `env.placeholder` (quitar vars Sanity, al final)
- `next.config.ts` (quitar `remotePatterns` de `cdn.sanity.io`, al final, una vez confirmado que no hay más imágenes remotas de Sanity en uso)

## 5. Archivos que se ELIMINARÁN (al final, paso 14)

- `sanity/` (carpeta completa: config, schemas, lib/image.ts)
- `app/studio/[[...tool]]/page.tsx` (y carpeta `app/studio/` si queda vacía)
- `app/api/revalidate/route.ts` (y carpeta si queda vacía)
- `lib/sanity/` (carpeta completa: client.ts, fetch.ts, image.ts, queries.ts)
- `types/sanity.ts` (sustituido por `types/index.ts`)
- `scripts/seed-sanity.ts` (su contenido ya se habrá usado como fuente de datos)

## 6. Riesgos

| Riesgo | Mitigación |
|---|---|
| Faltan imágenes reales (no hay `/public`, nunca se subieron a Sanity) | Documentar en `docs/content/fleet-review.md` como `MISSING_INFORMATION`; usar placeholders claramente marcados o pedir las imágenes al negocio antes de publicar. No se inventan fotos. |
| Contenido con datos "⚠️ COMPLETAR MANUALMENTE" en `cars-final.md` (potencia, maletero, descripciones EN, etc.) | Migrar solo lo verificado; dejar sin rellenar lo desconocido, igual que en Sanity (campo opcional/vacío), documentado en fleet-review.md. |
| car-002 (Clase V Largo) y car-003/004 (GLC) nunca se publicaron, con inconsistencias de precio y nombre | NO se migran como coches reales activos — se documentan como `OLD_CONTENT`/`POSSIBLE` en fleet-review.md. Solo se migra car-001 (Avantgard Largo) como `CONFIRMED`. |
| Inconsistencia extras Ibiza (`one_time`) vs Alicante (`per_day`) | Se preserva tal cual en el modelo de datos (ya está resuelta como campo `pricingModel` por disponibilidad, igual que en Sanity) — no se "corrige" sin pedirlo el negocio. |
| JSON-LD / FAQSchema depende de Portable Text | Si se simplifica `answer` a texto plano, `generateFAQSchema` deja de necesitar el parser de blocks — cambio aislado y de bajo riesgo, pero hay que tocar `lib/schema/index.ts::generateFAQSchema` y revisar los 3 consumidores (`FAQSection`, `PickupPageTemplate`, páginas con `generateFAQSchema` inline). |
| Romper build estático (`generateStaticParams` en car detail) | Las funciones `getAllCarSlugs`/`getCarBySlug` deben devolver sincrónicamente (o async resuelto) los mismos shapes; con datos locales esto es más simple y menos propenso a fallos que con fetch remoto. |
| Variables de entorno todavía referenciadas en `next.config.ts`/`middleware.ts` | Revisar que ningún redirect/middleware dependa de un valor de Sanity antes de borrar nada — confirmado que no es el caso (middleware solo normaliza trailing slash). |
| Dependencias npm compartidas accidentalmente | Antes de borrar cada dependencia de `package.json`, grep del nombre del paquete en todo el repo (paso 15 del plan general) para confirmar que no se usa en ningún otro sitio. |

## 7. Elementos que deben mantenerse EXACTAMENTE igual

- Todas las URLs actuales (`/`, `/flota`, `/flota/[slug]`, `/ibiza`, `/ibiza/aeropuerto`, `/ibiza/puerto`, `/alicante`, `/alicante/aeropuerto`, `/alicante/oficina`, `/alicante/puerto`, legales, etc.) y los 20+ redirects 301 de `next.config.ts`.
- Todo el contenido hardcodeado ya identificado en páginas (FAQs estáticas de fallback, textos de hero, CTAs, direcciones, teléfonos, mensajes de WhatsApp) — no tocar salvo que sea la fuente de datos a migrar.
- Comportamiento de `generateMetadata`, `buildMetadata`, canonical, robots, Open Graph, Twitter cards.
- Todos los JSON-LD (`Organization`, `WebSite`, `LocalBusiness`, `Product`, `FAQPage`, `BreadcrumbList`) con los mismos datos que generan hoy.
- `app/sitemap.ts`: mismas rutas estáticas con las mismas prioridades, mismas rutas dinámicas generadas (coches activos, locations, pickup points; guías si llegan a usarse).
- `middleware.ts` (normalización de trailing slash) sin cambios.
- Todos los componentes visuales (Header, Footer, Hero, CarCard, etc.) sin cambios de diseño — solo cambia de dónde reciben los datos.
- La UI solo debe mostrar vehículos confirmados como reales (ver `docs/content/fleet-review.md`, paso posterior) — nunca datos ficticios.

---

## 8. Orden de ejecución (incremental, sin eliminación masiva)

1. ✅ Este documento (análisis).
2. Crear `types/` de dominio + `data/*.ts` con datos migrados (sin tocar nada existente todavía).
3. Crear `lib/data/*.ts` con las funciones `getX`, en paralelo a `lib/sanity/*` (ambos coexisten).
4. Revisar flota real → `docs/content/fleet-review.md`.
5. Migrar consumidores (páginas y componentes) uno a uno de `lib/sanity/fetch` a `lib/data/*`, comprobando build tras cada cambio.
6. Confirmar con `grep`/`code_graph` que nada importa ya `lib/sanity/*`, `types/sanity.ts`, `sanity/`, `@sanity/*`, `next-sanity`, `@portabletext/*`.
7. Eliminar `sanity/`, `app/studio/`, `app/api/revalidate/`, `lib/sanity/`, `types/sanity.ts`, `scripts/seed-sanity.ts`.
8. Quitar dependencias npm y variables de entorno de Sanity.
9. `npm run build` final, documentar en `docs/development/sanity-removal-report.md`.

Este plan no modifica ningún archivo de la aplicación todavía — es el análisis previo requerido por PASO 1.
