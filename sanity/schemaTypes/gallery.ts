import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'gallery',
  title: 'Gallery Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Event Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ 
      name: 'images', 
      title: 'Images', 
      type: 'array', 
      of: [{ type: 'image', options: { hotspot: true } }] 
    }),
  ],
});
