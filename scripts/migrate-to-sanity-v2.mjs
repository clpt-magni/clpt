import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import slugify from "slugify";

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-10-01",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

const chapterMapping = [
  { slug: 'nss-unit-1', type: 'nssUnit1', id: 'ext-nss-unit-1', title: 'NSS UNIT - I' },
  { slug: 'nss-unit-2', type: 'nssUnit2', id: 'ext-nss-unit-2', title: 'NSS UNIT - II' },
  { slug: 'ipa-lam', type: 'ipaLam', id: 'ext-ipa-lam', title: 'IPA - LAM LOCAL BRANCH' },
  { slug: 'ispor-amaravati', type: 'isporAmaravati', id: 'ext-ispor-amaravati', title: 'ISPOR INDIA - AMARAVATI REGIONAL CHAPTER' },
  { slug: 'ispor-anu', type: 'isporAnu', id: 'ext-ispor-anu', title: 'ISPOR ANU STUDENT CHAPTER' }
];

// Re-using the data from the previous script for migration
const isporAnuActivities = [
  { "date": "01-08-2024 to 07-08-2024", "name": "World Breast Feeding Awareness Week", "place": "Dept. of obstetrics & gynecology, Govt, General Hospital, Guntur", "beneficiaries": "50" },
  { "date": "28-07-2024", "name": "Awareness Program at General Medicine Wards, GGH on World Hepatitis Day", "place": "Govt, General Hospital, Guntur", "beneficiaries": "55" },
  { "date": "08-06-2024", "name": "World Brain Tumor Day", "place": "General Medicine Wards, Govt, General Hospital, Guntur", "beneficiaries": "31" },
  { "date": "22-05-2024", "name": "World Pre-eclampsia Day", "place": "General Medicine Wards, Govt, General Hospital, Guntur", "beneficiaries": "50" },
  { "date": "17-05-2024", "name": "World Hypertension Day", "place": "General Medicine Wards, Govt, General Hospital, Guntur", "beneficiaries": "60" },
  { "date": "23-03-2024", "name": "Guest Lecture on Kidney Disease Awareness", "place": "Seminar hall, CLPT", "beneficiaries": "84" },
  { "date": "14-03-2024", "name": "World Kidney Day Awareness Program", "place": "General Medicine Wards, Govt, General Hospital, Guntur", "beneficiaries": "70" },
  { "date": "03-03-2024", "name": "Medical Health Camp at Jonnalagadda Village, Guntur, AP", "place": "Jonnalagadda Village, Guntur, AP", "beneficiaries": "90" },
  { "date": "10-02-2024", "name": "National Deworming Day at Pediatrics Department", "place": "Dept. of Pediatrics, Govt, General Hospital, Guntur", "beneficiaries": "75" },
  { "date": "05-02-2024", "name": "World Cancer Day, Awareness Program at Natco Cancer Centre", "place": "NATCO Cancer Centre, Govt, General Hospital, Guntur", "beneficiaries": "80" },
  { "date": "23-01-2024", "name": "Maternal Health Awareness Program", "place": "General Medicine Wards, Govt, General Hospital, Guntur", "beneficiaries": "65" },
  { "date": "30-12-2023", "name": "Health and Medication Awareness Program", "place": "Seminar hall, CLPT", "beneficiaries": "116" },
  { "date": "16-12-2023", "name": "National Pharma Quiz Competition", "place": "Seminar hall, CLPT", "beneficiaries": "280" },
  { "date": "01-12-2023", "name": "Leaflet Making Competition and Patient Counselling Competition on World AIDS Day", "place": "Seminar hall, CLPT", "beneficiaries": "54" },
  { "date": "20-11-2023 to 25-11-2023", "name": "National Pharmacy Week Celebrations", "place": "Seminar hall, CLPT", "beneficiaries": "420" },
  { "date": "14-11-2023", "name": "World Diabetes Day Health and Medical Awareness Programme", "place": "General Medicine Wards, Govt, General Hospital, Guntur", "beneficiaries": "67" },
  { "date": "12-11-2023", "name": "World Pneumonia Day", "place": "Dept. of Pediatrics, Govt, General Hospital, Guntur", "beneficiaries": "28" },
  { "date": "29-10-2023", "name": "World Stroke Day", "place": "Department of Neurology, Govt. General Hospital, Guntur", "beneficiaries": "75" },
  { "date": "28-10-2023", "name": "World Breast Cancer Awareness Month", "place": "NATCO Cancer Centre, Govt, General Hospital, Guntur", "beneficiaries": "63" },
  { "date": "21-09-2023", "name": "World Alzheimer's Day", "place": "Department of Neurology, Govt. General Hospital, Guntur", "beneficiaries": "32" },
  { "date": "15-09-2023", "name": "World Lymphoma Day", "place": "NATCO Cancer Centre, Govt, General Hospital, Guntur", "beneficiaries": "22" },
  { "date": "01-08-2023", "name": "World Lung Cancer Day", "place": "NATCO Cancer Centre, Govt, General Hospital, Guntur", "beneficiaries": "26" },
  { "date": "01-08-2023", "name": "World Breast Feeding Week", "place": "Dept. of obstetrics & gynecology, Govt, General Hospital, Guntur", "beneficiaries": "49" },
  { "date": "28-07-2023", "name": "World Hepatitis Day", "place": "General Medicine Wards, Govt. General Hospital, Guntur", "beneficiaries": "45" },
  { "date": "25-05-2023", "name": "World Thyroid Day", "place": "Dept. of obstetrics & gynecology, Govt, General Hospital, Guntur", "beneficiaries": "35" },
  { "date": "17-03-2023", "name": "World Sleep Day", "place": "Outpatient Dept. Block, Govt. General Hospital, Guntur", "beneficiaries": "60" },
  { "date": "04-02-2023", "name": "World Cancer Day", "place": "Radiotherapy & Chemotherapy wards, NATCO Cancer Centre, Govt. General Hospital, Guntur", "beneficiaries": "60" },
  { "date": "02-02-2023", "name": "Rheumatoid Arthritis Day", "place": "Seminar hall, CLPT", "beneficiaries": "250" },
  { "date": "10-12-2022", "name": "National Pharma Quiz - 2022", "place": "Seminar hall, CLPT", "beneficiaries": "228" },
  { "date": "14-11-2022", "name": "Diabetes Mellitus Awareness Programme", "place": "General Medicine wards, Govt. General Hospital, Guntur", "beneficiaries": "47" },
  { "date": "30-10-2022", "name": "Breast Cancer awareness Walkathon", "place": "Radiotherapy & Chemotherapy wards, NATCO Cancer Centre, Govt. General Hospital, Guntur", "beneficiaries": "65" },
  { "date": "29-10-2022", "name": "Stroke Awareness programme", "place": "Neurology department wards, Govt. General Hospital, Guntur", "beneficiaries": "56" },
  { "date": "01-08-2022", "name": "Breast Feeding Awareness Programme", "place": "Pediatrics department wards (NICU), OBG department wards, Govt. General Hospital, Guntur", "beneficiaries": "45" },
  { "date": "01-08-2022", "name": "Lung Cancer Awareness Programme", "place": "Radiotherapy & Chemotherapy wards, NATCO Cancer Centre, Govt. General Hospital, Guntur", "beneficiaries": "52" },
  { "date": "29-07-2022", "name": "Oral Rehydration Awareness Programme", "place": "Pediatrics department wards, Govt. General Hospital, Guntur", "beneficiaries": "76" },
  { "date": "28-07-2022", "name": "Hepatitis Awareness Programme", "place": "General Medicine wards, Govt. General Hospital, Guntur", "beneficiaries": "88" },
  { "date": "30-04-2022", "name": "Group discussion", "place": "Outpatient Dept Block, Govt. General Hospital, Guntur", "beneficiaries": "29" },
  { "date": "07-04-2022", "name": "World Health Day", "place": "Outpatient Dept Block, Govt. General Hospital, Guntur", "beneficiaries": "72" },
  { "date": "20-03-2022", "name": "Health and Medical Awareness Programme", "place": "Navuluru village, Mangala Giri, Guntur", "beneficiaries": "105" },
  { "date": "24-02-2022", "name": "World Tuberculosis Day", "place": "TB centre, Govt. General Hospital, Guntur", "beneficiaries": "35" },
  { "date": "07-02-2022", "name": "Medication Safety Day under IPC-PVPI", "place": "Sushrutha Hall, Govt. General Hospital, Guntur", "beneficiaries": "64" },
  { "date": "04-02-2022", "name": "Painting & Just A Minute Competition on the eve of World Cancer Day", "place": "Seminar Hall, CLPT", "beneficiaries": "28" },
  { "date": "04-02-2022", "name": "World Cancer Day", "place": "NATCO Cancer Centre, Govt. General Hospital, Guntur", "beneficiaries": "45" },
  { "date": "04-12-2021", "name": "National Pharma Quiz - 2021", "place": "Seminar hall, CLPT", "beneficiaries": "280" },
  { "date": "26-11-2021", "name": "Lung Cancer Awareness Programme", "place": "Radiotherapy & Chemotherapy wards, NATCO Cancer Centre, Govt. General Hospital, Guntur", "beneficiaries": "41" },
  { "date": "14-11-2021", "name": "Diabetes Mellitus Awareness Programme World Diabetes Day", "place": "General Medicine wards, Govt. General Hospital, Guntur", "beneficiaries": "56" },
  { "date": "14-11-2021", "name": "World Diabetes Day Health and Medical Awareness Programme", "place": "Chalapathi College Bus stop, Chalapathi Nagar, Lam, Guntur", "beneficiaries": "103" },
  { "date": "12-11-2021", "name": "World Pneumonia Day - Pneumonia Awareness Programme", "place": "Pediatrics department wards (PICU, NICU), Govt. General Hospital, Guntur", "beneficiaries": "21" },
  { "date": "01-10-2021", "name": "Breast Cancer Awareness Programme", "place": "Radiotherapy & Chemotherapy wards, NATCO Cancer Centre, Govt. General Hospital, Guntur", "beneficiaries": "37" },
  { "date": "25-09-2021", "name": "World Pharmacists Day Celebrations", "place": "Sushrutha Hall, Govt. General Hospital, Guntur", "beneficiaries": "77" },
  { "date": "01-08-2021 to 07-08-2021", "name": "Breast Feeding Awareness Programme", "place": "Pediatrics department wards (NICU), OBG department wards & NATCO Cancer Centre, Govt. General Hospital, Guntur", "beneficiaries": "101" },
  { "date": "29-07-2021", "name": "Oral Rehydration Awareness Programme", "place": "Pediatrics department wards, Govt. General Hospital, Guntur", "beneficiaries": "69" },
  { "date": "28-07-2021", "name": "Slogan/Caption/Quote Competition on the eve of World Hepatitis Day", "place": "Online competition", "beneficiaries": "28" },
  { "date": "28-07-2021", "name": "Hepatitis Awareness Programme", "place": "General Medicine wards, Govt. General Hospital, Guntur", "beneficiaries": "118" },
  { "date": "14-02-2021", "name": "Health and Medical Awareness Programme", "place": "Chalapathi Institute of Pharmaceutical Sciences, Guntur", "beneficiaries": "63" },
  { "date": "30-01-2021", "name": "Cervical Cancer Awareness Programme", "place": "NACTO Cancer Centre, GGH, Guntur", "beneficiaries": "79" },
  { "date": "23-01-2021", "name": "Health and Medical Awareness Programme", "place": "Chalapathi college Bus stop, Lam, Guntur", "beneficiaries": "90" },
  { "date": "31-12-2020", "name": "A Webinar on COVID-19", "place": "Department of Pharmacy Practice, CLPT, Guntur", "beneficiaries": "120" },
  { "date": "19-12-2020", "name": "International Virtual Conference on Pharmacoeconomics And Outcomes Research", "place": "Department of Pharmacy Practice, CLPT, Guntur", "beneficiaries": "554" },
  { "date": "01-12-2020", "name": "Awareness program about HIV/AIDS", "place": "Collector Office, Guntur", "beneficiaries": "90" },
  { "date": "14-11-2020", "name": "Awareness program on World Diabetes Day", "place": "Emergency department, GGH, Guntur", "beneficiaries": "400" },
  { "date": "07-11-2020", "name": "Awareness on National Mouth Cancer Day", "place": "Department of Oncology, GGH, Guntur", "beneficiaries": "350" },
  { "date": "25-10-2020 to 31-10-2020", "name": "World Breast Cancer Day - Awareness about Breast Cancer", "place": "Department of Oncology, GGH, Guntur", "beneficiaries": "490" },
  { "date": "24-10-2020", "name": "International Virtual Symposium on Scope of Pharm.D in New Normal: Opportunities in Home and Abroad", "place": "Virtual Zoom Platform", "beneficiaries": "78" },
  { "date": "17-10-2020", "name": "e-IPC-PVPI Workshop on Pharmacovigilance, Hemovigilance and AEFI", "place": "Virtual Zoom Platform", "beneficiaries": "300" },
  { "date": "12-10-2020", "name": "Webinar on Drug Induced Blood Disorders", "place": "Virtual Zoom Platform", "beneficiaries": "100" },
  { "date": "20-09-2020", "name": "Guest Lecture on Clinical Data Management evolving in Clinical Trial Practice", "place": "Virtual Zoom Platform", "beneficiaries": "62" },
  { "date": "03-09-2020", "name": "Guest Lecture on Chi-Square Test and its Importance in Clinical Studies", "place": "Virtual Zoom Platform", "beneficiaries": "64" },
  { "date": "31-08-2020", "name": "Guest Lecture on Management of Acute Kidney Injury in Patients with Heart Failure", "place": "Virtual Zoom Platform", "beneficiaries": "64" },
  { "date": "25-08-2020", "name": "Virtual International Conference on Current Scenario in Advanced Pharmacy Practice", "place": "Online Zoom/YouTube Platform", "beneficiaries": "557" },
  { "date": "25-07-2020", "name": "Webinar on Appraisal of Research Literature- Evidence Based Practice", "place": "Zoom/YouTube Platform Online", "beneficiaries": "153" },
  { "date": "18-07-2020", "name": "Webinar on Scope and Opportunities in Clinical Data Management", "place": "Online Zoom/YouTube Platform", "beneficiaries": "250" },
  { "date": "12-07-2020", "name": "Webinar on Clinical Pharmacist Role in Patient Safety in Health Care System", "place": "Virtual Zoom Platform", "beneficiaries": "220" },
  { "date": "04-07-2020", "name": "Webinar on Pharmacoeconomics: Future of Indian HealthCare", "place": "Online Zoom/YouTube Platform", "beneficiaries": "355" },
  { "date": "19-06-2020 to 22-06-2020", "name": "International Faculty Development Programme on Innovation and Transformation on Pharmacy Research", "place": "Online Zoom/YouTube Platform", "beneficiaries": "620" },
  { "date": "08-06-2020", "name": "Webinar on Physician and Patient Perspective on Chemotherapy and Plasma therapy in COVID-19", "place": "Virtual Zoom Platform", "beneficiaries": "200" },
  { "date": "28-05-2020", "name": "Webinar on Real World Evidence on Health Care and Current Scenario", "place": "Virtual Zoom Platform", "beneficiaries": "550" },
  { "date": "08-03-2020", "name": "International Women's Day - Awareness program on Breast Cancer and Cervical Cancer", "place": "Government General Hospital, Guntur", "beneficiaries": "70" },
  { "date": "06-03-2020 & 07-03-2020", "name": "A Two Day Practicum on Antimicrobial Stewardship and its Clinical Appraisal", "place": "Seminar Hall, CLPT", "beneficiaries": "400" },
  { "date": "22-02-2020", "name": "Guest Lecture on D & C Act and Schedule Y differences in Indian and Global Pharmacovigilance Requirements", "place": "Seminar Hall, CLPT, Guntur", "beneficiaries": "120" },
  { "date": "19-02-2020 & 20-02-2020", "name": "Skill Development Programme on Entrepreneurship Skills", "place": "JAN AUSHADHI, Seminar Hall, CLPT, Guntur", "beneficiaries": "100" },
  { "date": "15-02-2020", "name": "National Pharma Quiz 2020", "place": "Chalapathi Institute of Pharmaceutical Sciences, Guntur", "beneficiaries": "208" },
  { "date": "11-02-2020", "name": "Guest Lecture on Multiple Myeloma Update", "place": "Seminar Hall, CLPT, Guntur", "beneficiaries": "60" },
  { "date": "06-02-2020", "name": "Continuous Medical Education Programme on Corona Virus", "place": "Department of General Medicine, GGH, Guntur", "beneficiaries": "100" },
  { "date": "04-02-2020", "name": "World Cancer Awareness Day- Awareness about Cancer", "place": "Department of Oncology, GGH, Guntur", "beneficiaries": "350" },
  { "date": "04-02-2020", "name": "Health and Medical Awareness Program", "place": "Chalapathi Pharmacy, Tadikonda, Guntur", "beneficiaries": "200" },
  { "date": "01-02-2020", "name": "Webinar on Precision Medicine and Advanced Therapies", "place": "Seminar Hall, CLPT", "beneficiaries": "30" },
  { "date": "11-01-2020", "name": "Guest Lecture on Methods of Pharmacoeconomics in Research and their Applications in Pharmacy", "place": "Seminar Hall, CLPT", "beneficiaries": "85" },
  { "date": "04-01-2020", "name": "Guest Lecture on Career and Life Skills for Success and Beyond", "place": "Seminar Hall, CLPT", "beneficiaries": "88" },
  { "date": "19-10-2019", "name": "A symposium on pharmaceutical care", "place": "Chalapathi Institute of Pharmaceutical Sciences, LAM", "beneficiaries": "250" },
  { "date": "13-08-2019", "name": "World organ donation day", "place": "Govt. General Hospital, Guntur", "beneficiaries": "58" },
  { "date": "01-08-2019", "name": "World breast feeding week", "place": "Govt. General Hospital, Guntur", "beneficiaries": "34" },
  { "date": "29-07-2019", "name": "World ORS day", "place": "Govt. General Hospital, Guntur", "beneficiaries": "47" },
  { "date": "13-07-2019", "name": "Real world evidence to improve healthcare", "place": "Chalapathi Institute of Pharmaceutical Sciences, LAM", "beneficiaries": "61" },
  { "date": "19-06-2019", "name": "Awareness on Seasonal diseases Dengue, malaria, Viral fever", "place": "NTR stadium, Guntur", "beneficiaries": "105" },
  { "date": "08-03-2019", "name": "World women's day", "place": "Govt. General Hospital, Guntur", "beneficiaries": "120" },
  { "date": "25-01-2019", "name": "Awareness on Seasonal diseases Dengue, malaria, Viral fever", "place": "Chalapathi pharmacy, Tadikonda", "beneficiaries": "120" },
  { "date": "29-09-2018", "name": "National Level Pharma Quiz - 2018", "place": "Seminar Hall, CLPT", "beneficiaries": "196" },
  { "date": "13-08-2018", "name": "Awareness on Importance of Organ Donation", "place": "Sushrutha Hall, Govt. General Hospital, Guntur", "beneficiaries": "55" },
  { "date": "29-07-2018", "name": "World ORS Day - Awareness on Usage of Oral Rehydration Salts", "place": "Pediatrics OP, Govt. General Hospital, Guntur", "beneficiaries": "49" },
  { "date": "29-06-2018", "name": "Basic Principles of Psychiatry and Drugs used in Psychiatric diseases", "place": "Dept. of Pharmacy Practice, Govt. General Hospital, Guntur", "beneficiaries": "53" },
  { "date": "19-06-2018", "name": "World Sickle Cell Awareness Day", "place": "Pediatrics department wards, Govt. General Hospital, Guntur", "beneficiaries": "26" },
  { "date": "25-03-2018", "name": "Health and Medication Awareness Programme", "place": "Police Parade Ground, Guntur", "beneficiaries": "76" },
  { "date": "08-03-2018", "name": "International Women's Day - Awareness on Breast and Cervical Cancer", "place": "Dept. of Radiotherapy, Govt. General Hospital, Guntur", "beneficiaries": "33" },
  { "date": "24-02-2018", "name": "Guest Lecture on Clinical Data Management", "place": "Seminar Hall, CLPT", "beneficiaries": "58" },
  { "date": "01-12-2017", "name": "World AIDS Day - Rally and Guest Lecture", "place": "DMHO Office, Guntur", "beneficiaries": "34" },
  { "date": "31-10-2017", "name": "World Breast Cancer Day-Awareness about Breast Cancer", "place": "Dept. Of Oncology & Sushrutha Hall, GGH, Guntur", "beneficiaries": "180" },
  { "date": "10-09-2017", "name": "World Suicide Prevention Day 2017", "place": "Sushrutha Hall, GGH, Guntur", "beneficiaries": "125" },
  { "date": "19-06-2017 to 21-06-2017", "name": "Out-Patient counselling", "place": "GGH, Guntur", "beneficiaries": "1560" },
  { "date": "14-05-2017", "name": "Health and Medication Review", "place": "Pedakakani", "beneficiaries": "650" },
  { "date": "20-04-2017", "name": "Health and Medical Awareness Programmes", "place": "Gorantla, Guntur", "beneficiaries": "276" },
  { "date": "17-03-2017", "name": "Awareness on World Sleep Day in association with Dept. Of Psychiatry, GGH, Guntur", "place": "Susrutha Hall, Govt. General Hospital, Guntur", "beneficiaries": "200" },
  { "date": "20-02-2017", "name": "Health Economics and Outcomes Research", "place": "CLPT-Seminar Hall", "beneficiaries": "67" },
  { "date": "17-02-2017 & 18-02-2017", "name": "International conference on New insights of Pharmacoepidemiology and Pharmacoeconomics", "place": "S.S. Convention Hall, CLPT", "beneficiaries": "1200" },
  { "date": "16-02-2017", "name": "Health and Medical Awareness Programmes", "place": "NTR stadium", "beneficiaries": "120" },
  { "date": "25-01-2017", "name": "National Level Pharma Quiz", "place": "CLPT-Seminar Hall", "beneficiaries": "152" },
  { "date": "22-12-2016", "name": "Diabetes and diabetic medicine Awareness camp", "place": "BrundavanGardens Walking track", "beneficiaries": "400" },
  { "date": "01-12-2016", "name": "Awareness on World's AIDS day", "place": "DMHO Office, Guntur", "beneficiaries": "150" },
  { "date": "17-11-2016", "name": "Debate Competition on Pharmacoeconomics- a shoot Basic Health Care", "place": "Seminar Hall, CLPT", "beneficiaries": "55" },
  { "date": "06-09-2016", "name": "Pharmacoeconomics- Basic concepts And skills", "place": "Seminar Hall, CLPT", "beneficiaries": "35" },
  { "date": "26-05-2016", "name": "ISPOR Poster presentations at 21st Annual ISPOR Meeting", "place": "Washington, USA", "beneficiaries": "2" },
  { "date": "25-05-2016", "name": "World schizophrenia day", "place": "Susrutha Hall, Govt General Hospital, Guntur", "beneficiaries": "45" },
  { "date": "03-03-2016", "name": "Elocution Competition (The Importance of Pharmacoeconomics In Healthcare)", "place": "Seminar Hall, CLPT, Lam, Guntur", "beneficiaries": "45" },
  { "date": "05-12-2015", "name": "Health and Medical Awareness Camp", "place": "Koretipadu Walking track, Guntur", "beneficiaries": "156" },
  { "date": "16-09-2015", "name": "Awareness about Seasonal Diseases", "place": "OPD, GGH, Guntur", "beneficiaries": "36" },
  { "date": "12-11-2015", "name": "World Pneumonia Day- 2015", "place": "Department of Pediatrics, GGH, Guntur", "beneficiaries": "38" },
  { "date": "01-11-2015", "name": "Home Medication Review-III", "place": "Sri Sai Homes, Gorantla, Guntur", "beneficiaries": "63" },
  { "date": "23-08-2015", "name": "Home Medication Review-II", "place": "Rajendra Nagar, Guntur", "beneficiaries": "48" },
  { "date": "07-08-2015", "name": "ISPOR Seminar, Topic: Global Scenario of Pharmacoeconomics", "place": "Seminar hall, CLPT", "beneficiaries": "48" },
  { "date": "24-07-2015", "name": "Home Medication Review-I", "place": "Swamiji Apartments, Chandramouli Nagar, Guntur", "beneficiaries": "82" },
  { "date": "18-07-2015", "name": "Inter Class Quiz Competition", "place": "Seminar Hall, CLPT", "beneficiaries": "30" },
  { "date": "09-07-2015", "name": "State Level Quiz Competition", "place": "Seminar hall, CLPT, Guntur", "beneficiaries": "75" },
  { "date": "09-07-2015", "name": "Health and Medical Awareness Camp", "place": "CLPT Bus stop, Lam, Guntur", "beneficiaries": "40" },
  { "date": "04-07-2015", "name": "Free Health Awareness Camp", "place": "Bus Station CLPT, Chalapathi Nagar, Lam, Guntur", "beneficiaries": "40" },
  { "date": "19-03-2015 to 20-03-2015", "name": "National Conference on Pharmacoeconomics and Outcomes Research - NCPEOR", "place": "Chalapathi Institute of Pharmaceutical Sciences, Guntur", "beneficiaries": "300" },
  { "date": "10-02-2015 to 14-02-2015", "name": "Swine Flu Awareness Programme", "place": "Schools and Junior colleges Around Guntur", "beneficiaries": "1600" },
  { "date": "14-11-2014", "name": "Free Health Awareness Camp", "place": "General Medicine Dept. GGH, Guntur & Guntur Railway Station", "beneficiaries": "114" },
  { "date": "10-08-2014", "name": "Awareness Camp on Health and Medication", "place": "Gudjanaguntla Walking Track, Guntur, Andhra Pradesh", "beneficiaries": "160" },
  { "date": "26-07-2014", "name": "Awareness Camp on Health and Medication", "place": "Gudjanaguntla Walking Track, Guntur, Andhra Pradesh", "beneficiaries": "93" },
  { "date": "19-07-2014", "name": "Awareness Camp on Health and Medication", "place": "NTR Stadium Grounds, Lakshmi Puram Main Road, Guntur, AP", "beneficiaries": "140" },
  { "date": "20-06-2014", "name": "Inter class Quiz and Essay Writing Competitions", "place": "Seminar Hall, CLPT, Lam", "beneficiaries": "23" },
  { "date": "05-05-2014", "name": "Essay Writing Competition", "place": "Seminar Hall, CLPT, Lam", "beneficiaries": "16" },
  { "date": "15-09-2013", "name": "Elocution and cultural competitions", "place": "Srirajendhra Suri Jain Amrutha Balashramam, Nallacheruvu", "beneficiaries": "76" },
  { "date": "17-06-2013 to 19-06-2013", "name": "Health Awareness Camp", "place": "Chalapathi Bus stop, Chalapathi Nagar, Guntur", "beneficiaries": "400" },
  { "date": "10-06-2013", "name": "Elocution (Pharmacoeconomics a general perspective) and Quiz", "place": "Seminar Hall, CLPT, Lam, Guntur", "beneficiaries": "30" },
  { "date": "23-04-2013", "name": "Awareness on balanced diet and medication use to blind children", "place": "Kala Bharathi blind school, chuttugunta", "beneficiaries": "31" }
];

const nssUnit1Activities = [
  { "date": '30-08-2024', "name": 'NSS Orientation Program', "place": 'Chalapathi Institute of Pharmaceutical Sciences, Lam, Guntur', "participants": '103', "beneficiaries": 'I/IV B. Pharmacy' },
  { "date": '17-08-2024', "name": 'Awareness program on Anti-ragging', "place": 'Chalapathi Institute of Pharmaceutical Sciences, Lam, Guntur', "participants": '86', "beneficiaries": 'I/IV B. Pharmacy' }
];

const nssUnit2Activities = [
  { "date": '13-08-2024', "name": 'Awareness program on "World Organ Donation Day"', "place": 'Chalapathi Institute of Pharmaceutical Sciences, Lam, Guntur', "participants": '106', "beneficiaries": 'III/IV B. Pharmacy' }
];

const ipaActivities = [
  { "date": '21-09-2024', "name": 'Health and Medical Awareness Program', "place": 'Annamaya Park, Brundavan Gardens, Guntur', "participants": '170', "beneficiaries": 'General Public' }
];

const isporAmaravatiActivities = [
  { "date": '28/08/2024', "name": 'Monthly Primary Health Screening Services', "place": 'Chalapathi Institute of Pharmaceutical Sciences, Guntur', "participants": '67', "beneficiaries": 'Community Members' }
];

async function migrate() {
  console.log("Starting Collection-based migration...");

  // 1. First, make sure the chapters exist (Singletons for Chapter info)
  for (const chapter of chapterMapping) {
    console.log(`Ensuring chapter ${chapter.title} exists...`);
    await client.createOrReplace({
      _id: chapter.id,
      _type: chapter.type,
      title: chapter.title,
      slug: { _type: 'slug', current: chapter.slug },
      description: `Institutional records for ${chapter.title}.`
    });
  }

  // 2. Explode activities into individual documents
  const allActivities = [
    { chapterId: 'ext-nss-unit-1', items: nssUnit1Activities },
    { chapterId: 'ext-nss-unit-2', items: nssUnit2Activities },
    { chapterId: 'ext-ipa-lam', items: ipaActivities },
    { chapterId: 'ext-ispor-amaravati', items: isporAmaravatiActivities },
    { chapterId: 'ext-ispor-anu', items: isporAnuActivities }
  ];

  for (const group of allActivities) {
    console.log(`Migrating ${group.items.length} activities for ${group.chapterId}...`);
    for (const item of group.items) {
      const slugBase = `${item.date}-${item.name}`;
      const uniqueSlug = slugify(slugBase, { lower: true, strict: true, remove: /[*+~.()'"!:@]/g });
      
      try {
        await client.create({
          _type: 'extensionActivityItem',
          title: item.name,
          slug: { _type: 'slug', current: uniqueSlug },
          chapter: {
            _type: 'reference',
            _ref: group.chapterId
          },
          date: item.date,
          place: item.place,
          participants: item.participants || "-",
          beneficiaries: item.beneficiaries,
          description: [], // Empty initially for user to fill via CMS
        });
        console.log(`Pushed: ${item.name}`);
      } catch (err) {
        if (err.message.includes('already exists')) {
            console.log(`Skipped (Exists): ${item.name}`);
        } else {
            console.error(`Error pushing ${item.name}:`, err.message);
        }
      }
    }
  }

  console.log("Collection-based migration complete!");
}

migrate();
