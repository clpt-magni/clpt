import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN,
});

const syllabusData = [
  {
    program: "B.Pharmacy",
    items: [
      {
        title: "B-Pharmacy Curriculum",
        batch: "w.e.f 2026 EAMCET Batch",
        url: "/documents/syllabus/b-pharm-2026.pdf"
      },
      {
        title: "B-Pharmacy Curriculum",
        batch: "w.e.f 2017 EAMCET Batch",
        url: "/documents/syllabus/b-pharm-2017.pdf"
      },
      {
        title: "B-Pharmacy Curriculum",
        batch: "w.e.f 2016 EAMCET Batch",
        url: "/documents/syllabus/b-pharm-2016.pdf"
      },
      {
        title: "B-Pharmacy Curriculum",
        batch: "w.e.f 2013 EAMCET Batch",
        url: "/documents/syllabus/b-pharm-2013.pdf"
      },
    ]
  },
  {
    program: "M.Pharmacy",
    items: [
      {
        title: "M-Pharmacy Curriculum",
        batch: "w.e.f 2017 EAMCET Batch",
        url: "/documents/syllabus/m-pharm-2017.pdf"
      },
    ]
  },
  {
    program: "Pharm.D",
    items: [
      { title: "Pharmacotherapeutics I & II", batch: "Special Subject", url: "/documents/syllabus/pharm-d-pharmacotherapeutics.pdf" },
      { title: "Pharm.D - First Year", batch: "Academic Year 1", url: "/documents/syllabus/pharm-d-y1.pdf" },
      { title: "Pharm.D - Second Year", batch: "Academic Year 2", url: "/documents/syllabus/pharm-d-y2.pdf" },
      { title: "Pharm.D - Third Year", batch: "Academic Year 3", url: "/documents/syllabus/pharm-d-y3.pdf" },
      { title: "Pharm.D - Fourth Year", batch: "Academic Year 4", url: "/documents/syllabus/pharm-d-y4.pdf" },
      { title: "Pharm.D - Fifth Year", batch: "Academic Year 5", url: "/documents/syllabus/pharm-d-y5.pdf" },
    ]
  }
];

async function seedSyllabus() {
  console.log('Seeding Course Syllabus into Sanity...');

  for (const prog of syllabusData) {
    for (const item of prog.items) {
      const doc = {
        _type: 'syllabus',
        program: prog.program,
        title: item.title,
        batch: item.batch,
        url: item.url,
      };

      try {
        const result = await client.create(doc);
        console.log(`Created syllabus for ${prog.program}: ${item.title} (${item.batch}) - ID: ${result._id}`);
      } catch (err) {
        console.error(`Failed to create syllabus document for ${prog.program}`, err);
      }
    }
  }

  console.log('Finished seeding Syllabus.');
}

seedSyllabus();
