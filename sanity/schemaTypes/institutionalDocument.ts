import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'institutionalDocument',
  title: 'Institutional Documents',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., AICTE Approval Report 2023-24',
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
          { title: 'AICTE Reports', value: 'aicte' },
          { title: 'Audit Reports', value: 'audit' },
          { title: 'PCI Approvals', value: 'pci' },
          { title: 'NIRF Data', value: 'nirf' },
          { title: 'RTI', value: 'rti' },
          { title: 'UGC Undertaking', value: 'ugc' },
          { title: 'Newsletters', value: 'newsletter' },
          { title: 'Other Reports', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'academicYear',
      title: 'Academic Year',
      type: 'string',
      description: 'e.g., 2023-2024',
    }),
    defineField({
      name: 'file',
      title: 'Document File (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
    }),
    defineField({
      name: 'description',
      title: 'Brief Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      year: 'academicYear',
    },
    prepare({ title, category, year }) {
      return {
        title: title,
        subtitle: `${category.toUpperCase()} | ${year || 'N/A'}`,
      };
    },
  },
});
