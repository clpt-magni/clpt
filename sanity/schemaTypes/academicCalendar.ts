import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'academicCalendar',
  title: 'Academic Calendar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Calendar Title',
      type: 'string',
      description: 'e.g., B.Pharmacy 2025-26 I-Semester',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'program',
      title: 'Program',
      type: 'string',
      options: {
        list: [
          { title: 'B.Pharmacy', value: 'b-pharmacy' },
          { title: 'M.Pharmacy', value: 'm-pharmacy' },
          { title: 'Pharm.D', value: 'pharm-d' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'academicYear',
      title: 'Academic Year',
      type: 'string',
      description: 'e.g., 2025-26',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'semester',
      title: 'Semester/Year',
      type: 'string',
      description: 'e.g., I Semester, II Semester, I Year',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'events',
      title: 'Schedule Events',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'description',
              title: 'Event Description',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'dateDisplay',
              title: 'Date(s)',
              type: 'string',
              description: 'e.g., 22-10-2025 or 12-01-2026 To 17-01-2026',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'eventType',
              title: 'Event Category',
              type: 'string',
              options: {
                list: [
                  { title: 'Academic', value: 'academic' },
                  { title: 'Examination', value: 'examination' },
                  { title: 'Holiday', value: 'holiday' },
                  { title: 'Vacation', value: 'vacation' },
                  { title: 'Meeting', value: 'meeting' },
                ],
              },
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'program',
    },
  },
})
