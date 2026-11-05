import type { LegalBlock } from '@/components/shared/LegalContent';
import { COMPANY_EMAIL } from './company';

// Política de Cookies — NOT migrated from the original WordPress content,
// because there is nothing to migrate: the original page
// (docs/legal/cookies-original.md, WP post ID 291,
// https://hereandnowibiza.com/politica-de-cookies-ue/) only contained the
// shortcode `[cmplz-document type="cookie-statement" region="eu"]` from
// the Complianz plugin. That plugin generated the real cookie text at
// render time from its own configuration/scan results, which is not part
// of the WordPress content export (CONTENT_GENERATED_BY_COMPLIANZ).
//
// Per the migration rules we do not invent a detailed technical cookie
// catalogue for a stack Complianz never scanned (this is a different
// site, built on Next.js, not WordPress/WooCommerce/Elementor). The
// content below is limited to general, verifiable information: what
// cookies are, the fact that no analytics/marketing cookies are active
// yet (confirmed in this codebase — env.example documents an unused
// NEXT_PUBLIC_GA_ID placeholder, not implemented in any component),
// standard browser-level cookie management instructions, and a pointer to
// docs/legal/legal-review-pending.md for what the final version must still
// cover once analytics/consent tooling is decided.
export const COOKIES_CONTENT: LegalBlock[] = [
  {
    type: 'paragraph',
    text: 'Esta Política de Cookies explica qué son las cookies, cómo las utilizamos en este sitio web y cómo puede gestionarlas.',
  },

  { type: 'heading', level: 2, text: '¿Qué son las cookies?', id: 'que-son' },
  {
    type: 'paragraph',
    text: 'Las cookies son pequeños archivos de texto que un sitio web puede guardar en su navegador o dispositivo cuando lo visita. Permiten, entre otras cosas, recordar sus preferencias, mantener el funcionamiento técnico de la página o, en caso de utilizarse con esa finalidad, analizar cómo se navega por el sitio.',
  },

  { type: 'heading', level: 2, text: 'Cookies utilizadas en este sitio web', id: 'cookies-utilizadas' },
  {
    type: 'paragraph',
    text: 'Este sitio web utiliza únicamente las cookies técnicas estrictamente necesarias para su funcionamiento básico. Actualmente no se instalan cookies de análisis, publicidad o redes sociales de terceros.',
  },
  {
    type: 'paragraph',
    text: 'En caso de que en el futuro se incorporen herramientas de analítica, marketing o de terceros que requieran el uso de cookies no esenciales, esta página se actualizará para informar de ello con detalle y, cuando corresponda, se solicitará su consentimiento previo mediante el sistema de gestión de cookies correspondiente.',
  },

  { type: 'heading', level: 2, text: 'Cómo gestionar o desactivar las cookies', id: 'gestion-cookies' },
  {
    type: 'paragraph',
    text: 'Usted puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo configurando las opciones de su navegador. A continuación le indicamos cómo acceder a esta configuración en los navegadores más habituales:',
  },
  {
    type: 'list',
    items: [
      '[Google Chrome](https://support.google.com/chrome/answer/95647)',
      '[Mozilla Firefox](https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-preferencias)',
      '[Safari](https://support.apple.com/es-es/guide/safari/sfri11471/mac)',
      '[Microsoft Edge](https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c6b0-5b57-1a5b5a2f2a5f)',
    ],
  },
  {
    type: 'paragraph',
    text: 'Tenga en cuenta que deshabilitar determinadas cookies técnicas puede afectar al correcto funcionamiento de algunas partes del sitio web.',
  },

  { type: 'heading', level: 2, text: 'Más información sobre protección de datos', id: 'mas-informacion' },
  {
    type: 'paragraph',
    text: `Para conocer cómo tratamos sus datos personales con carácter general, puede consultar nuestra **[Política de Privacidad](/privacidad)**. Si tiene cualquier duda sobre esta Política de Cookies, puede escribirnos a [${COMPANY_EMAIL}](mailto:${COMPANY_EMAIL}).`,
  },

  { type: 'heading', level: 2, text: 'Actualizaciones de esta política', id: 'actualizaciones' },
  {
    type: 'paragraph',
    text: 'Esta Política de Cookies podrá actualizarse para reflejar cambios en las cookies utilizadas por este sitio web o en la normativa aplicable. Le recomendamos revisarla periódicamente.',
  },
];
