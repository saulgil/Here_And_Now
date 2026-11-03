import { defineType, defineField } from 'sanity';

export const navItem = defineType({
  name: 'navItem',
  title: 'Elemento de navegación',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Etiqueta',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Enlace',
      type: 'string',
      description: 'Ruta relativa o URL absoluta. Ej: /ibiza/',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isExternal',
      title: 'Enlace externo',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'children',
      title: 'Subelementos (dropdown)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'localeString', title: 'Etiqueta' },
            { name: 'href', type: 'string', title: 'Enlace' },
          ],
          preview: { select: { title: 'label.es', subtitle: 'href' } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'label.es', subtitle: 'href' },
  },
});
