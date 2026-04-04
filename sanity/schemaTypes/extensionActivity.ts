import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'extensionActivity',
  title: 'Extension Activity',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Chapter Name',
      type: 'string',
      description: 'e.g., NSS UNIT - I, IPA-Lam Local Branch, etc.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'NSS', value: 'nss' },
          { title: 'IPA', value: 'ipa' },
          { title: 'ISPOR', value: 'ispor' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'logo',
      title: 'Chapter Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Main introduction text for this chapter.',
    }),
    defineField({
      name: 'activities',
      title: 'Summary of Activities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'date', title: 'Date', type: 'string' }),
            defineField({ name: 'name', title: 'Activity Name', type: 'string' }),
            defineField({ name: 'place', title: 'Place', type: 'string' }),
            defineField({ name: 'participants', title: 'Faculty & Students', type: 'string' }),
            defineField({ name: 'beneficiaries', title: 'Beneficiaries', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'documents',
      title: 'Associated Documents',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Document Label', type: 'string' }),
            defineField({ name: 'file', title: 'PDF File', type: 'file' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Activity Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],
});
