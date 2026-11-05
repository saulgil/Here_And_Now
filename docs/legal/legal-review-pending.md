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
