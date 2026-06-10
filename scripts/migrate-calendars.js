const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'vpfov1jc',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-10-01',
  token: process.env.SANITY_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
});

const LEGACY_CALENDARS = [
  {
    year: "2025-26",
    links: [
      { label: "B.Pharmacy", href: "/pdfs/academic-calendar/cal25-26/AC 2025-26 B.Pharmacy.pdf" },
      { label: "M.Pharmacy", href: "/pdfs/academic-calendar/cal25-26/AC 2025-26 M.Pharmacy.pdf" },
      { label: "Pharm.D", href: "/pdfs/academic-calendar/cal25-26/AC 2025-26 Pharm.D.pdf" },
    ]
  },
  {
    year: "2024-25",
    links: [
      { label: "B.Pharmacy", href: "/pdfs/academic-calendar/cal24-25/AC B.Pharmacy 2024-25.pdf" },
      { label: "M.Pharmacy", href: "/pdfs/academic-calendar/cal24-25/AC M.Pharmacy 2024-25.pdf" },
      { label: "Pharm.D", href: "/pdfs/academic-calendar/cal24-25/AC Pharm.D 2024-25.pdf" },
    ]
  },
  {
    year: "2023-24",
    links: [
      { label: "B.Pharmacy", href: "/pdfs/academic-calendar/cal23-24/B Pharmacy 2023-2024.pdf" },
      { label: "M.Pharmacy", href: "/pdfs/academic-calendar/cal23-24/M Pharmacy 2023-2024.pdf" },
      { label: "Pharm.D", href: "/pdfs/academic-calendar/cal23-24/Pharm.D 2023-2024.pdf" },
    ]
  },
  {
    year: "2022-23",
    links: [
      { label: "B.Pharmacy", href: "/pdfs/academic-calendar/cal22-23/bpharmacy 2022-23.pdf" },
      { label: "M.Pharmacy", href: "/pdfs/academic-calendar/cal22-23/mpharmacy 2022-23.pdf" },
      { label: "Pharm.D", href: "/pdfs/academic-calendar/cal22-23/pharm-d 2022-23.pdf" },
    ]
  },
  {
    year: "2021-22",
    links: [
      { label: "B.Pharmacy", href: "/pdfs/academic-calendar/cal21-22/bpharmacy 2021-22.pdf" },
      { label: "M.Pharmacy", href: "/pdfs/academic-calendar/cal21-22/mpharmacy 2021-22.pdf" },
      { label: "Pharm.D", href: "/pdfs/academic-calendar/cal21-22/pharm-d 2021-22.pdf" },
    ]
  },
  {
    year: "2020-21",
    links: [
      { label: "B.Pharmacy", href: "/pdfs/academic-calendar/cal1920/bpharmacy 2020-21.pdf" },
      { label: "M.Pharmacy", href: "/pdfs/academic-calendar/cal1920/mpharmacy 2020-21.pdf" },
      { label: "Pharm.D", href: "/pdfs/academic-calendar/cal1920/pharm-d 2020-21.pdf" },
    ]
  }
];

async function migrate() {
  const token = process.env.SANITY_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN;
  if (!token) {
    console.error("Error: SANITY_WRITE_TOKEN or SANITY_AUTH_TOKEN is missing in environment variables.");
    process.exit(1);
  }

  console.log("Starting Academic Calendar Migration to Sanity...");

  for (const yearGroup of LEGACY_CALENDARS) {
    console.log(`\nProcessing Year: ${yearGroup.year}...`);
    const pdfs = [];

    for (const link of yearGroup.links) {
      // Decode URI to handle spaces and accents
      const decodedHref = decodeURIComponent(link.href);
      // Remove leading slash for local resolution
      const localRelativePath = decodedHref.startsWith('/') ? decodedHref.slice(1) : decodedHref;
      const absolutePath = path.join(__dirname, '../public', localRelativePath);

      if (!fs.existsSync(absolutePath)) {
        console.warn(`  Warning: File not found at: ${absolutePath}. Skipping.`);
        continue;
      }

      console.log(`  Uploading PDF: ${link.label} (${path.basename(absolutePath)})...`);
      try {
        const fileStream = fs.createReadStream(absolutePath);
        const asset = await client.assets.upload('file', fileStream, {
          filename: path.basename(absolutePath),
          contentType: 'application/pdf',
        });

        console.log(`  Successfully uploaded asset: ${asset._id}`);
        pdfs.push({
          _key: `${yearGroup.year}-${link.label.replace(/[^a-zA-Z0-9]/g, '')}`,
          _type: 'calendarPdf',
          title: link.label,
          pdfFile: {
            _type: 'file',
            asset: {
              _type: 'reference',
              _ref: asset._id,
            }
          }
        });
      } catch (err) {
        console.error(`  Error uploading ${link.label}:`, err.message);
      }
    }

    if (pdfs.length === 0) {
      console.log(`  No PDFs uploaded for year ${yearGroup.year}. Skipping document creation.`);
      continue;
    }

    console.log(`  Creating document for academicYear: ${yearGroup.year}...`);
    try {
      const doc = {
        _type: 'academicCalendar',
        year: yearGroup.year,
        pdfs: pdfs,
      };

      const result = await client.createOrReplace({
        _id: `academic-calendar-${yearGroup.year}`,
        ...doc
      });
      console.log(`  Document created/replaced successfully: ${result._id}`);
    } catch (err) {
      console.error(`  Error creating document for year ${yearGroup.year}:`, err.message);
    }
  }

  console.log("\nMigration Finished!");
}

migrate().catch(err => {
  console.error("Migration script failed:", err);
});
