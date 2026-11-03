import { defineType, defineField } from 'sanity';
import { CaseIcon } from '@sanity/icons';

export const car = defineType({
  name: 'car',
  title: 'Vehículo',
  type: 'document',
  icon: CaseIcon,
  groups: [
    { name: 'identity', title: 'Identificación', default: true },
    { name: 'specs', title: 'Especificaciones' },
    { name: 'content', title: 'Contenido' },
    { name: 'media', title: 'Imágenes' },
    { name: 'rental', title: 'Alquiler' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // Identity
    defineField({ name: 'name', title: 'Nombre', type: 'localeString', group: 'identity', validation: (Rule) => Rule.required() }),
    defineField({ name: 'internalId', title: 'ID interno', type: 'string', group: 'identity', description: 'Ej: car-001', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug URL', type: 'slug', group: 'identity', options: { source: 'name.es' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'brand', title: 'Marca', type: 'reference', to: [{ type: 'brand' }], group: 'identity', validation: (Rule) => Rule.required() }),
    defineField({ name: 'model', title: 'Modelo', type: 'string', group: 'identity', validation: (Rule) => Rule.required() }),
    defineField({ name: 'variant', title: 'Variante', type: 'string', group: 'identity' }),
    defineField({ name: 'year', title: 'Año', type: 'number', group: 'identity', validation: (Rule) => Rule.min(2000).max(2030) }),
    defineField({ name: 'category', title: 'Categoría', type: 'reference', to: [{ type: 'carCategory' }], group: 'identity', validation: (Rule) => Rule.required() }),

    // Specs
    defineField({ name: 'passengers', title: 'Pasajeros', type: 'number', group: 'specs', validation: (Rule) => Rule.required().min(1).max(12) }),
    defineField({ name: 'doors', title: 'Puertas', type: 'number', group: 'specs', validation: (Rule) => Rule.required().min(2).max(7) }),
    defineField({ name: 'lateralDoors', title: 'Puertas laterales automáticas', type: 'boolean', group: 'specs', initialValue: false }),
    defineField({
      name: 'transmission', title: 'Transmisión', type: 'string', group: 'specs',
      options: { list: [{ title: 'Automático', value: 'automatic' }, { title: 'Manual', value: 'manual' }], layout: 'radio' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'gearbox', title: 'Caja de cambios (detalle)', type: 'string', group: 'specs', description: 'Ej: 9G-TRONIC' }),
    defineField({
      name: 'fuel', title: 'Combustible', type: 'string', group: 'specs',
      options: { list: [{ title: 'Diésel', value: 'diesel' }, { title: 'Gasolina', value: 'gasolina' }, { title: 'Híbrido', value: 'hibrido' }, { title: 'Eléctrico', value: 'electrico' }], layout: 'radio' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'power', title: 'Potencia (CV)', type: 'number', group: 'specs' }),
    defineField({ name: 'luggage', title: 'Maletero (litros)', type: 'number', group: 'specs' }),
    defineField({ name: 'colorExterior', title: 'Color exterior', type: 'localeString', group: 'specs' }),
    defineField({ name: 'colorInterior', title: 'Interior', type: 'localeString', group: 'specs' }),
    defineField({ name: 'wheels', title: 'Llantas', type: 'string', group: 'specs' }),

    // Rental conditions
    defineField({ name: 'minAge', title: 'Edad mínima conductor', type: 'number', group: 'rental', initialValue: 26, validation: (Rule) => Rule.required().min(18) }),
    defineField({ name: 'minLicenseYears', title: 'Años mínimos de carnet', type: 'number', group: 'rental', initialValue: 2, validation: (Rule) => Rule.required().min(0) }),
    defineField({ name: 'kmIncluded', title: 'Km incluidos por día', type: 'number', group: 'rental', initialValue: 250, validation: (Rule) => Rule.required().min(0) }),
    defineField({ name: 'kmExtraPrice', title: 'Precio km adicional (€)', type: 'number', group: 'rental', initialValue: 0.5, validation: (Rule) => Rule.required().min(0) }),

    // Content
    defineField({ name: 'shortDescription', title: 'Descripción corta', type: 'localeText', group: 'content', validation: (Rule) => Rule.required() }),
    defineField({ name: 'fullDescription', title: 'Descripción completa', type: 'localeBlockContent', group: 'content', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'features', title: 'Características', type: 'array', group: 'content',
      of: [{ type: 'localeString' }],
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: 'faqs', title: 'Preguntas frecuentes', type: 'array', group: 'content',
      of: [{ type: 'reference', to: [{ type: 'faq' }] }],
    }),

    // Media
    defineField({ name: 'mainImage', title: 'Imagen principal', type: 'imageWithAlt', group: 'media', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'gallery', title: 'Galería', type: 'array', group: 'media',
      of: [{ type: 'imageWithAlt' }],
      validation: (Rule) => Rule.required().min(3),
    }),

    // SEO
    defineField({ name: 'seo', title: 'SEO', type: 'seoFields', group: 'seo', validation: (Rule) => Rule.required() }),
  ],
  preview: {
    select: { title: 'name.es', subtitle: 'model', media: 'mainImage.asset' },
    prepare({ title, subtitle, media }) {
      return { title: title ?? '(sin nombre)', subtitle, media };
    },
  },
});
