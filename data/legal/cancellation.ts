import type { LegalBlock } from '@/components/shared/LegalContent';

// Migrated from the original WordPress page
// (docs/legal/cancellation-original.md, WP post ID 1069,
// https://hereandnowibiza.com/politica-de-cancelacion-y-devolucion/).
//
// Legal substance preserved verbatim, including the two independent
// numbered lists the original document used one after another (1-5 for
// cancellation terms, then 1-4 again for deposit return) — not
// renumbered, per the migration rules (documented in
// docs/legal/legal-review-pending.md). The one correction applied is the
// obvious OCR/typo "3o días naturales" → "30 días naturales" (a
// transcription artifact, not a legal data point); the original document
// still also says "30 días hábiles" in a different paragraph for the same
// concept — that discrepancy (naturales vs. hábiles) is preserved as-is
// and flagged for review rather than resolved unilaterally.
export const CANCELLATION_CONTENT: LegalBlock[] = [
  { type: 'heading', level: 2, text: 'Devolución total o parcial de la fianza', id: 'devolucion-fianza' },
  {
    type: 'paragraph',
    text: 'En Here and Now nos comprometemos a ofrecerte el mejor servicio posible para que disfrutes de tu experiencia de alquiler de coches. Entendemos que pueden surgir situaciones imprevistas que te obliguen a cancelar tu reserva. Por ello, hemos establecido la siguiente política de cancelación y devoluciones:',
  },
  {
    type: 'list',
    ordered: true,
    items: [
      {
        text: '**Cancelaciones con más de 5 días de antelación:**',
        children: ['Si decides cancelar tu reserva con más de 5 días de antelación a la fecha de inicio del alquiler, recibirás el 100% del importe pagado.'],
      },
      {
        text: '**Cancelaciones dentro de los 5 días previos a la reserva:**',
        children: ['Si cancelas tu reserva dentro de los 5 días previos a la fecha de inicio del alquiler, recibirás el 50% del importe pagado.'],
      },
      {
        text: '**Procedimiento para cancelar una reserva:**',
        children: ['Para cancelar tu reserva puedes ponerte en contacto con nuestro servicio de atención al cliente a través del correo electrónico o teléfono proporcionados en nuestra página de [contacto](/contacto).'],
      },
      {
        text: '**Reembolsos:**',
        children: ['Los reembolsos se procesarán a la misma forma de pago utilizada para la reserva. Una vez confirmada la cancelación, el reembolso puede tardar hasta 30 días naturales según la entidad bancaria.'],
      },
      {
        text: '**Excepciones:**',
        children: ['Esta política de cancelación y devoluciones no se aplica a reservas realizadas a través de terceros. En esos casos, se aplicarán las políticas de cancelación del proveedor correspondiente.'],
      },
    ],
  },

  { type: 'heading', level: 3, text: '1. Devolución total de la fianza' },
  {
    type: 'list',
    items: [
      'La fianza será devuelta en su totalidad si el vehículo es devuelto en las mismas condiciones en las que fue entregado, sin daños y con el mismo nivel de combustible que al inicio del alquiler.',
      'La inspección del vehículo se realizará en presencia del cliente al momento de la devolución para asegurar la conformidad de ambas partes.',
    ],
  },

  { type: 'heading', level: 3, text: '2. Devolución parcial de la fianza' },
  {
    type: 'list',
    items: [
      'En caso de que el vehículo presente daños, faltas de combustible, o limpieza inadecuada, se retendrán los costos correspondientes de la fianza.',
      'Los cargos por combustible se aplicarán de acuerdo con las tarifas vigentes.',
      'Los daños serán evaluados y se descontará de la fianza el costo de las reparaciones necesarias.',
    ],
  },

  { type: 'heading', level: 3, text: '3. Procedimiento de devolución' },
  {
    type: 'list',
    items: [
      'Una vez finalizada la inspección del vehículo y calculados los posibles cargos, el importe correspondiente de la fianza será liberado o reembolsado.',
      'La devolución de la fianza se procesará a la misma forma de pago utilizada para el depósito. En caso de cualquier deducción, se proporcionará un desglose detallado de los cargos aplicados.',
      'El proceso de devolución puede tardar hasta 30 días hábiles, dependiendo de la entidad bancaria.',
    ],
  },

  { type: 'heading', level: 3, text: '4. Reclamaciones' },
  {
    type: 'list',
    items: [
      'Si tienes alguna objeción respecto a los cargos deducidos de la fianza, por favor, contacta a nuestro servicio de atención al cliente. Estamos comprometidos a resolver cualquier discrepancia de manera justa y transparente.',
    ],
  },
];
