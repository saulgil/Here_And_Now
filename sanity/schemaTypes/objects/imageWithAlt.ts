import { defineType, defineField } from 'sanity';

export const imageWithAlt = defineType({
  name: 'imageWithAlt',
  title: 'Imagen con texto alternativo',
  type: 'object',
  fields: [
    defineField({
      name: 'asset',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Texto alternativo (accesibilidad)',
      type: 'localeString',
      description: 'Describe la imagen para lectores de pantalla y SEO',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Pie de foto (opcional)',
      type: 'localeString',
    }),
  ],
  preview: {
    select: { media: 'asset', title: 'alt.es' },
  },
});
