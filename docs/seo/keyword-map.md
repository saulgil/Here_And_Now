# Mapa de palabras clave — nueva web Here & Now

> Fuente: `docs/architecture/sitemap-new.md` + análisis del sector de alquiler de coches en Ibiza y Alicante.  
> Fecha: 2026-11-02  
> Idioma base: español. Keywords en inglés marcadas como `[EN]`.  
> **Objetivo principal:** Asignar a cada URL una keyword principal sin solapamiento. Agrupar intenciones equivalentes en la misma página.

---

## Principios anti-canibalización aplicados

1. **Una primary keyword, una URL.** Ninguna keyword primaria aparece en más de una página como objetivo principal.
2. **Intención define la página, no la keyword.** Dos páginas sobre "alquiler coches Ibiza" no se crean si sirven la misma intención.
3. **Destino vs. modelo.** `/ibiza/` posee la intención de destino. `/flota/[coche]/` posee la intención de modelo específico. No compiten.
4. **Informacional vs. transaccional.** Las guías (`/guias/`) poseen intención informacional. Las landings poseen intención comercial/transaccional.
5. **Keywords EN.** Las keywords en inglés ("rent a car ibiza") se asignan a las mismas páginas que sus equivalentes en español, no crean páginas nuevas.

---

## Mapa completo por URL

---

### 1. Homepage — `/`

| Campo | Valor |
|-------|-------|
| **Tipo** | CORE |
| **Objetivo** | Capturar marca propia + búsquedas genéricas de alquiler premium Mercedes en ambos destinos |
| **Primary keyword** | `alquiler coches Mercedes Ibiza Alicante` |
| **Search intent** | Comercial / Navegacional |
| **Location** | Ibiza + Alicante (ambas) |

**Secondary keywords:**
- `alquiler vehículos de alta gama Ibiza`
- `alquiler coches lujo Ibiza Alicante`
- `luxury car rental Ibiza Alicante` `[EN]`
- `premium car rental Ibiza` `[EN]`
- `alquiler coche Mercedes España`
- `here and now ibiza` (navegacional)
- `alquiler Mercedes 8 plazas Ibiza Alicante`

**Keywords explícitamente NO asignadas aquí** (por pertenecer a otras páginas):
- `alquiler coches Ibiza` → /ibiza/
- `alquiler coches Alicante` → /alicante/
- `alquiler Mercedes Clase V` → /flota/mercedes-clase-v-avantgard-largo/

**H1 recomendado:**
> Alquiler de coches Mercedes en Ibiza y Alicante

**Title recomendado:**
> Alquiler de coches Mercedes en Ibiza y Alicante | Here & Now

*(max 60 chars: "Alquiler coches Mercedes — Ibiza y Alicante | Here & Now")*

**Meta description:**
> Alquila un Mercedes premium en Ibiza o Alicante. Flota exclusiva, recogida en aeropuerto o puerto. Reserva online sin costes ocultos desde 130€/día.

**H2 propuestos:**
- `Elige tu destino: Ibiza o Alicante`
- `Nuestra flota de Mercedes`
- `Por qué alquilar con Here & Now`
- `Reserva en 3 pasos`
- `Lo que dicen nuestros clientes`
- `Preguntas frecuentes sobre el alquiler`

**Páginas que deben enlazar a `/`:**
- Todas (logo en header)

---

### 2. Location Hub Ibiza — `/ibiza/`

| Campo | Valor |
|-------|-------|
| **Tipo** | CORE |
| **Objetivo** | Posicionar como referencia de alquiler de coches en Ibiza. Capturar el mayor volumen de búsquedas del negocio. |
| **Primary keyword** | `alquiler coches Ibiza` |
| **Search intent** | Comercial / Transaccional |
| **Location** | Ibiza |

**Secondary keywords:**
- `alquiler coches Mercedes Ibiza`
- `alquilar coche Ibiza`
- `rent a car Ibiza` `[EN]`
- `car rental Ibiza` `[EN]`
- `luxury car rental Ibiza` `[EN]`
- `premium car rental Ibiza` `[EN]`
- `alquiler coche lujo Ibiza`
- `alquiler minivan Ibiza`
- `alquiler furgoneta 8 plazas Ibiza`
- `alquiler coche con conductor Ibiza` (si aplica)

**Keywords explícitamente NO asignadas aquí:**
- `alquiler coches aeropuerto Ibiza` → /ibiza/aeropuerto/
- `alquiler coches puerto Ibiza` → /ibiza/puerto/
- `alquiler Mercedes Clase V Ibiza` → /flota/mercedes-clase-v-avantgard-largo/
- `guía alquiler Ibiza` → /guias/alquiler-coches-ibiza/

**Anti-canibalización con homepage:**  
La homepage posee el cluster `Mercedes + Ibiza + Alicante` (ambas ciudades). Esta página posee `Ibiza` como destino único. El title y H1 deben incluir "Ibiza" claramente y no mencionar Alicante como destino.

**H1 recomendado:**
> Alquiler de coches Mercedes en Ibiza

**Title recomendado:**
> Alquiler de coches Mercedes en Ibiza — Reserva online | Here & Now

**Meta description:**
> Alquila un Mercedes en Ibiza desde 130€/día. Clase V de 8 plazas, recogida en aeropuerto, puerto u otro punto. Sin sorpresas, sin costes ocultos.

**H2 propuestos:**
- `Nuestra flota disponible en Ibiza`
- `Puntos de recogida en Ibiza`
- `¿Por qué alquilar un Mercedes en Ibiza?`
- `Precios y coberturas en Ibiza`
- `Lo que incluye tu alquiler en Ibiza`
- `Preguntas frecuentes — Ibiza`

**Páginas que deben enlazar a `/ibiza/`:**
- / (sección destinos)
- /flota/ (card "Disponible en Ibiza")
- /flota/mercedes-clase-v-avantgard-largo/ (selector de destino)
- /ibiza/aeropuerto/, /ibiza/puerto/ (breadcrumb)
- /guias/alquiler-coches-ibiza/ (CTA)
- /guias/que-ver-ibiza-en-coche/ (CTA)
- /guias/aeropuerto-ibiza/ (CTA)

---

### 3. Location Hub Alicante — `/alicante/`

| Campo | Valor |
|-------|-------|
| **Tipo** | CORE |
| **Objetivo** | Referencia de alquiler de coches en Alicante. |
| **Primary keyword** | `alquiler coches Alicante` |
| **Search intent** | Comercial / Transaccional |
| **Location** | Alicante |

**Secondary keywords:**
- `alquiler coches Mercedes Alicante`
- `alquilar coche Alicante`
- `rent a car Alicante` `[EN]`
- `car rental Alicante` `[EN]`
- `luxury car rental Alicante` `[EN]`
- `alquiler coche lujo Alicante`
- `alquiler coche Costa Blanca`
- `alquiler furgoneta 8 plazas Alicante`
- `alquiler minivan Alicante`

**Keywords explícitamente NO asignadas aquí:**
- `alquiler coches aeropuerto Alicante` → /alicante/aeropuerto/
- `alquiler coches El Campello` → /alicante/oficina/
- `alquiler Mercedes Clase V Alicante` → /flota/mercedes-clase-v-avantgard-largo/

**H1 recomendado:**
> Alquiler de coches Mercedes en Alicante

**Title recomendado:**
> Alquiler de coches Mercedes en Alicante — Reserva online | Here & Now

**Meta description:**
> Alquila un Mercedes en Alicante desde 130€/día. Oficina propia en El Campello, aeropuerto y puerto. Clase V 8 plazas, automático. Reserva ahora.

**H2 propuestos:**
- `Nuestra flota disponible en Alicante`
- `Puntos de recogida en Alicante`
- `¿Por qué alquilar un Mercedes en Alicante?`
- `Alquiler flexible y adaptado a tus necesidades`
- `Cómo reservar tu Mercedes en Alicante`
- `Preguntas frecuentes — Alicante`

**Páginas que deben enlazar a `/alicante/`:**
- / (sección destinos)
- /flota/ (card "Disponible en Alicante")
- /flota/mercedes-clase-v-avantgard-largo/
- /alicante/aeropuerto/, /alicante/oficina/, /alicante/puerto/ (breadcrumb)
- /guias/alquiler-coches-alicante/ (CTA)
- /guias/que-ver-alicante-en-coche/ (CTA)

---

### 4. Fleet Overview — `/flota/`

| Campo | Valor |
|-------|-------|
| **Tipo** | CORE |
| **Objetivo** | Catálogo de flota. Capturar búsquedas por categoría, marca o tipo de vehículo sin destino concreto. |
| **Primary keyword** | `flota alquiler coches Mercedes Ibiza Alicante` |
| **Search intent** | Comercial (comparación) |
| **Location** | Ibiza + Alicante |

**Secondary keywords:**
- `alquiler Mercedes Clase V`
- `alquiler coches Mercedes España`
- `coches de alquiler premium Mercedes`
- `Mercedes fleet rental` `[EN]`
- `alquiler minivan Mercedes`
- `alquiler SUV Mercedes` (cuando el GLC se publique)
- `alquiler coche 8 plazas España`

**Anti-canibalización con / y location pages:**  
La homepage posee "alquiler coches Mercedes Ibiza Alicante" (ambas). Las location pages poseen "alquiler coches [ciudad]". Esta página posee la exploración de catálogo sin ciudad definida. Diferenciador: el usuario llega a /flota/ para comparar modelos, no para saber qué ciudad elegir.

**H1 recomendado:**
> Nuestra flota de Mercedes para alquilar en Ibiza y Alicante

**Title recomendado:**
> Flota Mercedes de alquiler — Ibiza y Alicante | Here & Now

**Meta description:**
> Explora nuestra flota exclusiva de Mercedes. Clase V 8 plazas, GLC 4MATIC y más. Disponibles en Ibiza y Alicante desde 130€/día. Elige y reserva online.

**H2 propuestos:**
- `Mercedes Clase V 220d Avantgard LARGO`
- `[modelo 2 si se publica]`
- `¿Qué Mercedes se adapta mejor a tu viaje?`
- `Disponibilidad por destino`

**Páginas que deben enlazar a `/flota/`:**
- / (nav principal + sección flota)
- /ibiza/ y /alicante/ ("Ver toda la flota")
- Todas las SEO_LANDING ("Ver toda nuestra flota")
- /guias/ (CTAs genéricos)

---

### 5. Car Detail — `/flota/mercedes-clase-v-avantgard-largo/`

| Campo | Valor |
|-------|-------|
| **Tipo** | CAR_DETAIL |
| **Objetivo** | Página de conversión directa. Capturar búsquedas de modelo específico y usuarios listos para reservar. |
| **Primary keyword** | `alquiler Mercedes Clase V Ibiza` |
| **Search intent** | Transaccional |
| **Location** | Ibiza + Alicante |

**Secondary keywords:**
- `alquiler Mercedes Clase V Alicante`
- `alquiler Mercedes Clase V 220d`
- `alquiler Mercedes Clase V 8 plazas`
- `alquiler minivan 8 plazas Ibiza`
- `alquiler coche 8 plazas Ibiza` (high volume)
- `alquiler furgoneta Mercedes Ibiza`
- `Mercedes V Class rental Ibiza` `[EN]`
- `Mercedes V Class hire Ibiza` `[EN]`
- `alquiler monovolumen lujo Ibiza`
- `alquiler coche familiar Ibiza`
- `alquiler coche grande Ibiza`
- `Mercedes Classe V location Ibiza` `[FR]` (turistas franceses)

**Keywords explícitamente NO asignadas aquí:**
- `alquiler coches Ibiza` → /ibiza/ (demasiado genérica para una ficha)
- `alquiler coches aeropuerto Ibiza` → /ibiza/aeropuerto/
- `alquiler minivan Ibiza` aparece como secundaria aquí y en /ibiza/ — **potencial canibalización menor controlada**: en /ibiza/ es una secondary keyword de la landing general; en la ficha del coche es la keyword del modelo. Si /ibiza/ tiene un H2 "Nuestra flota en Ibiza" que lista el vehículo, no hay confusión.

**H1 recomendado:**
> Alquiler Mercedes Clase V 220d Avantgard LARGO — Ibiza y Alicante

**Title recomendado:**
> Alquiler Mercedes Clase V Avantgard LARGO — 8 plazas desde 130€/día | Here & Now

*(55 chars con | Here & Now)*

**Meta description:**
> Alquila el Mercedes Clase V Avantgard LARGO en Ibiza o Alicante. 8 plazas, automático 9G-TRONIC, recogida en aeropuerto. Desde 130€/día. Reserva ahora.

**H2 propuestos:**
- `Especificaciones del Mercedes Clase V Avantgard LARGO`
- `Disponibilidad en Ibiza y Alicante`
- `Puntos de recogida y entrega`
- `Extras y coberturas disponibles`
- `Condiciones y requisitos del alquiler`
- `Cómo reservar el Mercedes Clase V`
- `Preguntas frecuentes sobre este vehículo`

**Páginas que deben enlazar a `/flota/mercedes-clase-v-avantgard-largo/`:**
- /flota/ (tarjeta de vehículo — enlace principal)
- /ibiza/ (grid de vehículos disponibles)
- /alicante/ (grid de vehículos disponibles)
- / (carousel de flota)
- /ibiza/aeropuerto/, /ibiza/puerto/ (CTA "Reservar este vehículo en este punto")
- /alicante/aeropuerto/, /alicante/oficina/, /alicante/puerto/ (ídem)
- /guias/alquiler-coches-ibiza/ (texto: "puedes alquilar nuestro Mercedes Clase V...")
- /guias/alquiler-coches-alicante/ (ídem)

---

### 6. Car Detail — `/flota/mercedes-clase-v-largo/` *(si se publica)*

| Campo | Valor |
|-------|-------|
| **Tipo** | CAR_DETAIL |
| **Primary keyword** | `alquiler Mercedes Clase V Largo Ibiza` |
| **Search intent** | Transaccional |
| **Location** | Ibiza + Alicante |

**Secondary keywords:**
- `alquiler Mercedes Clase V estándar Ibiza`
- `alquiler Mercedes V-Class Alicante`
- `alquiler coche 8 plazas barato Ibiza`
- `Mercedes V Class standard rental Ibiza` `[EN]`

**Anti-canibalización con car-001 (Avantgard):**  
El Avantgard posee "avantgard" y el nivel de equipamiento premium como diferenciador. El Largo estándar posee "largo" y el precio más competitivo. Los H1 deben ser distintos y las descripciones deben enfatizar las diferencias. Los precios distintos (130€ vs 140€) ayudan a diferenciar la intención.

**H1 recomendado:**
> Alquiler Mercedes Clase V 220D LARGO — Ibiza y Alicante

**Title recomendado:**
> Alquiler Mercedes Clase V LARGO — 8 plazas desde 140€/día | Here & Now

---

### 7. Car Detail — `/flota/mercedes-glc-220d/` *(si se publica)*

| Campo | Valor |
|-------|-------|
| **Tipo** | CAR_DETAIL |
| **Primary keyword** | `alquiler Mercedes GLC Alicante` |
| **Search intent** | Transaccional |
| **Location** | Alicante (Ibiza si se configura) |

**Secondary keywords:**
- `alquiler SUV lujo Alicante`
- `alquiler Mercedes GLC 4MATIC`
- `alquiler SUV premium Alicante`
- `Mercedes GLC rental Alicante` `[EN]`
- `luxury SUV rental Alicante` `[EN]`
- `alquiler SUV 5 plazas Alicante`
- `alquiler coche compacto premium Alicante`

**Anti-canibalización con Clase V:**  
El GLC posee las queries de "SUV" y "compacto". El Clase V posee las queries de "8 plazas", "minivan" y "familiar". Son segmentos de búsqueda distintos.

**Nota:** El user mencionó "SUV" como keyword prioritaria. Este es el único modelo de la flota que puede posicionarse como SUV.

**H1 recomendado:**
> Alquiler Mercedes GLC 220D 4MATIC — SUV premium en Alicante

**Title recomendado:**
> Alquiler Mercedes GLC 220D 4MATIC — SUV de lujo en Alicante | Here & Now

---

### 8. SEO Landing — `/ibiza/aeropuerto/`

| Campo | Valor |
|-------|-------|
| **Tipo** | SEO_LANDING |
| **Objetivo** | Capturar la búsqueda más alta en intención transaccional del sitio: alquilar al llegar al aeropuerto. |
| **Primary keyword** | `alquiler coches aeropuerto Ibiza` |
| **Search intent** | Transaccional (alta urgencia) |
| **Location** | Aeropuerto de Ibiza (IBZ) |

**Secondary keywords:**
- `rent a car Ibiza airport` `[EN]` ← alto volumen EN
- `car rental Ibiza airport` `[EN]`
- `hire car Ibiza airport` `[EN]`
- `alquiler coche aeropuerto Ibiza precio`
- `alquiler aeropuerto Ibiza sin tarjeta de crédito`
- `recogida coche aeropuerto Ibiza`
- `alquiler Mercedes aeropuerto Ibiza`
- `IBZ car hire` `[EN]`

**Anti-canibalización con /ibiza/:**  
/ibiza/ posee "alquiler coches Ibiza" (sin localización específica). Esta página posee "aeropuerto Ibiza". La diferencia es el modificador de localización. El contenido diferenciador clave: ubicación exacta del punto de recogida en el aeropuerto, instrucciones de llegada, qué hacer si el vuelo se retrasa.

**H1 recomendado:**
> Alquiler de coches en el Aeropuerto de Ibiza (IBZ)

**Title recomendado:**
> Alquiler coches Aeropuerto Ibiza (IBZ) — Mercedes sin esperas | Here & Now

**Meta description:**
> Recoge tu Mercedes en el Aeropuerto de Ibiza. Check-in rápido, sin colas. Clase V hasta 8 plazas disponible. Reserva online y recoge al aterrizar.

**H2 propuestos:**
- `Cómo recoger tu coche en el Aeropuerto de Ibiza`
- `Dónde encontrarnos en el aeropuerto`
- `Documentación necesaria para el check-in`
- `¿Qué pasa si mi vuelo se retrasa?`
- `Vehículos disponibles para recogida en el aeropuerto`
- `Distancias desde el aeropuerto de Ibiza`

**Schema:** `LocalBusiness` con coordenadas aeropuerto, `FAQPage`

**Páginas que deben enlazar a `/ibiza/aeropuerto/`:**
- /ibiza/ (card de punto de recogida)
- /flota/mercedes-clase-v-avantgard-largo/ (sección "Puntos de recogida en Ibiza")
- /guias/aeropuerto-ibiza/ (CTA a reserva)
- / (opcional: footer o sección de destinos)

---

### 9. SEO Landing — `/ibiza/puerto/`

| Campo | Valor |
|-------|-------|
| **Tipo** | SEO_LANDING |
| **Primary keyword** | `alquiler coches puerto Ibiza` |
| **Search intent** | Transaccional |
| **Location** | Puerto de Ibiza |

**Secondary keywords:**
- `rent a car Ibiza port` `[EN]`
- `car hire Ibiza harbour` `[EN]`
- `alquiler coche Ibiza ferri`
- `alquiler Mercedes puerto Ibiza`
- `alquilar coche llegada ferri Ibiza`
- `alquiler coche Ibiza Town`

**H1 recomendado:**
> Alquiler de coches en el Puerto de Ibiza

**Title recomendado:**
> Alquiler coches Puerto de Ibiza — Recogida en el muelle | Here & Now

**Meta description:**
> Alquila tu Mercedes directamente en el Puerto de Ibiza. Recogida al bajar del ferri o del yate. Reserva online y te esperamos en el muelle.

**H2 propuestos:**
- `Cómo recoger tu coche en el Puerto de Ibiza`
- `Conexiones de ferri con el Puerto de Ibiza`
- `Vehículos disponibles para recogida en el puerto`
- `Dónde encontrarnos en el puerto`

---

### 10. SEO Landing — `/alicante/aeropuerto/`

| Campo | Valor |
|-------|-------|
| **Tipo** | SEO_LANDING |
| **Primary keyword** | `alquiler coches aeropuerto Alicante` |
| **Search intent** | Transaccional (alta urgencia) |
| **Location** | Aeropuerto Alicante-Elche (ALC) |

**Secondary keywords:**
- `rent a car Alicante airport` `[EN]` ← alto volumen EN
- `car rental Alicante airport` `[EN]`
- `hire car Alicante airport` `[EN]`
- `alquiler coche aeropuerto Alicante-Elche`
- `alquiler Mercedes aeropuerto Alicante`
- `ALC car hire` `[EN]`
- `alquiler coches aeropuerto El Altet`
- `rent a car Costa Blanca airport` `[EN]`

**H1 recomendado:**
> Alquiler de coches en el Aeropuerto de Alicante-Elche (ALC)

**Title recomendado:**
> Alquiler coches Aeropuerto Alicante (ALC) — Mercedes premium | Here & Now

**Meta description:**
> Recoge tu Mercedes en el Aeropuerto de Alicante-Elche. Check-in rápido, coches premium disponibles. Reserva online y recoge al aterrizar en la Costa Blanca.

**H2 propuestos:**
- `Cómo recoger tu coche en el Aeropuerto de Alicante`
- `Dónde encontrarnos en el Aeropuerto de Alicante`
- `Distancias desde el aeropuerto a los principales destinos`
- `Vehículos disponibles para recogida en el aeropuerto`
- `Documentación necesaria`

---

### 11. SEO Landing — `/alicante/oficina/`

| Campo | Valor |
|-------|-------|
| **Tipo** | SEO_LANDING |
| **Primary keyword** | `alquiler coches El Campello Alicante` |
| **Search intent** | Transaccional / Navegacional |
| **Location** | El Campello, Alicante |

**Secondary keywords:**
- `here and now alicante oficina`
- `alquiler coches oficina alicante`
- `alquiler Mercedes El Campello`
- `alquiler coche alicante norte`
- `here now coches alicante`
- `oficina alquiler coches cerca de Alicante`

**Diferenciador de negocio:** Es el único punto de recogida con oficina propia. Puede posicionarse en Google Business Profile y Maps.

**H1 recomendado:**
> Alquiler de coches — Oficina propia en El Campello, Alicante

**Title recomendado:**
> Alquiler coches El Campello, Alicante — Oficina propia Here & Now

**Meta description:**
> Visita nuestra oficina en Calle de la Figuera 5, El Campello (Alicante). Atención personalizada, flota Mercedes premium. Abierto para recogida y entrega.

**H2 propuestos:**
- `Cómo llegar a nuestra oficina`
- `Horario de atención`
- `Vehículos disponibles para recogida en oficina`
- `Ventajas de recoger en nuestra oficina`

**Schema:** `LocalBusiness` con dirección, horario, teléfono, coordenadas

---

### 12. SEO Landing — `/alicante/puerto/`

| Campo | Valor |
|-------|-------|
| **Tipo** | SEO_LANDING |
| **Primary keyword** | `alquiler coches puerto Alicante` |
| **Search intent** | Transaccional |
| **Location** | Puerto de Alicante |

**Secondary keywords:**
- `rent a car Alicante port` `[EN]`
- `car hire Alicante harbour` `[EN]`
- `alquiler coche Alicante crucero`
- `alquiler Mercedes puerto Alicante`

**H1 recomendado:**
> Alquiler de coches en el Puerto de Alicante

**Title recomendado:**
> Alquiler coches Puerto de Alicante — Recogida en el muelle | Here & Now

---

### 13. Content Hub — `/guias/`

| Campo | Valor |
|-------|-------|
| **Tipo** | CONTENT |
| **Primary keyword** | `guías alquiler coches Ibiza Alicante` |
| **Search intent** | Informacional |
| **Location** | Ibiza + Alicante |

**H1 recomendado:**
> Guías de alquiler de coches en Ibiza y Alicante

**Title recomendado:**
> Guías de alquiler de coches — Ibiza y Alicante | Here & Now

**Páginas que deben enlazar a `/guias/`:**
- / (nav o footer)
- /ibiza/ (sección o footer)
- /alicante/ (sección o footer)

---

### 14. Guía — `/guias/alquiler-coches-ibiza/`

| Campo | Valor |
|-------|-------|
| **Tipo** | CONTENT |
| **Primary keyword** | `cómo alquilar coche en Ibiza` |
| **Search intent** | Informacional |
| **Location** | Ibiza |

**Secondary keywords:**
- `requisitos alquiler coche Ibiza`
- `cuánto cuesta alquilar coche en Ibiza`
- `mejor época alquilar coche Ibiza`
- `alquiler coche Ibiza sin tarjeta de crédito`
- `conducir en Ibiza normas`
- `car rental guide Ibiza` `[EN]`
- `how to rent a car in Ibiza` `[EN]`
- `tips alquiler coche Ibiza`

**Anti-canibalización con /ibiza/:**  
/ibiza/ posee intención **comercial** ("quiero reservar"). Esta guía posee intención **informacional** ("quiero entender cómo funciona antes de reservar"). El contenido es diferente: la landing tiene formulario de reserva y precios; la guía tiene consejos, requisitos, temporadas, zonas de la isla.

**H1 recomendado:**
> Guía completa para alquilar un coche en Ibiza

**Title recomendado:**
> Cómo alquilar un coche en Ibiza — Guía completa 2025 | Here & Now

**H2 propuestos:**
- `Documentación necesaria para alquilar en Ibiza`
- `Precios del alquiler de coches en Ibiza según temporada`
- `Qué cobertura contratar en Ibiza`
- `Normas de tráfico en Ibiza`
- `Mejores zonas de Ibiza para explorar en coche`
- `Consejos prácticos: aparcamiento, gasolineras, peajes`
- `Preguntas frecuentes sobre el alquiler en Ibiza`

**CTA:** → /ibiza/ "Reservar en Ibiza" + → /flota/ "Ver nuestra flota"

---

### 15. Guía — `/guias/alquiler-coches-alicante/`

| Campo | Valor |
|-------|-------|
| **Tipo** | CONTENT |
| **Primary keyword** | `cómo alquilar coche en Alicante` |
| **Search intent** | Informacional |
| **Location** | Alicante |

**Secondary keywords:**
- `alquiler coche Alicante temporada`
- `conducir en Alicante normas`
- `car rental guide Alicante` `[EN]`
- `alquiler coche Costa Blanca consejos`
- `requisitos alquiler coche Alicante`
- `mejor coche para Costa Blanca`

**H1 recomendado:**
> Guía completa para alquilar un coche en Alicante

**Title recomendado:**
> Cómo alquilar un coche en Alicante — Guía completa 2025 | Here & Now

---

### 16. Guía — `/guias/aeropuerto-ibiza/`

| Campo | Valor |
|-------|-------|
| **Tipo** | CONTENT |
| **Primary keyword** | `aeropuerto Ibiza alquiler de coche` |
| **Search intent** | Informacional / Transaccional mixto |
| **Location** | Aeropuerto de Ibiza |

**Secondary keywords:**
- `Ibiza airport car hire tips` `[EN]`
- `aeropuerto Ibiza terminal llegadas`
- `qué hacer a la llegada aeropuerto Ibiza`
- `aeropuerto Ibiza dónde está`
- `IBZ airport car rental` `[EN]`
- `Ibiza airport terminal 1 car hire` `[EN]`

**Anti-canibalización con /ibiza/aeropuerto/:**  
/ibiza/aeropuerto/ tiene intención **transaccional** (formulario de reserva, reservar ya). Esta guía tiene intención **informacional** (qué esperar, cómo funciona el aeropuerto, consejos prácticos). Son usuarios en diferente momento del funnel.

**H1 recomendado:**
> Alquiler de coche en el Aeropuerto de Ibiza — Guía práctica

**Title recomendado:**
> Alquiler de coche en el Aeropuerto de Ibiza (IBZ) — Guía completa | Here & Now

**H2 propuestos:**
- `El Aeropuerto de Ibiza: todo lo que necesitas saber`
- `Cómo funciona la recogida de coche en IBZ`
- `Qué documentación traer`
- `Consejos si tu vuelo llega tarde`
- `Distancias desde el aeropuerto de Ibiza`

---

### 17. Guía — `/guias/aeropuerto-alicante/`

| Campo | Valor |
|-------|-------|
| **Tipo** | CONTENT |
| **Primary keyword** | `aeropuerto Alicante alquiler de coche` |
| **Search intent** | Informacional |
| **Location** | Aeropuerto Alicante-Elche |

**Secondary keywords:**
- `Alicante airport car hire guide` `[EN]`
- `aeropuerto Alicante-Elche terminal`
- `ALC airport information` `[EN]`
- `Costa Blanca airport car rental` `[EN]`

**H1 recomendado:**
> Alquiler de coche en el Aeropuerto de Alicante-Elche — Guía práctica

---

### 18. Guía — `/guias/que-ver-ibiza-en-coche/`

| Campo | Valor |
|-------|-------|
| **Tipo** | CONTENT |
| **Primary keyword** | `qué ver en Ibiza en coche` |
| **Search intent** | Informacional (destino) |
| **Location** | Ibiza |

**Secondary keywords:**
- `rutas en coche por Ibiza`
- `playas Ibiza en coche`
- `Ibiza road trip` `[EN]`
- `driving tour Ibiza` `[EN]`
- `calas Ibiza accesibles en coche`
- `ruta norte Ibiza en coche`
- `qué ver Formentera desde Ibiza`
- `pueblos bonitos Ibiza coche`

**H1 recomendado:**
> Qué ver en Ibiza en coche — Rutas y playas imprescindibles

**Title recomendado:**
> Qué ver en Ibiza en coche — Las mejores rutas | Here & Now

**H2 propuestos:**
- `La mejor ruta por el norte de Ibiza`
- `Calas de Ibiza solo accesibles en coche`
- `Pueblos del interior que no te puedes perder`
- `Playas del sur de Ibiza en coche`
- `Consejos para conducir en Ibiza`
- `Cuánto tiempo necesitas para recorrer Ibiza en coche`

**CTA:** → /ibiza/ "Alquila tu coche en Ibiza"

---

### 19. Guía — `/guias/que-ver-alicante-en-coche/`

| Campo | Valor |
|-------|-------|
| **Tipo** | CONTENT |
| **Primary keyword** | `qué ver en Alicante en coche` |
| **Search intent** | Informacional (destino) |
| **Location** | Alicante / Costa Blanca |

**Secondary keywords:**
- `rutas en coche por la Costa Blanca`
- `Costa Blanca road trip` `[EN]`
- `pueblos bonitos Alicante en coche`
- `playas Alicante en coche`
- `driving Costa Blanca` `[EN]`
- `excursiones desde Alicante en coche`
- `ruta Alicante Benidorm Calpe en coche`

**H1 recomendado:**
> Qué ver en Alicante en coche — Rutas por la Costa Blanca

**Title recomendado:**
> Qué ver en Alicante en coche — Costa Blanca en ruta | Here & Now

---

### 20. Contacto — `/contacto/`

| Campo | Valor |
|-------|-------|
| **Tipo** | UTILITY |
| **Primary keyword** | `contacto alquiler coches here and now` |
| **Search intent** | Navegacional |
| **Location** | El Campello, Alicante |

**H1 recomendado:**
> Contacto — Here & Now Alquiler de Coches

**Title recomendado:**
> Contacto — Alquiler de Coches Mercedes Ibiza y Alicante | Here & Now

**Páginas que deben enlazar a `/contacto/`:**
- Todas (nav principal + footer)

---

### 21–25. Páginas legales y WooCommerce — UTILITY

| URL | Primary keyword | H1 | Title |
|-----|----------------|----|-------|
| `/terminos-y-condiciones/` | `términos condiciones alquiler coche here and now` | Términos y Condiciones del Alquiler | Términos y Condiciones — Alquiler de Coches \| Here & Now |
| `/politica-cancelacion/` | `política cancelación alquiler coche here and now` | Política de Cancelación y Devoluciones | Política de Cancelación — Here & Now |
| `/privacidad/` | (navegacional) | Política de Privacidad | Política de Privacidad — Here & Now |
| `/aviso-legal/` | (navegacional) | Aviso Legal | Aviso Legal — Here & Now |
| `/cookies/` | (navegacional) | Política de Cookies | Política de Cookies — Here & Now |

Estas páginas tienen `index, follow` pero no son objetivo de posicionamiento en buscadores.

---

## Tabla resumen anti-canibalización

La siguiente tabla muestra qué página "posee" cada cluster de intención. Ninguna keyword primaria se repite.

| Cluster de keyword | Página propietaria |
|-------------------|-------------------|
| `alquiler coches Mercedes Ibiza Alicante` (genérico) | `/` |
| `alquiler coches Ibiza` | `/ibiza/` |
| `alquiler coches Alicante` | `/alicante/` |
| `alquiler coches aeropuerto Ibiza` | `/ibiza/aeropuerto/` |
| `alquiler coches puerto Ibiza` | `/ibiza/puerto/` |
| `alquiler coches aeropuerto Alicante` | `/alicante/aeropuerto/` |
| `alquiler coches El Campello / oficina Alicante` | `/alicante/oficina/` |
| `alquiler coches puerto Alicante` | `/alicante/puerto/` |
| `catálogo / flota Mercedes` | `/flota/` |
| `alquiler Mercedes Clase V Ibiza / Alicante` | `/flota/mercedes-clase-v-avantgard-largo/` |
| `alquiler SUV Mercedes Alicante` (GLC) | `/flota/mercedes-glc-220d/` |
| `cómo alquilar coche Ibiza` (informacional) | `/guias/alquiler-coches-ibiza/` |
| `cómo alquilar coche Alicante` (informacional) | `/guias/alquiler-coches-alicante/` |
| `aeropuerto Ibiza + alquiler` (informacional) | `/guias/aeropuerto-ibiza/` |
| `aeropuerto Alicante + alquiler` (informacional) | `/guias/aeropuerto-alicante/` |
| `qué ver Ibiza en coche` | `/guias/que-ver-ibiza-en-coche/` |
| `qué ver Alicante en coche` | `/guias/que-ver-alicante-en-coche/` |

---

## Keywords solicitadas — asignación explícita

El usuario mencionó keywords prioritarias. Aquí su asignación definitiva:

| Keyword | Página | Rol |
|---------|--------|-----|
| `rent a car` (genérico) | / y /ibiza/ y /alicante/ | Secondary (EN) |
| `rent a car Ibiza` | /ibiza/ | Secondary (EN) |
| `rent a car Alicante` | /alicante/ | Secondary (EN) |
| `car rental` (genérico) | / y /ibiza/ y /alicante/ | Secondary (EN) |
| `car rental Ibiza airport` | /ibiza/aeropuerto/ | Primary (EN) |
| `car rental Alicante airport` | /alicante/aeropuerto/ | Primary (EN) |
| `luxury car rental Ibiza` | /ibiza/ | Secondary (EN) |
| `luxury car rental Alicante` | /alicante/ | Secondary (EN) |
| `premium car rental Ibiza` | /ibiza/ | Secondary (EN) |
| `premium car rental Alicante` | /alicante/ | Secondary (EN) |
| `SUV rental Alicante` | /flota/mercedes-glc-220d/ (si publ.) | Primary |
| `luxury SUV Alicante` | /flota/mercedes-glc-220d/ | Secondary |
| `convertible` | **SIN ASIGNAR** — no hay convertible en la flota actual |
| `Mercedes Clase V` | /flota/mercedes-clase-v-avantgard-largo/ | Primary |
| `Mercedes GLC 4MATIC` | /flota/mercedes-glc-220d/ | Primary |

---

## Zonas de riesgo de canibalización detectadas

| Riesgo | Páginas en tensión | Mitigación |
|--------|-------------------|-----------|
| "alquiler coches ibiza" puede aparecer en `/` y `/ibiza/` | / vs /ibiza/ | El title de `/` menciona "Ibiza y Alicante" (ambas ciudades). El de `/ibiza/` menciona solo "Ibiza". El H1 confirma el enfoque. |
| "alquiler Mercedes Ibiza" puede competir entre `/ibiza/` y `/flota/mercedes-clase-v-avantgard-largo/` | /ibiza/ vs /flota/coche/ | /ibiza/ posee el destino. El car detail posee el modelo+destino. El car detail tiene el formulario de reserva (señal de conversión más fuerte). |
| "rent a car Ibiza airport" en `/ibiza/aeropuerto/` y en `/guias/aeropuerto-ibiza/` | /ibiza/aeropuerto/ vs /guias/aeropuerto-ibiza/ | El SEO_LANDING tiene intención transaccional (formulario, CTA directo). La guía tiene intención informacional (texto largo, sin formulario en la cabecera). Señales de intent muy distintas para Google. |
| "cómo alquilar coche en Ibiza" en `/guias/alquiler-coches-ibiza/` y en `/ibiza/` | /ibiza/ vs /guias/ibiza/ | /ibiza/ responde a "quiero alquilar en Ibiza" (transaccional). La guía responde a "cómo funciona alquilar en Ibiza" (informacional). Diferentes palabras clave de cabeza. |
