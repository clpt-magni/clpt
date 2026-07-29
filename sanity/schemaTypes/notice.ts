import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'notice',
  title: 'Notice',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'date', title: 'Date', type: 'date' }),
    defineField({ name: 'content', title: 'Content', type: 'text' }),
    defineField({ 
      name: 'priority', 
      title: 'Priority', 
      type: 'string',
      options: { list: ['Normal', 'Low', 'Medium', 'High'] },
      initialValue: 'Normal'
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Examination', value: 'examination' },
          { title: 'Admissions', value: 'admissions' },
          { title: 'Academic', value: 'academic' },
          { title: 'Research', value: 'research' },
          { title: 'General', value: 'general' },
        ]
      }
    }),
    defineField({
      name: 'link',
      title: 'External Link / URL',
      type: 'url',
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF Attachment',
      type: 'file',
      options: {
        accept: '.pdf'
      }
    }),
  ],
});
