# Estructura UX de páginas — nueva web Here & Now

> Fuente: `docs/architecture/sitemap-new.md`, `docs/content/cars-final.md`, `docs/seo/keyword-map.md`.  
> Fecha: 2026-11-02  
> Stack: Next.js · Tailwind · Sanity headless CMS  
> Estado: diseño conceptual — **no implementar todavía**

---

## Principios de diseño

- **Premium sin fricciones.** La estética es de lujo, pero el proceso de reserva debe ser rápido e intuitivo.
- **Mobile-first real.** Los turistas reservan desde el aeropuerto o el hotel. El formulario de reserva y los CTAs de contacto son el primer ciudadano, no una adaptación del desktop.
- **Conversión en todo scroll.** Nunca más de 3 secciones de distancia a un CTA de reserva.
- **Contenido sobre decoración.** Las secciones existen para responder preguntas del usuario, no para llenar espacio.
- **El sticky header es el CTA más importante.** Siempre visible en páginas de conversión.

---

## Convenciones de este documento

| Símbolo | Significado |
|---------|-------------|
| `[D]` | Contenido dinámico desde Sanity |
| `[S]` | Estático o generado en build |
| `⭐ SEO` | Sección con peso SEO significativo |
| `📱 mobile` | Consideración específica de mobile |

---

---

# HOME `/`

**Objetivo de la página:** Presentar el negocio y dirigir al usuario a su destino (Ibiza o Alicante) en menos de 10 segundos.

---

## Sección 1 — HERO con selector de destino

**Objetivo:** Capturar la atención, comunicar la propuesta de valor en una frase y empujar al usuario a elegir destino.

**Contenido:**
- Fondo: vídeo o foto a pantalla completa del vehículo (el vídeo 4K disponible en la librería de medios puede servir aquí)
- Titular principal (H1): "Alquiler de coches Mercedes en Ibiza y Alicante"
- Subtítulo: "Exclusividad, confort y servicio premium. Sin sorpresas."
- Dos CTA principales paralelos en formato de tarjetas grandes:
  - `[Reservar en Ibiza →]` → enlaza a `/ibiza/`
  - `[Reservar en Alicante →]` → enlaza a `/alicante/`
- Texto de apoyo pequeño: "Desde 130€/día · Recogida en aeropuerto o puerto · 8 plazas disponibles"

**CTA:** Doble CTA (Ibiza / Alicante) — evita formulario en el hero para mantener la interfaz limpia en la pantalla principal

**Información dinámica `[D]`:**
- Price from de `carAvailability.pricePerDay` (mínimo entre todos los coches activos)
- Fondo: `page.heroVideo` o `page.heroImage` desde Sanity

**⭐ SEO:** El H1 incluye las keywords primarias. El vídeo/foto tienen alt text con las keywords. Schema `Organization` y `LocalBusiness` en esta sección.

**📱 Mobile:**
- Las dos tarjetas CTA se apilan verticalmente (Ibiza arriba, Alicante abajo)
- El texto de apoyo ("Desde 130€") es visible sin hacer scroll
- No hay formulario complejo en el hero — es solo una decisión binaria (Ibiza / Alicante)

---

## Sección 2 — FLOTA EN DESTAQUE

**Objetivo:** Mostrar el vehículo disponible con precio y datos clave. Reducir la necesidad de explorar para usuarios que ya saben lo que quieren.

**Contenido:**
- Título: "Nuestra flota Mercedes"
- Grid de tarjetas de vehículo (1–4 coches, mostrando los activos en Sanity)
  - Por tarjeta: foto principal, nombre del modelo, specs en iconos (plazas, transmisión, combustible), precio desde, badges de disponibilidad (Ibiza / Alicante), CTA "Ver vehículo"
- Link "Ver toda la flota →" al final

**CTA:** "Ver vehículo" → `/flota/[car-slug]/`

**Información dinámica `[D]`:**
- Query Sanity: `*[_type=='carAvailability' && isActive==true]{car->, location->, pricePerDay}`
- Solo se muestran coches con al menos una `carAvailability.isActive == true`

**⭐ SEO:** Los nombres de los vehículos actúan como anchor text para las car detail pages.

**📱 Mobile:**
- Tarjetas en columna única con foto amplia
- Specs en fila horizontal con iconos pequeños
- CTA a ancho completo

---

## Sección 3 — DESTINOS

**Objetivo:** Para los usuarios que no eligieron destino en el hero, ofrecer una segunda oportunidad con información de contexto.

**Contenido:**
- Título: "Elige tu destino"
- Dos tarjetas horizontales grandes (Ibiza / Alicante):
  - Foto del destino
  - Nombre del destino
  - Frase descriptiva corta: "La isla del lujo y las playas cristalinas" / "La Costa Blanca en un Mercedes"
  - Número de puntos de recogida disponibles
  - CTA: "Alquilar en Ibiza" / "Alquilar en Alicante"

**CTA:** → `/ibiza/` y → `/alicante/`

**Información dinámica `[D]`:**
- `location.heroImage`, `location.shortDescription`
- Count de `pickupPoint`s por location

**⭐ SEO:** Los nombres de ciudad como anchor text hacia las location hubs.

**📱 Mobile:** Las dos tarjetas se apilan. La foto ocupa 60% del card. CTA a ancho completo.

---

## Sección 4 — PROPUESTA DE VALOR

**Objetivo:** Responder la pregunta "¿por qué Here & Now y no otra empresa de alquiler?" Diferenciadores reales del negocio.

**Contenido:**
- Título: "Más que un alquiler de coches"
- 4 bloques en grid 2×2 (o fila de 4 en desktop):
  1. **Exclusividad Mercedes** — "Solo la mejor marca del mundo"
  2. **Recogida donde quieras** — "Aeropuerto, puerto o donde necesites"
  3. **Sin costes ocultos** — "Precio claro desde el primer momento"
  4. **Servicio 24h** — "Estamos disponibles antes y durante tu alquiler"
- Cada bloque: icono + título + 1–2 frases

**CTA:** Ninguno directo en esta sección — es de persuasión, no de acción.

**Información dinámica:** Estático — configurado en `page.sections[]` en Sanity si se quiere editar sin deploy.

**⭐ SEO:** Bajo peso SEO directo, pero refuerza el entidad/topical del sitio.

**📱 Mobile:** 2×2 grid que se convierte en columna única de 4. Iconos grandes, texto corto.

---

## Sección 5 — CÓMO FUNCIONA

**Objetivo:** Eliminar la fricción de la reserva explicando el proceso en 3 pasos. Especialmente útil para usuarios que no han alquilado antes o no conocen la empresa.

**Contenido:**
- Título: "Reserva en 3 pasos"
- Paso 1: **Elige y reserva online** — Selecciona vehículo, fechas y punto de recogida. Pago seguro online.
- Paso 2: **Recogemos en tu punto** — Te esperamos en el aeropuerto, puerto o en nuestra oficina con el vehículo preparado.
- Paso 3: **Disfruta sin preocupaciones** — Conducción libre con asistencia en carretera incluida.
- Nota visual: progresión horizontal (desktop) / vertical (mobile)

**CTA:** Botón al final de la sección: "Reservar ahora" → `/flota/`

**Información dinámica:** Estático

**⭐ SEO:** Sin peso SEO directo, pero mejora el tiempo en página y reduce la tasa de rebote.

**📱 Mobile:** Los 3 pasos en columna. Cada paso con número grande y texto conciso.

---

## Sección 6 — TESTIMONIOS

**Objetivo:** Prueba social. Reforzar la confianza antes de la decisión final de reserva.

**Contenido:**
- Título: "Experiencias de nuestros clientes"
- Slider o grid de 3–5 testimonios seleccionados (campo `testimonial.featured`)
- Por testimonio: nombre del cliente, destino (Ibiza/Alicante), texto de la reseña
- Rating visual (si existe)

**CTA:** Ninguno directo

**Información dinámica `[D]`:**
- Query: `*[_type=='testimonial' && featured==true] | order(_createdAt desc)[0...5]`

**⭐ SEO:** Los testimonios con nombre del destino refuerzan la relevancia geográfica.

**📱 Mobile:** Carousel swipeable, una reseña visible a la vez.

---

## Sección 7 — FAQ

**Objetivo:** Resolver las dudas más comunes para desbloequear la reserva. Capturar long-tail SEO. Generar schema `FAQPage`.

**Contenido:**
- Título: "Preguntas frecuentes"
- 5–8 preguntas de categoría `general` o `booking` (desde Sanity `faq.category`)
- Acordeón expandible
- Link al final: "¿Más preguntas? Contáctanos" → `/contacto/`

**CTA:** "Contáctanos" → `/contacto/`

**Información dinámica `[D]`:**
- Query: `*[_type=='faq' && (category=='general' || category=='booking')] | order(order asc)[0...8]`

**⭐ SEO:** Alto peso. Schema `FAQPage` genera rich snippets en SERP. Las preguntas deben incluir keywords naturales.

**📱 Mobile:** Acordeón nativo, con tap área generosa (mín. 48px). La respuesta se despliega bajo la pregunta.

---

## Sección 8 — CTA FINAL (pre-footer)

**Objetivo:** Capturar a los usuarios que llegaron al final sin haber convertido.

**Contenido:**
- Fondo: color sólido oscuro o foto del vehículo
- Titular: "¿Listo para reservar?"
- Subtítulo: "Elige tu destino y reserva en menos de 5 minutos"
- Dos CTAs: `[Reservar en Ibiza →]` y `[Reservar en Alicante →]`
- Teléfono clickable: "¿Prefieres llamar? 625 305 620"

**CTA:** → `/ibiza/` y → `/alicante/`

**⭐ SEO:** Sin peso directo, pero mejora el CTR interno.

**📱 Mobile:** CTAs apilados a ancho completo. El teléfono como tercer CTA secundario.

---

---

# LOCATION `/ibiza/` y `/alicante/`

**Objetivo de la página:** Convertir la intención "alquiler coches [ciudad]" en una reserva. Mostrar los coches disponibles con precios y los puntos de recogida.

---

## Sección 1 — HERO DE DESTINO

**Objetivo:** Confirmar inmediatamente al usuario que está en el lugar correcto + mostrar el precio desde.

**Contenido:**
- Fondo: foto del destino (Ibiza o Alicante) — `location.heroImage`
- H1: "Alquiler de coches Mercedes en Ibiza" / "...en Alicante"
- Subtítulo: la `location.shortDescription` (1–2 frases)
- Badge de precio: "Desde 130€/día"
- Badge de puntos de recogida: "3 puntos de recogida"
- CTA principal: "Ver vehículos disponibles" (scroll anchor a la sección flota)
- CTA secundario: teléfono clickable

**CTA:** Scroll suave a la sección Flota + teléfono tap-to-call

**Información dinámica `[D]`:**
- `location.heroImage`, `location.shortDescription`
- `pricePerDay` mínimo entre los `carAvailability` activos de esta location
- Count de `pickupPoint` de esta location

**⭐ SEO:** H1 con keyword primaria del destino. La imagen tiene alt con nombre de ciudad + alquiler.

**📱 Mobile:**
- Hero de altura fija (80vh como máximo para que el fold muestre el principio de la siguiente sección)
- El precio desde y el número de puntos de recogida son visibles sin scroll
- CTA a ancho completo

---

## Sección 2 — FLOTA DISPONIBLE EN ESTE DESTINO

**Objetivo:** Mostrar qué coches se pueden reservar aquí, con precio y acceso directo a la reserva.

**Contenido:**
- Título: "Vehículos disponibles en Ibiza" / "...en Alicante"
- Grid de tarjetas (ordenadas por pricePerDay asc)
  - Por tarjeta: foto principal, nombre, specs iconos (plazas, transmisión, combustible), precio desde / día, CTA "Reservar" → `/flota/[slug]/`
- Si hay más de 3 vehículos: botón "Ver toda la flota" al final
- Si hay solo 1 vehículo (situación actual): no repetir el mismo card dos veces — mostrar un único card ampliado

**CTA:** "Reservar" / "Ver detalles" → `/flota/[car-slug]/`

**Información dinámica `[D]`:**
- Query: `*[_type=='carAvailability' && location._ref==$locationId && isActive==true]{car->{name,slug,mainImage,passengers,transmission,fuel,features,minAge}, pricePerDay}`

**⭐ SEO:** Los names de los coches como anchor text hacia car detail pages.

**📱 Mobile:**
- Tarjetas en columna única con foto 16:9
- CTA sticky al hacer scroll por una tarjeta: mini-bar con nombre + precio + "Reservar"

---

## Sección 3 — PUNTOS DE RECOGIDA

**Objetivo:** Mostrar dónde se puede recoger el coche en este destino. Capturar tráfico de pickup-point-specific y generar internal links a las SEO_LANDING pages.

**Contenido:**
- Título: "¿Dónde recogemos el coche?"
- Grid de 2–3 tarjetas (una por pickup point de esta location):
  - Icono del tipo (avión / barco / edificio)
  - Nombre del punto: "Aeropuerto de Ibiza"
  - Descripción 1 línea: "Terminal de llegadas, planta 0"
  - Link: "Ver instrucciones →" → `/ibiza/aeropuerto/`

**CTA:** → `/ibiza/aeropuerto/` (y demás pickup points)

**Información dinámica `[D]`:**
- Query: `*[_type=='pickupPoint' && location._ref==$locationId]{name,slug,shortDescription,image}`

**⭐ SEO:** Links internos a las SEO_LANDING de aeropuerto/puerto con anchor text descriptivo.

**📱 Mobile:** Tarjetas en columna, con el icono y el nombre del punto bien legibles.

---

## Sección 4 — PROPUESTA DE VALOR LOCAL

**Objetivo:** Responder "¿por qué aquí?" con argumentos específicos del destino, no genéricos.

**Contenido:**
- Título: "Por qué alquilar un Mercedes en Ibiza" / "...en Alicante"
- 3–4 puntos con icono + título + texto corto. Diferente para Ibiza y Alicante:
  - **Ibiza:** "La isla en su máxima expresión", "Playas solo accesibles en coche", "Nuestro equipo conoce cada rincón"
  - **Alicante:** "La Costa Blanca sin límites", "Oficina propia en El Campello", "Flota lista para largos recorridos"
- `[D]` — texto viene de `location.fullDescription` (secciones editoriales)

**CTA:** Ninguno directo

**⭐ SEO:** Texto único por destino. Diferencia el contenido de /ibiza/ vs /alicante/ y evita duplicados.

**📱 Mobile:** Lista vertical, iconos a la izquierda del texto.

---

## Sección 5 — GUÍA RÁPIDA DEL DESTINO

**Objetivo:** Añadir valor informativo (mejora SEO topical) y enlazar a las guías completas del blog.

**Contenido:**
- Título: "Antes de coger el coche en Ibiza..."
- 3–4 tips breves (150–200 palabras total):
  - Temperatura ideal para reservar (temporada)
  - Documentación necesaria
  - Un tip local específico (ej. las mejores calas solo accesibles en coche)
- Link final: "Ver guía completa →" → `/guias/alquiler-coches-ibiza/`

**CTA:** → `/guias/alquiler-coches-ibiza/` o `/guias/alquiler-coches-alicante/`

**Información dinámica `[D]`:** Texto desde Sanity — sección dentro de `location.fullDescription`

**⭐ SEO:** Contenido informacional enriquece la página con long-tail keywords sin competir con las guías.

**📱 Mobile:** Texto compacto, el link a la guía como CTA secundario al final.

---

## Sección 6 — TESTIMONIOS DEL DESTINO

**Objetivo:** Prueba social contextualizada geográficamente.

**Contenido:**
- Título: "Lo que dicen sobre alquilar en Ibiza"
- 2–3 testimonios con `testimonial.location == location` o `testimonial.featured == true`

**Información dinámica `[D]`:**
- Query: `*[_type=='testimonial' && (location._ref==$locationId || featured==true)] | order(_createdAt desc)[0...3]`

**📱 Mobile:** Tarjetas apiladas, sin carousel en mobile (mejor accesibilidad).

---

## Sección 7 — FAQ DEL DESTINO

**Objetivo:** Responder preguntas específicas de este destino. Schema FAQPage.

**Contenido:**
- Título: "Preguntas frecuentes — Ibiza" / "...Alicante"
- 4–6 FAQs de categoría matching el destino: `faq.category == 'ibiza'` o `'alicante'`

**Información dinámica `[D]`:**
- Query: `*[_type=='faq' && category==$locationSlug] | order(order asc)[0...6]`

**⭐ SEO:** Schema `FAQPage` + keywords del destino en preguntas y respuestas.

---

## Sección 8 — CTA FINAL

**Contenido:**
- Fondo oscuro
- "Reserva tu Mercedes en Ibiza"
- Precio desde + botón "Reservar ahora" → al coche disponible en este destino
- Teléfono tap-to-call

**📱 Mobile:** CTA a ancho completo, teléfono como segundo CTA.

---

---

# FLEET `/flota/`

**Objetivo de la página:** Comparar todos los vehículos disponibles y seleccionar el que mejor se adapta. Capturar búsquedas de flota y modelos específicos.

---

## Sección 1 — HEADER DE FLOTA

**Objetivo:** Establecer contexto y anunciar la propuesta diferencial de la marca.

**Contenido:**
- H1: "Nuestra flota de Mercedes para alquilar en Ibiza y Alicante"
- Subtítulo breve (1–2 frases): exclusividad Mercedes, toda la flota disponible en ambos destinos
- Selector de destino (filtro) — tabs o dropdown: Todos / Ibiza / Alicante

**CTA:** Filtro interactivo (cambia los coches mostrados abajo)

**⭐ SEO:** H1 con keywords de flota y ambos destinos.

**📱 Mobile:** El selector de destino como tabs horizontales scrollables.

---

## Sección 2 — FILTROS DE FLOTA

**Objetivo:** Ayudar a encontrar el vehículo correcto rápidamente.

**Contenido:**
- Filtros: Destino (Ibiza / Alicante / Ambos) · Pasajeros (1–5 / 6–8 / +8) · Tipo (Monovolumen / SUV)
- Estado actual de filtro visible (chips/tags)
- Contador de resultados: "Mostrando 1 de 1 vehículo"

**Información dinámica `[D]`:**
- Filtros construidos desde Sanity: tipos disponibles vienen de `carCategory`, locations de `location`
- El filtro se ejecuta en cliente (sin re-fetch si hay menos de 20 vehículos) o con query params

**📱 Mobile:** Filtros colapsados detrás de botón "Filtrar" (modal/drawer), para no consumir espacio valioso del feed.

---

## Sección 3 — GRID DE VEHÍCULOS

**Objetivo:** Mostrar todos los coches activos con información suficiente para comparar sin entrar en cada ficha.

**Contenido:**
Por tarjeta de vehículo:
- Foto principal (ratio 16:10)
- Nombre del modelo
- Specs en fila de iconos: plazas, transmisión, combustible, año
- Precio desde X€/día
- Badges de disponibilidad: `[Ibiza]` `[Alicante]`
- CTA principal: "Ver y reservar" → `/flota/[slug]/`
- CTA secundario: "Ver en Ibiza" / "Ver en Alicante" (links directos con destino preseleccionado)

**Información dinámica `[D]`:**
- Query: todos los `car` con al menos un `carAvailability.isActive==true`, con precio mínimo calculado

**⭐ SEO:** Nombres de coches como anchor text hacia las fichas. Datos estructurados de productos.

**📱 Mobile:** Una tarjeta por fila. "Ver y reservar" a ancho completo.

---

## Sección 4 — POR QUÉ SOLO MERCEDES

**Objetivo:** Justificar la exclusividad de la marca. Refuerza la posición premium.

**Contenido:**
- Título: "¿Por qué elegimos exclusivamente Mercedes?"
- 3–4 puntos: tecnología, confort, seguridad, reputación
- Frase de cierre con la filosofía de la marca

**CTA:** Ninguno. Es una sección de branding.

**⭐ SEO:** Refuerza la asociación `here and now + Mercedes` para el índice semántico de Google.

---

## Sección 5 — CTA ¿NO ENCUENTRAS LO QUE BUSCAS?

**Objetivo:** Capturar a usuarios con necesidades especiales o que quieren información antes de reservar.

**Contenido:**
- Texto: "¿Necesitas algo específico? Consulta con nuestro equipo"
- CTA: "Contactar" → `/contacto/`
- Teléfono clickable

---

---

# BRAND (Tratamiento como contexto de marca en `/flota/`)

> **Nota de arquitectura:** Dado que toda la flota actual es Mercedes-Benz, no existe una página `/marca/mercedes/` independiente (ver decisión en `sitemap-new.md`). La página `/flota/` sirve tanto como catálogo de flota como como página de marca.  
> Si en el futuro se añaden otras marcas, la sección 4 de `/flota/` ("Por qué solo Mercedes") evoluciona a páginas de marca independientes con URL `/marcas/mercedes/`.

**Secciones de marca que viven en `/flota/` (por ahora):**
- Sección 4: "Por qué elegimos exclusivamente Mercedes" (ver arriba)
- Datos de marca referenciados en cada tarjeta de vehículo (logo, nombre)

**Estructura futura de `/marcas/[slug]/` si se necesita:**
1. Hero de marca (logo grande, tagline)
2. Historia/filosofía de la marca
3. Gama de modelos disponibles en Here & Now
4. Por qué esta marca para alquiler premium
5. Grid de coches de esta marca
6. CTA reserva

---

---

# CAR DETAIL `/flota/[car-slug]/`

**Objetivo de la página:** La página de conversión principal del sitio. Generar la reserva directamente desde esta página.

---

## Elemento permanente — STICKY HEADER

*No es una sección en el scroll, sino un elemento fijo que aparece al hacer scroll pasado el hero.*

**Contenido:**
- Nombre del coche (truncado en mobile)
- Precio desde X€/día
- CTA: "Reservar" → scroll al formulario
- En mobile: también icono de teléfono (tap-to-call)

**Objetivo:** Mantener el CTA siempre visible durante la lectura de la ficha.

**📱 Mobile:** Altura máxima 56px. Solo nombre abreviado + precio + "Reservar".

---

## Sección 1 — GALERÍA

**Objetivo:** Enamorar visualmente. El primer impacto visual define la percepción de valor.

**Contenido:**
- Imagen principal: foto de mayor impacto (exterior, sin matrícula)
- Miniaturas deslizables: las otras 6 fotos de la galería
- En desktop: layout 1 imagen grande + 2 pequeñas (tipo "hero split")
- Indicador: "1 / 7 fotos" — da sensación de riqueza visual

**CTA:** Click en miniatura cambia imagen principal. Click en imagen principal abre lightbox.

**Información dinámica `[D]`:** `car.gallery[]` ordenado por posición

**⭐ SEO:** Todas las imágenes con alt text `[D]` desde `imageWithAlt.alt`. El alt de la imagen principal refuerza la keyword del coche.

**📱 Mobile:**
- Carousel swipeable a pantalla completa (full-width)
- Miniaturas pequeñas debajo como puntos de paginación o fila horizontal
- Lightbox en mobile: pantalla completa con swipe para navegar y cierre con X

---

## Sección 2 — INTRO DEL VEHÍCULO

**Objetivo:** Establecer la identidad del coche, comunicar el precio y confirmar la disponibilidad en destinos.

**Contenido:**
- H1: "Alquiler Mercedes Clase V 220d Avantgard LARGO — Ibiza y Alicante"
- Fila de specs en iconos: `[👥 8 plazas] [⚙️ Automático] [⛽ Diésel] [📅 2024]`
- Precio desde: "Desde **130€**/día"
- Badges de disponibilidad: `✓ Disponible en Ibiza` `✓ Disponible en Alicante`
- Rating corto si existen testimonios: "⭐ 5.0 · 3 valoraciones"

**CTA:** "Reservar" → scroll anchor `#formulario-reserva`

**Información dinámica `[D]`:**
- `car.passengers`, `car.transmission`, `car.fuel`, `car.year`
- Precio mínimo entre `carAvailability`s activos de este coche
- Array de locations donde está activo

**⭐ SEO:** El H1 incluye modelo + localización. Los datos de specs pueden generar rich snippets.

**📱 Mobile:** Specs en fila horizontal scrollable. Badge de disponibilidad con icono visible. El precio en texto grande. CTA a ancho completo.

---

## Sección 3 — DESCRIPCIÓN Y EQUIPAMIENTO

**Objetivo:** Convencer con palabras y detalle técnico. Resolver las preguntas de "¿qué incluye exactamente?".

**Contenido:**
- Subtítulo: "Confort y elegancia en cada kilómetro"
- Descripción completa del vehículo (`car.fullDescription`) — 150–200 palabras
- Lista de características principales (`car.features[]`) — máximo 8, con iconos:
  - Transmisión automática 9G-TRONIC
  - 8 plazas cómodas
  - Puertas laterales automáticas
  - Climatización TEMPMATIC
  - Cristales tintados negros
  - Sensores y cámara de aparcamiento
  - Tomas de corriente 12V traseras
  - Banco de 3 plazas confort en ambas filas
- Link: "Ver especificaciones técnicas completas" → expande tabla de specs (ver sección 4)

**CTA:** Expandir specs técnicas

**Información dinámica `[D]`:** `car.fullDescription`, `car.features[]`

**⭐ SEO:** La descripción debe contener keywords de forma natural ("alquiler Mercedes en Ibiza", "monovolumen de lujo"). Es el contenido de texto más largo de la ficha.

**📱 Mobile:** La lista de características en 2 columnas (iconos + texto corto). La descripción colapsada con "Leer más" si supera 4 líneas.

---

## Sección 4 — ESPECIFICACIONES TÉCNICAS (expandible)

**Objetivo:** Para el usuario detallista que necesita confirmar dimensiones, potencia o consumo.

**Contenido:**
- Tabla en dos columnas:
  | Especificación | Valor |
  |---|---|
  | Modelo | Mercedes Clase V 220d Avantgard LARGO |
  | Año | 2024 |
  | Potencia | ⚠️ PENDIENTE |
  | Transmisión | Automático 9G-TRONIC |
  | Combustible | Diésel |
  | Pasajeros | 8 |
  | Puertas | 4 + laterales automáticas |
  | Maletero | ⚠️ PENDIENTE |
  | Color | Negro Obsidiana Metalizado |
  | Interior | Cuero |
  | Llantas | Aleación 6,5J x 16 |

**CTA:** Ninguno

**Información dinámica `[D]`:** `car.*` (todos los campos técnicos)

**⭐ SEO:** Los datos técnicos pueden aparecer en Knowledge Graph y rich snippets de producto.

**📱 Mobile:** Tabla con scroll horizontal o lista en formato `clave: valor`.

---

## Sección 5 — FORMULARIO DE RESERVA

**Objetivo:** La conversión. El formulario debe ser claro, progresivo y rápido.

**ID de ancla:** `#formulario-reserva`

**Contenido y flujo del formulario:**

**Bloque A — Detalles del alquiler**
- Selector de destino: Ibiza / Alicante (tabs, obligatorio)
- Punto de recogida: dropdown dinámico según destino `[D]`
- Punto de entrega: igual que recogida (default igual al de recogida, permitir diferente)
- Fecha de recogida: date picker (solo fechas futuras, mín. hoy + 1 día recomendado)
- Fecha de entrega: date picker (solo ≥ fecha recogida)
- Precio calculado en tiempo real: "3 días × 130€ = **390€**"

**Bloque B — Extras opcionales**
- Checkboxes con precio:
  - Silleta de bebé (0>9 kg) — 6,90€
  - Silleta de niño (9>18 kg) — 6,90€
  - Elevador — 6,90€
  - Conductor adicional — 8,95€
- El precio total se actualiza al marcar cada extra

**Bloque C — Cobertura**
- Dos opciones radio:
  - Cobertura básica: 0€ (incluida) — descripción de franquicia y fianza
  - Cobertura total: 45,50€ — descripción de beneficios
- Tooltip/modal con explicación detallada de cada cobertura al hacer clic en "¿Qué cubre?"

**Bloque D — Resumen y condiciones**
- Desglose de precio: precio base + extras + cobertura = **Total**
- Nota sobre fianza: "La fianza se cobra en el momento de la recogida"
- Checkbox aceptar T&C (link a `/terminos-y-condiciones/`)
- Checkbox aceptar política de cancelación (link a `/politica-cancelacion/`)

**Bloque E — CTA de reserva**
- Botón grande: "**Reservar ahora — [Total]€**"
- Texto de seguridad: "Pago seguro · Tarjeta o Bizum · Cancelación flexible"

**CTA:** Submit → proceso de pago (WooCommerce / pasarela Redsys)

**Información dinámica `[D]`:**
- Pickup points según destino: `carAvailability.availablePickupPoints`
- Extras y precios: `carAvailability.extras[]`
- Coberturas: `carAvailability.coverages[]`
- Cálculo de precio en tiempo real (client-side)

**⭐ SEO:** Sin peso SEO directo. Pero su presencia en la página junto con schema `Product`+`Offer` mejora el crawlability.

**📱 Mobile:**
- El formulario ocupa la pantalla completa (no sidebar)
- Los bloques A, B, C, D, E como pasos progresivos (wizard de 2–3 pantallas) o como secciones acordeón
- Las fechas usan el date picker nativo del navegador en mobile (mejor UX que uno custom)
- El resumen de precio con sticky bottom bar: "Total: 390€ · Reservar"
- El CTA de reserva siempre visible en el bottom

---

## Sección 6 — CONDICIONES Y REQUISITOS

**Objetivo:** Informar sobre los requisitos antes de que el usuario acabe de rellenar el formulario para evitar sorpresas.

**Contenido:**
- Título: "Condiciones del alquiler"
- Edad mínima: 26 años
- Carnet mínimo: 2 años de antigüedad
- Kilometraje: 250 km/día incluidos — 0,50€/km adicional
- Combustible: se entrega lleno, se devuelve lleno
- Fianza: se cobra el día de la recogida (importes por cobertura)
- Link: "Ver términos y condiciones completos" → `/terminos-y-condiciones/`

**Información dinámica `[D]`:** `car.minAge`, `car.minLicenseYears`, `car.kmIncluded`, `car.kmExtraPrice`

**📱 Mobile:** Lista compacta con iconos. Texto legible sin necesidad de ampliar.

---

## Sección 7 — CÓMO FUNCIONA LA RECOGIDA

**Objetivo:** Eliminar la incertidumbre del proceso post-reserva.

**Contenido:**
- Título: "¿Cómo funciona?"
- Proceso visual en 3 pasos simplificado:
  1. Reserva y paga online (hoy)
  2. Recibe confirmación por email
  3. Recoge el coche en el punto elegido con tu DNI y carnet
- Nota: "Estaremos esperándote con el vehículo preparado"

---

## Sección 8 — FAQ DEL VEHÍCULO

**Objetivo:** Resolver dudas específicas de este modelo. Schema FAQPage.

**Contenido:**
- 4–6 FAQs de categoría `vehicle` relacionadas con este coche `[D]`
- Ejemplos: "¿Cuántas maletas caben?", "¿Se puede llevar niños?", "¿Está disponible en aeropuerto?"

**Información dinámica `[D]`:** `car.faqs` — array de referencias a `faq`

**⭐ SEO:** Schema `FAQPage` específico del vehículo. Keywords: modelo + alquiler + especificaciones.

---

## Sección 9 — VEHÍCULOS RELACIONADOS

**Objetivo:** Retener al usuario que no está convencido de este modelo. Solo relevante cuando hay más de 1 coche.

**Contenido:**
- Título: "Otros vehículos disponibles"
- 1–2 tarjetas de otros coches activos
- *(Esta sección no se muestra si solo hay 1 coche activo)*

**Información dinámica `[D]`:** Query: otros `car` con al menos un `carAvailability.isActive==true`, excluyendo el actual

---

---

# SEO LANDING (PICKUP POINT) `/ibiza/aeropuerto/`

**Objetivo de la página:** Página de alta intención para usuarios que buscan específicamente alquilar en el aeropuerto. Información práctica + reserva directa con punto preseleccionado.

---

## Sección 1 — HERO CONTEXTUAL

**Objetivo:** Confirmar que el usuario está en el lugar correcto e informar de lo más relevante: dónde está el vehículo y el precio.

**Contenido:**
- Foto del aeropuerto o terminal (si existe) → `pickupPoint.image`
- H1: "Alquiler de coches en el Aeropuerto de Ibiza (IBZ)"
- Subtítulo: "Te esperamos en la terminal con el vehículo preparado"
- Badge: "Proceso de check-in < 10 minutos"
- CTA: "Reservar con recogida en aeropuerto" → scroll al formulario

**Información dinámica `[D]`:** `pickupPoint.name`, `pickupPoint.image`, `pickupPoint.shortDescription`

**⭐ SEO:** H1 incluye IATA code (IBZ) — keyword específica de alta intención.

---

## Sección 2 — INSTRUCCIONES DE RECOGIDA

**Objetivo:** Eliminar la ansiedad de "¿cómo encuentro el coche?". Información práctica única de esta página.

**Contenido:**
- Título: "Cómo recoger tu coche en el aeropuerto"
- 3–4 pasos ilustrados:
  1. Muestra tu reserva en la salida de llegadas
  2. Nuestro equipo te entregará las llaves
  3. Revisa el vehículo juntos
  4. ¡Listo para conducir!
- Información de contacto en aeropuerto (si aplica)
- Mini-mapa o indicación textual: "Terminal de llegadas, zona de alquileres"

**Información dinámica `[D]`:** `pickupPoint.instructions` (Portable Text)

**⭐ SEO:** Contenido único que diferencia esta página de `/ibiza/`. Responde búsquedas como "cómo recoger coche aeropuerto ibiza".

---

## Sección 3 — FORMULARIO CON PUNTO PRESELECCIONADO

**Objetivo:** Formulario de reserva con "Aeropuerto de Ibiza" preseleccionado en el punto de recogida. Elimina un paso al usuario.

**Contenido:** Mismo formulario que el de la ficha del coche, pero:
- Punto de recogida ya seleccionado = "Aeropuerto de Ibiza"
- Sin selector de destino (es Ibiza por defecto en esta página)
- Selector de vehículo: muestra los coches disponibles en este punto

**📱 Mobile:** El formulario preconfigurado reduce la fricción. El usuario solo necesita elegir fechas.

---

## Sección 4 — VEHÍCULOS DISPONIBLES EN ESTE PUNTO

**Contenido:** Grid de tarjetas de coches disponibles con pickup en este punto. Misma estructura que en /flota/.

---

## Sección 5 — INFORMACIÓN DEL AEROPUERTO

**Objetivo:** Contenido informacional único que aporta valor SEO y UX.

**Contenido:**
- Dirección y coordenadas del aeropuerto
- Distancias a puntos de interés (centro de Ibiza, playas más cercanas)
- Compañías de ferri que operan (enlace informativo)
- FAQ: "¿Qué pasa si mi vuelo llega tarde?" / "¿Puedo recoger el coche de noche?"

**⭐ SEO:** Contenido único y de alto valor para esta URL. Clave para diferenciarse de la landing genérica de Ibiza.

---

---

# CONTACT `/contacto/`

**Objetivo de la página:** Canal de comunicación para consultas, solicitudes especiales y usuarios que prefieren hablar antes de reservar.

---

## Sección 1 — HEADER

**Objetivo:** Establecer el tono y mostrar inmediatamente las opciones de contacto sin necesidad de scroll.

**Contenido:**
- H1: "Contacto"
- Subtítulo: "Estamos disponibles para ayudarte antes y durante tu alquiler"
- Tres opciones de contacto rápido en cards horizontales:
  1. 📞 **Teléfono** — 625 305 620 (link `tel:`)
  2. 💬 **WhatsApp** — Botón de WhatsApp directo (si se implementa)
  3. ✉️ **Email** — correo@hereandnow.es (si existe)

**CTA:** Los tres son CTAs directos (tap-to-call, tap-to-WhatsApp, tap-to-email)

**Información dinámica `[D]`:** `siteSettings.phone`, `siteSettings.whatsappUrl`, `siteSettings.email`

**📱 Mobile:**
- Sección 1 visible sin scroll
- Cada opción a ancho completo con icono grande
- El teléfono como primer CTA (máxima conversión en mobile)

---

## Sección 2 — FORMULARIO DE CONTACTO

**Objetivo:** Para usuarios que prefieren dejar un mensaje escrito o tienen consultas complejas.

**Contenido:**
- Título: "Envíanos un mensaje"
- Campos:
  - Nombre y apellidos (text, required)
  - Email (email, required)
  - Destino de interés (select: Ibiza / Alicante / Ambos)
  - Fechas aproximadas (date range, opcional)
  - Mensaje (textarea, required)
  - Checkbox GDPR con link a `/privacidad/`
- Botón: "Enviar mensaje"
- Nota: "Respondemos en menos de 24 horas"

**Información dinámica `[D]`:** Gestión del envío via Sanity o servicio de email externo (Resend, etc.)

**⭐ SEO:** Sin peso SEO directo. Pero la página de contacto con dirección refuerza el `LocalBusiness` schema.

**📱 Mobile:** Formulario a columna única. Date picker nativo. GDPR checkbox con tap área generosa.

---

## Sección 3 — INFORMACIÓN DE LA OFICINA

**Objetivo:** Mostrar la presencia física del negocio (El Campello, Alicante). Refuerza la confianza y el schema LocalBusiness.

**Contenido:**
- Subtítulo: "Visítanos en nuestra oficina"
- Dirección: Calle de la Figuera, 5, local 58 — 03560, El Campello (Alicante)
- Mapa embed (Google Maps iframe con la ubicación)
- Horario de atención `[D]` desde `pickupPoint.openingHours`
- Cómo llegar (breve texto)

**Información dinámica `[D]`:** `pickupPoint` con `slug=='oficina-alicante'`

**⭐ SEO:** Schema `LocalBusiness` con `address`, `geo`, `openingHoursSpecification`. Crucial para SEO local y Google Business Profile.

**📱 Mobile:** El mapa redimensionado (altura fija ~250px). La dirección como link de Google Maps para navegación directa.

---

## Sección 4 — DESTINOS Y PUNTOS DE RECOGIDA

**Objetivo:** Recordar al usuario que puede reservar directamente sin necesitar el formulario de contacto.

**Contenido:**
- Título: "¿Prefieres reservar directamente?"
- Dos cards: [Reservar en Ibiza →] y [Reservar en Alicante →]
- Texto: "Tenemos puntos de recogida en aeropuerto, puerto y oficina"

**CTA:** → `/ibiza/` y → `/alicante/`

---

---

## Resumen de secciones por página

| Página | Secciones | Formulario | Schema SEO |
|--------|-----------|-----------|-----------|
| Home `/` | 8 | No | Organization, LocalBusiness, FAQPage |
| Location `/ibiza/` | 8 | No | LocalBusiness, FAQPage |
| Fleet `/flota/` | 5 | No | ItemList (coches) |
| Car Detail `/flota/[slug]/` | 9 + sticky | Sí (completo) | Product, Offer, FAQPage |
| SEO Landing `/ibiza/aeropuerto/` | 5 | Sí (simplificado) | LocalBusiness, FAQPage |
| Contact `/contacto/` | 4 | Sí (contacto) | LocalBusiness |

---

## Componentes globales (presentes en todas las páginas)

### Header (fijo en scroll)
- Logo (link a `/`)
- Nav desktop: Ibiza · Alicante · Flota · Guías · Contacto · CTA "Reservar"
- Nav mobile: Hamburger → drawer con misma jerarquía
- Selector de idioma ES / EN

### Footer
- Col 1: Logo + tagline + redes sociales
- Col 2: Ibiza — Aeropuerto · Puerto
- Col 3: Alicante — Aeropuerto · Oficina · Puerto
- Col 4: Empresa — Contacto · Guías
- Col 5: Legal — T&C · Cancelación · Privacidad · Legal · Cookies
- Subfooter: teléfono | dirección | © Here & Now

### Botón WhatsApp flotante
- Fijo en esquina inferior derecha (excepto en formularios de reserva)
- Solo visible en mobile/tablet
- Link directo a WhatsApp con mensaje predefinido: "Hola, me interesa alquilar un coche en [destino]"

### Cookie Banner
- Mínimo necesario — no bloquear contenido
- Aceptar / Gestionar / Rechazar
