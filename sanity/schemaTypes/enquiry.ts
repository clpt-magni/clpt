import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'enquiry',
  title: 'Admissions Enquiry',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'email', title: 'Email Address', type: 'string' }),
    defineField({ name: 'program', title: 'Interested Program', type: 'string' }),
    defineField({ name: 'stream', title: 'Intermediate Stream', type: 'string' }),
    defineField({ name: 'state', title: 'State / Region', type: 'string' }),
    defineField({ name: 'query', title: 'Message / Query', type: 'text' }),
    defineField({ name: 'submittedAt', title: 'Submitted At', type: 'datetime' }),
  ],
});
