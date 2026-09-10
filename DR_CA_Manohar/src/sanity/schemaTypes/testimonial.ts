import { defineField, defineType } from 'sanity';

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Client Name', type: 'string' }),
    defineField({ name: 'image', title: 'Client Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'quote', title: 'Quote/Text', type: 'text' }),
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
