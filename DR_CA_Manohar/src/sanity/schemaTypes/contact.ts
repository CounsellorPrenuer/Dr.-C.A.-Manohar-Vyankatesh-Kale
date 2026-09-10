import { defineField, defineType } from 'sanity';

export const contactType = defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({ name: 'email', title: 'Email Address', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp Number', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'text' }),
    defineField({ name: 'linkedin', title: 'LinkedIn Link', type: 'url' }),
    defineField({ name: 'instagram', title: 'Instagram Link', type: 'url' }),
    defineField({ name: 'facebook', title: 'Facebook Link', type: 'url' }),
    defineField({ name: 'twitter', title: 'Twitter Link', type: 'url' }),
  ],
});
