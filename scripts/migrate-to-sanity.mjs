import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import { readFileSync } from "fs";
import { join } from "path";

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-10-01",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

// Since I cannot easily import the TS file directly in a simple node script without ts-node,
// and I have the data right here, I will define the mapping and the data to push.

const activitiesData = [
  {
    type: 'nssUnit1',
    slug: 'nss-unit-1',
    title: 'NSS UNIT - I',
    description: 'The National Service Scheme (NSS) Unit - I of Chalapathi Institute of Pharmaceutical Sciences actively engages students in social service and community development programs.',
    activities: [
      { date: '30-08-2024', name: 'NSS Orientation Program', place: 'Chalapathi Institute of Pharmaceutical Sciences, Lam, Guntur', participants: '103', beneficiaries: 'I/IV B. Pharmacy' },
      { date: '17-08-2024', name: 'Awareness program on Anti-ragging', place: 'Chalapathi Institute of Pharmaceutical Sciences, Lam, Guntur', participants: '86', beneficiaries: 'I/IV B. Pharmacy' }
    ]
  },
  {
    type: 'nssUnit2',
    slug: 'nss-unit-2',
    title: 'NSS UNIT - II',
    description: 'NSS Unit - II continues the mission of community service, focusing on health awareness, environmental protection, and various outreach activities.',
    activities: [
      { date: '13-08-2024', name: 'Awareness program on "World Organ Donation Day"', place: 'Chalapathi Institute of Pharmaceutical Sciences, Lam, Guntur', participants: '106', beneficiaries: 'III/IV B. Pharmacy, III/VI, IV/VI Pharm.D' }
    ]
  },
  {
    type: 'ipaLam',
    slug: 'ipa-lam',
    title: 'IPA - LAM LOCAL BRANCH',
    description: 'The IPA – Lam local branch works in coordination as per the bye laws of Indian Pharmaceutical Association, Mumbai. Established in 2014.',
    activities: [
      { date: '21-09-2024', name: 'Health and Medical Awareness Program', place: 'Annamaya Park, Brundavan Gardens, Guntur', participants: '170', beneficiaries: 'General Public' }
    ]
  },
  {
    type: 'isporAmaravati',
    slug: 'ispor-amaravati',
    title: 'ISPOR INDIA - AMARAVATI REGIONAL CHAPTER',
    description: 'ISPOR India - Amaravati Regional Chapter, established in 2017, is the first in the region.',
    activities: [
      { date: '28/08/2024', name: 'Monthly Primary Health Screening Services', place: 'Chalapathi Institute of Pharmaceutical Sciences, Guntur', participants: '67', beneficiaries: 'Community Members' }
    ]
  }
];

activitiesData.push({
  type: 'isporAnu',
  slug: 'ispor-anu',
  title: 'ISPOR ANU STUDENT CHAPTER',
  description: 'Established in 2013, the ISPOR-ANU student chapter focuses on improving research in pharmacoeconomics.',
  activities: isporAnuActivities.map(a => ({ ...a, participants: "-" }))
});

async function migrate() {
  console.log("Starting migration to Sanity...");

  for (const doc of activitiesData) {
    console.log(`Migrating ${doc.title}...`);
    try {
      await client.createOrReplace({
        _id: `ext-${doc.slug}`,
        _type: doc.type,
        title: doc.title,
        slug: { _type: 'slug', current: doc.slug },
        description: doc.description,
        activities: doc.activities.map((a, i) => ({
          _key: `activity-${i}`,
          date: a.date,
          name: a.name,
          place: a.place,
          participants: a.participants || "-",
          beneficiaries: a.beneficiaries,
        })),
      });
      console.log(`Successfully migrated ${doc.title}`);
    } catch (err) {
      console.error(`Failed to migrate ${doc.title}:`, err);
    }
  }

  console.log("Migration complete!");
}

migrate();
