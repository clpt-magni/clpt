import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN,
});

async function uploadImage(filePath) {
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return null;
  }
  const fileStream = fs.createReadStream(filePath);
  const asset = await client.assets.upload('image', fileStream, {
    filename: path.basename(filePath),
  });
  return asset._id;
}

const skillPartners = [
  {
    name: "APSSDC",
    fullName: "Andhra Pradesh State Skill Development Corporation",
    logoFile: "apssdc.jpg",
    description: "A unique organisation formed to promote Skill-Development and Entrepreneurship in the State of Andhra Pradesh.",
    programs: ["Mukhymantri Yuva Nestham - Convergence Training", "Pratyancha Programme"],
    order: 1
  },
  {
    name: "PMKVY",
    fullName: "Pradhan Mantri Kaushal Vikas Yojana",
    logoFile: "pmkvy.jpg",
    description: "A skill development initiative scheme of the Government of India for recognition and standardization of skills. Enables youth to take up industry-relevant skill training.",
    programs: ["Production / Machine Operator-life skills (25 hours)", "Drug Regulatory Affairs Chemistry (25 hours)"],
    order: 2
  },
  {
    name: "CDTL",
    fullName: "Chalapathi Drug Testing Laboratory",
    logoFile: "clpt.jpg",
    description: "Central Drugs Standard Control Organization (CDSCO) approved laboratory for advanced testing and analysis of pharmaceutical products.",
    programs: ["Analysis of 36 specific Drug categories", "CDSCO Standardized testing protocols"],
    order: 3
  },
  {
    name: "PMBJAK",
    fullName: "Pradhan Mantri Bhartiya Jan Aushadhi Kendra",
    logoFile: "pmbjak.jpg",
    description: "Established to inculcate skills for storage, administration, and dispensing of drugs while improving community healthcare services.",
    programs: ["Blood Pressure & Glucose Monitoring", "First Aid Practice & Patient Counselling", "Body Mass Index (BMI) Analysis"],
    order: 4
  },
  {
    name: "RUBICON",
    fullName: "RUBICON Skill Development Pvt. Ltd.",
    logoFile: "rubicon.jpg",
    description: "Supported by Tomorrow's Foundation and Barclays, focusing on personality development and closing the gap between academia and entry-level industrial talent.",
    programs: ["Personality Development", "Employability Skills Training", "Industry-Entry Talent Grooming"],
    order: 5
  }
];

async function seed() {
  console.log('Seeding Skill Development Partners...');

  for (const partner of skillPartners) {
    const filePath = path.join(process.cwd(), 'public/images/logos', partner.logoFile);
    let assetId = null;
    
    if (fs.existsSync(filePath)) {
      console.log(`Uploading logo for ${partner.name}...`);
      assetId = await uploadImage(filePath);
    }

    const doc = {
      _type: 'skillPartner',
      name: partner.name,
      fullName: partner.fullName,
      description: partner.description,
      programs: partner.programs,
      order: partner.order,
      logo: assetId ? {
        _type: 'image',
        asset: {
          _ref: assetId,
          _type: 'reference'
        }
      } : undefined,
    };

    const result = await client.create(doc);
    console.log(`Created skill partner record for ${partner.name} - ID: ${result._id}`);
  }

  console.log('Finished seeding.');
}

seed().catch(console.error);
