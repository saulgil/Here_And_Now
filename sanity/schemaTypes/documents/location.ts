import { defineType, defineField } from 'sanity';
import { PinIcon } from '@sanity/icons';

export const location = defineType({
  name: 'location',
  title: 'Destino',
  type: 'document',
  icon: PinIcon,
  fields: [
    defineField({ name: 'name', title: 'Nombre', type: 'localeString', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug URL', type: 'slug', options: { source: 'name.es' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'countryCode', title: 'Código de país', type: 'string', initialValue: 'ES' }),
    defineField({ name: 'region', title: 'Región/Provincia', type: 'string' }),
    defineField({ name: 'shortDescription', title: 'Descripción corta', type: 'localeText', validation: (Rule) => Rule.required() }),
    defineField({ name: 'fullDescription', title: 'Descripción completa', type: 'localeBlockContent' }),
    defineField({ name: 'heroImage', title: 'Imagen de cabecera', type: 'imageWithAlt', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'faqs', title: 'FAQs del destino', type: 'array',
      of: [{ type: 'reference', to: [{ type: 'faq' }] }],
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seoFields', validation: (Rule) => Rule.required() }),
  ],
  preview: { select: { title: 'name.es', media: 'heroImage.asset' } },
});
