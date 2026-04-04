import { defineField, defineType } from 'sanity'

export const placementStats = defineType({
  name: 'placementStats',
  title: 'Placement Statistics',
  type: 'document',
  fields: [
    defineField({
      name: 'academicYear',
      title: 'Academic Year',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., 2024-2025'
    }),
    defineField({
      name: 'program',
      title: 'Program',
      type: 'string',
      options: {
        list: [
          { title: 'B. Pharmacy', value: 'bpharm' },
          { title: 'M. Pharmacy', value: 'mpharm' },
          { title: 'Pharm. D', value: 'pharmd' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'totalStudents',
      title: 'Total Number of Students',
      type: 'number',
    }),
    defineField({
      name: 'noOfIndustries',
      title: 'Number of Industries',
      type: 'number',
    }),
    defineField({
      name: 'noPlaced',
      title: 'Number of Students Placed',
      type: 'number',
    }),
    defineField({
      name: 'higherEducation',
      title: 'Students Opted for Higher Education',
      type: 'number',
      description: 'Only relevant for B. Pharmacy records.',
    }),
    defineField({
      name: 'percentage',
      title: 'Percentage of Students Placed (%)',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      year: 'academicYear',
      program: 'program',
      placed: 'noPlaced'
    },
    prepare({ year, program, placed }) {
      const programs = {
        bpharm: 'B. Pharmacy',
        mpharm: 'M. Pharmacy',
        pharmd: 'Pharm. D'
      }
      return {
        title: `${year} - ${programs[program as keyof typeof programs]}`,
        subtitle: `${placed} Students Placed`
      }
    }
  }
})

export const placementCompany = defineType({
  name: 'placementCompany',
  title: 'Recruiting Company',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      description: 'Upload for high-fidelity branding on the placement portal.',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
})
