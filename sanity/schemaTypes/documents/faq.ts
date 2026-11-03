import { defineType, defineField } from 'sanity';
import { HelpCircleIcon } from '@sanity/icons';

export const faq = defineType({
  name: 'faq',
  title: 'Pregunta frecuente',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({ name: 'question', title: 'Pregunta', type: 'localeString', validation: (Rule) => Rule.required() }),
    defineField({ name: 'answer', title: 'Respuesta', type: 'localeBlockContent', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'category', title: 'Categoría', type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Ibiza', value: 'ibiza' },
          { title: 'Alicante', value: 'alicante' },
          { title: 'Reserva', value: 'booking' },
          { title: 'Vehículo', value: 'vehicle' },
          { title: 'Coberturas', value: 'coverage' },
          { title: 'Pago', value: 'payment' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'order', title: 'Orden', type: 'number', initialValue: 0 }),
    defineField({ name: 'relatedCars', title: 'Coches relacionados', type: 'array', of: [{ type: 'reference', to: [{ type: 'car' }] }] }),
    defineField({ name: 'relatedLocations', title: 'Destinos relacionados', type: 'array', of: [{ type: 'reference', to: [{ type: 'location' }] }] }),
  ],
  preview: {
    select: { title: 'question.es', subtitle: 'category' },
    prepare({ title, subtitle }) {
      const labels: Record<string, string> = { general: '📋', ibiza: '🏖️', alicante: '⛵', booking: '📅', vehicle: '🚐', coverage: '🛡️', payment: '💳' };
      return { title, subtitle: `${labels[subtitle] ?? ''} ${subtitle}` };
    },
  },
  orderings: [{ title: 'Categoría + Orden', name: 'categoryOrder', by: [{ field: 'category', direction: 'asc' }, { field: 'order', direction: 'asc' }] }],
});
