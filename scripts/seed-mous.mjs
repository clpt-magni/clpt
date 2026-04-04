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

const mous = [
  "KELVIN LABS, HYDERABAD",
  "LALITHA SUPERSPECIALITY HOSPITAL (Private) LIMITED, GUNTUR",
  "BIOPHORE PHARMACEUTICALS LIMITED, HYDERABAD",
  "SPARTAN HEALTH SCIENCES UNIVERSITY, WEST INDIES",
  "GOVERNMENT GENERAL HOSPITAL, GUNTUR",
  "KRISHNA UNIVERSITY, MACHILIPATNAM (Research Center)",
  "INTERNATIONAL HEALTH CARE LIMITED, VIJAYAWADA",
  "SRINIJA PARENTERALS, GUNTUR",
  "ARSVIL RESEARCH LABORATORIES,  VIJAYAWADA",
  "DARWIN RESEARCH LABORATORIES, VIJAYAWADA",
  "DARWIN RESEARCH & AYUR PHARMA, VIJAYAWADA",
  "DARWIN FORMULATIONS PVT. LTD., VIJAYAWADA",
  "ORGANIC PHARMACEUTICALS, VIJAYAWADA",
  "P.V.S. LABORATORIES LIMITED, VIJAYAWADA",
  "ANN PHARMACARE & WELLNESS LLP, KARNATAKA",
  "LAILA NUTRACEUTICALS, VIJAYAWADA",
  "UNIVERSITY OF MARYLAND EASTERN SHORE, USA",
  "Department of Zoology, Govt. College for Women, Guntur",
  "A.P. State Skill Development Corporation (APSSDC), Vijayawada",
  "Ixora Tech Consulting Services Pvt. Ltd., Mumbai",
  "Delexcel Pharma Private Limited, Hyderabad",
  "IKYA Global Education, Hyderabad",
  "Girijananda Chowdhury Inst. of Pharm. Sciences (GIPS)",
  "ARETE IT Services Pvt. Ltd., Vijayawada",
  "ANI Generics Private Limited, Hyderabad",
  "Rubicom Skill Development Pvt. Ltd., Pune",
  "Syndy Pharma, Hyderabad",
  "Sibar Institute of Dental Sciences",
  "OpEx Accelerator Private Limited, Kolhapur, Maharashtra",
  "MKTXS Market Access Solutions LLC, USA",
  "Heartfulness Education Trust",
  "Study in India - EdCIL (India) Limited",
  "Quest International University – Malaysia",
  "Sanjivani College of Pharmaceutical Education & Research",
  "Lead Sciences, Netherland",
  "Aquity Solutions India Private Limited, Mumbai",
  "Greyhound Chromatography and Allied Sciences",
  "Mettu University, Ethiopia",
  "Ramanujan College, University of Delhi",
  "Solutions3X Private Limited, Hyderabad",
  "Aravindh Herbal Labs (P) Ltd., Rajapalayam",
  "Malineni Lakshmaiah College of Pharmacy, Prakasam",
  "Biorks Analytical and Life Sciences, Tamil Nadu",
  "Leo Global Overseas Educational Consultancy, Guntur",
  "Bhuvika Health Care Pvt. Ltd., Bangalore",
  "Kshetra Analyticals Private Limited, Hyderabad",
  "College of Pharmacy, Jouf University, KSA",
  "Universal Instruments, Telangana",
  "RVJ Pharma Consultants Private Limited, Nashik",
  "Nutrify Today, Bangalore",
  "Swami Sevabhavi Sanstha’s Lotus Business School (LBS), Pune.",
  "Narayana Pharmacy College, Nellore",
  "Govt. General Hospital/Guntur Medical College, Guntur"
];

async function seedMOUs() {
  console.log('Seeding MOUs...');

  for (let i = 0; i < mous.length; i++) {
    const title = mous[i];
    const serialNumber = i + 1;

    const doc = {
      _type: 'mou',
      title: title,
      serialNumber: serialNumber,
    };

    try {
      const result = await client.create(doc);
      console.log(`Created document for MOU ${serialNumber}: ${title} - ID: ${result._id}`);
    } catch (err) {
      console.error(`Failed to create document for MOU ${serialNumber}: ${title}`, err);
    }
  }

  console.log('Finished seeding MOUs.');
}

seedMOUs();
