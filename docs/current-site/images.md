# Inventario de recursos visuales — hereandnowibiza.com

> Fuente: análisis con Playwright CLI (performance API, img tags, CSS backgrounds, data-bg attributes).  
> Fecha de análisis: 2026-11-02  
> Base URL de uploads: `https://hereandnowibiza.com/wp-content/uploads/`  
> Todas las dimensiones son en píxeles. Los tamaños de archivo son aproximados (encodedBodySize).

---

## Cómo se cargaron los recursos

| Método | Descripción |
|--------|-------------|
| `img` tag | Elemento `<img>` estándar en el HTML |
| `css` | `background-image` en una regla CSS (Elementor generado) |
| `data-bg` | Atributo `data-bg` de Elementor (lazy background) |
| `favicon` | Icono de pestaña del navegador |
| `srcset` | Versión responsive del mismo archivo |

---

## 1. LOGOS Y BRANDING

### 1.1 Logo principal

| Campo | Valor |
|-------|-------|
| Archivo | `hereandnowibiza-logo.svg` |
| URL completa | https://hereandnowibiza.com/wp-content/uploads/2024/07/hereandnowibiza-logo.svg |
| Formato | SVG |
| Dimensiones naturales | 361 × 69 px |
| Tamaño | 5 KB |
| Alt text | *(vacío)* |
| Cómo se carga | `<img>` tag |
| Páginas donde aparece | Todas (header + footer) |
| Apariciones | 3 por página (header desktop, footer, header mobile) |
| Propósito | Identidad de marca. Enlaza a la homepage. |
| Observación | **Alt text vacío** — afecta accesibilidad y SEO |

### 1.2 Favicon

| Campo | Valor |
|-------|-------|
| Archivo | `cropped-Logotipo-Logo-Marca-personal-Pastel-Amarillo-1-32x32.png` |
| URL completa | https://hereandnowibiza.com/wp-content/uploads/2024/07/cropped-Logotipo-Logo-Marca-personal-Pastel-Amarillo-1-32x32.png |
| Formato | PNG |
| Dimensiones | 32 × 32 px |
| Tamaño | 1 KB |
| Alt text | — |
| Cómo se carga | Meta tag (favicon) |
| Páginas donde aparece | Todas |
| Propósito | Icono de pestaña del navegador |
| Observación | El nombre incluye "Logotipo-Logo-Marca-personal-Pastel-Amarillo", lo que sugiere que proviene de una plantilla de logo genérica o Canva. Diferente al logo principal SVG. |

---

## 2. ICONOS Y ELEMENTOS UI

### 2.1 Flechas de carrusel — blancas

| Campo | Valor |
|-------|-------|
| Archivo izquierda | `arrow-left-here.svg` |
| Archivo derecha | `arrow-right-here.svg` |
| URL izquierda | https://hereandnowibiza.com/wp-content/uploads/2024/07/arrow-left-here.svg |
| URL derecha | https://hereandnowibiza.com/wp-content/uploads/2024/07/arrow-right-here.svg |
| Formato | SVG |
| Dimensiones | 18 × 38 px |
| Alt text | *(vacío)* |
| Cómo se carga | `<img>` tag |
| Páginas donde aparece | Homepage (carrusel de flota), /nuestra-flota/ |
| Propósito | Navegación del carrusel de vehículos (slider Slick.js) |
| Reutilizado | Sí — aparece duplicado por 2 carruseles (visible e invisible) |

### 2.2 Flechas de carrusel — negras

| Campo | Valor |
|-------|-------|
| Archivo izquierda | `arrow-left-black.svg` |
| Archivo derecha | `arrow-right-black.svg` |
| URL izquierda | https://hereandnowibiza.com/wp-content/uploads/2024/07/arrow-left-black.svg |
| URL derecha | https://hereandnowibiza.com/wp-content/uploads/2024/07/arrow-right-black.svg |
| Formato | SVG |
| Dimensiones | 20 × 34 px |
| Alt text | *(vacío)* |
| Cómo se carga | `<img>` lazy |
| Páginas donde aparece | Homepage (sección SEO) |
| Propósito | Navegación del carrusel de la sección SEO inferior |

### 2.3 Botón cerrar popup

| Campo | Valor |
|-------|-------|
| Archivo | `close-button-popup.svg` |
| URL | https://hereandnowibiza.com/wp-content/uploads/2024/06/close-button-popup.svg |
| Formato | SVG |
| Dimensiones | 36 × 36 px |
| Tamaño | 1 KB |
| Alt text | *(vacío)* |
| Cómo se carga | `<img>` tag |
| Páginas donde aparece | Todas (en popup Elementor ID 102) |
| Propósito | Cerrar el popup FORMULARIO DE RESERVA |

### 2.4 Flecha dropdown del buscador

| Campo | Valor |
|-------|-------|
| Archivo | `down-arrow.svg` (plugin ova-brw) |
| URL | https://hereandnowibiza.com/wp-content/plugins/ova-brw/assets/img/down-arrow.svg |
| Formato | SVG |
| Alt text | — |
| Cómo se carga | CSS del plugin |
| Páginas donde aparece | Páginas de producto WooCommerce |
| Propósito | Flecha de los selects en el formulario de reserva del plugin OVA BRW |

### 2.5 Banderas de idioma (plugin GTranslate)

| Campo | Valor |
|-------|-------|
| Archivo ES | `es.svg` (plugin gtranslate) |
| Archivo EN | `en.svg` (plugin gtranslate) |
| URL | https://hereandnowibiza.com/wp-content/plugins/gtranslate/flags/svg/ |
| Formato | SVG |
| Alt text | `"es"` / `"en"` |
| Páginas donde aparece | Todas |
| Propósito | Iconos del selector de idioma ES/EN |

---

## 3. VEHÍCULOS — FOTOS DEL MERCEDES CLASE V 220d AVANTGARD LARGO

Todas las fotos del vehículo son del mismo Mercedes Clase V 220d Avantgard LARGO. Se usan en: páginas de producto WooCommerce (tamaño completo), /nuestra-flota/ (tamaño completo mediante CSS background), páginas de destino Ibiza y Alicante (thumbnails 600px).

**Nombre interno del vehículo en los archivos: "3125 MSN"** (posiblemente matrícula o referencia interna).

### 3.1 Fotos de vehículo — tamaño completo ("scaled")

| # | Archivo | URL | Dimensiones | Tamaño | Alt text | Propósito |
|---|---------|-----|-------------|--------|----------|-----------|
| 1 | `3125-MSN-1_SIN-MATRICULA-scaled.jpg` | /uploads/2024/07/3125-MSN-1_SIN-MATRICULA-scaled.jpg | 2560 × 1693 px | 224 KB | "3125 MSN 1_SIN MATRICULA" | Imagen principal (exterior frontal, sin matrícula) |
| 2 | `3125-MSN-28-scaled.jpg` | /uploads/2024/07/3125-MSN-28-scaled.jpg | 2560 × 1707 px | 179 KB | "3125 MSN 28" | Galería — exterior |
| 3 | `3125-MSN-43-scaled.jpg` | /uploads/2024/07/3125-MSN-43-scaled.jpg | 2560 × 1707 px | 451 KB | "3125 MSN 43" | Galería |
| 4 | `3125-MSN-40-scaled.jpg` | /uploads/2024/07/3125-MSN-40-scaled.jpg | 2560 × 1628 px | 388 KB | "3125 MSN 40" | Galería |
| 5 | `3125-MSN-26-scaled.jpg` | /uploads/2024/07/3125-MSN-26-scaled.jpg | 2560 × 1707 px | 246 KB | "3125 MSN 26" | Galería — exterior lateral |
| 6 | `3125-MSN-25-scaled.jpg` | /uploads/2024/07/3125-MSN-25-scaled.jpg | 2560 × 1707 px | 122 KB | "3125 MSN 25" | Galería |

**Páginas donde aparece (tamaño completo):**
- /producto/mercedes-clase-v-220d-avantgard-largo-ibiza/ (galería WooCommerce)
- /producto/mercedes-clase-v-220d-avantgard-largo/ (galería WooCommerce)
- /nuestra-flota/ (como CSS background en el slider — solo fotos 1 y 5)

**Alt texts:** Todos son códigos internos ("3125 MSN X"). Ninguno es descriptivo.

### 3.2 Fotos de vehículo — thumbnails 600 px (WordPress auto-generated)

| Archivo | Dimensiones | Tamaño | Páginas donde aparece |
|---------|-------------|--------|-----------------------|
| `3125-MSN-1_SIN-MATRICULA-scaled-600x397.jpg` | 600 × 397 px | 35 KB | /alquiler-coches-ibiza-mercedes/, /alquiler-coches-alicante-mercedes/ |
| `3125-MSN-28-scaled-600x400.jpg` | 600 × 400 px | 29 KB | ídem |
| `3125-MSN-43-scaled-600x400.jpg` | 600 × 400 px | 50 KB | ídem |
| `3125-MSN-40-scaled-600x382.jpg` | 600 × 382 px | 41 KB | ídem |
| `3125-MSN-26-scaled-600x400.jpg` | 600 × 400 px | 43 KB | ídem |
| `3125-MSN-25-scaled-600x400.jpg` | 600 × 400 px | 36 KB | ídem |

---

## 4. VEHÍCULOS — IMÁGENES DE PROMO / CIRCULANDO (modelos no activos)

### 4.1 Mercedes GLC 220D 4MATIC Coupé AMG — en movimiento (img tag)

| Campo | Valor |
|-------|-------|
| Archivo | `Coupe-AMG_circulando_1.png` |
| URL | https://hereandnowibiza.com/wp-content/uploads/2024/06/Coupe-AMG_circulando_1.png |
| Formato | PNG |
| Dimensiones naturales | 951 × 633 px |
| Tamaño | 329 KB |
| Alt text | *(vacío)* |
| Cómo se carga | `<img>` lazy (srcset disponible) |
| Páginas donde aparece | Homepage (sección SEO "Alquiler de Mercedes") |
| Propósito | Ilustración del GLC AMG en la sección de texto SEO sobre alquiler de Mercedes |
| Observación | Es del modelo GLC AMG Coupé que aparece en el popup pero no tiene producto activo |

### 4.2 Mercedes GLC 220D 4MATIC Coupé AMG — en movimiento (CSS background)

| Campo | Valor |
|-------|-------|
| Archivo | `Coupe-AMG_circulando.png` |
| URL | https://hereandnowibiza.com/wp-content/uploads/2024/06/Coupe-AMG_circulando.png |
| Formato | PNG |
| Tamaño | 276 KB |
| Alt text | — (es CSS background) |
| Cómo se carga | CSS background-image |
| Páginas donde aparece | Homepage (sección "MERCEDES RENT A CAR / THE BEST OR NOTHING") |
| Propósito | Background de la sección de marca |
| Observación | **Posible duplicado de `Coupe-AMG_circulando_1.png`** — misma foto, diferente tratamiento. La diferencia en el nombre es el "_1" final y 53KB de diferencia en tamaño. Podrían ser versiones distintas del mismo render. |

### 4.3 Mercedes Clase V — furgoneta en movimiento

| Campo | Valor |
|-------|-------|
| Archivo | `Circulando_VAN.png` |
| URL | https://hereandnowibiza.com/wp-content/uploads/2024/06/Circulando_VAN.png |
| Formato | PNG |
| Dimensiones naturales | 951 × 630 px |
| Tamaño | 226 KB |
| Alt text | *(vacío)* |
| Cómo se carga | `<img>` lazy (srcset disponible) |
| Páginas donde aparece | Homepage (sección SEO "Alquiler de vehículos en Alicante") |
| Propósito | Ilustración del vehículo en la sección SEO de Alicante |
| Observación | Mismas dimensiones aproximadas que `Coupe-AMG_circulando_1.png`. Parecen renders del mismo estudio/proveedor. |

---

## 5. HOMEPAGE — SECCIÓN "NUESTROS VALORES" (4 tarjetas)

| # | Archivo | URL (parcial) | Tamaño | Alt | Método | Propósito |
|---|---------|----------------|--------|-----|--------|-----------|
| 1 | `detail-of-a-beauty-and-modern-car-2024-01-09-20-11-40-utc-scaled.jpg` | /uploads/2024/10/detail-of-a-beauty-and-modern-car... | 81 KB | — (bg) | `data-bg` | Background tarjeta **SEGURIDAD** |
| 2 | `tranquilo-hereandnow.jpg` | /uploads/2024/07/tranquilo-hereandnow.jpg | 120 KB | — (bg) | `data-bg` | Background tarjeta **CONFORT** |
| 3 | `rapido-hereandnow.jpg` | /uploads/2024/07/rapido-hereandnow.jpg | 56 KB | — (bg) | `data-bg` | Background tarjeta **RÁPIDO** |
| 4 | `AdobeStock_280639425-1-scaled.jpeg` | /uploads/2024/10/AdobeStock_280639425-1-scaled.jpeg | 56 KB | — (bg) | `data-bg` | Background tarjeta 4ª (SERVICIO / EXCLUSIVO) |
| 5 | `seguro-hereandnow.jpg` | /uploads/2024/07/seguro-hereandnow.jpg | 90 KB | *(vacío)* | `<img>` | Imagen SEGURIDAD (estado hover o estado visible) |

**Nota sobre `data-bg`:** Elementor carga estos backgrounds de forma lazy vía JavaScript cuando el elemento entra en el viewport. No están en CSS estático.

**Nota sobre `seguro-hereandnow.jpg`:** Este archivo se carga como `<img>` tag según la performance API pero no aparece en el DOM visible. Podría ser un preload JavaScript o una imagen de estado hover que se inyecta dinámicamente.

**Fuentes de stock:**
- `detail-of-a-beauty-and-modern-car-...` → Nombre de archivo de Getty Images / stock
- `AdobeStock_280639425-1-scaled.jpeg` → **Adobe Stock** (número de licencia 280639425)

---

## 6. HOMEPAGE — SECCIÓN "GRUPO HERE & NOW / CONCIERGE"

### 6.1 Fondo principal de la sección Grupo

| Campo | Valor |
|-------|-------|
| Archivo | `Property-1Variant2.png` |
| URL | https://hereandnowibiza.com/wp-content/uploads/2024/05/Property-1Variant2.png |
| Formato | PNG |
| Tamaño | 502 KB |
| Alt text | — (CSS background) |
| Cómo se carga | CSS background |
| Páginas donde aparece | Homepage (sección "CON TODA LA GARANTÍA DEL GRUPO / CONCIERGE Y SERVICIOS") |
| Propósito | Imagen de fondo de la sección principal del Grupo Here & Now |
| Observación | El nombre "Property-1Variant2" es típico de exportaciones de Figma o de librerías de design. Probablemente una imagen de propiedad/villa de lujo. 502KB — la más pesada de las backgrounds del sitio. |

### 6.2 Background seccionador (entre intro y tarjetas)

| Campo | Valor |
|-------|-------|
| Archivo | `marvin-meyer-8CDuHXff3zo-unsplash-1.png` |
| URL | https://hereandnowibiza.com/wp-content/uploads/2024/05/marvin-meyer-8CDuHXff3zo-unsplash-1.png |
| Formato | PNG |
| Tamaño | 107 KB |
| Alt text | — (CSS background) |
| Cómo se carga | CSS background |
| Páginas donde aparece | Homepage (sección intermedia en bloque Concierge) |
| Propósito | Background visual entre la introducción del grupo y las tarjetas de servicio |
| Observación | Fotografía de **Unsplash**, autor Marvin Meyer (ID `8CDuHXff3zo`). Puede verificarse en unsplash.com. |

### 6.3 Tarjetas de servicio concierge (CSS backgrounds)

| # | Archivo | Tamaño | Propósito | Sección |
|---|---------|--------|-----------|---------|
| 1 | `eventos-hereandnow.jpg` | 93 KB | Background tarjeta **Eventos** | Concierge |
| 2 | `concierge-hereandnow.jpg` | 56 KB | Background tarjeta **Concierge 24/7** | Concierge |
| 3 | `conciertos-hereandnow.jpg` | 95 KB | Background tarjeta **Restaurantes y reservas** (conciertos en Ibiza) | Concierge |
| 4 | `seguridad-privada.jpg` | 73 KB | Background tarjeta **Seguridad privada** | Concierge |
| 5 | `servicios-medida.jpg` | 28 KB | Background tarjeta **Servicios a medida** (versión pequeña) | Concierge |
| 6 | `servicios-medida-here-now.jpg` | 105 KB | Background tarjeta **Servicios a medida** (versión grande) | Concierge |

**URLs completas:**
- https://hereandnowibiza.com/wp-content/uploads/2024/07/eventos-hereandnow.jpg
- https://hereandnowibiza.com/wp-content/uploads/2024/07/concierge-hereandnow.jpg
- https://hereandnowibiza.com/wp-content/uploads/2024/07/conciertos-hereandnow.jpg
- https://hereandnowibiza.com/wp-content/uploads/2024/07/seguridad-privada.jpg
- https://hereandnowibiza.com/wp-content/uploads/2024/07/servicios-medida.jpg
- https://hereandnowibiza.com/wp-content/uploads/2024/07/servicios-medida-here-now.jpg

**Imágenes ausentes:** No se encontraron imágenes específicas para las tarjetas **Villas exclusivas** y **Yates y motos de agua**. Es posible que estas tarjetas usen degradados CSS u otro recurso visual no capturado, o que hayan sido eliminadas en una actualización reciente.

---

## 7. HOMEPAGE — SECCIÓN CONTACTO / EMAIL

### 7.1 Imagen de la sección contacto

| Campo | Valor |
|-------|-------|
| Archivo | `contacto.jpg` |
| URL | https://hereandnowibiza.com/wp-content/uploads/2024/10/contacto.jpg |
| Formato | JPG |
| Tamaño | 338 KB |
| Alt text | *(vacío)* |
| Cómo se carga | `<img>` tag (lazy) |
| Páginas donde aparece | Homepage y /contacto-alquiler-coches-alicante-ibiza/ |
| Propósito | Imagen visual en la sección del formulario de contacto / "DEJA TU EMAIL" |
| Observación | Una de las imágenes más pesadas del sitio (338KB). Tiene alt text vacío. |

### 7.2 Background sección de email / formulario

| Campo | Valor |
|-------|-------|
| Archivo | `MATRICULA-shutterstock_2534555115-e1730116692261.png` |
| URL | https://hereandnowibiza.com/wp-content/uploads/2024/10/MATRICULA-shutterstock_2534555115-e1730116692261.png |
| Formato | PNG |
| Tamaño | 278 KB |
| Alt text | — (CSS background) |
| Cómo se carga | CSS background |
| Páginas donde aparece | Homepage, /contacto |
| Propósito | Background de la sección "DEJA TU EMAIL" |
| Observación | El nombre incluye **Shutterstock** (ID 2534555115) y un timestamp Unix `e1730116692261`. Fotografía de stock de Shutterstock. El nombre "MATRICULA" sugiere que es una foto de un coche con matrícula visible. |

---

## 8. HOMEPAGE — SECCIÓN SEO (bloques de texto con imágenes)

| # | Archivo | Dimensiones naturales | Alt | Propósito | Sección |
|---|---------|----------------------|-----|-----------|---------|
| 1 | `Coupe-AMG_circulando_1.png` | 951 × 633 px | *(vacío)* | Ilustración "Alquiler de Mercedes" | SEO |
| 2 | `3125-MSN-25-scaled.jpg` | 2560 × 1707 px | *(vacío)* | Ilustración "Alquiler de vehículos en Ibiza" | SEO |
| 3 | `Circulando_VAN.png` | 951 × 630 px | *(vacío)* | Ilustración "Alquiler de vehículos en Alicante" | SEO |
| 4 | `3125-MSN-26-scaled.jpg` | 2560 × 1707 px | *(vacío)* | Ilustración "¿Por qué elegir nuestro servicio?" | SEO |

Estas 4 imágenes aparecen como `<img>` tags con `loading="lazy"` y `srcset` (responsive). Todas tienen **alt text vacío**.

---

## 9. TABLA COMPLETA DE RECURSOS

| # | Archivo | Fecha upload | Formato | Tamaño | Método | Alt | Páginas |
|---|---------|-------------|---------|--------|--------|-----|---------|
| 1 | `hereandnowibiza-logo.svg` | jul-2024 | SVG | 5 KB | img | vacío | Todas |
| 2 | `cropped-Logotipo-Logo-Marca-personal-Pastel-Amarillo-1-32x32.png` | jul-2024 | PNG | 1 KB | favicon | — | Todas |
| 3 | `arrow-left-here.svg` | jul-2024 | SVG | <1 KB | img | vacío | Home, Flota |
| 4 | `arrow-right-here.svg` | jul-2024 | SVG | <1 KB | img | vacío | Home, Flota |
| 5 | `arrow-left-black.svg` | jul-2024 | SVG | <1 KB | img lazy | vacío | Home |
| 6 | `arrow-right-black.svg` | jul-2024 | SVG | <1 KB | img lazy | vacío | Home |
| 7 | `close-button-popup.svg` | jun-2024 | SVG | 1 KB | img | vacío | Todas (popup) |
| 8 | `3125-MSN-1_SIN-MATRICULA-scaled.jpg` | jul-2024 | JPG | 224 KB | img + css-bg | código | Producto, Flota |
| 9 | `3125-MSN-28-scaled.jpg` | jul-2024 | JPG | 179 KB | img | código | Producto |
| 10 | `3125-MSN-43-scaled.jpg` | jul-2024 | JPG | 451 KB | img | código | Producto |
| 11 | `3125-MSN-40-scaled.jpg` | jul-2024 | JPG | 388 KB | img | código | Producto |
| 12 | `3125-MSN-26-scaled.jpg` | jul-2024 | JPG | 246 KB | img + img-bg | código | Producto, Flota, Home |
| 13 | `3125-MSN-25-scaled.jpg` | jul-2024 | JPG | 122 KB | img | código | Producto, Home |
| 14 | `3125-MSN-1_SIN-MATRICULA-scaled-600x397.jpg` | jul-2024 | JPG | 35 KB | img | vacío | Ibiza, Alicante |
| 15 | `3125-MSN-28-scaled-600x400.jpg` | jul-2024 | JPG | 29 KB | img | vacío | Ibiza, Alicante |
| 16 | `3125-MSN-43-scaled-600x400.jpg` | jul-2024 | JPG | 50 KB | img | vacío | Ibiza, Alicante |
| 17 | `3125-MSN-40-scaled-600x382.jpg` | jul-2024 | JPG | 41 KB | img | vacío | Ibiza, Alicante |
| 18 | `3125-MSN-26-scaled-600x400.jpg` | jul-2024 | JPG | 43 KB | img | vacío | Ibiza, Alicante |
| 19 | `3125-MSN-25-scaled-600x400.jpg` | jul-2024 | JPG | 36 KB | img | vacío | Ibiza, Alicante |
| 20 | `Coupe-AMG_circulando_1.png` | jun-2024 | PNG | 329 KB | img lazy | vacío | Home (SEO) |
| 21 | `Coupe-AMG_circulando.png` | jun-2024 | PNG | 276 KB | CSS bg | — | Home (RENT A CAR) |
| 22 | `Circulando_VAN.png` | jun-2024 | PNG | 226 KB | img lazy | vacío | Home (SEO) |
| 23 | `detail-of-a-beauty-and-modern-car-2024-01-09-20-11-40-utc-scaled.jpg` | oct-2024 | JPG | 81 KB | data-bg | — | Home (valores) |
| 24 | `tranquilo-hereandnow.jpg` | jul-2024 | JPG | 120 KB | data-bg | — | Home (valores) |
| 25 | `rapido-hereandnow.jpg` | jul-2024 | JPG | 56 KB | data-bg | — | Home (valores) |
| 26 | `AdobeStock_280639425-1-scaled.jpeg` | oct-2024 | JPEG | 56 KB | data-bg | — | Home (valores) |
| 27 | `seguro-hereandnow.jpg` | jul-2024 | JPG | 90 KB | img (hover?) | vacío | Home (valores) |
| 28 | `Property-1Variant2.png` | may-2024 | PNG | 502 KB | CSS bg | — | Home (Grupo) |
| 29 | `marvin-meyer-8CDuHXff3zo-unsplash-1.png` | may-2024 | PNG | 107 KB | CSS bg | — | Home (Grupo) |
| 30 | `eventos-hereandnow.jpg` | jul-2024 | JPG | 93 KB | CSS bg | — | Home (concierge) |
| 31 | `concierge-hereandnow.jpg` | jul-2024 | JPG | 56 KB | CSS bg | — | Home (concierge) |
| 32 | `conciertos-hereandnow.jpg` | jul-2024 | JPG | 95 KB | CSS bg | — | Home (concierge) |
| 33 | `seguridad-privada.jpg` | jul-2024 | JPG | 73 KB | CSS bg | — | Home (concierge) |
| 34 | `servicios-medida.jpg` | jul-2024 | JPG | 28 KB | CSS bg | — | Home (concierge) |
| 35 | `servicios-medida-here-now.jpg` | jul-2024 | JPG | 105 KB | CSS bg | — | Home (concierge) |
| 36 | `contacto.jpg` | oct-2024 | JPG | 338 KB | img lazy | vacío | Home, Contacto |
| 37 | `MATRICULA-shutterstock_2534555115-e1730116692261.png` | oct-2024 | PNG | 278 KB | CSS bg | — | Home, Contacto |

**Total: 37 archivos únicos** (excluyendo banderas de idioma del plugin GTranslate y recursos de plugins externos)

---

## 10. ANÁLISIS FINAL

### 10.1 Imágenes probablemente reutilizables en la nueva web

| Imagen | Justificación |
|--------|--------------|
| `3125-MSN-1_SIN-MATRICULA-scaled.jpg` | Foto exterior del vehículo sin matrícula — idónea para hero/cabecera de la ficha. Alta resolución (2560px). |
| `3125-MSN-28/43/40/26/25-scaled.jpg` | Galería de fotos del vehículo. Todas a 2560px. Pendiente verificar si son interior/exterior, ángulos. |
| `hereandnowibiza-logo.svg` | Logo vectorial — reutilizable tal cual. |
| `eventos-hereandnow.jpg` | Imagen de producción propia con branding "here-now". Reutilizable si el servicio de eventos continúa. |
| `concierge-hereandnow.jpg` | Ídem. |
| `seguridad-privada.jpg` | Ídem. |
| `tranquilo/rapido-hereandnow.jpg` | Propias con branding. Podrían usarse para sección de valores en la nueva web. |

### 10.2 Imágenes de baja calidad o problemáticas

| Imagen | Problema |
|--------|---------|
| `3125-MSN-43-scaled.jpg` | **451 KB** — la más pesada de la galería. Sin versión WebP visible. |
| `contacto.jpg` | **338 KB** — muy pesada para una imagen de sección. Sin WebP. |
| `MATRICULA-shutterstock_2534555115-e1730116692261.png` | **278 KB** en PNG — debería ser JPG/WebP. |
| `Property-1Variant2.png` | **502 KB** en PNG — la imagen más pesada del sitio. Nombre de archivo genérico. |
| `Coupe-AMG_circulando_1.png` | **329 KB** en PNG — el formato PNG no es óptimo para fotografías. |
| `Circulando_VAN.png` | **226 KB** en PNG — ídem. |
| Todos los imgs en SEO section | Alt text vacío en imágenes con `loading="lazy"` — perjudica SEO y accesibilidad. |

### 10.3 Posibles duplicados

| Par | Tipo | Motivo de sospecha |
|-----|------|-------------------|
| `Coupe-AMG_circulando.png` (276KB) y `Coupe-AMG_circulando_1.png` (329KB) | Probable duplicado | Mismo vehículo en la misma escena, mismo nombre base, diferencia de 53KB. Probablemente misma foto con diferente compresión o recorte. |
| `servicios-medida.jpg` (28KB) y `servicios-medida-here-now.jpg` (105KB) | Probable duplicado / versiones | Mismo nombre base. La de 28KB podría ser una versión thumbnail o recortada. Son dos elementos DOM distintos pero mismo sujeto visual. |
| `3125-MSN-X-scaled.jpg` (full) y `3125-MSN-X-scaled-600xY.jpg` (thumb) | Thumbnails generados | WordPress genera las versiones 600px automáticamente. No son duplicados en sentido estricto — son derivados del mismo archivo original. |

### 10.4 Recursos que convendría sustituir

| Recurso | Recomendación |
|---------|---------------|
| `AdobeStock_280639425-1-scaled.jpeg` | Imagen con licencia Adobe Stock — verificar que la licencia siga vigente para el nuevo sitio. El nombre del archivo revela el origen. |
| `MATRICULA-shutterstock_2534555115-e1730116692261.png` | Imagen con licencia Shutterstock — ídem. El nombre del archivo revela el origen. |
| `marvin-meyer-8CDuHXff3zo-unsplash-1.png` | Fotografía de Unsplash (posiblemente bajo licencia libre pero conviene verificar la licencia Unsplash actual). |
| `Property-1Variant2.png` | Nombre genérico (posiblemente de Figma/Canva). Verificar origen y licencia. 502KB en PNG. |
| Todos los alt texts vacíos | Los 14+ recursos con alt text vacío deben recibir textos descriptivos en la nueva web. |
| Todas las imágenes PNG de fotografías | `Coupe-AMG_circulando.png`, `Coupe-AMG_circulando_1.png`, `Circulando_VAN.png`, `Property-1Variant2.png`, `marvin-meyer-*.png`, `MATRICULA-*.png` — las fotografías en PNG deberían migrarse a JPG/WebP para optimización de peso. |

### 10.5 Imágenes ausentes notables

- **Hero de la homepage**: No existe una imagen hero independiente. La sección hero usa un fondo oscuro/degradado sobre el buscador. El fondo visual debajo del H1 no proviene de un archivo identificado — puede ser un color CSS.
- **Imágenes para Ibiza y Alicante como destinos**: No hay imágenes fotográficas de las ciudades (playas, panoramas, etc.) — las landing pages de Ibiza y Alicante usan exclusivamente fotos del vehículo.
- **Tarjetas Villas y Yates**: Las tarjetas de servicios "Villas exclusivas" y "Yates y motos de agua" no tienen imagen de fondo identificada — posiblemente usan gradientes CSS.
- **Fotos de interiores del Mercedes**: La galería del vehículo en los productos WooCommerce solo muestra 6 fotos. No se pudo determinar si hay fotos del interior del habitáculo.
