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
      options: { list: ['Low', 'Medium', 'High'] }
    }),
  ],
});
