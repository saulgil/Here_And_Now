import { defineType, defineField } from 'sanity';

export const seoFields = defineType({
  name: 'seoFields',
  title: 'SEO',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta título',
      type: 'localeString',
      description: 'Máximo 60 caracteres',
      validation: (Rule) =>
        Rule.required().custom((value: { es?: string; en?: string } | undefined) => {
          if (!value?.es) return 'El título en español es obligatorio';
          if (value.es.length > 60) return `Demasiado largo: ${value.es.length}/60`;
          if (value.en && value.en.length > 60) return `EN demasiado largo: ${value.en.length}/60`;
          return true;
        }),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta descripción',
      type: 'localeText',
      description: 'Máximo 160 caracteres',
      validation: (Rule) =>
        Rule.required().custom((value: { es?: string; en?: string } | undefined) => {
          if (!value?.es) return 'La descripción en español es obligatoria';
          if (value.es.length > 160) return `Demasiado larga: ${value.es.length}/160`;
          if (value.en && value.en.length > 160) return `EN demasiado larga: ${value.en.length}/160`;
          return true;
        }),
    }),
    defineField({
      name: 'ogImage',
      title: 'Imagen Open Graph',
      type: 'image',
      description: '1200×630px recomendado',
      options: { hotspot: true },
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'URL canónica (opcional)',
      type: 'url',
      description: 'Solo si difiere de la URL actual',
    }),
    defineField({
      name: 'noindex',
      title: 'Noindex',
      type: 'boolean',
      description: 'Marcar para excluir de buscadores',
      initialValue: false,
    }),
  ],
});
