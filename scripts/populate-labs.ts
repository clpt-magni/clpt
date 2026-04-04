/**
 * SANITY DATA INJECTION SCRIPT
 * This script will populate your Sanity dataset with the 23 laboratories.
 * 
 * TO RUN THIS SCRIPT:
 * 1. Ensure you have a Sanity Write Token in your .env (SANITY_WRITE_TOKEN)
 * 2. Run: npx ts-node scripts/populate-labs.ts
 */

import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import path from "path";

// Load .env.local specifically
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN;

if (!projectId) {
  console.error("❌ Error: NEXT_PUBLIC_SANITY_PROJECT_ID is missing in .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2023-10-01",
  useCdn: false,
});

const labsToInject = [
  { name: "CENTRAL INSTRUMENTATION LABORATORY", roomNo: "115" },
  { name: "INDUSTRIAL PHARMACY LABORATORY-I", roomNo: "117" },
  { name: "MACHINE ROOM", roomNo: "118" },
  { name: "ANIMAL MOUSE LABORATORY", roomNo: "129" },
  { name: "PHARMACEUTICAL CHEMISTRY LABORATORY", roomNo: "202" },
  { 
    name: "PHARMACEUTICAL CHEMISTRY LABORATORY (UG)", 
    roomNo: "204",
    area: "105.60 sq.m",
    instruments: "Digital weighing balance (S.No:D515704943), Micro Wave Synthesizer (UGC PROJECT), Magnetic Stirer (S.No:JAMS1372) (S.No:DPMS1173), Heating Mantel(100ML-60W), Melting point (S.No:1451) (S.No:1435), Hot Plate (M.No:KHPP22.R2)(S.No:713,952), Vacum Pump (S.No:FJG38338), Vacum Desicators, Desicator 165MM, Heating Mantel(6 Holes), Fume Hood, Refrigerator, Atomic Model set",
    facilities: "Intercom facility, water supply, Drainage system, Fire-extinguishers, Exhaust fans, proper cross-ventilation, First-aid kit"
  },
  { name: "PHARMACEUTICAL CHEMISTRY LABORATORY", roomNo: "207" },
  { name: "PHARMACEUGTICS-PHYSICAL PHARMACY LABORATORY", roomNo: "217" },
  { name: "PHARMACEUTICAL LABORATORY", roomNo: "218" },
  { name: "PHARMACEUTICAL ANALYSIS LABORATORY", roomNo: "303" },
  { name: "PHARMACEUTICAL MICROBIOLOGY LABORATORY", roomNo: "305" },
  { name: "PHARMACOGNOSY LABORATORY", roomNo: "309" },
  { name: "PHARMACOGNOSY-ANATOMY LABORATORY", roomNo: "312" },
  { name: "PHARMACOLOGY LABORATORY", roomNo: "318" },
  { name: "PHARMACOLOGY LABORATORY", roomNo: "320" },
  { name: "PHYSIOLOGY-PHARMACOLOGY LABORATORY", roomNo: "321" },
  { name: "INDUSTRIAL PHARMACY LABORATORY", roomNo: "401" },
  { name: "INDUSTRIAL PHARMACY LABORATORY", roomNo: "402" },
  { name: "PHARMACEUTICAL ANALYSIS LABORATORY", roomNo: "406" },
  { name: "PHARMACEUTICAL ANALAYSIS LABORATORY", roomNo: "407" },
  { name: "PHARMACEUTICS LABORATORY", roomNo: "412" },
  { name: "PHARMACEUTICS LABORATORY", roomNo: "419" },
  { name: "PHARMACEUTICS LABORAOTRY", roomNo: "420" },
];

async function injectLabs() {
  console.log("🚀 Starting Lab Injection...");
  
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error("❌ Error: SANITY_WRITE_TOKEN is missing in .env");
    return;
  }

  for (const lab of labsToInject) {
    const doc = {
      _type: "laboratory",
      name: lab.name,
      roomNo: lab.roomNo,
      area: (lab as any).area || "TBD",
      instruments: (lab as any).instruments || "General pharmaceutical instruments",
      facilities: (lab as any).facilities || "Standard lab facilities, safety equipment",
      slug: {
        _type: "slug",
        current: `${lab.roomNo}-${lab.name.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "")}`
      }
    };

    try {
      await client.createIfNotExists({
        _id: `lab-${lab.roomNo}`,
        ...doc
      });
      console.log(`✅ Injected: ${lab.roomNo} - ${lab.name}`);
    } catch (err: any) {
      console.error(`❌ Failed: ${lab.roomNo} - ${err.message}`);
    }
  }

  console.log("🎉 Injection Complete!");
}

injectLabs();
