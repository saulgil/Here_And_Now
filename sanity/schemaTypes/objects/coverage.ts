import { defineType, defineField } from 'sanity';

export const coverage = defineType({
  name: 'coverage',
  title: 'Cobertura',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug interno',
      type: 'string',
      description: '"basica" o "total"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Precio adicional (€)',
      type: 'number',
      description: '0 para la cobertura básica incluida',
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'pricingModel',
      title: 'Modelo de cobro',
      type: 'string',
      options: {
        list: [
          { title: 'Por reserva', value: 'per_booking' },
          { title: 'Por día', value: 'per_day' },
        ],
        layout: 'radio',
      },
      initialValue: 'per_booking',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'franchiseAmount',
      title: 'Franquicia (€)',
      type: 'number',
      description: '0 para cobertura total sin franquicia',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'depositAmountCard',
      title: 'Fianza con tarjeta (€)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'includesRoadside',
      title: 'Incluye asistencia en carretera',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'localeText',
    }),
    defineField({
      name: 'isDefault',
      title: 'Cobertura por defecto',
      type: 'boolean',
      description: 'Solo una cobertura puede ser la predeterminada',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'name.es', subtitle: 'price' },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle === 0 ? 'Incluida' : `+${subtitle}€` };
    },
  },
});
