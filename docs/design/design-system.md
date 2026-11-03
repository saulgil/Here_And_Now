# Design System — Here & Now

> Stack: Next.js · Tailwind CSS · Sanity  
> Fecha: 2026-11-02  
> Estado: especificación de diseño — no implementar todavía

---

## 1. DIRECCIÓN VISUAL

### Concepto

**Precisión alemana. Luz mediterránea.**

La nueva Here & Now vive entre dos referencias: la austeridad de ingeniería de Mercedes y la luminosidad informal del Mediterráneo. El resultado es una web que se siente costosa sin ser fría, y playera sin ser descuidada. La fotografía del vehículo es la protagonista absoluta — el diseño existe para enmarcarla, no para competir con ella.

### Referentes visuales

| Referente | Qué tomamos |
|-----------|-------------|
| Mercedes-Benz.com | Blanco y espacio en blanco como lujo, tipografía precisa |
| Aesop | Economía formal, contenido sin decoración, jerarquía tipográfica |
| Porsche Rental | Fotografía de vehículo dominante, specs limpias, reserva directa |
| Nobu Ibiza | Paleta cálida mediterránea, sin tropicalismos, sin estereotipos |

### Lo que NO es

- No es un catálogo turístico con palmeras
- No es un comparador de precios con tablas grises
- No es un sitio de alquiler estándar con fondos azules
- No es una "agencia creativa" con animaciones en cada scroll

---

## 2. PRINCIPIOS

1. **La foto primero.** El espacio en blanco existe para que el vehículo respire. Ningún elemento compite visualmente con la fotografía del coche.
2. **Un paso a la vez.** Cada sección tiene un único objetivo. Las páginas de conversión no bombardean al usuario con opciones.
3. **Legible antes que bonito.** Si hay que elegir entre un tratamiento estético y legibilidad, gana la legibilidad siempre.
4. **Consistencia en los detalles.** La presencia es la suma de decisiones pequeñas: un spacing que cuadra, un peso tipográfico correcto, un color que no distrae.
5. **Rendimiento como lujo.** Un sitio lento no es premium. La velocidad de carga es parte de la experiencia de marca.

---

## 3. TIPOGRAFÍA

### Familias

| Rol | Familia | Uso |
|-----|---------|-----|
| Display / Headlines | **ClashGrotesk** | Títulos, precios, heroes, CTAs |
| Body / UI | **ClashGrotesk** | Texto corrido, labels, formularios |

> **Nota:** ClashGrotesk tiene 5 pesos disponibles como activos en la librería de medios del sitio actual (Regular, Light, Extralight, Semibold, Bold). Usando una sola familia con pesos distintos se reduce la carga de fuentes a cero adicional respecto al sitio actual.

**Fallback stack:**
```css
font-family: 'ClashGrotesk', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Pesos y su uso

| Peso | Variable Tailwind | Uso |
|------|-------------------|-----|
| 300 (Light) | `font-light` | Captions, etiquetas secundarias, texto auxiliar |
| 400 (Regular) | `font-normal` | Cuerpo de texto, párrafos, descripciones |
| 500 (Medium) | `font-medium` | Labels de formulario, nombres de campo, preguntas FAQ |
| 600 (Semibold) | `font-semibold` | H2, H3, precio destacado, CTA secundarios |
| 700 (Bold) | `font-bold` | H1, precios principales, CTA primarios |

### Escala tipográfica

Basada en fluido (clamp) para evitar breakpoints tipográficos manuales:

```
display-xl:  clamp(52px, 7vw, 96px)   / leading-[1.03] / font-bold
display-lg:  clamp(40px, 5vw, 72px)   / leading-[1.06] / font-bold
h1:          clamp(32px, 4vw, 52px)   / leading-[1.1]  / font-semibold
h2:          clamp(24px, 3vw, 40px)   / leading-[1.15] / font-semibold
h3:          clamp(20px, 2.2vw, 28px) / leading-[1.25] / font-semibold
h4:          18–20px                  / leading-[1.3]  / font-semibold
subheading:  14–16px                  / leading-[1.4]  / font-medium / tracking-[0.06em] / uppercase
body-lg:     18px                     / leading-[1.65] / font-normal
body:        16px                     / leading-[1.65] / font-normal
body-sm:     14px                     / leading-[1.6]  / font-normal
caption:     12px                     / leading-[1.5]  / font-light / tracking-[0.02em]
price:       clamp(28px, 3.5vw, 44px) / leading-[1.1]  / font-bold   / tracking-[-0.02em]
```

**Reglas fijas:**
- Body text: nunca por debajo de 16px (previene zoom automático en iOS)
- Línea de texto: máximo 70–75 caracteres de ancho (`max-width: 65ch` en prosa)
- H1 y H2: `text-wrap: balance` para evitar líneas sueltas
- Letras mayúsculas (`subheading`): siempre con `letter-spacing: 0.06em`
- Precios: `font-variant-numeric: tabular-nums` en columnas de datos

---

## 4. COLOR

### Paleta base

```css
/* Fondos */
--canvas:   #FAFAF8   /* Blanco cálido — fondo principal */
--surface:  #FFFFFF   /* Blanco puro — cards, formularios */
--stone:    #F2EFE9   /* Piedra arena — fondos alternativos suaves */
--mist:     #E5E3DE   /* Niebla — bordes, divisores */

/* Texto */
--ink:      #0E0E0C   /* Tinta casi-negro (cálido, no puro negro) */
--vapor:    #6B6B68   /* Texto secundario */
--fog:      #A4A4A0   /* Texto terciario, placeholders */

/* Acento premium */
--gold:     #B8965A   /* Dorado — CTAs, precios, highlights */
--gold-deep:#9A7A42   /* Dorado oscuro — hover del CTA primario */

/* Acento secundario */
--dusk:     #1C3556   /* Azul mediterráneo profundo — links, secciones oscuras */

/* Dark sections */
--night:    #111110   /* Fondo secciones oscuras (hero, CTA final) */
--night-2:  #1A1A18   /* Superficie en modo nocturno */
```

### Uso de los colores

| Token | Uso permitido | Uso prohibido |
|-------|--------------|--------------|
| `--gold` | Fondo de CTA primario, precio "desde", underlines de énfasis | Texto sobre fondo blanco (contraste insuficiente para texto pequeño) |
| `--ink` | Todo el texto corrido, sobre `--gold`, sobre `--canvas` | — |
| `--dusk` | Text links interactivos, secciones con fondo oscuro como alternativa al gold | Texto pequeño sobre `--canvas` (verificar contraste siempre) |
| `--fog` | Placeholders de formulario, captions, metadatos | Texto interactivo o de contenido |

### Verificación de contraste (WCAG AA)

| Combinación | Ratio | Cumple |
|-------------|-------|--------|
| `--ink` sobre `--canvas` | ≈15.8:1 | ✅ AAA |
| `--ink` sobre `--gold` | ≈6.4:1 | ✅ AA |
| `--ink` sobre `--surface` | ≈16.4:1 | ✅ AAA |
| `--vapor` sobre `--canvas` | ≈5.8:1 | ✅ AA |
| `--fog` sobre `--canvas` | ≈3.6:1 | ✅ AA (texto grande) / ⚠️ falla texto pequeño |
| `--dusk` sobre `--canvas` | ≈8.2:1 | ✅ AA |
| `--canvas` sobre `--night` | ≈13.5:1 | ✅ AAA |

> **Regla crítica:** `--gold` nunca como color de texto sobre fondos claros. Solo como fondo (con `--ink` encima) o como elemento decorativo de tamaño grande.

### Modo oscuro

El sistema actual no requiere modo oscuro completo — las secciones "dark" son componentes puntuales (`--night` como fondo), no un tema alternativo completo. Si se implementa modo oscuro en el futuro:

```css
:root[data-theme="dark"] {
  --canvas:  #111110;
  --surface: #1A1A18;
  --stone:   #222220;
  --mist:    #2E2E2C;
  --ink:     #F0EEEA;
  --vapor:   #8A8A88;
  /* --gold y --dusk se mantienen */
}
```

---

## 5. ESPACIADO

### Escala (base 4px)

```
space-1:   4px    / 0.25rem
space-2:   8px    / 0.5rem
space-3:   12px   / 0.75rem
space-4:   16px   / 1rem    ← unidad base
space-6:   24px   / 1.5rem
space-8:   32px   / 2rem
space-12:  48px   / 3rem
space-16:  64px   / 4rem
space-20:  80px   / 5rem
space-24:  96px   / 6rem
space-32:  128px  / 8rem
space-40:  160px  / 10rem
```

### Guías de uso

| Contexto | Espaciado recomendado |
|----------|-----------------------|
| Entre secciones de página | `space-24` – `space-32` (desktop) / `space-16` (mobile) |
| Padding interno de sección | `space-16` (mobile) / `space-24` (tablet) / `space-32` (desktop) |
| Entre elementos dentro de una sección | `space-8` – `space-16` |
| Padding de cards | `space-6` – `space-8` |
| Padding de botones | `14px space-8` (normal) / `10px space-6` (compact) |
| Gap entre items de grid | `space-6` (mobile) / `space-8` (desktop) |
| Espacio entre label e input | `space-2` |
| Espacio entre campos del formulario | `space-6` |

**Regla de sección:** Las secciones de las páginas de contenido tienen padding vertical de `clamp(48px, 8vw, 96px)`.

---

## 6. GRID Y LAYOUT

### Anchuras máximas

```
wrapper-full:   sin max-width (hero, banners)
wrapper-wide:   1440px (secciones con foto de fondo)
wrapper:        1280px (contenido estándar)
wrapper-narrow: 760px  (artículos, textos legales, formularios centrados)
```

### Grid de columnas

| Viewport | Columnas | Gutter | Margin |
|----------|----------|--------|--------|
| < 640px (mobile) | 4 col | 16px | 16px |
| 640–1024px (tablet) | 8 col | 24px | 24px |
| > 1024px (desktop) | 12 col | 32px | 48px |

### Breakpoints

```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1440px
```

### Composición de contenido (anchos frecuentes)

- Hero: `col-span-12` — full width
- Cuerpo de texto largo: `col-span-8 col-start-3` (centrado)
- Grid de coches (3 col): `col-span-4` cada tarjeta
- Grid de destinos (2 col): `col-span-6` cada tarjeta
- Formulario de reserva + sidebar: `col-span-7` + `col-span-5`
- Columna única en mobile: siempre `col-span-4` (full)

---

## 7. BORDES Y ELEVACIÓN

### Border radius

```
radius-sm:  4px   — botones, inputs, badges
radius-md:  8px   — cards, modales
radius-lg:  12px  — uso muy puntual (popup, drawer)
radius-full: 9999px — pills, tags
radius-none: 0    — imágenes full-bleed, secciones
```

**Regla:** Las imágenes dentro de cards heredan el border-radius superior del card (`overflow: hidden` en el card). Las imágenes sueltas no tienen radius.

### Sombras

Minimalistas. Se usan solo en hover states y elementos flotantes.

```
shadow-card:    0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.05)
shadow-hover:   0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.06)
shadow-modal:   0 16px 48px rgba(0,0,0,0.14), 0 6px 16px rgba(0,0,0,0.10)
```

Sin sombras por defecto en los cards. El hover añade `shadow-hover` + `translateY(-2px)` para indicar interactividad.

---

## 8. BOTONES

### Variantes

#### Primary (Dorado)
```css
background: var(--gold);
color: var(--ink);
border: none;
border-radius: var(--radius-sm);
padding: 14px 32px;
font: ClashGrotesk Semibold 14px;
letter-spacing: 0.06em;
text-transform: uppercase;
min-height: 48px;

/* Hover */
background: var(--gold-deep);
transform: translateY(-1px);
transition: all 150ms ease;

/* Active */
transform: scale(0.98);
```

#### Secondary (Contorno)
```css
background: transparent;
color: var(--ink);
border: 1.5px solid var(--ink);
border-radius: var(--radius-sm);
padding: 13px 31px; /* -1px por el borde */
/* mismo font que Primary */

/* Hover */
background: var(--ink);
color: var(--canvas);
transition: all 150ms ease;
```

#### Ghost (Texto con flecha)
```css
background: transparent;
color: var(--ink);
border: none;
padding: 0;
font: ClashGrotesk Semibold 14px;
letter-spacing: 0.04em;
display: inline-flex;
align-items: center;
gap: 8px; /* espacio con icono → */

/* Hover */
color: var(--gold);
gap: 12px; /* desplaza ligeramente la flecha */
transition: all 200ms ease;
```

#### Primary Dark (para secciones oscuras)
```css
/* Igual que Primary pero en sección --night */
background: var(--gold);
color: var(--ink);
```

#### Destructive / Alerta
Solo para acciones irreversibles (ej: cancelar reserva). No en el flujo normal.
```css
background: #B91C1C;
color: white;
```

### Tamaños

| Tamaño | Padding | Font | Uso |
|--------|---------|------|-----|
| lg | 16px 40px | 15px | CTAs hero, CTA reserva principal |
| md (default) | 14px 32px | 14px | CTAs en secciones, tarjetas |
| sm | 10px 20px | 13px | Acciones secundarias, tabla |

### Reglas de botones

- Mínimo `height: 48px` en todos los tamaños (accesibilidad)
- En mobile: CTA principal siempre a ancho completo (`width: 100%`)
- Nunca dos Primary buttons en la misma sección visible
- El texto del botón describe la acción exacta: "Reservar ahora", no "Haz clic aquí"
- Iconos en botones: alineados con el texto, tamaño 16px, sin relleno

---

## 9. CARDS

### Card de vehículo (fleet card)

```
Estructura:
┌─────────────────────────────────────┐
│  Imagen 16:10                       │
│  [Ibiza ✓] [Alicante ✓]   badge    │
├─────────────────────────────────────┤
│  MERCEDES CLASE V            (name) │
│  220d Avantgard LARGO        (sub)  │
│                                     │
│  👥8  ⚙️Auto  ⛽Diesel  📅2024   (specs) │
│                                     │
│  Desde 130€/día              (price)│
│  [Ver y reservar →]           (CTA) │
└─────────────────────────────────────┘

background: var(--surface)
border: 1px solid var(--mist)
border-radius: var(--radius-md)
padding: 20px
overflow: hidden

image:
  aspect-ratio: 16/10
  object-fit: cover
  border-radius: var(--radius-md) var(--radius-md) 0 0
  margin: -20px -20px 20px -20px (full bleed to edges)

Hover:
  box-shadow: var(--shadow-hover)
  transform: translateY(-2px)
  transition: all 250ms ease
```

### Card de destino (Ibiza / Alicante)

```
Estructura:
┌─────────────────────────────────────┐
│                                     │
│   Foto del destino (overlay oscuro) │
│                                     │
│   IBIZA             (nombre grande) │
│   X puntos de recogida    (detalle) │
│   [Alquilar en Ibiza →]      (CTA)  │
└─────────────────────────────────────┘

aspect-ratio: 4/3 (desktop) / 16/9 (mobile)
background-image: url(...)
background-size: cover
background-position: center

overlay:
  background: linear-gradient(0deg, rgba(14,14,12,0.75) 0%, rgba(14,14,12,0) 60%)
  
text: centrado verticalmente en la parte inferior
color del texto: var(--canvas)
```

### Card de punto de recogida

```
Estructura:
┌─────────────────────────────────────┐
│  [icono]  Aeropuerto de Ibiza       │
│           Terminal de llegadas       │
│           [Ver instrucciones →]     │
└─────────────────────────────────────┘

background: var(--stone)
border: 1px solid var(--mist)
border-radius: var(--radius-md)
padding: 20px 24px
```

---

## 10. INPUTS Y FORMULARIOS

### Input estándar

```css
height: 48px;
border: 1px solid var(--mist);
border-radius: var(--radius-sm);
background: var(--surface);
padding: 12px 16px;
font: ClashGrotesk Regular 16px; /* mínimo 16px para prevenir zoom en iOS */
color: var(--ink);
transition: border-color 150ms ease, box-shadow 150ms ease;

/* Focus */
border-color: var(--gold);
box-shadow: 0 0 0 3px rgba(184, 150, 90, 0.18);
outline: none;

/* Error */
border-color: #B91C1C;
box-shadow: 0 0 0 3px rgba(185, 28, 28, 0.15);

/* Disabled */
background: var(--stone);
color: var(--vapor);
cursor: not-allowed;

/* Placeholder */
color: var(--fog);
```

### Textarea

```css
/* Igual que input pero: */
min-height: 120px;
height: auto;
resize: vertical;
padding: 14px 16px;
line-height: 1.6;
```

### Select

```css
/* Mismo estilo que input */
appearance: none;
background-image: url("chevron-down icon SVG inline");
background-repeat: no-repeat;
background-position: right 16px center;
background-size: 16px;
padding-right: 44px;
cursor: pointer;
```

### Date picker

```css
/* Wrapper del input de fecha */
position: relative;
/* El ícono de calendario se posiciona sobre el input */
/* En desktop: date picker custom o biblioteca ligera */
/* En mobile: input type="date" nativo (mejor UX táctil) */
```

### Labels

```css
display: block;
font: ClashGrotesk Medium 14px;
color: var(--ink);
letter-spacing: 0.01em;
margin-bottom: 8px;
```

**Regla:** Las labels son siempre visibles sobre el campo, nunca solo como placeholder. El placeholder puede mostrar un ejemplo ("D/M/AAAA"), nunca el nombre del campo.

### Estructura de formulario

```
┌──────────────────────────────────────┐
│ Label (ClashGrotesk Medium 14px)     │
│ ┌────────────────────────────────┐   │
│ │  Input (16px)        [icono]   │   │
│ └────────────────────────────────┘   │
│ ⚠ Mensaje de error (14px, rojo)      │
└──────────────────────────────────────┘
```

Espacio entre campos: `gap: 24px` en el form container.

### Grupo de opciones (coberturas, extras)

```
┌──────────────────────────────────────┐
│ ○ Cobertura básica   Incluida 0€     │
│   Franquicia 850€ · Fianza 1.500€    │
│                                      │
│ ○ Cobertura total    45,50€/reserva  │
│   Sin franquicia · Asistencia incl.  │
└──────────────────────────────────────┘

Estado seleccionado:
  border: 2px solid var(--gold)
  background: rgba(184, 150, 90, 0.05)
```

### Checkbox y Radio

```css
/* Tamaño mínimo del elemento clickable: 24x24px */
/* Estilo personalizado con CSS (no nativo) para consistencia cross-browser */
accent-color: var(--gold); /* fallback para browsers modernos sin CSS custom */
```

### Resumen de precio (en formulario)

```
┌────────────────────────────────────┐
│ Resumen del alquiler               │
├────────────────────────────────────┤
│ 3 días × 130€/día         390,00€  │
│ Silleta de bebé             6,90€  │
│ Cobertura total            45,50€  │
├────────────────────────────────────┤
│ TOTAL                     442,40€  │
└────────────────────────────────────┘

font: tabular-nums para las cifras
Total: font-bold text-lg
```

---

## 11. NAVEGACIÓN

### Header principal

```
┌────────────────────────────────────────────────────────────────────┐
│  [Logo]      Ibiza ▾  Alicante ▾  Flota  Guías  Contacto  [Reservar]│
└────────────────────────────────────────────────────────────────────┘

height: 64px (desktop) / 56px (mobile)
padding: 0 48px (desktop) / 0 16px (mobile)

Estado inicial (sobre hero): 
  background: transparent
  backdrop-filter: none
  color del texto: var(--canvas)

Estado tras scroll (>80px):
  background: rgba(250, 250, 248, 0.96)
  backdrop-filter: blur(12px)
  color del texto: var(--ink)
  border-bottom: 1px solid var(--mist)
  transition: all 300ms ease

Logo: siempre visible, color se adapta al estado
CTA "Reservar": botón Primary siempre visible
```

### Dropdown del menú

```
┌──────────────────┐
│ Aeropuerto       │
│ Puerto           │
│ ─────────────    │
│ Ver toda Ibiza → │
└──────────────────┘

background: var(--surface)
border: 1px solid var(--mist)
border-radius: var(--radius-md)
box-shadow: var(--shadow-modal)
padding: 8px 0
min-width: 200px

Item:
  padding: 10px 20px
  font: Regular 15px
  color: var(--ink)
  hover: background: var(--stone)
```

### Navegación móvil

```
[Icono ≡]  →  Drawer deslizante desde la izquierda

Drawer:
  width: 100vw
  background: var(--canvas)
  padding: 24px 20px
  
Estructura del drawer:
  [Logo]            [× Cerrar]
  ─────────────────────────
  Ibiza
    ↳ Aeropuerto de Ibiza
    ↳ Puerto de Ibiza
  Alicante
    ↳ Aeropuerto de Alicante
    ↳ Oficina El Campello
    ↳ Puerto de Alicante
  Flota
  Guías
  Contacto
  ─────────────────────────
  [Reservar en Ibiza     →]
  [Reservar en Alicante  →]
  ─────────────────────────
  📞 625 305 620
```

### Breadcrumb

```
Inicio › Flota › Mercedes Clase V Avantgard LARGO

font: Regular 14px
color: var(--vapor)
separador: ›
último item: color: var(--ink) / font-medium

Schema BreadcrumbList generado en el componente
```

---

## 12. IMÁGENES

### Proporciones por tipo de uso

| Uso | Ratio | Notas |
|-----|-------|-------|
| Hero principal | 16:9 | Siempre full-width, nunca recortado verticalmente |
| Galería vehículo — foto principal | 16:10 | Amplia, protagonismo del coche |
| Galería vehículo — miniaturas | 4:3 | Más cuadradas para vista en grid |
| Card de flota | 16:10 | Mismo que galería |
| Card de destino | 4:3 | Para desktop; 16:9 en mobile |
| Card de punto de recogida | 3:2 | Opcional (puede ser sin imagen) |
| Foto de blog/guías | 16:9 | Header del artículo |
| Logo de marca | SVG | Sin dimensiones fijas |

### Tratamiento

- `object-fit: cover` en todos los contenedores con dimensiones fijas
- `object-position: center` por defecto; sobreescribir con hotspot de Sanity
- Los fondos oscuros en cards de destino: `linear-gradient(0deg, rgba(14,14,12,0.75) 0%, rgba(14,14,12,0) 60%)` — nunca overlay sólido
- Imágenes sobre fondos claros: sin tratamiento adicional
- Las fotos de vehículos NO llevan ningún filtro, ni siquiera sutil

### Calidad y optimización

- Formato: WebP con fallback JPEG (Sanity genera ambos automáticamente)
- Lazy loading: `loading="lazy"` en todas las imágenes fuera del fold
- Priority: `priority` en Next.js para la imagen del hero y la foto principal del vehículo
- `sizes` attribute: siempre configurado para no servir imágenes más grandes de lo necesario
- Blur placeholder: usar el blur hash de Sanity para imágenes lazy

### Alt text

- Obligatorio en todas las imágenes (el CMS bloquea la publicación sin él)
- Descriptivo: "Exterior frontal del Mercedes Clase V 220d en color negro"
- No repite el título de la página
- Los logos tienen alt = nombre de la empresa

### Lo que NO se hace con imágenes

- Sin filtros de color (sepia, viñeta, saturación)
- Sin marcos decorativos alrededor de fotografías
- Sin texto superpuesto sobre imágenes sin overlay de contraste suficiente
- Sin imágenes de stock evidentes (personas apuntando a cámaras, apretones de manos corporativos)
- Sin imágenes estiradas o deformadas

---

## 13. ICONOGRAFÍA

### Sistema

**Lucide React** — https://lucide.dev

Selección: ligero (~2KB por icono usado, tree-shaken), consistente, open source, stroke icons.

### Especificaciones

```
Tamaño default:  24px × 24px
Tamaño compact:  20px × 20px
Tamaño pequeño:  16px × 16px

Stroke width:    1.5px (todos los tamaños)
Color:           inherit (toma el color del texto circundante)
```

### Iconos frecuentes del proyecto

| Icono Lucide | Uso |
|-------------|-----|
| `MapPin` | Punto de recogida |
| `Plane` | Aeropuerto |
| `Anchor` | Puerto |
| `Building2` | Oficina |
| `Users` | Pasajeros |
| `Settings2` | Transmisión |
| `Fuel` | Combustible |
| `Calendar` | Fecha |
| `Shield` | Cobertura / Seguridad |
| `Phone` | Teléfono |
| `MessageCircle` | WhatsApp / Mensajes |
| `ArrowRight` | CTA ghost, next |
| `ChevronDown` | Dropdown |
| `X` | Cerrar |
| `Check` | Confirmación, disponibilidad |
| `AlertCircle` | Error |
| `Info` | Tooltip, información |
| `Star` | Rating |

### Reglas de iconografía

- Los iconos de specs del vehículo (pasajeros, transmisión, combustible) van siempre con texto, nunca solos
- El CTA primario no lleva icono — el botón habla por sí solo
- Los CTAs Ghost llevan `→` (ArrowRight) al final
- En botones: icono a la izquierda del texto si es una acción (guardar, enviar); a la derecha si es una dirección (ir a, ver más)
- Los iconos de cierre (×) en modales y drawers tienen label ARIA aunque el icono sea visible

---

## 14. MOVIMIENTO Y ANIMACIÓN

### Filosofía

Una animación está justificada cuando ayuda al usuario a entender algo. Cero animaciones por defecto; las que existen son respuestas, no decoración.

### Transiciones permitidas

```css
/* Colores en hover (botones, links, iconos) */
transition: color 150ms ease, background-color 150ms ease, border-color 150ms ease;

/* Elevación en hover de cards */
transition: box-shadow 250ms ease, transform 250ms ease;

/* Header al hacer scroll */
transition: background-color 300ms ease, backdrop-filter 300ms ease;

/* Apertura de drawer / modal */
transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1),
            opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);

/* Dropdown del menú */
transition: opacity 180ms ease, transform 180ms ease;
/* Transform: translateY(-4px) → translateY(0) al aparecer */

/* Acordeón FAQ */
transition: height 250ms ease, opacity 200ms ease;
```

### Animaciones de entrada al viewport

Solo para elementos de alto impacto visual. Máximo en 2–3 secciones por página.

```css
/* Fade in simple — para texto de secciones */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
animation: fadeIn 400ms ease-out forwards;
animation-delay: 100ms; /* stagger entre elementos */

/* Regla: el elemento está visible (opacity: 1) si JS no carga */
/* Usar intersection observer, con fallback visible */
```

### Hero con vídeo

```
autoplay: true
muted: true
loop: true
playsinline: true
poster: imagen de carga (del mismo frame)

/* Se pausa automáticamente si la pestaña no está activa */
/* No hay controles visibles */
```

### Lo que NUNCA se hace

- Parallax en imágenes de fondo
- Texto que aparece letra a letra (typewriter effect)
- Elementos flotando sin interacción del usuario
- Spin loaders que no terminan
- Animaciones de "aparición dramática" en elementos de la mitad inferior de la página
- Scroll snap agresivo
- Efectos de cursor personalizados
- Animaciones en cada elemento al hacer scroll (solo las secciones hero o de impacto)
- Hover effects con transforms >4px

### `prefers-reduced-motion`

**Obligatorio en la implementación:**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 15. MOBILE

### Filosofía mobile-first

Los diseños empiezan por el viewport de 390px (iPhone 14 estándar). La versión desktop es la expansión.

### Tamaños mínimos

| Elemento | Mínimo |
|---------|--------|
| Tap target (botones, links) | 48×48px |
| Font size (cualquier texto visible) | 14px |
| Font size (inputs) | 16px (previene zoom automático en iOS) |
| Ancho de columna de texto | 100% del viewport menos 32px de margen |

### Comportamientos específicos de mobile

**CTA sticky en página de vehículo:**
```
Posición: fixed bottom-0 left-0 right-0
Height: 72px + safe-area-inset-bottom
Background: var(--canvas) con sombra top
Contenido: Precio desde X€ · [Reservar]
Aparece: tras hacer scroll pasado la galería
```

**Navegación:**
- El header en mobile tiene solo: Logo + Hamburger
- El dropdown no existe en mobile — todo va al drawer
- El drawer se abre desde la izquierda, ocupa el 100% del ancho

**Formularios:**
- Los campos se apilan en columna única
- El date picker usa `input type="date"` nativo (mejor UX táctil)
- El formulario de reserva no es sidebar — es columna completa
- Los extras usan checkboxes generosas (tap area 48px de altura)

**Galería de fotos:**
- Carousel swipeable con swipe nativo
- Los bullets de paginación son puntos pequeños (no miniaturas, no hay espacio)
- Lightbox a pantalla completa con swipe para navegar

**Inputs:**
- Autocompletar habilitado donde tiene sentido (`autocomplete="email"`, `autocomplete="name"`)
- `inputmode="numeric"` en campos de edad
- `inputmode="email"` en campos de email (abre teclado correcto en iOS)

### Safe areas (iPhone notch, Dynamic Island, Android nav bar)

```css
padding-top: env(safe-area-inset-top, 0px);
padding-bottom: env(safe-area-inset-bottom, 0px);
padding-left: max(16px, env(safe-area-inset-left, 0px));
padding-right: max(16px, env(safe-area-inset-right, 0px));
```

El sticky bottom CTA suma `padding-bottom: env(safe-area-inset-bottom, 0px)` adicional.

---

## 16. ACCESIBILIDAD

### Estándar objetivo: WCAG 2.1 AA

### Focus ring

```css
/* Visible en todos los elementos interactivos con teclado */
:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 3px;
  border-radius: 2px; /* suaviza sin ocultar */
}

/* Nunca: outline: none sin reemplazarlo */
```

### Estructura semántica

```html
<!-- Estructura obligatoria en cada página -->
<header role="banner">…</header>
<nav aria-label="Navegación principal">…</nav>
<main id="main-content">…</main>
<footer role="contentinfo">…</footer>

<!-- Skip link (primer elemento del body) -->
<a href="#main-content" class="skip-link">Ir al contenido principal</a>
```

### ARIA en componentes

| Componente | ARIA requerido |
|-----------|---------------|
| Botones solo con icono | `aria-label="Cerrar"` |
| Acordeón FAQ | `aria-expanded`, `aria-controls` |
| Drawer/modal | `role="dialog"`, `aria-modal="true"`, `aria-labelledby` |
| Carousel | `role="region"`, `aria-label`, botones de prev/next con labels |
| Formulario | `<label for>` en todos los inputs; `aria-describedby` para errores |
| Live region de precio | `aria-live="polite"` en el resumen de precio al actualizar |
| Dropdown menú | `aria-haspopup="true"`, `aria-expanded` |

### Imágenes

```html
<!-- Imágenes informativas: siempre alt -->
<img src="…" alt="Exterior frontal del Mercedes Clase V en Ibiza">

<!-- Imágenes decorativas: alt vacío (no omitir el atributo) -->
<img src="icon-decorative.svg" alt="">

<!-- Imágenes con caption: no repetir en alt lo que dice el caption -->
```

### Formularios

- Labels persistentes (nunca solo placeholder)
- Los mensajes de error asociados con `aria-describedby`
- Los campos obligatorios marcados con `aria-required="true"` y señal visual
- El orden de tabulación sigue el orden visual

### Contraste mínimo

- Texto normal: 4.5:1
- Texto grande (>18px o >14px bold): 3:1
- Componentes UI (bordes de inputs, iconos): 3:1

---

## 17. QUÉ EVITAR

### Tipografía

- ❌ Más de dos familias tipográficas
- ❌ Texto en mayúsculas SIN `letter-spacing`
- ❌ Fuentes por debajo de 14px en cualquier texto visible
- ❌ Líneas de texto de más de 80 caracteres en prosa
- ❌ Más de 4 tamaños de tipografía distintos en una misma sección
- ❌ `font-weight: 900` o Black — no está en el sistema

### Color

- ❌ `--gold` como color de texto sobre fondos blancos/claros
- ❌ Gradientes de color (excepción: overlays de imagen con fondo oscuro)
- ❌ Colores neón o fluorescentes
- ❌ Más de 2 colores de acento en la misma página
- ❌ Textos gris claro sobre fondo blanco sin verificar contraste
- ❌ Pure black `#000000` — usar `--ink`

### Layout y componentes

- ❌ `border-radius` > 12px en elementos grandes (aspecto de app de consumo, no premium)
- ❌ Sombras en cascada (shadow sobre shadow sobre shadow)
- ❌ Dos CTAs Primary en la misma sección visible
- ❌ Cards con imagen cortada o deformada
- ❌ Grid con última fila incompleta y tarjeta solitaria estirada
- ❌ Modales sin botón de cierre accesible
- ❌ Contenido que desborde el viewport horizontalmente

### Animaciones

- ❌ Parallax en fondos
- ❌ Looping infinite animations en áreas de contenido (solo backgrounds/hero)
- ❌ Animaciones en más de 3 elementos simultáneos
- ❌ Transiciones >500ms en interacciones de usuario
- ❌ Efectos hover que desplazan elementos del layout
- ❌ Carruseles con auto-play sin controles o pausa

### Imágenes

- ❌ Imágenes de stock con personas posando (apretones de manos, señalando pantallas)
- ❌ Filtros de color sobre fotografías del vehículo
- ❌ Imágenes sin alt text
- ❌ Logotipos en formato JPEG (siempre SVG o PNG con transparencia)
- ❌ Fondos de patrón o textura decorativos

### SEO / Accesibilidad

- ❌ `outline: none` sin reemplazarlo por focus ring alternativo
- ❌ Información importante SOLO en imágenes (sin texto alternativo)
- ❌ Links "Haz clic aquí" sin contexto de destino
- ❌ Múltiples H1 por página
- ❌ Textos sobre imágenes sin suficiente overlay de contraste
- ❌ Formularios sin labels (solo placeholders)

### Mobile

- ❌ Hover effects sin fallback táctil
- ❌ Font-size < 16px en inputs (provoca zoom en iOS Safari)
- ❌ Tap targets < 44px
- ❌ Contenido que requiere orientación horizontal (landscape-only)
- ❌ Scroll horizontal en la página principal

---

## Resumen de tokens (referencia rápida)

```css
/* COLORS */
--canvas: #FAFAF8;   --surface: #FFFFFF;   --stone: #F2EFE9;
--mist: #E5E3DE;     --ink: #0E0E0C;       --vapor: #6B6B68;
--fog: #A4A4A0;      --gold: #B8965A;      --gold-deep: #9A7A42;
--dusk: #1C3556;     --night: #111110;

/* TYPE */
--font: 'ClashGrotesk', 'DM Sans', system-ui, sans-serif;

/* RADIUS */
--radius-sm: 4px; --radius-md: 8px; --radius-lg: 12px;

/* SHADOW */
--shadow-card: 0 1px 3px rgba(0,0,0,0.07);
--shadow-hover: 0 4px 16px rgba(0,0,0,0.08);
--shadow-modal: 0 16px 48px rgba(0,0,0,0.14);

/* TRANSITION */
--t-fast: 150ms ease;
--t-base: 250ms ease;
--t-slow: 300ms ease;
```
