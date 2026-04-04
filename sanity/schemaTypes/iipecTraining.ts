import { defineField, defineType } from "sanity";

export const iipecTraining = defineType({
  name: "iipecTraining",
  title: "IIPEC Industrial Training",
  type: "document",
  fields: [
    defineField({
      name: "academicYear",
      title: "Academic Year",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "e.g., 2023-2024",
    }),
    defineField({
      name: "batch",
      title: "Batch",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "e.g., 2020-2024",
    }),
    defineField({
      name: "totalStudents",
      title: "Total Students Mapped",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "records",
      title: "Training Placements",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "companyName",
              title: "Company Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "dateFrom",
              title: "Start Date",
              type: "string",
            }),
            defineField({
              name: "dateTo",
              title: "End Date",
              type: "string",
            }),
            defineField({
              name: "noOfStudents",
              title: "Number of Students",
              type: "number",
              validation: (Rule) => Rule.min(0),
            }),
          ],
          preview: {
            select: {
              title: "companyName",
              subtitle: "noOfStudents",
            },
            prepare({ title, subtitle }) {
              return {
                title,
                subtitle: `Students: ${subtitle || 0}`,
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "academicYear",
      subtitle: "batch",
    },
    prepare({ title, subtitle }) {
      return {
        title: `Academic Year: ${title}`,
        subtitle: `Batch: ${subtitle}`,
      };
    },
  },
});
