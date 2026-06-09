import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skillPartner',
  title: 'Skill Development Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Partner Short Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., APSSDC'
    }),
    defineField({
      name: 'fullName',
      title: 'Partner Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., Andhra Pradesh State Skill Development Corporation'
    }),
    defineField({
      name: 'logo',
      title: 'Partner Logo',
      type: 'image',
      description: 'Upload the official logo for this skill development partner.',
    }),
    defineField({
      name: 'description',
      title: 'Partner Description',
      type: 'text',
      description: 'A brief overview of the partnership and its focus.',
    }),
    defineField({
      name: 'programs',
      title: 'Training Programs',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List specific programs or certifications offered (e.g., Pratyancha Programme).',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'fullName',
      media: 'logo'
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Unnamed Partner',
        subtitle: subtitle || 'No Full Name',
        media
      }
    }
  }
})
