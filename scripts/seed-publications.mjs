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

const publications = [
  {
    year: 2023,
    title: 'SUMMARY OF RESEARCH AND REVIEW PUBLICATIONS - 2023',
    pdfFile: 'Summary of Research and Review Publications 2023.pdf'
  },
  {
    year: 2022,
    title: 'SUMMARY OF RESEARCH AND REVIEW PUBLICATIONS - 2022',
    pdfFile: 'Summary of Research and Review Publications 2022.pdf'
  },
  {
    year: 2021,
    title: 'SUMMARY OF RESEARCH AND REVIEW PUBLICATIONS - 2021',
    pdfFile: 'Summary of Research and Review Publications 2021.pdf'
  },
  {
    year: 2020,
    title: 'SUMMARY OF RESEARCH AND REVIEW PUBLICATIONS - 2020',
    pdfFile: '2020.pdf'
  },
  {
    year: 2019,
    title: 'SUMMARY OF RESEARCH AND REVIEW PUBLICATIONS - 2019',
    pdfFile: '2019.pdf'
  },
  {
    year: 2018,
    title: 'SUMMARY OF RESEARCH AND REVIEW PUBLICATIONS - 2018',
    pdfFile: '2018.pdf'
  },
  {
    year: 2017,
    title: 'RESEARCH AND REVIEW PUBLICATIONS - 2017',
    pdfFile: '2017.pdf'
  }
];

// Sample historical data for 2016
const historical2016 = [
  { slNo: '01', description: 'Prathap. M, Gulshan. MD, Rama Rao Nadendla and Sathish Kumar. M, Application of factorial design for the development of site specific systems in the management of ulcerative colitis. Research journal of pharmaceutical, biological and chemical sciences, 2016, 7(1)', impactFactor: '0.35' },
  { slNo: '02', description: 'S.S. Mani Kiran, Nadendla Rama Rao and K R S Sambasiva Rao, Antiviral loaded bovine serum albumin nanoparticles: Study and its characterization. Inventi Imapact: Pharm Tech', impactFactor: '' },
  { slNo: '03', description: 'Santhi Priya. Nagam, A. Naga Jyothi, J.Poojitha, Santhosh Aruna and Rama Rao Nadendla, A comprehensive review on hydrogels. International journal of current pharmaceutical research', impactFactor: '4.510' },
  { slNo: '04', description: 'Radhika Sugreevu, Ramarao Nadendla and Venkata Rao Vutla, Novel synthetic approaches for benzotriazole derivatives. World journal of pharmaceutical sciences', impactFactor: '6.041' },
];

async function seed() {
  console.log('Seeding publications...');

  for (const pub of publications) {
    const filePath = path.join(process.cwd(), 'public/documents/pub', pub.pdfFile);
    let assetId = null;
    
    if (fs.existsSync(filePath)) {
      console.log(`Uploading ${pub.pdfFile}...`);
      assetId = await uploadFile(filePath);
    }

    const doc = {
      _type: 'publication',
      year: pub.year,
      title: pub.title,
      summaryPdf: assetId ? {
        _type: 'file',
        asset: {
          _ref: assetId,
          _type: 'reference'
        }
      } : undefined,
      articles: pub.year === 2016 ? historical2016 : []
    };

    const result = await client.create(doc);
    console.log(`Created publication record for ${pub.year} - ID: ${result._id}`);
  }

  // Add 2016 specifically if not in list
  if (!publications.find(p => p.year === 2016)) {
      const doc2016 = {
          _type: 'publication',
          year: 2016,
          title: 'Research/ Review Article - 2016',
          articles: historical2016.map(a => ({ ...a, _key: Math.random().toString(36).substr(2, 9) }))
      };
      const r = await client.create(doc2016);
      console.log(`Created historical record for 2016 - ID: ${r._id}`);
  }

  console.log('Finished seeding.');
}

seed().catch(console.error);
