import { defineField, defineType } from "sanity";

export const department = defineType({
  name: "department",
  title: "Academic Department",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Department Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "e.g., Pharmaceutics, Pharmaceutical Analysis, Pharmacology, Pharmacy Practice",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Sorting priority (e.g. 1, 2, 3, 4)",
      initialValue: 10,
    }),
    defineField({
      name: "icon",
      title: "Icon Identifier",
      type: "string",
      options: {
        list: [
          { title: "Flask / Conical (Pharmaceutics)", value: "FlaskConical" },
          { title: "Microscope (Pharmaceutical Analysis)", value: "Microscope" },
          { title: "Activity / Pulse (Pharmacology)", value: "Activity" },
          { title: "Stethoscope (Pharmacy Practice)", value: "Stethoscope" },
          { title: "Pill / Capsule", value: "Pill" },
        ],
      },
      initialValue: "FlaskConical",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      description: "Overview and focus areas of the department.",
    }),
    defineField({
      name: "vision",
      title: "Vision Statement",
      type: "text",
      rows: 3,
      description: "Vision statement of the department.",
    }),
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
      description: "Official department email address (e.g., clptceutics@gmail.com)",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "email",
    },
  },
});

export default department;
