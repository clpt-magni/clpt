import { defineField, defineType } from 'sanity'
import { Landmark } from 'lucide-react'

export default defineType({
  name: 'feeStructure',
  title: 'Fee Structure',
  type: 'document',
  // @ts-ignore
  icon: Landmark,
  fields: [
    defineField({
      name: 'academicYear',
      title: 'Academic Year',
      type: 'string',
      description: 'e.g., 2024-2025',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'programs',
      title: 'Program Fee Breakdown',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Program Name',
              type: 'string',
              options: {
                list: [
                  { title: 'B.Pharmacy', value: 'B.Pharmacy' },
                  { title: 'Pharm.D', value: 'Pharm.D' },
                  { title: 'M.Pharmacy', value: 'M.Pharmacy' },
                ],
              },
            }),
            defineField({
              name: 'intake',
              title: 'Sanctioned Intake',
              type: 'string',
              description: 'e.g., 100',
            }),
            defineField({
              name: 'categoryB',
              title: 'Category "B" Seats',
              type: 'string',
              description: 'e.g., 30',
            }),
            defineField({
              name: 'tuitionFee',
              title: 'Tuition Fee (Convenor Category-A)',
              type: 'string',
              description: 'e.g., 77,500/-',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'applicationFee',
      title: 'Application Fee',
      type: 'string',
      initialValue: 'Rs.500/-',
    }),
    defineField({
      name: 'applicationDetails',
      title: 'Application Details',
      type: 'text',
      description: 'Place for obtaining application form and other instructions.',
    }),
    defineField({
      name: 'notes',
      title: 'Additional Notes',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: {
      title: 'academicYear',
    },
    prepare({ title }) {
      return {
        title: `Fee Structure [${title}]`,
        subtitle: 'Institutional Fee Policy',
      }
    },
  },
})
