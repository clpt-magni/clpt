import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'academicCalendar',
  title: 'Academic Calendar',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Academic Year',
      type: 'string',
      description: 'e.g., 2025-26',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pdfs',
      title: 'Calendar PDFs',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'calendarPdf',
          title: 'Calendar PDF',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'e.g., B.Pharmacy, M.Pharmacy, Pharm.D',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'pdfFile',
              title: 'PDF File',
              type: 'file',
              options: {
                accept: '.pdf',
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'year',
    },
  },
})
