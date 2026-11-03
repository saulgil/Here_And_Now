# Modelo de datos — nueva web Here & Now

> Stack objetivo: Next.js · TypeScript · Tailwind · Sanity · Vercel  
> Fuente: `docs/architecture/sitemap-new.md` + `docs/content/cars-final.md`  
> Fecha: 2026-11-02  
> Estado: diseño conceptual — **no implementar todavía**

---

## Índice

1. [Principios de diseño](#principios)
2. [Diagrama de relaciones](#relaciones)
3. [Modelos de documento](#documentos)
4. [Tipos de objeto reutilizables](#objetos)
5. [Estrategia multidioma](#i18n)
6. [Herencia vs. almacenamiento directo](#herencia)
7. [Validaciones globales](#validaciones)
8. [Estructura de archivos Sanity](#estructura)

---

## 1. Principios de diseño {#principios}

- **Un documento = una entidad real.** No duplicar información entre documentos.
- **Referencias, no copias.** Marca, categoría y localización son referencias. Nunca texto inline repetido.
- **`CarAvailability` como pivot.** El precio, los extras y los puntos de recogida son propiedades de la combinación Coche × Localización, no del coche ni de la localización por separado.
- **SEO como campo embebido.** Cada documento con URL pública lleva sus propios `seoFields` — no se heredan ni comparten entre páginas distintas.
- **Multidioma a nivel de campo.** Los campos de texto visibles al usuario tienen variantes `es` / `en`. Los campos técnicos (precios, slugs, IDs) son monolingüe.
- **FAQs referenciables.** Un FAQ no pertenece a una única página — puede aparecer en la ficha del coche, en la landing de Ibiza y en la guía de reserva.

---

## 2. Diagrama de relaciones {#relaciones}

```
BRAND ──────────────── CAR
                        │  \
                        │   CATEGORY
                        │
              CAR_AVAILABILITY (pivot)
               /        │        \
        LOCATION     PRICING    PICKUP_POINT
            │
       PICKUP_POINT(s)
       
CAR ──── FAQ (relatedCars)
CAR ──── GUIDE (relatedCars)
LOCATION ── FAQ (relatedLocations)
LOCATION ── GUIDE (relatedLocations)

PAGE ── FAQ (embedded reference array)
TESTIMONIAL ── LOCATION (optional reference)
SITE_SETTINGS (singleton — sin relaciones upstream)
```

---

## 3. Modelos de documento {#documentos}

> Todos los documentos incluyen los campos de Sanity por defecto: `_id`, `_type`, `_createdAt`, `_updatedAt`, `_rev`.

---

### 3.1 `car` — Vehículo

Representa un modelo de vehículo concreto. El precio y la disponibilidad por localización se gestionan en `carAvailability`.

```typescript
{
  _type: 'car',

  // ── Identificación ──────────────────────────────────────────
  name:             LocaleString        // required | "Mercedes Clase V 220d Avantgard LARGO"
  internalId:       string              // required | "car-001" (ID conceptual del dataset)
  slug:             Slug                // required | unique | "mercedes-clase-v-avantgard-largo"
  brand:            Reference<Brand>    // required
  model:            string              // required | "Clase V 220d"
  variant:          string              //           | "Avantgard LARGO"
  year:             number              //           | 2024 | min: 2000, max: año_actual+2
  category:         Reference<CarCategory> // required

  // ── Especificaciones técnicas ────────────────────────────────
  passengers:       number              // required | 1–12
  doors:            number              // required | 2–7
  lateralDoors:     boolean             //           | puertas laterales automáticas
  transmission:     'manual' | 'automatic'  // required
  gearbox:          string              //           | "9G-TRONIC" — texto libre para detalles
  fuel:             'diesel' | 'gasolina' | 'hibrido' | 'electrico' // required
  power:            number              //           | CV — ⚠️ PENDIENTE
  luggage:          number              //           | litros — ⚠️ PENDIENTE
  colorExterior:    LocaleString        //           | "Negro Obsidiana Metalizado"
  colorInterior:    LocaleString        //           | "Cuero"
  wheels:           string              //           | "Aleación 6,5J x 16"

  // ── Condiciones de alquiler ──────────────────────────────────
  minAge:           number              // required | 26
  minLicenseYears:  number              // required | 2
  kmIncluded:       number              // required | 250
  kmExtraPrice:     number              // required | 0.50 — precio por km adicional (EUR)

  // ── Contenido editorial ──────────────────────────────────────
  shortDescription: LocaleText          // required | max 200 chars | usada en tarjetas y listados
  fullDescription:  LocaleBlockContent  // required | usada en la ficha del vehículo
  features:         LocaleString[]      // required | lista de características (mín. 3)

  // ── Imágenes ─────────────────────────────────────────────────
  mainImage:        ImageWithAlt        // required | imagen principal para OG y tarjeta
  gallery:          ImageWithAlt[]      // required | mín. 3 imágenes | máx. 20

  // ── Relaciones ───────────────────────────────────────────────
  // CarAvailability se referencia desde carAvailability.car (no al revés)
  // para evitar referencias circulares

  // ── FAQ relacionadas ─────────────────────────────────────────
  faqs:             Reference<FAQ>[]    //           | preguntas específicas de este coche

  // ── SEO ──────────────────────────────────────────────────────
  seo:              SeoFields           // required
}
```

**Notas de validación:**
- `slug` único en `car`
- `passengers` ≥ 1 y ≤ 12
- `gallery` debe tener al menos 3 elementos
- `minAge` ≥ 18
- `kmExtraPrice` > 0

---

### 3.2 `brand` — Marca

Singleton efectivo en la implementación actual (solo Mercedes-Benz), pero diseñado para escalar.

```typescript
{
  _type: 'brand',

  name:        string              // required | "Mercedes-Benz"
  slug:        Slug                // required | unique | "mercedes-benz"
  logo:        Image               // required | SVG o PNG
  logoLight:   Image               //           | versión blanca para fondos oscuros
  description: LocaleText          //           | breve descripción de la marca
}
```

---

### 3.3 `carCategory` — Categoría de vehículo

```typescript
{
  _type: 'carCategory',

  name:        LocaleString        // required | "Monovolumen"
  slug:        Slug                // required | unique | "monovolumen"
  description: LocaleText          //           | descripción para el usuario
  icon:        string              //           | nombre del icono (Lucide / custom)
  order:       number              //           | orden de visualización
}
```

**Valores iniciales:**
| slug | ES | EN |
|------|----|----|
| `monovolumen` | Monovolumen | Minivan |
| `suv` | SUV | SUV |
| `sedan` | Berlina | Sedan |

---

### 3.4 `location` — Destino

Representa los destinos geográficos (Ibiza, Alicante). Diferente de `pickupPoint` (punto de recogida específico).

```typescript
{
  _type: 'location',

  // ── Identificación ──────────────────────────────────────────
  name:           LocaleString        // required | "Ibiza"
  slug:           Slug                // required | unique | "ibiza"
  countryCode:    string              // required | "ES"
  region:         string              //           | "Islas Baleares" / "Comunidad Valenciana"

  // ── Contenido editorial ──────────────────────────────────────
  shortDescription: LocaleText        // required | usada en tarjetas de destino
  fullDescription:  LocaleBlockContent //          | contenido de la landing /ibiza/
  heroImage:        ImageWithAlt      // required | imagen de cabecera del destino

  // ── Puntos de recogida ───────────────────────────────────────
  // Los PickupPoints referencian su Location (no al revés)
  // Query: *[_type == 'pickupPoint' && location._ref == $locationId]

  // ── FAQ relacionadas ─────────────────────────────────────────
  faqs:             Reference<FAQ>[]  //           | preguntas sobre este destino

  // ── SEO ──────────────────────────────────────────────────────
  seo:              SeoFields         // required
}
```

---

### 3.5 `pickupPoint` — Punto de recogida

Punto físico donde se entrega / recoge el vehículo. Cada uno tiene su propia página SEO (`/ibiza/aeropuerto/`).

```typescript
{
  _type: 'pickupPoint',

  // ── Identificación ──────────────────────────────────────────
  name:         LocaleString        // required | "Aeropuerto de Ibiza"
  slug:         Slug                // required | unique dentro del destino | "aeropuerto"
  location:     Reference<Location> // required | destino padre

  // ── Información del punto ────────────────────────────────────
  address:       string             //           | "Carretera del Aeropuerto, s/n, 07820"
  coordinates:   Geopoint           //           | para schema LocalBusiness y mapa
  phone:         string             //           | número de contacto específico del punto
  instructions:  LocaleBlockContent //           | cómo llegar, qué buscar al llegar
  openingHours:  OpeningHours[]     //           | horario (ver objeto OpeningHours)

  // ── Contenido editorial ──────────────────────────────────────
  shortDescription: LocaleText      // required | usada en cards en /ibiza/
  fullDescription:  LocaleBlockContent //        | contenido de /ibiza/aeropuerto/
  image:            ImageWithAlt    //           | foto del punto (terminal, muelle, etc.)

  // ── SEO ──────────────────────────────────────────────────────
  seo:          SeoFields           // required | para la página /ibiza/aeropuerto/
}
```

**Regla de slug:** El slug de un pickup point es único dentro de su location. La URL completa se construye en el frontend: `/{location.slug}/{pickupPoint.slug}`.

---

### 3.6 `carAvailability` — Disponibilidad y precio por destino

**Modelo pivot clave.** Conecta un vehículo con un destino y define todo lo que varía por destino: precio, extras, puntos de recogida activos.

```typescript
{
  _type: 'carAvailability',

  // ── Relaciones (PK compuesta) ────────────────────────────────
  car:           Reference<Car>           // required
  location:      Reference<Location>      // required
  // Restricción: la combinación (car, location) debe ser única

  // ── Precio ───────────────────────────────────────────────────
  pricePerDay:   number                   // required | > 0 | EUR
  currency:      'EUR'                    // required | default 'EUR'

  // ── Puntos de recogida activos para este coche en este destino
  availablePickupPoints: Reference<PickupPoint>[] // required | mín. 1

  // ── Extras opcionales ────────────────────────────────────────
  extras: Extra[]                         //           | ver objeto Extra
  // Nota: el modelo de facturación (por día vs cargo único) está aquí,
  // no en Car, porque actualmente difiere entre Ibiza y Alicante.

  // ── Coberturas disponibles ────────────────────────────────────
  coverages: Coverage[]                   // required | mín. 1 (básica)

  // ── Publicación ──────────────────────────────────────────────
  isActive:      boolean                  // required | default: false
  // Permite preparar una disponibilidad sin publicarla
}
```

**Regla de unicidad:** No puede existir más de un `carAvailability` con el mismo `(car._ref, location._ref)`.

---

### 3.7 `faq` — Pregunta frecuente

Las FAQs son documentos independientes para poder reutilizarlas en múltiples páginas sin duplicar contenido.

```typescript
{
  _type: 'faq',

  question: LocaleString          // required
  answer:   LocaleBlockContent    // required
  category: 'general'
           | 'ibiza'
           | 'alicante'
           | 'booking'
           | 'vehicle'
           | 'coverage'
           | 'payment'            // required | para filtrado
  order:    number                //           | orden dentro de su categoría
  relatedCars:      Reference<Car>[]      //   | coches a los que aplica (vacío = todos)
  relatedLocations: Reference<Location>[] //   | destinos a los que aplica (vacío = todos)
}
```

**Uso:** Las páginas (Car, Location, Guide, Page) referencian arrays de FAQ. El frontend construye el schema `FAQPage` a partir de estos objetos.

---

### 3.8 `guide` — Guía / Blog post

Artículos de contenido para las URLs de `/guias/[slug]/`.

```typescript
{
  _type: 'guide',

  // ── Identificación ──────────────────────────────────────────
  title:       LocaleString            // required
  slug:        Slug                    // required | unique
  publishedAt: datetime                // required
  updatedAt:   datetime                //           | actualización manual
  author:      string                  //           | nombre del autor o equipo

  // ── Contenido ────────────────────────────────────────────────
  excerpt:     LocaleText              // required | max 200 chars | usada en listados
  body:        LocaleBlockContent      // required
  mainImage:   ImageWithAlt            // required
  readingTime: number                  //           | minutos (calculado en frontend)

  // ── Clasificación ────────────────────────────────────────────
  category: 'alquiler-ibiza'
           | 'alquiler-alicante'
           | 'destino-ibiza'
           | 'destino-alicante'
           | 'aeropuerto'
           | 'consejos'             // required

  // ── Relaciones contextuales ──────────────────────────────────
  relatedCars:      Reference<Car>[]      //   | coches mencionados
  relatedLocations: Reference<Location>[] //   | destinos mencionados
  faqs:             Reference<FAQ>[]      //   | FAQs para incluir al final

  // ── SEO ──────────────────────────────────────────────────────
  seo:         SeoFields               // required
}
```

---

### 3.9 `page` — Página genérica

Cubre páginas que no encajan en otros tipos: Homepage, Contacto, T&C, Privacidad, Aviso Legal, Cookies.

```typescript
{
  _type: 'page',

  // ── Identificación ──────────────────────────────────────────
  title:    LocaleString       // required
  slug:     Slug               // required | unique
  pageType: 'home'
           | 'contact'
           | 'fleet'           // /flota/
           | 'guide-hub'       // /guias/
           | 'legal'
           | 'custom'          // required

  // ── Contenido ────────────────────────────────────────────────
  // Para páginas legales: texto simple
  body:     LocaleBlockContent  //           | para páginas con contenido editorial

  // ── FAQs ─────────────────────────────────────────────────────
  faqs:     Reference<FAQ>[]    //           | para homepage u otras páginas con FAQ

  // ── Testimonios ──────────────────────────────────────────────
  testimonials: Reference<Testimonial>[] //  | para homepage

  // ── SEO ──────────────────────────────────────────────────────
  seo:      SeoFields           // required

  // ── Control de publicación ───────────────────────────────────
  isPublished: boolean          // required | default: false
}
```

**Nota:** La homepage (pageType: 'home') y la página de flota (pageType: 'fleet') usan `body` de forma limitada — su contenido real proviene de queries a `car`, `location`, etc. en el frontend.

---

### 3.10 `testimonial` — Testimonio

```typescript
{
  _type: 'testimonial',

  author:    string                  // required | "Eliseo Pérez"
  text:      LocaleText              // required
  location:  Reference<Location>     //           | destino asociado (para contexto)
  rating:    number                  //           | 1–5
  date:      date                    //           | fecha aproximada del alquiler
  featured:  boolean                 // required | default: false | para homepage
  source:    'web' | 'google' | 'tripadvisor' | 'other' // optional
}
```

---

### 3.11 `siteSettings` — Configuración global

**Singleton.** Un solo documento de este tipo existe en Sanity.

```typescript
{
  _type: 'siteSettings',

  siteName:        string              // "Here & Now"
  tagline:         LocaleString        // "Alquiler de coches Mercedes en Ibiza y Alicante"
  logo:            Image               // required
  logoLight:       Image               // versión para fondos oscuros
  favicon:         Image               // 32×32 PNG

  // ── Contacto ─────────────────────────────────────────────────
  phone:           string              // "+34625305620"
  email:           string              //  ⚠️ PENDIENTE
  whatsappUrl:     url                 //  para botón WhatsApp (pendiente de definir)

  // ── Redes sociales ───────────────────────────────────────────
  instagramUrl:    url                 // "https://www.instagram.com/hereandnowibiza/"
  threadsUrl:      url                 // "https://www.threads.net/@hereandnowibiza"
  facebookUrl:     url                 //  ⚠️ PENDIENTE (enlace roto en web actual)

  // ── Navegación ───────────────────────────────────────────────
  mainNav:         NavItem[]           // requerido
  footerNavCol1:   NavItem[]
  footerNavCol2:   NavItem[]
  footerNavLegal:  NavItem[]

  // ── SEO global ───────────────────────────────────────────────
  defaultSeo:      SeoFields           // fallback si una página no tiene SEO propio
  // Campos de defaultSeo usados como fallback:
  // - ogImage por defecto
  // - robots por defecto: "index, follow"
}
```

---

## 4. Tipos de objeto reutilizables (no documentos) {#objetos}

> Estos tipos se incrustan dentro de documentos. No son documentos independientes.

---

### `LocaleString`

```typescript
{
  _type: 'localeString',
  es: string    // required
  en: string    // required
}
```

Uso: títulos cortos, nombres, features, preguntas de FAQ.

---

### `LocaleText`

```typescript
{
  _type: 'localeText',
  es: text      // required | string multilínea sin formato
  en: text      // required
}
```

Uso: excerpts, short descriptions, instrucciones.

---

### `LocaleBlockContent`

```typescript
{
  _type: 'localeBlockContent',
  es: BlockContent[]   // required | Portable Text de Sanity
  en: BlockContent[]   // required
}
```

Uso: full descriptions de coches, guías, páginas legales, instrucciones de pickup.  
Permite: headings (H2, H3), párrafos, listas, negrita, itálica, links internos.

---

### `SeoFields`

```typescript
{
  _type: 'seoFields',
  metaTitle:       LocaleString    // required | max 60 chars | validación por idioma
  metaDescription: LocaleString    // required | max 160 chars | validación por idioma
  ogImage:         Image           //           | 1200×630 px recomendado
  canonicalUrl:    url             //           | solo si difiere de la URL actual
  robots:          string          //           | default "index, follow"
  noindex:         boolean         //           | default false | override rápido
}
```

**Validaciones:**
- `metaTitle.es` ≤ 60 chars (advertencia visual en Sanity Studio)
- `metaTitle.en` ≤ 60 chars
- `metaDescription.es` ≤ 160 chars
- `metaDescription.en` ≤ 160 chars

---

### `ImageWithAlt`

```typescript
{
  _type: 'imageWithAlt',
  asset:  Reference<SanityImageAsset>   // required
  alt:    LocaleString                  // required | texto descriptivo
  caption: LocaleString                 //           | pie de foto (opcional)
  hotspot: ImageHotspot                 //           | punto focal para recortes
  crop:    ImageCrop                    //           | área de recorte
}
```

**Regla:** `alt` es obligatorio en todas las imágenes públicas. El CMS debe bloquear la publicación si `alt.es` o `alt.en` está vacío.

---

### `Extra` (embebido en `carAvailability`)

```typescript
{
  _type: 'extra',
  name:         LocaleString         // required | "Silleta de bebé (0>9 kg)"
  price:        number               // required | 6.90
  currency:     'EUR'                // required | default 'EUR'
  pricingModel: 'one_time' | 'per_day' // required
  // Nota: actualmente Ibiza usa 'one_time', Alicante usa 'per_day' para los mismos extras.
  // Este campo resuelve la inconsistencia detectada en cars-final.md.
  maxQuantity:  number               //           | default 1 | para ej. silletas múltiples
  icon:         string               //           | nombre de icono
}
```

---

### `Coverage` (embebido en `carAvailability`)

```typescript
{
  _type: 'coverage',
  name:                 LocaleString    // required | "Cobertura básica"
  slug:                 string          // required | "basica" | "total"
  price:                number          // required | 0 para básica
  pricingModel:         'per_booking' | 'per_day'  // required
  franchiseAmount:      number          // required | 850 para Avantgarde
  depositAmountCard:    number          // required | 1500 para Avantgarde
  includesRoadside:     boolean         // required
  description:          LocaleText      //           | descripción de la cobertura
  isDefault:            boolean         // required | default: false | true para la básica
}
```

---

### `NavItem` (embebido en `siteSettings`)

```typescript
{
  _type: 'navItem',
  label:    LocaleString    // required
  href:     string          // required | "/ibiza/" | URL absoluta o relativa
  children: NavItem[]       //           | subitems para dropdown
  isExternal: boolean       //           | default false
}
```

---

### `OpeningHours` (embebido en `pickupPoint`)

```typescript
{
  _type: 'openingHours',
  days:     ('mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun')[]
  opens:    string    // "09:00"
  closes:   string    // "21:00"
  closed:   boolean   // true si ese día está cerrado
}
```

---

### `Geopoint` (embebido en `pickupPoint`)

Sanity tiene el tipo `geopoint` nativo. Usarlo directamente:

```typescript
{
  _type: 'geopoint',
  lat:  number    // 38.8729 (aeropuerto de Ibiza)
  lng:  number    // 1.3732
  alt:  number    // opcional
}
```

---

## 5. Estrategia multidioma {#i18n}

**Implementación:** Field-level i18n con tipos `Locale*`.  
**Idiomas:** `es` (base) y `en`.  
**Política:** Ambos idiomas son requeridos antes de publicar cualquier documento.

**Campos que son multidioma (`LocaleString`, `LocaleText`, `LocaleBlockContent`):**

| Campo | Modelo | Tipo |
|-------|--------|------|
| `name` | car, carCategory, location, pickupPoint | `LocaleString` |
| `shortDescription` | car, location, pickupPoint | `LocaleText` |
| `fullDescription` | car, location, pickupPoint | `LocaleBlockContent` |
| `features[]` | car | `LocaleString[]` |
| `colorExterior`, `colorInterior` | car | `LocaleString` |
| `instructions` | pickupPoint | `LocaleBlockContent` |
| `title` | guide, page | `LocaleString` |
| `excerpt` | guide | `LocaleText` |
| `body` | guide, page | `LocaleBlockContent` |
| `question` / `answer` | faq | `LocaleString` / `LocaleBlockContent` |
| `text` | testimonial | `LocaleText` |
| `metaTitle` / `metaDescription` | seoFields | `LocaleString` |
| `alt` | imageWithAlt | `LocaleString` |
| `label` | navItem | `LocaleString` |

**Campos que NO son multidioma** (técnicos, numéricos o invariables):

| Campo | Motivo |
|-------|--------|
| `slug` | Mismo slug en todas las versiones idiomáticas |
| `price`, `passengers`, `doors`, `year` | Valores numéricos |
| `phone`, `email`, `instagramUrl` | Datos de contacto |
| `isActive`, `isPublished`, `featured` | Flags internos |
| `coordinates` | Geolocalización |

**Implementación en Next.js:**  
```typescript
// Ejemplo de hook de acceso a campo multidioma
function useLocaleField<T>(field: { es: T; en: T }, locale: 'es' | 'en'): T {
  return field[locale] ?? field.es; // fallback a español
}
```

**Fase 2 (futura):** Si se implementan URLs separadas por idioma (`/en/ibiza/`), migrar de field-level a document-level i18n usando el plugin oficial `@sanity/document-internationalization`. El modelo de datos actual es compatible con esa migración.

---

## 6. Herencia vs. almacenamiento directo {#herencia}

### Lo que se HEREDA (via referencia, sin duplicar)

| Dato | Dónde vive | Cómo se accede |
|------|-----------|----------------|
| Nombre de la marca | `brand.name` | `car.brand -> brand.name` |
| Logo de la marca | `brand.logo` | `car.brand -> brand.logo` |
| Nombre de la categoría | `carCategory.name` | `car.category -> carCategory.name` |
| Nombre del destino | `location.name` | `carAvailability.location -> location.name` |
| Instrucciones del pickup point | `pickupPoint.instructions` | Query directa a `pickupPoint` |
| Coordenadas del pickup | `pickupPoint.coordinates` | Ídem |
| Texto de respuesta de FAQ | `faq.answer` | `page.faqs -> faq.answer` |

### Lo que se ALMACENA DIRECTAMENTE (sin herencia)

| Dato | Dónde vive | Por qué no se hereda |
|------|-----------|---------------------|
| Precio por día | `carAvailability.pricePerDay` | Varía por coche Y por destino |
| Extras y modelo de facturación | `carAvailability.extras[]` | Varía por destino (inconsistencia actual Ibiza vs Alicante) |
| Coberturas | `carAvailability.coverages[]` | Varía por coche (franchises distintas Clase V vs GLC) |
| Puntos de recogida activos | `carAvailability.availablePickupPoints[]` | No todos los puntos están disponibles para todos los coches |
| SEO fields | Cada documento con URL | Cada página tiene su propia meta title/description |
| Descripción del pickup point | `pickupPoint.fullDescription` | Cada punto tiene contenido único (la página /ibiza/aeropuerto/) |
| Textos legales | `page.body` | Contenido específico de cada documento legal |

### Lo que se CALCULA EN EL FRONTEND (no se almacena)

| Dato calculado | Origen del cálculo |
|---------------|-------------------|
| Precio total de la reserva | `pricePerDay × días + extras seleccionados` |
| Número de días del alquiler | `fechaEntrega - fechaRecogida` |
| Disponibilidad de coches por destino | Query: `*[_type=='carAvailability' && location._ref==$locationId && isActive==true]` |
| `readingTime` de las guías | Contar palabras del `body` |
| Schema.org JSON-LD | Construido en getStaticProps/generateMetadata |
| Breadcrumb | Construido a partir de la jerarquía de URL |

---

## 7. Validaciones globales {#validaciones}

### Reglas de publicación (bloquean la publicación en Sanity Studio)

| Modelo | Campo | Validación |
|--------|-------|-----------|
| `car` | `gallery` | Mínimo 3 imágenes |
| `car` | `features` | Mínimo 3 características |
| `car` | `slug` | Único entre todos los `car` |
| `carAvailability` | `(car, location)` | Combinación única |
| `carAvailability` | `pricePerDay` | > 0 |
| `carAvailability` | `availablePickupPoints` | Mínimo 1 |
| `carAvailability` | `coverages` | Mínimo 1, exactamente 1 con `isDefault: true` |
| `pickupPoint` | `slug` | Único dentro de su `location` |
| `seoFields` | `metaTitle.es` | ≤ 60 caracteres |
| `seoFields` | `metaTitle.en` | ≤ 60 caracteres |
| `seoFields` | `metaDescription.es` | ≤ 160 caracteres |
| `seoFields` | `seoFields.metaDescription.en` | ≤ 160 caracteres |
| `imageWithAlt` | `alt.es` | No vacío |
| `imageWithAlt` | `alt.en` | No vacío |
| `localeString` | `es` | No vacío |
| `localeString` | `en` | No vacío si `isPublished: true` |
| `guide` | `slug` | Único entre todos los `guide` |
| `page` | `slug` | Único entre todos los `page` |

### Advertencias (no bloquean pero alertan en Studio)

| Modelo | Campo | Advertencia |
|--------|-------|------------|
| `car` | `power` | "Potencia no especificada — completar antes de publicar" |
| `car` | `luggage` | "Capacidad de maletero no especificada" |
| `carAvailability` | `extras` | "Sin extras configurados — revisar si es correcto" |
| `guide` | `updatedAt` | "Sin fecha de actualización — considera añadirla para SEO" |

---

## 8. Estructura de archivos Sanity {#estructura}

Propuesta de organización del esquema en `sanity/schemas/`:

```
sanity/
└── schemas/
    ├── index.ts                 # exporta todos los esquemas
    │
    ├── documents/
    │   ├── car.ts               # document: car
    │   ├── brand.ts             # document: brand
    │   ├── carCategory.ts       # document: carCategory
    │   ├── location.ts          # document: location
    │   ├── pickupPoint.ts       # document: pickupPoint
    │   ├── carAvailability.ts   # document: carAvailability
    │   ├── faq.ts               # document: faq
    │   ├── guide.ts             # document: guide
    │   ├── page.ts              # document: page
    │   ├── testimonial.ts       # document: testimonial
    │   └── siteSettings.ts      # document: siteSettings (singleton)
    │
    └── objects/
        ├── localeString.ts      # object: localeString
        ├── localeText.ts        # object: localeText
        ├── localeBlockContent.ts # object: localeBlockContent
        ├── seoFields.ts         # object: seoFields
        ├── imageWithAlt.ts      # object: imageWithAlt
        ├── extra.ts             # object: extra
        ├── coverage.ts          # object: coverage
        ├── navItem.ts           # object: navItem
        ├── openingHours.ts      # object: openingHours
        └── geopoint.ts          # (nativo de Sanity — solo documentar)
```

---

## Resumen de modelos

| Modelo | Tipo | Documentos iniciales | Multidioma |
|--------|------|---------------------|-----------|
| `car` | document | 1 (activo) + 2 en borrador | ✅ |
| `brand` | document | 1 (Mercedes-Benz) | Parcial |
| `carCategory` | document | 2–3 (Monovolumen, SUV) | ✅ |
| `location` | document | 2 (Ibiza, Alicante) | ✅ |
| `pickupPoint` | document | 5 (2 Ibiza + 3 Alicante) | ✅ |
| `carAvailability` | document | 2 (Clase V × Ibiza, Clase V × Alicante) | — |
| `faq` | document | ~15–20 iniciales | ✅ |
| `guide` | document | 6 iniciales | ✅ |
| `page` | document | ~8 (home, contacto, 5 legales, flota) | ✅ |
| `testimonial` | document | 3 actuales + nuevos | ✅ |
| `siteSettings` | singleton | 1 | Parcial |
| `localeString` | object | — | ✅ |
| `localeText` | object | — | ✅ |
| `localeBlockContent` | object | — | ✅ |
| `seoFields` | object | — | ✅ |
| `imageWithAlt` | object | — | ✅ |
| `extra` | object | 4 tipos (silletas, conductor) | ✅ |
| `coverage` | object | 2 (básica, total) | ✅ |
| `navItem` | object | — | ✅ |
