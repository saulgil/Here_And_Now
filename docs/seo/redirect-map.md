# Mapa de redirects — hereandnowibiza.com

> Fuente: `docs/current-site/urls.md` + `docs/content/content-migration.md`  
> Fecha: 2026-11-02  
> Estado: **PLANIFICACIÓN** — no implementado

---

## Convenciones

| Tipo | Significado |
|------|-------------|
| `KEEP` | URL permanece en la nueva web sin redirect |
| `301` | Redirección permanente a nueva URL |
| `REVIEW` | Decisión pendiente de negocio — no implementar todavía |
| `REMOVE` | Sin redirect; la URL desaparece. Retornar 404 o 410 según el caso |

**Nota sobre `NEW_URL`:**  
Cuando la decisión es `KEEP`, `NEW_URL` es la misma URL actual asumiendo que la nueva web mantiene la misma estructura. Si la nueva web cambia la arquitectura de URLs, este campo deberá revisarse.

**Política de destino sin equivalente semántico:**  
No se redirige automáticamente a `/`. Cuando una URL eliminada no tiene destino temáticamente equivalente, se indica `SIN EQUIVALENTE SEMÁNTICO` y se recomienda 410 (Gone) o 404 con página de error útil.

---

## I. PÁGINAS PRINCIPALES

---

| # | OLD_URL | DECISION | NEW_URL | REDIRECT_TYPE | REASON |
|---|---------|----------|---------|---------------|--------|
| 1 | `https://hereandnowibiza.com/` | KEEP | `/` | — | Página principal del negocio. Contenido de alquiler de coches. |
| 2 | `https://hereandnowibiza.com/nuestra-flota/` | KEEP | `/nuestra-flota/` | — | Listado de flota. 100% relevante para el nuevo negocio. |
| 3 | `https://hereandnowibiza.com/alquiler-coches-ibiza-mercedes/` | KEEP | `/alquiler-coches-ibiza-mercedes/` | — | Landing SEO primaria para Ibiza. Alta prioridad de conservar. |
| 4 | `https://hereandnowibiza.com/alquiler-coches-alicante-mercedes/` | KEEP | `/alquiler-coches-alicante-mercedes/` | — | Landing SEO primaria para Alicante. Alta prioridad de conservar. |
| 5 | `https://hereandnowibiza.com/alquiler-coches-mercedes/` | KEEP | `/alquiler-coches-mercedes/` | — | Landing genérica Mercedes. Puede captar tráfico de búsquedas generales. Conservar mientras se evalúa la nueva arquitectura de contenidos. |
| 6 | `https://hereandnowibiza.com/contacto-alquiler-coches-alicante-ibiza/` | KEEP | `/contacto-alquiler-coches-alicante-ibiza/` | — | Página de contacto activa con formulario y popup de reserva. |
| 7 | `https://hereandnowibiza.com/busqueda-coches-de-alquiler/` | KEEP | `/busqueda-coches-de-alquiler/` | — | Página de resultados del buscador. Necesaria para el flujo de búsqueda. |

---

## II. PRODUCTOS WOOCOMMERCE ACTIVOS

---

| # | OLD_URL | DECISION | NEW_URL | REDIRECT_TYPE | REASON |
|---|---------|----------|---------|---------------|--------|
| 8 | `https://hereandnowibiza.com/producto/mercedes-clase-v-220d-avantgard-largo-ibiza/` | KEEP | `/producto/mercedes-clase-v-220d-avantgard-largo-ibiza/` | — | Página de reserva activa. Principal URL de conversión para Ibiza. |
| 9 | `https://hereandnowibiza.com/producto/mercedes-clase-v-220d-avantgard-largo/` | KEEP | `/producto/mercedes-clase-v-220d-avantgard-largo/` | — | Página de reserva activa. Principal URL de conversión para Alicante. |

---

## III. PÁGINAS INFORMATIVAS DE VEHÍCULOS

---

| # | OLD_URL | DECISION | NEW_URL | REDIRECT_TYPE | REASON |
|---|---------|----------|---------|---------------|--------|
| 10 | `https://hereandnowibiza.com/mercedes-clase-v-220d-avantgard-largo-ibiza/` | 301 | `/producto/mercedes-clase-v-220d-avantgard-largo-ibiza/` | 301 Permanent | Página informativa del mismo vehículo que el producto Ibiza. Contenido duplicado con menos detalle. El slug es bueno para SEO — transferir equity de enlace al producto real. |
| 11 | `https://hereandnowibiza.com/mercedes-clase-v-220d-largo/` | REVIEW | Ver nota | REVIEW | Página vacía (71 palabras). Tiene producto WooCommerce en borrador (140€/día, Alicante). **Si se publica el producto:** → KEEP, añadir contenido real. **Si no se publica:** → 301 a `/nuestra-flota/` (no tiene equivalente exacto). |
| 12 | `https://hereandnowibiza.com/mercedes-glc-220d-4matic/` | REVIEW | Ver nota | REVIEW | Página vacía (71 palabras). Tiene producto borrador (275€/día, Alicante). **Si se publica el GLC:** → KEEP, añadir contenido real. **Si no se publica:** → 301 a `/nuestra-flota/` (no hay equivalente). |

---

## IV. PÁGINAS LEGALES

---

| # | OLD_URL | DECISION | NEW_URL | REDIRECT_TYPE | REASON |
|---|---------|----------|---------|---------------|--------|
| 13 | `https://hereandnowibiza.com/terminos-y-condiciones/` | KEEP | `/terminos-y-condiciones/` | — | T&C del servicio de alquiler. Contenido 100% relevante. |
| 14 | `https://hereandnowibiza.com/politica-privacidad/` | KEEP | `/politica-privacidad/` | — | Política de privacidad. Obligatoria por ley. |
| 15 | `https://hereandnowibiza.com/aviso-legal/` | KEEP | `/aviso-legal/` | — | Aviso legal. Obligatorio. |
| 16 | `https://hereandnowibiza.com/politica-de-cookies-ue/` | KEEP | `/politica-de-cookies-ue/` | — | Política de cookies. Obligatoria. |
| 17 | `https://hereandnowibiza.com/politica-de-cancelacion-y-devolucion/` | KEEP | `/politica-de-cancelacion-y-devolucion/` | — | Política de cancelación del alquiler. Relevante y enlazada desde el formulario de reserva. |

---

## V. PÁGINAS WOOCOMMERCE FUNCIONALES

---

| # | OLD_URL | DECISION | NEW_URL | REDIRECT_TYPE | REASON |
|---|---------|----------|---------|---------------|--------|
| 18 | `https://hereandnowibiza.com/mi-cuenta/` | KEEP | `/mi-cuenta/` | — | Área de cliente WooCommerce. Necesaria para el flujo de reserva. Ya tiene `noindex`. |
| 19 | `https://hereandnowibiza.com/carrito/` | KEEP | `/carrito/` | — | Carrito WooCommerce. Necesario para el flujo de reserva. Ya tiene `noindex`. |
| 20 | `https://hereandnowibiza.com/finalizar-compra/` | KEEP | `/finalizar-compra/` | — | Checkout WooCommerce. Necesario para completar reservas. Ya redirige a `/carrito/` cuando está vacío (comportamiento WooCommerce, no redirect manual). |

---

## VI. REDIRECTS YA EXISTENTES (confirmar en nueva web)

Estos redirects están activos en la web actual. Deben mantenerse en la nueva web.

| # | OLD_URL | DECISION | NEW_URL | REDIRECT_TYPE | REASON |
|---|---------|----------|---------|---------------|--------|
| 21 | `https://hereandnowibiza.com/contacto` | 301 (existente) | `/contacto-alquiler-coches-alicante-ibiza/` | 301 | Ya existe. Mantener. |
| 22 | `https://hereandnowibiza.com/reembolso_devoluciones/` | 301 (existente) | `/terminos-y-condiciones/` | 301 | Ya existe. Mantener. |

---

## VII. PÁGINAS DE FILTRO — brw_Pasajeros

---

| # | OLD_URL | DECISION | NEW_URL | REDIRECT_TYPE | REASON |
|---|---------|----------|---------|---------------|--------|
| 23 | `https://hereandnowibiza.com/brw_Pasajeros/5/` | 301 | `/nuestra-flota/` | 301 | Título: "5 archivos". Sin contenido diferenciado. El filtro por pasajeros no justifica una URL indexable con 1 producto activo. Destino: flota, que es la página semánticamente más cercana. |
| 24 | `https://hereandnowibiza.com/brw_Pasajeros/8/` | 301 | `/nuestra-flota/` | 301 | Igual que /5/. |
| 25 | `https://hereandnowibiza.com/brw_Pasajeros/todos/` | 301 | `/nuestra-flota/` | 301 | Igual. Muestra todos los vehículos = es /nuestra-flota/. |

---

## VIII. PÁGINAS DE FILTRO — brw_tipo

---

| # | OLD_URL | DECISION | NEW_URL | REDIRECT_TYPE | REASON |
|---|---------|----------|---------|---------------|--------|
| 26 | `https://hereandnowibiza.com/brw_tipo/furgoneta/` | 301 | `/nuestra-flota/` | 301 | La categoría "Furgoneta" para un Mercedes Clase V premium es inapropiada. No tiene equivalente semántico en la nueva web. Destino: flota. |
| 27 | `https://hereandnowibiza.com/brw_tipo/todos/` | 301 | `/nuestra-flota/` | 301 | "Todos los tipos" = página de flota. |

---

## IX. CATEGORÍAS DE PRODUCTO (product_cat) — Ibiza

---

| # | OLD_URL | DECISION | NEW_URL | REDIRECT_TYPE | REASON |
|---|---------|----------|---------|---------------|--------|
| 28 | `https://hereandnowibiza.com/categoria-producto/ibiza/` | 301 | `/alquiler-coches-ibiza-mercedes/` | 301 | "Ibiza archivos" — categoría WooCommerce de vehículos disponibles en Ibiza. Equivalente semántico: landing de Ibiza. |
| 29 | `https://hereandnowibiza.com/categoria-producto/ibiza/aeropuerto-de-ibiza-ibiza/` | 301 | `/alquiler-coches-ibiza-mercedes/` | 301 | Subcategoría de punto de recogida en Ibiza. No tiene equivalente exacto como página. Destino: landing Ibiza. |
| 30 | `https://hereandnowibiza.com/categoria-producto/ibiza/puerto-de-ibiza-ibiza/` | 301 | `/alquiler-coches-ibiza-mercedes/` | 301 | Ídem. Punto de recogida Puerto de Ibiza. |
| 31 | `https://hereandnowibiza.com/categoria-producto/ibiza/otro-punto-de-ibiza/` | 301 | `/alquiler-coches-ibiza-mercedes/` | 301 | Ídem. |

---

## X. CATEGORÍAS DE PRODUCTO (product_cat) — Alicante

---

| # | OLD_URL | DECISION | NEW_URL | REDIRECT_TYPE | REASON |
|---|---------|----------|---------|---------------|--------|
| 32 | `https://hereandnowibiza.com/categoria-producto/alicante/` | 301 | `/alquiler-coches-alicante-mercedes/` | 301 | Categoría WooCommerce de vehículos en Alicante. Equivalente: landing Alicante. |
| 33 | `https://hereandnowibiza.com/categoria-producto/alicante/oficina-de-alicante/` | 301 | `/alquiler-coches-alicante-mercedes/` | 301 | Subcategoría punto de recogida. Destino: landing Alicante. |
| 34 | `https://hereandnowibiza.com/categoria-producto/alicante/aeropuerto-de-alicante/` | 301 | `/alquiler-coches-alicante-mercedes/` | 301 | Ídem. |
| 35 | `https://hereandnowibiza.com/categoria-producto/alicante/puerto-de-alicante/` | 301 | `/alquiler-coches-alicante-mercedes/` | 301 | Ídem. |
| 36 | `https://hereandnowibiza.com/categoria-producto/alicante/otro-punto-de-alicante/` | 301 | `/alquiler-coches-alicante-mercedes/` | 301 | Ídem. |

---

## XI. BLOG, AUTOR Y CATEGORÍAS WORDPRESS

---

| # | OLD_URL | DECISION | NEW_URL | REDIRECT_TYPE | REASON |
|---|---------|----------|---------|---------------|--------|
| 37 | `https://hereandnowibiza.com/hola-mundo/` | 301 | `/` | 301 | Post residual de instalación WordPress. Sin contenido de negocio. No tiene equivalente semántico. El destino más razonable es la homepage. |
| 38 | `https://hereandnowibiza.com/author/hereandnow/` | REMOVE | SIN EQUIVALENTE SEMÁNTICO | 410 Gone | Página de autor WordPress sin contenido de negocio. No tiene equivalente en la nueva web. Retornar 410 (la URL desaparece intencionadamente). |
| 39 | `https://hereandnowibiza.com/category/sin-categoria/` | REMOVE | SIN EQUIVALENTE SEMÁNTICO | 410 Gone | Categoría de blog vacía. No existe blog en la nueva web. Retornar 410. |

---

## XII. PRODUCTOS WOOCOMMERCE EN BORRADOR (URLs no públicas actualmente)

Estas URLs existen en WordPress pero no son accesibles públicamente. Se incluyen como previsión para cuando se publiquen o eliminen.

| # | OLD_URL | DECISION | NEW_URL | REDIRECT_TYPE | REASON |
|---|---------|----------|---------|---------------|--------|
| 40 | `https://hereandnowibiza.com/producto/mercedes-clase-v-220d-largo/` | REVIEW | Ver nota | REVIEW | Producto borrador del Clase V Largo para Alicante (140€/día). **Si se publica:** → KEEP. **Si se elimina el borrador:** → 301 a `/producto/mercedes-clase-v-220d-avantgard-largo/` (modelo Alicante activo, más cercano). |
| 41 | `https://hereandnowibiza.com/producto/mercedes-clase-v-220d-largo-ibiza/` | REVIEW | Ver nota | REVIEW | Producto borrador del Clase V Largo para Ibiza (250€/día). **Si se publica:** → KEEP. **Si se elimina:** → 301 a `/producto/mercedes-clase-v-220d-avantgard-largo-ibiza/`. |
| 42 | `https://hereandnowibiza.com/producto/mercedes-glc-220d-4matic/` | REVIEW | Ver nota | REVIEW | Producto borrador del GLC (275€/día, Alicante). **Si se publica:** → KEEP. **Si se elimina:** → 301 a `/nuestra-flota/` (sin equivalente activo exacto). |

---

## XIII. CPT VEHICLE URLS (OVA BRW — internas, no públicas actualmente)

Generadas por el plugin OVA BRW. No son páginas públicas navegables. Se incluyen para completitud en caso de que el plugin las exponga.

| # | OLD_URL | DECISION | NEW_URL | REDIRECT_TYPE | REASON |
|---|---------|----------|---------|---------------|--------|
| 43 | `/mercedes-clase-v-220d-largo-2/` | REVIEW | — | REVIEW | CPT vehicle activo en WP para Alicante. Sin acceso público confirmado. Si resulta accesible → 301 a `/nuestra-flota/`. |
| 44 | `/mercedes-clase-v-220d-avantgard-largo-i/` | REVIEW | — | REVIEW | CPT vehicle activo en WP para Ibiza. Ídem anterior. |

---

## XIV. PARÁMETROS GET Y BÚSQUEDAS

| # | PATRÓN | DECISION | NEW_URL | REDIRECT_TYPE | REASON |
|---|--------|----------|---------|---------------|--------|
| 45 | `/?add-to-cart=*` | KEEP (robots.txt) | — | Bloqueado en robots.txt | WooCommerce. El canonical ya apunta a la URL limpia. Mantener el bloqueo en robots.txt de la nueva web. |
| 46 | `/?s=*` (búsqueda interna) | KEEP | — | noindex | La búsqueda interna ya tiene `noindex`. Mantener. |

---

## Resumen ejecutivo

### Conteo por decisión

| Decisión | Cantidad | URLs |
|----------|----------|------|
| **KEEP** | 14 | Las páginas de negocio activas, legales y funcionales WooCommerce |
| **301 permanente** | 20 | Filtros, categorías, informativas, blog, autor |
| **REVIEW** | 5 | Dependientes de decisiones de negocio sobre vehículos en borrador |
| **REMOVE (410)** | 2 | Autor y categoría de blog sin equivalente semántico |
| **Existentes a confirmar** | 2 | /contacto y /reembolso_devoluciones |
| **TOTAL** | **43 URLs** | |

---

### Redirects con destino que NO es la homepage

| URL eliminada | Destino | Motivo |
|--------------|---------|--------|
| /mercedes-clase-v-220d-avantgard-largo-ibiza/ | /producto/...ibiza/ | Misma página, más contenido |
| /brw_Pasajeros/* | /nuestra-flota/ | Contenido de flota |
| /brw_tipo/* | /nuestra-flota/ | Contenido de flota |
| /categoria-producto/ibiza/* | /alquiler-coches-ibiza-mercedes/ | Mismo destino geográfico |
| /categoria-producto/alicante/* | /alquiler-coches-alicante-mercedes/ | Mismo destino geográfico |
| /hola-mundo/ | / | Sin equivalente; home es el fallback más neutral |

---

### Sin equivalente semántico (no redirigir a home)

| URL | Tipo de desaparición | Observación |
|-----|---------------------|-------------|
| `/author/hereandnow/` | 410 Gone | No existe perfil de autor en la nueva web |
| `/category/sin-categoria/` | 410 Gone | No existe blog en la nueva web |

---

### Anchors internos que desaparecen

Estos anchors se usan en enlaces internos del sitio actual y deben eliminarse también de los menús y CTAs:

| Anchor | Dónde se usa | Acción |
|--------|-------------|--------|
| `/#grupo` | Menú principal ("Grupo Here & Now"), footer | **Eliminar del menú** — la sección desaparece |
| `/#concierge` | Link "CONCIERGE Y SERVICIOS" en homepage | **Eliminar** — la sección desaparece |
| `#elementor-action%3Aaction%3Dpopup%3Aopen...` | Link "FORMULARIO DE RESERVA" | **Conservar** — el popup de reserva se mantiene |

---

### Notas de implementación (para cuando llegue el momento)

1. Los redirects deben implementarse **antes de lanzar** la nueva web, no después.
2. Los 301 de las páginas de filtro y categorías tienen **prioridad media** — Google puede tardar semanas en procesarlos.
3. El redirect de `/mercedes-clase-v-220d-avantgard-largo-ibiza/` → `/producto/...` tiene **prioridad alta** — es una URL en el menú principal y en el sitemap.
4. Los 410 (autor, categoría) pueden implementarse como 404 si el servidor no soporta 410. El efecto SEO es similar.
5. Los redirects REVIEW **no deben implementarse** hasta resolver las decisiones de negocio sobre los vehículos en borrador.
