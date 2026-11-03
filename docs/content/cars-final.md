# Dataset de vehículos — nueva web Here & Now

> Fuente: `cars.md`, `content-migration.md`, `wordpress-inventory.md`  
> Fecha: 2026-11-02  
> Este documento consolida todos los datos verificados de vehículos para la nueva web.  
> **Los campos marcados con `⚠️ COMPLETAR MANUALMENTE` requieren información que no existe o no pudo verificarse en la web actual.**

---

## Convenciones

| Marca | Significado |
|-------|-------------|
| `[VERIFIED]` | Dato confirmado en la web pública durante el análisis |
| `[WP-ONLY]` | Dato extraído del XML de WordPress, no visible en la web |
| `[INFERRED]` | Deducción razonable a partir de datos existentes — no confirmado directamente |
| `⚠️ COMPLETAR MANUALMENTE` | Campo vacío o desconocido — rellenar antes de publicar |
| `[INCONSISTENCY]` | Dato contradictorio entre fuentes — requiere verificación |

---

## Vehículos en la nueva web

| ID | Nombre | Estado actual | Prioridad |
|----|--------|--------------|-----------|
| `car-001` | Mercedes Clase V 220d Avantgard LARGO | **Activo** — publicar en nueva web | Obligatorio |
| `car-002` | Mercedes Clase V 220D Largo | Borrador en WP | Decisión de negocio |
| `car-003` | Mercedes GLC 220D 4MATIC | Borrador en WP | Decisión de negocio |
| `car-004` | Mercedes GLC 220D 4MATIC Coupé AMG | Solo en popup | Decisión de negocio |

---

---

## car-001 — Mercedes Clase V 220d Avantgard LARGO

**Estado en web actual:** ACTIVO — producto WooCommerce publicado en Ibiza y Alicante

---

### Identificación

```
id:              car-001
name:            Mercedes Clase V 220d Avantgard LARGO                [VERIFIED]
slug:            mercedes-clase-v-220d-avantgard-largo                [VERIFIED - slug actual del producto Alicante]
slug_ibiza:      mercedes-clase-v-220d-avantgard-largo-ibiza          [VERIFIED - slug actual del producto Ibiza]
brand:           Mercedes-Benz                                        [VERIFIED]
model:           Clase V 220d                                         [VERIFIED]
variant:         Avantgard LARGO                                      [VERIFIED]
year:            2024                                                  [VERIFIED]
category:        Monovolumen / Gran Turismo                           [INFERRED — actualmente clasificado como "Furgoneta" en WooCommerce, clasificación inapropiada]
```

**Slug recomendado para nueva web:** `mercedes-clase-v-220d-avantgard-largo`  
*(sin sufijo de destino — las variantes por ubicación se gestionan como atributos del mismo producto)*

---

### Disponibilidad

```
locations:
  - ibiza:     true                                                   [VERIFIED]
  - alicante:  true                                                   [VERIFIED]

pickup_ibiza:
  - Puerto de Ibiza                                                   [VERIFIED]
  - Aeropuerto de Ibiza                                               [VERIFIED]
  - Otro lugar (a acordar)                                            [VERIFIED]

pickup_alicante:
  - Oficina de Alicante                                               [VERIFIED]
  - Aeropuerto de Alicante                                            [VERIFIED]
  - Puerto de Alicante                                                [VERIFIED]
  - Otro lugar (a acordar)                                            [VERIFIED]
```

---

### Precio y condiciones

```
priceFrom:       130                                                   [VERIFIED]
currency:        EUR                                                  [VERIFIED]
priceUnit:       día                                                  [VERIFIED]
kmIncluded:      250                                                  [VERIFIED — "250 km / día"]
kmExtra:         0.50                                                 [VERIFIED — "0,5€ por km adicional"]
minAge:          26                                                   [VERIFIED — "Edad mínima: 26 años"]
minLicense:      2 años                                               [VERIFIED — "Licencia de conducir con mínimo 2 años de antigüedad"]

deposit_basic:   1500                                                 [VERIFIED — "fianza TC 1500 Avantgarde"]
deposit_full:    ⚠️ COMPLETAR MANUALMENTE
franchise_basic: 850                                                  [VERIFIED — "franquicia min 850€ Avantgarde"]
```

---

### Especificaciones técnicas

```
passengers:      8                                                    [VERIFIED]
doors:           4                                                    [VERIFIED — "4 puertas"]
lateral_doors:   automatic                                            [VERIFIED — "Puertas Laterales Automáticas: Acceso fácil y funcional"]
transmission:    Automático — 9G-TRONIC                               [VERIFIED]
fuel:            Diésel                                               [VERIFIED]
power:           ⚠️ COMPLETAR MANUALMENTE
luggage:         ⚠️ COMPLETAR MANUALMENTE
color_exterior:  Negro Obsidiana Metalizado                           [VERIFIED]
interior:        Cuero                                                [VERIFIED — "Tapizado: Cuero"]
wheels:          Aleación 6,5J x 16                                   [VERIFIED]
```

---

### Equipamiento y características

```
features:
  - 9G-TRONIC (caja de cambios automática)                           [VERIFIED]
  - Sensores y cámaras de estacionamiento                             [VERIFIED]
  - Retrovisores ajustables automáticamente                           [VERIFIED]
  - Tomas de Corriente 12V en filas traseras                         [VERIFIED]
  - Aire Acondicionado Semi-Automático TEMPMATIC (zona trasera)       [VERIFIED]
  - Puertas Laterales Automáticas                                     [VERIFIED]
  - Banco de 3-Plazas Confort en primera y segunda fila               [VERIFIED]
  - Cristales Tintados Negros                                         [VERIFIED]
  - Llantas de Aleación 6,5J x 16                                    [VERIFIED]

features_missing:
  - GPS / navegación:                    ⚠️ COMPLETAR MANUALMENTE
  - Bluetooth / conectividad:            ⚠️ COMPLETAR MANUALMENTE
  - USB / carga inalámbrica:             ⚠️ COMPLETAR MANUALMENTE
  - Portaequipajes / barras de techo:    ⚠️ COMPLETAR MANUALMENTE
  - Asientos calefactados:               ⚠️ COMPLETAR MANUALMENTE
  - Cámara de visión trasera:            [INFERRED — incluye sensores y cámaras de estacionamiento, pero no confirmado explícitamente como cámara de marcha atrás]
  - Paquetes adicionales opcionales:     ⚠️ COMPLETAR MANUALMENTE (ACF "Paquetes adicionales" existe en WordPress pero vacío)
```

---

### Extras disponibles (en formulario de reserva)

```
extras:
  - name: "Silleta de bebé (0>9 kg)"
    price_ibiza:    6.90€ / total (cargo único)                       [VERIFIED — Ibiza: "/ Total"]
    price_alicante: 6.90€ / día                                       [VERIFIED — Alicante: "/ Día"]
    inconsistency:  [INCONSISTENCY] Precio igual en número pero diferente modelo de cobro entre Ibiza y Alicante

  - name: "Silleta de niño (9>18 kg)"
    price_ibiza:    6.90€ / total
    price_alicante: 6.90€ / día
    inconsistency:  [INCONSISTENCY] Ídem anterior

  - name: "Elevador (booster)"
    price_ibiza:    6.90€ / total
    price_alicante: 6.90€ / día
    inconsistency:  [INCONSISTENCY] Ídem

  - name: "Conductor adicional"
    price_ibiza:    8.95€ / total
    price_alicante: 8.95€ / día
    inconsistency:  [INCONSISTENCY] Ídem

coverages:
  - name: "Cobertura básica"
    price: 0.00€ (incluida)                                          [VERIFIED]
    franchise: 850€ (Avantgarde)                                     [VERIFIED]
    deposit_tc: 1500€                                                [VERIFIED]
    roadside_assistance: incluida                                     [VERIFIED]

  - name: "Cobertura total"
    price: 45.50€ / reserva                                          [VERIFIED]
    franchise: 0€                                                     [INFERRED — cobertura total implica sin franquicia, pero no confirmado explícitamente]
    deposit_tc: ⚠️ COMPLETAR MANUALMENTE
```

---

### Descripciones

```
shortDescription:
  ES: "Descubre Mercedes Avantgard largo monovolumen de alta gama y de gran tamaño
       para una experiencia de viaje inigualable con sus 8 cómodas plazas."         [VERIFIED — texto exacto de la web]
  EN: "Mercedes V Class 220D Avantgard Long"                                         [VERIFIED — nombre en menú EN, no descripción completa]
  EN_full: ⚠️ COMPLETAR MANUALMENTE

fullDescription:
  ES: "Descubre el Mercedes Clase V, la quinta esencia del monovolumen de gran tamaño
       que redefine tu viaje en familia o con amigos a Ibiza o Alicante. Este vehículo
       no solo promete espacio de sobra, sino también una experiencia de viaje inigualable
       con sus ocho cómodas plazas. Viajar en el Mercedes Clase V es adentrarse en un mundo
       donde el espacio y la tecnología de última generación se fusionan para ofrecer momentos
       únicos e inolvidables."                                                        [VERIFIED — texto exacto de la web]
  EN: ⚠️ COMPLETAR MANUALMENTE
```

---

### Imágenes

```
images:
  - wp_id: 963
    file: "3125-MSN-1_SIN-MATRICULA-scaled.jpg"
    url:  "https://hereandnowibiza.com/wp-content/uploads/2024/07/3125-MSN-1_SIN-MATRICULA-scaled.jpg"
    dimensions: 2560 × 1693 px
    size: 224 KB
    alt_current: "3125 MSN 1_SIN MATRICULA"                          [VERIFIED — alt text existente, no descriptivo]
    alt_recommended: ⚠️ COMPLETAR MANUALMENTE (ej: "Exterior frontal Mercedes Clase V 220d Avantgard Largo")
    role: main / thumbnail
    notes: "Foto principal. Sin matrícula visible."

  - wp_id: 966
    file: "3125-MSN-28-scaled.jpg"
    url:  ".../3125-MSN-28-scaled.jpg"
    dimensions: 2560 × 1707 px
    size: 179 KB
    alt_current: "3125 MSN 28"
    alt_recommended: ⚠️ COMPLETAR MANUALMENTE
    role: gallery

  - wp_id: 967
    file: "3125-MSN-43-scaled.jpg"
    url:  ".../3125-MSN-43-scaled.jpg"
    dimensions: 2560 × 1707 px
    size: 451 KB
    alt_current: "3125 MSN 43"
    alt_recommended: ⚠️ COMPLETAR MANUALMENTE
    role: gallery
    notes: "Imagen más pesada de la galería (451KB). Candidata a optimizar."

  - wp_id: 968
    file: "3125-MSN-40-scaled.jpg"
    url:  ".../3125-MSN-40-scaled.jpg"
    dimensions: 2560 × 1628 px
    size: 388 KB
    alt_current: "3125 MSN 40"
    alt_recommended: ⚠️ COMPLETAR MANUALMENTE
    role: gallery

  - wp_id: 964
    file: "3125-MSN-26-scaled.jpg"
    url:  ".../3125-MSN-26-scaled.jpg"
    dimensions: 2560 × 1707 px
    size: 246 KB
    alt_current: "3125 MSN 26"
    alt_recommended: ⚠️ COMPLETAR MANUALMENTE
    role: gallery

  - wp_id: 965
    file: "3125-MSN-25-scaled.jpg"
    url:  ".../3125-MSN-25-scaled.jpg"
    dimensions: 2560 × 1707 px
    size: 122 KB
    alt_current: "3125 MSN 25"
    alt_recommended: ⚠️ COMPLETAR MANUALMENTE
    role: gallery

  - wp_id: 969
    file: "3125-MSN-56_con-logo-scaled.jpg"
    url:  ".../3125-MSN-56_con-logo-scaled.jpg"
    dimensions: 2560 × 1707 px
    size: 290 KB
    alt_current: — (no publicada)
    alt_recommended: ⚠️ COMPLETAR MANUALMENTE
    role: gallery (pendiente de añadir)
    notes: "7ª foto. Tiene el logo de Here & Now superpuesto. Existe en la librería de medios pero no está publicada en la galería."

images_missing:
  - Interior del habitáculo:             ⚠️ COMPLETAR MANUALMENTE (no hay fotos de interior confirmadas en la galería actual)
  - Vista aérea o trasera:               ⚠️ COMPLETAR MANUALMENTE
  - Foto con fondo Ibiza:                ⚠️ COMPLETAR MANUALMENTE
  - Foto con fondo Alicante:             ⚠️ COMPLETAR MANUALMENTE
```

---

### URLs

```
current_urls:
  - product_ibiza:    /producto/mercedes-clase-v-220d-avantgard-largo-ibiza/     [VERIFIED — WP ID 2176, 130€/día]
  - product_alicante: /producto/mercedes-clase-v-220d-avantgard-largo/           [VERIFIED — WP ID 896, 130€/día]
  - informative_page: /mercedes-clase-v-220d-avantgard-largo-ibiza/              [VERIFIED — WP page ID 1772, redirect al producto en nueva web]

proposed_new_url:    /coches/mercedes-clase-v-avantgard-largo/                   [PROPUESTA — a confirmar con arquitectura final]
proposed_ibiza_url:  /coches/mercedes-clase-v-avantgard-largo/ibiza/             [PROPUESTA]
proposed_alicante_url: /coches/mercedes-clase-v-avantgard-largo/alicante/        [PROPUESTA]
```

---

### Información faltante (resumen car-001)

| Campo | Estado |
|-------|--------|
| Potencia del motor (CV/kW) | ⚠️ COMPLETAR MANUALMENTE |
| Capacidad del maletero (litros) | ⚠️ COMPLETAR MANUALMENTE |
| Consumo medio | ⚠️ COMPLETAR MANUALMENTE |
| Dimensiones del vehículo | ⚠️ COMPLETAR MANUALMENTE |
| GPS incluido / disponible | ⚠️ COMPLETAR MANUALMENTE |
| Conectividad (Bluetooth, USB) | ⚠️ COMPLETAR MANUALMENTE |
| Paquetes adicionales (ACF) | ⚠️ COMPLETAR MANUALMENTE |
| Descripción completa EN | ⚠️ COMPLETAR MANUALMENTE |
| Alt texts de las 7 imágenes | ⚠️ COMPLETAR MANUALMENTE |
| Fotos de interior | ⚠️ COMPLETAR MANUALMENTE |
| Precio fianza con cobertura total | ⚠️ COMPLETAR MANUALMENTE |
| Resolución inconsistencia extras Ibiza vs Alicante (por total vs por día) | ⚠️ VERIFICAR Y DECIDIR |

---

---

## car-002 — Mercedes Clase V 220D Largo

**Estado en web actual:** BORRADOR en WordPress — página informativa vacía, sin producto publicado

---

### Identificación

```
id:              car-002
name:            Mercedes Clase V 220D Largo                          [WP-ONLY — nombre en productos draft]
name_alt:        Mercedes V-Class 220D Long                           [WP-ONLY — nombre en popup EN]
brand:           Mercedes-Benz                                        [VERIFIED]
model:           Clase V 220D                                         [WP-ONLY]
variant:         Largo (sin nivel de equipamiento especificado)       [WP-ONLY — notable: no tiene "Avantgard"]
year:            ⚠️ COMPLETAR MANUALMENTE
category:        Monovolumen                                          [INFERRED]
```

**Slug recomendado para nueva web:** `mercedes-clase-v-220d-largo`

---

### Disponibilidad

```
locations:
  - ibiza:     true (configurado en borrador WP ID 2187)              [WP-ONLY]
  - alicante:  true (configurado en borrador WP ID 200)               [WP-ONLY]

pickup_ibiza:    Aeropuerto, Puerto, Otro (configurados en draft)      [WP-ONLY]
pickup_alicante: Oficina, Aeropuerto, Puerto, Otro (configurados)     [WP-ONLY]
```

---

### Precio y condiciones

```
priceFrom_alicante: 140                                               [WP-ONLY — WP product ID 200, _regular_price = 140]
priceFrom_ibiza:    250                                               [WP-ONLY — WP product ID 2187, _regular_price = 250]
currency:           EUR                                               [WP-ONLY]
priceUnit:          día                                               [WP-ONLY]

INCONSISTENCY: El precio de Ibiza (250€) es notablemente más alto que el de Alicante (140€)
para el mismo modelo. Requiere confirmación — posible error de configuración.

kmIncluded:      ⚠️ COMPLETAR MANUALMENTE
kmExtra:         ⚠️ COMPLETAR MANUALMENTE
minAge:          ⚠️ COMPLETAR MANUALMENTE
minLicense:      ⚠️ COMPLETAR MANUALMENTE
deposit_basic:   1000                                                 [INFERRED — del texto de coberturas: "1000 clase V", aunque no queda claro si "Clase V" aquí incluye el Largo sin Avantgard]
deposit_full:    ⚠️ COMPLETAR MANUALMENTE
franchise_basic: 650                                                  [INFERRED — del texto de coberturas: "franquicia min 650€ Clase V"]
```

---

### Especificaciones técnicas

```
passengers:      ⚠️ COMPLETAR MANUALMENTE
doors:           ⚠️ COMPLETAR MANUALMENTE
transmission:    ⚠️ COMPLETAR MANUALMENTE
fuel:            ⚠️ COMPLETAR MANUALMENTE
power:           ⚠️ COMPLETAR MANUALMENTE
luggage:         ⚠️ COMPLETAR MANUALMENTE
color_exterior:  ⚠️ COMPLETAR MANUALMENTE
interior:        ⚠️ COMPLETAR MANUALMENTE
```

> **Nota:** No se encontró ninguna especificación técnica verificada de este vehículo en la web pública ni en el XML. La página /mercedes-clase-v-220d-largo/ está vacía. Los productos WooCommerce están en borrador sin contenido verificable desde el análisis de navegación.

---

### Descripciones

```
shortDescription:
  ES: ⚠️ COMPLETAR MANUALMENTE
  EN: ⚠️ COMPLETAR MANUALMENTE

fullDescription:
  ES: ⚠️ COMPLETAR MANUALMENTE
  EN: ⚠️ COMPLETAR MANUALMENTE
```

---

### Imágenes

```
images_available_in_media_library:
  - file: "Screenshot_9.png"
    url:  ".../2024/06/Screenshot_9.png"
    title_wp: "Interior"
    notes: "Captura de pantalla del interior. Baja calidad (screenshot). No apta para producción."

  - file: "Screenshot_10.png"
    url:  ".../2024/06/Screenshot_10.png"
    title_wp: "Van Mercedes"
    notes: "Captura de pantalla. No apta para producción."

  - file: "Screenshot_11.png"
    url:  ".../2024/06/Screenshot_11.png"
    title_wp: "Interior_van"
    notes: "Captura de pantalla del interior. No apta para producción."

  - file: "Circulando_VAN.png"
    url:  ".../2024/06/Circulando_VAN.png"
    dimensions: 951 × 630 px
    size: 226 KB
    notes: "Render del vehículo en movimiento. Actualmente usada en la sección SEO de la homepage."

images_production_ready: 0
images_needed: ⚠️ COMPLETAR MANUALMENTE — se requieren fotos profesionales del vehículo
```

---

### URLs

```
current_urls:
  - informative_page: /mercedes-clase-v-220d-largo/                  [page ID 1802, vacía]
  - draft_product_alicante: /producto/mercedes-clase-v-220d-largo/   [WP ID 200, draft]
  - draft_product_ibiza: /producto/mercedes-clase-v-220d-largo-ibiza/ [WP ID 2187, draft]

proposed_new_url: /coches/mercedes-clase-v-largo/                     [PROPUESTA]
status: No publicar hasta completar los datos requeridos
```

---

### Información faltante (resumen car-002)

| Campo | Estado |
|-------|--------|
| Todas las especificaciones técnicas | ⚠️ COMPLETAR MANUALMENTE |
| Precio definitivo (inconsistencia 140€ vs 250€) | ⚠️ VERIFICAR Y DECIDIR |
| Fotos del vehículo (profesionales) | ⚠️ COMPLETAR MANUALMENTE |
| Descripciones ES/EN | ⚠️ COMPLETAR MANUALMENTE |
| Disponibilidad en Ibiza confirmada | ⚠️ VERIFICAR — el draft existe pero el precio de Ibiza parece erróneo |
| Diferencia con car-001 (Avantgard) | ⚠️ ACLARAR — ¿nivel de equipamiento inferior? ¿precio menor = menos equipado? |

---

---

## car-003 — Mercedes GLC 220D 4MATIC

**Estado en web actual:** BORRADOR en WordPress — página informativa vacía, sin producto publicado

---

### Identificación

```
id:              car-003
name:            Mercedes GLC 220d 4MATIC                             [WP-ONLY — nombre del producto draft ID 222]
name_variant:    Mercedes GLC 220d 4MATIC Coupé AMG                  [WP-ONLY — nombre del vehicle CPT ID 204]
name_en:         MERCEDES GLC 220D 4MATIC                            [WP-ONLY — nombre en popup EN]
brand:           Mercedes-Benz                                        [VERIFIED]
model:           GLC 220D                                             [WP-ONLY]
variant:         4MATIC                                               [WP-ONLY]
variant_cpt:     4MATIC Coupé AMG                                     [WP-ONLY — del CPT vehicle]
year:            ⚠️ COMPLETAR MANUALMENTE

NOTE: Existe ambigüedad entre el producto WooCommerce (GLC 4MATIC) y el vehicle CPT (GLC Coupé AMG).
Puede ser un único vehículo con inconsistencia de nombre, o dos modelos distintos.
Ver car-004 para el Coupé AMG como posible vehículo separado.
```

**Slug recomendado:** `mercedes-glc-220d-4matic` (o `mercedes-glc-220d-coupe-amg` si es el Coupé)

---

### Disponibilidad

```
locations:
  - ibiza:     false (no configurado en ningún borrador)              [WP-ONLY]
  - alicante:  true (configurado en borrador WP ID 222)               [WP-ONLY]
  
NOTE: Solo configurado para Alicante en el borrador. Ibiza no está asignada.
```

---

### Precio y condiciones

```
priceFrom_alicante: 275                                               [WP-ONLY — WP product ID 222, _regular_price = 275]
priceFrom_ibiza:    ⚠️ COMPLETAR MANUALMENTE (no configurado)
currency:           EUR                                               [WP-ONLY]
priceUnit:          día                                               [WP-ONLY]

kmIncluded:      ⚠️ COMPLETAR MANUALMENTE
kmExtra:         ⚠️ COMPLETAR MANUALMENTE
minAge:          ⚠️ COMPLETAR MANUALMENTE
minLicense:      ⚠️ COMPLETAR MANUALMENTE
deposit_basic:   1800                                                 [INFERRED — del texto de coberturas: "fianza TC 1800 GLC"]
deposit_full:    ⚠️ COMPLETAR MANUALMENTE
franchise_basic: 850                                                  [INFERRED — del texto de coberturas: "franquicia min 850€ Avantgarde y GLC"]
```

---

### Especificaciones técnicas

```
passengers:      ⚠️ COMPLETAR MANUALMENTE
doors:           ⚠️ COMPLETAR MANUALMENTE (el GLC SUV estándar tiene 5; el Coupé tiene 4)
transmission:    ⚠️ COMPLETAR MANUALMENTE
fuel:            ⚠️ COMPLETAR MANUALMENTE
power:           ⚠️ COMPLETAR MANUALMENTE
luggage:         ⚠️ COMPLETAR MANUALMENTE
color_exterior:  ⚠️ COMPLETAR MANUALMENTE
interior:        ⚠️ COMPLETAR MANUALMENTE
drive_system:    4MATIC (tracción total)                              [INFERRED — del nombre del modelo]
```

---

### Descripciones

```
shortDescription:
  ES: ⚠️ COMPLETAR MANUALMENTE
  EN: ⚠️ COMPLETAR MANUALMENTE

fullDescription:
  ES: ⚠️ COMPLETAR MANUALMENTE
  EN: ⚠️ COMPLETAR MANUALMENTE
```

---

### Imágenes

```
images_available_in_media_library:
  - wp_id: 730
    file: "Screenshot_12.png"
    url:  ".../2024/06/Screenshot_12.png"
    title_wp: "Mercedes GLC 220d 4MATIC"
    notes: "Captura de pantalla. No apta para producción."

  - wp_id: 734
    file: "Mercedes-GLC-220d-4MATIC_-circulando.png"
    url:  ".../2024/06/Mercedes-GLC-220d-4MATIC_-circulando.png"
    notes: "Render del GLC conduciendo. Potencialmente usable con edición."

  - wp_id: 736
    file: "Mercedes-GLC-220d-4MATIC_circulando.png"
    url:  ".../2024/06/Mercedes-GLC-220d-4MATIC_circulando.png"
    notes: "Segunda versión del mismo render (sin espacio en el nombre)."

  - wp_id: 743
    file: "Coupe-AMG_circulando.png"
    url:  ".../2024/06/Coupe-AMG_circulando.png"
    size: 276 KB
    notes: "Render del Coupé AMG en movimiento. Usado actualmente en homepage (sección MERCEDES RENT A CAR)."

  - wp_id: 742
    file: "Coupe-AMG_circulando_1.png"
    url:  ".../2024/06/Coupe-AMG_circulando_1.png"
    dimensions: 951 × 633 px
    size: 329 KB
    notes: "Segunda versión del render del Coupé AMG. Usada en homepage (sección SEO)."

  - wp_id: 723
    file: "Screenshot_9.png"
    title_wp: "Interior"
    notes: "Captura de pantalla. Posiblemente interior del Clase V o del GLC. No apta para producción."

  - wp_id: 726
    file: "Screenshot_10.png"
    title_wp: "Van Mercedes"
    notes: "Captura de pantalla. No apta para producción."

  - wp_id: 728
    file: "Screenshot_11.png"
    title_wp: "Interior_van"
    notes: "Captura de pantalla del interior. No apta para producción."

images_production_ready: 0 (los 5 disponibles son renders o capturas, no fotos profesionales del vehículo real)
images_needed: ⚠️ COMPLETAR MANUALMENTE — fotos profesionales
```

---

### URLs

```
current_urls:
  - informative_page: /mercedes-glc-220d-4matic/                     [page ID 1794, vacía]
  - draft_product_alicante: /producto/mercedes-glc-220d-4matic/      [WP ID 222, draft]

proposed_new_url: /coches/mercedes-glc-220d-4matic/                  [PROPUESTA]
status: No publicar hasta completar los datos requeridos y decidir si es el GLC estándar o el Coupé AMG
```

---

### Información faltante (resumen car-003)

| Campo | Estado |
|-------|--------|
| ¿Es este el GLC estándar o el Coupé AMG? | ⚠️ ACLARAR — el product WP dice "4MATIC", el vehicle CPT dice "4MATIC Coupé AMG" |
| Todas las especificaciones técnicas | ⚠️ COMPLETAR MANUALMENTE |
| Disponibilidad en Ibiza | ⚠️ COMPLETAR MANUALMENTE (no configurado actualmente) |
| Fotos del vehículo (profesionales) | ⚠️ COMPLETAR MANUALMENTE |
| Descripciones ES/EN | ⚠️ COMPLETAR MANUALMENTE |

---

---

## car-004 — Mercedes GLC 220D 4MATIC Coupé AMG

**Estado en web actual:** Solo referenciado en el popup de reserva. Sin página, sin producto WooCommerce, sin precio configurado.

---

### Identificación

```
id:              car-004
name:            MERCEDES GLC 220D 4MATIC COUPÉ AMG                  [WP-ONLY — nombre exacto en popup de reserva EN]
name_es:         Mercedes GLC 220d 4MATIC Coupé AMG                  [INFERRED — traducción del nombre del popup]
brand:           Mercedes-Benz                                        [VERIFIED]
model:           GLC 220D Coupé                                       [INFERRED]
variant:         4MATIC AMG                                           [INFERRED]
year:            ⚠️ COMPLETAR MANUALMENTE
```

**Nota importante:** Este vehículo puede ser el mismo que car-003 (con nombre inconsistente), o puede ser un modelo diferente del GLC (el Coupé AMG es una carrocería distinta al SUV estándar). Requiere confirmación antes de crear un registro separado.

**Slug recomendado:** `mercedes-glc-coupe-amg` (si se confirma como vehículo separado)

---

### Disponibilidad

```
locations:      ⚠️ COMPLETAR MANUALMENTE
price:          ⚠️ COMPLETAR MANUALMENTE
```

---

### Imágenes

```
images_available:
  - "Coupe-AMG_circulando.png" y "Coupe-AMG_circulando_1.png"        [ver car-003]
  - Estas imágenes podrían corresponder a este vehículo (Coupé AMG) en lugar de al GLC estándar

images_production_ready: 0
```

---

### URLs

```
current_urls:   ninguna — solo en popup de reserva
vehicle_cpt:    /mercedes-glc-220d-4matic-coupe-amg/                 [WP vehicle CPT ID 204, draft]

proposed_new_url: ⚠️ COMPLETAR MANUALMENTE (depende de si se diferencia de car-003)
```

---

### Información faltante (resumen car-004)

| Campo | Estado |
|-------|--------|
| ¿Es un vehículo separado de car-003? | ⚠️ ACLARAR — decisión de negocio |
| Todas las especificaciones técnicas | ⚠️ COMPLETAR MANUALMENTE |
| Precio | ⚠️ COMPLETAR MANUALMENTE |
| Disponibilidad (Ibiza / Alicante) | ⚠️ COMPLETAR MANUALMENTE |
| Fotos del vehículo | ⚠️ COMPLETAR MANUALMENTE |
| Descripciones ES/EN | ⚠️ COMPLETAR MANUALMENTE |

---

---

## Resumen del dataset

### Estado general

| ID | Vehículo | Listo para publicar | Datos esenciales completos | Imágenes profesionales |
|----|---------|--------------------|--------------------------|-----------------------|
| car-001 | Mercedes Clase V 220d Avantgard LARGO | ✅ Sí (activo) | Parcialmente (falta potencia, maletero, GPS, etc.) | ✅ 6+1 fotos disponibles |
| car-002 | Mercedes Clase V 220D Largo | ❌ Borrador | ❌ No | ❌ Solo renders/capturas |
| car-003 | Mercedes GLC 220D 4MATIC | ❌ Borrador | ❌ No | ❌ Solo renders/capturas |
| car-004 | Mercedes GLC 220D 4MATIC Coupé AMG | ❌ Sin datos | ❌ No | ❌ Solo renders |

---

### Campos a completar manualmente por vehículo

| Campo | car-001 | car-002 | car-003 | car-004 |
|-------|---------|---------|---------|---------|
| Potencia (CV/kW) | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Maletero (litros) | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Consumo | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| GPS / conectividad | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Descripción completa EN | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Alt texts imágenes | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Fotos interiores | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Precio (confirmado) | ✅ 130€ | ⚠️ 140/250€? | ✅ 275€ | ⚠️ |
| Specs técnicas completas | Parcial | ⚠️ | ⚠️ | ⚠️ |
| Disponibilidad Ibiza | ✅ | ⚠️ | ⚠️ | ⚠️ |
| Disponibilidad Alicante | ✅ | ✅ | ✅ | ⚠️ |

---

### Inconsistencias pendientes de resolver

| Nº | Inconsistencia | Vehículos afectados |
|----|---------------|---------------------|
| 1 | Extras cobrados "/ Total" en Ibiza pero "/ Día" en Alicante (mismo precio numérico) | car-001 |
| 2 | Precio Ibiza (250€) del Clase V Largo muy diferente al de Alicante (140€) | car-002 |
| 3 | car-003 y car-004 pueden ser el mismo vehículo (GLC 4MATIC vs GLC Coupé AMG) | car-003, car-004 |
| 4 | El texto de coberturas menciona "fianza TC 1800 GLC" pero el deposit de car-003 no está en el formulario de reserva activo | car-003 |
| 5 | Nombre inconsistente del modelo activo: "220d" (minúscula) en el web vs "220D" (mayúscula) en el menú y el title | car-001 |

---

### Decisiones de negocio requeridas antes de lanzar la nueva web

| Decisión | Afecta a |
|---------|---------|
| ¿Se publica el Clase V 220D Largo? ¿A qué precio en Ibiza? | car-002 |
| ¿Se publica el GLC 220D 4MATIC? ¿Solo Alicante o también Ibiza? | car-003 |
| ¿Son car-003 y car-004 el mismo vehículo o dos modelos distintos? | car-003, car-004 |
| ¿Cómo se resuelve la inconsistencia de extras por total vs por día? | car-001 |
| ¿Se adopta "220d" o "220D" como nombre oficial? | car-001, car-002 |
