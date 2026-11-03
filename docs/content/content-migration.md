# Plan de migración de contenido — hereandnowibiza.com

> Objetivo del nuevo negocio: **alquiler de coches exclusivamente en Ibiza y Alicante**.  
> Todo contenido relacionado con hoteles, villas, concierge, barcos, experiencias o servicios ajenos al alquiler de vehículos debe desaparecer.  
> Fuente: análisis de `docs/current-site/` + XML de WordPress (`wordpress-inventory.md`).  
> Fecha: 2026-11-02

---

## Criterios de clasificación

| Etiqueta | Significado |
|----------|-------------|
| `KEEP` | Migrar sin cambios relevantes |
| `KEEP_AND_IMPROVE` | Migrar y mejorar contenido, SEO o estructura |
| `MERGE` | Combinar con otra página o sección |
| `REMOVE` | Eliminar de la nueva web |
| `REDIRECT` | No migrar como página; redirigir a otra URL |
| `REVIEW` | Decisión pendiente — requiere confirmación |

---

## I. PÁGINAS PRINCIPALES

---

### 1.1 Homepage

| Campo | Valor |
|-------|-------|
| URL actual | https://hereandnowibiza.com/ |
| Title actual | Here & Now - Alquiler de vehículos de alta gama |
| H1 actual | ALQUILER DE VEHÍCULOS MERCEDES |
| Meta description | Descubre nuestro servicio de alquiler de vehículos de alta gama en Ibiza y Alicante. Tu próximo viaje merece lo mejor. |
| Palabras aprox. | 929 |
| **Decisión** | **KEEP_AND_IMPROVE** |

**Contenido a conservar:**
- Hero con formulario de búsqueda (selector de localización, fechas, tipo vehículo, pasajeros)
- Sección "Nuestros valores" (SEGURIDAD, CONFORT, RÁPIDO + 4º valor) — conservar con foco en alquiler
- Sección de reseñas (3 reviews estáticas)
- Sección de contacto / formulario de email
- FAQ accordion (ventajas Ibiza, Alicante, flota)

**Contenido a eliminar de esta página:**
- Sección completa "Grupo Here & Now / Concierge & Services" (#grupo anchor)
- Tarjetas de servicio: Villas exclusivas, Yates y motos de agua, Restaurantes y reservas, Eventos, Concierge 24/7, Seguridad privada, Servicios a medida
- Link "CONCIERGE Y SERVICIOS"
- Texto "Villas de ensueño, escapadas náuticas..."
- Imágenes: `eventos-hereandnow.jpg`, `concierge-hereandnow.jpg`, `conciertos-hereandnow.jpg`, `seguridad-privada.jpg`, `servicios-medida.jpg`, `servicios-medida-here-now.jpg`, `Property-1Variant2.png`, `marvin-meyer-8CDuHXff3zo-unsplash-1.png`

**Mejoras propuestas (solo observaciones SEO, sin diseño nuevo):**
- Añadir og:image a la homepage
- Mejorar title: incluir "Mercedes", "Ibiza" y "Alicante"
- Añadir schema LocalBusiness/CarRental
- Añadir alt text descriptivo a todas las imágenes

**Contenido relacionado:** /alquiler-coches-ibiza-mercedes/, /alquiler-coches-alicante-mercedes/, /nuestra-flota/  
**Destino nuevo:** /  
**Observaciones SEO:** La meta description actual es genérica. El title no incluye las keywords principales (Mercedes, Ibiza, Alicante).

---

### 1.2 Nuestra flota

| Campo | Valor |
|-------|-------|
| URL actual | https://hereandnowibiza.com/nuestra-flota/ |
| Title actual | Nuestra flota - Here & Now |
| H1 actual | **AUSENTE** |
| Meta description | Elegimos exclusivamente vehículos Mercedes para tu viaje, conoce toda nuestra flota y elige la mejor opción para ti. |
| Palabras aprox. | 151 |
| **Decisión** | **KEEP_AND_IMPROVE** |

**Contenido a conservar:**
- Texto introductorio (exclusividad Mercedes)
- Ficha del Mercedes Clase V 220d Avantgard LARGO
- Acordeón "Características técnicas"
- Botones "Reservar en Ibiza" / "Reservar en Alicante"

**Mejoras:**
- Añadir H1 (actualmente ausente)
- Ampliar con los vehículos en borrador si se publican (Clase V Largo, GLC)
- Añadir más palabras de contenido (151 actual es muy escaso)
- Mejorar alt texts de imágenes de vehículos

**Contenido relacionado:** /producto/mercedes-clase-v-220d-avantgard-largo-ibiza/, /producto/mercedes-clase-v-220d-avantgard-largo/  
**Destino nuevo:** /nuestra-flota/ (misma URL)  
**Observaciones SEO:** Sin H1, poco contenido (151 palabras). La URL es buena.

---

### 1.3 Landing SEO — Ibiza

| Campo | Valor |
|-------|-------|
| URL actual | https://hereandnowibiza.com/alquiler-coches-ibiza-mercedes/ |
| Title actual | Here & Now - Alquiler de vehículos en Ibiza y Alicante (**duplicado con Alicante**) |
| H1 actual | Alquiler de coches Mercedes en Ibiza |
| Meta description | Te proporcionamos la mejor manera de explorar Ibiza con nuestros vehículos de lujo en alquiler ¡Reserva ahora! |
| Palabras aprox. | 410 |
| **Decisión** | **KEEP_AND_IMPROVE** |

**Contenido a conservar:**
- H1 (bueno)
- Meta description (aceptable)
- Formulario de búsqueda
- Listado de vehículos disponibles en Ibiza
- Filtros por pasajeros y tipo

**Mejoras:**
- **Corregir title** — debe ser específico de Ibiza, no genérico
- Añadir más contenido sobre Ibiza como destino (en relación al alquiler)
- Añadir og:image con foto del vehículo en Ibiza
- Schema Product o CarRental específico

**Contenido relacionado:** /nuestra-flota/, productos Ibiza, /brw_Pasajeros/  
**Destino nuevo:** /alquiler-coches-ibiza-mercedes/ (misma URL) o considerar /alquiler-coches-ibiza/  
**Observaciones SEO:** El title duplicado con Alicante es un problema crítico de SEO. La URL actual incluye "-mercedes-" lo que es keyword positiva.

---

### 1.4 Landing SEO — Alicante

| Campo | Valor |
|-------|-------|
| URL actual | https://hereandnowibiza.com/alquiler-coches-alicante-mercedes/ |
| Title actual | Here & Now - Alquiler de vehículos en Ibiza y Alicante (**duplicado con Ibiza**) |
| H1 actual | Alquiler de coches Mercedes en Alicante |
| Meta description | Descubre la mejor manera de explorar Alicante con nuestros Mercedes en alquiler ¡Contacta con nosotros para más información! |
| Palabras aprox. | 363 |
| **Decisión** | **KEEP_AND_IMPROVE** |

**Contenido a conservar:**
- H1 (bueno)
- H2s sobre beneficios: "¿Por qué alquilar un Mercedes en Alicante?", "Alquiler flexible...", "Cómo reservar..."
- Formulario de búsqueda
- Listado de vehículos

**Mejoras:**
- **Corregir title** — específico Alicante
- Ampliar texto SEO sobre Alicante como destino
- Añadir og:image
- Corregir meta description (CTA "¡Contacta..." es inferior a "¡Reserva ahora!")

**Contenido relacionado:** /nuestra-flota/, productos Alicante  
**Destino nuevo:** /alquiler-coches-alicante-mercedes/ (misma URL) o considerar /alquiler-coches-alicante/  
**Observaciones SEO:** Title duplicado crítico. La Alicante page tiene H2s SEO adicionales que Ibiza no tiene — asimetría a resolver.

---

### 1.5 Landing SEO — Genérica Mercedes

| Campo | Valor |
|-------|-------|
| URL actual | https://hereandnowibiza.com/alquiler-coches-mercedes/ |
| Title actual | Here & Now - Alquiler de vehículos en Ibiza y Alicante (**idéntico a Ibiza y Alicante**) |
| H1 actual | Alquiler de coches Mercedes |
| Meta description | Descubre la mejor manera de viajar con nuestros Mercedes en alquiler ¡Contacta con nosotros para más información! |
| Palabras aprox. | 280 |
| **Decisión** | **KEEP_AND_IMPROVE** |

**Razonamiento:** Página SEO genérica sin destino específico. Puede captar tráfico de búsquedas generales "alquiler coches Mercedes". Conservar pero mejorar.

**Mejoras:**
- Corregir title (no puede ser idéntico a Ibiza y Alicante)
- Añadir contenido diferenciado respecto a las páginas de destino
- Si no se le da contenido propio, considerar redirigir a homepage

**Destino nuevo:** /alquiler-coches-mercedes/ o redirigir a /  
**Observaciones SEO:** Tres páginas con el mismo title es el problema SEO más grave del sitio.

---

### 1.6 Página de contacto

| Campo | Valor |
|-------|-------|
| URL actual | https://hereandnowibiza.com/contacto-alquiler-coches-alicante-ibiza/ |
| Redirect desde | /contacto |
| Title actual | Contacto - Here & Now |
| H1 actual | **AUSENTE** |
| Meta description | Ponte en contacto con nosotros para conocer la disponibilidad... |
| Palabras aprox. | 221 |
| **Decisión** | **KEEP_AND_IMPROVE** |

**Contenido a conservar:**
- Formulario de contacto (nombre, email, mensaje, GDPR)
- Link "FORMULARIO DE RESERVA" (popup)
- Texto de contacto

**Mejoras:**
- Añadir H1
- Añadir información de contacto visible en la página (teléfono, email, dirección)
- El formulario está bloqueado por cookies de marketing — evaluar si mantener o cambiar tecnología

**Destino nuevo:** /contacto/ (simplificar URL)  
**Observaciones SEO:** URL con slug largo `/contacto-alquiler-coches-alicante-ibiza/` — válida por SEO pero larga. El redirect `/contacto` → `/contacto-alquiler-...` ya existe.

---

### 1.7 Busqueda de coches de alquiler

| Campo | Valor |
|-------|-------|
| URL actual | https://hereandnowibiza.com/busqueda-coches-de-alquiler/ |
| Title actual | Busqueda Coches de alquiler - Here & Now (sin acento en "Búsqueda") |
| H1 actual | **AUSENTE** |
| Meta description | AUSENTE |
| Palabras aprox. | 145 |
| **Decisión** | **KEEP_AND_IMPROVE** |

**Mejoras:**
- Corregir "Busqueda" → "Búsqueda" (error ortográfico)
- Añadir H1 y meta description
- Esta página actúa como página de resultados del buscador integrado

**Destino nuevo:** /busqueda/ o /busqueda-coches/  
**Observaciones SEO:** Sin meta description, sin H1, error ortográfico en el title.

---

## II. PÁGINAS DE PRODUCTO (WOOCOMMERCE)

---

### 2.1 Producto — Mercedes Clase V Avantgard LARGO (Ibiza)

| Campo | Valor |
|-------|-------|
| URL actual | https://hereandnowibiza.com/producto/mercedes-clase-v-220d-avantgard-largo-ibiza/ |
| Title actual | Mercedes Clase V 220d Avantgard LARGO - Here & Now |
| H1 actual | **AUSENTE** (nombre del vehículo es H2) |
| Meta description | **AUSENTE** |
| Precio | 130€/día |
| Destino | Ibiza |
| Palabras aprox. | 411 |
| **Decisión** | **KEEP_AND_IMPROVE** |

**Contenido a conservar:**
- Galería de 6 fotos del vehículo
- Especificaciones técnicas completas
- Formulario de reserva con extras y coberturas
- Descripción del vehículo
- Información de requisitos (edad mínima, carnet)

**Mejoras críticas:**
- **Añadir H1** con el nombre completo del vehículo
- **Añadir meta description** — actualmente ausente
- **Mejorar alt texts** de todas las imágenes ("3125 MSN 43" → descripción real)
- Añadir schema `Product` + `Offer` con precio
- Añadir **7ª foto** con logo (existe en WP: `3125-MSN-56_con-logo-scaled.jpg`)
- Añadir breadcrumb visible

**Destino nuevo:** /coches/mercedes-clase-v-avantgard-largo/ibiza/ o mantener estructura actual  
**Observaciones SEO:** La página de conversión más importante del sitio no tiene H1 ni meta description. Prioridad máxima de mejora.

---

### 2.2 Producto — Mercedes Clase V Avantgard LARGO (Alicante)

| Campo | Valor |
|-------|-------|
| URL actual | https://hereandnowibiza.com/producto/mercedes-clase-v-220d-avantgard-largo/ |
| Title actual | Mercedes Clase V 220d Avantgard LARGO - Here & Now (**idéntico a Ibiza**) |
| H1 actual | **AUSENTE** |
| Meta description | **AUSENTE** |
| Precio | 130€/día |
| Destino | Alicante |
| **Decisión** | **KEEP_AND_IMPROVE** |

**Diferencias respecto a Ibiza:**
- Ubicaciones de recogida diferentes (Oficina, Aeropuerto, Puerto de Alicante)
- Los extras se cobran por día en Alicante vs cargo único en Ibiza — **inconsistencia a revisar**

**Mejoras críticas:**
- Mismo conjunto de mejoras que Ibiza
- **Diferenciar title** del producto Ibiza
- **Resolver inconsistencia de precios de extras** (por día vs cargo único)

**Destino nuevo:** /coches/mercedes-clase-v-avantgard-largo/alicante/ o mantener  
**Observaciones SEO:** Title duplicado entre los dos únicos productos del sitio. El problema más urgente junto con la ausencia de H1/meta desc.

---

### 2.3 Productos en borrador — Clase V 220D Largo

| Campo | Valor |
|-------|-------|
| URL WordPress (Alicante) | /producto/mercedes-clase-v-220d-largo/ (ID 200, draft) |
| URL WordPress (Ibiza) | /producto/mercedes-clase-v-220d-largo-ibiza/ (ID 2187, draft) |
| Precio Alicante | 140€/día |
| Precio Ibiza | 250€/día |
| **Decisión** | **REVIEW** |

**Motivo de revisión:** Este vehículo tiene productos WooCommerce configurados en borrador desde junio 2024 (Alicante) y julio 2026 (Ibiza). El precio Ibiza (250€) vs Alicante (140€) es muy diferente — posible error. La página informativa existe pero está vacía. Requiere decisión de negocio sobre si publicar.

**Recomendación:** Si el vehículo va a ofrecerse, crear contenido completo y publicar. Si no, eliminar las páginas vacías indexadas.

---

### 2.4 Producto en borrador — Mercedes GLC 220d 4MATIC

| Campo | Valor |
|-------|-------|
| URL WordPress | /producto/mercedes-glc-220d-4matic/ (ID 222, draft) |
| Precio | 275€/día |
| Destino | Alicante |
| **Decisión** | **REVIEW** |

**Motivo:** El GLC tiene producto WooCommerce borrador, página informativa vacía, imágenes en la librería y aparece en el popup de reserva. Hay intención clara de ofrecerlo pero nunca se ha publicado.

**Observación:** Si se decide publicar, hay imágenes disponibles en la librería: `Screenshot_12.png`, `Mercedes-GLC-220d-4MATIC_-circulando.png`, `Mercedes-GLC-220d-4MATIC_circulando.png`. También hay un `vehicle` CPT borrador (ID 204: "Mercedes GLC 220d 4MATIC Coupé AMG A") que sugiere que la versión planificada era el Coupé AMG.

---

## III. PÁGINAS INFORMATIVAS DE VEHÍCULOS

---

### 3.1 Ficha informativa — Clase V Avantgard Largo

| Campo | Valor |
|-------|-------|
| URL actual | https://hereandnowibiza.com/mercedes-clase-v-220d-avantgard-largo-ibiza/ |
| Title actual | Mercedes Clase V 220D Avantgard Largo - Here & Now |
| H1 actual | **AUSENTE** |
| Meta description | **AUSENTE** |
| Palabras aprox. | 114 |
| Estado WP | page (publish) |
| **Decisión** | **MERGE** |

**Razonamiento:** Esta página informativa muestra el mismo vehículo que los productos WooCommerce con menos contenido y sin precio. Duplica el producto en Ibiza. Los botones "Reservar en Ibiza" y "Reservar en Alicante" en esta página ya enlazan a los productos.

**Acción:** Fusionar su contenido en la página de producto, y redirigir `/mercedes-clase-v-220d-avantgard-largo-ibiza/` al producto de Ibiza.

**Destino nuevo:** → redirigir a `/producto/mercedes-clase-v-220d-avantgard-largo-ibiza/`  
**Observaciones SEO:** La URL actual es buena para SEO por incluir el modelo. Si en la nueva web se cambia la estructura de URLs de productos, considerar tomar este slug como URL del producto.

---

### 3.2 Ficha informativa — Clase V 220D Largo (vacía)

| Campo | Valor |
|-------|-------|
| URL actual | https://hereandnowibiza.com/mercedes-clase-v-220d-largo/ |
| Title actual | Mercedes Clase V 220D Largo - Here & Now |
| H1 actual | **AUSENTE** |
| Meta description | **AUSENTE** |
| Palabras aprox. | 71 (solo nav/footer) |
| Estado WP | page (publish) + product (draft) |
| **Decisión** | **REVIEW** |

**Si el Clase V Largo se publica:** → `KEEP_AND_IMPROVE` con contenido real  
**Si no se publica:** → `REMOVE` + redirect a `/nuestra-flota/`

**Observaciones SEO:** Página indexada con 71 palabras y sin contenido de negocio. Señal de thin content negativa.

---

### 3.3 Ficha informativa — Mercedes GLC 220D 4MATIC (vacía)

| Campo | Valor |
|-------|-------|
| URL actual | https://hereandnowibiza.com/mercedes-glc-220d-4matic/ |
| Title actual | Mercedes GLC 220D 4MATIC - Here & Now |
| H1 actual | **AUSENTE** |
| Meta description | **AUSENTE** |
| Palabras aprox. | 71 (solo nav/footer) |
| Estado WP | page (publish) + product (draft) |
| **Decisión** | **REVIEW** |

**Misma situación que el Clase V Largo.** Si no se publica el producto, eliminar la página y redirigir a `/nuestra-flota/`.

---

## IV. PÁGINAS WOOCOMMERCE / FUNCIONALES

---

### 4.1 Mi cuenta

| URL | /mi-cuenta/ | Estado WP | publish |
|-----|-------------|-----------|---------|
| **Decisión** | **KEEP** | Robots | noindex |

Página estándar WooCommerce. Necesaria para el flujo de cliente. Ya tiene `noindex` (correcto).

---

### 4.2 Carrito

| URL | /carrito/ | Estado WP | publish |
|-----|-----------|-----------|---------|
| **Decisión** | **KEEP** | Robots | noindex |

Página estándar WooCommerce. Ya tiene `noindex` (correcto).

---

### 4.3 Finalizar compra

| URL | /finalizar-compra/ | Estado WP | publish |
|-----|-------------------|-----------|---------|
| **Decisión** | **KEEP** | Robots | noindex (efectivo) |

Redirección al carrito cuando está vacío. Necesaria para el flujo de compra.

---

## V. PÁGINAS DE FILTRO / TAXONOMÍAS

---

### 5.1 Filtros por pasajeros (brw_Pasajeros)

| URL | Título actual | Robots |
|-----|--------------|--------|
| /brw_Pasajeros/5/ | "5 archivos - Here & Now" | index |
| /brw_Pasajeros/8/ | — | index |
| /brw_Pasajeros/todos/ | — | index |
| **Decisión** | **REDIRECT** | |

**Razonamiento:** Estas páginas tienen títulos generados automáticamente ("5 archivos") sin valor semántico para el usuario. Con 1 o 2 productos activos, el filtro no aporta valor real. Deben redirigirse a `/nuestra-flota/` o a la búsqueda.

**Destino:** → /nuestra-flota/

---

### 5.2 Filtros por tipo de vehículo (brw_tipo)

| URL | Título actual | Robots |
|-----|--------------|--------|
| /brw_tipo/furgoneta/ | "Furgoneta archivos - Here & Now" | index |
| /brw_tipo/todos/ | — | index |
| **Decisión** | **REDIRECT** | |

**Razonamiento:** La categoría "Furgoneta" para un Mercedes Clase V premium es una clasificación inapropiada. En la nueva web, la taxonomía debe revisarse.

**Destino:** → /nuestra-flota/

---

### 5.3 Categorías de producto por ubicación (product_cat)

| URL | Título | Robots |
|-----|--------|--------|
| /categoria-producto/ibiza/ | "Ibiza archivos" | index |
| /categoria-producto/ibiza/aeropuerto-de-ibiza-ibiza/ | — | index |
| /categoria-producto/ibiza/puerto-de-ibiza-ibiza/ | — | index |
| /categoria-producto/ibiza/otro-punto-de-ibiza/ | — | index |
| /categoria-producto/alicante/ | "Alicante archivos" | index |
| /categoria-producto/alicante/oficina-de-alicante/ | — | index |
| /categoria-producto/alicante/aeropuerto-de-alicante/ | — | index |
| /categoria-producto/alicante/puerto-de-alicante/ | — | index |
| /categoria-producto/alicante/otro-punto-de-alicante/ | — | index |
| **Decisión** | **REDIRECT** | |

**Razonamiento:** Estas 9 páginas existen por la estructura de WooCommerce pero no aportan contenido de valor. Títulos como "Ibiza archivos" son inadecuados. El sistema de ubicaciones debe mantenerse en el backend pero no como páginas indexables.

**Destino:**
- `/categoria-producto/ibiza/` → /alquiler-coches-ibiza-mercedes/
- `/categoria-producto/alicante/` → /alquiler-coches-alicante-mercedes/
- Subcategorías → página de destino correspondiente

---

## VI. PÁGINAS LEGALES

---

### 6.1 Términos y Condiciones

| URL | /terminos-y-condiciones/ |
|-----|--------------------------|
| Title | Términos y Condiciones - Here & Now |
| Meta description | **AUSENTE** |
| **Decisión** | **KEEP** |

Contenido 100% relevante para el negocio de alquiler. Incluye coberturas, precios, cancelaciones. Conservar íntegro. Añadir meta description.

**Redirects que apuntan aquí:** `/reembolso_devoluciones/` ya redirige aquí.

---

### 6.2 Política de cancelación y devolución

| URL | /politica-de-cancelacion-y-devolucion/ |
|-----|----------------------------------------|
| **Decisión** | **KEEP** |

Relevante. Mantener.

---

### 6.3 Política de privacidad

| URL | /politica-privacidad/ |
|-----|-----------------------|
| **Decisión** | **KEEP** |

Obligatoria por ley. Mantener. Actualizar el responsable del tratamiento si cambia algo en la nueva empresa/estructura.

---

### 6.4 Aviso Legal

| URL | /aviso-legal/ |
|-----|---------------|
| **Decisión** | **KEEP** |

Obligatorio. Mantener.

---

### 6.5 Política de cookies

| URL | /politica-de-cookies-ue/ |
|-----|--------------------------|
| **Decisión** | **KEEP** |

Obligatorio. Mantener.

---

## VII. CONTENIDO A ELIMINAR

---

### 7.1 Sección "Grupo Here & Now" / Concierge en Homepage

| Elemento | Tipo | **Decisión** |
|---------|------|-------------|
| Sección #grupo en homepage | Sección de página | **REMOVE** |
| Texto concierge ("Villas de ensueño, escapadas náuticas...") | Contenido | **REMOVE** |
| Link "CONCIERGE Y SERVICIOS" | CTA | **REMOVE** |
| 7 tarjetas de servicios (villas, yates, restaurantes, eventos, concierge, seguridad, servicios medida) | Sección | **REMOVE** |

**Motivo:** El nuevo negocio no incluye ninguno de estos servicios.

---

### 7.2 Post residual WordPress

| URL | /hola-mundo/ | Título | ¡Hola, mundo! |
|-----|-------------|--------|----------------|
| **Decisión** | **REMOVE** + **REDIRECT** |

Post por defecto de WordPress sin ningún contenido de negocio. Está indexado (`index, follow`).

**Destino redirect:** → /

---

### 7.3 Página autor

| URL | /author/hereandnow/ |
|-----|---------------------|
| **Decisión** | **REMOVE** + **REDIRECT** |

Página de autor de WordPress sin contenido de negocio. Indexada.

**Destino redirect:** → /

---

### 7.4 Categoría de blog

| URL | /category/sin-categoria/ |
|-----|--------------------------|
| **Decisión** | **REMOVE** + **REDIRECT** |

**Destino redirect:** → /

---

## VIII. IMÁGENES

---

### 8.1 Imágenes a conservar

| Imagen | Motivo |
|--------|--------|
| `hereandnowibiza-logo.svg` | Logo activo — conservar |
| `3125-MSN-1_SIN-MATRICULA-scaled.jpg` (y los 5 archivos más de galería) | Fotos del vehículo activo — conservar |
| `3125-MSN-56_con-logo-scaled.jpg` | 7ª foto con logo — añadir a la galería del producto |
| `Coupe-AMG_circulando_1.png` | Si el GLC se publica — conservar; de lo contrario, revisar |
| `Circulando_VAN.png` | Ilustración del Clase V en movimiento — conservar |
| `tranquilo-hereandnow.jpg`, `rapido-hereandnow.jpg`, `seguro-hereandnow.jpg` | Imágenes de valores — conservar si la sección de valores se mantiene |
| `contacto.jpg` | Fondo de sección contacto — revisar |
| Vídeos MP4 (4K) | Potencial hero animado para nueva web — conservar |
| `whatsapp-icon.png/svg` | Implementar el botón WhatsApp que no está activo |
| `bizum6-1.webp`, `Pago-seguro-bizum.webp` | Método de pago — mantener si Bizum sigue disponible |

### 8.2 Imágenes a eliminar

| Imagen | Motivo |
|--------|--------|
| `eventos-hereandnow.jpg` | Concierge — servicio eliminado |
| `concierge-hereandnow.jpg` | Concierge — servicio eliminado |
| `conciertos-hereandnow.jpg` | Concierge/restaurantes — servicio eliminado |
| `seguridad-privada.jpg` | Seguridad privada — servicio eliminado |
| `servicios-medida.jpg` | Servicios a medida — servicio eliminado |
| `servicios-medida-here-now.jpg` | Ídem |
| `Property-1Variant2.png` | Fondo de sección Grupo/concierge — eliminar |
| `marvin-meyer-8CDuHXff3zo-unsplash-1.png` | Fondo de sección concierge — eliminar |
| `portrait-of-businessman-wearing-headset...` | Stock de concierge — eliminar |
| `serious-bodyguard-standing...` | Stock de seguridad privada — eliminar |
| `female-customer-service-representative...` | Stock de concierge — eliminar |
| `hola-mundo` imagen (si existe) | Post WordPress residual |

### 8.3 Imágenes a revisar

| Imagen | Motivo |
|--------|--------|
| `AdobeStock_280639425-1-scaled.jpeg` | Fondo de tarjeta valores — verificar si la imagen es apropiada (alt text decía "Campervan in mountains with sea view") y si la licencia está activa |
| `MATRICULA-shutterstock_2534555115-...png` | Fondo sección contacto — verificar licencia Shutterstock activa |
| `Foto-Mercedes-para-cartel.png` | Material de marketing offline — sin uso confirmado en web |
| `HappyHour-CTA-BG-Popup_170520.png` | Popup Happy Hour planificado — depende si la promo se mantiene |
| Imágenes de diseño antiguo (Van.png, Group-52.png, etc.) | Antiguas, no en uso — se pueden eliminar de la librería |

---

## IX. CONTENIDO SOLO EN WORDPRESS (no visible en web)

---

### 9.1 Cupones de descuento

| Código | **Decisión** | Nota |
|--------|-------------|------|
| HERE20 | **KEEP** | Probable campaña de marketing |
| HERE2025 | **KEEP** | Campaña 2025 |
| DRIVERS | **REVIEW** | Personalizado para conductores — verificar vigencia |
| TIKA | **REVIEW** | Propósito desconocido |
| isa 3 dias | **REVIEW** | Descuento para 3 días — posible descuento de fidelidad |
| PRUEBA | **REMOVE** | Código de prueba |

---

### 9.2 Custom Post Types (OVA BRW)

| CPT | **Decisión** | Nota |
|-----|-------------|------|
| `location` (5 ubicaciones) | **KEEP** | Son las ubicaciones de recogida del plugin |
| `vehicle` CPT activos (IDs 895 y 2183) | **REVIEW** | Se usan internamente por OVA BRW — verificar si siguen siendo necesarios |
| `vehicle` CPT drafts | **REVIEW** | Posibles vehículos futuros |

---

### 9.3 ACF Fields

| Grupo | **Decisión** |
|-------|-------------|
| Características coche | **KEEP** — datos del vehículo |
| Checkout (DNI, edad, nombre conductor adicional) | **KEEP** — datos del formulario |
| Pedido (hora recogida/entrega) | **KEEP** — datos operativos |

---

### 9.4 Elementor Library Templates

| ID | Título | **Decisión** |
|----|--------|-------------|
| 64 | Header #64 | **REMOVE** (nueva web tendrá nuevo header) |
| 77 | Footer #77 | **REMOVE** (ídem) |
| 102 | RESERVAS (popup) | **KEEP_AND_IMPROVE** — eliminar modelos no publicados del selector |
| 215 | Producto único #215 | **KEEP** — template de producto |
| 231 | Elemento de bucle #231 | **KEEP** — loop de productos |
| 855/872 | Resultados búsqueda (x2) | **MERGE** — un solo template de resultados |
| 6 | Kit por defecto | **KEEP** |
| 229, 252, 826 | Drafts varios | **REMOVE** |
| 2053 | Terminos | **REVIEW** — verificar si es una sección o página independiente |

---

## X. REDIRECTS RECOMENDADOS

| URL origen | URL destino | Tipo | Prioridad |
|-----------|------------|------|-----------|
| /contacto | /contacto-alquiler-coches-alicante-ibiza/ | Ya existe | — |
| /reembolso_devoluciones/ | /terminos-y-condiciones/ | Ya existe | — |
| /hola-mundo/ | / | 301 | Alta |
| /author/hereandnow/ | / | 301 | Media |
| /category/sin-categoria/ | / | 301 | Media |
| /brw_Pasajeros/5/ | /nuestra-flota/ | 301 | Media |
| /brw_Pasajeros/8/ | /nuestra-flota/ | 301 | Media |
| /brw_Pasajeros/todos/ | /nuestra-flota/ | 301 | Media |
| /brw_tipo/furgoneta/ | /nuestra-flota/ | 301 | Media |
| /brw_tipo/todos/ | /nuestra-flota/ | 301 | Media |
| /categoria-producto/ibiza/ | /alquiler-coches-ibiza-mercedes/ | 301 | Media |
| /categoria-producto/alicante/ | /alquiler-coches-alicante-mercedes/ | 301 | Media |
| /categoria-producto/ibiza/* | /alquiler-coches-ibiza-mercedes/ | 301 | Baja |
| /categoria-producto/alicante/* | /alquiler-coches-alicante-mercedes/ | 301 | Baja |
| /mercedes-clase-v-220d-avantgard-largo-ibiza/ | /producto/mercedes-clase-v-220d-avantgard-largo-ibiza/ | 301 | Alta |
| /mercedes-clase-v-220d-largo/ | /nuestra-flota/ (si no se publica el producto) | 301 | Media |
| /mercedes-glc-220d-4matic/ | /nuestra-flota/ (si no se publica el producto) | 301 | Media |

---

## Resumen final

### Contenido que conservamos (KEEP)

| Elemento | Cantidad |
|---------|---------|
| Páginas legales (T&C, privacidad, aviso legal, cancelación, cookies) | 5 |
| Páginas WooCommerce funcionales (mi-cuenta, carrito, finalizar-compra) | 3 |
| Productos activos | 2 |
| Taxonomías (brw_Pasajeros/tipo como sistema interno) | mantener en backend |
| Cupones HERE20, HERE2025 | 2 |
| CPT location (5 ubicaciones) | 5 |
| ACF field groups (3 grupos, 12 campos) | 3 grupos |
| Fuente ClashGrotesk | 5 pesos |
| Galería de 6 fotos del vehículo activo | 6 imágenes |
| **Total aprox.** | **~20 elementos** |

---

### Contenido que mejoramos (KEEP_AND_IMPROVE)

| Elemento | Mejora principal |
|---------|----------------|
| Homepage | Eliminar sección concierge; añadir og:image, schema CarRental |
| /nuestra-flota/ | Añadir H1; ampliar contenido; añadir más vehículos cuando se publiquen |
| /alquiler-coches-ibiza-mercedes/ | Corregir title duplicado; mejorar contenido SEO |
| /alquiler-coches-alicante-mercedes/ | Ídem |
| /alquiler-coches-mercedes/ | Corregir title; diferenciar o redirigir |
| /busqueda-coches-de-alquiler/ | Corregir ortografía; añadir H1 y meta description |
| /contacto-alquiler-coches-alicante-ibiza/ | Añadir H1; añadir info de contacto directa |
| /producto/.../ibiza/ | Añadir H1, meta desc, schema Product, más alt texts |
| /producto/.../ (Alicante) | Ídem; resolver inconsistencia de precios extras |
| Popup RESERVAS (ID 102) | Eliminar modelos no publicados del selector |
| **Total aprox.** | **~10 elementos** |

---

### Contenido que fusionamos (MERGE)

| Origen | Destino | Motivo |
|--------|---------|--------|
| /mercedes-clase-v-220d-avantgard-largo-ibiza/ | /producto/mercedes-clase-v-220d-avantgard-largo-ibiza/ | Duplicado con menos información; redirigir |
| Elementor templates "Resultados búsqueda" (ID 855 y 872) | Un único template | Dos versiones del mismo template |
| **Total** | **2 fusiones** | |

---

### Contenido que eliminamos (REMOVE)

| Elemento | Motivo |
|---------|--------|
| Sección Grupo Here & Now / Concierge completa de la homepage | Fuera del nuevo negocio |
| 7 tarjetas de servicio concierge | Ídem |
| /hola-mundo/ | Post residual WP sin contenido de negocio |
| /author/hereandnow/ | Página de autor sin valor |
| /category/sin-categoria/ | Categoría de blog vacía |
| Elementor drafts (229, 252, 826) | Templates abandonados |
| Cupón PRUEBA | Código de prueba |
| 6 imágenes de concierge (eventos, concierge, conciertos, seguridad, servicios-medida x2) | Servicios eliminados |
| Imágenes stock de concierge (bodyguard, customer service, businessman) | Ídem |
| `Property-1Variant2.png`, `marvin-meyer-8CDuHXff3zo-unsplash-1.png` | Fondos de sección concierge |
| Imágenes de diseño antiguas (Van.png, Group-52.png, mayo 2024) | Sin uso, obsoletas |
| **Total aprox.** | **~25 elementos** |

---

### Contenido pendiente de decidir (REVIEW)

| Elemento | Pregunta pendiente |
|---------|-------------------|
| Mercedes Clase V 220D Largo — borrador | ¿Se va a publicar este vehículo? Si sí: ¿a qué precio en Ibiza (140€ o 250€)? |
| Mercedes GLC 220D 4MATIC — borrador | ¿Se va a publicar este vehículo? ¿A 275€/día? ¿Solo Alicante o también Ibiza? |
| /mercedes-clase-v-220d-largo/ y /mercedes-glc-220d-4matic/ | Depende de la decisión sobre los borradores |
| /alquiler-coches-mercedes/ | ¿Mantener como landing genérica o redirigir a homepage? |
| Vídeos 4K (4 archivos MP4) | ¿Se usarán en hero animado de la nueva web? |
| Cupones DRIVERS, TIKA, "isa 3 dias" | ¿Siguen vigentes y son parte del nuevo negocio? |
| CPT vehicle (IDs 895, 2183) | ¿Son necesarios con el nuevo sistema de reservas? |
| Botón WhatsApp | ¿Se va a implementar en la nueva web? (icono preparado) |
| Bizum como método de pago | ¿Se mantiene en la nueva web? |
| Elementor template "Terminos" (ID 2053) | ¿Qué es? ¿Reutilizable? |
| `AdobeStock_280639425-1-scaled.jpeg` | Verificar vigencia de licencia y si la imagen es apropiada |
| `MATRICULA-shutterstock_2534555115-...png` | Verificar vigencia de licencia Shutterstock |
| Popup "Happy Hour" | ¿Se va a implementar en la nueva web? |
| **Total** | **~13 decisiones pendientes** |
