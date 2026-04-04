import { defineField, defineType } from "sanity";

export default defineType({
  name: "program",
  title: "Academic Programs",
  type: "document",
  groups: [
    { name: "header", title: "Header & Hero" },
    { name: "content", title: "Program Content" },
    { name: "admissions", title: "Eligibility & Admissions" },
    { name: "branding", title: "Visual Branding" },
  ],
  fields: [
    // Header & Hero Group
    defineField({
      name: "title",
      title: "Program Title",
      type: "string",
      group: "header",
      description: "The full name of the academic program (e.g., Bachelor of Pharmacy).",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "header",
      description: "Unique URL identifier. Click 'Generate' to create from title.",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Program Type",
      type: "string",
      group: "header",
      options: {
        list: [
          { title: "Undergraduate (UG)", value: "ug" },
          { title: "Postgraduate (PG)", value: "pg" },
          { title: "Doctoral (Ph.D)", value: "phd" },
          { title: "Diploma", value: "diploma" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Hero Description",
      type: "text",
      group: "header",
      rows: 3,
      description: "A brief, punchy overview shown in the blue hero section.",
    }),
    defineField({
      name: "duration",
      title: "Course Duration",
      type: "string",
      group: "header",
      placeholder: "e.g., 4 Years / 2 Years",
    }),
    defineField({
      name: "intake",
      title: "Annual Intake",
      type: "string",
      group: "header",
      placeholder: "e.g., 60 / 100",
    }),

    // Program Content Group
    defineField({
      name: "detailedDescription",
      title: "Full Program Overview",
      type: "array",
      group: "content",
      description: "Detailed information about the program, curriculum, and objectives.",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "subjects",
      title: "Core Subjects / Focus Areas",
      type: "array",
      group: "content",
      description: "List the main subjects or research areas covered in this program.",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "specializations",
      title: "Available Specializations",
      type: "array",
      group: "content",
      description: "Specific branches or specializations offered (mostly for M.Pharm/PG).",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "careerProspects",
      title: "Career Opportunities",
      type: "array",
      group: "content",
      description: "List potential career paths for graduates of this program.",
      of: [{ type: "string" }],
    }),

    // Admissions Group
    defineField({
      name: "eligibility",
      title: "Eligibility Criteria",
      type: "array",
      group: "admissions",
      description: "Detailed educational requirements (Rich Text).",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "admissionCriteria",
      title: "Admission Requirements",
      type: "array",
      group: "admissions",
      description: "Specific points for admission (e.g., Entrance Exam ranks, Counselling process).",
      of: [{ type: "string" }],
    }),

    // Visual Branding Group
    defineField({
      name: "image",
      title: "Featured Program Image",
      type: "image",
      group: "branding",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "theme",
      title: "Custom Theme Colors",
      type: "object",
      group: "branding",
      description: "Fine-tune the visual appearance for this specific program page.",
      fields: [
        defineField({ name: "primaryColor", title: "Accent Color", type: "color" }),
        defineField({ name: "secondaryColor", title: "Secondary Color", type: "color" }),
        defineField({ name: "backgroundColor", title: "Hero Background Overwrite", type: "color" }),
      ],
      options: {
        columns: 2,
      }
    }),
  ],
});
