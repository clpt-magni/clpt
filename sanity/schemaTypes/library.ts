import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'library',
  title: 'Digital Library',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ 
      name: 'category', 
      title: 'Category', 
      type: 'string',
      options: {
        list: [
          'Pharmaceutics',
          'Pharmacology',
          'Pharmacognosy',
          'Pharmaceutical Chemistry',
          'Pharmacy Practice',
          'Hospital Pharmacy',
          'Regulatory Affairs',
          'Remedial Mathematics',
          'Remedial biology',
          'forensic pharmacy'
        ]
      }
    }),
    defineField({ 
      name: 'file', 
      title: 'PDF File', 
      type: 'file',
      options: { accept: '.pdf' }
    }),
    defineField({ name: 'author', title: 'Author', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
  ],
});
