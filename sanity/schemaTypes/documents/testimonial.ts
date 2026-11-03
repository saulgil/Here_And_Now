import { defineType, defineField } from 'sanity';
import { StarIcon } from '@sanity/icons';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonio',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({ name: 'author', title: 'Nombre del cliente', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'text', title: 'Texto', type: 'localeText', validation: (Rule) => Rule.required() }),
    defineField({ name: 'location', title: 'Destino', type: 'reference', to: [{ type: 'location' }] }),
    defineField({ name: 'rating', title: 'Valoración (1-5)', type: 'number', validation: (Rule) => Rule.min(1).max(5) }),
    defineField({ name: 'date', title: 'Fecha aproximada', type: 'date' }),
    defineField({ name: 'featured', title: 'Destacado (aparece en homepage)', type: 'boolean', initialValue: false }),
    defineField({
      name: 'source', title: 'Fuente', type: 'string',
      options: { list: ['web', 'google', 'tripadvisor', 'other'] },
    }),
  ],
  preview: {
    select: { title: 'author', subtitle: 'location.name.es', featured: 'featured' },
    prepare({ title, subtitle, featured }) {
      return { title, subtitle: `${featured ? '⭐ ' : ''}${subtitle ?? ''}` };
    },
  },
});
