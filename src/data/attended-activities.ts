export interface AttendedActivityStatic {
  _id: string;
  eventName: string;
  organizedBy: string;
  date: string;
  section: 'seminar' | 'wdh' | 'fdp';
  facultyNames: string[]; // for matching or fallback text
}

export const staticAttendedActivities: AttendedActivityStatic[] = [
  // --- Seminar/Symposia ---
  {
    _id: "static-att-sem-1",
    eventName: "International Seminar on Innovations in Pharmaceutical Research and Patient Care",
    organizedBy: "A.P. Academy of Sciences",
    date: "2026-03-18",
    section: "seminar",
    facultyNames: ["Rama Rao Nadendla", "STV Raghavamma"]
  },
  {
    _id: "static-att-sem-2",
    eventName: "National Symposium on Quality by Design (QbD) in Drug Development",
    organizedBy: "Vikas College of Pharmacy",
    date: "2026-04-12",
    section: "seminar",
    facultyNames: ["Vijay Kumar Kolli"]
  },
  {
    _id: "static-att-sem-3",
    eventName: "State Level Symposium on Contemporary Pharmacological Screening Methods",
    organizedBy: "Nirmala College of Pharmacy",
    date: "2026-02-28",
    section: "seminar",
    facultyNames: ["Morla Sivaprasad", "KOJJA SAMBASIVA RAO"]
  },

  // --- WDH (Workshops / Hands-on) ---
  {
    _id: "static-att-wdh-1",
    eventName: "Hands-on Workshop on Advanced HPLC & HPTLC Method Development",
    organizedBy: "Spinco Biotech India Ltd.",
    date: "2026-01-20",
    section: "wdh",
    facultyNames: ["Darla Rajesh babu", "Jhansi Lakshmi Marreddy"]
  },
  {
    _id: "static-att-wdh-2",
    eventName: "National Workshop on Computational Drug Design & Molecular Modeling",
    organizedBy: "Schrodinger Software Division, Bangalore",
    date: "2026-03-05",
    section: "wdh",
    facultyNames: ["Bala Saraswathi Nadendla"]
  },
  {
    _id: "static-att-wdh-3",
    eventName: "Workshop on Intellectual Property Rights (IPR) & Patent Filing Procedures",
    organizedBy: "MSME IP Facilitation Centre, Guntur",
    date: "2026-05-15",
    section: "wdh",
    facultyNames: ["Rama Rao Nadendla", "Asiya Begum"]
  },

  // --- FTP/FDP/FEP/STTP ---
  {
    _id: "static-att-fdp-1",
    eventName: "AICTE-Sponsored Faculty Development Programme (FDP) on AI in Healthcare & Pharmacy Practice",
    organizedBy: "Jawaharlal Nehru Technological University, Kakinada",
    date: "2026-05-10",
    section: "fdp",
    facultyNames: ["Rama Rao Nadendla", "STV Raghavamma", "Vijay Kumar Kolli"]
  },
  {
    _id: "static-att-fdp-2",
    eventName: "Short Term Training Program (STTP) on Outcome Based Education and Pedagogy",
    organizedBy: "National Institute of Technical Teachers Training and Research (NITTTR), Chennai",
    date: "2026-04-25",
    section: "fdp",
    facultyNames: ["Morla Sivaprasad"]
  },
  {
    _id: "static-att-fdp-3",
    eventName: "Faculty Enhancement Program (FEP) on Advanced Experimental Pharmacology and Animal Ethics",
    organizedBy: "KLE Academy of Higher Education & Research, Belagavi",
    date: "2026-02-10",
    section: "fdp",
    facultyNames: ["KOJJA SAMBASIVA RAO", "Darla Rajesh babu"]
  }
];
