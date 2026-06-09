import { defineField, defineType } from "sanity";

export const laboratory = defineType({
  name: "laboratory",
  title: "Laboratory",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Laboratory Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "e.g., PHARMACEUTICAL CHEMISTRY LABORATORY (UG)",
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
      name: "roomNo",
      title: "Room Number",
      type: "string",
      description: "e.g., 204",
    }),
    defineField({
      name: "area",
      title: "Area (sq.m)",
      type: "string",
      description: "e.g., 105.60 sq.m",
    }),
    defineField({
      name: "instruments",
      title: "List of Instruments",
      type: "text",
      description: "Comma-separated list (e.g., Digital weighing balance, Micro Wave Synthesizer)",
    }),
    defineField({
      name: "facilities",
      title: "Facilities",
      type: "text",
      description: "Comma-separated list (e.g., Intercom facility, Water supply, Drainage system)",
    }),
    defineField({
      name: "gallery",
      title: "Lab Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      description: "Upload high-quality images of the laboratory.",
    }),
    defineField({
      name: "manual",
      title: "Laboratory Manual (PDF)",
      type: "file",
      options: {
        accept: ".pdf",
      },
      description: "Upload the lab manual or detailed documentation.",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "roomNo",
      media: "gallery.0",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title,
        subtitle: subtitle ? `Room: ${subtitle}` : "",
        media: media,
      };
    },
  },
});
