# Puntos legales pendientes de revisión por el negocio/asesoría

> Este archivo recoge inconsistencias detectadas en el contenido legal
> original de WordPress durante su migración a páginas estáticas. No se
> resuelven por iniciativa propia: se conserva el dato más fiel al
> documento original y se documenta aquí para que el negocio/asesoría
> legal lo confirme antes de la publicación definitiva.

## Política de Privacidad (`/privacidad`)

- **Razón social**: el documento original de Privacidad solo identifica
  al responsable como "Here and Now" (sin forma jurídica). El Aviso Legal
  original usa "HERE AND NOW IBIZA, SL" y los Términos y Condiciones
  originales usan "Here and Now Ibiza SLU.". Las tres páginas legales de
  la web WordPress **no coinciden entre sí**. Para `/privacidad` se ha
  unificado a `HERE AND NOW IBIZA, SL` (ver `data/legal/company.ts`),
  por ser la denominación usada en el Aviso Legal (documento cuyo único
  objeto es identificar al titular) y la única que aparece siempre junto
  con NIF y domicilio completos. **Pendiente de confirmación por el
  negocio.**
- **NIF/CIF**: `B44733210`. Coincide entre el documento de Privacidad y
  el de Aviso Legal originales. Pendiente de verificar que sigue vigente.
- **Domicilio**: el original de Privacidad indica "Calle Figuera, 5, LOC
  5 B, 3560, El Campello, Alicante" (código postal "3560" y "LOC 5 B"),
  mientras que el Aviso Legal original indica "Calle de la Figuera, 5,
  local 58, 03560, El Campello (Alicante)". Se ha usado la versión del
  Aviso Legal (`03560`, `local 58`) por tener el código postal completo
  y coincidir con la dirección ya usada en el resto de la web (footer,
  schema.org). **Pendiente de confirmación por el negocio.**
- **Redes sociales**: el documento original menciona expresamente
  Facebook, LinkedIn, Twitter y YouTube, con enlaces a sus políticas de
  privacidad. Las redes activas actuales del negocio son Instagram y
  Threads (`SITE_SETTINGS.instagramUrl` / `threadsUrl`), no las citadas
  en el original. Para no publicar información desactualizada o
  incorrecta, el texto de `/privacidad` mantiene la mención genérica a
  "redes sociales" sin enumerar nombres ni enlaces concretos obsoletos.
  **Pendiente de que el negocio confirme si deben citarse Instagram y
  Threads explícitamente con enlaces a sus políticas de privacidad.**
- **Dominio**: el original no cita un dominio explícito (solo "nuestra
  Plataforma"), pero fue publicado bajo `hereandnowibiza.com`. No se ha
  encontrado ninguna referencia textual al dominio en el contenido legal
  de Privacidad que requiera actualizarse a `hereandnow.es`.
- **Correo de contacto para ejercer derechos**: `info@hereandnowibiza.com`.
  Se mantiene sin cambios al no existir en el proyecto otro correo
  confirmado para este fin.
- **Funcionalidades de e-commerce/newsletter/registro de usuario**: el
  documento original describe un "Contrato de Compraventa", carrito,
  alta como usuario registrado y newsletter, propios de la antigua
  tienda WooCommerce. El sitio Next.js actual no implementa compra
  online, registro de usuarios ni newsletter. Estas secciones se
  conservan **textualmente** en `/privacidad` (no se reescribe contenido
  legal por criterio propio), pero describen funcionalidades que hoy no
  existen en el sitio. **Pendiente de que el negocio/asesoría decida si
  deben eliminarse o reformularse formalmente.**
- **Fecha de última actualización**: el original no muestra ninguna
  fecha visible al usuario final (solo metadatos internos de WordPress:
  publicado 2024-05-21, modificado 2024-07-01). No se ha añadido una
  fecha a la página nueva para no inventar un dato que no estaba en el
  contenido original.

Fuente completa de la comparación: `docs/legal/privacy-original.md` y
`docs/legal/legal-review-summary.md`.

---

## Términos y Condiciones (`/terminos-y-condiciones`)

- **Razón social**: el documento original usa "Here and Now Ibiza SLU." (3 veces), "HERE AND NOW" (una vez, mayúsculas) y "Here and Now" (sin forma jurídica, unas 80 veces). Se ha unificado a `HERE AND NOW IBIZA, SL` siguiendo el mismo criterio que el resto de páginas legales (ver `data/legal/company.ts`). **Pendiente de confirmación por el negocio.**
- **Error "RGO" en el apartado 1.2**: el texto original contiene "Así mismo, RGO no tendrá la obligación de correr con los gastos…". "RGO" parece ser el nombre de otra empresa (posible copy-paste de una plantilla de terceros). En la migración se ha sustituido por "Here and Now" para coherencia interna, dado que la frase completa es aplicable al negocio. **Pendiente de confirmación por el negocio / asesoría legal de que la cláusula es correcta y propia.**
- **Error tipográfico "Here and Naw" en el apartado 8**: el original contiene "Here and Naw" (error de transcripción). Corregido a "Here and Now" en la migración, sin cambiar el contenido legal de la cláusula.
- **Email en apartado 4.4 (DAF)**: el original indica `administracion@hereandnowibiza.com` para el envío del parte de siniestros. Se ha unificado a `info@hereandnowibiza.com` por política del proyecto. **Pendiente de confirmar si `administracion@hereandnowibiza.com` sigue activo y debe mantenerse para este fin específico.**
- **Clase de vehículo "GLC 4MATIC"**: el documento original incluía filas para "GLC 4MATIC" en las tablas de franquicias/fianzas de los apartados 3.1, 4.3.1 y 4.3.2. Según `docs/legal/wordpress-inventory.md`, ese vehículo nunca se publicó (permaneció en borrador, solo Alicante, 275 €/día). Las filas correspondientes han sido eliminadas de las tablas. **Pendiente de confirmar con el negocio si el GLC debe incluirse o si la flota actual (Clase V y Avantgarde) es definitiva.**
- **Importes económicos**: el documento contiene numerosos importes fechados en 2024–2026 que deben confirmarse como vigentes antes de publicar: kilometraje 250 km/día a 0,38 €/km adicional (0,25 €/km sobre 50 km extra contratados); fianzas cobertura básica 1.000 €/1.500 € (Clase V/Avantgarde); fianzas cobertura total 550 €/750 €; franquicias 650–850 € y 850–1.050 €; tarifa grúa básica 155–720 € según distancia; tarifa grúa cobertura total 0–480 €; penalización llaves 302,50 € mín.; error combustible 302,50 € mín.; limpieza especial 150–250 €; fumar 50 €; conducción fuera territorio 400 € + 0,25 €/km; devolución tardía 40 € + mín. 436 € (si denuncia); abandono 200 €; parking público 50 €; DAF 50 €; gestión multa 40 €; recogida fuera horario 40 €; preautorización 2.000 €; repostaje 30 € + coste real; conductor adicional 8,95 €/día; sillita 6,90 €/día; km extra contratado 0,38 €/km (>50 km: 0,25 €/km). **Todos pendientes de verificación.**
- **Plazos**: periodo máximo 89 días; anticipación mínima 24 horas; cancelación gratuita hasta 5 días antes (50 % reembolso con 24 h de aviso en los 5 días previos); extensión con 48 h de antelación; devolución de fianza 5–10 días; margen de cortesía recogida 30 min; margen de cortesía devolución 60 min; notificación accidente/robo 12–24 h; plazo reclamación 14 días; no-show: 12 h de margen si reserva directa web. **Todos pendientes de verificación.**
- **Jurisdicción / territorio**: se menciona la prohibición de cruzar a Formentera y la necesidad de autorización para cruzar entre islas. La cláusula de "solo en Alicante" para devolución fuera de horario (apartado 1.3) implica que en Ibiza no aplica ese procedimiento. **Confirmar que ambas condiciones siguen vigentes con la operativa actual.**
- **Referencias legales (Código Penal)**: se citan los artículos 237 y 244 del Código Penal para la definición de robo. Estos artículos deben revisarse por si su numeración ha cambiado tras reformas del Código Penal posteriores a 2024.
- **Intermediarios / agencias (OTAs)**: los apartados 7.1.1 y 7.2 mencionan reservas realizadas "a través de un intermediario". Confirmar si Here and Now distribuye actualmente a través de OTAs y si las condiciones de modificación/cancelación aplicables a esos canales siguen siendo las descritas.
