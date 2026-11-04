# Revisión de flota — Here & Now

> Fecha: 2026-11-03 (revisión 3 — modelos reales confirmados)
> Fuentes consultadas: `data/cars.ts`, `docs/content/cars-final.md`, `docs/content/migration-report.md`,
> `docs/content/content-migration.md`, `docs/current-site/cars.md`, `docs/current-site/wordpress-inventory.md`,
> `docs/development/implementation-status.md`.
> Objetivo: confirmar qué vehículos son reales y cuáles no, sin inventar ninguno.
> **Regla aplicada: la aplicación solo muestra vehículos `CONFIRMED`.**

---

## ✅ Nota importante sobre los dos vehículos CONFIRMED

El negocio ha confirmado los modelos comerciales reales y definitivos de los dos vehículos de la
flota:

1. **Mercedes-Benz Clase V 250 d Avantgarde Largo** (Ibiza)
2. **Mercedes-Benz Clase V 250 d Avantgarde Largo 4MATIC** (Alicante)

Las denominaciones "Mercedes Clase V 220D Avantgard Largo" e "Mercedes Clase V 220D Largo" usadas
en la revisión anterior de este documento procedían literalmente de WordPress/WooCommerce (nombres
de producto en el sitio antiguo) y quedan sustituidas por las anteriores, ahora confirmadas por el
negocio como la denominación comercial exacta de cada vehículo. La diferencia entre ambos —
**4MATIC** (tracción total) frente a tracción trasera estándar— confirma que **no son el mismo
vehículo físico**, resolviendo la duda planteada en la revisión anterior sobre una posible
duplicación.

Se mantienen **como dos entradas separadas en `data/cars.ts`**, cada una disponible en su destino
ya confirmado (Ibiza / Alicante).

Lo que sigue pendiente, cuando el negocio confirme los datos definitivos:
- Fotografías reales (ninguno de los dos tiene foto real propia hoy).
- Especificaciones técnicas propias e independientes del vehículo de Alicante (hoy heredadas del
  de Ibiza como mejor dato disponible, ver tabla abajo).
- Metadatos SEO definitivos de cada ficha.
- Potencia (CV), maletero, consumo y dimensiones de ambos vehículos (nunca publicados en la web
  original).

---

## Resultado directo de la comprobación

**Ahora mismo existen exactamente dos (2) vehículos `CONFIRMED`** en `data/cars.ts`, cada uno
disponible en un único destino:

| Vehículo | `_id` | Slug | Destino | Precio |
|---|---|---|---|---|
| Mercedes-Benz Clase V 250 d Avantgarde Largo | `car-mercedes-clase-v-avantgard-largo` | `mercedes-clase-v-250d-avantgarde-largo` | Ibiza | 130€/día |
| Mercedes-Benz Clase V 250 d Avantgarde Largo 4MATIC | `car-mercedes-clase-v-largo` | `mercedes-clase-v-250d-avantgarde-largo-4matic` | Alicante | 140€/día |

Verificado funcionalmente: `getCarsByLocation('ibiza')` devuelve únicamente el primero;
`getCarsByLocation('alicante')` devuelve únicamente el segundo; `getAllCars()`, `getActiveCars()`,
`getCarBySlug()` y `getAllCarSlugs()` operan correctamente sobre ambos (comprobado con un script
de verificación ejecutado contra `lib/data/cars.ts`, eliminado tras la comprobación).

| Clasificación | Nº de vehículos |
|---|---|
| `CONFIRMED` | 2 |
| `POSSIBLE` | 1 |
| `INCOMPLETE` | 1 |
| `OLD_CONTENT` (no son vehículos, contenido relacionado obsoleto) | 4 elementos |

---

## CONFIRMED

### 1. Mercedes-Benz Clase V 250 d Avantgarde Largo (Ibiza)

| Campo | Detalle |
|---|---|
| **Origen de la información** | `docs/current-site/cars.md` (VEHÍCULO 1 — análisis directo con Playwright de la web real), `docs/content/cars-final.md` (car-001, marcado `[VERIFIED]`), `docs/current-site/wordpress-inventory.md` (producto WooCommerce ID 2176, estado `publish`); modelo comercial exacto confirmado directamente por el negocio en esta revisión |
| **Estado** | `CONFIRMED` |
| **Datos disponibles** | Nombre, marca, modelo, variante, año (2024), categoría, 8 pasajeros, 4 puertas + laterales automáticas, transmisión automática 9G-TRONIC, diésel, color exterior/interior, llantas, condiciones de alquiler (edad mínima 26, carnet mínimo 2 años, 250 km/día, 0,50€/km extra), descripción corta y completa (ES), 8 features, precio 130€/día verificado en Ibiza, puntos de recogida (aeropuerto, puerto), extras (facturación `one_time`) y coberturas (franquicia 850€, fianza 1.500€, cobertura total 45,50€) |
| **Datos faltantes** | Potencia (CV), capacidad de maletero, consumo, dimensiones — nunca publicados en la web original (`UNKNOWN` en `cars.md`); `fullDescription` en inglés; fotos reales (ver nota de imágenes); fianza exacta de la cobertura total (`depositAmountCard` puesto a 0 como desconocido) |
| **¿Aparece hoy en la web?** | **Sí.** `active: true`, disponible solo en Ibiza. Visible en `/flota`, `/flota/mercedes-clase-v-250d-avantgarde-largo`, `/ibiza` |
| **Recomendación** | Mantener. Pendiente no bloqueante: potencia/maletero y fotos reales del negocio |

### 2. Mercedes-Benz Clase V 250 d Avantgarde Largo 4MATIC (Alicante)

| Campo | Detalle |
|---|---|
| **Origen de la información** | `docs/current-site/wordpress-inventory.md` (producto WooCommerce ID 200, `draft`, 140€/día, destino Alicante — confirmado como real por decisión del negocio), `docs/content/cars-final.md` (car-002); modelo comercial exacto (incluida la variante 4MATIC) confirmado directamente por el negocio en esta revisión |
| **Estado** | `CONFIRMED` (confirmado explícitamente por el negocio; el producto original en WordPress estaba en estado `draft`/página vacía, pero su existencia como vehículo real de la flota, y su modelo exacto, han sido confirmados) |
| **Datos disponibles** | Nombre ("Mercedes-Benz Clase V 250 d Avantgarde Largo 4MATIC"), marca, modelo ("Clase V 250 d"), variante ("Avantgarde Largo 4MATIC"), destino (Alicante), precio 140€/día (dato del producto WooCommerce en borrador ID 200), puntos de recogida (aeropuerto, oficina, puerto — mismos que el resto de la flota en Alicante) |
| **Datos faltantes — y cómo se han resuelto** | La ficha pública de este producto estaba completamente vacía (`docs/current-site/wordpress-inventory.md`, VEHÍCULO 3: *"La página está vacía… UNKNOWN"*). Por decisión explícita del negocio, los campos técnicos **obligatorios** del modelo de datos (`passengers`, `doors`, `transmission`, `fuel`, `minAge`, `minLicenseYears`, `kmIncluded`, `kmExtraPrice`) se **heredan** del vehículo hermano (250 d Avantgarde Largo), ya que ambos son modelos Mercedes-Benz Clase V 250 d Avantgarde Largo (con y sin 4MATIC) — quedan marcados en `data/cars.ts` con el comentario `INHERITED / PENDING confirmation for this variant`. **No se ha inventado ningún equipamiento ni prestación**: `features` se deja como array vacío, no hay `fullDescription`, no hay `gearbox`/`colorExterior`/`colorInterior`/`wheels`/`power`/`luggage`, y no hay ninguna imagen (ni siquiera placeholder) |
| **¿Aparece hoy en la web?** | **Sí.** `active: true`, disponible solo en Alicante. Visible en `/flota`, `/flota/mercedes-clase-v-250d-avantgarde-largo-4matic`, `/alicante` |
| **Recomendación** | Mantener como vehículo confirmado del negocio. **Pendiente urgente**: obtener del negocio las especificaciones técnicas propias (no asumir que son idénticas a la variante sin 4MATIC de forma permanente), equipamiento real, descripción comercial y fotografías. Hasta entonces, el dato heredado es la mejor aproximación disponible, no un hecho verificado |

---

## POSSIBLE

### Mercedes GLC 220D 4MATIC

| Campo | Detalle |
|---|---|
| **Origen de la información** | `docs/current-site/wordpress-inventory.md` (VEHÍCULO 4), `docs/content/cars-final.md` (car-003) |
| **Estado** | `POSSIBLE` |
| **Datos disponibles** | Nombre, marca, modelo, variante (4MATIC), 1 producto WooCommerce en **borrador** solo en Alicante (ID 222, 275€/día), referencias de texto a franquicia (850€) y fianza TC (1.800€) para "GLC" en el copy de coberturas |
| **Datos faltantes** | Especificaciones técnicas completas, descripciones, disponibilidad en Ibiza (no configurada en ningún borrador), fotos de producción (solo 3 renders/capturas en librería de medios, ninguna publicada) |
| **¿Aparece hoy en la web?** | **No.** No existe en `data/cars.ts` |
| **Recomendación** | **No migrar.** A diferencia de los dos vehículos Clase V confirmados, este vehículo no ha sido confirmado por el negocio como real; además existe ambigüedad sin resolver con el vehículo siguiente (GLC Coupé AMG) |

---

## INCOMPLETE

### Mercedes GLC 220D 4MATIC Coupé AMG

| Campo | Detalle |
|---|---|
| **Origen de la información** | `docs/current-site/wordpress-inventory.md` (VEHÍCULO 5 — "solo en popup"), `docs/content/cars-final.md` (car-004) |
| **Estado** | `INCOMPLETE` |
| **Datos disponibles** | Únicamente el nombre, tal como aparece como opción seleccionable dentro del popup "FORMULARIO DE RESERVA" (Elementor ID 102) de la web antigua |
| **Datos faltantes** | Todo lo demás: sin página propia, sin producto WooCommerce (ni siquiera en borrador con precio), sin especificaciones, sin imágenes propias confirmadas, sin disponibilidad por destino |
| **¿Aparece hoy en la web?** | **No.** No existe en `data/cars.ts` ni en ningún otro lugar del código |
| **Recomendación** | **No migrar bajo ninguna circunstancia con el nivel de información actual.** Es el caso con menos evidencia de toda la flota |

---

## OLD_CONTENT

Contenido relacionado con la flota que **no son vehículos** reales y no deben migrarse ni influir en `data/cars.ts`:

| Elemento | Origen | Motivo |
|---|---|---|
| Taxonomía WooCommerce `brw_tipo/furgoneta` | `docs/current-site/wordpress-inventory.md` | Clasificaba el Clase V (monovolumen premium) como "Furgoneta" — clasificación inapropiada heredada de WordPress; `data/cars.ts` ya usa `category: 'Monovolumen'` sin este sistema de taxonomías |
| Cupones WooCommerce (`HERE20`, `HERE2025`, `DRIVERS`, `TIKA`, `isa 3 dias`, `PRUEBA`) | `docs/content/migration-report.md`, sección MANUAL_REVIEW | Sin equivalente en el modelo de datos actual; vigencia y condiciones no verificables |
| Popup "Happy Hour" (`HappyHour-CTA-BG-Popup_170520.png`) | `docs/content/migration-report.md`, sección MANUAL_REVIEW | Sin contenido ni condiciones definidas, nunca implementado |
| Sección "Grupo Here & Now" / servicios de concierge (villas, yates, restaurantes, eventos, seguridad) | `docs/content/content-migration.md` | Explícitamente fuera del nuevo negocio de solo alquiler de coches |

---

## Nota sobre imágenes

- **Mercedes-Benz Clase V 250 d Avantgarde Largo (Ibiza):** no existe ninguna foto real en este
  repositorio ni se llegó a subir ninguna a Sanity (Sanity estuvo vacío durante todo el
  desarrollo, ver `docs/development/implementation-status.md`, issue I-07). Existen 6 URLs
  documentadas en `docs/current-site/cars.md` apuntando al dominio WordPress antiguo, pero por
  decisión explícita del usuario **no se han descargado**. Se usa un placeholder SVG genérico
  (`public/images/cars/placeholder-mercedes-clase-v.svg`).
- **Mercedes-Benz Clase V 250 d Avantgarde Largo 4MATIC (Alicante):** no tiene ninguna imagen
  confirmada, **ni siquiera un placeholder** — su ficha pública estuvo siempre vacía y no hay
  ningún archivo gráfico asociado a este producto concreto en la documentación.
  `mainImage`/`gallery` se omiten deliberadamente en `data/cars.ts` en lugar de reutilizar la
  imagen del otro vehículo, para no sugerir una identidad visual confirmada que no existe.

---

## Conclusión

`data/cars.ts` contiene ahora **dos vehículos `CONFIRMED`** con sus modelos comerciales reales y
definitivos — **Mercedes-Benz Clase V 250 d Avantgarde Largo** (Ibiza) y **Mercedes-Benz Clase V
250 d Avantgarde Largo 4MATIC** (Alicante)—, cada uno disponible en un único destino, tal como ha
confirmado el negocio. El vehículo de Alicante reutiliza las especificaciones técnicas
obligatorias del vehículo de Ibiza como mejor dato disponible —explícitamente marcado como
pendiente de confirmación independiente—, sin inventar equipamiento, descripciones ni imágenes que
no existen en ninguna fuente documentada. Los vehículos GLC (4MATIC y Coupé AMG) permanecen fuera
del código por falta de evidencia suficiente.
