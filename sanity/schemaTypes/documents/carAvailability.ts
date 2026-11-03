import { defineType, defineField } from 'sanity';
import { CalendarIcon } from '@sanity/icons';

export const carAvailability = defineType({
  name: 'carAvailability',
  title: 'Disponibilidad de vehículo',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({ name: 'car', title: 'Vehículo', type: 'reference', to: [{ type: 'car' }], validation: (Rule) => Rule.required() }),
    defineField({ name: 'location', title: 'Destino', type: 'reference', to: [{ type: 'location' }], validation: (Rule) => Rule.required() }),
    defineField({
      name: 'isActive', title: 'Activo', type: 'boolean', initialValue: false,
      description: 'Solo los activos aparecen en la web. Prepara la disponibilidad antes de activarla.',
    }),
    defineField({
      name: 'pricePerDay', title: 'Precio por día (€)', type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'currency', title: 'Moneda', type: 'string',
      options: { list: [{ title: 'Euro (€)', value: 'EUR' }] },
      initialValue: 'EUR',
    }),
    defineField({
      name: 'availablePickupPoints', title: 'Puntos de recogida activos', type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pickupPoint' }] }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'extras', title: 'Extras disponibles', type: 'array',
      of: [{ type: 'extra' }],
    }),
    defineField({
      name: 'coverages', title: 'Coberturas', type: 'array',
      of: [{ type: 'coverage' }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: { car: 'car.name.es', location: 'location.name.es', price: 'pricePerDay', active: 'isActive' },
    prepare({ car, location, price, active }) {
      return {
        title: `${car ?? '?'} — ${location ?? '?'}`,
        subtitle: `${active ? '🟢' : '🔴'} ${price ? `${price}€/día` : 'Sin precio'}`,
      };
    },
  },
});
