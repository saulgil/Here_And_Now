# Resumen de revisión de contenido legal (origen WordPress)

> Fuente: \`docs/current-site/WordPress_2026-11-02.xml\` (export completo de WordPress).
> Objetivo de esta fase: extracción y documentación únicamente. No se han creado rutas `/privacidad`, `/terminos-y-condiciones`, `/aviso-legal`, `/politica-de-cookies` ni `/politica-cancelacion` en la web nueva.

| PAGE | ORIGINAL FOUND | COMPLETE | NEEDS REVIEW | NOTES |
|---|---|---|---|---|
| Política de privacidad | Sí (WP post ID 3, `politica-privacidad`) | Sí | Sí | Razón social inconsistente entre páginas legales (sin forma jurídica aquí vs "SL"/"SLU" en otras); CP incompleto (3560 vs 03560); menciona WooCommerce/newsletter/registro de usuario (funcionalidades que no existen en el sitio nuevo); redes sociales citadas (Facebook/LinkedIn/Twitter/YouTube) no coinciden con las redes actuales (Instagram/Threads). |
| Términos y Condiciones | Sí (WP post ID 198, `terminos-y-condiciones`) | Sí | Sí | Documento muy extenso (12 secciones) con numerosos importes y plazos de 2024 a reverificar; menciona vehículo "GLC 4MATIC" que nunca llegó a publicarse según el inventario de WordPress; dos emails distintos (info@ y administracion@hereandnowibiza.com); errata "Here and Naw"; contenido duplicado en el export (acordeón + copia en texto plano), se conservó solo la versión del acordeón. |
| Aviso Legal | Sí (WP post ID 272, `aviso-legal`) | Sí | Sí | Razón social "HERE AND NOW IBIZA, SL" (distinta de Términos y de Privacidad); dirección más completa pero con numeración de local distinta a Privacidad; jurisdicción fijada en Murcia pese a domicilio en El Campello (Alicante) — probable plantilla genérica no adaptada, revisar con asesoría legal. |
| Política de cookies (UE) | Sí (WP post ID 291, `politica-de-cookies-ue`), pero sin contenido propio | No | Sí | El `content:encoded` solo contiene el shortcode `[cmplz-document type="cookie-statement" region="eu"]` del plugin Complianz. **CONTENT_GENERATED_BY_COMPLIANZ** — el texto real nunca se almacenó como contenido de WordPress; debe redactarse de nuevo acorde a las cookies reales del sitio Next.js. |
| Política de cancelación y devolución | Sí (WP post ID 1069, `politica-de-cancelacion-y-devolucion`) | Sí | Sí | Documento más corto; contiene una errata ("3o días" → ¿30?) y una incoherencia interna entre "30 días naturales" y "30 días hábiles" como plazo de reembolso; dos numeraciones de apartados distintas convivendo en el mismo documento (conservadas tal cual, sin reestructurar). |

## Resumen ejecutivo

**Páginas encontradas:** las 5 páginas legales solicitadas existen en el export de WordPress y han sido localizadas: Política de privacidad, Términos y Condiciones, Aviso Legal, Política de cookies (UE) y Política de cancelación y devolución. Adicionalmente se detectó un template de Elementor publicado en enero de 2025 con slug `terminos` (ID 2053) que contiene una sección parcial ya incluida en los Términos y Condiciones — no aporta contenido nuevo.

**Páginas con contenido completo:** Política de privacidad, Términos y Condiciones, Aviso Legal y Política de cancelación y devolución tienen su texto íntegro almacenado como contenido editorial en WordPress (`content:encoded`), sin depender de plugins externos para generarse.

**Páginas incompletas:** la Política de cookies (UE) **no tiene contenido propio almacenado** — solo el shortcode de Complianz. Su texto real era generado dinámicamente por ese plugin y no es recuperable desde este export; deberá redactarse de nuevo.

**Datos aparentemente obsoletos o inconsistentes:**
- La **razón social/forma jurídica** de la empresa varía entre las tres páginas que la mencionan: "Here and Now" (Privacidad), "HERE AND NOW IBIZA, SL" (Aviso Legal), "Here and Now Ibiza SLU." (Términos). Debe unificarse antes de publicar cualquier versión nueva.
- La **dirección física** también varía en formato entre Privacidad ("LOC 5 B", CP "3560") y Aviso Legal ("local 58", CP "03560").
- La **jurisdicción** fijada en el Aviso Legal (Murcia) no coincide con el domicilio social (El Campello, Alicante) — posible resto de una plantilla genérica.
- Los **Términos y Condiciones** hacen referencia a un vehículo "GLC 4MATIC" que, según el inventario de WordPress, nunca se publicó realmente (quedó en borrador).
- La **Política de privacidad** describe funcionalidades de **comercio electrónico y newsletter** (registro de usuario, carrito, WooCommerce) que no existen en el sitio nuevo, y cita redes sociales (Facebook, LinkedIn, Twitter, YouTube) distintas de las actuales (Instagram, Threads).
- El **dominio** de referencia en todo el contenido original es `hereandnowibiza.com`; el sitio nuevo usa `hereandnow.es` (`env.example`).
- La **Política de cancelación** contiene una errata ("3o días") y una incoherencia de plazos de reembolso ("30 días naturales" vs "30 días hábiles").

**Contenido generado por plugins:** únicamente la Política de cookies (UE), generada por **Complianz** (`CONTENT_GENERATED_BY_COMPLIANZ`, shortcode `[cmplz-document type="cookie-statement" region="eu"]`). El resto de páginas no depende de shortcodes ni de datos dinámicos de Elementor para su contenido textual (los widgets de Elementor de esas páginas simplemente reutilizan el mismo `content:encoded` ya extraído).

## Siguiente paso sugerido (no ejecutado en esta fase)

Revisar con el negocio/asesoría legal los puntos marcados como "requiere revisión" en cada archivo `*-original.md` antes de redactar las versiones definitivas e implementarlas como páginas `/privacidad`, `/terminos-y-condiciones`, `/aviso-legal`, `/politica-cancelacion` y `/cookies` en el sitio nuevo.
