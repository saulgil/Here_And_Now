# Estado de implementación — Here & Now

> Fecha: 2026-11-02  
> Sesión: Implementación inicial (base de la aplicación)  
> ⚠️ **Auditoría SEO disponible: `docs/seo/pre-launch-audit.md` — 4 CRITICAL issues pendientes de resolver**

---

## DONE — Implementado

### Configuración del proyecto

| Archivo | Estado | Notas |
|---------|--------|-------|
| `package.json` | ✅ | Dependencias exactas según technical-design.md |
| `tsconfig.json` | ✅ | Path alias `@/*` configurado |
| `postcss.config.mjs` | ✅ | Tailwind v4 PostCSS plugin |
| `next.config.ts` | ✅ | Redirects (20+), imagen config, AVIF/WebP |
| `env.example` | ✅ | Todas las variables documentadas |
| `middleware.ts` | ✅ | Normalización de trailing slashes |

### Diseño y estilos

| Archivo | Estado | Notas |
|---------|--------|-------|
| `styles/globals.css` | ✅ | Tailwind v4 `@theme` tokens, ClashGrotesk `@font-face` (5 pesos), base styles, focus ring, skip link, `prefers-reduced-motion` |

### Sanity — Schemas (11 documentos)

| Schema | Tipo | Estado |
|--------|------|--------|
| `brand` | document | ✅ |
| `car` | document | ✅ Grupos: identity, specs, rental, content, media, seo |
| `carAvailability` | document | ✅ Pivot coche×destino con extras, coberturas, pickup points |
| `carCategory` | document | ✅ |
| `faq` | document | ✅ 7 categorías, schema-ready para FAQPage |
| `guide` | document | ✅ |
| `location` | document | ✅ |
| `pickupPoint` | document | ✅ Con coordenadas, horario, instrucciones |
| `sitePage` | document | ✅ Renombrado de `page` para evitar conflicto con Next.js |
| `siteSettings` | document | ✅ Singleton con nav, contacto, redes, SEO global |
| `testimonial` | document | ✅ |

### Sanity — Schemas (9 objetos)

| Schema | Tipo | Estado |
|--------|------|--------|
| `localeString` | object | ✅ `{ es: string, en?: string }` |
| `localeText` | object | ✅ `{ es: text, en?: text }` |
| `localeBlockContent` | object | ✅ Portable Text ES/EN |
| `seoFields` | object | ✅ Con validaciones de longitud (60/160 chars) |
| `imageWithAlt` | object | ✅ alt como localeString — **obligatorio** |
| `extra` | object | ✅ `pricingModel: 'one_time' | 'per_day'` resuelve inconsistencia Ibiza/Alicante |
| `coverage` | object | ✅ |
| `navItem` | object | ✅ Con children para dropdown |
| `openingHours` | object | ✅ |

### Sanity — Configuración

| Archivo | Estado | Notas |
|---------|--------|-------|
| `sanity/schemaTypes/index.ts` | ✅ | Exporta todos los schemas |
| `sanity/sanity.config.ts` | ✅ | Studio con sidebar estructurada y singleton siteSettings |
| `sanity/lib/image.ts` | ✅ | `urlFor` para el Studio |

### Lib / Utilidades

| Archivo | Estado | Notas |
|---------|--------|-------|
| `lib/sanity/client.ts` | ✅ | Client con CDN + Stega en preview, writeClient para webhooks |
| `lib/sanity/queries.ts` | ✅ | 14 GROQ queries; todos los assets incluyen `_id` para urlFor |
| `lib/sanity/fetch.ts` | ✅ | Wrapper con `unstable_cache` + tags; sin cache en development |
| `lib/sanity/image.ts` | ✅ | `urlFor` para la app |
| `lib/schema/index.ts` | ✅ | Generadores de JSON-LD: Organization, CarRental, LocalBusiness, Product, FAQ, Breadcrumb, WebSite |
| `lib/utils/metadata.ts` | ✅ | `buildMetadata()` para `generateMetadata()` en todas las páginas |

### App Router — Estructura

| Archivo | Estado | Notas |
|---------|--------|-------|
| `app/layout.tsx` | ✅ | Root HTML, preload de fuentes críticas, metadata base |
| `app/(site)/layout.tsx` | ✅ | Header, Footer, skip link, SchemaOrg global |
| `app/(site)/page.tsx` | ✅ | **Homepage completa** — 9 secciones, metadata SEO, structured data |
| `app/sitemap.ts` | ✅ | Sitemap dinámico desde Sanity |
| `app/robots.ts` | ✅ | Bloquea /studio/ y /api/ |
| `app/not-found.tsx` | ✅ | 404 personalizado con CTAs |
| `app/api/revalidate/route.ts` | ✅ | Webhook Sanity → `revalidateTag()` |
| `app/studio/[[...tool]]/page.tsx` | ✅ | Sanity Studio embebido, force-dynamic, noindex |

### Componentes

#### Layout
| Componente | Tipo | Estado | Notas |
|-----------|------|--------|-------|
| `components/layout/Header.tsx` | Server | ✅ | Nav desktop con dropdown, CTA Reservar |
| `components/layout/Footer.tsx` | Server | ✅ | 4 columnas, dark background, legal |
| `components/layout/MobileNav.tsx` | **Client** | ✅ | Drawer con focus trap, Escape handler, ARIA |

#### Shared
| Componente | Tipo | Estado | Notas |
|-----------|------|--------|-------|
| `components/shared/SchemaOrg.tsx` | Server | ✅ | Inyecta `<script type="application/ld+json">` |
| `components/shared/SanityImage.tsx` | Server | ✅ | next/image con blur placeholder, 2× retina |
| `components/shared/PortableText.tsx` | Server | ✅ | Renderizador @portabletext/react tipado |
| `components/shared/Breadcrumbs.tsx` | Server | ✅ | BreadcrumbList JSON-LD inline |
| `components/shared/WhatsAppCTA.tsx` | **Client** | ✅ | Fixed mobile-only, #25D366, aria-label |
| `components/shared/ContactForm.tsx` | **Client** | ✅ | Server Action + useTransition, React 18 compatible |

#### Sections
| Componente | Tipo | Estado | Notas |
|-----------|------|--------|-------|
| `components/sections/HeroHome.tsx` | Server | ✅ | Dark bg, H1, dos CTA Ibiza/Alicante, texto de apoyo |
| `components/sections/CTASection.tsx` | Server | ✅ | Sección dark full-bleed, botones configurables |
| `components/sections/FAQSection.tsx` | **Client** | ✅ | Acordeón accesible (aria-expanded/controls), FAQPage JSON-LD |

#### Car
| Componente | Tipo | Estado | Notas |
|-----------|------|--------|-------|
| `components/car/CarCard.tsx` | Server | ✅ | Imagen 16:10, specs icons, precio, disponibilidad badges |
| `components/car/CarGrid.tsx` | Server | ✅ | Grid 1→2→3 col, empty state |
| `components/car/CarGallery.tsx` | **Client** | ✅ | Thumbnails, navegación, lightbox modal |
| `components/car/CarSpecs.tsx` | Server | ✅ | DL/DD accesible, iconos Lucide, fallback si faltan datos |

#### Types & Actions
| Archivo | Estado | Notas |
|---------|--------|-------|
| `types/sanity.ts` | ✅ | Tipos TypeScript completos para todos los documentos Sanity |
| `app/actions/contact.ts` | ✅ | Server Action + Zod validation + Resend email |

#### Sections (nuevas — sesión 4)
| Componente | Tipo | Estado | Notas |
|-----------|------|--------|-------|
| `components/sections/BrandStatement.tsx` | Server | ✅ | "MERCEDES RENT A CAR / THE BEST OR NOTHING" |
| `components/sections/DestinationCards.tsx` | Server | ✅ | Cards Ibiza/Alicante con imagen Sanity o gradiente fallback |
| `components/sections/ValueProposition.tsx` | Server | ✅ | 4 valores: SEGURIDAD, CONFORT, RÁPIDO, FLEXIBLE |
| `components/sections/HowItWorks.tsx` | Server | ✅ | 3 pasos con numeración y conector visual |
| `components/sections/TestimonialsSection.tsx` | Server | ✅ | 3 reseñas verificadas + fallback estático si no hay datos Sanity |

#### No implementados (no necesarios)
| Componente | Motivo |
|-----------|--------|
| `CategoryCard` | No hay páginas de categoría en la arquitectura |
| `BrandCard` | No hay páginas de marca; toda la flota es Mercedes |
| `LocationSelector` | El Hero ya cumple esta función con dos CTAs; el filtro de flota se implementará inline en `/flota/` |

---

## PENDING — Por implementar

---

## SESIÓN 7 — Páginas de pickup points / SEO landings (2026-11-02)

**HTTP 200 en las 5 páginas · TypeScript 0 errores**

### Aclaración arquitectónica
El sitemap-new.md NO incluye páginas de marca (`/mercedes/`) ni categoría genérica porque sería thin content duplicado de `/flota/`. Las "categorías" aprobadas en el sitemap son los 5 **SEO_LANDING** de puntos de recogida, que sí aportan valor único: instrucciones locales, coordenadas, horarios, FAQs específicas.

### Nuevos archivos
| Archivo | URL | Keyword primaria |
|---------|-----|-----------------|
| `components/location/PickupPageTemplate.tsx` | (shared) | Plantilla reutilizable Server Component |
| `app/(site)/ibiza/aeropuerto/page.tsx` | `/ibiza/aeropuerto/` | alquiler coches aeropuerto Ibiza (IBZ) |
| `app/(site)/ibiza/puerto/page.tsx` | `/ibiza/puerto/` | alquiler coches puerto Ibiza |
| `app/(site)/alicante/aeropuerto/page.tsx` | `/alicante/aeropuerto/` | alquiler coches aeropuerto Alicante (ALC) |
| `app/(site)/alicante/oficina/page.tsx` | `/alicante/oficina/` | alquiler coches El Campello |
| `app/(site)/alicante/puerto/page.tsx` | `/alicante/puerto/` | alquiler coches puerto Alicante |

### Anti-duplicación implementada
Cada página tiene contenido único:
- H1, meta title/description distintos (keyword de IATA o punto físico)
- "Cómo encontrarnos" con pasos específicos del punto (terminal, muelle, calle)
- Párrafo de contexto local diferente (distancias, atracciones, ferris...)
- FAQ distintas por punto (horario cruceros vs horario oficina vs llegadas ferri)
- `LocalBusiness` schema: la oficina de El Campello incluye coordenadas reales + horarios

### Structured data por página
- `BreadcrumbList` (Inicio → [Destino] → [Punto])
- `LocalBusiness` con datos del punto
- `FAQPage` con 3-4 preguntas específicas

---

## SESIÓN 6 — Páginas de vehículos dinámicas (2026-11-02)

**TypeScript 0 errores · /flota/ HTTP 200 · /flota/[slug] SSG + notFound() cuando no hay datos**

### Nuevos archivos
| Archivo | Descripción |
|---------|-------------|
| `app/actions/booking.ts` | Server Action pre-reserva — Zod, Resend, campos: destino/fechas/nombre/email/teléfono |
| `components/car/CarBookingForm.tsx` | Formulario de reserva (Client) — pre-reserva hasta integrar WooCommerce |
| `components/car/StickyBookingBar.tsx` | Barra sticky (Client) — IntersectionObserver, aparece al scrollear |
| `app/(site)/flota/page.tsx` | `/flota/` — overview de toda la flota con H1 y CTAs |
| `app/(site)/flota/[car-slug]/page.tsx` | `/flota/[slug]/` — página dinámica del vehículo |

### Arquitectura de la car detail page
```
generateStaticParams → getAllCarSlugs() → SSG en build
generateMetadata    → getCarBySlug(slug) → title/desc/og:image del CMS
Page:
  ├── SchemaOrg [Product, BreadcrumbList, FAQPage (si hay FAQs)]
  ├── StickyBookingBar (Client — IntersectionObserver)
  ├── Breadcrumbs (Inicio > Flota > Nombre del coche)
  ├── Grid lg:[3fr 2fr]
  │   ├── LEFT:  Gallery | Desc | FullDescription | Specs | Features | Condiciones
  │   └── RIGHT: CarIntroBlock | CarBookingForm (solicitud pre-reserva)
  ├── FAQSection (si hay FAQs en Sanity o categoría 'vehicle')
  ├── CarGrid (coches relacionados — excluye el actual)
  └── (no CTA final — la sidebar de booking ya lo cubre)
```

### Campos del formulario de pre-reserva (CarBookingForm)
- Destino (Ibiza / Alicante — filtrado por `carAvailability`)
- Fecha recogida / Fecha entrega (date inputs nativos)
- Nombre, Email, Teléfono (opcional)
- GDPR checkbox
- CTA alternativo: Llamar · WhatsApp

### Nota sobre booking
El formulario actual envía una pre-reserva por email (Server Action). La integración con WooCommerce REST API para booking real sigue en estado REVIEW (requiere decisión sobre el backend de reservas).

---

## SESIÓN 5 — Páginas de destino Ibiza y Alicante (2026-11-02)

**HTTP 200 ambas páginas · TypeScript 0 errores**

### Nuevos archivos
| Archivo | Descripción |
|---------|-------------|
| `docs/content/ibiza-copy.md` | Copy editorial Ibiza (VERIFIED/ADAPTED/NEW marcado) |
| `docs/content/alicante-copy.md` | Copy editorial Alicante (VERIFIED/ADAPTED/NEW marcado) |
| `components/location/LocationHero.tsx` | Hero para páginas de destino (Server, imagen Sanity + gradiente fallback) |
| `components/location/PickupPointGrid.tsx` | Grid de puntos de recogida con iconos (Server) |
| `components/location/WhyHereSection.tsx` | Sección de razones locales (Server, contenido distinto por destino) |
| `app/(site)/ibiza/page.tsx` | Página /ibiza/ — 8 secciones, FAQs específicas Ibiza |
| `app/(site)/alicante/page.tsx` | Página /alicante/ — 8 secciones + Office callout exclusivo Alicante |

### Anti-duplication implementada
| Elemento | Ibiza | Alicante |
|---------|-------|---------|
| H1 / title | "...en Ibiza" | "...en Alicante" |
| Meta description | Aeropuerto · Puerto | Oficina propia · Aeropuerto · Puerto |
| Puntos de recogida | 2 (Aeropuerto, Puerto) | 3 (Oficina, Aeropuerto, Puerto) |
| "Por qué aquí" | Libertad isla, estilo Ibiza, recogida express | Oficina propia, todo el año, Costa Blanca |
| Office callout | Ausente | Presente (diferenciador único) |
| FAQ | 4 preguntas específicas Ibiza (temporada alta, ferri...) | 4 preguntas Alicante (oficina, todo el año, ALC...) |
| WhatsApp message | "...alquilar en Ibiza" | "...alquilar en Alicante" |
| CTA buttons | "Reservar en Ibiza" + Contactar | "Reservar en Alicante" + "Visitar oficina" |
| BreadcrumbList | Inicio > Ibiza | Inicio > Alicante |
| Testimonials filter | Solo reseñas location.slug=ibiza | Solo reseñas location.slug=alicante |

### Structured data por página
- `BreadcrumbList` (Inicio → [Destino])
- `FAQPage` con preguntas específicas del destino
- `LocalBusiness` con address completo en Alicante (el de Ibiza sin dirección física)

---

## SESIÓN 4 — Homepage completa (2026-11-02)

**HTTP 200 · TypeScript 0 errores · 9 secciones implementadas**

### Nuevos archivos
| Archivo | Descripción |
|---------|-------------|
| `docs/content/home-copy.md` | Copy editorial verificado (VERIFIED/ADAPTED/INFERRED marcado) |
| `components/sections/BrandStatement.tsx` | Sección de marca Mercedes |
| `components/sections/DestinationCards.tsx` | Cards Ibiza/Alicante con imagen Sanity |
| `components/sections/ValueProposition.tsx` | 4 valores del negocio |
| `components/sections/HowItWorks.tsx` | 3 pasos de la reserva |
| `components/sections/TestimonialsSection.tsx` | Reseñas (Sanity + fallback estático) |
| `app/(site)/page.tsx` | Homepage completa (9 secciones) |

### Structured data en homepage
- `WebSite` + `Organization` + `CarRental` → desde site layout
- `FAQPage` → sección FAQ
- `LocalBusiness` → con dirección y coordenadas de Alicante

### Contenido
- H1, meta description, og:title, og:description, robots: todos correctos
- Reseñas verificadas del sitio actual (Eliseo Pérez, José Antonio Puigcerver, Clara García)
- FAQ con contenido adaptado para car rental (eliminado concierge/villas)
- Fleet section: muestra vehículos de Sanity; placeholder elegante cuando no hay datos

---

## SESIÓN 3 — Componentes compartidos (2026-11-02)

**TypeScript: 0 errores tras las correcciones.**  
**Servidor: HTTP 200, compilación continua correcta.**

Fixes aplicados en esta sesión:
- Tipos explícitos en `lib/sanity/fetch.ts` (todos los helpers tipados con generics)
- `types/sanity.ts` creado con todos los tipos de documentos Sanity
- `__experimental_actions` eliminado de siteSettings (no es API estable)
- `LocationIcon` → `PinIcon` en pickupPoint schema
- `PortableTextBlock` usa tipo de `@portabletext/types`
- `generateOrganizationSchema` acepta `siteName?: string`
- `@sanity/vision` instalado con `--legacy-peer-deps`

---

## PENDING — Por implementar

### Próxima fase: Páginas de contenido

| Página | URL | Prioridad |
|--------|-----|-----------|
| ~~Homepage completa~~ | ~~`/`~~ | ✅ Implementada |
| ~~Location Hub Ibiza~~ | ~~`/ibiza/`~~ | ✅ Implementada |
| ~~Location Hub Alicante~~ | ~~`/alicante/`~~ | ✅ Implementada |
| ~~Fleet Overview~~ | ~~`/flota/`~~ | ✅ Implementada |
| ~~Car Detail~~ | ~~`/flota/[car-slug]/`~~ | ✅ Implementada (SSG + notFound) |
| ~~Aeropuerto Ibiza~~ | ~~`/ibiza/aeropuerto/`~~ | ✅ Implementada |
| ~~Aeropuerto Alicante~~ | ~~`/alicante/aeropuerto/`~~ | ✅ Implementada |
| ~~Puerto Ibiza~~ | ~~`/ibiza/puerto/`~~ | ✅ Implementada |
| ~~Oficina Alicante~~ | ~~`/alicante/oficina/`~~ | ✅ Implementada |
| ~~Puerto Alicante~~ | ~~`/alicante/puerto/`~~ | ✅ Implementada |
| Guías (hub) | `/guias/` | Media |
| Guía individual | `/guias/[guide-slug]/` | Media |
| Contacto | `/contacto/` | Media |
| Páginas legales | `/terminos-y-condiciones/`, etc. | Baja |

### Componentes pendientes

- `components/car/CarCard.tsx` — tarjeta de vehículo para listas
- `components/car/CarGallery.tsx` — galería swipeable (Client)
- `components/car/CarSpecs.tsx` — tabla de especificaciones
- `components/car/CarBookingForm.tsx` — formulario de reserva (Client)
- `components/car/StickyBookingBar.tsx` — barra sticky precio+CTA (Client)
- `components/location/LocationHero.tsx`
- `components/location/PickupPointCard.tsx`
- `components/sections/HeroHome.tsx` — hero con vídeo (Client)
- `components/sections/FAQAccordion.tsx` — acordeón (Client)
- `components/sections/Testimonials.tsx`
- `components/sections/ValueProps.tsx`

### Infraestructura pendiente

- `lib/booking/service.ts` — abstracción del sistema de reserva (WooCommerce API)
- `app/actions/contact.ts` — Server Action para el formulario de contacto
- `lib/utils/i18n.ts` — helpers de localización
- `components/shared/CookieBanner.tsx` — banner de consentimiento (Client)
- `components/shared/ConsentAwareAnalytics.tsx` — GA4 con consentimiento
- `vercel.json` — headers de seguridad, configuración de región

### Setup externo necesario

- [ ] Crear proyecto en Sanity.io y obtener `NEXT_PUBLIC_SANITY_PROJECT_ID`
- [ ] Crear archivo `.env.local` con valores reales (basarse en `env.example`)
- [ ] Copiar archivos de fuente ClashGrotesk a `public/fonts/` (fuentes disponibles en la librería de medios del WP actual: `/wp-content/uploads/2024/05/ClashGrotesk-*.woff2`)
- [ ] Ejecutar `npm install` para instalar dependencias
- [ ] Seed inicial de Sanity: `siteSettings`, `location` (Ibiza/Alicante), `brand` (Mercedes-Benz), `car` (Clase V Avantgard), `carAvailability` ×2
- [ ] Configurar webhook en Sanity: `POST /api/revalidate` con secreto en `SANITY_WEBHOOK_SECRET`

---

## DECISIONS — Decisiones tomadas durante la implementación

| Decisión | Alternativa considerada | Motivo |
|---------|------------------------|--------|
| `sitePage` como nombre del schema en Sanity | `page` | Next.js usa "page" internamente; el nombre `page` en Sanity Studio podría causar confusión |
| `__experimental_actions` para singleton siteSettings | `singletonPlugin` de Sanity | Más simple para MVP; considerar migrar a plugin oficial en producción |
| Header siempre con fondo `canvas/95` | Transparente en hero, opaco al scroll | El efecto de transparencia requiere un Client Component que detecte scroll; se implementará como mejora cuando exista el hero real |
| `_id` incluido en todas las proyecciones de asset | Solo `url` | `urlFor` de `@sanity/image-url` necesita el `_id` para construir URLs de transformación correctamente |
| `asset._id` como referencia para `urlFor` | Pasar objeto asset completo | `{ _ref: asset._id, _type: 'reference' }` es la forma recomendada |
| Tailwind v4 sin `tailwind.config.ts` | Tailwind v3 | Implementado CSS-first según la especificación técnica; si hay problemas de compatibilidad, migrar a v3 es trivial |
| `carAvailability` webhook también revalida `car` | Solo revalida `carAvailability` | Un cambio de precio o disponibilidad afecta a las car detail pages que muestran el precio desde |

---

---

## SESIÓN 2 — Fixes aplicados (2026-11-02)

| Fix | Archivo | Descripción |
|-----|---------|-------------|
| React 18.3.1 | package.json | Downgrade de React 19→18 por incompatibilidad con `sanity@3.62` |
| Next.js 15.3.3 | package.json | Upgrade de 15.1.0→15.3.3 (parche CVE-2025-66478) |
| Tailwind 4.3.3 | package.json | Upgrade de 4.0.0→4.3.3 (fix `ScannerOptions.negated` con Turbopack) |
| stega eliminado | lib/sanity/client.ts | `stega` no disponible en next-sanity@9.8; diferido a fase de preview |
| Graceful degradation | lib/sanity/fetch.ts | `fetchSanity` captura errores Sanity y devuelve null en lugar de lanzar |
| Title duplicado | app/(site)/page.tsx | Eliminado "| Here & Now" del fallbackTitle (la plantilla del layout lo añade) |
| .env placeholder | .env | Variables placeholder para development sin Sanity configurado |
| Proyecto en C:/dev | — | `node_modules` movido fuera de OneDrive (C:/dev/here-and-now) |

**Estado tras fixes: HTTP 200, título correcto, sitemap y robots operativos.**

---

## ISSUES — Problemas conocidos y pendientes

### 🔴 Bloqueantes (no se puede ejecutar sin resolver)

| # | Problema | Solución |
|---|---------|---------|
| I-01 | **Fuentes ClashGrotesk ausentes** — `public/fonts/` está vacío; el sitio carga con fuente de fallback | Copiar los 10 archivos woff/woff2 desde la librería de medios del WP actual (`/wp-content/uploads/2024/05/ClashGrotesk-*.woff2` y `.woff`) |
| I-02 | **Sanity no configurado** — `env.placeholder` tiene values ficticios | Crear proyecto en sanity.io, obtener el Project ID y configurar `.env.local` con los valores reales |
| ~~I-03~~ | ~~`npm install` no ejecutado~~ | ✅ **RESUELTO** — instalado en `C:/dev/here-and-now` |
| I-09 | **Proyecto en dos ubicaciones** — El código fuente está en OneDrive (`WEB_01/`) pero `node_modules` solo funciona en `C:/dev/here-and-now/` | Para desarrollar: trabajar en `C:/dev/here-and-now/`. Para el código fuente definitivo: mover el proyecto completamente fuera de OneDrive |

### 🟡 No bloqueantes (funciona pero con degradación)

| # | Problema | Solución pendiente |
|---|---------|-------------------|
| I-04 | **`__experimental_actions` en siteSettings** — API no estable en Sanity v3; el singleton puede comportarse de forma inesperada | En cuanto la herramienta sea estable, migrar a `singletonPlugin` oficial |
| I-05 | **Header siempre opaco** — El efecto de transparencia en el hero scroll no está implementado | Añadir `useScrollY` hook y convertir Header a Client Component parcial o usar CSS scroll-driven animations |
| I-06 | **Booking form pendiente** — Las páginas de coche mostrarán un formulario vacío hasta implementar `CarBookingForm.tsx` | Implementar en la siguiente fase |
| I-07 | **Sanity seed vacío** — Sin datos en Sanity, el sitio mostrará el layout pero sin contenido real | Seed inicial con los datos del análisis: cars-final.md, content-migration.md |
| I-08 | **Sin página de legal** — Las páginas `/terminos-y-condiciones/`, `/privacidad/`, etc., no tienen `page.tsx` todavía | Crear las páginas con su contenido correspondiente (disponible en el WordPress actual) |

---

## Resumen de archivos creados

| Categoría | Archivos | Total |
|-----------|---------|-------|
| Configuración del proyecto | package.json, tsconfig.json, postcss.config.mjs, next.config.ts, env.example, middleware.ts | 6 |
| Estilos | styles/globals.css | 1 |
| Sanity schemas (documentos) | 11 archivos en sanity/schemaTypes/documents/ | 11 |
| Sanity schemas (objetos) | 9 archivos en sanity/schemaTypes/objects/ | 9 |
| Sanity config | sanity/schemaTypes/index.ts, sanity/sanity.config.ts, sanity/lib/image.ts | 3 |
| Lib Sanity | client.ts, queries.ts, fetch.ts, image.ts | 4 |
| Lib utilidades | lib/schema/index.ts, lib/utils/metadata.ts | 2 |
| App Router | layout.tsx (×2), page.tsx, sitemap.ts, robots.ts, not-found.tsx, api/revalidate/route.ts, studio/page.tsx | 8 |
| Componentes | Header, Footer, MobileNav, SchemaOrg, SanityImage, PortableText | 6 |
| **TOTAL** | | **50 archivos** |

---

## Próximos pasos recomendados (en orden)

1. **`npm install`** — Instalar dependencias
2. **Fuentes** — Copiar ClashGrotesk a `public/fonts/`
3. **Sanity** — Crear proyecto, configurar `.env.local`
4. **Seed** — Introducir datos iniciales en Sanity Studio (`/studio`)
5. **Homepage** — Implementar las secciones de `app/(site)/page.tsx`
6. **Location pages** — `/ibiza/` y `/alicante/` con fleet grid
7. **Car Detail** — `/flota/[car-slug]/` con galería y formulario de reserva
8. **SEO Landing pages** — Aeropuertos y puertos
