# Informe de migración de contenido — Here & Now

> Fecha: 2026-11-02  
> Fuentes: `content-migration.md`, `cars-final.md`, `wordpress-inventory.md`  
> Script de seed: `scripts/seed-sanity.ts`  
> Modelo de datos objetivo: Sanity v3 (ver `docs/architecture/content-model.md`)

---

## Resumen ejecutivo

| Estado | Items | Notas |
|--------|-------|-------|
| MIGRATED | 35 | Documentos Sanity creados o preparados |
| NOT_MIGRATED | 18 | Contenido REMOVE o sin equivalente en el nuevo modelo |
| MISSING_INFORMATION | 9 | Campos parciales — requieren acción manual |
| MANUAL_REVIEW | 8 | Decisiones de negocio pendientes |

**Para ejecutar la migración:**
```bash
cd C:/dev/here-and-now
npx tsx scripts/seed-sanity.ts
```

---

## MIGRATED

### Documentos Sanity que crea el script

| Sanity _id | _type | Fuente WordPress | URL antigua | Estado |
|-----------|-------|-----------------|-------------|--------|
| `brand-mercedes-benz` | brand | — | — | ✅ Completo |
| `carcat-monovolumen` | carCategory | taxonomía `brw_tipo/furgoneta` | /brw_tipo/furgoneta/ | ✅ Renombrado a Monovolumen |
| `location-ibiza` | location | — | /alquiler-coches-ibiza-mercedes/ | ✅ Con SEO |
| `location-alicante` | location | CPT location (ID 1226) | /alquiler-coches-alicante-mercedes/ | ✅ Con SEO |
| `pickup-aeropuerto-ibiza` | pickupPoint | CPT location ID 810 | /ibiza/aeropuerto/ | ✅ Con coordenadas |
| `pickup-puerto-ibiza` | pickupPoint | CPT location ID 812 | /ibiza/puerto/ | ✅ Con coordenadas |
| `pickup-aeropuerto-alicante` | pickupPoint | CPT location ID 811 | /alicante/aeropuerto/ | ✅ Con coordenadas |
| `pickup-oficina-alicante` | pickupPoint | CPT location ID 1226 | /alicante/oficina/ | ✅ Con dirección + coords + horario |
| `pickup-puerto-alicante` | pickupPoint | CPT location ID 813 | /alicante/puerto/ | ✅ Con coordenadas |
| `car-mercedes-clase-v-avantgard-largo` | car | WP product IDs 896 + 2176 | /producto/mercedes-clase-v-220d-avantgard-largo-ibiza/ | ✅ Completo (sin imágenes, sin potencia/maletero) |
| `availability-v-ibiza` | carAvailability | WP product ID 2176 | — | ✅ 130€, Ibiza, extras one_time |
| `availability-v-alicante` | carAvailability | WP product ID 896 | — | ✅ 130€, Alicante, extras per_day |
| `testimonial-eliseo` | testimonial | Homepage (estático) | — | ✅ Verificado |
| `testimonial-jose-antonio` | testimonial | Homepage (estático) | — | ✅ Verificado |
| `testimonial-clara` | testimonial | Homepage (estático) | — | ✅ Verificado |
| `faq-requisitos` | faq | Homepage FAQ | — | ✅ |
| `faq-precio` | faq | Homepage FAQ | — | ✅ |
| `faq-recogida` | faq | Homepage FAQ | — | ✅ |
| `faq-cancelacion` | faq | Homepage FAQ | — | ✅ |
| `faq-ibiza-aeropuerto` | faq | /ibiza/aeropuerto/ | — | ✅ |
| `faq-ibiza-temporada` | faq | /ibiza/ | — | ✅ |
| `faq-alicante-oficina` | faq | /alicante/ | — | ✅ |
| `faq-alicante-anio` | faq | /alicante/ | — | ✅ |
| `faq-clase-v-plazas` | faq | cars-final.md | — | ✅ |
| `faq-clase-v-km` | faq | cars-final.md | — | ✅ |
| `siteSettings` | siteSettings | — | — | ✅ Nav completa, contacto, RRSS |
| `sitepage-terminos` | sitePage | WP ID 198 | /terminos-y-condiciones/ | ⚠️ Shell creada, body pendiente |
| `sitepage-cancelacion` | sitePage | WP ID 1069 | /politica-de-cancelacion-y-devolucion/ | ⚠️ Shell creada, body pendiente |
| `sitepage-privacidad` | sitePage | WP ID 3 | /politica-privacidad/ | ⚠️ Shell creada, body pendiente |
| `sitepage-aviso` | sitePage | WP ID 272 | /aviso-legal/ | ⚠️ Shell creada, body pendiente |
| `sitepage-cookies` | sitePage | WP ID 291 | /politica-de-cookies-ue/ | ⚠️ Shell creada, body pendiente |

### Trazabilidad de URLs (old → new)

| URL antigua (WordPress) | URL nueva | Tipo | Sanity ID |
|------------------------|-----------|------|-----------|
| /alquiler-coches-ibiza-mercedes/ | /ibiza/ | KEEP_AND_IMPROVE | location-ibiza |
| /alquiler-coches-alicante-mercedes/ | /alicante/ | KEEP_AND_IMPROVE | location-alicante |
| /nuestra-flota/ | /flota/ | KEEP_AND_IMPROVE | (página Next.js, no Sanity) |
| /producto/mercedes-clase-v-220d-avantgard-largo-ibiza/ | /flota/mercedes-clase-v-avantgard-largo/ | KEEP_AND_IMPROVE | car-mercedes-clase-v-avantgard-largo + availability-v-ibiza |
| /producto/mercedes-clase-v-220d-avantgard-largo/ | /flota/mercedes-clase-v-avantgard-largo/ | KEEP_AND_IMPROVE | car-mercedes-clase-v-avantgard-largo + availability-v-alicante |
| /mercedes-clase-v-220d-avantgard-largo-ibiza/ | /flota/mercedes-clase-v-avantgard-largo/ | MERGE (301) | car-mercedes-clase-v-avantgard-largo |
| /contacto-alquiler-coches-alicante-ibiza/ | /contacto/ | KEEP_AND_IMPROVE | (página Next.js) |
| /terminos-y-condiciones/ | /terminos-y-condiciones/ | KEEP | sitepage-terminos |
| /politica-de-cancelacion-y-devolucion/ | /politica-cancelacion/ | KEEP | sitepage-cancelacion |
| /politica-privacidad/ | /privacidad/ | KEEP | sitepage-privacidad |
| /aviso-legal/ | /aviso-legal/ | KEEP | sitepage-aviso |
| /politica-de-cookies-ue/ | /cookies/ | KEEP | sitepage-cookies |

---

## NOT_MIGRATED

Contenido clasificado como REMOVE o sin equivalente en el nuevo modelo:

| Item | Origen WP | Motivo |
|------|-----------|--------|
| Sección "Grupo Here & Now" (homepage) | Elementor section | REMOVE — servicios de concierge eliminados del nuevo negocio |
| Servicios concierge (villas, yates, restaurantes, eventos, seguridad, servicios medida) | Homepage sections | REMOVE — fuera del nuevo negocio |
| `/hola-mundo/` (post WP) | Post ID 1 | REMOVE — post por defecto de WordPress |
| `/author/hereandnow/` | Author page | REMOVE — 410 Gone |
| `/category/sin-categoria/` | Blog category | REMOVE — 410 Gone |
| Popup RESERVAS modelos inactivos (GLC, V-Class Long) | Elementor popup ID 102 | REMOVE de la lista de modelos del popup |
| WooCommerce product ID 215 (Elementor placeholder) | WC product | REMOVE — placeholder sin contenido |
| WooCommerce products draft (IDs 200, 222, 2187, 2287) | WC draft products | NOT_MIGRATED — pendiente decisión de negocio |
| CPT vehicle (IDs 199, 204, 895, 2183, 2181) | OVA BRW CPT | REPLACE — reemplazado por `car` + `carAvailability` en Sanity |
| Elementor Library drafts (IDs 229, 252, 826) | EL drafts | REMOVE — templates abandonados |
| Búsqueda /busqueda-coches-de-alquiler/ | WP page ID 1701 | MERGE → /flota/ (el filtro es inline) |
| Cupones DRIVERS, TIKA, "isa 3 dias", PRUEBA | WC coupons | NOT_MIGRATED — cupones operativos no tienen equivalente en Sanity; mantener en WooCommerce si se usa |
| Cupones HERE20, HERE2025 | WC coupons | KEEP — pero no tienen equivalente en el modelo Sanity actual |
| Facebook URL | siteSettings | NOT_MIGRATED — enlace roto en el sitio actual |
| Imágenes de concierge (eventos, concierge, conciertos, seguridad, servicios) | Media library | REMOVE — servicios eliminados |
| Imágenes de diseño antiguas (Van.png, Group-52.png, mayo 2024) | Media library | REMOVE — obsoletas |
| Post residual WP ¡Hola mundo! | WP post ID 1 | REMOVE |
| Plugin ZIPs (auditor-update.zip, Redsys-v2.1.1.zip) | Media private | NOT_MIGRATED — no pertenecen a Sanity |

---

## MISSING_INFORMATION

Campos o assets que están incompletos en el contenido migrado:

| Item | Sanity ID | Campo faltante | Fuente del problema | Acción requerida |
|------|-----------|---------------|---------------------|-----------------|
| Imágenes del vehículo | car-mercedes-clase-v-avantgard-largo | `mainImage`, `gallery` | Los assets Sanity deben subirse manualmente — no se pueden migrar como URLs externas | Descargar 6+1 fotos desde WP (/wp-content/uploads/2024/07/3125-MSN-*.jpg) y subir a Sanity Studio |
| Logos | siteSettings | `logo`, `logoLight` | SVG en WP media — debe subirse a Sanity | Descargar hereandnowibiza-logo.svg y subir |
| Imágenes de destino | location-ibiza, location-alicante | `heroImage` | No hay fotos de destino verificadas en el análisis | Crear o obtener fotos de Ibiza y Alicante |
| Potencia del motor | car-mercedes-clase-v-avantgard-largo | `power` (CV) | No publicado en la web actual | Obtener de la ficha técnica oficial del vehículo |
| Capacidad del maletero | car-mercedes-clase-v-avantgard-largo | `luggage` (litros) | No publicado en la web actual | Obtener de la ficha técnica |
| Email de contacto | siteSettings | `email` | No visible en ninguna página del sitio actual | Solicitar al equipo |
| Textos legales completos | sitepage-terminos, sitepage-cancelacion, sitepage-privacidad, sitepage-aviso, sitepage-cookies | `body` | El análisis capturó los H2 pero no el texto completo | Copiar desde el sitio WordPress actual vía copy/paste o exportación directa |
| Fianza cobertura total | availability-v-ibiza, availability-v-alicante | `coverages[1].depositAmountCard` | No capturado en el análisis — solo se conoce la de básica (1500€) | Consultar con el negocio |
| Imágenes de pickup points | pickup-aeropuerto-ibiza, etc. | `image` | No existen fotos de los puntos de recogida en la librería actual | Crear o fotografiar |

---

## MANUAL_REVIEW

Decisiones que requieren confirmación del negocio antes de proceder:

| Item | Situación | Decisión requerida |
|------|-----------|-------------------|
| **Draft: Mercedes Clase V 220D Largo** | WP products ID 200 (Alicante 140€) + ID 2187 (Ibiza 250€) + ID 2181 (vehicle CPT) — páginas vacías, sin fotos | ¿Se publica este vehículo? Si sí: ¿cuál es el precio correcto en Ibiza (parece 250€ un error vs 140€ en Alicante)? |
| **Draft: Mercedes GLC 220D 4MATIC** | WP product ID 222 (Alicante 275€) + ID 204 (vehicle CPT "Coupé AMG") | ¿Se publica este vehículo? ¿Es el GLC estándar o el Coupé AMG? ¿Solo Alicante o también Ibiza? |
| **Inconsistencia extras Ibiza vs Alicante** | Ibiza cobra extras "por total" (one_time), Alicante "por día" (per_day) — mismo precio numérico | ¿Es deliberado o un error de configuración? El seed mantiene la diferencia fielmente |
| **Coupons HERE20, HERE2025** | 6 cupones en WooCommerce, sin equivalente en Sanity | ¿Se mantienen activos? ¿Deben añadirse al modelo Sanity o solo en WooCommerce? |
| **WhatsApp** | 3 iconos en librería de medios pero no implementado en la web actual | ¿Se implementa el botón WhatsApp? ¿Con qué número? |
| **Bizum** | Imágenes de logo Bizum en librería — plugin Redsys instalado | ¿Bizum sigue siendo un método de pago activo en la nueva web? |
| **Popup "Happy Hour"** | Imagen `HappyHour-CTA-BG-Popup_170520.png` en librería de enero 2025 | ¿Es una promoción activa o planificada? ¿Debe incluirse en Sanity? |
| **Descripción larga del producto (ACF)** | ACF field `field_673612f5f8937` "Descripción Larga del producto" — puede tener contenido diferente al shortDescription visible | ¿Hay texto en este campo que no se capturó en el análisis de navegación? Verificar directamente en el WP admin |

---

## Instrucciones de ejecución

### Requisitos previos

```bash
# 1. Crear proyecto en sanity.io y obtener PROJECT_ID
# 2. Generar SANITY_API_TOKEN con permisos de escritura
# 3. Configurar .env en C:/dev/here-and-now
NEXT_PUBLIC_SANITY_PROJECT_ID=tu-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk...
```

### Instalar tsx (ejecutor de TypeScript)

```bash
cd C:/dev/here-and-now
npm install --save-dev tsx dotenv
```

### Ejecutar el seed

```bash
cd C:/dev/here-and-now
npx tsx scripts/seed-sanity.ts
```

El script es **idempotente** — usa `createOrReplace` con IDs fijos. Se puede ejecutar varias veces sin duplicar datos.

### Post-seed manual (en orden de prioridad)

1. **Imágenes del vehículo** — Descargar las 7 fotos desde la URL del WP actual y subirlas a Sanity Studio (`/studio` → Media Library → Car)
2. **Logo** — Subir `hereandnowibiza-logo.svg` como asset de Sanity
3. **Páginas legales** — En Sanity Studio, abrir cada sitePage legal y pegar el contenido del WP actual
4. **Datos técnicos del coche** — Añadir potencia (CV) y maletero (litros) al car document
5. **Email** — Añadir el email de contacto en siteSettings
6. **Verificar inconsistencia extras** — Confirmar si one_time vs per_day es intencional

---

## Validación post-migración

Una vez ejecutado el seed, verificar en el navegador:

| URL | Dato esperado |
|-----|--------------|
| http://localhost:3002/ | Sección de flota muestra el Mercedes Clase V |
| http://localhost:3002/ibiza | Hero con datos de location-ibiza, grid de coches |
| http://localhost:3002/alicante | Hero con datos de location-alicante, 3 pickup points |
| http://localhost:3002/flota/mercedes-clase-v-avantgard-largo | Ficha completa con specs del coche |
| http://localhost:3002/alicante/oficina | Horario y dirección de la oficina desde Sanity |
