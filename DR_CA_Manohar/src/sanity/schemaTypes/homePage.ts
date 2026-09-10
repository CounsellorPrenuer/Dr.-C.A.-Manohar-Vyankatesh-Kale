import { defineField, defineType } from 'sanity';

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroHeading', title: 'Hero Heading', type: 'string' }),
    defineField({ name: 'heroDescription', title: 'Hero Description', type: 'text' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'ctaText', title: 'Hero CTA Text', type: 'string' }),
    defineField({ name: 'introTitle', title: 'Introduction Title', type: 'string' }),
    defineField({ name: 'introText', title: 'Introduction Text', type: 'text' }),
  ],
});
