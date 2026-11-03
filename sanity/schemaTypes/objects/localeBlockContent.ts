import { defineType, defineField } from 'sanity';

const blockContent = {
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
      ],
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong' },
          { title: 'Italic', value: 'em' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Enlace',
            fields: [
              { name: 'href', type: 'url', title: 'URL' },
              { name: 'blank', type: 'boolean', title: 'Abrir en nueva pestaña' },
            ],
          },
        ],
      },
    },
    { type: 'image' },
  ],
};

export const localeBlockContent = defineType({
  name: 'localeBlockContent',
  title: 'Contenido enriquecido (ES/EN)',
  type: 'object',
  options: { collapsible: true, collapsed: false },
  fields: [
    defineField({ name: 'es', title: 'Español', ...blockContent, validation: (Rule) => Rule.required() }),
    defineField({ name: 'en', title: 'English', ...blockContent }),
  ],
});
