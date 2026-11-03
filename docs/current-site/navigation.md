# Navegación — hereandnowibiza.com

> Fuente: análisis con Playwright CLI.  
> Fecha de análisis: 2026-11-02

---

## Header

El header es sticky (fijo en scroll). Contiene:

| Elemento | Tipo | Destino / Comportamiento |
|---------|------|--------------------------|
| Logo (Here & Now) | Link | https://hereandnowibiza.com/ |
| Menú de navegación principal | Nav | Ver detalle abajo |
| Selector de idioma ES / EN | Toggle JS | Misma URL; cambia contenido con JavaScript |
| Carrito | Link + contador | Anchor `#`, abre mini-carrito o va a /carrito/ |

El carrito muestra un contador de artículos (`0 Carrito` cuando vacío).

---

## Menú principal

El menú se llama `"Menú"` (atributo aria-label de la etiqueta `<nav>`).

### Estructura jerárquica

```
Nuestra flota          → /nuestra-flota/
  └─ Mercedes Clase V 220D Avantgard Largo  → /mercedes-clase-v-220d-avantgard-largo-ibiza/
  └─ Mercedes Clase V 220D Largo            → /mercedes-clase-v-220d-largo/

Grupo Here & Now       → /#grupo  (anchor en homepage)

Contacto               → /contacto  (redirige a /contacto-alquiler-coches-alicante-ibiza/)

Reserva                → (no tiene URL propia — activa un dropdown)
  └─ Alquiler de coches en Alicante  → /alquiler-coches-alicante-mercedes/
  └─ Alquiler de coches en Ibiza     → /alquiler-coches-ibiza-mercedes/
```

### Notas sobre el menú

- **"Nuestra flota"** tiene un submenú con los dos modelos de vehículos enlazados a páginas informativas (no a los productos WooCommerce directamente).
- **"Grupo Here & Now"** es un anchor a una sección dentro de la homepage, no una página independiente.
- **"Reserva"** es un ítem sin enlace que actúa como disparador de dropdown; sus dos hijos llevan a las páginas de destino (Ibiza / Alicante).
- **"Contacto"** en el menú usa la URL `/contacto` que redirige a la URL canónica `/contacto-alquiler-coches-alicante-ibiza/`.

---

## Selector de idioma

| Elemento | Comportamiento |
|---------|---------------|
| ES | Versión española (estado por defecto) |
| EN | Versión inglesa — misma URL, contenido traducido por JS |

Confirmado: al hacer clic en EN, el `<title>` cambia a `"Here & Now - Luxury Car Rental"` y todos los textos visibles se traducen. La URL no cambia. No hay rutas separadas `/en/`.

**Menú en inglés:**
```
Our fleet
  └─ Mercedes V Class 220D Avantgard Long
  └─ Mercedes V-Class 220D Long

Here & Now Group  → /#grupo

Contact

Booking
  └─ Car rental in Alicante
  └─ Car rental in Ibiza
```

---

## Navegación móvil

PENDING REVIEW — el análisis se realizó en viewport de escritorio. No se verificó explícitamente el comportamiento del menú en mobile. La web usa Elementor y con alta probabilidad el menú colapsa en un hamburger menu. Se requiere verificación adicional.

---

## Footer

El footer tiene 4 columnas.

### Columna 1 — Logo + Navegación principal

| Enlace | Destino |
|--------|---------|
| Logo | https://hereandnowibiza.com/ |
| RESERVA EN IBIZA | /alquiler-coches-ibiza-mercedes/ |
| RESERVA EN ALICANTE | /alquiler-coches-alicante-mercedes/ |
| NUESTRA FLOTA | /nuestra-flota/ |
| GRUPO HERE AND NOW | /#grupo |
| TÉRMINOS Y CONDICIONES | /terminos-y-condiciones/ |
| CONTACTO | /contacto-alquiler-coches-alicante-ibiza/ |

### Columna 2 — Redes sociales

| Elemento | Destino |
|---------|---------|
| ¡Síguenos en nuestras redes sociales! (H2) | Link a /alquiler-coches-ibiza-mercedes/ (NOTA: texto de encabezado enlazado a una página de producto, no a redes) |
| Instagram | https://www.instagram.com/hereandnowibiza/ |
| Facebook | Sin URL — enlace roto |
| Threads | https://www.threads.net/@hereandnowibiza |

### Columna 3 — Dirección

```
ALICANTE
Calle de la Figuera, 5. local 58
03560, El Campello Alicante
T. 625 305 620
```

- La dirección y el código postal son links a Google Maps.
- El teléfono tiene un link `tel:+34625305620`.

### Columna 4 — Legal

| Enlace | Destino |
|--------|---------|
| Política de privacidad | /politica-privacidad/ |
| Política de Cancelación y Devoluciones | /politica-de-cancelacion-y-devolucion/ |
| Aviso Legal | /aviso-legal/ |
| Política de cookies | /politica-de-cookies-ue/ |

---

## CTAs globales (aparecen en múltiples páginas)

| CTA | Tipo | Destino / Comportamiento | Páginas donde aparece |
|-----|------|--------------------------|----------------------|
| "Buscar" | Botón | Envía formulario de búsqueda | Homepage, Ibiza, Alicante, Búsqueda |
| "Reservar" (sticky) | Link | Anchor `#booking_form` | Páginas de producto WooCommerce |
| "Reservar en Ibiza" | Link | /producto/mercedes-clase-v-220d-avantgard-largo-ibiza/ | /nuestra-flota/, fichas |
| "Reservar en Alicante" | Link | /producto/mercedes-clase-v-220d-avantgard-largo/ | /nuestra-flota/, fichas |
| "FORMULARIO DE RESERVA" | Link popup | Elementor popup ID 102 | Homepage, /contacto |
| "Enviar" | Botón | Envía formulario de contacto | Homepage, /contacto |
| "Reservar" (formulario producto) | Botón | Submit reserva WooCommerce | Páginas de producto |

---

## Popup de reserva (Elementor ID 102)

Se activa desde el link "FORMULARIO DE RESERVA" en la homepage y en la página de contacto.

**Campos del formulario:**
- Lugar de recogida: Puerto de Ibiza / Puerto de Alicante / Aeropuerto de Ibiza / Aeropuerto de Alicante / Oficina de Alicante
- Lugar de entrega: mismas opciones
- Opción de garantía: Fianza / Seguro premium
- Modelo: MERCEDES V CLASS 220D AVANTGARD LONG / MERCEDES GLC 220D 4MATIC / MERCEDES GLC 220D 4MATIC COUPÉ AMG / MERCEDES V-CLASS 220D LONG
- Texto GDPR
- Botón de envío

**Nota:** El popup lista 4 modelos de vehículos pero solo 2 están disponibles como productos activos en WooCommerce.

---

## Enlace "Características técnicas" (en fichas de vehículo)

En las páginas de ficha de vehículo (ej. /mercedes-clase-v-220d-avantgard-largo-ibiza/) existe un `<h2>` "Características técnicas" que actúa como acordeón/expansor mostrando las especificaciones del vehículo.

---

## Enlace "Carrito" (header)

El enlace del carrito en el header usa `href="#"` y muestra un contador de artículos. WooCommerce gestiona la mini-cart mediante JavaScript.

---

## Enlace entre páginas informativas y productos

Las fichas de vehículo no-WooCommerce (ej. `/mercedes-clase-v-220d-avantgard-largo-ibiza/`) muestran un botón "Reservar" que enlaza a la página de producto WooCommerce (`/producto/mercedes-clase-v-220d-avantgard-largo-ibiza/`).

---

## Enlace "Ver términos y condiciones" (en productos)

En la página de producto WooCommerce existe un enlace:

```
Ver términos y condiciones.  →  /reembolso_devoluciones/#terminostab:4
```

Esta URL redirige a `/terminos-y-condiciones/`. El anchor `#terminostab:4` no se verificó si es funcional.

---

## Estructura jerárquica completa

```
/ (Homepage)
├── /nuestra-flota/
│   ├── /mercedes-clase-v-220d-avantgard-largo-ibiza/ [ficha informativa]
│   │   └── /producto/mercedes-clase-v-220d-avantgard-largo-ibiza/ [producto WC]
│   └── /mercedes-clase-v-220d-largo/ [ficha informativa]
├── /#grupo [anchor en homepage]
├── /contacto → /contacto-alquiler-coches-alicante-ibiza/
├── /alquiler-coches-ibiza-mercedes/
│   ├── /producto/mercedes-clase-v-220d-avantgard-largo-ibiza/ [producto WC]
│   ├── /brw_Pasajeros/5/
│   ├── /brw_Pasajeros/8/
│   ├── /brw_Pasajeros/todos/
│   ├── /brw_tipo/furgoneta/
│   └── /brw_tipo/todos/
├── /alquiler-coches-alicante-mercedes/
│   └── /producto/mercedes-clase-v-220d-avantgard-largo/ [producto WC]
├── /terminos-y-condiciones/
├── /politica-privacidad/
├── /aviso-legal/
├── /politica-de-cookies-ue/
└── /politica-de-cancelacion-y-devolucion/

Páginas WooCommerce:
├── /mi-cuenta/
├── /carrito/
└── /finalizar-compra/ → /carrito/

Páginas en sitemap sin link visible en navegación principal:
├── /alquiler-coches-mercedes/ [landing genérica]
├── /mercedes-glc-220d-4matic/ [ficha vehículo no activo]
├── /busqueda-coches-de-alquiler/ [resultados búsqueda]
└── /hola-mundo/ [post WP por defecto]

Categorías WooCommerce (indexadas):
├── /categoria-producto/ibiza/
│   ├── /categoria-producto/ibiza/aeropuerto-de-ibiza-ibiza/
│   ├── /categoria-producto/ibiza/puerto-de-ibiza-ibiza/
│   └── /categoria-producto/ibiza/otro-punto-de-ibiza/
└── /categoria-producto/alicante/
    ├── /categoria-producto/alicante/oficina-de-alicante/
    ├── /categoria-producto/alicante/aeropuerto-de-alicante/
    ├── /categoria-producto/alicante/puerto-de-alicante/
    └── /categoria-producto/alicante/otro-punto-de-alicante/
```
