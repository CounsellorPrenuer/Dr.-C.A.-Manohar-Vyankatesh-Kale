import { defineField, defineType } from 'sanity';

export const founderType = defineType({
  name: 'founder',
  title: 'Founder Details',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string' }),
    defineField({ name: 'title', title: 'Job Title', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio', type: 'text' }),
    defineField({ name: 'experience', title: 'Experience', type: 'text' }),
    defineField({ name: 'achievements', title: 'Achievements', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'philosophy', title: 'Philosophy', type: 'text' }),
    defineField({ name: 'image', title: 'Profile Image', type: 'image', options: { hotspot: true } }),
  ],
});
