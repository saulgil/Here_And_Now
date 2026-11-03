# Revisión de flota — Here & Now

> Fecha: 2026-11-03 (revisión 2 — confirmación de 2 vehículos reales)
> Fuentes consultadas: `data/cars.ts`, `docs/content/cars-final.md`, `docs/content/migration-report.md`,
> `docs/content/content-migration.md`, `docs/current-site/cars.md`, `docs/current-site/wordpress-inventory.md`,
> `docs/development/implementation-status.md`.
> Objetivo: confirmar qué vehículos son reales y cuáles no, sin inventar ninguno.
> **Regla aplicada: la aplicación solo muestra vehículos `CONFIRMED`.**

---

## ⚠️ Nota importante sobre los dos vehículos CONFIRMED

Las denominaciones usadas para ambos vehículos (**"Mercedes Clase V 220D Avantgard Largo"** e
**"Mercedes Clase V 220D Largo"**) proceden literalmente de WordPress/WooCommerce — son los
nombres exactos con los que cada producto existía en el sitio antiguo, uno por destino.

**Existe la posibilidad real de que ambos sean exactamente el mismo modelo físico de vehículo**,
simplemente nombrado de forma distinta en cada destino dentro de WordPress (un patrón que ya se
observa en otras partes del inventario — ver `docs/current-site/wordpress-inventory.md`,
sección `POSSIBLE_DUPLICATES`). Se mantienen **como dos entradas separadas en `data/cars.ts`**
por decisión explícita del negocio, para no asumir una equivalencia que no está confirmada.

Lo que podrá actualizarse más adelante, cuando el propietario del negocio confirme los datos
definitivos:
- Nombre comercial exacto de cada vehículo (o fusión en un único vehículo si se confirma que es
  el mismo modelo).
- Fotografías reales (ninguno de los dos tiene foto real propia hoy).
- Especificaciones técnicas propias e independientes del vehículo de Alicante (hoy heredadas del
  de Ibiza como mejor dato disponible, ver tabla abajo).
- Metadatos SEO definitivos de cada ficha.

---

## Resultado directo de la comprobación

**Ahora mismo existen exactamente dos (2) vehículos `CONFIRMED`** en `data/cars.ts`, cada uno
disponible en un único destino:

| Vehículo | `_id` | Slug | Destino | Precio |
|---|---|---|---|---|
| Mercedes Clase V 220D Avantgard Largo | `car-mercedes-clase-v-avantgard-largo` | `mercedes-clase-v-avantgard-largo` | Ibiza | 130€/día |
| Mercedes Clase V 220D Largo | `car-mercedes-clase-v-largo` | `mercedes-clase-v-largo` | Alicante | 140€/día |

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

### 1. Mercedes Clase V 220D Avantgard Largo (Ibiza)

| Campo | Detalle |
|---|---|
| **Origen de la información** | `docs/current-site/cars.md` (VEHÍCULO 1 — análisis directo con Playwright de la web real), `docs/content/cars-final.md` (car-001, marcado `[VERIFIED]`), `docs/current-site/wordpress-inventory.md` (producto WooCommerce ID 2176, estado `publish`) |
| **Estado** | `CONFIRMED` |
| **Datos disponibles** | Nombre, marca, modelo, variante, año (2024), categoría, 8 pasajeros, 4 puertas + laterales automáticas, transmisión automática 9G-TRONIC, diésel, color exterior/interior, llantas, condiciones de alquiler (edad mínima 26, carnet mínimo 2 años, 250 km/día, 0,50€/km extra), descripción corta y completa (ES), 8 features, precio 130€/día verificado en Ibiza, puntos de recogida (aeropuerto, puerto), extras (facturación `one_time`) y coberturas (franquicia 850€, fianza 1.500€, cobertura total 45,50€) |
| **Datos faltantes** | Potencia (CV), capacidad de maletero, consumo, dimensiones — nunca publicados en la web original (`UNKNOWN` en `cars.md`); `fullDescription` en inglés; fotos reales (ver nota de imágenes); fianza exacta de la cobertura total (`depositAmountCard` puesto a 0 como desconocido) |
| **¿Aparece hoy en la web?** | **Sí.** `active: true`, disponible solo en Ibiza. Visible en `/flota`, `/flota/mercedes-clase-v-avantgard-largo`, `/ibiza` |
| **Recomendación** | Mantener. Pendiente no bloqueante: potencia/maletero y fotos reales del negocio |

### 2. Mercedes Clase V 220D Largo (Alicante)

| Campo | Detalle |
|---|---|
| **Origen de la información** | `docs/current-site/wordpress-inventory.md` (producto WooCommerce ID 200, `draft`, 140€/día, destino Alicante — confirmado como real por decisión del negocio), `docs/content/cars-final.md` (car-002) |
| **Estado** | `CONFIRMED` (confirmado explícitamente por el negocio; el producto original en WordPress estaba en estado `draft`/página vacía, pero su existencia como vehículo real de la flota ha sido confirmada) |
| **Datos disponibles** | Nombre ("Mercedes Clase V 220D Largo"), marca, modelo ("Clase V 220D"), variante ("Largo"), destino (Alicante), precio 140€/día (dato del producto WooCommerce en borrador ID 200), puntos de recogida (aeropuerto, oficina, puerto — mismos que el resto de la flota en Alicante) |
| **Datos faltantes — y cómo se han resuelto** | La ficha pública de este producto estaba completamente vacía (`docs/current-site/wordpress-inventory.md`, VEHÍCULO 3: *"La página está vacía… UNKNOWN"*). Por decisión explícita del negocio, los campos técnicos **obligatorios** del modelo de datos (`passengers`, `doors`, `transmission`, `fuel`, `minAge`, `minLicenseYears`, `kmIncluded`, `kmExtraPrice`) se **heredan** del vehículo hermano (Avantgard Largo), ya que ambos son modelos Mercedes Clase V — quedan marcados en `data/cars.ts` con el comentario `INHERITED / PENDING confirmation for this variant`. **No se ha inventado ningún equipamiento ni prestación**: `features` se deja como array vacío, no hay `fullDescription`, no hay `gearbox`/`colorExterior`/`colorInterior`/`wheels`/`power`/`luggage`, y no hay ninguna imagen (ni siquiera placeholder) |
| **¿Aparece hoy en la web?** | **Sí.** `active: true`, disponible solo en Alicante. Visible en `/flota`, `/flota/mercedes-clase-v-largo`, `/alicante` |
| **Recomendación** | Mantener como vehículo confirmado del negocio. **Pendiente urgente**: obtener del negocio las especificaciones técnicas propias (no asumir que son idénticas al Avantgard Largo de forma permanente), equipamiento real, descripción comercial y fotografías. Hasta entonces, el dato heredado es la mejor aproximación disponible, no un hecho verificado |

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
| **Recomendación** | **No migrar.** A diferencia del Clase V Largo, este vehículo no ha sido confirmado por el negocio como real; además existe ambigüedad sin resolver con el vehículo siguiente (GLC Coupé AMG) |

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

- **Mercedes Clase V 220D Avantgard Largo (Ibiza):** no existe ninguna foto real en este
  repositorio ni se llegó a subir ninguna a Sanity (Sanity estuvo vacío durante todo el
  desarrollo, ver `docs/development/implementation-status.md`, issue I-07). Existen 6 URLs
  documentadas en `docs/current-site/cars.md` apuntando al dominio WordPress antiguo, pero por
  decisión explícita del usuario **no se han descargado**. Se usa un placeholder SVG genérico
  (`public/images/cars/placeholder-mercedes-clase-v.svg`).
- **Mercedes Clase V 220D Largo (Alicante):** no tiene ninguna imagen confirmada, **ni siquiera
  un placeholder** — su ficha pública estuvo siempre vacía y no hay ningún archivo gráfico
  asociado a este producto concreto en la documentación. `mainImage`/`gallery` se omiten
  deliberadamente en `data/cars.ts` en lugar de reutilizar la imagen del otro vehículo, para no
  sugerir una identidad visual confirmada que no existe.

---

## Conclusión

`data/cars.ts` contiene ahora **dos vehículos `CONFIRMED`**, cada uno disponible en un único
destino (Ibiza / Alicante), tal como ha confirmado el negocio. El vehículo de Alicante reutiliza
las especificaciones técnicas obligatorias del vehículo de Ibiza como mejor dato disponible
—explícitamente marcado como pendiente de confirmación independiente—, sin inventar equipamiento,
descripciones ni imágenes que no existen en ninguna fuente documentada. Los vehículos GLC
(4MATIC y Coupé AMG) permanecen fuera del código por falta de evidencia suficiente.
