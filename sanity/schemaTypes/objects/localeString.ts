import { defineType, defineField } from 'sanity';

export const localeString = defineType({
  name: 'localeString',
  title: 'Texto (ES/EN)',
  type: 'object',
  options: { collapsible: false },
  fields: [
    defineField({
      name: 'es',
      title: 'Español',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'en',
      title: 'English',
      type: 'string',
    }),
  ],
});
