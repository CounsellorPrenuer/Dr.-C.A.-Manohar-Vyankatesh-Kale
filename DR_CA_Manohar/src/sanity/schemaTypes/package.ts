import { defineField, defineType } from 'sanity';

export const packageType = defineType({
  name: 'package',
  title: 'Mentoria Package',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Package Name', type: 'string' }),
    defineField({ name: 'image', title: 'Package Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'price', title: 'Price', type: 'string' }),
    defineField({ name: 'duration', title: 'Duration', type: 'string' }),
    defineField({ name: 'sessions', title: 'Sessions', type: 'string' }),
    defineField({ name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'targetAudience', title: 'Target Audience', type: 'string' }),
    defineField({ name: 'order', title: 'Order', type: 'number', initialValue: 0 }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
