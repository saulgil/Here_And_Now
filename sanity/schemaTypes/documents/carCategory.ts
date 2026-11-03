import { defineType, defineField } from 'sanity';
import { ThListIcon } from '@sanity/icons';

export const carCategory = defineType({
  name: 'carCategory',
  title: 'Categoría de vehículo',
  type: 'document',
  icon: ThListIcon,
  fields: [
    defineField({ name: 'name', title: 'Nombre', type: 'localeString', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name.es' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', title: 'Descripción', type: 'localeText' }),
    defineField({ name: 'icon', title: 'Icono (Lucide)', type: 'string', description: 'Nombre del icono de Lucide React, ej: "Car"' }),
    defineField({ name: 'order', title: 'Orden de visualización', type: 'number', initialValue: 0 }),
  ],
  preview: { select: { title: 'name.es' } },
  orderings: [{ title: 'Orden', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
});
