import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'publication',
  title: 'Research Publication',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Publication Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(2000).max(2030),
    }),
    defineField({
      name: 'title',
      title: 'Yearly Summary Title',
      type: 'string',
      initialValue: 'SUMMARY OF RESEARCH AND REVIEW PUBLICATIONS',
    }),
    defineField({
      name: 'summaryPdf',
      title: 'Full Summary PDF',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      description: 'Upload the comprehensive summary document for this year.',
    }),
    defineField({
      name: 'articles',
      title: 'Individual Research Articles',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'articleRecord',
          fields: [
            { name: 'slNo', type: 'string', title: 'Serial Number' },
            { name: 'description', type: 'text', title: 'Full Bibliographic Entry', rows: 3 },
            { name: 'impactFactor', type: 'string', title: 'Impact Factor' },
          ],
          preview: {
            select: {
              title: 'description',
              subtitle: 'slNo',
            },
            prepare({ title, subtitle }) {
              return {
                title: title ? title.substring(0, 50) + '...' : 'No Title',
                subtitle: `SL.NO: ${subtitle}`,
              }
            }
          }
        }
      ],
      description: 'Historical data for detailed table viewing.',
    }),
  ],
  orderings: [
    {
      title: 'Year, Newest First',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      year: 'year',
      title: 'title',
    },
    prepare({ year, title }) {
      return {
        title: `${year} - ${title}`,
      }
    },
  },
})
