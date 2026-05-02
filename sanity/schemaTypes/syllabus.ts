import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'syllabus',
  title: 'Course Syllabus',
  type: 'document',
  fields: [
    defineField({
      name: 'program',
      title: 'Program / Department',
      type: 'string',
      options: {
        list: [
          { title: 'B.Pharmacy', value: 'B.Pharmacy' },
          { title: 'M.Pharmacy', value: 'M.Pharmacy' },
          { title: 'Pharm.D', value: 'Pharm.D' }
        ]
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Syllabus/Course Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., B-Pharmacy Curriculum',
    }),
    defineField({
      name: 'batch',
      title: 'Batch / Year Details',
      type: 'string',
      description: 'e.g., w.e.f 2026 EAMCET Batch',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Syllabus Document File (URL or static path)',
      type: 'string',
      description: 'e.g., /documents/syllabus/b-pharm-2026.pdf',
      validation: (Rule) => Rule.required(),
    })
  ],
  preview: {
    select: {
      title: 'title',
      program: 'program',
      batch: 'batch'
    },
    prepare({ title, program, batch }) {
      return {
        title: `${program}: ${title}`,
        subtitle: batch || 'All batches',
      };
    },
  },
});
