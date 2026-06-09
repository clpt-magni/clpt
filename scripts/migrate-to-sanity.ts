import { createClient } from "next-sanity";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_AUTH_TOKEN, 
  apiVersion: '2023-10-01',
  useCdn: false,
});

const LIBRARY_DIR = path.join(process.cwd(), "public", "library");

async function migrate() {
  if (!process.env.SANITY_AUTH_TOKEN) {
    console.error("❌ Error: SANITY_AUTH_TOKEN is missing in .env.local");
    process.exit(1);
  }

  console.log("🚀 Starting Sanity Migration for 2.1GB Library...");
  
  const categories = fs.readdirSync(LIBRARY_DIR).filter(d => 
    fs.statSync(path.join(LIBRARY_DIR, d)).isDirectory()
  );

  let totalFiles = 0;
  let uploadedCount = 0;

  // First pass: count files
  for (const category of categories) {
    const categoryPath = path.join(LIBRARY_DIR, category);
    const subDirs = fs.readdirSync(categoryPath);
    for (const subDir of subDirs) {
      const subDirPath = path.join(categoryPath, subDir);
      if (fs.statSync(subDirPath).isDirectory()) {
         const files = fs.readdirSync(subDirPath).filter(f => f.endsWith(".pdf") || f.endsWith(".PDF"));
         totalFiles += files.length;
      }
    }
  }

  console.log(`📊 Found ${totalFiles} PDFs in local library.`);

  for (const category of categories) {
    const categoryPath = path.join(LIBRARY_DIR, category);
    const subDirs = fs.readdirSync(categoryPath);

    for (const subDir of subDirs) {
      const subDirPath = path.join(categoryPath, subDir);
      if (!fs.statSync(subDirPath).isDirectory()) continue;

      const pdfFiles = fs.readdirSync(subDirPath).filter(f => f.endsWith(".pdf") || f.endsWith(".PDF"));

      for (const pdf of pdfFiles) {
        const filePath = path.join(subDirPath, pdf);
        const fileName = pdf.replace(/\.[^/.]+$/, ""); // strip extension

        try {
          // 0. Check if it already exists to skip re-uploading
          const existing = await client.fetch(`*[_type == "library" && title == $title && category == $category][0]`, { 
            title: fileName, 
            category: category 
          });

          if (existing) {
            console.log(`⏭️ Skipping [${category}] ${fileName} (already exists)`);
            uploadedCount++;
            continue;
          }

          console.log(`📤 Uploading [${category}] ${fileName}...`);
          
          // 1. Upload the PDF asset
          const asset = await client.assets.upload('file', fs.createReadStream(filePath), {
            filename: pdf,
            contentType: 'application/pdf'
          });

          // 2. Create the library document
          await client.create({
            _type: 'library',
            title: fileName,
            category: category,
            author: subDir,
            file: {
              _type: 'file',
              asset: {
                _type: 'reference',
                _ref: asset._id
              }
            }
          });

          uploadedCount++;
          const percent = ((uploadedCount / totalFiles) * 100).toFixed(1);
          console.log(`✅ Success (${uploadedCount}/${totalFiles}) - ${percent}%`);
        } catch (error: any) {
          console.error(`❌ Failed to upload ${fileName}:`, error.message);
        }
      }
    }
  }

  console.log("✨ Migration Complete!");
}

migrate();
