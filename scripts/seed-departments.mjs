import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'vpfov1jc',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN,
});

const departments = [
  {
    _id: "dept-pharmaceutics",
    _type: "department",
    name: "Pharmaceutics",
    slug: { _type: "slug", current: "pharmaceutics" },
    order: 1,
    icon: "FlaskConical",
    description: "The Department of Pharmaceutics is dedicated to the formulation and evaluation of various dosage forms. It focuses on novel drug delivery systems, nanomedicines, and biopharmaceutics.",
    vision: "To become a leading expert in the field of pharmaceutics with comprehensive knowledge on various emerging areas and to attain competency in skills and to cater the healthcare as well as career prospects.",
    email: "clptceutics@gmail.com"
  },
  {
    _id: "dept-pharmaceutical-analysis",
    _type: "department",
    name: "Pharmaceutical Analysis",
    slug: { _type: "slug", current: "pharmaceutical-analysis" },
    order: 2,
    icon: "Microscope",
    description: "This department ensures the quality, safety, and efficacy of drugs through sophisticated analytical techniques like HPLC, GC, and spectroscopy, supporting rigorous quality control standards.",
    vision: "To be a centre of excellence in pharmaceutical analysis, regulatory affairs, and pharmaceutical chemistry while contributing to socio-economic progress, strengthening industry–institute interaction, empowering students in regulatory and drug testing practices, and promoting higher education, research, and innovative problem-based learning.",
    email: "analysisclpt@gmail.com"
  },
  {
    _id: "dept-pharmacology",
    _type: "department",
    name: "Pharmacology",
    slug: { _type: "slug", current: "pharmacology" },
    order: 3,
    icon: "Activity",
    description: "Focuses on understanding the mechanisms of drug action, pre-clinical screening of new chemical entities, and toxicological studies. The department is equipped with state-of-the-art animal handling facilities.",
    vision: "To lead toward effective global healthcare by flourishing advanced research in pharmacology and assimilating true entrepreneurial spirit with care and lenity.",
    email: "clptpharmacology@gmail.com"
  },
  {
    _id: "dept-pharmacy-practice",
    _type: "department",
    name: "Pharmacy Practice",
    slug: { _type: "slug", current: "pharmacy-practice" },
    order: 4,
    icon: "Stethoscope",
    description: "Integrated with hospital settings, this department trains Pharm.D students in clinical pharmacy, patient care, ward rounds, therapeutic drug monitoring, and pharmacovigilance.",
    vision: "To become a centre of excellence for undergraduate and postgraduate studies in pharmaceutical sciences through quality education, research and innovative practices and contribute to the healthcare needs of society.",
    email: "clptpp2020@gmail.com"
  }
];

async function seed() {
  console.log("Seeding departments into Sanity...");
  for (const dept of departments) {
    await client.createOrReplace(dept);
    console.log(`Created/Replaced department: ${dept.name}`);
  }
  console.log("Seeding completed successfully!");
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
