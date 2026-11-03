import { defineType, defineField } from 'sanity';
import { PinIcon as LocationIcon } from '@sanity/icons';

export const pickupPoint = defineType({
  name: 'pickupPoint',
  title: 'Punto de recogida',
  type: 'document',
  icon: LocationIcon,
  fields: [
    defineField({ name: 'name', title: 'Nombre', type: 'localeString', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug URL', type: 'slug', options: { source: 'name.es' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'location', title: 'Destino padre', type: 'reference', to: [{ type: 'location' }], validation: (Rule) => Rule.required() }),
    defineField({ name: 'address', title: 'Dirección', type: 'string' }),
    defineField({ name: 'coordinates', title: 'Coordenadas', type: 'geopoint' }),
    defineField({ name: 'phone', title: 'Teléfono', type: 'string' }),
    defineField({ name: 'openingHours', title: 'Horario', type: 'array', of: [{ type: 'openingHours' }] }),
    defineField({ name: 'shortDescription', title: 'Descripción corta', type: 'localeText', validation: (Rule) => Rule.required() }),
    defineField({ name: 'fullDescription', title: 'Descripción completa', type: 'localeBlockContent' }),
    defineField({ name: 'instructions', title: 'Instrucciones de recogida', type: 'localeBlockContent' }),
    defineField({ name: 'image', title: 'Foto del punto', type: 'imageWithAlt' }),
    defineField({ name: 'seo', title: 'SEO', type: 'seoFields', validation: (Rule) => Rule.required() }),
  ],
  preview: {
    select: { title: 'name.es', subtitle: 'location.name.es', media: 'image.asset' },
    prepare({ title, subtitle, media }) {
      return { title, subtitle: subtitle ? `📍 ${subtitle}` : '', media };
    },
  },
});
