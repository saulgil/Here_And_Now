import { defineType, defineField } from 'sanity';

export const localeText = defineType({
  name: 'localeText',
  title: 'Texto largo (ES/EN)',
  type: 'object',
  options: { collapsible: false },
  fields: [
    defineField({
      name: 'es',
      title: 'Español',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'en',
      title: 'English',
      type: 'text',
      rows: 4,
    }),
  ],
});
