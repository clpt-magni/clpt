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

const bpharmData = [
  { year: "2024-25", total: 102, industries: 10, placed: 58, higher: 40, percent: 56 },
  { year: "2023-24", total: 105, industries: 11, placed: 56, higher: 44, percent: 53 },
  { year: "2022-23", total: 115, industries: 7, placed: 65, higher: 45, percent: 57 },
  { year: "2021-22", total: 98, industries: 7, placed: 50, higher: 40, percent: 41 },
  { year: "2020-21", total: 98, industries: 5, placed: 45, higher: 36, percent: 46 },
  { year: "2019-20", total: 95, industries: 6, placed: 64, higher: 29, percent: 67 },
  { year: "2018-19", total: 94, industries: 7, placed: 43, higher: 48, percent: 42 },
  { year: "2017-18", total: 86, industries: 10, placed: 39, higher: 40, percent: 45 },
  { year: "2016-17", total: 99, industries: 10, placed: 64, higher: 32, percent: 64 },
  { year: "2015-16", total: 54, industries: 4, placed: 25, higher: 29, percent: 46 }
];

const mpharmData = [
  { year: "2024-25", total: 51, industries: 8, placed: 46, percent: 90 },
  { year: "2023-24", total: 33, industries: 9, placed: 29, percent: 87 },
  { year: "2022-23", total: 57, industries: 11, placed: 55, percent: 96 },
  { year: "2021-22", total: 39, industries: 6, placed: 24, percent: 62 },
  { year: "2020-21", total: 55, industries: 13, placed: 29, percent: 53 },
  { year: "2019-20", total: 42, industries: 6, placed: 35, percent: 83 },
  { year: "2018-19", total: 60, industries: 9, placed: 42, percent: 70 },
  { year: "2017-18", total: 42, industries: 9, placed: 38, percent: 90 },
  { year: "2016-17", total: 31, industries: 7, placed: 27, percent: 87 },
  { year: "2015-16", total: 24, industries: 7, placed: 17, percent: 83 }
];

const pharmdData = [
  { year: "2024-25", total: 28, industries: 7, placed: 19, percent: 67 },
  { year: "2023-24", total: 28, industries: 7, placed: 18, percent: 64 },
  { year: "2022-23", total: 29, industries: 7, placed: 19, percent: 65 },
  { year: "2021-22", total: 28, industries: 6, placed: 17, percent: 60 },
  { year: "2020-21", total: 31, industries: 12, placed: 18, percent: 58 },
  { year: "2019-20", total: 30, industries: 6, placed: 17, percent: 57 },
  { year: "2018-19", total: 33, industries: 10, placed: 28, percent: 85 },
  { year: "2017-18", total: 34, industries: 12, placed: 31, percent: 92 },
  { year: "2016-17", total: 33, industries: 10, placed: 30, percent: 89 },
  { year: "2015-16", total: 30, industries: 13, placed: 27, percent: 91 },
  { year: "2014-15", total: 28, industries: 9, placed: 26, percent: 90 }
];

const companies = [
  "Hospira Health Care, Chennai",
  "Mylan Laboratories, Hyderabad",
  "Aurobindo pharma, Hyderabad",
  "Microlabs, Bangalore",
  "Biophore Pharmaceuticals Pvt. Ltd, Hyderabad",
  "Glochem Pharmaceuticals, Hyd",
  "Leiutis Pharmaceuticals Pvt. Ltd, Hyd",
  "Lalitha Super Specialty Hospital, Guntur",
  "Unichem laboratories Ltd, Mumbai",
  "ESIC, Hyderabad",
  "GVK Life Sciences, Hyderabad",
  "Aurigine, Hyderabad",
  "Microtherapeutics Research Labs Pvt.Ltd., Chennai",
  "Daiichi Sankyo India Pharma Pvt.Ltd., Guargeon",
  "DMV Business and Market Research Pvt.,Ltd., Hyd",
  "IKYA GLOBAL- MEDTEK, Vijayawada",
  "Natco Pharma Limited, Hyd.",
  "Aizant Drug Research Solutions (P) Ltd, Hyd."
];

async function seed() {
  console.log('Seeding placements...');

  // 1. Seed B.Pharm
  for (const item of bpharmData) {
    const doc = {
      _type: 'placementStats',
      academicYear: item.year,
      program: 'bpharm',
      totalStudents: item.total,
      noOfIndustries: item.industries,
      noPlaced: item.placed,
      higherEducation: item.higher,
      percentage: item.percent,
    };
    await client.create(doc);
  }

  // 2. Seed M.Pharm
  for (const item of mpharmData) {
    const doc = {
      _type: 'placementStats',
      academicYear: item.year,
      program: 'mpharm',
      totalStudents: item.total,
      noOfIndustries: item.industries,
      noPlaced: item.placed,
      percentage: item.percent,
    };
    await client.create(doc);
  }

  // 3. Seed Pharm.D
  for (const item of pharmdData) {
    const doc = {
      _type: 'placementStats',
      academicYear: item.year,
      program: 'pharmd',
      totalStudents: item.total,
      noOfIndustries: item.industries,
      noPlaced: item.placed,
      percentage: item.percent,
    };
    await client.create(doc);
  }

  // 4. Seed Companies
  for (let i = 0; i < companies.length; i++) {
    const doc = {
      _type: 'placementCompany',
      name: companies[i],
      order: i + 1,
    };
    await client.create(doc);
  }

  console.log('Finished seeding placements.');
}

seed().catch(console.error);
