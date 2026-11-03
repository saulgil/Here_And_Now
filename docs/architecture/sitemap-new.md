# Arquitectura de información — nueva web Here & Now

> Negocio: alquiler exclusivo de coches en **Ibiza** y **Alicante**.  
> Fuentes: análisis completo de `docs/current-site/`, `docs/content/`, `docs/seo/`.  
> Fecha: 2026-11-02  
> Estado: diseño conceptual — **no implementar todavía**.

---

## Principios de diseño

1. **Sin páginas de relleno.** Cada URL sirve una intención de búsqueda diferenciada o una función técnica imprescindible.
2. **Dos destinos, una marca.** Ibiza y Alicante son ejes paralelos del sitio — misma jerarquía, mismo contenido temático, distinta localización.
3. **Conversión en cada página.** Toda página de contenido tiene un CTA visible hacia el formulario de reserva.
4. **Escalabilidad de flota.** Las car detail pages funcionan con 1 vehículo o con 20.
5. **Enlazado interno deliberado.** Cada página recibe y envía enlaces con propósito, no por defecto.
6. **Español como idioma base.** La versión EN puede añadirse con URLs separadas (`/en/`) en una fase posterior.

---

## Tipos de página

| Tipo | Descripción |
|------|-------------|
| `CORE` | Páginas estructurales de la web. Alta autoridad interna. |
| `SEO_LANDING` | Páginas diseñadas para capturar tráfico con intención transaccional específica. |
| `CAR_DETAIL` | Ficha del vehículo. Incluye galería, specs y formulario de reserva. |
| `UTILITY` | Funcional. WooCommerce, legales, cuenta de usuario. Generalmente `noindex`. |
| `CONTENT` | Blog / guías. Captura long-tail, establece autoridad topical, enlaza a páginas de conversión. |

---

## Árbol completo de URLs

```
/                                              CORE
│
├── /ibiza/                                    CORE
│   ├── /ibiza/aeropuerto/                     SEO_LANDING
│   └── /ibiza/puerto/                         SEO_LANDING
│
├── /alicante/                                 CORE
│   ├── /alicante/aeropuerto/                  SEO_LANDING
│   ├── /alicante/oficina/                     SEO_LANDING
│   └── /alicante/puerto/                      SEO_LANDING
│
├── /flota/                                    CORE
│   ├── /flota/mercedes-clase-v-avantgard-largo/   CAR_DETAIL
│   ├── /flota/mercedes-clase-v-largo/             CAR_DETAIL  [si se publica]
│   └── /flota/mercedes-glc-220d/                  CAR_DETAIL  [si se publica]
│
├── /guias/                                    CONTENT (hub)
│   ├── /guias/alquiler-coches-ibiza/          CONTENT
│   ├── /guias/alquiler-coches-alicante/       CONTENT
│   ├── /guias/aeropuerto-ibiza/               CONTENT
│   ├── /guias/aeropuerto-alicante/            CONTENT
│   ├── /guias/que-ver-ibiza-en-coche/         CONTENT
│   └── /guias/que-ver-alicante-en-coche/      CONTENT
│
├── /contacto/                                 UTILITY
│
├── /reservar/                                 UTILITY (WooCommerce checkout)
│   ├── /carrito/                              UTILITY (noindex)
│   └── /finalizar-compra/                     UTILITY (noindex)
│
├── /mi-cuenta/                                UTILITY (noindex)
│
├── /terminos-y-condiciones/                   UTILITY
├── /politica-cancelacion/                     UTILITY
├── /privacidad/                               UTILITY
├── /aviso-legal/                              UTILITY
└── /cookies/                                  UTILITY
```

**Total de URLs únicas:** 25 (sin contar variaciones de carrito/checkout)  
**URLs indexables:** 19 (se excluyen las 6 UTILITY con `noindex`)

---

## Redirects 301 desde URLs actuales

| URL antigua (actual) | URL nueva | Tipo |
|---------------------|-----------|------|
| /alquiler-coches-ibiza-mercedes/ | /ibiza/ | 301 |
| /alquiler-coches-alicante-mercedes/ | /alicante/ | 301 |
| /alquiler-coches-mercedes/ | / | 301 |
| /nuestra-flota/ | /flota/ | 301 |
| /producto/mercedes-clase-v-220d-avantgard-largo-ibiza/ | /flota/mercedes-clase-v-avantgard-largo/ | 301 |
| /producto/mercedes-clase-v-220d-avantgard-largo/ | /flota/mercedes-clase-v-avantgard-largo/ | 301 |
| /mercedes-clase-v-220d-avantgard-largo-ibiza/ | /flota/mercedes-clase-v-avantgard-largo/ | 301 |
| /mercedes-clase-v-220d-largo/ | /flota/ | 301 |
| /mercedes-glc-220d-4matic/ | /flota/ | 301 |
| /contacto-alquiler-coches-alicante-ibiza/ | /contacto/ | 301 |
| /contacto | /contacto/ | 301 |
| /busqueda-coches-de-alquiler/ | /flota/ | 301 |
| /terminos-y-condiciones/ | /terminos-y-condiciones/ | KEEP (URL no cambia) |
| /politica-de-cancelacion-y-devolucion/ | /politica-cancelacion/ | 301 |
| /politica-privacidad/ | /privacidad/ | 301 |
| /politica-de-cookies-ue/ | /cookies/ | 301 |
| /brw_Pasajeros/* | /flota/ | 301 |
| /brw_tipo/* | /flota/ | 301 |
| /categoria-producto/ibiza/* | /ibiza/ | 301 |
| /categoria-producto/alicante/* | /alicante/ | 301 |
| /hola-mundo/ | / | 301 |
| /author/hereandnow/ | — | 410 |
| /category/* | — | 410 |

---

---

## Descripción detallada de cada tipo de página

---

### CORE — Homepage `/`

**Objetivo:** Presentar el negocio, capturar la intención genérica de alquiler de coches premium en Ibiza o Alicante, y dirigir al usuario hacia su destino.

**Intención de búsqueda:**
- `alquiler coches ibiza alicante`
- `here and now alquiler coches`
- `alquiler mercedes ibiza`
- [navegacional] usuarios que conocen la marca

**Contenido:**
1. Hero — headline con keyword principal + buscador de coches (selector destino, fechas)
2. Sección destinos — cards visuales Ibiza y Alicante con CTA a cada landing
3. Sección flota — carousel de vehículos disponibles (1–4 coches)
4. Sección valores — propuesta diferencial (exclusividad Mercedes, servicio premium)
5. Testimonios / reseñas
6. FAQ con schema FAQPage (preguntas frecuentes sobre alquiler)
7. CTA final → /contacto/ o formulario de reserva

**H1:** Alquiler de coches Mercedes en Ibiza y Alicante  
**Title:** Alquiler de coches Mercedes en Ibiza y Alicante | Here & Now  
**Meta description:** Alquila un Mercedes en Ibiza o Alicante. Flota premium, recogida en aeropuerto o puerto. Reserva online sin costes ocultos.

**Schema:** `Organization`, `LocalBusiness`, `CarRental`, `FAQPage`

**CTA principal:** "Ver vehículos" → /flota/ y "Reservar en Ibiza / Alicante"

**Links hacia:**
- /ibiza/ → Reservar en Ibiza
- /alicante/ → Reservar en Alicante
- /flota/ → Nuestra flota
- /flota/mercedes-clase-v-avantgard-largo/ → CTA tarjeta vehículo
- /contacto/ → Footer

**Links desde:**
- Todos los demás (logo → home)

---

### CORE — Location Hub Ibiza `/ibiza/`

**Objetivo:** Página principal de Ibiza. Capturar volumen de búsqueda y dirigir a reserva o a pickup points específicos.

**Intención de búsqueda (primarias):**
- `alquiler coches ibiza` [alta]
- `alquiler coches mercedes ibiza` [media-alta]
- `rent a car ibiza` [alta, EN]
- `alquilar coche ibiza` [alta]

**Intención de búsqueda (secundarias):**
- `alquiler coche ibiza precio`
- `alquiler furgoneta ibiza 8 plazas`
- `alquiler minivan ibiza`

**Contenido:**
1. H1: Alquiler de coches Mercedes en Ibiza
2. Intro SEO (150–200 palabras): porqué alquilar un Mercedes en Ibiza, qué incluye
3. Formulario de búsqueda filtrado a Ibiza (fechas, modelo)
4. Grid de vehículos disponibles en Ibiza (tarjetas con precio y CTA)
5. Sección puntos de recogida — cards de Aeropuerto y Puerto (links a SEO_LANDING)
6. Testimonios sobre Ibiza
7. Bloque FAQ específico Ibiza (ej: requisitos, precios temporada, conducir en Ibiza)
8. Texto SEO largo (300–400 palabras): Ibiza en coche, zonas, playas, normas de tráfico

**H1:** Alquiler de coches Mercedes en Ibiza  
**Title:** Alquiler de coches Mercedes en Ibiza — Reserva online | Here & Now  
**Meta description:** Alquila un Mercedes en Ibiza desde 130€/día. Recogida en aeropuerto, puerto u otro punto. Sin sorpresas, sin costes ocultos.

**Schema:** `LocalBusiness` con address Ibiza, `CarRental`, `FAQPage`

**CTA principal:** "Reservar en Ibiza" → /flota/[coche]/ (con destino=ibiza preseleccionado)

**Links hacia:**
- /flota/mercedes-clase-v-avantgard-largo/ (CTA tarjetas de vehículo)
- /ibiza/aeropuerto/ (punto de recogida)
- /ibiza/puerto/ (punto de recogida)
- /guias/alquiler-coches-ibiza/ (anchor: "Guía completa para alquilar en Ibiza")
- /guias/que-ver-ibiza-en-coche/ (anchor: "Descubre Ibiza en coche")

**Links desde:**
- / (sección destinos)
- /flota/ (card "Disponible en Ibiza")
- /flota/mercedes-clase-v-avantgard-largo/ (link contextual)
- /ibiza/aeropuerto/, /ibiza/puerto/ (breadcrumb)
- /guias/alquiler-coches-ibiza/ (CTA interno)

---

### CORE — Location Hub Alicante `/alicante/`

**Objetivo:** Gemelo de /ibiza/ para Alicante.

**Intención de búsqueda (primarias):**
- `alquiler coches alicante` [alta]
- `alquiler coches mercedes alicante` [media]
- `rent a car alicante` [alta, EN]
- `alquilar coche alicante` [alta]

**Contenido:** Misma estructura que /ibiza/ adaptada a Alicante.

**Diferencias respecto a /ibiza/:**
- Puntos de recogida: Aeropuerto, Oficina El Campello, Puerto
- Texto SEO orientado a Alicante (Costa Blanca, playas, rutas)
- FAQ sobre Alicante (conducir en la Costa Blanca, aparcamiento, etc.)

**H1:** Alquiler de coches Mercedes en Alicante  
**Title:** Alquiler de coches Mercedes en Alicante — Reserva online | Here & Now  
**Meta description:** Alquila un Mercedes en Alicante desde 130€/día. Oficina propia, aeropuerto y puerto. Mercedes Clase V con hasta 8 plazas.

**Schema:** `LocalBusiness` con address Alicante (Calle de la Figuera, 5 — El Campello)

**CTA principal:** "Reservar en Alicante"

**Links hacia:**
- /flota/mercedes-clase-v-avantgard-largo/
- /alicante/aeropuerto/
- /alicante/oficina/
- /alicante/puerto/
- /guias/alquiler-coches-alicante/
- /guias/que-ver-alicante-en-coche/

**Links desde:**
- / (sección destinos)
- /flota/ (card "Disponible en Alicante")
- /flota/mercedes-clase-v-avantgard-largo/
- /alicante/aeropuerto/, /alicante/oficina/, /alicante/puerto/ (breadcrumb)

---

### CORE — Fleet Overview `/flota/`

**Objetivo:** Listado completo de la flota. Punto de entrada para comparación de vehículos. Captura búsquedas de flota/modelos.

**Intención de búsqueda:**
- `flota alquiler coches ibiza` [media]
- `mercedes clase v alquiler` [media]
- `alquiler minivan 8 plazas ibiza` [media]
- `alquiler mercedes glc ibiza` [si el GLC se publica]

**Contenido:**
1. H1: Nuestra flota de Mercedes en Ibiza y Alicante
2. Intro (100 palabras): exclusividad Mercedes, variedad de modelos
3. Grid de vehículos — tarjeta por modelo con: foto, nombre, specs resumen (plazas, transmisión, combustible), precio desde, disponibilidad (Ibiza / Alicante / ambas)
4. Filtro de búsqueda (pasajeros, destino, transmisión)
5. Sección "¿Cuál es el mejor coche para ti?" — guía breve de selección
6. CTA a contacto para consultas especiales

**H1:** Nuestra flota de alquiler en Ibiza y Alicante  
**Title:** Flota de alquiler Mercedes en Ibiza y Alicante | Here & Now  
**Meta description:** Descubre nuestra flota de Mercedes para alquilar en Ibiza y Alicante. Clase V 8 plazas, GLC 4MATIC y más. Reserva online desde 130€/día.

**CTA principal:** Tarjetas individuales de vehículo → /flota/[car-slug]/

**Links hacia:**
- /flota/mercedes-clase-v-avantgard-largo/
- /flota/mercedes-clase-v-largo/ [si publicado]
- /flota/mercedes-glc-220d/ [si publicado]
- /ibiza/ y /alicante/ (CTAs de destino)

**Links desde:**
- / (nav principal + sección flota)
- /ibiza/ y /alicante/ (grid de vehículos)
- Todas las SEO_LANDING (link "Ver toda la flota")

---

---

## Páginas CAR_DETAIL

---

### CAR_DETAIL — `/flota/mercedes-clase-v-avantgard-largo/`

**Objetivo:** Página de conversión principal del sitio. Generar reservas. Capturar búsquedas de modelo específico.

**Intención de búsqueda:**
- `alquiler mercedes clase v ibiza` [alta conversión]
- `alquiler mercedes v class alicante` [alta conversión]
- `alquiler minivan 8 plazas ibiza` [alta conversión]
- `alquiler coche 8 plazas ibiza` [alta volumen]
- `mercedes clase v 220d alquiler` [media]

**Contenido:**
1. H1: Mercedes Clase V 220d Avantgard LARGO — Alquiler en Ibiza y Alicante
2. Galería de imágenes (7 fotos: exterior x4, interior x2, detalle x1)
3. Precio desde + disponibilidad (Ibiza ✓ / Alicante ✓)
4. Specs rápidas: 8 plazas · Automático · Diésel · 2024
5. Descripción completa del vehículo (150–200 palabras)
6. Lista de equipamiento y características
7. **Formulario de reserva** (integrado en la página):
   - Selector de destino (Ibiza / Alicante)
   - Punto de recogida (según destino)
   - Punto de entrega
   - Fechas
   - Extras opcionales (silletas, conductor adicional)
   - Coberturas
8. Sección "Requisitos" (edad mínima, carnet)
9. Especificaciones técnicas completas (tabla)
10. Sección "¿Cómo funciona la reserva?" (3 pasos)
11. Preguntas frecuentes específicas de este vehículo (schema FAQPage)
12. Vehículos relacionados (si hay más en flota)

**H1:** Mercedes Clase V 220d Avantgard LARGO — Alquiler en Ibiza y Alicante  
**Title:** Alquiler Mercedes Clase V Avantgard LARGO — 8 plazas desde 130€/día | Here & Now  
**Meta description:** Alquila el Mercedes Clase V Avantgard LARGO en Ibiza o Alicante. 8 plazas, automático, recogida en aeropuerto o puerto. Desde 130€/día.

**Schema:** `Product` con `Offer` (precio, moneda), `FAQPage`, `BreadcrumbList`

**Breadcrumb:** Inicio > Flota > Mercedes Clase V Avantgard LARGO

**CTA principal:** Formulario de reserva (inline) — "Reservar ahora"

**Links hacia:**
- /ibiza/ y /alicante/ (enlaces contextuales en "disponible en")
- /ibiza/aeropuerto/ (texto: "recogida en el aeropuerto de Ibiza")
- /alicante/aeropuerto/ (ídem)
- /terminos-y-condiciones/ (en sección coberturas)
- /politica-cancelacion/ (en formulario)

**Links desde:**
- /flota/ (tarjeta de vehículo)
- /ibiza/ (grid de vehículos)
- /alicante/ (grid de vehículos)
- / (carousel de flota)
- /ibiza/aeropuerto/, /ibiza/puerto/ (CTA "Reservar para este punto")
- Todas las SEO_LANDINGs (link al vehículo)

---

### CAR_DETAIL — `/flota/mercedes-clase-v-largo/` *(publicar solo si el producto está listo)*

**Objetivo:** Segunda opción de vehículo de la familia Clase V. Capturar tráfico de usuarios que buscan un Mercedes más económico o el modelo estándar.

**Intención de búsqueda:**
- `alquiler mercedes clase v ibiza` [comparte con Avantgard]
- `alquiler coche grande ibiza` [long-tail]
- `alquiler mercedes barato ibiza` [implícito en precio menor]

**Contenido:** Misma estructura que el Avantgard. Énfasis en la diferencia de equipamiento y precio.

**H1:** Mercedes Clase V 220D Largo — Alquiler en Ibiza y Alicante  
**Title:** Alquiler Mercedes Clase V LARGO — 8 plazas desde 140€/día | Here & Now

**Nota:** Esta página solo debe crearse cuando el vehículo tenga todas las especificaciones, fotos profesionales y el precio definitivo. Ver `cars-final.md` (car-002).

---

### CAR_DETAIL — `/flota/mercedes-glc-220d/` *(publicar solo si el producto está listo)*

**Objetivo:** Capturar tráfico premium de usuarios que buscan un SUV compacto de lujo.

**Intención de búsqueda:**
- `alquiler mercedes glc alicante` [baja, muy específica]
- `alquiler suv lujo alicante` [media]
- `alquiler coche lujo 5 plazas alicante` [media]

**Nota:** Solo Alicante por ahora según configuración actual. Ver `cars-final.md` (car-003).

---

---

## Páginas SEO_LANDING (pickup points)

Estas páginas tienen un doble objetivo: SEO (capturar búsquedas con intención de recoger el coche en un punto específico) y UX (dar información práctica del punto de recogida concreto).

**Regla de unicidad:** Cada SEO_LANDING debe tener al menos 200 palabras de contenido único que NO aparezcan en la página madre (/ibiza/ o /alicante/). Si no puede producirse ese contenido, la página no debe crearse.

---

### SEO_LANDING — `/ibiza/aeropuerto/`

**Objetivo:** Capturar la búsqueda más valiosa del sitio: usuarios que aterrizan en Ibiza y necesitan coche inmediatamente.

**Intención de búsqueda:**
- `alquiler coches aeropuerto ibiza` [muy alta, muy transaccional]
- `alquiler coche ibiza airport` [EN, alta]
- `rent a car ibiza airport` [EN, muy alta]
- `recoger coche alquiler aeropuerto ibiza`

**Contenido:**
1. H1: Alquiler de coches en el Aeropuerto de Ibiza
2. Texto específico: cómo funciona la recogida en el aeropuerto, dónde espera el vehículo, qué documentación traer
3. Distancia aeropuerto → puntos clave de Ibiza
4. Grid de vehículos disponibles para recogida en aeropuerto (= todos)
5. Formulario de reserva con punto de recogida = Aeropuerto de Ibiza preseleccionado
6. Mapa o información de terminal
7. FAQ: "¿Cuánto tiempo tarda el check-in?", "¿Qué pasa si mi vuelo se retrasa?"

**H1:** Alquiler de coches en el Aeropuerto de Ibiza (IBZ)  
**Title:** Alquiler de coches Aeropuerto de Ibiza (IBZ) — Mercedes premium | Here & Now  
**Meta description:** Recoge tu Mercedes en el aeropuerto de Ibiza. Proceso rápido, sin colas, vehículos premium. Reserva online con antelación.

**Schema:** `LocalBusiness` con coordenadas del aeropuerto de Ibiza

**CTA principal:** Formulario de reserva con recogida en aeropuerto

**Links hacia:**
- /flota/mercedes-clase-v-avantgard-largo/ (tarjeta de vehículo)
- /ibiza/ (enlace: "Ver todos los servicios en Ibiza")
- /guias/aeropuerto-ibiza/ (enlace: "Guía completa del aeropuerto de Ibiza")

**Links desde:**
- /ibiza/ (card de punto de recogida)
- / (sección de servicios, opcional)
- /guias/aeropuerto-ibiza/ (CTA)
- /flota/mercedes-clase-v-avantgard-largo/ (text link en sección ubicaciones)

---

### SEO_LANDING — `/ibiza/puerto/`

**Objetivo:** Usuarios que llegan en ferri o yate y necesitan coche al salir del puerto.

**Intención de búsqueda:**
- `alquiler coches puerto ibiza`
- `alquiler coche ibiza ferry`
- `rent a car puerto ibiza`

**Contenido:** Mismo esquema que /ibiza/aeropuerto/ adaptado al Puerto de Ibiza. Incluir conexiones de ferri, información del muelle, cómo encontrar el vehículo.

**H1:** Alquiler de coches en el Puerto de Ibiza

---

### SEO_LANDING — `/alicante/aeropuerto/`

**Objetivo:** Alta intención de alquiler en el Aeropuerto de Alicante (ALC / Aeropuerto Internacional de Alicante-Elche).

**Intención de búsqueda:**
- `alquiler coches aeropuerto alicante` [muy alta]
- `rent a car alicante airport` [EN, alta]
- `alquiler coche aeropuerto alicante-elche`

**H1:** Alquiler de coches en el Aeropuerto de Alicante-Elche (ALC)

**Nota:** El aeropuerto de Alicante es uno de los más transitados de España en verano. Esta página tiene potencial de alto tráfico.

---

### SEO_LANDING — `/alicante/oficina/`

**Objetivo:** Usuarios que buscan recoger el coche directamente en la oficina física de Here & Now (El Campello, Alicante). Punto único de la competencia.

**Intención de búsqueda:**
- `alquiler coches el campello alicante`
- `here and now alicante oficina`
- `alquiler coches alicante oficina propia`

**Contenido:**
1. H1: Alquiler de coches — Oficina de Alicante (El Campello)
2. Dirección completa + mapa (Calle de la Figuera, 5 local 58, 03560 El Campello)
3. Horario de atención
4. Cómo llegar en coche / transporte público
5. Ventajas de recoger en oficina propia vs aeropuerto

**H1:** Alquiler de coches — Oficina propia en El Campello, Alicante  
**Schema:** `LocalBusiness` con dirección completa, horario, teléfono, coordenadas

---

### SEO_LANDING — `/alicante/puerto/`

**Objetivo:** Recogida en el Puerto de Alicante. Menos volumen que el aeropuerto pero intención alta.

**Intención de búsqueda:**
- `alquiler coches puerto alicante`
- `alquiler coche alicante crucero`

---

---

## Páginas CONTENT — Guías

El blog/guías tiene un rol SEO específico: capturar long-tail, establecer autoridad topical sobre "alquiler de coches en Ibiza/Alicante" y canalizar ese tráfico hacia las páginas de conversión.

**Política de guías:** Solo crear una guía si puede tener un mínimo de 800 palabras de contenido original y útil. No crear guías de relleno.

---

### `/guias/` — Hub de guías

**Objetivo:** Landing de la sección de guías. Muestra todas las guías publicadas. Enlaza internamente bien.

**H1:** Guías de alquiler de coches en Ibiza y Alicante

---

### `/guias/alquiler-coches-ibiza/`

**Objetivo:** Guía completa y exhaustiva sobre alquilar un coche en Ibiza. Página de referencia que puede posicionar para decenas de long-tail queries.

**Intención de búsqueda:**
- `guía alquiler coches ibiza` [informacional]
- `qué necesito para alquilar coche ibiza`
- `alquiler coche ibiza requisitos`
- `cuánto cuesta alquilar coche ibiza`
- `mejor época alquilar coche ibiza`

**Contenido (mínimo 1000 palabras):**
- Requisitos para alquilar en Ibiza (edad, carnet, tarjeta)
- Cuándo reservar (temporadas, precios por época)
- Qué coberturas contratar
- Normas de tráfico específicas de Ibiza
- Zonas de la isla accesibles solo en coche
- Consejos prácticos (aparcamiento, gasolineras, etc.)

**Schema:** `Article`, `FAQPage`

**CTA:** → /ibiza/ ("Reservar ahora en Ibiza") + → /flota/ ("Ver nuestra flota")

---

### `/guias/alquiler-coches-alicante/`

**Objetivo:** Guía equivalente para Alicante.

**Intención de búsqueda:**
- `guía alquiler coches alicante`
- `alquiler coche alicante requisitos`
- `qué ver alicante en coche`

---

### `/guias/aeropuerto-ibiza/`

**Objetivo:** Guía específica del Aeropuerto de Ibiza con enfoque en alquiler de coches. Captura tráfico informacional que luego convierte.

**Intención de búsqueda:**
- `aeropuerto de ibiza alquiler coche`
- `cómo llegar del aeropuerto de ibiza al centro`
- `ibiza airport car hire tips`

**Contenido:**
- Terminales del aeropuerto de Ibiza
- Ubicación del punto de recogida de Here & Now
- Tiempo de espera habitual
- Documentación necesaria
- Transporte alternativo desde el aeropuerto

**CTA:** → /ibiza/aeropuerto/ ("Reservar recogida en el aeropuerto")

---

### `/guias/aeropuerto-alicante/`

**Objetivo:** Ídem para el Aeropuerto de Alicante-Elche.

---

### `/guias/que-ver-ibiza-en-coche/`

**Objetivo:** Contenido de destino. Usuarios que ya van a Ibiza y quieren planificar. Alta intención de alquilar coche.

**Intención de búsqueda:**
- `qué ver en ibiza en coche`
- `rutas coche ibiza`
- `playas ibiza sin autobús`
- `ibiza en coche ruta`

**Contenido:** Las mejores playas y calas de Ibiza solo accesibles en coche, rutas por la isla, tiempo recomendado, aparcamiento en destinos populares.

**CTA:** → /ibiza/ ("Alquila tu coche en Ibiza")

---

### `/guias/que-ver-alicante-en-coche/`

**Objetivo:** Ídem para Alicante.

**Intención de búsqueda:**
- `qué ver en alicante en coche`
- `rutas costa blanca coche`
- `pueblos bonitos alicante en coche`

---

---

## Páginas UTILITY

---

### `/contacto/`

**Objetivo:** Canal de comunicación. Captar consultas previas a la reserva.

**Contenido:**
- H1: Contacto
- Formulario de contacto (nombre, email, mensaje)
- Teléfono clickable: 625 305 620
- Email (si existe — actualmente UNKNOWN)
- Dirección física: Calle de la Figuera, 5 local 58, El Campello, Alicante
- Mapa embed (Google Maps)
- Horario de atención
- Enlace a formulario de reserva para consultas comerciales directas

**Schema:** `ContactPage`, `LocalBusiness`

**CTA:** Botón WhatsApp (si se implementa) + formulario

**Links desde:** Nav principal, footer, todas las páginas

---

### `/mi-cuenta/` (noindex)
WooCommerce. Sin cambios estructurales. Login + registro de cliente.

### `/carrito/` (noindex)
WooCommerce. Resumen de reserva antes del pago.

### `/finalizar-compra/` (noindex)
WooCommerce. Proceso de pago (Redsys + Bizum).

---

### `/terminos-y-condiciones/`

**Objetivo:** Documento legal completo del contrato de alquiler. Actualmente tiene la URL más larga — mantener.

**Nota:** Añadir meta description y verificar H1 correcto. Sin cambios de URL.

---

### `/politica-cancelacion/` (301 desde `/politica-de-cancelacion-y-devolucion/`)

URL simplificada. Mismo contenido.

---

### `/privacidad/` (301 desde `/politica-privacidad/`)
### `/aviso-legal/` (sin cambio)
### `/cookies/` (301 desde `/politica-de-cookies-ue/`)

---

---

## Diagrama de enlazado interno

```
                    /
                   / \
                  /   \
            /ibiza/  /alicante/
             /  \      /   |  \
          /aer  /pto /aer /ofc /pto
              \   /   \   /
               \ /     \ /
            /flota/
           /   |   \
         CAR1 CAR2  CAR3
              
            /guias/
           /   |   \  ...
         G1   G2   G3

         /contacto/  [desde nav + footer]
         /terminos/  [desde formularios de reserva]
```

**Reglas de enlazado interno:**

1. **Cada CAR_DETAIL enlaza a ambas location hubs** (`/ibiza/` y `/alicante/`) desde el selector de destino
2. **Cada SEO_LANDING enlaza al CAR_DETAIL** del vehículo disponible en ese punto
3. **Las guías siempre terminan con CTA a location hub o car detail** — nunca son páginas huérfanas
4. **El footer repite los enlaces principales:** /ibiza/, /alicante/, /flota/, /contacto/
5. **El breadcrumb es obligatorio** en CAR_DETAIL, SEO_LANDING y CONTENT
6. **El formulario de reserva** siempre enlaza a /terminos-y-condiciones/ y /politica-cancelacion/

---

## Propuesta de navegación principal (header)

```
[Logo]  Ibiza ▾  Alicante ▾  Flota  Guías  Contacto  [Reservar ahora →]
                |              |
         ├─ Aeropuerto    ├─ Aeropuerto
         └─ Puerto        ├─ Oficina
                          └─ Puerto
```

**Versión mobile:** hamburger menu con misma jerarquía.

---

## Propuesta de footer

```
Columna 1: Logo + tagline + RRSS (Instagram, Threads)
Columna 2: Ibiza: Aeropuerto · Puerto · Ver flota
Columna 3: Alicante: Aeropuerto · Oficina · Puerto · Ver flota  
Columna 4: Empresa: Contacto · Guías
Columna 5: Legal: T&C · Cancelación · Privacidad · Aviso Legal · Cookies
Subfooter:  Teléfono | Dirección | © Here & Now
```

---

## Resumen de páginas por tipo

| Tipo | Cantidad | URLs |
|------|----------|------|
| CORE | 4 | /, /ibiza/, /alicante/, /flota/ |
| CAR_DETAIL | 1–3 | /flota/[car-slug]/ (1 activo + 2 en revisión) |
| SEO_LANDING | 5 | /ibiza/aeropuerto/, /ibiza/puerto/, /alicante/aeropuerto/, /alicante/oficina/, /alicante/puerto/ |
| CONTENT | 7 | /guias/ + 6 guías |
| UTILITY | 8 | /contacto/, /mi-cuenta/, /carrito/, /finalizar-compra/, /terminos-y-condiciones/, /politica-cancelacion/, /privacidad/, /aviso-legal/, /cookies/ |
| **TOTAL** | **25–27** | |

---

## Decisiones de arquitectura tomadas y su justificación

| Decisión | Alternativa rechazada | Motivo |
|---------|----------------------|--------|
| `/ibiza/` como location hub (URL limpia) | `/alquiler-coches-ibiza-mercedes/` (mantener actual) | Escalabilidad: cuando se añadan más marcas o categorías, `/ibiza/` soporta subcategorías naturales. El keyword equity se transfiere con el 301. |
| Un solo CAR_DETAIL por modelo (`/flota/[slug]/`) | Una página por modelo+destino | Evita contenido duplicado. El formulario de reserva gestiona el destino mediante selector. La location equity viene de /ibiza/ y /alicante/. |
| SEO_LANDINGs de aeropuerto/puerto como subpáginas de la location | Páginas de nivel raíz `/aeropuerto-ibiza/` | La jerarquía `/ibiza/aeropuerto/` es más clara, transfiere autoridad de dominio desde el hub, y genera un breadcrumb natural. |
| Blog bajo `/guias/` y no `/blog/` | `/blog/` | "Guías" es más descriptivo y orientado al usuario. El usuario de este negocio busca información práctica, no posts generales. |
| No crear páginas de categoría de marca | `/mercedes/` como página de marca | Todos los coches son Mercedes — una página de marca sería redundante con `/flota/`. El keyword "mercedes" se trabaja en los titles y H1s de las páginas de flota y landings. |
| No crear páginas "alquiler coches baratos/precios" artificiales | `/precios-alquiler-coches-ibiza/` | Sin diferenciación real de contenido respecto a /ibiza/. Sería thin content. El precio ya aparece en /ibiza/, /alicante/ y los CAR_DETAILs. |
