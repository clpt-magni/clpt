export default {
  name: "institutionalBody",
  title: "Institutional Body",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
      description: "A short professional summary of the committee/body.",
    },
    {
      name: "description",
      title: "Description / Composition / Functions",
      type: "array",
      of: [{ type: "block" }],
      description: "Detailed description of functions, composition, and terms.",
    },
    {
      name: "term",
      title: "Term Limit / Rules",
      type: "text",
    },
    {
      name: "membersList",
      title: "Members List (Structured)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "category",
              title: "Category Name",
              type: "string",
              description: "e.g., Institutional Members & Leadership",
            },
            {
              name: "members",
              title: "Members",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
      description: "Structured list of members to be displayed on the page.",
    },
    {
      name: "membersFile",
      title: "Members List (PDF)",
      type: "file",
      description: "Upload a PDF document of the members.",
    },
    {
      name: "meetingCategories",
      title: "Meeting Categories / Departments",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "categoryName",
              title: "Category / Department Name",
              type: "string",
            },
            {
              name: "meetings",
              title: "Meetings",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "meetingTitle",
                      title: "Meeting Title (e.g. 1st Meeting)",
                      type: "string",
                    },
                    {
                      name: "meetingFile",
                      title: "Meeting PDF File",
                      type: "file",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      description: "Group meetings by category (e.g. Pharmaceutics, Pharmacognosy) or just create one general category.",
    },
  ],
};
