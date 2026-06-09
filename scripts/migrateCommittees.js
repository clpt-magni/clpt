import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: "2024-03-01",
});

const BASE_DIR = path.join(process.cwd(), "..", "public_html");

async function uploadPdf(relativePath) {
  if (!relativePath) return null;
  const fullPath = path.join(BASE_DIR, relativePath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`File not found: ${fullPath}`);
    return null;
  }
  
  console.log(`Uploading: ${relativePath}...`);
  try {
    const asset = await client.assets.upload('file', fs.createReadStream(fullPath), {
      filename: path.basename(fullPath),
    });
    return {
      _type: 'file',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    };
  } catch (error) {
    console.error(`Failed to upload ${relativePath}:`, error.message);
    return null;
  }
}

const bosData = {
  _type: 'institutionalBody',
  title: 'Board of Studies',
  slug: { _type: 'slug', current: 'bos' },
  summary: 'The Board of Studies prepares syllabi, suggests innovative teaching methodologies, and coordinates extensive academic and research activities.',
  description: [
    {
      _type: 'block',
      children: [{ _type: 'span', text: '1. Prepares syllabi for various courses\n2. Suggest methodologies for innovative teaching and evaluation techniques\n3. Suggest pannel names for appointment of examiners\n4. Coordinate research, teaching, extension and other academic activities.' }]
    }
  ],
  term: 'Board of Studies shall be reconstituted as per the autonomous guidelines issued by UGC from time to time.',
  membersFile: 'bos/bos.pdf',
  membersList: [
    {
      category: "Institutional Members & Leadership",
      members: [
        "Prof. Rama Rao Nadendla | Principal, CLPT | Principal & Member-Institutional",
        "Prof. K.N. Rajini Kanth | Professor | Chairman-BOS",
        "Dr. V. Pallavi | Associate Professor | Controller of Examination",
        "Dr. G.V. Rami Reddy | Professor & HOD | Dept. of Pharmaceutics",
        "Dr. K. Sandeep | Assistant Professor | Dept. of Pharmaceutics",
        "Mr. G. Nagaraju | Associate Professor & HOD | Dept. of Pharmaceutical Analysis",
        "Mr. M. Siva Prasad | Assistant Professor | Dept. of Pharmaceutical Analysis",
        "Mr. D. Eswar Tony | Associate Professor & HOD | Dept. of Pharmacology",
        "Dr. N.V. Rama Rao | Associate Professor & HOD | Dept. of Pharmacy Practice",
        "Dr. G. Siva Bharath | Assistant Professor | Dept. of Pharmacy Practice"
      ]
    },
    {
      category: "External Academic Members (Nominated by ANU)",
      members: [
        "Prof. Y. Rajendra Prasad | Professor | University College of Pharmaceutical Sciences, AU",
        "Dr. R. Nagaraju | Professor | Institute of Pharmaceutical Technology, SPMVV",
        "Prof. J. Vijayaratna | Professor (Rtd.) | University College of Pharmaceutical Sciences, AU",
        "Prof. S. Ganapathi | Principal & Dean | Gitam Institute of Pharmacy"
      ]
    },
    {
      category: "External Members (Nominated by Academic Council)",
      members: [
        "Prof. G.P. Mohanta | Professor & Head (Rtd.) | Annamalai University",
        "Dr. K. Suresh Babu | Senior Scientist | IICT, Hyderabad",
        "Dr. Srinivas Mutalik | Professor & HOD | Manipal University",
        "Dr. T. Prakash | Professor & Principal | Akshaya Institute of Pharmacy"
      ]
    },
    {
      category: "Industry & Alumni Representatives",
      members: [
        "Dr. Md. Balapasha | CEO | Anigenerics, Hyderabad (Industry)",
        "Dr. P. Sai Sindhu | Assistant Manager | IQVIA Ltd (Industry)",
        "Ms. B. Mounika | Consultant | Accenture Scientific Informatics Services (Alumni)",
        "Mrs. M. Siva Jyothi | Associate | Novartis Healthcare Pvt. Ltd (Alumni)"
      ]
    },
    {
      category: "Student Representatives",
      members: [
        "Ms. N. Vimala | Student | III/IV B.Pharmacy",
        "Ms. M. Jamuna | Student | I/II M.Pharmacy",
        "Mr. M. Neeraj Kumar | Student | III/VI Pharm.D"
      ]
    }
  ],
  meetingCategories: [
    {
      _key: 'general',
      categoryName: 'General Meetings',
      meetings: [
        { _key: 'm14', meetingTitle: '14th Meeting', meetingFile: 'bos/14meeting.pdf' },
        { _key: 'm13', meetingTitle: '13th Meeting', meetingFile: 'bos/13meeting.pdf' },
        { _key: 'm12', meetingTitle: '12th Meeting', meetingFile: 'bos/12meeting.pdf' },
        { _key: 'm11', meetingTitle: '11th Meeting', meetingFile: 'bos/11meeting.pdf' },
        { _key: 'm10', meetingTitle: '10th Meeting', meetingFile: 'bos/10meeting.pdf' },
        { _key: 'm9', meetingTitle: '9th Meeting', meetingFile: 'bos/9meeting.pdf' },
      ]
    },
    {
      _key: 'pharmaceutics',
      categoryName: 'Department of Pharmaceutics',
      meetings: [
        { _key: '1', meetingTitle: '1st Meeting', meetingFile: 'bos/pharmaceutics/pharmaceutics-1st meeting.pdf' },
        { _key: '2', meetingTitle: '2nd Meeting', meetingFile: 'bos/pharmaceutics/pharmaceutics-2nd meeting.pdf' },
        { _key: '3', meetingTitle: '3rd Meeting', meetingFile: 'bos/pharmaceutics/pharmaceutics--3rd meeting.pdf' },
        { _key: '4', meetingTitle: '4th Meeting', meetingFile: 'bos/pharmaceutics/pharmaceutics-4th meeting.pdf' },
        { _key: '5', meetingTitle: '5th Meeting', meetingFile: 'bos/pharmaceutics/pharmaceutics-5th meeting.pdf' },
        { _key: '6', meetingTitle: '6th Meeting', meetingFile: 'bos/pharmaceutics/pharmaceutics-6th meeting.pdf' },
        { _key: '7', meetingTitle: '7th Meeting', meetingFile: 'bos/pharmaceutics/pharmaceutics-7th meeting.pdf' },
        { _key: '8', meetingTitle: '8th Meeting', meetingFile: 'bos/pharmaceutics/pharmaceutics-8th meeting.pdf' },
      ]
    },
    {
      _key: 'analysis',
      categoryName: 'Department of Pharmaceutical Analysis',
      meetings: [
        { _key: '1', meetingTitle: '1st Meeting', meetingFile: 'bos/pharmaceuticsanalysis/Analysis-1st meeting.pdf' },
        { _key: '2', meetingTitle: '2nd Meeting', meetingFile: 'bos/pharmaceuticsanalysis/Analysis-2nd meeting.pdf' },
        { _key: '3', meetingTitle: '3rd Meeting', meetingFile: 'bos/pharmaceuticsanalysis/analysis-3rd meeting.pdf' },
        { _key: '4', meetingTitle: '4th Meeting', meetingFile: 'bos/pharmaceuticsanalysis/Analysis-4th meeting.pdf' },
        { _key: '5', meetingTitle: '5th Meeting', meetingFile: 'bos/pharmaceuticsanalysis/analysis-5th meeting.pdf' },
        { _key: '6', meetingTitle: '6th Meeting', meetingFile: 'bos/pharmaceuticsanalysis/analysis-6th meeting.pdf' },
        { _key: '7', meetingTitle: '7th Meeting', meetingFile: 'bos/pharmaceuticsanalysis/analysis-7th meeting.pdf' },
        { _key: '8', meetingTitle: '8th Meeting', meetingFile: 'bos/pharmaceuticsanalysis/analysis-8th meeting.pdf' },
      ]
    },
    {
      _key: 'pharmacology',
      categoryName: 'Department of Pharmacology',
      meetings: [
        { _key: '1', meetingTitle: '1st Meeting', meetingFile: 'bos/pharmacology/Pharmacology-1st meeting.pdf' },
        { _key: '2', meetingTitle: '2nd Meeting', meetingFile: 'bos/pharmacology/pharmacology-2nd meeting.pdf' },
        { _key: '3', meetingTitle: '3rd Meeting', meetingFile: 'bos/pharmacology/pharmacology--3rd meeting.pdf' },
        { _key: '4', meetingTitle: '4th Meeting', meetingFile: 'bos/pharmacology/pharmacology-4th meeting.pdf' },
        { _key: '5', meetingTitle: '5th Meeting', meetingFile: 'bos/pharmacology/pharmacology-5th meeting.pdf' },
        { _key: '6', meetingTitle: '6th Meeting', meetingFile: 'bos/pharmacology/pharmacology-6th meeting.pdf' },
        { _key: '7', meetingTitle: '7th Meeting', meetingFile: 'bos/pharmacology/pharmacology-7th meeting.pdf' },
        { _key: '8', meetingTitle: '8th Meeting', meetingFile: 'bos/pharmacology/pharmacology-8th meeting.pdf' },
      ]
    },
    {
      _key: 'practice',
      categoryName: 'Department of Pharmacy Practice',
      meetings: [
        { _key: '1', meetingTitle: '1st Meeting', meetingFile: 'bos/pharmapractice/Pharmacy practice-1st meeting.pdf' },
        { _key: '2', meetingTitle: '2nd Meeting', meetingFile: 'bos/pharmapractice/pharmacy practice-2nd meeting.pdf' },
        { _key: '3', meetingTitle: '3rd Meeting', meetingFile: 'bos/pharmapractice/pharmacy practice-3rd meeting.pdf' },
        { _key: '4', meetingTitle: '4th Meeting', meetingFile: 'bos/pharmapractice/pharmacy practice-4th meeting.pdf' },
        { _key: '5', meetingTitle: '5th Meeting', meetingFile: 'bos/pharmapractice/pharmacy practice-5th meeting.pdf' },
        { _key: '6', meetingTitle: '6th Meeting', meetingFile: 'bos/pharmapractice/phramacy practice-6th meeting.pdf' },
        { _key: '7', meetingTitle: '7th Meeting', meetingFile: 'bos/pharmapractice/pharmacy practice-7th meeting.pdf' },
        { _key: '8', meetingTitle: '8th Meeting', meetingFile: 'bos/pharmapractice/phramacy practice-8th meeting.pdf' },
      ]
    }
  ]
};

const academicCouncilData = {
  _type: 'institutionalBody',
  title: 'Academic Council',
  slug: { _type: 'slug', current: 'academic-council' },
  summary: 'The Academic Council scrutinizes syllabi, makes admission regulations, and advises the governing body on all academic affairs.',
  description: [
    {
      _type: 'block',
      children: [{ _type: 'span', text: '1. Scrutinize and approve the proposals with or without modification of BOS regarding regulations, syllabi etc.\n2. Make regulations regarding the admission of students to different programmes.\n3. Make regulations for sports, Co & Extra curricular activities.\n4. Advice the governing body on suggestions pertaining to academic affairs.\n\nComposition:\n1. Chairman - Principal\n2. Members - All HODs of the institution\n3. Four teachers - Members from committees of the institution\n4. Four external experts - Members from industry, commerce, Law, Education\n5. Three nominees - Nominated by University\n6. Member secretary - Nominated by Principal\n7. One Student Member from each programme - Nominated by Principal' }]
    }
  ],
  term: 'Academic council shall be reconstituted as per the autonomous guidelines issued by UGC from time to time.',
  membersFile: 'acmembers.pdf', // in public_html/
  meetingCategories: [
    {
      _key: 'general',
      categoryName: 'Academic Council Meetings',
      meetings: [
        { _key: '12', meetingTitle: '12th Meeting', meetingFile: 'ameetings/12.pdf' },
        { _key: '11', meetingTitle: '11th Meeting', meetingFile: 'ameetings/11.pdf' },
        { _key: '10', meetingTitle: '10th Meeting', meetingFile: 'ameetings/10.pdf' },
        { _key: '9', meetingTitle: '9th Meeting', meetingFile: 'ameetings/9.pdf' },
        { _key: '8', meetingTitle: '8th Meeting', meetingFile: 'ameetings/8.pdf' },
        { _key: '7', meetingTitle: '7th Meeting', meetingFile: 'ameetings/7.pdf' },
        { _key: '6', meetingTitle: '6th Meeting', meetingFile: 'ameetings/6.pdf' },
        { _key: '5', meetingTitle: '5th Meeting', meetingFile: 'ameetings/5.pdf' },
        { _key: '4', meetingTitle: '4th Meeting', meetingFile: 'ameetings/4.pdf' },
        { _key: '3', meetingTitle: '3rd Meeting', meetingFile: 'ameetings/3.pdf' },
        { _key: '2', meetingTitle: '2nd Meeting', meetingFile: 'ameetings/2.pdf' },
        { _key: '1', meetingTitle: '1st Meeting', meetingFile: 'ameetings/1.pdf' },
      ]
    }
  ]
};

const governingBodyData = {
  _type: 'institutionalBody',
  title: 'Governing Body',
  slug: { _type: 'slug', current: 'governing-body' },
  summary: 'The Governing Body oversees the strategic direction, operational policies, and overall governance of Chalapathi Institute of Pharmaceutical Sciences.',
  description: [
    {
      _type: 'block',
      children: [{ _type: 'span', text: 'The Governing body provides core leadership, implements policy decisions, evaluates institutional progress, and upholds the highest standards of pharmaceutical education in accordance with UGC directives.' }]
    }
  ],
  term: 'The Governing body to Chalapathi Institute of Pharmaceutical Sciences shall be reconstituted as per the Autonomous Guidelines issued by UGC from time to time.',
  membersFile: 'gbody/goveningbody.pdf',
  meetingCategories: [
    {
      _key: 'general',
      categoryName: 'Governing Body Meetings',
      meetings: [
        { _key: '12', meetingTitle: 'Twelfth Meeting', meetingFile: 'gbody/12.pdf' },
        { _key: '11', meetingTitle: 'Eleventh Meeting', meetingFile: 'gbody/11.pdf' },
        { _key: '10', meetingTitle: 'Tenth Meeting', meetingFile: 'gbody/10.pdf' },
        { _key: '9', meetingTitle: 'Ninth Meeting', meetingFile: 'gbody/9.pdf' },
        { _key: '8', meetingTitle: 'Eighth Meeting', meetingFile: 'gbody/8.pdf' },
        { _key: '7', meetingTitle: 'Seventh Meeting', meetingFile: 'gbody/7.pdf' },
        { _key: '6', meetingTitle: 'Sixth Meeting', meetingFile: 'gbody/6.pdf' },
        { _key: '5', meetingTitle: 'Fifth Meeting', meetingFile: 'gbody/5.pdf' },
        { _key: '4', meetingTitle: 'Fourth Meeting', meetingFile: 'gbody/4.pdf' },
        { _key: '3', meetingTitle: 'Third Meeting', meetingFile: 'gbody/3.pdf' },
        { _key: '2', meetingTitle: 'Second Meeting', meetingFile: 'gbody/2.pdf' },
        { _key: '1', meetingTitle: 'First Meeting', meetingFile: 'gbody/1.pdf' },
      ]
    }
  ]
};

const financeData = {
  _type: 'institutionalBody',
  title: 'Finance Committee',
  slug: { _type: 'slug', current: 'finance-committee' },
  summary: 'The Finance Committee is responsible for reviewing, optimizing, and approving budgets, expenditures, and developmental investments for the institution.',
  description: [
    {
      _type: 'block',
      children: [{ _type: 'span', text: 'The Finance Committee evaluates all financial obligations, institutional budgets, infrastructure investments, and manages funding streams to ensure sustained and robust growth of the college.' }]
    }
  ],
  term: 'Reconstituted periodically as per governing protocols.',
  meetingCategories: [
    {
      _key: 'general',
      categoryName: 'Finance Committee Meetings',
      meetings: [
        { _key: '12', meetingTitle: '12th Meeting', meetingFile: 'finance/12TH FINANCE COMMITTEE.pdf' },
        { _key: '11', meetingTitle: '11th Meeting', meetingFile: 'finance/11th FINANCE COMMITTEE MEETING.pdf' },
        { _key: '10', meetingTitle: '10th Meeting', meetingFile: 'finance/10th FINANCE COMMITTEE MEETING.pdf' },
        { _key: '9', meetingTitle: '9th Meeting', meetingFile: 'finance/9th FINANCE COMMITTEE MEETING.pdf' },
        { _key: '8', meetingTitle: '8th Meeting', meetingFile: 'finance/8th FINANCE COMMITTEE MEETING.pdf' },
        { _key: '7', meetingTitle: '7th Meeting', meetingFile: 'finance/7th FINANCE COMMITTEE MEETING.pdf' },
        { _key: '6', meetingTitle: '6th Meeting', meetingFile: 'finance/6th FINANCE COMMITTEE MEETING.pdf' },
        { _key: '5', meetingTitle: '5th Meeting', meetingFile: 'finance/5th FINANCE COMMITTEE MEETING.pdf' },
        { _key: '4', meetingTitle: '4th Meeting', meetingFile: 'finance/4th FINANCE COMMITTEE MEETING.pdf' },
        { _key: '3', meetingTitle: '3rd Meeting', meetingFile: 'finance/3rd FINANCE COMMITTEE MEETING.pdf' },
        { _key: '2', meetingTitle: '2nd Meeting', meetingFile: 'finance/2nd FINANCE COMMITTEE MEETING.pdf' },
        { _key: '1', meetingTitle: '1st Meeting', meetingFile: 'finance/1st FINANCE COMMITTEE MEETING.pdf' },
      ]
    }
  ]
};

const affData = {
  _type: 'affiliation',
  title: 'Affiliations, Recognitions & Approvals',
  summary: 'Chalapathi Institute of Pharmaceutical Sciences operates under prestigious accreditations, holding autonomous status, high NIRF rankings, and continuous approvals from primary regulatory educational authorities in India.',
  approvals: [
    { _key: '1', title: 'Extension of "Autonomous" status by UGC upto 2032', documentUrl: 'aff/AUTONOMOUS-NEW-2022-2032.pdf' },
    { _key: '2', title: 'All India NIRF 89th Rank in 2023', documentUrl: 'aff/aff/All India NIRF 89th Rank in 2023.pdf' },
    { _key: '3', title: 'Accredited by NAAC with "A+" Grade', documentUrl: 'aff/aff/6.pdf' },
    { _key: '4', title: 'Reaccredited by NBA (B.Pharmacy)', documentUrl: 'nba/nba.pdf' },
    { _key: '5', title: 'All India NIRF 77th Rank in 2022', documentUrl: 'aff/aff/All India NIRF 77th Rank in 2022.pdf' },
    { _key: '6', title: 'IPC PVPI ADR Monitoring Center (CLPT-AMC) 2021', documentUrl: 'aff/aff/ipcpvpi.pdf' },
    { _key: '7', title: 'CLPT ENRICH CELL - INCUBATION CENTER - 2020', documentUrl: 'aff/aff/ipcpvpi.pdf' },
    { _key: '8', title: 'All India NIRF 69th Rank in 2021', documentUrl: 'aff/aff/All India NIRF 69th Rank in 2021.pdf' },
    { _key: '9', title: 'All India NIRF 54th Rank in 2020', documentUrl: 'aff/aff/All India NIRF 54th Rank in 2020.pdf' },
    { _key: '10', title: 'All India NIRF 51st Rank in 2019', documentUrl: 'aff/aff/2.pdf' },
    { _key: '11', title: '51-75 NIRF Rank Band in 2018', documentUrl: 'aff/aff/51-75 NIRF Rank Band in 2018.pdf' },
    { _key: '12', title: 'All India NIRF 48th Rank in 2017', documentUrl: 'aff/aff/4.pdf' },
    { _key: '13', title: 'Accredited by NBA (B.Pharmacy)', documentUrl: 'aff/aff/5.pdf' },
    { _key: '14', title: 'Recognized by DSIR, Government of India', documentUrl: 'aff/aff/7.pdf' },
    { _key: '15', title: 'Accorded "Autonomous" status by UGC', documentUrl: 'aff/aff/8.pdf' },
    { _key: '16', title: 'Approved by AICTE, New Delhi', documentUrl: 'aff/aff/9.pdf' },
    { _key: '17', title: 'Approved by PCI, New Delhi', documentUrl: 'aff/aff/10.pdf' },
    { _key: '18', title: 'Recognized by Technical Education, Govt. of Andhra Pradesh', documentUrl: 'aff/aff/11.pdf' },
    { _key: '19', title: 'Affiliated to Acharya Nagarjuna University, Nagarjuna Nagar', documentUrl: 'aff/aff/12.pdf' },
    { _key: '20', title: 'Recognized by UGC Under Section 2(f) and 12(B)', documentUrl: 'aff/aff/13.pdf' },
    { _key: '21', title: 'Certified by ISO 9001:2015 (Quality Management System)', documentUrl: 'iso/ISO CERTIFICATE.pdf' },
    { _key: '22', title: 'Certified by ISO 14001:2015 (Environmental Management System)', documentUrl: 'aff/aff/14a.pdf' },
    { _key: '23', title: 'Certified by ISO 50001:2018 (Energy Management System)', documentUrl: 'aff/aff/18.pdf' },
    { _key: '24', title: 'Registered by CCSEA', documentUrl: 'aff/aff/CCSEA.pdf' },
    { _key: '25', title: 'Approved by Krishna University, Machilipatnam', documentUrl: 'aff/aff/16.pdf' },
    { _key: '26', title: 'Registered Alumni Association', documentUrl: 'aff/aff/17.pdf' },
  ]
};

async function processBody(data) {
  console.log(`Processing Body: ${data.title}...`);
  data._id = `body-${data.slug.current}`;
  
  // Upload main members file if present
  if (data.membersFile && typeof data.membersFile === 'string') {
    const asset = await uploadPdf(data.membersFile);
    if (asset) {
      data.membersFile = asset;
    } else {
      delete data.membersFile;
    }
  }

  // Iterate categories and meetings
  if (data.meetingCategories) {
    for (const cat of data.meetingCategories) {
      if (cat.meetings) {
        for (const meeting of cat.meetings) {
           if (meeting.meetingFile && typeof meeting.meetingFile === 'string') {
             const asset = await uploadPdf(meeting.meetingFile);
             if (asset) {
               meeting.meetingFile = asset;
             } else {
               delete meeting.meetingFile;
             }
           }
        }
      }
    }
  }

  await client.createOrReplace(data);
  console.log(`Successfully created/updated ${data.title}!`);
}

async function processAffiliations(data) {
  console.log(`Processing Affiliations...`);
  data._id = "affiliations-main";
  
  const finalApprovals = [];
  for (const approval of data.approvals) {
    if (approval.documentUrl) {
      const asset = await uploadPdf(approval.documentUrl);
      if (asset) {
         finalApprovals.push({
           _key: approval._key,
           title: approval.title,
           document: asset
         });
      } else {
         finalApprovals.push({
           _key: approval._key,
           title: approval.title,
         });
      }
    } else {
      finalApprovals.push(approval);
    }
  }
  data.approvals = finalApprovals;
  await client.createOrReplace(data);
  console.log(`Successfully created/updated Affiliations!`);
}

async function main() {
  await processBody(bosData);
  await processBody(academicCouncilData);
  await processBody(governingBodyData);
  await processBody(financeData);
  await processAffiliations(affData);
  console.log("Migration Script Completed!");
}

main().catch(console.error);
