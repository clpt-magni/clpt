import { defineField, defineType } from "sanity";

export const medicinalGarden = defineType({
  name: "medicinalGarden",
  title: "Medicinal Garden",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "Medicinal Plant Garden",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Introduction",
      type: "text",
      description: "Introductory text for the Medicinal Garden page.",
    }),
    defineField({
      name: "statistics",
      title: "Garden Statistics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value", type: "string" },
            { name: "iconName", title: "Lucide Icon Name", type: "string", description: "e.g., TreePine, Layers, Sprout" },
          ],
        },
      ],
    }),
    defineField({
      name: "objectives",
      title: "Core Objectives",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "plantListRaw",
      title: "Bulk Plant Registry (Pasted Data)",
      type: "text",
      description: "Paste your plant list here using the format: S.No | Botanical Name | Telugu Name | Family | Chemical Constituents | Uses",
    }),
    defineField({
      name: "gallery",
      title: "Botanical Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "gallery.0",
    },
    prepare({ title, media }) {
      return {
        title: title,
        media: media,
      };
    },
  },
});
