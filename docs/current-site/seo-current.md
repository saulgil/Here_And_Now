# Análisis SEO actual — hereandnowibiza.com

> Fuente: análisis con Playwright CLI. Datos extraídos directamente del DOM de la web real.  
> Fecha de análisis: 2026-11-02  
> Herramienta SEO detectada en el sitio: **Yoast SEO** (WordPress)  
> Este documento describe el estado actual. No contiene propuestas para la nueva web.

---

## Estructura del documento

1. [HECHOS OBSERVADOS](#1-hechos-observados)
2. [POSIBLES PROBLEMAS](#2-posibles-problemas)
3. [INFORMACIÓN NO VERIFICADA](#3-información-no-verificada)

---

## 1. HECHOS OBSERVADOS

---

### 1.1 robots.txt

```
User-agent: *
Disallow: /wp-content/uploads/wc-logs/
Disallow: /wp-content/uploads/woocommerce_transient_files/
Disallow: /wp-content/uploads/woocommerce_uploads/
Disallow: /*?add-to-cart=
Disallow: /*?*add-to-cart=
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php

# START YOAST BLOCK
User-agent: *
Disallow:

Sitemap: https://hereandnowibiza.com/sitemap_index.xml
# END YOAST BLOCK
```

**Observaciones:**
- El bloque Yoast añade `Disallow:` vacío (sin valor), lo que significa que no bloquea ninguna ruta adicional para todos los robots.
- La línea `Disallow: /*?add-to-cart=` bloquea correctamente las URLs de "añadir al carrito" con parámetro GET.
- `/wp-admin/admin-ajax.php` está explícitamente permitido (necesario para funcionalidades AJAX de WooCommerce).
- El sitemap se declara correctamente.

---

### 1.2 Sitemap XML

| Sub-sitemap | URLs | Última modificación |
|-------------|------|---------------------|
| page-sitemap.xml | 18 URLs | 2026-10-16 |
| product-sitemap.xml | 2 URLs | 2026-10-29 |
| post-sitemap.xml | 1 URL | 2024-05-21 |
| category-sitemap.xml | 1 URL | 2024-05-21 |
| brw_Pasajeros-sitemap.xml | 3 URLs | 2026-10-29 |
| brw_tipo-sitemap.xml | 2 URLs | 2026-10-29 |
| product_cat-sitemap.xml | 9 URLs | 2026-10-29 |
| author-sitemap.xml | 1 URL | 2026-08-15 |
| **TOTAL** | **37 URLs indexadas** | — |

---

### 1.3 Meta robots por página

| URL | Meta robots |
|-----|-------------|
| / | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /nuestra-flota/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /alquiler-coches-ibiza-mercedes/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /alquiler-coches-alicante-mercedes/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /alquiler-coches-mercedes/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /producto/mercedes-clase-v-220d-avantgard-largo-ibiza/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /producto/mercedes-clase-v-220d-avantgard-largo/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /contacto-alquiler-coches-alicante-ibiza/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /terminos-y-condiciones/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /politica-privacidad/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /aviso-legal/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /politica-de-cancelacion-y-devolucion/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /mercedes-clase-v-220d-largo/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /mercedes-glc-220d-4matic/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /mercedes-clase-v-220d-avantgard-largo-ibiza/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /brw_Pasajeros/5/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /brw_tipo/furgoneta/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /categoria-producto/ibiza/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /busqueda-coches-de-alquiler/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /hola-mundo/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /author/hereandnow/ | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |
| /mi-cuenta/ | **`noindex, follow`** |
| /carrito/ | **`noindex, follow`** |
| /?s=mercedes (búsqueda) | **`noindex, follow`** |

---

### 1.4 Title, meta description, H1 y canonicals por página

#### Homepage (/)

| Campo | Valor |
|-------|-------|
| Title | `Here & Now - Alquiler de vehículos de alta gama` (47 chars) |
| Meta description | `Descubre nuestro servicio de alquiler de vehículos de alta gama en Ibiza y Alicante. Tu próximo viaje merece lo mejor.` (118 chars) |
| H1 | `ALQUILER DE VEHÍCULOS MERCEDES` |
| Canonical | https://hereandnowibiza.com/ |
| Robots | index, follow |

#### /nuestra-flota/

| Campo | Valor |
|-------|-------|
| Title | `Nuestra flota - Here & Now` (27 chars) |
| Meta description | `Elegimos exclusivamente vehículos Mercedes para tu viaje, conoce toda nuestra flota y elige la mejor opción para ti.` (117 chars) |
| **H1** | **AUSENTE** |
| Canonical | https://hereandnowibiza.com/nuestra-flota/ |
| Robots | index, follow |

#### /alquiler-coches-ibiza-mercedes/

| Campo | Valor |
|-------|-------|
| Title | `Here & Now - Alquiler de vehículos en Ibiza y Alicante` (55 chars) |
| Meta description | `Te proporcionamos la mejor manera de explorar Ibiza con nuestros vehículos de lujo en alquiler ¡Reserva ahora!` (111 chars) |
| H1 | `Alquiler de coches Mercedes en Ibiza` |
| Canonical | https://hereandnowibiza.com/alquiler-coches-ibiza-mercedes/ |
| Robots | index, follow |

#### /alquiler-coches-alicante-mercedes/

| Campo | Valor |
|-------|-------|
| Title | `Here & Now - Alquiler de vehículos en Ibiza y Alicante` (55 chars) — **IDÉNTICO al de Ibiza** |
| Meta description | `Descubre la mejor manera de explorar Alicante con nuestros Mercedes en alquiler ¡Contacta con nosotros para más información!` (124 chars) |
| H1 | `Alquiler de coches Mercedes en Alicante` |
| Canonical | https://hereandnowibiza.com/alquiler-coches-alicante-mercedes/ |
| Robots | index, follow |

#### /alquiler-coches-mercedes/

| Campo | Valor |
|-------|-------|
| Title | `Here & Now - Alquiler de vehículos en Ibiza y Alicante` (55 chars) — **IDÉNTICO al de Ibiza y Alicante** |
| Meta description | `Descubre la mejor manera de viajar con nuestros Mercedes en alquiler ¡Contacta con nosotros para más información!` (113 chars) |
| H1 | `Alquiler de coches Mercedes` |
| Canonical | https://hereandnowibiza.com/alquiler-coches-mercedes/ |
| Robots | index, follow |

#### /producto/mercedes-clase-v-220d-avantgard-largo-ibiza/ (WooCommerce)

| Campo | Valor |
|-------|-------|
| Title | `Mercedes Clase V 220d Avantgard LARGO - Here & Now` (51 chars) |
| **Meta description** | **AUSENTE** |
| **H1** | **AUSENTE** |
| Canonical | https://hereandnowibiza.com/producto/mercedes-clase-v-220d-avantgard-largo-ibiza/ |
| Robots | index, follow |

#### /producto/mercedes-clase-v-220d-avantgard-largo/ (WooCommerce)

| Campo | Valor |
|-------|-------|
| Title | `Mercedes Clase V 220d Avantgard LARGO - Here & Now` (51 chars) — **IDÉNTICO al de Ibiza** |
| **Meta description** | **AUSENTE** |
| **H1** | **AUSENTE** |
| Canonical | https://hereandnowibiza.com/producto/mercedes-clase-v-220d-avantgard-largo/ |
| Robots | index, follow |

#### /contacto-alquiler-coches-alicante-ibiza/

| Campo | Valor |
|-------|-------|
| Title | `Contacto - Here & Now` (22 chars) |
| Meta description | `Ponte en contacto con nosotros para conocer la disponibilidad de nuestros coches y toda la información relativa al alquiler en Alicante e Ibiza.` (144 chars) |
| **H1** | **AUSENTE** |
| Canonical | https://hereandnowibiza.com/contacto-alquiler-coches-alicante-ibiza/ |
| Robots | index, follow |

#### /mercedes-clase-v-220d-avantgard-largo-ibiza/ (informativa)

| Campo | Valor |
|-------|-------|
| Title | `Mercedes Clase V 220D Avantgard Largo - Here & Now` |
| **Meta description** | **AUSENTE** |
| **H1** | **AUSENTE** |
| Canonical | https://hereandnowibiza.com/mercedes-clase-v-220d-avantgard-largo-ibiza/ |
| Robots | index, follow |

#### /mercedes-clase-v-220d-largo/ (página vacía)

| Campo | Valor |
|-------|-------|
| Title | `Mercedes Clase V 220D Largo - Here & Now` |
| **Meta description** | **AUSENTE** |
| **H1** | **AUSENTE** |
| Canonical | https://hereandnowibiza.com/mercedes-clase-v-220d-largo/ |
| Robots | **index, follow** (¡página sin contenido!) |

#### /mercedes-glc-220d-4matic/ (página vacía)

| Campo | Valor |
|-------|-------|
| Title | `Mercedes GLC 220D 4MATIC - Here & Now` |
| **Meta description** | **AUSENTE** |
| **H1** | **AUSENTE** |
| Canonical | https://hereandnowibiza.com/mercedes-glc-220d-4matic/ |
| Robots | **index, follow** (¡página sin contenido!) |

#### /terminos-y-condiciones/

| Campo | Valor |
|-------|-------|
| Title | `Términos y Condiciones - Here & Now` |
| **Meta description** | **AUSENTE** |
| **H1** | **AUSENTE** (H1 es en realidad un H2 por marcado incorrecto — "Términos y Condiciones" está en `<h1>` según el snapshot anterior) |
| Robots | index, follow |

#### /brw_Pasajeros/5/

| Campo | Valor |
|-------|-------|
| Title | `5 archivos - Here & Now` |
| Meta description | AUSENTE |
| H1 | `5` (solo el número) |
| Canonical | https://hereandnowibiza.com/brw_Pasajeros/5/ |
| Robots | index, follow |

#### /brw_tipo/furgoneta/

| Campo | Valor |
|-------|-------|
| Title | `Furgoneta archivos - Here & Now` |
| Meta description | AUSENTE |
| H1 | `Furgoneta` |
| Canonical | https://hereandnowibiza.com/brw_tipo/furgoneta/ |
| Robots | index, follow |

#### /categoria-producto/ibiza/

| Campo | Valor |
|-------|-------|
| Title | `Ibiza archivos - Here & Now` |
| Meta description | AUSENTE |
| H1 | `Ibiza` |
| Canonical | https://hereandnowibiza.com/categoria-producto/ibiza/ |
| Robots | index, follow |

#### /busqueda-coches-de-alquiler/

| Campo | Valor |
|-------|-------|
| Title | `Busqueda Coches de alquiler - Here & Now` (sin acento: "Busqueda" no "Búsqueda") |
| Meta description | AUSENTE |
| **H1** | **AUSENTE** |
| Robots | index, follow |

#### /hola-mundo/ (post WordPress)

| Campo | Valor |
|-------|-------|
| Title | `¡Hola, mundo! - Here & Now` |
| Meta description | AUSENTE |
| **H1** | **AUSENTE** |
| Robots | **index, follow** |
| Contenido | 89 palabras aproximadas (header + footer + texto mínimo) |

#### /mi-cuenta/ y /carrito/

| Campo | Valor |
|-------|-------|
| Meta robots | **noindex, follow** (correcto para páginas de usuario/comercio) |

#### /?s=términos (búsqueda interna)

| Campo | Valor |
|-------|-------|
| Meta robots | **noindex, follow** (correcto) |
| Canonical | AUSENTE (correcto para búsqueda) |

---

### 1.5 Canonicals verificadas

| URL accedida | Canonical apunta a |
|-------------|-------------------|
| https://hereandnowibiza.com/ | https://hereandnowibiza.com/ ✓ |
| https://hereandnowibiza.com/?add-to-cart=123 | https://hereandnowibiza.com/ ✓ (correcto, parámetro excluido) |
| /nuestra-flota/ | /nuestra-flota/ ✓ |
| /alquiler-coches-ibiza-mercedes/ | /alquiler-coches-ibiza-mercedes/ ✓ |
| /alquiler-coches-alicante-mercedes/ | /alquiler-coches-alicante-mercedes/ ✓ |
| /producto/.../ibiza/ | /producto/.../ibiza/ ✓ |
| /producto/.../ | /producto/.../ ✓ |
| /contacto (redirect) | /contacto-alquiler-coches-alicante-ibiza/ ✓ |

---

### 1.6 Hreflang

**No existe ningún atributo `hreflang` en ninguna página.** La web tiene versión ES/EN implementada con JavaScript (Google Translate plugin) sin URLs separadas. No hay etiquetas `<link rel="alternate" hreflang="...">`.

---

### 1.7 Open Graph y Twitter Cards

#### Homepage (datos representativos — igual estructura en todas las páginas):

| Propiedad | Valor |
|-----------|-------|
| og:locale | `es_ES` |
| og:type | `website` |
| og:title | `Here & Now - Alquiler de vehículos de alta gama` |
| og:description | `Descubre nuestro servicio de alquiler de vehículos de alta gama en Ibiza y Alicante. Tu próximo viaje merece lo mejor.` |
| og:url | `https://hereandnowibiza.com/` |
| og:site_name | `Here & Now` |
| **og:image** | **AUSENTE en homepage** |
| twitter:card | `summary_large_image` |
| **twitter:image** | **AUSENTE en homepage** |
| **twitter:site** | **AUSENTE** |
| **twitter:creator** | **AUSENTE** |

#### Páginas de producto WooCommerce (tienen og:image):

| Propiedad | Valor |
|-----------|-------|
| og:title | `Mercedes Clase V 220d Avantgard LARGO - Here & Now` |
| og:image | https://hereandnowibiza.com/wp-content/uploads/2024/07/3125-MSN-1_SIN-MATRICULA-scaled.jpg ✓ |

---

### 1.8 Schema.org / JSON-LD

#### Homepage — tipos de schema presentes:

| @type | @id | Descripción |
|-------|-----|-------------|
| WebPage | #https://hereandnowibiza.com/ | Página web |
| ImageObject | #primaryimage | Apunta al logo SVG (no a imagen de coche) |
| BreadcrumbList | #breadcrumb | Solo tiene posición 1 "Portada" |
| WebSite | #website | `description` vacío |
| Organization | #organization | Nombre: "Here & Now", logo: logo SVG |

**Tipos ausentes:** `LocalBusiness`, `CarRental`, `Product`, `Offer`, `PriceSpecification`, `FAQPage`, `BreadcrumbList` completo.

#### Páginas de producto WooCommerce:

| @type | Observación |
|-------|------------|
| WebPage | Presente ✓ |
| ImageObject | Apunta a foto del vehículo ✓ |
| BreadcrumbList | 2 posiciones: "Portada" y nombre del vehículo (sin categoría intermedia) |
| WebSite | Presente ✓ |
| Organization | Presente ✓ |
| **Product** | **AUSENTE** — siendo páginas de producto WooCommerce, no generan schema Product |
| **Offer** | **AUSENTE** — sin precio en structured data |

---

### 1.9 Breadcrumbs

**No se detectó breadcrumb HTML visible** en ninguna página (ni elemento DOM `.breadcrumb`, `.yoast-breadcrumb`, ni `nav[aria-label*="bread"]`).

El schema BreadcrumbList en JSON-LD sí existe pero es mínimo:
- Homepage: solo posición 1 "Portada"
- Productos: "Portada" → "Nombre del vehículo" (sin categoría intermedia)

---

### 1.10 Estructura de encabezados (H1, H2, H3)

| Página | H1 | H2 notable | Observación |
|--------|-----|------------|-------------|
| / | `ALQUILER DE VEHÍCULOS MERCEDES` | "En Ibiza y alicante", "Nuestros valores"... | H1 presente ✓ |
| /nuestra-flota/ | **AUSENTE** | "Nuestra flota", "Reservar"... | H1 falta |
| /alquiler-coches-ibiza-mercedes/ | `Alquiler de coches Mercedes en Ibiza` | "Formulario de búsqueda", vehículo (x2)... | H1 presente ✓, H2 duplicado del vehículo |
| /alquiler-coches-alicante-mercedes/ | `Alquiler de coches Mercedes en Alicante` | "Formulario de búsqueda", vehículo (x2)... | H1 presente ✓ |
| /producto/.../ibiza/ | **AUSENTE** | "Especificaciones generales", vehículo | H1 falta (el nombre del vehículo es H2) |
| /producto/.../ | **AUSENTE** | Igual que Ibiza | H1 falta |
| /contacto-alquiler-coches-alicante-ibiza/ | **AUSENTE** | "DEJA TU EMAIL", "Contacto" | H1 falta |
| /mercedes-clase-v-220d-avantgard-largo-ibiza/ | **AUSENTE** | "Características técnicas", "Reservar"... | H1 falta |
| /mercedes-clase-v-220d-largo/ | **AUSENTE** | Solo los del footer | H1 falta, página vacía |
| /mercedes-glc-220d-4matic/ | **AUSENTE** | Solo los del footer | H1 falta, página vacía |
| /terminos-y-condiciones/ | `Términos y Condiciones` (en H1) | 20+ secciones numeradas | H1 presente según snapshot anterior |
| /brw_Pasajeros/5/ | `5` | — | H1 = número, sin contexto |
| /brw_tipo/furgoneta/ | `Furgoneta` | — | H1 = categoría |
| /categoria-producto/ibiza/ | `Ibiza` | — | H1 = nombre ciudad |
| /hola-mundo/ | **AUSENTE** | — | Página residual WP |

---

### 1.11 Conteo de palabras aproximado

| Página | Palabras (aprox.) | Observación |
|--------|-------------------|-------------|
| / | 929 | Incluye header + footer |
| /nuestra-flota/ | 151 | Muy bajo |
| /alquiler-coches-ibiza-mercedes/ | 410 | Aceptable |
| /alquiler-coches-alicante-mercedes/ | 363 | Aceptable |
| /alquiler-coches-mercedes/ | 280 | Bajo |
| /producto/.../ibiza/ | 411 | Incluye texto del formulario |
| /producto/.../ (Alicante) | 418 | Similar |
| /contacto-alquiler-coches-alicante-ibiza/ | 221 | Bajo |
| /mercedes-clase-v-220d-avantgard-largo-ibiza/ | 114 | Muy bajo |
| /mercedes-clase-v-220d-largo/ | 71 | Mínimo (solo nav+footer) |
| /mercedes-glc-220d-4matic/ | 71 | Mínimo (solo nav+footer) |
| /busqueda-coches-de-alquiler/ | 145 | Muy bajo |
| /terminos-y-condiciones/ | 147 | Sorprendentemente bajo (ver nota) |
| /politica-privacidad/ | 2169 | Alto (contenido legal completo) |
| /aviso-legal/ | 1176 | Alto (contenido legal completo) |
| /politica-de-cancelacion-y-devolucion/ | 514 | Contenido legal |
| /hola-mundo/ | 89 | Residual |
| /author/hereandnow/ | 228 | Solo navegación |

*Nota sobre T&C (147 palabras): el Playwright sniff no captura bien el texto dentro de acordeones colapsados. El contenido real es mucho más extenso (el sitemap muestra 20+ secciones).*

---

### 1.12 Alt text de imágenes

**Imágenes sin alt text verificadas:**

| Imagen | Contexto |
|--------|---------|
| `hereandnowibiza-logo.svg` | Logo en header y footer |
| `arrow-left-here.svg`, `arrow-right-here.svg` | Flechas de carrusel |
| `arrow-left-black.svg`, `arrow-right-black.svg` | Flechas sección SEO |
| `close-button-popup.svg` | Botón cerrar popup |
| `Coupe-AMG_circulando_1.png` | Sección SEO homepage |
| `3125-MSN-25-scaled.jpg` | Sección SEO homepage |
| `Circulando_VAN.png` | Sección SEO homepage |
| `3125-MSN-26-scaled.jpg` | Sección SEO homepage |

**Imágenes con alt text no descriptivo (código interno):**

Los 6 archivos de la galería del producto (`3125-MSN-1_SIN-MATRICULA-scaled.jpg`, etc.) tienen alt text con los códigos internos "3125 MSN X" que no aportan descripción para lectores de pantalla ni para Google Images.

---

### 1.13 URLs y parámetros

**Estructura de URLs principal:**
- Cortas y descriptivas para las páginas SEO clave
- `/producto/` como prefijo para WooCommerce (no es `/coches/` ni `/reservar/`)
- Parámetros de filtro WooCommerce: `/brw_Pasajeros/5/`, `/brw_tipo/furgoneta/`
- Categorías de producto: `/categoria-producto/ibiza/aeropuerto-de-ibiza-ibiza/` (redundante: "ibiza" aparece dos veces)

**Redirects verificados:**
- `/contacto` → `/contacto-alquiler-coches-alicante-ibiza/` (redirect 301 implícito)
- `/reembolso_devoluciones/` → `/terminos-y-condiciones/`
- `/finalizar-compra/` → `/carrito/` (cuando carrito vacío)

**Parámetros GET manejados:**
- `?add-to-cart=X` → bloqueado en robots.txt, canonical apunta a URL limpia ✓
- `?s=X` (búsqueda) → noindex ✓

---

### 1.14 Idiomas

**No existe implementación hreflang.** El sitio usa el plugin GTranslate para traducción ES/EN:
- Mismo dominio y URL para ambos idiomas
- Sin rutas `/en/`
- Sin etiquetas `<link rel="alternate" hreflang="es">`
- Sin etiquetas `<link rel="alternate" hreflang="en">`
- El cambio de idioma es puramente visual/JS sin impacto en el HTML enviado al crawler

---

### 1.15 Paginación

No se detectaron etiquetas `<link rel="prev">` ni `<link rel="next">` en ninguna página. Con solo 2 productos en el catálogo no hay paginación activa.

---

### 1.16 Tecnología y señales técnicas

| Señal | Valor |
|-------|-------|
| CMS | WordPress |
| Plugin SEO | Yoast SEO (detectado por sitemap y meta robots) |
| Constructor de páginas | Elementor (detectado por clases CSS) |
| Plugin de reservas | OVA BRW v1.7.6 (detectado en CSS cargados) |
| Plugin de traducción | GTranslate (detectado en URLs de flags SVG) |
| Procesador de pagos | Redsys (detectado en CSS `/redsyspur/`) |
| GDPR/Cookies | Complianz GDPR (detectado en CSS) |
| WooCommerce | v10.9.4 (detectado en CSS) |

---

## 2. POSIBLES PROBLEMAS

---

### P1 — CRÍTICO: Títulos duplicados en páginas de destino

Las tres páginas de alquiler (Ibiza, Alicante, genérica) comparten el mismo title tag:

```
Here & Now - Alquiler de vehículos en Ibiza y Alicante
```

- /alquiler-coches-ibiza-mercedes/
- /alquiler-coches-alicante-mercedes/
- /alquiler-coches-mercedes/

Google puede desindexar o ignorar páginas con títulos duplicados cuando compiten por las mismas keywords.

---

### P2 — CRÍTICO: Productos WooCommerce sin H1 ni meta description

Las dos páginas de producto (`/producto/mercedes-clase-v-220d-avantgard-largo-ibiza/` y `.../avantgard-largo/`) son las páginas de conversión del negocio y carecen de:
- H1 (el nombre del vehículo aparece como H2)
- Meta description (el extracto automático de WooCommerce no está configurado)
- Schema.org de tipo `Product` con `Offer` y precio

Son páginas indexadas con `index, follow` y sin estos elementos básicos.

---

### P3 — ALTO: Páginas vacías indexadas

Dos páginas con contenido cero (solo header/footer, 71 palabras) están indexadas con `index, follow`:

- `/mercedes-clase-v-220d-largo/` — 71 palabras, sin H1, sin meta description
- `/mercedes-glc-220d-4matic/` — 71 palabras, sin H1, sin meta description

Estas páginas consumen crawl budget y pueden ser señal de thin content.

---

### P4 — ALTO: Múltiples páginas sin H1

Las siguientes páginas no tienen H1:
- /nuestra-flota/
- /producto/.../ibiza/ (reserva real)
- /producto/.../ (reserva real)
- /contacto-alquiler-coches-alicante-ibiza/
- /mercedes-clase-v-220d-avantgard-largo-ibiza/
- /mercedes-clase-v-220d-largo/
- /mercedes-glc-220d-4matic/
- /busqueda-coches-de-alquiler/
- /hola-mundo/

Un H1 ausente no es un error técnico grave pero es un factor de relevancia. En páginas de conversión (productos) su ausencia es especialmente notable.

---

### P5 — ALTO: Alt texts ausentes o no descriptivos en imágenes clave

Todas las imágenes de la galería del vehículo tienen alt text con códigos internos ("3125 MSN 43") en lugar de textos descriptivos como "Interior Mercedes Clase V — vista trasera". Esto afecta:
- Accesibilidad (WCAG)
- Google Images / visual search
- Core Web Vitals (LCP image sin alt descriptivo)

Las imágenes con alt text totalmente vacío (`""`) incluyen el logo del sitio y todas las imágenes de la sección SEO.

---

### P6 — ALTO: Homepage sin og:image / twitter:image

La homepage no tiene `og:image` ni `twitter:image`. Al compartirse en redes sociales, Twitter/X, LinkedIn, WhatsApp, el fragmento no mostrará imagen, reduciendo el CTR.

Los productos sí tienen og:image (foto del vehículo). La homepage no.

---

### P7 — ALTO: Sin schema de tipo LocalBusiness, CarRental o Product

El negocio de alquiler de coches debería tener:
- `LocalBusiness` o `CarRental` en la homepage con dirección, teléfono y horarios
- `Product` + `Offer` con `priceCurrency`, `price` en las páginas de producto
- `FAQPage` para las preguntas frecuentes del acordeón de la homepage

Actualmente solo hay `WebPage`, `WebSite`, `Organization` e `ImageObject`.

---

### P8 — MEDIO: Sin hreflang con versión EN activa

La versión inglesa existe (cambia title a "Here & Now - Luxury Car Rental") pero sin hreflang. Google no sabe que hay dos idiomas disponibles en la misma URL, lo que:
- Impide posicionarse en inglés para búsquedas de turistas
- No permite que Google sirva la versión correcta por país/idioma
- La implementación con GTranslate en la misma URL hace esto técnicamente complicado de resolver

---

### P9 — MEDIO: Páginas de filtro indexadas con contenido delgado

Las páginas de taxonomía WooCommerce están indexadas:
- `/brw_Pasajeros/5/` — title: "5 archivos", H1: "5", sin descripción
- `/brw_tipo/furgoneta/` — title: "Furgoneta archivos", H1: "Furgoneta"
- `/categoria-producto/ibiza/` — title: "Ibiza archivos", H1: "Ibiza"
- Más 6 subcategorías de ubicación

Estas páginas tienen muy poco contenido único y títulos generados automáticamente por WooCommerce/Yoast que son poco descriptivos.

---

### P10 — MEDIO: Página residual WordPress indexada

`/hola-mundo/` (post por defecto de WordPress) está indexada con `index, follow`. No tiene contenido de negocio, tiene title "¡Hola, mundo!", sin H1, sin meta description.

---

### P11 — MEDIO: WebSite schema con description vacía

```json
"@type": "WebSite",
"description": ""
```

El campo `description` del WebSite schema está vacío. Yoast usa el tagline del sitio WordPress; si no está configurado, queda en blanco.

---

### P12 — MEDIO: URL de categoría redundante

```
/categoria-producto/ibiza/aeropuerto-de-ibiza-ibiza/
```

El término "ibiza" aparece dos veces en la URL (`ibiza/` + `aeropuerto-de-ibiza-ibiza`). Esto es consecuencia automática de WooCommerce al combinar el slug de la categoría padre con el slug del hijo.

---

### P13 — BAJO: Título de homepage podría optimizarse para keyword principal

El título actual `Here & Now - Alquiler de vehículos de alta gama` usa "vehículos de alta gama" pero no incluye "Mercedes", "Ibiza" ni "Alicante" — las keywords más específicas del negocio.

---

### P14 — BAJO: Author page indexada sin contenido

`/author/hereandnow/` está indexada con 228 palabras (la mayoría del header/footer). Página de autor de WordPress sin valor de contenido para el usuario.

---

### P15 — BAJO: Falta twitter:site y twitter:creator

La Twitter Card tiene `summary_large_image` pero no declara `twitter:site` (cuenta de la empresa) ni `twitter:creator`.

---

### P16 — BAJO: URL del carrito duplicada semánticamente

`/carrito/` tiene `noindex` (correcto), pero `/finalizar-compra/` redirige a `/carrito/` cuando el carrito está vacío. No genera URLs duplicadas por sí misma.

---

## 3. INFORMACIÓN NO VERIFICADA

| Aspecto | Motivo de no verificación |
|---------|--------------------------|
| **Velocidad de carga / Core Web Vitals** | No se midió LCP, FID/INP, CLS. Requiere herramienta externa (PageSpeed Insights, Lighthouse). |
| **Posicionamiento actual en Google** | No se consultó Search Console ni ninguna herramienta de rankings. |
| **Backlinks / perfil de enlaces externos** | No analizado. Requiere Ahrefs/Moz/SEMrush. |
| **Tráfico** | No se accedió a Analytics ni Search Console. |
| **Indexación real en Google** | No se verificó con `site:hereandnowibiza.com` en búsqueda real. |
| **Penalizaciones manuales o algorítmicas** | UNKNOWN. Requiere Search Console. |
| **CTR en resultados de búsqueda** | UNKNOWN. |
| **Texto de los fragmentos en SERP** | UNKNOWN (Google puede generar el snippets desde el contenido). |
| **Comportamiento de GTranslate en Googlebot** | No se verificó si Googlebot recibe ES o EN, o si accede a ambas. GTranslate puede servir contenido diferente según User-Agent en algunos modos. |
| **Contenido del T&C en acordeones** | El conteo de 147 palabras es incorrecto — los acordeones no están expandidos. El contenido real es más extenso (documentado en pages.md). |
| **Estado de los sitemaps de product_cat subcategorías** | Se verificaron los 9 URLs en sitemap pero no se visitaron individualmente todas las subcategorías de ubicación. |
| **Versión del plugin Yoast SEO** | UNKNOWN — no se inspeccionó el número de versión. |
| **Configuración de Yoast** | No se accedió al panel de administración WordPress. |
| **HTTPS y certificado SSL** | El sitio usa HTTPS (confirmado por las URLs `https://`). La configuración del certificado no se verificó en detalle. |
| **Structured Data de FAQPage** | La homepage tiene un acordeón FAQ pero no se verificó si tiene schema `FAQPage` adicional. El JSON-LD extraído no muestra ninguno. |
| **Tiempo de respuesta del servidor** | UNKNOWN. |
| **Mobile-first indexing** | El sitio usa Elementor responsive pero no se verificó específicamente el renderizado mobile. |
| **Errores 404 activos** | No se rastreó el sitio buscando enlaces rotos internos. El Facebook del footer no tiene URL, lo que podría generar un 404 si se clicka. |

---

## Resumen ejecutivo de problemas por severidad

| Severidad | Problema | Páginas afectadas |
|-----------|---------|-------------------|
| CRÍTICO | Títulos duplicados en landings de destino | 3 páginas |
| CRÍTICO | Productos sin H1 ni meta description | 2 páginas clave |
| ALTO | Páginas vacías indexadas | 2 páginas |
| ALTO | Múltiples páginas sin H1 | 9+ páginas |
| ALTO | Alt texts vacíos o no descriptivos | Todas las imágenes |
| ALTO | Homepage sin og:image | 1 página |
| ALTO | Sin schema Product/CarRental/LocalBusiness | Sitio completo |
| MEDIO | Sin hreflang para la versión EN | Sitio completo |
| MEDIO | Páginas de filtro indexadas con thin content | 8+ páginas |
| MEDIO | Post residual WordPress indexado | 1 página |
| BAJO | Author page indexada | 1 página |
| BAJO | Título homepage sin keyword Mercedes/Ibiza | 1 página |
