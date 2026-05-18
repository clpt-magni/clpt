import { defineField, defineType } from "sanity";

// Helper function to generate standardized image gallery field group for each facility
const makeGalleryField = (name: string, title: string, group: string) => {
  return defineField({
    name,
    title,
    type: "object",
    group,
    fields: [
      defineField({
        name: "images",
        title: "Images / Gallery",
        type: "array",
        of: [{ type: "image", options: { hotspot: true } }],
        description: "Upload images for this section. The first image will be the primary/main image. Subsequent images will be displayed in the bottom gallery list.",
      }),
      defineField({
        name: "caption",
        title: "Optional Caption",
        type: "string",
        description: "An optional short description or note for this facility.",
      }),
    ],
  });
};

export const resourcesGallery = defineType({
  name: "resourcesGallery",
  title: "Resources Gallery (Mega Menu)",
  type: "document",
  groups: [
    { name: "campus", title: "Campus & Infrastructure" },
    { name: "scientific", title: "Scientific & Research" },
    { name: "academic", title: "Academic & Services" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Configuration Title",
      type: "string",
      initialValue: "Resources Gallery Settings",
      description: "Admin panel title for identification.",
      validation: (Rule) => Rule.required(),
    }),

    // ==========================================
    // 1. Campus & Infrastructure Group
    // ==========================================
    makeGalleryField("seminarHall", "Seminar Hall", "campus"),
    makeGalleryField("auditorium", "Auditorium", "campus"),
    makeGalleryField("openAirAuditorium", "Open-Air Auditorium", "campus"),
    makeGalleryField("hostel", "Hostel", "campus"),
    makeGalleryField("canteen", "Canteen", "campus"),
    makeGalleryField("centralStores", "Central Stores", "campus"),
    makeGalleryField("playGround", "Play Ground", "campus"),
    makeGalleryField("sportsFacilities", "Sports Facilities", "campus"),
    makeGalleryField("gymnasium", "Gymnasium", "campus"),
    makeGalleryField("otherFacilities", "Other Facilities", "campus"),

    // ==========================================
    // 2. Scientific & Research Group
    // ==========================================
    defineField({
      name: "laboratories",
      title: "Laboratories (Override)",
      type: "object",
      group: "scientific",
      description: "Note: Laboratories images are dynamically updated using their specific Laboratory documents. Use this field only if you want to override the mega-menu images specifically.",
      fields: [
        defineField({
          name: "images",
          title: "Images / Gallery",
          type: "array",
          of: [{ type: "image", options: { hotspot: true } }],
        }),
        defineField({
          name: "caption",
          title: "Optional Caption",
          type: "string",
        }),
      ],
    }),
    makeGalleryField("cdtl", "Chalapathi Drug Testing Laboratory (CDTL)", "scientific"),
    makeGalleryField("pmbjk", "PMBJK", "scientific"),
    makeGalleryField("businessIncubationCenter", "Business Incubation Center", "scientific"),
    makeGalleryField("msmesIpCenter", "MSMEs IP Center", "scientific"),
    makeGalleryField("simulationLab", "Simulation Lab", "scientific"),
    makeGalleryField("industrialPharmacy", "Industrial Pharmacy", "scientific"),
    makeGalleryField("medicinalGarden", "Medicinal Garden", "scientific"),
    makeGalleryField("drugMuseum", "Drug Museum", "scientific"),
    makeGalleryField("animalHouse", "Animal House", "scientific"),

    // ==========================================
    // 3. Academic & Services Group
    // ==========================================
    makeGalleryField("library", "Library", "academic"),
    makeGalleryField("repositoryService", "Repository Service", "academic"),
    makeGalleryField("pptPresentations", "PPT Presentations", "academic"),
    makeGalleryField("computerLab", "Computer Lab", "academic"),
    makeGalleryField("audioVisualFacility", "Audio-visual facility", "academic"),
    makeGalleryField("studentRecreationCentre", "Student Recreation Centre", "academic"),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Resources Gallery Settings",
      };
    },
  },
});
