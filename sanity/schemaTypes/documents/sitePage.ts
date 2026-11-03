import { defineType, defineField } from 'sanity';
import { DocumentIcon } from '@sanity/icons';

export const sitePage = defineType({
  name: 'sitePage',
  title: 'Página',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'localeString', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug URL', type: 'slug', options: { source: 'title.es' }, validation: (Rule) => Rule.required() }),
    defineField({
      name: 'pageType', title: 'Tipo de página', type: 'string',
      options: {
        list: [
          { title: 'Inicio', value: 'home' },
          { title: 'Flota', value: 'fleet' },
          { title: 'Contacto', value: 'contact' },
          { title: 'Hub de guías', value: 'guide-hub' },
          { title: 'Legal', value: 'legal' },
          { title: 'Custom', value: 'custom' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'body', title: 'Contenido', type: 'localeBlockContent' }),
    defineField({ name: 'faqs', title: 'FAQs', type: 'array', of: [{ type: 'reference', to: [{ type: 'faq' }] }] }),
    defineField({ name: 'testimonials', title: 'Testimonios', type: 'array', of: [{ type: 'reference', to: [{ type: 'testimonial' }] }] }),
    defineField({ name: 'isPublished', title: 'Publicada', type: 'boolean', initialValue: false }),
    defineField({ name: 'seo', title: 'SEO', type: 'seoFields', validation: (Rule) => Rule.required() }),
  ],
  preview: {
    select: { title: 'title.es', subtitle: 'pageType', published: 'isPublished' },
    prepare({ title, subtitle, published }) {
      return { title, subtitle: `${published ? '🟢' : '🔴'} ${subtitle}` };
    },
  },
});
