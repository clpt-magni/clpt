import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'date', title: 'Date', type: 'datetime' }),
    defineField({ name: 'description', title: 'Brief Description', type: 'text' }),
    defineField({ name: 'content', title: 'Full Content', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'image', title: 'Featured Image', type: 'image', options: { hotspot: true } }),
  ],
});
