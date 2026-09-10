import { defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'brandName', title: 'Brand Name', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'email', title: 'Email Address', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp Number', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'text' }),
    defineField({ name: 'linkedin', title: 'LinkedIn Profile', type: 'url' }),
    defineField({ name: 'instagram', title: 'Instagram Profile', type: 'string' }),
    defineField({ name: 'facebook', title: 'Facebook Profile', type: 'url' }),
    defineField({ name: 'youtube', title: 'YouTube Profile', type: 'url' }),
    defineField({ name: 'twitter', title: 'Twitter/X Profile', type: 'url' }),
    defineField({ name: 'primaryCta', title: 'Primary CTA Text', type: 'string' }),
    defineField({ name: 'footerText', title: 'Footer Description', type: 'text' }),
    defineField({
      name: 'seo',
      title: 'Default SEO',
      type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),
        defineField({ name: 'ogImage', title: 'Open Graph Image', type: 'image' }),
      ],
    }),
  ],
});
