# Funcionalidades — hereandnowibiza.com

> Fuente: análisis con Playwright CLI.  
> Fecha de análisis: 2026-11-02  
> Se documentan comportamientos observados. Las secciones marcadas PENDING REVIEW requieren verificación adicional.

---

## 1. Buscador / Formulario de búsqueda de coches

**Ubicación:** Homepage, /alquiler-coches-ibiza-mercedes/, /alquiler-coches-alicante-mercedes/, /busqueda-coches-de-alquiler/

**Campos:**

| Campo | Tipo | Opciones |
|-------|------|---------|
| Lugar de recogida | `<select>` (combobox) | Lugar de recogida (placeholder) / Alicante / Aeropuerto de Alicante / Puerto de Alicante / Oficina de Alicante / Otro punto de Alicante / Ibiza / Aeropuerto de Ibiza / Puerto de Ibiza / Otro punto de Ibiza |
| Fecha de recogida | Date picker (textbox D-M-A) | Calendario con meses / año. Meses anteriores deshabilitados. Rango 2026-2029. |
| Fecha de entrega | Date picker (textbox D-M-A) | Igual al anterior. |
| Tipo de vehículo | `<select>` | Seleccionar / Furgoneta / Todos |
| Número de pasajeros | `<select>` | Seleccionar / 5 / 8 / Todos |

**Botón:** "Buscar"

**Comportamiento al buscar:** Genera URLs de tipo `/brw_Pasajeros/5/` o `/brw_tipo/furgoneta/` — taxonomías WooCommerce personalizadas indexadas por Yoast SEO.

**Nota:** El calendar date picker es un componente custom (no el nativo del navegador). Muestra dos meses en simultáneo (mes actual + siguiente). Los meses pasados están desactivados.

---

## 2. Selección de localización (producto de reserva)

**Ubicación:** /producto/mercedes-clase-v-220d-avantgard-largo-ibiza/ y /producto/mercedes-clase-v-220d-avantgard-largo/

**Campos:**

| Campo | Opciones (Ibiza) | Opciones (Alicante) |
|-------|-----------------|---------------------|
| Lugar de recogida | Puerto de Ibiza / Aeropuerto de Ibiza / Otro lugar | Oficina de Alicante / Puerto de Alicante / Otro lugar |
| Lugar de entrega | Puerto de Ibiza / Aeropuerto de Ibiza / Otro lugar | Oficina de Alicante / Puerto de Alicante / Otro lugar |

Los dos productos WooCommerce son distintos según la ubicación (Ibiza o Alicante) pero comparten el mismo título. La diferenciación es por las opciones de localización.

---

## 3. Selección de fechas (producto de reserva)

**Ubicación:** Formulario de reserva en páginas de producto

- Campo "Fecha de recogida": date picker, mismo componente que en el buscador
- Campo "Fecha de entrega": date picker
- El precio final se calcula según el número de días entre fechas (130€/día)

---

## 4. Selección de edad del conductor

**Ubicación:** Formulario de reserva en páginas de producto

- Tipo: `spinbutton` (campo numérico con +/-)
- Label: "Edad del conductor (+26)"
- Restricción declarada: mínimo 26 años

---

## 5. Extras (checkboxes con precio)

**Ubicación:** Formulario de reserva en páginas de producto

| Extra | Precio | Tipo de cobro |
|-------|--------|--------------|
| Silleta de bebé (0>9Kg) | 6,90 € | Total (único) |
| Silleta de niño (9>18Kg) | 6,90 € | Total (único) |
| Elevador | 6,90 € | Total (único) |
| Conductor adicional | 8,95 € | Total (único) |

Cada extra es un checkbox seleccionable de forma independiente.

---

## 6. Selección de cobertura

**Ubicación:** Formulario de reserva en páginas de producto

| Cobertura | Precio | Detalle |
|-----------|--------|---------|
| Cobertura básica | 0,00 € | Seleccionada por defecto. Franquicia: 850€ (Avantgarde) / 650€ (Clase V). Fianza TC: 1500€ / 1000€ / 1800€ (GLC). Asistencia en carretera incluida. |
| Cobertura total | 45,50 € | Cobertura completa sin franquicia (PENDING REVIEW — texto exacto de condiciones no capturado) |

Nota en la web: "Cobertura de daños o robo con franquicia min (según el modelo 650€ Clase V 850€ Avantgarde y GLC) abono de fianza con TC (1000 clase V 1500 Avantgarde 1800 GLC) Asistencia en carretera incluida."

---

## 7. Formulario de reserva (producto WooCommerce)

**Ubicación:** /producto/mercedes-clase-v-220d-avantgard-largo-ibiza/ y /producto/mercedes-clase-v-220d-avantgard-largo/

**Comportamiento:**
1. Usuario selecciona lugar de recogida/entrega
2. Usuario selecciona fechas
3. Sistema muestra precio total (130€/día × días)
4. Usuario puede añadir extras
5. Usuario selecciona cobertura
6. Usuario acepta T&C (checkbox obligatorio)
7. Botón "Reservar" → proceso de pago WooCommerce → /finalizar-compra/

**Nota:** El formulario incluye un tooltip sobre la fianza: "La fianza se le cobrará el día de la recogida del vehículo. Y su precio dependerá del tipo de cobertura seleccionada."

---

## 8. Popup / Modal de reserva (Elementor)

**Disparador:** Link "FORMULARIO DE RESERVA" en homepage y /contacto

**ID Elementor:** 102  
**Tipo:** Elementor popup modal

**Campos:**
- Lugar de recogida: Puerto de Ibiza / Puerto de Alicante / Aeropuerto de Ibiza / Aeropuerto de Alicante / Oficina de Alicante
- Lugar de entrega: mismas opciones
- Opción de garantía: Bail (fianza) / Premium insurance (seguro premium)
- Modelo: 
  - MERCEDES V CLASS 220D AVANTGARD LONG
  - MERCEDES GLC 220D 4MATIC
  - MERCEDES GLC 220D 4MATIC COUPÉ AMG
  - MERCEDES V-CLASS 220D LONG
- Texto GDPR completo
- Botón de envío

**Observación importante:** El popup lista 4 modelos de vehículos pero en la tienda WooCommerce solo hay 2 productos activos. Los modelos GLC 220D 4MATIC y GLC 220D 4MATIC COUPÉ AMG aparecen como opción en el popup pero no tienen producto activo. Esto puede indicar: (a) modelos planificados/descontinuados, (b) formulario de petición manual no conectado a WooCommerce.

---

## 9. Formulario de contacto (email)

**Ubicación:** Homepage y /contacto-alquiler-coches-alicante-ibiza/

**Campos:**
- Nombre y apellidos (textbox)
- Correo electrónico (textbox)
- Mensaje (textbox)
- Checkbox GDPR (obligatorio para enviar)
- Botón: "Enviar"

**Bloqueo por cookies:** Hay un botón "Haz clic para aceptar cookies de marketing y permitir este contenido" que bloquea el formulario hasta aceptar cookies de marketing. Esto sugiere que el formulario usa un servicio de terceros (posiblemente HubSpot, Mailchimp u otro servicio de marketing).

---

## 10. Galería de imágenes del vehículo

**Ubicación:** Páginas de producto WooCommerce y fichas informativas

**Comportamiento:**
- Imagen principal grande clickable
- Miniaturas en fila horizontal debajo
- Al hacer clic en miniatura, cambia la imagen principal
- 5+ imágenes del vehículo (exterior, interior, detalles)
- Las imágenes tienen nombres de archivo tipo "3125 MSN" (numeración interna)

---

## 11. Acordeón "Características técnicas"

**Ubicación:** /nuestra-flota/ y fichas de vehículo

**Comportamiento:** Al hacer clic en el H2 "Características técnicas", se expande una sección con las especificaciones técnicas del vehículo.

---

## 12. Acordeón FAQ

**Ubicación:** Homepage

**Ítems:**
- "Ventajas de alquilar un coche Mercedes en Ibiza" — expandido por defecto, lista: Comodidad y estilo / Flexibilidad / Exclusividad
- "Beneficios del alquiler de coches en Alicante" — colapsado
- "Nuestra flota de Mercedes en Ibiza y Alicante" — colapsado

---

## 13. Filtros de vehículos

**Ubicación:** /alquiler-coches-ibiza-mercedes/ y /alquiler-coches-alicante-mercedes/ (links en la página)

**Tipos de filtro disponibles:**

| Filtro | Valores | URL |
|--------|---------|-----|
| Pasajeros | 5 | /brw_Pasajeros/5/ |
| Pasajeros | 8 | /brw_Pasajeros/8/ |
| Pasajeros | Todos | /brw_Pasajeros/todos/ |
| Tipo | Furgoneta | /brw_tipo/furgoneta/ |
| Tipo | Todos | /brw_tipo/todos/ |

Los filtros generan páginas de archivo independientes (taxonomías WooCommerce personalizadas) indexadas por Yoast SEO.

---

## 14. Selector de idioma ES / EN

**Ubicación:** Header (todas las páginas)

**Comportamiento:**
- Dos links: "ES" y "EN" con URL "#"
- Al hacer clic en "EN": cambia el contenido de la página a inglés sin cambiar la URL
- Al hacer clic en "ES": vuelve al contenido en español
- Implementación: JavaScript (posiblemente Google Translate o traductor personalizado de Elementor)
- Confirmado: título cambia de "Alquiler de vehículos de alta gama" a "Luxury Car Rental"
- Menú también se traduce: "Nuestra flota" → "Our fleet", "Reserva" → "Booking", etc.
- La versión en inglés genera muchos errores en consola (195+), lo que indica inestabilidad de la implementación de traducción

---

## 15. Carrito WooCommerce

**Ubicación:** Header (contador) + /carrito/

**Comportamiento:**
- El header muestra un contador de artículos ("0 Carrito" cuando vacío)
- Al añadir una reserva, el contador se actualiza
- Página /carrito/ muestra los artículos seleccionados
- Desde /carrito/ se puede proceder a /finalizar-compra/
- /finalizar-compra/ redirige a /carrito/ si el carrito está vacío

---

## 16. Mi cuenta WooCommerce

**URL:** /mi-cuenta/

**Funcionalidades:**
- Login con usuario/email + contraseña
- Registro con email (contraseña enviada por email)
- Una vez autenticado: PENDING REVIEW — panel de cliente WooCommerce estándar (pedidos, datos personales, etc.)

---

## 17. Teléfono

**Ubicación:** Footer

- Número: 625 305 620
- Formato `tel:`: `tel:+34625305620`
- Es un link clickable (útil en mobile)

---

## 18. WhatsApp

UNKNOWN — No se encontró ningún botón, widget o enlace de WhatsApp en ninguna de las páginas analizadas.

---

## 19. Mapa / Dirección

**Ubicación:** Footer

- Dirección Alicante: Calle de la Figuera, 5. local 58, 03560, El Campello Alicante
- Link a Google Maps con coordenadas exactas de la oficina
- No hay iframe de Google Maps embebido en la web (solo links externos)

---

## 20. Barra sticky de precio y CTA (producto WooCommerce)

**Ubicación:** Páginas de producto

**Comportamiento:**
- Al hacer scroll hacia abajo, aparece una barra fija en la parte superior de la pantalla
- Muestra: precio del vehículo (130,00 € / día) + botón "Reservar"
- El botón "Reservar" hace scroll al formulario de reserva (anchor #booking_form)

---

## 21. Slider de reseñas

**Ubicación:** Homepage

**Comportamiento:**
- 3 reseñas visibles en formato de tarjetas
- Las reseñas son texto estático (no integrado con Google Reviews, Tripadvisor u otra plataforma)
- PENDING REVIEW — si hay flechas de navegación o es un carousel automático

---

## 22. Menú desplegable "Nuestra flota"

**Ubicación:** Header, al hover/click sobre "Nuestra flota"

**Comportamiento:**
- Al interactuar con el ítem "Nuestra flota" en el menú, se despliega un submenú
- Muestra los modelos de vehículos disponibles con links a sus fichas informativas

---

## 23. Menú desplegable "Reserva"

**Ubicación:** Header, al hover/click sobre "Reserva"

**Comportamiento:**
- Despliega dos opciones: "Alquiler de coches en Alicante" y "Alquiler de coches en Ibiza"
- Actúa como un grupo de navegación (aria: `group "Reserva"`)

---

## 24. Consentimiento de cookies

**Comportamiento:**
- Al entrar por primera vez, existe un banner de cookies (PENDING REVIEW — no capturado explícitamente en el snapshot inicial pero se infiere por los errores de consola y el botón de "aceptar cookies de marketing")
- El formulario de contacto muestra un botón "Haz clic para aceptar cookies de marketing y permitir este contenido" en lugar del formulario hasta que se acepten las cookies de marketing
- Gestión de cookies: Yoast SEO (para analytics) + posible servicio de terceros para el formulario

---

## 25. Fianza y cobro

**Comportamiento documentado (extraído de los T&C y del formulario):**
- La fianza se cobra el día de la recogida del vehículo
- El precio de la fianza depende de la cobertura seleccionada:
  - Cobertura básica: fianza 1.000€ (Clase V) / 1.500€ (Avantgarde) / 1.800€ (GLC)
  - Cobertura total: fianza inferior (PENDING REVIEW — importe exacto no capturado)
- Tarjeta de crédito aceptada para la fianza
- La reserva online paga el precio del alquiler; la fianza se gestiona en la recogida

---

## 26. Paginación

PENDING REVIEW — Las páginas de archivo (brw_Pasajeros, brw_tipo, categoria-producto) incluyen el texto "Páginas" en sus headings, lo que sugiere que hay paginación. Con el catálogo actual (1 producto) no se pudo verificar el comportamiento de paginación con múltiples páginas.

---

## Resumen de funcionalidades por tipo

| Funcionalidad | Estado | Tecnología |
|--------------|--------|-----------|
| Formulario de búsqueda | Activo | WooCommerce custom |
| Date picker | Activo | Custom JS |
| Filtro pasajeros | Activo | Taxonomía WC personalizada |
| Filtro tipo vehículo | Activo | Taxonomía WC personalizada |
| Formulario de reserva (producto) | Activo | WooCommerce |
| Galería de imágenes | Activo | WooCommerce gallery |
| Acordeón FAQ | Activo | Elementor |
| Acordeón specs | Activo | Elementor |
| Popup reserva | Activo | Elementor popup |
| Formulario de contacto | Activo (bloqueo cookies) | Elementor + servicio tercero |
| Carrito WooCommerce | Activo | WooCommerce |
| Mi cuenta | Activo | WooCommerce |
| Checkout | Activo | WooCommerce |
| Selector idioma ES/EN | Activo (con errores) | JavaScript / Google Translate |
| Reseñas | Activo (estáticas) | Elementor |
| Slider reseñas | PENDING REVIEW | Elementor |
| Mapa | Solo link externo | Google Maps |
| WhatsApp | UNKNOWN | — |
| Teléfono click-to-call | Activo | `tel:` link |
| Banner cookies | Activo | PENDING REVIEW (herramienta) |
| Barra sticky precio/CTA | Activo | Elementor |
| Menú desplegable | Activo | Elementor |
| Seguridad GDPR | Activo | GDPR checkbox en formularios |
