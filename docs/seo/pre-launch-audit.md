# Pre-launch SEO Audit — Here & Now

> Fecha: 2026-11-02  
> Entorno: desarrollo local — http://localhost:3002  
> Stack: Next.js 15.3.3 · Tailwind v4 · Sanity (sin configurar)  
> Comparado con: `docs/seo/redirect-map.md`

---

## Clasificación de issues

| Prioridad | Significado |
|-----------|-------------|
| `CRITICAL` | Bloquea el lanzamiento — Google penaliza o el sitio no es funcional |
| `HIGH` | Impacto significativo en SEO o UX — resolver antes del lanzamiento |
| `MEDIUM` | Mejora recomendada — resolver en las primeras semanas post-lanzamiento |
| `LOW` | Mejora menor o comportamiento esperado en dev |
| `PASSED` | Correcto — no requiere acción |

**El proyecto NO está listo para lanzamiento mientras existan issues CRITICAL.**

---

## CRITICAL

---

### C-01 — Font files missing en `/public/fonts/`

**Componente:** `styles/globals.css` + `app/layout.tsx`  
**Verificado:** El directorio `public/fonts/` está vacío.

**Impacto:**
- Las declaraciones `@font-face` de ClashGrotesk apuntan a `/fonts/ClashGrotesk-*.woff2` que no existen
- Los 2 `<link rel="preload">` del layout generan 404 en cada request
- El navegador cae al fallback stack (`DM Sans, system-ui`) — diferencia visual entre dev y producción
- Google puede penalizar páginas que generan 404s en recursos preloaded (Core Web Vitals penalty potencial en LCP)

**Solución:**
```bash
# Descargar desde la librería de medios del WP actual:
# https://hereandnowibiza.com/wp-content/uploads/2024/05/ClashGrotesk-Regular.woff2
# https://hereandnowibiza.com/wp-content/uploads/2024/05/ClashGrotesk-Semibold.woff2
# (+ Light, Extralight, Bold)
# Copiar a: C:/dev/here-and-now/public/fonts/
```

---

### C-02 — Página `/contacto` no existe (404)

**Componente:** `app/(site)/contacto/page.tsx` — **AUSENTE**  
**Verificado:** El nav principal, el footer de TODAS las páginas y múltiples CTAs enlazan a `/contacto`. La URL devuelve 404.

**Impacto:**
- Todos los usuarios que hacen clic en "Contacto" del menú llegan a una página de error
- Google rastrea todos los enlaces del footer — encontrará 404 en cada crawl de todas las páginas
- El enlace de contacto dentro del Breadcrumbs de las FAQs también falla

**Adicionalmente:** `next.config.ts` tiene esta línea que causa un **bucle de redirect infinito**:
```javascript
{ source: '/contacto', destination: '/contacto', permanent: false },  // ← bucle!
```

**Solución:**  
1. Eliminar el redirect de `/contacto` a `/contacto` en `next.config.ts`
2. Crear `app/(site)/contacto/page.tsx` con el `ContactForm` component ya implementado

---

### C-03 — 5 páginas legales no existen (404)

**Componente:** Ninguno de los 5 directorios tiene `page.tsx`  
**Verificado en código:** Las rutas existen como directorios pero sin implementación.

| URL | Estado |
|-----|--------|
| `/terminos-y-condiciones` | 404 |
| `/politica-cancelacion` | 404 |
| `/privacidad` | 404 |
| `/aviso-legal` | 404 |
| `/cookies` | 404 |

**Impacto:**
- El footer de TODAS las páginas enlaza a todas estas URLs
- El formulario de reserva enlaza a T&C y política de cancelación — los usuarios no pueden ver las condiciones antes de reservar
- Google indexará los links pero encontrará 404 masivos
- **Riesgo legal:** Las páginas de privacidad y aviso legal son obligatorias por ley (RGPD)

**Solución:** Crear 5 páginas simples que lean el contenido de `sitePage` de Sanity. Mientras tanto, crear páginas con el texto directamente como placeholder.

---

### C-04 — Página `/guias` no existe (404)

**Componente:** `app/(site)/guias/page.tsx` — **AUSENTE**  
**Verificado:** La URL está en el sitemap y en el nav. Devuelve 404.

**Impacto:** Todas las guías referenciadas en el contenido (`/guias/alquiler-coches-ibiza/` etc.) tienen la URL hub 404. Las sub-páginas no tienen implementación tampoco.

---

## HIGH

---

### H-01 — og:image ausente en TODAS las páginas

**Verificado en navegador:** Todas las páginas devuelven `og:image: null`

| URL | og:image |
|-----|---------|
| / | ❌ null |
| /ibiza | ❌ null |
| /alicante | ❌ null |
| /flota | ❌ null |
| /ibiza/aeropuerto | ❌ null |
| /alicante/oficina | ❌ null |

**Causa en código:** `buildMetadata()` en `lib/utils/metadata.ts` sólo genera og:image si se pasa `ogImageFallback`. Las páginas de destino y landing pages no pasan ningún valor.

**Impacto:** Al compartir cualquier URL en WhatsApp, Twitter/X, LinkedIn o Slack, no aparece ninguna imagen. El CTR en redes sociales puede caer un 30-40% respecto a posts con imagen.

**Solución:**  
1. Añadir una imagen OG por defecto en el root layout (`app/layout.tsx`) que sea el logo o una imagen del vehículo
2. Para las location pages, pasar la heroImage de Sanity cuando esté disponible
3. Ejemplo para homepage:

```typescript
// app/layout.tsx — añadir ogImage default
export const metadata: Metadata = {
  // ...
  openGraph: {
    images: [{ url: '/og-default.jpg', width: 1200, height: 630 }],
  },
};
```

---

### H-02 — JSON-LD duplicado en múltiples páginas

**Verificado en navegador:**

| URL | Schemas (incluidos duplicados) |
|-----|-------------------------------|
| /ibiza | WebSite, [Org+CarRental], **BreadcrumbList×2**, **FAQPage×2**, LocalBusiness |
| /alicante | WebSite, [Org+CarRental], **BreadcrumbList×2**, **FAQPage×2**, LocalBusiness |
| /ibiza/aeropuerto | WebSite, [Org+CarRental], **BreadcrumbList×2**, **FAQPage×2**, LocalBusiness |

**Causa:** El schema se inyecta dos veces para BreadcrumbList y FAQPage:
1. La página llama `<SchemaOrg schema={[generateBreadcrumbSchema(...), generateFAQSchema(...)]} />`
2. El componente `<Breadcrumbs>` llama internamente `<SchemaOrg schema={generateBreadcrumbSchema(...)} />`
3. El componente `<FAQSection>` llama internamente `<SchemaOrg schema={generateFAQSchema(...)} />`

**Impacto:** Google puede ignorar uno de los duplicados, elegir el menos completo, o en casos extremos, marcar el sitio por uso excesivo de structured data.

**Solución:** En las páginas que ya tienen SchemaOrg con schemas completos a nivel de página, usar la prop `schemaOrg={false}` (o similar) en los componentes hijos para evitar la inyección adicional. O eliminar la inyección automática de los componentes y dejarla solo en el nivel de página.

---

### H-03 — NEXT_PUBLIC_SITE_URL apunta a localhost:3001 (canonicals incorrectos)

**Verificado:** Todos los canonicals usan `http://localhost:3001/...` en lugar de `http://localhost:3002/...`

**Causa:** El archivo `.env` tiene `NEXT_PUBLIC_SITE_URL=http://localhost:3001`.

**Impacto en producción:** Si al desplegar en Vercel el env var no se configura correctamente, TODOS los canonicals apuntarán a `localhost:3001`, causando que Google desconsidere las páginas del sitio real.

**Solución:**
- En dev: corregir `.env` a `NEXT_PUBLIC_SITE_URL=http://localhost:3002`
- En Vercel: configurar `NEXT_PUBLIC_SITE_URL=https://hereandnow.es` (sin trailing slash)
- Añadir validación en `app/layout.tsx`: si `NEXT_PUBLIC_SITE_URL` contiene "localhost", no usar como canonical base

---

### H-04 — Pickup point pages ausentes del sitemap

**Verificado:** El sitemap NO incluye:
- `/ibiza/aeropuerto`
- `/ibiza/puerto`
- `/alicante/aeropuerto`
- `/alicante/oficina`
- `/alicante/puerto`

Estas son SEO_LANDINGs de alta intención con keywords valiosas ("alquiler coches aeropuerto ibiza").

**Solución:** Añadir en `app/sitemap.ts`:

```typescript
const pickupPointRoutes: MetadataRoute.Sitemap = [
  { url: `${SITE_URL}/ibiza/aeropuerto`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${SITE_URL}/ibiza/puerto`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${SITE_URL}/alicante/aeropuerto`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${SITE_URL}/alicante/oficina`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${SITE_URL}/alicante/puerto`, changeFrequency: 'monthly', priority: 0.7 },
];
```

---

### H-05 — Redirects del redirect-map.md no completamente implementados

**Comparación redirect-map.md vs next.config.ts:**

| URL origen | Destino esperado | Estado |
|-----------|-----------------|--------|
| `/nuestra-flota` | `/flota` | ✅ 301 |
| `/alquiler-coches-ibiza-mercedes` | `/ibiza` | ✅ 301 |
| `/alquiler-coches-alicante-mercedes` | `/alicante` | ✅ 301 |
| `/alquiler-coches-mercedes` | `/` | ✅ 301 |
| `/contacto-alquiler-coches-alicante-ibiza` | `/contacto` | ✅ 301 |
| `/contacto` | `/contacto` | ❌ **BUCLE** — mismo origen y destino |
| `/politica-privacidad` | `/privacidad` | ✅ 301 |
| `/politica-de-cookies-ue` | `/cookies` | ✅ 301 |
| `/politica-de-cancelacion-y-devolucion` | `/politica-cancelacion` | ✅ 301 |
| `/reembolso_devoluciones` | `/terminos-y-condiciones` | ✅ 301 |
| `/busqueda-coches-de-alquiler` | `/flota` | ✅ 301 |
| `/mercedes-clase-v-220d-avantgard-largo-ibiza` | `/flota/mercedes-clase-v-250d-avantgarde-largo` | ✅ 301 |
| `/hola-mundo` | `/` | ✅ 301 |
| `/brw_Pasajeros/:path*` | `/flota` | ✅ 301 |
| `/brw_tipo/:path*` | `/flota` | ✅ 301 |
| `/categoria-producto/ibiza/:path*` | `/ibiza` | ✅ 301 |
| `/categoria-producto/alicante/:path*` | `/alicante` | ✅ 301 |
| `/autor/hereandnow/` | 410 Gone | ❌ **FALTA** — devuelve 404 |
| `/category/sin-categoria/` | 410 Gone | ❌ **FALTA** — devuelve 404 |

**Solución para el bucle de /contacto:** Eliminar esa línea de `next.config.ts`.  
**Solución para los 410s:** Next.js no soporta 410 nativo en redirects. Usar middleware o un route handler que devuelva 410.

---

## MEDIUM

---

### M-01 — Title template duplica "Here & Now" en páginas de pickup

**Ejemplo verificado:** `/alicante/oficina`
```
Actual:   "Alquiler coches El Campello, Alicante — Oficina propia Here & Now | Here & Now"
Esperado: "Alquiler coches El Campello, Alicante — Oficina propia | Here & Now"
```

**Causa:** El `fallbackTitle` en `alicante/oficina/page.tsx` incluye "Here & Now" al final, y el template del root layout añade " | Here & Now" encima.

**Solución:** Eliminar "Here & Now" del `fallbackTitle` en los 5 páginas de pickup donde aparece.

---

### M-02 — Sitemap usa dominio incorrecto en dev (relacionado con H-03)

**Verificado:** Todas las URLs del sitemap usan `http://localhost:3001` en lugar del dominio real.  
**Impacto en producción:** Si `NEXT_PUBLIC_SITE_URL` no se configura en Vercel, Google recibirá un sitemap con URLs de localhost.  
**Solución:** Corregir `NEXT_PUBLIC_SITE_URL` (ver H-03).

---

### M-03 — robots.txt sitemap URL incorrecta en dev

**Verificado:**
```
Sitemap: http://localhost:3001/sitemap.xml
```
Mismo problema que M-02. En producción debe ser `https://hereandnow.es/sitemap.xml`.

---

### M-04 — Páginas WooCommerce referenciadas sin implementar

Las siguientes URLs son referenciadas en el código pero no tienen rutas Next.js:
- `/carrito` (referenciado en el footer de `contrato`)
- `/mi-cuenta` 
- `/finalizar-compra`

Estas eran páginas de WordPress/WooCommerce. En la nueva arquitectura headless, el flujo de pago no está implementado. El formulario de pre-reserva actual envía un email, pero el pago real no tiene destino.

**Impacto:** No es bloqueante para el lanzamiento si la reserva funciona por email/teléfono, pero los usuarios que busquen `/carrito` en la barra de direcciones encontrarán 404.

---

### M-05 — Schema Organization+CarRental tiene `description` vacía

**Verificado en código** (`lib/schema/index.ts`):
```javascript
name: settings.siteName ?? 'Here & Now',
```
El campo `description` del WebSite schema está vacío porque Sanity no está configurado. Google puede mostrar este campo en Knowledge Graph.

**Solución:** Añadir un fallback hardcoded para la descripción del negocio.

---

### M-06 — Duplicate content risk: schema tipos en página de layout

La página de `/` inyecta tanto:
1. Desde el site layout: `[WebSite, Organization+CarRental]`  
2. Desde la página: `[FAQPage, LocalBusiness]`

El `LocalBusiness` está siendo generado en la homepage Y en el layout global. Las coordenadas del LocalBusiness apuntan a la oficina de Alicante aunque la homepage representa el negocio en ambas ciudades. Se recomienda revisar si el LocalBusiness debe estar en el layout global o solo en la página de Alicante.

---

## LOW

---

### L-01 — Sin hreflang para la versión EN

**Verificado:** No hay `<link rel="alternate" hreflang>` en ninguna página.

La versión EN existe (implementada con CSS+JS en los componentes con `locale` prop) pero no hay URLs `/en/` separadas. Esto es una **decisión arquitectónica documentada** en `seo-current.md` y `sitemap-new.md` como "deferred to future /en/ URL structure phase".

**Acción:** Documentar explícitamente que la versión EN no es indexable en su estado actual. Si se quiere indexar EN, migrar a document-level i18n con rutas `/en/`.

---

### L-02 — Twitter Card incompleta

**Verificado en código:** `app/layout.tsx` define `twitter: { card: 'summary_large_image' }` pero no incluye `twitter:site` (cuenta de Twitter de la empresa).

**Solución:** Añadir `site: '@hereandnowibiza'` (si existe esa cuenta) al metadata de twitter.

---

### L-03 — Imágenes de hero de location sin contenido

Hasta que Sanity esté configurado y se suban las imágenes, las páginas `/ibiza` y `/alicante` muestran fondos degradados en lugar de fotos reales. Esto no afecta al SEO en producción una vez que las imágenes estén en Sanity, pero afecta a la impresión visual antes del lanzamiento.

---

### L-04 — Lazy loading declarado en todos los imgs, no prioritizados correctamente

**Verificado en código:** `SanityImage.tsx` usa `loading="lazy"` por defecto. Las imágenes hero y la imagen principal del vehículo deberían usar `priority={true}`.

En `LocationHero.tsx` y `HeroHome.tsx`, la imagen background usa `<img>` nativo con `fetchPriority="high"`, que es correcto. Pero los heros de los pickup point pages usan `<img>` con `fetchpriority="high"` correctamente.

---

### L-05 — `loading` no configurado en layout scripts

**Código:** `app/layout.tsx` tiene los `<link rel="preload">` para las fuentes pero no tiene `preload` para la hoja de estilos crítica de Tailwind. Esto es manejado automáticamente por Next.js en producción, pero en dev puede afectar al FCP.

---

## PASSED

| Check | Estado | Notas |
|-------|--------|-------|
| Títulos únicos entre páginas | ✅ | Cada página tiene title diferente |
| H1 presente en todas las páginas principales | ✅ | /, /ibiza, /alicante, /flota, todos los pickup points |
| Meta descriptions en páginas principales | ✅ | Todas tienen description |
| Robots "index, follow" en páginas públicas | ✅ | Verificado en /, /ibiza, /alicante, /flota, pickup points |
| 404 page personalizada funciona | ✅ | "Página no encontrada" con CTAs |
| sitemap.xml genera con formato correcto | ✅ | XML válido con `<urlset>` |
| robots.txt bloquea /studio/ y /api/ | ✅ | Verificado |
| robots.txt Allow: / para todo lo demás | ✅ | Verificado |
| AVIF + WebP configurados en next/image | ✅ | `formats: ['image/avif', 'image/webp']` |
| Redirects principales funcionan | ✅ | nuestra-flota→/flota, alquiler-ibiza→/ibiza, hola-mundo→/ |
| BreadcrumbList schema presente en subpáginas | ✅ | Ibiza, Alicante, pickup pages, car detail |
| FAQPage schema presente donde hay FAQs | ✅ | Homepage, Ibiza, Alicante, pickup pages |
| LocalBusiness schema con coordenadas | ✅ | /alicante/oficina tiene coordenadas exactas |
| Carrito/Mi cuenta con noindex | ✅ | (WooCommerce pages, cuando se implementen) |
| skip link para accesibilidad | ✅ | Presente en site layout |
| ARIA labels en botones solo-icono | ✅ | WhatsAppCTA, MobileNav close button |
| prefers-reduced-motion en CSS | ✅ | Declarado en globals.css |
| Canonical self-referencing en páginas principales | ✅ | Correcto (excepto dominio localhost:3001) |
| Estructura de H2 semánticamente correcta | ✅ | No se saltan niveles |
| `lang="es"` en `<html>` | ✅ | Declarado en root layout |
| `metadataBase` configurado | ✅ | En root layout |
| Redirect trailing slash en middleware | ✅ | Middleware normaliza trailing slashes |
| Product schema con `Offer` en car detail | ✅ | Generado dinámicamente desde availabilities |
| Titles no superan 60 chars | ✅ | Verificado en muestra de páginas |
| Meta descriptions no superan 160 chars | ✅ | Verificado en muestra de páginas |

---

## Resumen por prioridad

### CRITICAL (4 issues — **bloquean el lanzamiento**)

| ID | Issue | Acción |
|----|-------|--------|
| C-01 | Font files missing → 404 en preloads | Copiar ClashGrotesk a `public/fonts/` |
| C-02 | `/contacto` 404 + redirect en bucle | Crear page.tsx + eliminar redirect loop |
| C-03 | 5 páginas legales 404 (obligatorias por RGPD) | Crear 5 page.tsx con contenido básico |
| C-04 | `/guias` 404 — enlazado desde nav y sitemap | Crear page.tsx básica |

### HIGH (5 issues)

| ID | Issue | Acción |
|----|-------|--------|
| H-01 | og:image null en todas las páginas | Añadir default OG image en root layout |
| H-02 | JSON-LD duplicado (BreadcrumbList, FAQPage) | Evitar inyección doble (página + componente) |
| H-03 | Canonical usa localhost:3001 | Corregir NEXT_PUBLIC_SITE_URL en .env |
| H-04 | Pickup point pages fuera del sitemap | Añadir 5 rutas al array de staticRoutes |
| H-05 | Redirect loop /contacto→/contacto | Eliminar esa línea de next.config.ts |

### MEDIUM (6 issues)

M-01 Title duplica "Here & Now" en pickup pages · M-02/M-03 Sitemap/robots domain · M-04 WooCommerce pages sin implementar · M-05 LocalBusiness description vacía · M-06 LocalBusiness en homepage vs Alicante

### LOW (5 issues)

L-01 Sin hreflang EN (decisión arquitectónica) · L-02 twitter:site missing · L-03 Hero images pendientes de Sanity · L-04 Priority en imágenes hero · L-05 Script loading en layout

---

## Plan de acción pre-lanzamiento (orden recomendado)

```
Día 1:
  ✓ C-01: Copiar fuentes ClashGrotesk
  ✓ C-03: Crear 5 páginas legales (shells con texto del WP actual)
  ✓ C-02: Crear /contacto/page.tsx + fix redirect loop
  ✓ C-04: Crear /guias/page.tsx (básica)
  ✓ H-03: Corregir NEXT_PUBLIC_SITE_URL en .env y Vercel
  ✓ H-05: Eliminar redirect loop en next.config.ts

Día 2:
  ✓ H-01: Añadir og:image default (logo o foto del vehículo)
  ✓ H-04: Añadir pickup points al sitemap.ts
  ✓ H-02: Refactorizar inyección de schema (centralizar en página, no en componente)
  ✓ M-01: Corregir fallbackTitles con "Here & Now" duplicado

Post-lanzamiento (primeras 2 semanas):
  ✓ Configurar Sanity con datos reales (seed script disponible)
  ✓ M-04: Definir flujo de pago real (WooCommerce API o Stripe)
  ✓ L-01: Evaluar implementación de /en/ routes con hreflang
  ✓ L-02: Añadir twitter:site
  ✓ Subir imágenes de hero para Ibiza y Alicante a Sanity
```
