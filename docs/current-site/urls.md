# URLs — hereandnowibiza.com

> Fuente: análisis con Playwright CLI + sitemaps XML (Yoast SEO).  
> Fecha de análisis: 2026-11-02  
> Las URLs marcadas **FOUND (NAVIGATION)** se descubrieron navegando; las marcadas **FOUND (SITEMAP)** proceden de los sitemaps XML.

---

## Páginas principales

| URL | Title | Tipo | Cómo se encontró | Profundidad | Estado | Observaciones |
|-----|-------|------|-------------------|-------------|--------|---------------|
| https://hereandnowibiza.com/ | Here & Now - Alquiler de vehículos de alta gama | Homepage | Directo | 0 | 200 OK | Título EN: "Here & Now - Luxury Car Rental" |
| https://hereandnowibiza.com/nuestra-flota/ | Nuestra flota - Here & Now | Listado de flota | Menú principal | 1 | 200 OK | Solo muestra 1 vehículo actualmente |
| https://hereandnowibiza.com/alquiler-coches-ibiza-mercedes/ | Here & Now - Alquiler de vehículos en Ibiza y Alicante | Landing destino | Footer / Menú "Reserva" | 1 | 200 OK | H1: "Alquiler de coches Mercedes en Ibiza" |
| https://hereandnowibiza.com/alquiler-coches-alicante-mercedes/ | Here & Now - Alquiler de vehículos en Ibiza y Alicante | Landing destino | Footer / Menú "Reserva" | 1 | 200 OK | H1: "Alquiler de coches Mercedes en Alicante" |
| https://hereandnowibiza.com/contacto-alquiler-coches-alicante-ibiza/ | Contacto - Here & Now | Contacto | Footer / Menú | 1 | 200 OK | URL canónica de contacto |
| https://hereandnowibiza.com/alquiler-coches-mercedes/ | Here & Now - Alquiler de vehículos en Ibiza y Alicante | Landing genérica | Sitemap | 1 | 200 OK | Página genérica de alquiler Mercedes |
| https://hereandnowibiza.com/terminos-y-condiciones/ | Términos y Condiciones - Here & Now | Legal | Footer | 1 | 200 OK | Muy detallada: precios, coberturas, cancelaciones |
| https://hereandnowibiza.com/politica-privacidad/ | Política de privacidad - Here & Now | Legal | Footer | 1 | 200 OK | |
| https://hereandnowibiza.com/aviso-legal/ | Aviso Legal - Here & Now | Legal | Footer | 1 | 200 OK | |
| https://hereandnowibiza.com/politica-de-cookies-ue/ | Política de cookies (UE) - Here & Now | Legal | Footer | 1 | 200 OK | |
| https://hereandnowibiza.com/politica-de-cancelacion-y-devolucion/ | Política de cancelación y devolución - Here & Now | Legal | Footer | 1 | 200 OK | |

---

## Fichas de vehículo — páginas informativas (no WooCommerce)

| URL | Title | Tipo | Cómo se encontró | Profundidad | Estado | Observaciones |
|-----|-------|------|-------------------|-------------|--------|---------------|
| https://hereandnowibiza.com/mercedes-clase-v-220d-avantgard-largo-ibiza/ | Mercedes Clase V 220D Avantgard Largo - Here & Now | Ficha vehículo (informativa) | Submenú "Nuestra flota" / Sitemap | 2 | 200 OK | Sin H1; botón "Reservar" y botón "Características técnicas" |
| https://hereandnowibiza.com/mercedes-clase-v-220d-largo/ | Mercedes Clase V 220D Largo - Here & Now | Ficha vehículo (informativa) | Submenú "Nuestra flota" / Sitemap | 2 | 200 OK | Página de contenido mínimo según análisis |
| https://hereandnowibiza.com/mercedes-glc-220d-4matic/ | Mercedes GLC 220D 4MATIC - Here & Now | Ficha vehículo (informativa) | Sitemap | 2 | 200 OK | Aparece en el popup de reserva como opción, pero sin producto activo en WooCommerce |

---

## Productos WooCommerce (páginas de reserva reales)

| URL | Title | Tipo | Cómo se encontró | Profundidad | Estado | Observaciones |
|-----|-------|------|-------------------|-------------|--------|---------------|
| https://hereandnowibiza.com/producto/mercedes-clase-v-220d-avantgard-largo-ibiza/ | Mercedes Clase V 220d Avantgard LARGO - Here & Now | Producto WooCommerce | Página /nuestra-flota/ | 2 | 200 OK | Precio: 130€/día. Ubicaciones Ibiza. Formulario de reserva completo |
| https://hereandnowibiza.com/producto/mercedes-clase-v-220d-avantgard-largo/ | Mercedes Clase V 220d Avantgard LARGO - Here & Now | Producto WooCommerce | Página /nuestra-flota/ | 2 | 200 OK | Precio: 130€/día. Ubicaciones Alicante. Formulario de reserva completo |

---

## Páginas WooCommerce funcionales

| URL | Title | Tipo | Cómo se encontró | Profundidad | Estado | Observaciones |
|-----|-------|------|-------------------|-------------|--------|---------------|
| https://hereandnowibiza.com/mi-cuenta/ | Mi cuenta - Here & Now | Login / Registro | Sitemap | 1 | 200 OK | Formulario login + registro (WooCommerce) |
| https://hereandnowibiza.com/carrito/ | Carrito - Here & Now | Carrito de compra | Sitemap / Header | 1 | 200 OK | WooCommerce cart |
| https://hereandnowibiza.com/finalizar-compra/ | — | Checkout | Sitemap | 1 | REDIRECT | Redirige a /carrito/ cuando está vacío |
| https://hereandnowibiza.com/busqueda-coches-de-alquiler/ | Busqueda Coches de alquiler - Here & Now | Resultados búsqueda | Sitemap | 1 | 200 OK | Muestra formulario de búsqueda y resultados |

---

## Páginas de filtro (taxonomías WooCommerce custom)

| URL | Title | Tipo | Cómo se encontró | Profundidad | Estado | Observaciones |
|-----|-------|------|-------------------|-------------|--------|---------------|
| https://hereandnowibiza.com/brw_Pasajeros/5/ | 5 archivos - Here & Now | Filtro | Sitemap / Links internos | 2 | 200 OK | Filtro por 5 pasajeros |
| https://hereandnowibiza.com/brw_Pasajeros/8/ | — | Filtro | Sitemap | 2 | 200 OK | Filtro por 8 pasajeros |
| https://hereandnowibiza.com/brw_Pasajeros/todos/ | — | Filtro | Sitemap | 2 | 200 OK | Sin filtro de pasajeros |
| https://hereandnowibiza.com/brw_tipo/furgoneta/ | Furgoneta archivos - Here & Now | Filtro | Sitemap / Links internos | 2 | 200 OK | Filtro por tipo furgoneta |
| https://hereandnowibiza.com/brw_tipo/todos/ | — | Filtro | Sitemap | 2 | 200 OK | Sin filtro de tipo |

---

## Categorías de producto (ubicación de recogida)

| URL | Tipo | Cómo se encontró | Estado | Observaciones |
|-----|------|-------------------|--------|---------------|
| https://hereandnowibiza.com/categoria-producto/ibiza/ | Categoría WC | Sitemap | 200 OK | Lista coches disponibles en Ibiza |
| https://hereandnowibiza.com/categoria-producto/ibiza/aeropuerto-de-ibiza-ibiza/ | Subcategoría WC | Sitemap | PENDING REVIEW | |
| https://hereandnowibiza.com/categoria-producto/ibiza/puerto-de-ibiza-ibiza/ | Subcategoría WC | Sitemap | PENDING REVIEW | |
| https://hereandnowibiza.com/categoria-producto/ibiza/otro-punto-de-ibiza/ | Subcategoría WC | Sitemap | PENDING REVIEW | |
| https://hereandnowibiza.com/categoria-producto/alicante/ | Categoría WC | Sitemap | 200 OK | Lista coches disponibles en Alicante |
| https://hereandnowibiza.com/categoria-producto/alicante/oficina-de-alicante/ | Subcategoría WC | Sitemap | PENDING REVIEW | |
| https://hereandnowibiza.com/categoria-producto/alicante/aeropuerto-de-alicante/ | Subcategoría WC | Sitemap | PENDING REVIEW | |
| https://hereandnowibiza.com/categoria-producto/alicante/puerto-de-alicante/ | Subcategoría WC | Sitemap | PENDING REVIEW | |
| https://hereandnowibiza.com/categoria-producto/alicante/otro-punto-de-alicante/ | Subcategoría WC | Sitemap | PENDING REVIEW | |

---

## Redirects confirmados

| URL origen | Destino | Tipo |
|-----------|---------|------|
| https://hereandnowibiza.com/contacto | /contacto-alquiler-coches-alicante-ibiza/ | 301/302 (WordPress) |
| https://hereandnowibiza.com/finalizar-compra/ | /carrito/ | Redirect WooCommerce (carrito vacío) |
| https://hereandnowibiza.com/reembolso_devoluciones/ | /terminos-y-condiciones/ | 301/302 (WordPress) |

---

## Blog / Autor

| URL | Title | Tipo | Estado | Observaciones |
|-----|-------|------|--------|---------------|
| https://hereandnowibiza.com/hola-mundo/ | ¡Hola, mundo! - Here & Now | Post WordPress | 200 OK | Post por defecto de WordPress, sin contenido real |
| https://hereandnowibiza.com/category/sin-categoria/ | — | Categoría blog | PENDING REVIEW | Categoría por defecto de WordPress |
| https://hereandnowibiza.com/author/hereandnow/ | hereandnow, author at Here & Now | Autor | 200 OK | Autor único del sitio |

---

## Sitemaps

| URL | Contenido |
|-----|-----------|
| https://hereandnowibiza.com/sitemap.xml | Índice con 8 sub-sitemaps (Yoast SEO) |
| https://hereandnowibiza.com/page-sitemap.xml | 18 páginas |
| https://hereandnowibiza.com/product-sitemap.xml | 2 productos |
| https://hereandnowibiza.com/post-sitemap.xml | 1 post |
| https://hereandnowibiza.com/category-sitemap.xml | 1 categoría |
| https://hereandnowibiza.com/brw_Pasajeros-sitemap.xml | 3 URLs |
| https://hereandnowibiza.com/brw_tipo-sitemap.xml | 2 URLs |
| https://hereandnowibiza.com/product_cat-sitemap.xml | 9 URLs |
| https://hereandnowibiza.com/author-sitemap.xml | 1 URL |

---

## URLs externas referenciadas

| URL | Contexto |
|-----|---------|
| https://www.instagram.com/hereandnowibiza/ | Footer / Redes sociales |
| https://www.threads.net/@hereandnowibiza | Footer / Redes sociales |
| https://www.google.es/maps/place/Alquiler+Coches+Here+and+Now/... | Footer / Dirección Alicante |
| https://www.adelopd.com/privacidad/here-and-now-sl | Formulario de contacto / GDPR |
| tel:+34625305620 | Footer / Teléfono |

---

---

## URLs adicionales encontradas en XML WordPress (no en sitemap público)

| URL | Tipo | Estado WP | Nota |
|-----|------|-----------|------|
| /producto/mercedes-clase-v-220d-largo/ | product WC | draft | Clase V Largo para Alicante, 140€/día |
| /producto/mercedes-clase-v-220d-largo-ibiza/ | product WC | draft | Clase V Largo para Ibiza, 250€/día |
| /producto/mercedes-glc-220d-4matic/ | product WC | draft | GLC 4MATIC para Alicante, 275€/día |
| /mercedes-clase-v-220d-largo-2/ | vehicle CPT | publish | CPT vehicle para Alicante (OVA BRW) |
| /mercedes-clase-v-220d-avantgard-largo-i/ | vehicle CPT | publish | CPT vehicle para Ibiza (OVA BRW) |
| /mercedes-clase-v-220d-largo-i/ | vehicle CPT | draft | CPT vehicle Ibiza borrador |
| /mercedes-glc-220d-4matic-coupe-amg/ | vehicle CPT | draft | GLC AMG Coupé borrador |
| /aeropuerto-de-ibiza/ | location CPT | publish | OVA BRW location |
| /aeropuerto-de-alicante/ | location CPT | publish | OVA BRW location |
| /puerto-de-ibiza/ | location CPT | publish | OVA BRW location |
| /puerto-de-alicante/ | location CPT | publish | OVA BRW location |
| /oficina-de-alicante/ | location CPT | publish | OVA BRW location |

---

## Notas generales

- **Facebook**: aparece en el footer como enlace pero no tiene URL asociada (enlace roto).
- **WhatsApp**: UNKNOWN — no se encontró ningún enlace o botón de WhatsApp en las páginas analizadas.
- **Idiomas**: la web tiene un selector ES/EN basado en JavaScript que no cambia la URL. Ambas versiones conviven en la misma URL con contenido dinámico.
- **WooCommerce**: la tienda usa taxonomías personalizadas (`brw_Pasajeros`, `brw_tipo`) indexadas por Yoast SEO.
- **Popup de reserva**: existe un popup Elementor (ID 102) con formulario de reserva que incluye modelos adicionales no publicados como productos activos: Mercedes GLC 220D 4MATIC, Mercedes GLC 220D 4MATIC COUPÉ AMG.
