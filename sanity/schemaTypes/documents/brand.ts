import { defineType, defineField } from 'sanity';
import { TagIcon } from '@sanity/icons';

export const brand = defineType({
  name: 'brand',
  title: 'Marca',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({ name: 'name', title: 'Nombre', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { accept: '.svg,.png' } }),
    defineField({ name: 'logoLight', title: 'Logo (versión clara)', type: 'image' }),
    defineField({ name: 'description', title: 'Descripción', type: 'localeText' }),
  ],
  preview: { select: { title: 'name', media: 'logo' } },
});
