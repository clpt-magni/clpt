import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'attendedActivity',
  title: 'Faculty Attended Activities',
  type: 'document',
  fields: [
    defineField({
      name: 'eventName',
      title: 'Event Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'organizedBy',
      title: 'Organised By',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'section',
      title: 'Section / Category',
      type: 'string',
      options: {
        list: [
          { value: 'seminar', title: 'Seminar/Symposia' },
          { value: 'wdh', title: 'WDH' },
          { value: 'fdp', title: 'FTP/FDP/FEP/STTP' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'faculty',
      title: 'Faculty Attending',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'faculty' }],
        },
      ],
      description: 'Select one or more faculty members who attended this event.',
    }),
  ],
  preview: {
    select: {
      title: 'eventName',
      subtitle: 'organizedBy',
      date: 'date',
    },
    prepare({ title, subtitle, date }) {
      return {
        title: title || 'Unnamed Event',
        subtitle: `${subtitle || 'Unknown organizer'} (${date || 'No date'})`,
      };
    },
  },
});
