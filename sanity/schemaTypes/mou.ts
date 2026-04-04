import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'mou',
  title: 'MOU (Memorandum of Understanding)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Partner Institution/Industry Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'serialNumber',
      title: 'Serial Number',
      type: 'number',
      description: 'Used for ordering the MOU list.',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Academic', value: 'academic' },
          { title: 'Industrial', value: 'industrial' },
          { title: 'International', value: 'international' },
          { title: 'Government', value: 'government' },
          { title: 'Research', value: 'research' },
          { title: 'Others', value: 'others' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief details about the nature of the MOU.',
    }),
    defineField({
      name: 'date',
      title: 'MOU Date',
      type: 'date',
      description: 'The date the MOU was signed.',
    }),
    defineField({
      name: 'expiryDate',
      title: 'Expiry Date',
      type: 'date',
      description: 'Optional date for when the MOU expires.',
    }),
    defineField({
      name: 'document',
      title: 'MOU Document (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      description: 'Upload the official MOU document. A "View MOU" button will only appear if this is provided.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? subtitle.charAt(0).toUpperCase() + subtitle.slice(1) : 'No Category',
      }
    },
  },
})
