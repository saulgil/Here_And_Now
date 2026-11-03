# Inventario WordPress — hereandnowibiza.com

> Fuente: análisis del archivo `WordPress_2026-11-02.xml` (exportación completa de WordPress).  
> Comparado con: `docs/current-site/urls.md`, `cars.md`, `pages.md`, `images.md`.  
> Fecha de análisis: 2026-11-02

---

## Estadísticas del XML

| Post type | Total | Publicados | Borradores | Privados |
|-----------|-------|-----------|------------|---------|
| attachment | 111 | (todos inherit) | — | 2 (ZIPs) |
| page | 18 | 18 | 0 | 0 |
| post | 1 | 1 | 0 | 0 |
| product | 6 | 2 | 4 | 0 |
| vehicle | 5 | 2 | 3 | 0 |
| location | 5 | 5 | 0 | 0 |
| shop_coupon | 6 | 6 | 0 | 0 |
| elementor_library | 13 | 10 | 3 | 0 |
| nav_menu_item | 8 | 8 | 0 | 0 |
| acf-field-group | 3 | 3 | 0 | 0 |
| acf-field | 12 | 12 | 0 | 0 |
| wp_navigation | 1 | 1 | 0 | 0 |
| **TOTAL** | **192** | **172** | **10** | **2** |

---

## FOUND_ON_WEB

Contenido que aparece tanto en la web pública como en el XML.

### Páginas (page)

| ID | Título | Slug | Estado |
|----|--------|------|--------|
| 2 | Inicio | / | publish |
| 3 | Política de privacidad | /politica-privacidad/ | publish |
| 195 | Carrito | /carrito/ | publish |
| 196 | Finalizar compra | /finalizar-compra/ | publish |
| 197 | Mi cuenta | /mi-cuenta/ | publish |
| 198 | Términos y Condiciones | /terminos-y-condiciones/ | publish |
| 272 | Aviso Legal | /aviso-legal/ | publish |
| 291 | Política de cookies (UE) | /politica-de-cookies-ue/ | publish |
| 838 | Alquiler de coches Mercedes en Ibiza | /alquiler-coches-ibiza-mercedes/ | publish |
| 1069 | Política de cancelación y devolución | /politica-de-cancelacion-y-devolucion/ | publish |
| 1417 | Alquiler de coches Mercedes en Alicante | /alquiler-coches-alicante-mercedes/ | publish |
| 1448 | Contacto | /contacto-alquiler-coches-alicante-ibiza/ | publish |
| 1701 | Busqueda Coches de alquiler | /busqueda-coches-de-alquiler/ | publish |
| 1743 | Alquiler de coches Mercedes | /alquiler-coches-mercedes/ | publish |
| 1764 | Nuestra flota | /nuestra-flota/ | publish |
| 1772 | Mercedes Clase V 220D Avantgard Largo | /mercedes-clase-v-220d-avantgard-largo-ibiza/ | publish |
| 1794 | Mercedes GLC 220D 4MATIC | /mercedes-glc-220d-4matic/ | publish |
| 1802 | Mercedes Clase V 220D Largo | /mercedes-clase-v-220d-largo/ | publish |

### Productos WooCommerce activos (product)

| ID | Título | Slug | Estado | Precio |
|----|--------|------|--------|--------|
| 896 | Mercedes Clase V 220d Avantgard LARGO | /producto/mercedes-clase-v-220d-avantgard-largo/ | publish | 130€/día |
| 2176 | Mercedes Clase V 220d Avantgard LARGO | /producto/mercedes-clase-v-220d-avantgard-largo-ibiza/ | publish | 130€/día |

### Post y taxonomías visibles

| Tipo | Título | Slug | Estado |
|------|--------|------|--------|
| post | ¡Hola, mundo! | /hola-mundo/ | publish |
| brw_Pasajeros | 5 | /brw_Pasajeros/5/ | activo |
| brw_Pasajeros | 8 | /brw_Pasajeros/8/ | activo |
| brw_Pasajeros | Todos | /brw_Pasajeros/todos/ | activo |
| brw_tipo | Furgoneta | /brw_tipo/furgoneta/ | activo |
| brw_tipo | Todos | /brw_tipo/todos/ | activo |
| product_cat | Ibiza | /categoria-producto/ibiza/ | activo |
| product_cat | Alicante | /categoria-producto/alicante/ | activo |

### Elementor Library visible en web

| ID | Título | Tipo | Uso |
|----|--------|------|-----|
| 64 | Elementor Header #64 | header | Header del sitio |
| 77 | Elementor Footer #77 | footer | Footer del sitio |
| 102 | RESERVAS | popup | Popup FORMULARIO DE RESERVA |
| 215 | Elementor Producto único #215 | product | Template producto WooCommerce |
| 231 | Elementor Elemento de bucle #231 | loop-item | Loop de productos (flota) |
| 1695 | Elementor Resultados de búsqueda #1695 | search-results | Página de resultados |

---

## ONLY_IN_WORDPRESS

Contenido existente en WordPress que **no es visible públicamente** en la web analizada.

### Productos WooCommerce en borrador

| ID | Título | Slug | Estado | Precio | Disponibilidad |
|----|--------|------|--------|--------|---------------|
| 200 | Mercedes Clase V 220D Largo | /mercedes-clase-v-220d-largo/ | **draft** | **140€/día** | Alicante (aeropuerto, oficina, otro, puerto) |
| 222 | Mercedes GLC 220d 4MATIC | /mercedes-glc-220d-4matic/ | **draft** | **275€/día** | Alicante (aeropuerto, oficina, otro, puerto) |
| 2187 | Mercedes Clase V 220D Largo | /mercedes-clase-v-220d-largo-ibiza/ | **draft** | **250€/día** | Ibiza (aeropuerto, otro, puerto) |
| 2287 | Mercedes Clase V 220D Largo 1 | *(sin slug)* | **draft** | **140€/día** | Alicante |

**Nota crítica:** El Mercedes GLC 220d 4MATIC estaba configurado a **275€/día** y asignado solo a Alicante. El Clase V 220D Largo estaba a 140€/día. La versión borrador para Ibiza (ID 2187) tenía un precio de 250€/día, inusualmente más alto que la versión Alicante (140€). Puede ser un error de configuración o una política de precios diferenciada por temporada/destino.

### Custom Post Type `vehicle` (OVA BRW)

Este custom post type es el sistema de vehículos del plugin OVA BRW, paralelo al sistema de `product` de WooCommerce.

| ID | Título | Slug | Estado | Nota |
|----|--------|------|--------|------|
| 199 | Mercedes Clase V 220D Largo **A** | /mercedes-clase-v-220d-largo/ | draft | "A" = Alicante |
| 204 | Mercedes GLC 220d 4MATIC Coupé AMG **A** | /mercedes-glc-220d-4matic-coupe-amg/ | draft | "A" = Alicante — confirma que existía un GLC AMG Coupé planificado |
| 895 | MERCEDES CLASE V 220d avantgard LARGO **A** | /mercedes-clase-v-220d-largo-2/ | **publish** | "A" = Alicante — publicado en WordPress pero sin URL pública verificada |
| 2181 | Mercedes Clase V 220D Largo **I** | /mercedes-clase-v-220d-largo-i/ | draft | "I" = Ibiza |
| 2183 | MERCEDES CLASE V 220d avantgard LARGO **I** | /mercedes-clase-v-220d-avantgard-largo-i/ | **publish** | "I" = Ibiza — publicado en WordPress pero sin URL pública verificada |

**Nota:** El CPT `vehicle` es el sistema de vehículos nativo del plugin OVA BRW. Los IDs 895 y 2183 están publicados pero sus URLs no son accesibles públicamente como páginas web. Este sistema parece coexistir con el sistema de `product` de WooCommerce. Los slugs con sufijo "-2" e "-i" sugieren conflictos de slug durante la creación.

### Custom Post Type `location` (OVA BRW)

5 ubicaciones de recogida/entrega gestionadas como CPT. No tienen URLs públicas de contenido.

| ID | Título | Slug | Estado |
|----|--------|------|--------|
| 810 | Aeropuerto de Ibiza | /aeropuerto-de-ibiza/ | publish |
| 811 | Aeropuerto de Alicante | /aeropuerto-de-alicante/ | publish |
| 812 | Puerto de Ibiza | /puerto-de-ibiza/ | publish |
| 813 | Puerto de Alicante | /puerto-de-alicante/ | publish |
| 1226 | Oficina de Alicante | /oficina-de-alicante/ | publish |

### Cupones de descuento (shop_coupon)

| ID | Código | Notas |
|----|--------|-------|
| 1285 | **DRIVERS** | Vinculado a email `mjlopeznicolau@gmail.com` |
| 1302 | **TIKA** | — |
| 1304 | **isa 3 dias** | Vinculado a email `mjlopeznicolau@gmail.com` |
| 1463 | **PRUEBA** | Código de prueba |
| 1994 | **HERE20** | — |
| 2158 | **HERE2025** | — |

**Nota:** Los cupones DRIVERS e "isa 3 dias" están vinculados a un email específico, lo que sugiere descuentos personalizados para clientes o conductores frecuentes. `HERE20` y `HERE2025` son probablemente campañas de marketing (20% de descuento / código del año 2025).

### Campos ACF (Advanced Custom Fields)

**Grupo: Características coche (ID 208)**

| Campo | Clave |
|-------|-------|
| Especificaciones Generales del Vehículo | field_66704fe0e7b2f |
| Características y diseño | field_66705009e7b30 |
| Tecnología y seguridad | field_6670501ae7b31 |
| Paquetes adicionales | field_667053ed7ef10 |
| Observaciones | field_669112525fe96 |
| Descripción Larga del producto | field_673612f5f8937 |
| Sincronización | field_67e562bcffa8f |

**Grupo: Checkout (ID 1061)**

| Campo | Clave |
|-------|-------|
| Nombre y apellidos conductor adicional | field_66951f85bf701 |
| Edad conductor adicional | field_66951f99bf702 |
| DNI conductor adicional | field_66951fa5bf703 |

**Grupo: Pedido (ID 1308)**

| Campo | Clave |
|-------|-------|
| Hora de recogida | field_66a73612e0d4e |
| Hora de entrega | field_66a7363ce0d4f |

**Nota:** El campo "DNI conductor adicional" confirma que el sistema recoge el DNI del conductor adicional en el checkout — dato no visible en la navegación pública. El campo "Hora de recogida/entrega" indica que el sistema permite especificar hora exacta (no solo fecha).

### Atributo de producto: `pa_ubicacion`

WooCommerce tiene un atributo `pa_ubicacion` con valores `Alicante` e `Ibiza`. Este atributo no es visible como filtro en la navegación pública actual.

### Elementor Library — borradores

| ID | Título | Estado | Fecha |
|----|--------|--------|-------|
| 229 | Elementor Elemento de bucle #229 | draft | 2024-06-17 |
| 252 | Caract productos | draft | 2024-06-17 |
| 826 | Reservas-Plugin | draft | 2024-07-12 |

### Elementor Library — templates publicados no confirmados en web pública

| ID | Título | Slug | Fecha |
|----|--------|------|-------|
| 6 | Kit por defecto | /kit-por-defecto/ | 2024-05-21 |
| 855 | Resultados búsqueda | /resultados-busqueda/ | 2024-07-12 |
| 872 | Resultados busqueda | /resultados-busqueda-2/ | 2024-07-12 |
| 2053 | Terminos | /terminos/ | 2025-01-07 |

**Nota:** "Terminos" (ID 2053) es un Elementor template publicado en enero 2025. No es la página de T&C principal pero podría ser una versión alternativa o sección embebida.

### Imágenes en la librería de medios NO vistas en la web pública

#### Fotos adicionales del vehículo

| ID | Título | URL | Nota |
|----|--------|-----|------|
| 969 | 3125 MSN 56_con logo | /2024/07/3125-MSN-56_con-logo-scaled.jpg | **7ª foto** del vehículo — 2560×1707px, 289KB — **con logo de Here & Now** sobrepuesto |

#### Imágenes del Mercedes GLC 220D (no publicado)

| ID | Título | URL |
|----|--------|-----|
| 723 | Interior | /2024/06/Screenshot_9.png |
| 726 | Van Mercedes | /2024/06/Screenshot_10.png |
| 728 | Interior_van | /2024/06/Screenshot_11.png |
| 730 | Mercedes GLC 220d 4MATIC | /2024/06/Screenshot_12.png |
| 734 | Mercedes GLC 220d 4MATIC_ circulando | /2024/06/Mercedes-GLC-220d-4MATIC_-circulando.png |
| 736 | Mercedes GLC 220d 4MATIC_circulando | /2024/06/Mercedes-GLC-220d-4MATIC_circulando.png |
| 735 | VAN_ CIRCULANDO | /2024/06/VAN_-CIRCULANDO.png |

#### Imágenes adicionales de marketing

| ID | Título | URL | Nota |
|----|--------|-----|------|
| 1248 | bizum6-1 | /2024/07/bizum6-1.webp | Logo Bizum (método de pago) |
| 1249 | Pago-seguro-bizum | /2024/07/Pago-seguro-bizum.webp | Badge "Pago seguro Bizum" |
| 576 | whatsapp-icon | /2024/07/whatsapp-icon.png | WhatsApp icon (no visible en web) |
| 783 | whatsapp-icon (v2) | /2024/07/whatsapp-icon-1.png | WhatsApp icon alternativo |
| 784 | whatsapp-ico-han | /2024/07/whatsapp-ico-han.svg | WhatsApp icon SVG |
| 1545 | Headlights of black modern car | /2024/10/headlights-of-black-modern-car-...-scaled.jpg | Foto de faros de coche |
| 1546 | Foto Mercedes para cartel | /2024/10/Foto-Mercedes-para-cartel.png | Foto para material de marketing |
| 1549 | Imagen de WhatsApp 2024-10-28 | /2024/10/Imagen-de-WhatsApp-2024-10-28-a-las-09.56.00_b29abe05.jpg | Imagen enviada por WhatsApp |

#### Videos en librería de medios (NO visibles en web pública)

| ID | Título | URL | Formato |
|----|--------|-----|---------|
| 1404 | 2878084-uhd_3840_2160_24fps | /2024/10/2878084-uhd_3840_2160_24fps.mp4 | MP4 4K (3840×2160) |
| 1405 | 4372788-uhd_3840_2024_24fps | /2024/10/4372788-uhd_3840_2024_24fps.mp4 | MP4 4K (3840×2024) |
| 1486 | 1024 | /2024/10/1024.mp4 | MP4 |
| 1536 | 1028 | /2024/10/1028.mp4 | MP4 |
| 1873 | 1028 (1) | /2024/11/1028-1.mp4 | MP4 |
| 1874 | 1028 | /2024/11/1028.webm | WebM |

**Nota:** Hay 4 archivos de vídeo MP4 (2 en 4K) subidos en octubre 2024 que no están siendo utilizados en la web pública actual. Los nombres genéricos sugieren que son vídeos de stock. Podrían haberse planeado para un hero de vídeo o una sección de fondo animado.

#### Imágenes de servicios de concierge (stock photos)

| ID | Título | URL | Probable uso |
|----|--------|-----|-------------|
| 51 | portrait-of-businessman-wearing-headset... | /2024/05/ | Concierge / atención al cliente |
| 52 | serious-bodyguard-standing-with-sunglasses... | /2024/05/ | Seguridad privada |
| 53 | female-customer-service-representative... | /2024/05/ | Concierge / atención |

#### Activos de diseño (enero 2025)

| ID | Título | URL | Uso |
|----|--------|-----|-----|
| 2054 | Close-3.svg | /2025/01/Close-3.svg | Icono de cierre alternativo |
| 2055-2061 | h2shape_1-8.svg (7 archivos) | /2025/01/h2shape_X.svg | Formas decorativas para H2 |
| 2062 | HappyHour-CTA-BG-Popup_170520.png | /2025/01/HappyHour-CTA-BG-Popup_170520.png | Fondo de popup "Happy Hour" |

**Nota:** `HappyHour-CTA-BG-Popup_170520.png` sugiere que se planeó (o se implementó temporalmente) un popup de promoción "Happy Hour". No visible en la web actual.

#### Fuentes personalizadas (ClashGrotesk)

La web usa la fuente ClashGrotesk subida como font custom de Elementor:

| Peso | WOFF | WOFF2 | TTF |
|------|------|-------|-----|
| Regular | ✓ | ✓ | ✓ |
| Bold | ✓ | ✓ | ✓ |
| Light | ✓ | ✓ | ✓ |
| Extralight | ✓ | ✓ | ✓ |
| Semibold | ✓ | ✓ | ✓ |

15 archivos de fuente en total, en `/wp-content/uploads/2024/05/`.

#### Adjuntos privados (plugins ZIP)

| ID | Archivo | Estado |
|----|---------|--------|
| 2295 | auditor-update.zip | private |
| 2299 | Pasarela-Unificada-de-Redsys-para-Woocommerce-v2.1.1.zip | private |

**Nota:** El plugin de Redsys para WooCommerce fue subido como adjunto privado. Redsys es el procesador de pagos (tarjeta) que usa la web.

---

## POSSIBLE_DUPLICATES

### Productos con nombre idéntico

| Par | Tipo | Diferencia |
|-----|------|-----------|
| ID 200 (draft, Alicante, 140€) vs ID 2287 (draft, Alicante, 140€) | product | Ambos son "Mercedes Clase V 220D Largo" para Alicante. ID 2287 tiene el título "Largo 1" y sin slug. Probablemente ID 2287 es un duplicado del ID 200. |
| ID 200 (draft, Alicante) vs ID 2187 (draft, Ibiza) | product | Mismo nombre, distinto destino y precio diferente (140€ vs 250€). Son productos distintos. |

### Templates Elementor duplicados

| Par | Tipo |
|-----|------|
| ID 855 "Resultados búsqueda" vs ID 872 "Resultados busqueda" | elementor_library / search-results |

Dos templates de resultados de búsqueda con nombres casi idénticos. El ID 872 tiene slug `resultados-busqueda-2`, lo que indica que fue creado como copia del 855.

### Imágenes GLC en movimiento duplicadas

| Archivos | Nota |
|---------|------|
| `Coupe-AMG_circulando.png` (276KB) | Sí en web |
| `Coupe-AMG_circulando_1.png` (329KB) | Sí en web |
| `Mercedes-GLC-220d-4MATIC_-circulando.png` | Solo en WP |
| `Mercedes-GLC-220d-4MATIC_circulando.png` | Solo en WP |

4 imágenes del GLC en movimiento. Las dos del web son versiones distintas (el `_1` es ligeramente más grande). Las dos "solo en WP" son probablemente versiones anteriores del mismo render.

### Imágenes VAN duplicadas

| Archivos | Nota |
|---------|------|
| `Circulando_VAN.png` | Sí en web |
| `VAN_-CIRCULANDO.png` | Solo en WP |
| `Van.png` (2024/05) | Solo en WP (versión muy antigua) |
| `Van.png` (2024/06) | Solo en WP (segunda versión) |
| `Van-1.png` (2024/05) | Solo en WP |

### Imágenes del logo duplicadas

| Archivos |
|---------|
| `hereandnowibiza-logo.svg` (en uso) |
| `Logotipo-Logo-Marca-personal-Pastel-Amarillo.png` |
| `Logotipo-Logo-Marca-personal-Pastel-Amarillo-1.png` |
| `cropped-Logotipo-Logo-Marca-personal-Pastel-Amarillo.png` |
| `cropped-Logotipo-Logo-Marca-personal-Pastel-Amarillo-1.png` (favicon actual) |

5 versiones del logo. El SVG es el activo. Los PNG parecen ser versiones de trabajo o exportaciones de Canva/Figma.

### Property-1Variant2 duplicada

| Archivos |
|---------|
| `Property-1Variant2.png` (2024/05) — 45 |
| `Property-1Variant2.png` (2024/06) — 207 |
| `Property-1Variant2-1.png` (2024/06) — 223 |
| `Property-1Variant2-2.png` (2024/06) — 224 |

La imagen de fondo de la sección "Grupo Here & Now" tiene al menos 4 versiones en el sistema.

---

## POSSIBLE_OLD_CONTENT

### Imágenes de la fase inicial de diseño (mayo 2024)

Estas imágenes tienen fecha de subida mayo 2024 y no parecen estar en uso actual. Probablemente fueron maquetas o placeholders del diseño original.

| ID | Título | URL | Probable uso original |
|----|--------|-----|----------------------|
| 11 | kevin-bhagat-10tOJa4APL8-unsplash | /2024/05/ | Fondo o sección de la primera maqueta |
| 12 | Group 52 | /2024/05/ | Elemento de diseño |
| 14 | Nuestra flota | /2024/05/Nuestra-flota-e1716302144746.png | **Imagen de flota antigua** — probablemente la primera versión de la página de flota |
| 37 | Van | /2024/05/Van.png | Primera render del vehículo |
| 38 | Van (1) | /2024/05/Van-1.png | Segunda render del vehículo |
| 43-44 | Capa_1 (1/2) | /2024/05/ | Capas SVG de diseño (Illustrator?) |
| 47 | hassan-nizam-Y3Hbh7wB8CI-unsplash | /2024/05/ | Foto Unsplash sin usar |
| 49 | adrien-olichon-ZgREXhl8ER0-unsplash-1 | /2024/05/ | Foto Unsplash sin usar |
| 50 | pexels-wildlittlethingsphoto-705792 | /2024/05/ | Foto Pexels sin usar |
| 54 | viktor-theo-cyuRhbqG5AI-unsplash-1 | /2024/05/ | Foto Unsplash sin usar |
| 103 | martin-katler-y3neNkE6efI-unsplash | /2024/05/ | Foto Unsplash sin usar |

### Borradores de productos antiguos

| ID | Título | Fecha | Nota |
|----|--------|-------|------|
| 200 | Mercedes Clase V 220D Largo | 2024-06-11 | Primer borrador del producto Alicante. Existe desde junio 2024 — más de 1 año en borrador. |
| 222 | Mercedes GLC 220d 4MATIC | 2024-06-17 | Primer borrador del GLC. También más de 1 año en borrador. |
| 199 | Mercedes Clase V 220D Largo A (vehicle) | 2024-06-11 | Vehicle CPT borrador |
| 204 | Mercedes GLC 220d 4MATIC Coupé AMG A (vehicle) | 2024-06-17 | Vehicle CPT borrador del GLC AMG |

### Elementor templates en borrador

| ID | Título | Fecha | Nota |
|----|--------|-------|------|
| 229 | Elementor Elemento de bucle #229 | 2024-06-17 | Borrador de loop de productos |
| 252 | Caract productos | 2024-06-17 | Borrador de características |
| 826 | Reservas-Plugin | 2024-07-12 | Borrador de sistema de reservas (posiblemente la versión anterior al sistema actual) |

### Imágenes de stock de concierge (mayo 2024, posiblemente obsoletas)

Estas 3 imágenes de stock (guardaespaldas, servicio al cliente, operador con auriculares) fueron subidas en mayo 2024 con la fase de diseño inicial. Podrían ser las imágenes que se planearon para ilustrar la sección de concierge pero que luego no se usaron.

---

## UNKNOWN

| Elemento | Motivo |
|---------|--------|
| Qué contenido exacto tienen las páginas en estado `draft` (product, vehicle) | El XML contiene el contenido pero requeriría renderizar el HTML de Elementor para leerlo |
| Si el CPT `vehicle` está activo en el frontend | Las URLs `/mercedes-clase-v-220d-largo-2/` y `/mercedes-clase-v-220d-avantgard-largo-i/` no se visitaron durante el análisis web |
| Estado real del campo "Sincronización" (ACF) | Podría ser integración con un calendario externo o sistema de disponibilidad en tiempo real |
| A qué se refieren los vídeos `1024.mp4` y `1028.mp4` | Podrían ser vídeos del vehículo, de Ibiza o material para el hero del sitio |
| Por qué el borrador ID 2187 (Clase V Largo Ibiza) tiene un precio de 250€/día vs 140€/día del mismo modelo para Alicante | Posible error de configuración, precio de temporada alta, o política de precios diferenciada por destino |
| El popup "HappyHour" (ID 2062) | ¿Fue implementado y luego eliminado, o nunca llegó a publicarse? |
| Si `HERE20` y `HERE2025` son cupones activos o han caducado | La exportación XML no incluye fecha de expiración de los cupones |
| Contenido de la `image 1.svg` (ID 1184) | Nombre genérico, propósito desconocido |
| Qué representa exactamente la imagen `Foto-Mercedes-para-cartel.png` | Podría ser material para publicidad offline (vallas, flyers) |

---

## Resumen de diferencias clave entre web pública y WordPress

| Hallazgo | Impacto |
|---------|---------|
| **4 productos en borrador** (incluido el GLC a 275€/día) | Confirma que la web está preparada para añadir más modelos |
| **5 CPT location** (OVA BRW) | El sistema de localizaciones está gestionado internamente, no expuesto como páginas |
| **6 cupones de descuento** activos | El negocio ofrece descuentos. Los códigos DRIVERS/TIKA sugieren descuentos para conductores recurrentes |
| **ACF con DNI, hora exacta** en pedidos | El checkout recoge más datos de los visibles en el formulario público |
| **7ª foto del vehículo con logo** (no visible) | Hay una foto de vehículo sin publicar con la marca añadida |
| **Videos 4K no publicados** | Material audiovisual listo para usarse en la nueva web |
| **3 iconos WhatsApp** en la librería | El botón WhatsApp está preparado pero no implementado en la web actual |
| **Bizum como método de pago** (imágenes) | El sistema acepta Bizum, no solo tarjeta de crédito |
| **Fuente ClashGrotesk** personalizada | La nueva web debería mantener esta fuente si la identidad visual se conserva |
| **Happy Hour popup** (imagen de fondo existe) | Hubo o se planeó una acción promocional de "Happy Hour" |
