import { defineType, defineField } from 'sanity';
import { DocumentTextIcon } from '@sanity/icons';

export const guide = defineType({
  name: 'guide',
  title: 'Guía',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    { name: 'content', title: 'Contenido', default: true },
    { name: 'relations', title: 'Relaciones' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'localeString', group: 'content', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug URL', type: 'slug', group: 'content', options: { source: 'title.es' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'publishedAt', title: 'Fecha de publicación', type: 'datetime', group: 'content', validation: (Rule) => Rule.required() }),
    defineField({ name: 'updatedAt', title: 'Fecha de actualización', type: 'datetime', group: 'content' }),
    defineField({ name: 'author', title: 'Autor', type: 'string', group: 'content' }),
    defineField({ name: 'excerpt', title: 'Extracto', type: 'localeText', group: 'content', validation: (Rule) => Rule.required() }),
    defineField({ name: 'body', title: 'Contenido', type: 'localeBlockContent', group: 'content', validation: (Rule) => Rule.required() }),
    defineField({ name: 'mainImage', title: 'Imagen principal', type: 'imageWithAlt', group: 'content', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'category', title: 'Categoría', type: 'string', group: 'content',
      options: {
        list: [
          { title: 'Alquiler en Ibiza', value: 'alquiler-ibiza' },
          { title: 'Alquiler en Alicante', value: 'alquiler-alicante' },
          { title: 'Destino Ibiza', value: 'destino-ibiza' },
          { title: 'Destino Alicante', value: 'destino-alicante' },
          { title: 'Aeropuertos', value: 'aeropuerto' },
          { title: 'Consejos', value: 'consejos' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'relatedCars', title: 'Coches mencionados', type: 'array', group: 'relations', of: [{ type: 'reference', to: [{ type: 'car' }] }] }),
    defineField({ name: 'relatedLocations', title: 'Destinos mencionados', type: 'array', group: 'relations', of: [{ type: 'reference', to: [{ type: 'location' }] }] }),
    defineField({ name: 'faqs', title: 'FAQs relacionadas', type: 'array', group: 'relations', of: [{ type: 'reference', to: [{ type: 'faq' }] }] }),
    defineField({ name: 'seo', title: 'SEO', type: 'seoFields', group: 'seo', validation: (Rule) => Rule.required() }),
  ],
  preview: {
    select: { title: 'title.es', subtitle: 'category', media: 'mainImage.asset' },
  },
});
