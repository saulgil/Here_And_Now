import { defineType, defineField } from 'sanity';

export const openingHours = defineType({
  name: 'openingHours',
  title: 'Horario',
  type: 'object',
  fields: [
    defineField({
      name: 'days',
      title: 'Días',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Lunes', value: 'Monday' },
          { title: 'Martes', value: 'Tuesday' },
          { title: 'Miércoles', value: 'Wednesday' },
          { title: 'Jueves', value: 'Thursday' },
          { title: 'Viernes', value: 'Friday' },
          { title: 'Sábado', value: 'Saturday' },
          { title: 'Domingo', value: 'Sunday' },
        ],
        layout: 'grid',
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'opens',
      title: 'Apertura',
      type: 'string',
      description: 'Formato HH:MM, ej: 09:00',
      validation: (Rule) => Rule.required().regex(/^\d{2}:\d{2}$/, { name: 'HH:MM' }),
    }),
    defineField({
      name: 'closes',
      title: 'Cierre',
      type: 'string',
      description: 'Formato HH:MM, ej: 21:00',
      validation: (Rule) => Rule.required().regex(/^\d{2}:\d{2}$/, { name: 'HH:MM' }),
    }),
    defineField({
      name: 'closed',
      title: 'Cerrado',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { days: 'days', opens: 'opens', closes: 'closes', closed: 'closed' },
    prepare({ days, opens, closes, closed }) {
      const dayStr = Array.isArray(days) ? days.slice(0, 2).join(', ') : '';
      return {
        title: dayStr,
        subtitle: closed ? 'Cerrado' : `${opens} – ${closes}`,
      };
    },
  },
});
