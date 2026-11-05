# Política de cookies (UE)

## Fuente original
- URL WordPress: https://hereandnowibiza.com/politica-de-cookies-ue/
- Título WordPress: Política de cookies (UE)
- Estado: publish (WordPress post ID 291)
- Fecha si está disponible: publicado 2024-07-01 09:05:48, última modificación 2024-07-01 09:05:48

## Contenido original limpio

El campo `content:encoded` de esta página en WordPress **no contiene texto legal alguno**. Contiene únicamente el siguiente shortcode del plugin Complianz (gestor de consentimiento de cookies):

```
[cmplz-document type="cookie-statement" region="eu"]
```

**CONTENT_GENERATED_BY_COMPLIANZ**

El texto real de la política de cookies que veían los visitantes de la web **no está almacenado en el export de WordPress** como contenido estático: era generado dinámicamente en tiempo de renderizado por el plugin "Complianz – GDPR/CCPA Cookie Consent" a partir de:
- el escaneo automático de cookies del sitio (`_cmplz_scanned_post` = 1, indicando que esta página fue efectivamente escaneada/gestionada por Complianz),
- la configuración interna del plugin (categorías de cookies, proveedores detectados, idioma, región "eu"),
- plantillas de texto propias de Complianz, no incluidas en el XML de export de contenido de WordPress (Complianz guarda su configuración en tablas/opciones propias de la base de datos, no en el post content).

No ha sido posible, por tanto, recuperar el texto exacto que se mostraba a los usuarios finales a partir de este export. **No se ha inventado ningún contenido de sustitución.**

## Datos que requieren revisión

- **Empresa/CIF/dirección/teléfono/email**: no se puede determinar a partir de este export, ya que el texto era generado por Complianz (normalmente incluiría estos datos tomados de la configuración general del plugin/el Aviso Legal).
- **Dominio**: el escaneo de cookies estaría vinculado al dominio antiguo hereandnowibiza.com; deberá rehacerse un escaneo de cookies para el nuevo dominio/sitio (hereandnow.es, Next.js) ya que la tecnología y las cookies utilizadas son distintas (WordPress/WooCommerce/Elementor vs Next.js).
- **Cookies técnicas reales**: las cookies que existían en el sitio WordPress (sesión de WooCommerce, carrito, Elementor, posibles cookies de Google Analytics, Meta Pixel, etc. si estaban instalados) no están documentadas en este export y no son necesariamente las mismas que usará el nuevo sitio.
- **Proveedores/servicios de terceros**: desconocidos sin acceso a la configuración de Complianz; deberán identificarse de nuevo analizando el nuevo sitio (NEXT_PUBLIC_GA_ID sugiere uso de Google Analytics en el nuevo sitio, ver env.example).

## Observaciones

El contenido estaba **incompleto** en WordPress desde el punto de vista de esta extracción: la página solo contiene el shortcode `[cmplz-document type="cookie-statement" region="eu"]` de Complianz; el texto final era **generado por el plugin Complianz en tiempo real**, no por un editor de contenido humano, y ese texto no forma parte del export de contenido de WordPress. Por tanto, es necesario redactar una nueva Política de Cookies desde cero para el sitio nuevo (acorde a las cookies reales que utilice la plataforma Next.js), ya que el contenido original no puede reconstruirse de forma fiel a partir de los datos disponibles.
