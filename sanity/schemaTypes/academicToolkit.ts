import { defineType, defineField } from 'sanity';

export const academicToolkit = defineType({
  name: 'academicToolkit',
  title: 'Academic Toolkit / Internship Report',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., Internship Training Report',
      initialValue: 'Internship Training Report',
    }),
    defineField({
      name: 'category',
      title: 'Badge / Category Label',
      type: 'string',
      description: 'e.g., Academic Toolkits',
      initialValue: 'Academic Toolkits',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Instructions and details for the students.',
      initialValue:
        'Access the approved template and submission guidelines for the official clinical or industrial pharmacy internship report. Download the template or preview the guide below.',
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF Guide File',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      description: 'Upload the PDF version of the report/guide for in-browser preview and download.',
    }),
    defineField({
      name: 'docxFile',
      title: 'DOCX Template File',
      type: 'file',
      options: {
        accept: '.doc,.docx',
      },
      description: 'Upload the editable Word document template for student download.',
    }),
    defineField({
      name: 'isActive',
      title: 'Display on Home Page',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle whether to display this toolkit banner on the homepage.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
    },
  },
});

export default academicToolkit;
