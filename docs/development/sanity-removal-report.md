# Informe de eliminación de Sanity — Here & Now

> Fecha: 2026-11-03 (cierre de la refactorización)
> Resultado: Sanity eliminado por completo. La aplicación funciona con una capa de datos local
> TypeScript (`data/` + `lib/data/`), sin cambios de URLs, SEO, diseño ni textos visibles.
> Este documento refleja el **estado definitivo** tras todas las fases de la migración
> (eliminación de Sanity, limpieza de nombres heredados, limpieza de `.gitignore`, revisión de
> flota con 2 vehículos confirmados, verificación final de TypeScript y build).

---

## ARCHITECTURE

**Origen actual de los datos:** 100% local, en memoria, dentro del repositorio. No hay ningún
CMS, base de datos ni servicio externo de contenido.

```
data/                      ← datos planos editables a mano (fuente de verdad)
├── cars.ts                (2 vehículos confirmados)
├── locations.ts           (Ibiza, Alicante)
├── pickup-points.ts       (5 puntos de recogida)
├── faqs.ts
├── testimonials.ts
├── site.ts
└── promotions.ts          (vacío, estructura lista)

lib/data/                  ← ÚNICO punto que páginas/componentes importan
├── cars.ts        → getAllCars, getActiveCars, getCarBySlug, getAllCarSlugs,
│                     getCarAvailabilities, getCarsByLocation
├── locations.ts   → getAllLocations, getLocationBySlug, getAllLocationSlugs
├── pickup-points.ts → getPickupPointsByLocation, getPickupPointBySlug, getAllPickupPointSlugs
├── faqs.ts         → getFaqsByCategory, getAllFaqs
├── testimonials.ts → getFeaturedTestimonials, getTestimonialsByLocation
├── site.ts         → getSiteSettings
└── promotions.ts   → getAllPromotions, getActivePromotions, getPromotionByCode
```

**Regla arquitectónica aplicada y verificada:** ningún `page.tsx` ni componente importa
`data/*.ts` directamente — todos consumen `lib/data/*.ts`. Se comprobó explícitamente (búsqueda
en todo el código) que no queda ningún import directo a `data/promotions` ni a ningún otro
archivo de `data/`.

**Preparación para futuro CMS:** documentada en `docs/architecture/future-cms.md`. El contrato de
funciones de `lib/data/*.ts` (nombres y shape de retorno, tipados contra `types/index.ts`) es lo
único que debe mantenerse estable si en el futuro se conecta un CMS o base de datos; hoy esas
funciones son síncronas (arrays en memoria), y pasar a asíncronas (`async`/`await` + fetch remoto)
es el único cambio estructural previsto, sin tocar componentes visuales.

---

## SANITY

**Confirmado: eliminado por completo.** Verificación final (grep en todo el código ejecutable —
`app/`, `components/`, `lib/`, `data/`, `types/`, `package.json`): **cero** referencias a
`sanity`, `groq`, `createClient`, `urlFor`, `next-sanity`, `@sanity/*`, `@portabletext/*`,
`dataset`, `projectId`, `apiVersion`.

Eliminado en el código:
- Carpeta `sanity/` completa (Studio config, 11 schemas documento, 9 schemas objeto).
- Ruta `/studio` (`app/studio/[[...tool]]/page.tsx`).
- Webhook de revalidación (`app/api/revalidate/route.ts`) y `SANITY_WEBHOOK_SECRET`.
- Carpeta `lib/sanity/` (`client.ts`, `fetch.ts`, `image.ts`, `queries.ts`).
- `types/sanity.ts` (sustituido por `types/index.ts`).
- `scripts/seed-sanity.ts`.
- Dependencias npm: `@portabletext/react`, `@sanity/client`, `@sanity/image-url`,
  `@sanity/vision`, `next-sanity`, `sanity`, más las devDependencies auxiliares `dotenv`, `tsx`.
  `package.json` actual solo conserva dependencias de aplicación (`next`, `react`, `react-dom`,
  `lucide-react`, `focus-trap-react`, `zod`) y de build (`tailwindcss`, `eslint`, `typescript`).
- Variables de entorno `NEXT_PUBLIC_SANITY_*`, `SANITY_API_TOKEN`, `SANITY_WEBHOOK_SECRET`
  (retiradas de `.env`, `env.example`, `env.placeholder`).
- `images.remotePatterns` de `cdn.sanity.io` en `next.config.ts`.
- `/studio/` del `disallow` de `robots.ts` y del `matcher` de `middleware.ts`.

Nombres heredados de Sanity también renombrados a nombres neutros, sin cambiar comportamiento:
- `components/shared/SanityImage.tsx` → `components/shared/ContentImage.tsx` (`SanityImage` →
  `ContentImage`).
- `components/shared/PortableText.tsx` → `components/shared/RichText.tsx` (`PortableText` →
  `RichText`), ahora un render simple de párrafos (`string[]`), sin motor de rich text.

Higiene de repositorio: `.gitignore` actualizado para excluir `node_modules/`, `.next/`,
`.graphify/`, `.env`/`.env.local`/`.env.*.local`, `*.tsbuildinfo`, `.DS_Store`. `.env`,
`tsconfig.tsbuildinfo` y `.next/` fueron retirados del índice de git (`git rm --cached`) sin
borrarse del disco; `env.example`/`env.placeholder` permanecen versionados.

---

## FLEET

**Coches confirmados (`CONFIRMED`) — 2, cada uno con disponibilidad en un único destino:**

| Vehículo | `_id` | Slug | Destino | Precio |
|---|---|---|---|---|
| Mercedes Clase V 220D Avantgard Largo | `car-mercedes-clase-v-avantgard-largo` | `mercedes-clase-v-avantgard-largo` | Ibiza | 130€/día |
| Mercedes Clase V 220D Largo | `car-mercedes-clase-v-largo` | `mercedes-clase-v-largo` | Alicante | 140€/día |

Verificado funcionalmente que `getCarsByLocation('ibiza')` devuelve únicamente el primero y
`getCarsByLocation('alicante')` únicamente el segundo; `getAllCars()`, `getActiveCars()`,
`getCarBySlug()` y `getAllCarSlugs()` operan correctamente sobre ambos.

**Nota de integridad conservada:** ambas denominaciones proceden literalmente de los nombres de
producto en WordPress/WooCommerce. Existe la posibilidad real de que ambos vehículos sean
exactamente el mismo modelo físico, nombrado de forma distinta por destino en el sitio antiguo —
se mantienen como dos entradas separadas por decisión explícita del negocio, sin asumir una
equivalencia no confirmada. Las especificaciones técnicas obligatorias del vehículo de Alicante
(pasajeros, puertas, transmisión, combustible, edad mínima, carnet, km incluidos) se heredan del
de Ibiza como mejor dato disponible y están marcadas en `data/cars.ts` como
`INHERITED / PENDING confirmation for this variant` — no se ha inventado equipamiento,
descripción larga ni imagen para el vehículo de Alicante.

**Coches pendientes (no migrados, sin evidencia suficiente):**

| Vehículo | Clasificación | Motivo |
|---|---|---|
| Mercedes GLC 220D 4MATIC | `POSSIBLE` | Solo producto WooCommerce en borrador (Alicante, 275€/día, nunca publicado); sin especificaciones ni confirmación de negocio |
| Mercedes GLC 220D 4MATIC Coupé AMG | `INCOMPLETE` | Solo mencionado en un popup de reserva antiguo; sin página, sin producto, sin precio, sin ninguna confirmación |

Detalle completo, fuentes y campos pendientes por vehículo en `docs/content/fleet-review.md`.

---

## SEO

Infraestructura SEO conservada exactamente igual que antes de la migración; solo cambió la
fuente de datos:

- **Sitemap** (`app/sitemap.ts`): generado dinámicamente desde `lib/data/*` (coches activos,
  localizaciones, puntos de recogida). Se depuraron las URLs que no correspondían a páginas
  reales existentes bajo `app/` (`/guias`, `/contacto`, `/terminos-y-condiciones`,
  `/politica-cancelacion`, `/privacidad`, `/aviso-legal`, `/cookies`) — ninguna de ellas tiene
  `page.tsx`, por lo que se eliminaron del sitemap para no generar URLs 404. Rutas estáticas
  actuales: `/` y `/flota`. Rutas dinámicas: 2 localizaciones, 5 puntos de recogida, 2 coches.
- **Metadata**: `generateMetadata`/`metadata` estático en todas las páginas, usando el mismo
  `buildMetadata()` de `lib/utils/metadata.ts` (adaptado para resolver imágenes locales en vez
  de `urlFor` de Sanity). Canonical, Open Graph y Twitter cards sin cambios de comportamiento.
- **JSON-LD**: `Organization`, `WebSite`, `LocalBusiness`, `Product`, `FAQPage`, `BreadcrumbList`
  generados por las mismas funciones puras de `lib/schema/index.ts`, adaptadas únicamente al
  nuevo shape de datos (`generateFAQSchema` ya no depende de Portable Text, `generateCarProductSchema`
  recibe `location` como string) — el JSON-LD resultante es equivalente.
- **Canonical**: sin cambios, calculado siempre a partir de `NEXT_PUBLIC_SITE_URL` + path.
- **Breadcrumbs**: `components/shared/Breadcrumbs.tsx` sin cambios; siguen generando tanto el
  `BreadcrumbList` JSON-LD como la UI visual en todas las páginas.
- **Robots** (`app/robots.ts`): mismo comportamiento, solo se retiró `/studio/` de `disallow`
  porque la ruta ya no existe.
- Las URLs públicas y los 20+ redirects 301 de `next.config.ts` permanecen intactos; se añadió
  únicamente la corrección del redirect `/mercedes-clase-v-220d-largo` para que ahora apunte a la
  ficha real `/flota/mercedes-clase-v-largo` (antes apuntaba genéricamente a `/flota` porque el
  vehículo no existía en el código).

---

## QUALITY

```
npm run type-check   → 0 errores
npm run build        → ✓ Compiled successfully — 16 rutas generadas (SSG + estáticas)
```

Rutas generadas en el último build verificado: `/`, `/flota`, `/flota/mercedes-clase-v-avantgard-largo`
(SSG), `/flota/mercedes-clase-v-largo` (SSG), `/ibiza`, `/ibiza/aeropuerto`, `/ibiza/puerto`,
`/alicante`, `/alicante/aeropuerto`, `/alicante/oficina`, `/alicante/puerto`, `/robots.txt`,
`/sitemap.xml`, `/_not-found`. Build limpio, sin warnings de tipos ni de generación estática.

---

## PENDING BUSINESS INFORMATION

Información que todavía debe confirmar el propietario del negocio antes de poder considerarse
definitiva:

1. **Identidad real de los dos vehículos confirmados.** Confirmar si "Mercedes Clase V 220D
   Avantgard Largo" (Ibiza) y "Mercedes Clase V 220D Largo" (Alicante) son el mismo modelo físico
   o dos vehículos distintos de la flota, y el nombre comercial definitivo de cada uno.
2. **Especificaciones técnicas propias del vehículo de Alicante** (`car-mercedes-clase-v-largo`):
   hoy heredadas del vehículo de Ibiza como aproximación, no verificadas de forma independiente
   (pasajeros, puertas, transmisión, combustible, edad mínima, carnet, km incluidos, extras y
   coberturas).
3. **Equipamiento, descripción comercial y fotografías del vehículo de Alicante** — no existe
   ninguna, ni siquiera un placeholder (a diferencia del de Ibiza).
4. **Fotografías reales del vehículo de Ibiza** — usa un placeholder SVG genérico
   (`public/images/cars/placeholder-mercedes-clase-v.svg`); nunca hubo fotos reales en el repo ni
   subidas a Sanity.
5. **Potencia (CV) y capacidad de maletero** del vehículo de Ibiza — nunca publicados en la web
   original.
6. **Fianza de la cobertura total** (`depositAmountCard`) de ambos vehículos — no confirmada;
   puesta a `0` (Ibiza) o inferida parcialmente (Alicante, franquicia 650€ del copy de coberturas
   general, sin depósito confirmado).
7. **Mercedes GLC 220D 4MATIC y GLC 220D 4MATIC Coupé AMG** — si el negocio decide incorporarlos
   a la flota real, requieren: decisión sobre si son el mismo vehículo o dos modelos distintos,
   especificaciones completas, precio definitivo y disponibilidad por destino, fotografías.
8. **Email de contacto** (`data/site.ts` → `SiteSettings.email`) — no definido; nunca existió en
   la web pública original.
9. **Códigos promocionales** (`data/promotions.ts`) — array vacío; los cupones WooCommerce
   antiguos (`HERE20`, `HERE2025`, etc.) no se migraron por falta de certeza sobre vigencia y
   condiciones exactas.

Todo lo anterior está documentado con mayor detalle y trazabilidad de fuentes en
`docs/content/fleet-review.md` y `docs/CONTENT_MANAGEMENT.md`.
