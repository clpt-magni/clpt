import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'vpfov1jc',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN,
});

async function uploadFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return null;
  }
  const fileStream = fs.createReadStream(filePath);
  const asset = await client.assets.upload('file', fileStream, {
    filename: path.basename(filePath),
  });
  return asset._id;
}

async function seed() {
  console.log("Uploading files and creating Academic Toolkit document in Sanity...");

  const pdfPath = path.resolve(process.cwd(), 'public/documents/studentdocuments/Internship-training-report.pdf');
  const docxPath = path.resolve(process.cwd(), 'public/documents/studentdocuments/Internship-training-report.docx');

  let pdfAssetId = null;
  let docxAssetId = null;

  try {
    console.log("Uploading PDF guide...");
    pdfAssetId = await uploadFile(pdfPath);
    console.log("PDF uploaded:", pdfAssetId);
  } catch (err) {
    console.warn("Could not upload PDF asset:", err.message);
  }

  try {
    console.log("Uploading DOCX template...");
    docxAssetId = await uploadFile(docxPath);
    console.log("DOCX uploaded:", docxAssetId);
  } catch (err) {
    console.warn("Could not upload DOCX asset:", err.message);
  }

  const doc = {
    _id: "academic-toolkit-internship-report",
    _type: "academicToolkit",
    title: "Internship Training Report",
    category: "Academic Toolkits",
    description: "Access the approved template and submission guidelines for the official clinical or industrial pharmacy internship report. Download the template or preview the guide below.",
    isActive: true,
  };

  if (pdfAssetId) {
    doc.pdfFile = {
      _type: "file",
      asset: { _type: "reference", _ref: pdfAssetId },
    };
  }

  if (docxAssetId) {
    doc.docxFile = {
      _type: "file",
      asset: { _type: "reference", _ref: docxAssetId },
    };
  }

  await client.createOrReplace(doc);
  console.log("Academic Toolkit document successfully created/updated in Sanity!");
}

seed().catch((err) => {
  console.error("Failed to seed academic toolkit:", err);
  process.exit(1);
});
