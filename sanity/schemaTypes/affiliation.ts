export default {
  name: "affiliation",
  title: "Affiliation & Approvals Document",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      description: "e.g., Affiliations, Recognitions & Approvals",
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "approvals",
      title: "List of Approvals",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Approval Title",
              type: "string",
              description: "e.g., Extension of Autonomous status by UGC",
            },
            {
              name: "document",
              title: "Document (PDF)",
              type: "file",
            },
          ],
        },
      ],
    },
  ],
};
