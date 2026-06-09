import { defineField, defineType } from 'sanity'
import { GraduationCap } from 'lucide-react'

export default defineType({
  name: 'studentList',
  title: 'Student List',
  type: 'document',
  // @ts-ignore
  icon: GraduationCap,
  fields: [
    defineField({
      name: 'program',
      title: 'Academic Program',
      type: 'string',
      options: {
        list: [
          { title: 'B.Pharmacy', value: 'B.Pharmacy' },
          { title: 'M.Pharmacy', value: 'M.Pharmacy' },
          { title: 'Pharm.D', value: 'Pharm.D' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'batch',
      title: 'Batch / Academic Year',
      type: 'string',
      description: 'e.g., 2024-2028',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pdfFile',
      title: 'Student List PDF',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'studentDataRaw',
      title: 'Complete Student Table Data (Raw)',
      type: 'text',
      description: 'Format: S.No, REGISTER NO, NAME. Example: 1, Y24BPH0501, Aarla Dhanush 2, Y24BPH0502, Battula Soma Sekhar...',
      rows: 10,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
      description: 'Higher numbers appear first (e.g., for showing latest batches first).',
    }),
  ],
  preview: {
    select: {
      title: 'batch',
      subtitle: 'program',
    },
    prepare({ title, subtitle }) {
      return {
        title: `${subtitle} [${title}]`,
        subtitle: 'Student List Document',
      }
    },
  },
})
