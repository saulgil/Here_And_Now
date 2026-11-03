# Arquitectura preparada para una futura migración a CMS

> Objetivo: documentar cómo sustituir `lib/data/*` (datos locales) por un CMS (Sanity u otro)
> o una base de datos, sin reescribir componentes ni páginas.

## Principio de diseño

Ningún componente ni página importa directamente los arrays de `data/*.ts`. Todos pasan por
la capa `lib/data/*.ts`, que expone funciones con nombres estables:

```
components/pages
      ↓
  lib/data/*        ← ÚNICO punto de acceso a los datos
      ↓
  data/*.ts          ← hoy: arrays TypeScript en memoria
```

Mañana, para introducir un CMS:

```
components/pages
      ↓
  lib/data/*        ← MISMAS funciones, mismas firmas
      ↓
  Sanity / API / Base de datos
```

Las páginas y componentes no cambian. Solo cambia la implementación interna de las funciones
de `lib/data/*.ts`.

## Funciones expuestas hoy (contrato estable)

| Archivo | Funciones |
|---|---|
| `lib/data/cars.ts` | `getAllCars()`, `getActiveCars()`, `getCarBySlug(slug)`, `getAllCarSlugs()`, `getCarAvailabilities(carId)`, `getCarsByLocation(location)` |
| `lib/data/locations.ts` | `getAllLocations()`, `getLocationBySlug(slug)`, `getAllLocationSlugs()` |
| `lib/data/pickup-points.ts` | `getPickupPointsByLocation(locationSlug)`, `getPickupPointBySlug(locationSlug, pointSlug)`, `getAllPickupPointSlugs()` |
| `lib/data/faqs.ts` | `getFaqsByCategory(category)`, `getAllFaqs()` |
| `lib/data/testimonials.ts` | `getFeaturedTestimonials()`, `getTestimonialsByLocation(locationSlug)` |
| `lib/data/site.ts` | `getSiteSettings()` |

Todas son **síncronas** hoy (datos en memoria). Al migrar a un CMS remoto pasarán a ser
`async` — eso sí obliga a tocar cada `page.tsx` que las llama (añadir `await`), pero no a
cambiar ningún componente visual ni la forma de los datos devueltos, siempre que el CMS nuevo
se mapee al mismo shape de tipos (`types/index.ts`: `Car`, `Location`, `PickupPoint`, `FAQ`,
`Testimonial`, `SiteSettings`, `SeoFields`, etc.).

## Pasos para migrar a un CMS en el futuro

1. **Definir el schema del CMS** con los mismos campos que `types/index.ts`. Si se elige
   Sanity de nuevo, los schemas históricos siguen documentados en
   `docs/architecture/content-model.md` y pueden reutilizarse casi literalmente.
2. **Reescribir la implementación interna** de cada función en `lib/data/*.ts` para que haga
   fetch al CMS en lugar de leer el array de `data/*.ts`. Ejemplo:

   ```ts
   // Antes
   export function getActiveCars(): CarListItem[] {
     return CARS.filter(...).map(toListItem);
   }

   // Después
   export async function getActiveCars(): Promise<CarListItem[]> {
     const docs = await cmsClient.fetch(ACTIVE_CARS_QUERY);
     return docs.map(toListItem);
   }
   ```

3. **Actualizar las páginas** que llaman a esas funciones para usar `await` (son Server
   Components de Next.js — ya son `async function` en su mayoría).
4. **Mantener `types/index.ts`** como la fuente de verdad del shape de datos; si el CMS
   devuelve un shape distinto, adaptarlo dentro de `lib/data/*.ts`, no en los componentes.
5. **Imágenes**: hoy son rutas locales (`/images/...`) servidas desde `public/`. Si el CMS
   aporta un CDN de imágenes, solo hay que cambiar `components/shared/SanityImage.tsx` (o
   renombrarlo) para construir la URL del CDN en lugar de usar `asset.url` directamente — el
   resto de componentes que lo consumen (`CarCard`, `CarGallery`) no necesitan cambios.
6. **Rich text**: hoy `components/shared/PortableText.tsx` renderiza un array de párrafos de
   texto plano (`string[]`). Si el CMS futuro aporta contenido enriquecido (Portable Text,
   Markdown, etc.), se adapta solo ese componente — los consumidores (`FAQSection`,
   `PickupPageTemplate`) seguirían pasándole `value` sin cambios de API.

## Qué NO hay que rehacer

- `lib/schema/index.ts` (generadores de JSON-LD) — son funciones puras que reciben objetos ya
  resueltos; no dependen de dónde vinieron los datos.
- `lib/utils/metadata.ts` (`buildMetadata`) — igual, recibe `SeoFields` ya resuelto.
- Todos los componentes visuales (`Header`, `Footer`, `CarCard`, `CarGrid`, `LocationHero`,
  `PickupPageTemplate`, etc.) — reciben props ya resueltas, agnósticas de la fuente de datos.
- URLs, redirects, sitemap, robots — dependen de los *slugs* de los datos, no de su origen.
