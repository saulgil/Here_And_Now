import { defineType, defineField } from 'sanity';

export const extra = defineType({
  name: 'extra',
  title: 'Extra',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Precio (€)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'pricingModel',
      title: 'Modelo de cobro',
      type: 'string',
      options: {
        list: [
          { title: 'Cargo único (por reserva)', value: 'one_time' },
          { title: 'Por día', value: 'per_day' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'maxQuantity',
      title: 'Cantidad máxima',
      type: 'number',
      initialValue: 1,
    }),
  ],
  preview: {
    select: { title: 'name.es', subtitle: 'price' },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle != null ? `${subtitle}€` : '' };
    },
  },
});
