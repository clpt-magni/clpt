export interface CommitteeMember {
  sno: string;
  name: string;
  designation: string;
  mobile?: string;
}

export interface Committee {
  id: string;
  title: string;
  objectives: string[];
  members: CommitteeMember[];
  squad?: CommitteeMember[];
  documents?: { label: string; url: string }[];
  externalLinks?: { label: string; url: string }[];
}

export const academicCommittees: Committee[] = [
  {
    id: "anti-ragging",
    title: "ANTI RAGGING COMMITTEE",
    objectives: [
      "To ensure that there is no ragging in the campus or hostel.",
      "Arrange periodical and surprise visits to hostels/canteen by squad members.",
      "Monitor anti ragging activities in the institution, considers the recommendation of anti ragging squad and to take appropriate decisions.",
      "Implementation of government directives against ragging.",
      "Documentation of action taken by the committee."
    ],
    members: [
      { sno: "1", name: "Prof.RAMA RAO NADENDLA", designation: "PRINCIPAL", mobile: "9440101685" },
      { sno: "2", name: "K.N.RAJINI KANTH", designation: "PROFESSOR", mobile: "9490584053" },
      { sno: "3", name: "V.PRADEEP KUMAR", designation: "LIBRARAIN", mobile: "9866647276" },
      { sno: "4", name: "P.BHANU PRAKASH", designation: "PHYSICAL DIRECTOR", mobile: "9959577742" },
      { sno: "5", name: "Dr.V.PALLAVI", designation: "ASSISTANT PROFESSOR", mobile: "9441752983" },
      { sno: "6", name: "Smt.N.Rama Devi", designation: "Warden (Girls Hostel)", mobile: "7286037970" },
      { sno: "7", name: "Sri.P.Gopal Rao", designation: "Campus Incharge", mobile: "8497990642" },
      { sno: "8", name: "Sri.K.Ravindra", designation: "Civil Member", mobile: "9440808628" },
      { sno: "9", name: "Sri.P.GOPAL RAO", designation: "Campus Incharge", mobile: "8497990642" },
      { sno: "10", name: "Sri.K.RAVINDRA", designation: "Civil Member", mobile: "9440808628" },
      { sno: "11", name: "Mr.A.S.CHANDRAKANTH", designation: "Student of II B.Pharmacy", mobile: "8919331296" },
      { sno: "12", name: "Ms.B.SAI TEJA", designation: "Student of II B.Pharmacy", mobile: "7063938709" },
      { sno: "13", name: "Mr.S.ADARSH KUMAR", designation: "Student of III B.Pharmacy", mobile: "8919782643" },
      { sno: "14", name: "Ms.S.HARIKA", designation: "Student of III B.Pharmacy", mobile: "8096708443" },
      { sno: "15", name: "Ms.P.MEGHANA", designation: "Student of IV B.Pharmacy", mobile: "8712269493" },
      { sno: "16", name: "Ms.S.VINAY KUMAR", designation: "Student of IV B.Pharmacy", mobile: "9346131897" },
      { sno: "17", name: "Ms.K.R.HARSHA VARDHINI", designation: "Student II Pharm.D", mobile: "9490584053" },
      { sno: "18", name: "Ms.K.NAGA TEJASWINI", designation: "Student III Pharm.D", mobile: "7386663568" },
      { sno: "19", name: "Mr.M.NEERAJ KUMAR", designation: "Student IV Pharm.D", mobile: "8179743730" },
      { sno: "20", name: "Ms.J.ANJALI", designation: "Student V Pharm.D", mobile: "9100972361" },
      { sno: "21", name: "Mr.SHAIK BAJI", designation: "Student VI Pharm.D", mobile: "8978367009" }
    ],
    squad: [
      { sno: "01", name: "Prof.K.N.Rajinikanth", designation: "Professor", mobile: "9490584053" },
      { sno: "02", name: "Dr.V.PALLAVI", designation: "PROFESSOR", mobile: "9441752983" },
      { sno: "03", name: "Mr.D.ESWAR TONY", designation: "PROFESSOR", mobile: "9666627705" },
      { sno: "04", name: "Sri.P.Bhanu Prakash", designation: "Asst.Professor (Physical Director)", mobile: "9959577742" },
      { sno: "05", name: "Mr.P.BHANU PRAKASH", designation: "Physical Director", mobile: "9959577742" },
      { sno: "06", name: "Smt.P.SEETHA MAHALAKSHMI", designation: "Warden (Girls Hostel)", mobile: "7032794854" }
    ],
    documents: [
      { label: "UGC REGULATIONS", url: "/documents/committees/ugcregulations.pdf" }
    ]
  },
  {
    id: "cultural",
    title: "CULTURAL COMMITTEE",
    objectives: [
      "Plan events prior to the commencement of academic year.",
      "Organize all intra and inter collegiate cultural events.",
      "Encourage student’s participation in all cultural events with necessary guidance.",
      "Maintaining logistics like speakers, mike and other articles for running events.",
      "Documentation of all events and publishing them in college website.",
      "To procure instruments / necessary to organize cultural activities.",
      "To provide cash awards to students who excel in state level / national level cultural activities."
    ],
    members: [
      { sno: "01", name: "CULTURAL INCHARGE", designation: "FACULTY" },
      { sno: "02", name: "MEMBER", designation: "FACULTY" },
      { sno: "03", name: "STUDENT MEMBER", designation: "B.PHARMACY" },
      { sno: "04", name: "STUDENT MEMBER", designation: "M.PHARMACY" },
      { sno: "05", name: "STUDENT MEMBER", designation: "PHARM.D" }
    ]
  },
  {
    id: "grievance",
    title: "GRIEVANCE & REDRESSAL COMMITTEE",
    objectives: [
      "Create awareness on functioning of grievance cell among students and faculty.",
      "Review and resolve the reported grievances immediately.",
      "Documentation of all grievances in order to monitor the mechanism of grievance cell.",
      "Interacts with student co-ordinators of Grievance and redressal cell (GRC) from time to time for updating of issues.",
      "To record all online grievances, summarize annually and to resolve the issues."
    ],
    members: [
      { sno: "01", name: "CONVENOR", designation: "PRINCIPAL" },
      { sno: "02", name: "MEMBER", designation: "FACULTY" },
      { sno: "03", name: "MEMBER", designation: "FACULTY" },
      { sno: "04", name: "MEMBER", designation: "FACULTY" },
      { sno: "05", name: "MEMBER", designation: "FACULTY" },
      { sno: "06", name: "MEMBER", designation: "RESIDENT CARE TAKER (GIRLS HOSTEL)" },
      { sno: "07", name: "STUDENT MEMBER", designation: "B.PHARMACY" },
      { sno: "08", name: "STUDENT MEMBER", designation: "M.PHARMACY" },
      { sno: "09", name: "STUDENT MEMBER", designation: "PHARM.D" }
    ],
    externalLinks: [
      { label: "ONLINE GRIEVANCE REDRESSAL PORTAL", url: "https://www.vmedulife.com/institute/e-grievance/home/cips-guntur-andhra-pradesh" }
    ]
  },
  {
    id: "hostel",
    title: "HOSTEL COMMITTEE",
    objectives: [
      "The president of hostel committee shall report to the council of wardens regarding the effective discharge of duties.",
      "The hostel committee shall take active interest in general welfare of the students residing in the hostel.",
      "The hostel committee shall assist the wardens in the timely allotment of the rooms and report misuse.",
      "The hostel committee shall supervise and ensure proper and limited use of electricity and water.",
      "The hostel committee should create an atmosphere of harmony and co-operation."
    ],
    members: [
      { sno: "01", name: "CHAIRMAN", designation: "PRINCIPAL" },
      { sno: "02", name: "MEMBER", designation: "FACULTY" },
      { sno: "03", name: "MEMBER", designation: "CAMPUS INCHARGE" },
      { sno: "04", name: "MEMBER", designation: "RESIDENT WARDEN GIRLS HOSTEL" },
      { sno: "05", name: "MEMBER", designation: "RESIDENT WARDEN GIRLS HOSTEL" },
      { sno: "06", name: "MEMBER", designation: "RESIDENT WARDEN GIRLS HOSTEL" },
      { sno: "07", name: "MEMBER", designation: "RESIDENT WARDEN BOYS HOSTEL" },
      { sno: "08", name: "STUDENT MEMBER", designation: "B.PHARMACY" },
      { sno: "09", name: "STUDENT MEMBER", designation: "M.PHARMACY" },
      { sno: "10", name: "STUDENT MEMBER", designation: "PHARM.D" }
    ]
  },
  {
    id: "iaec",
    title: "INSTITUTIONAL ANIMAL ETHICS COMMITTEE (IAEC)",
    objectives: [
      "Ensure that all ongoing projects have been represented and documented in 'Form B'.",
      "Ensure that the 'Form B' is duly filled and carries the signature of the investigator.",
      "Only projects that involve small laboratory bred animals come under the purview of the IAEC.",
      "Carefully scrutinize and study the filled in 'Form B' regarding number of animals and species used."
    ],
    members: [
      { sno: "01", name: "CCSEA Main Nominee", designation: "" },
      { sno: "02", name: "CCSEA Link Nominee", designation: "" },
      { sno: "03", name: "Non Scientific Socially aware member", designation: "" },
      { sno: "04", name: "Scientist from outside the Institute", designation: "" },
      { sno: "05", name: "Biological Scientist Chair Person, IAEC", designation: "" },
      { sno: "06", name: "Scientist from different discipline, member secretary", designation: "" },
      { sno: "07", name: "IAEC Member/Veterinarian", designation: "" },
      { sno: "08", name: "Scientist from different discipline", designation: "" },
      { sno: "09", name: "Scientist I/C of AHF", designation: "" }
    ]
  },
  {
    id: "library",
    title: "LIBRARY ADVISORY COMMITTEE",
    objectives: [
      "Facilitate optimal use of library by all staff and students.",
      "Ensure easy access to the facilities of library by staff and students.",
      "Encourage reading/authoring habit among students and faculty.",
      "Undertake activities to foster an interest in books.",
      "Encourage students and staff to utilize digital library services.",
      "Promote new arrivals by organizing book exhibitions.",
      "To recommend required books / journals / furniture etc., to the principal."
    ],
    members: [
      { sno: "01", name: "CHAIRMAN", designation: "PRINCIPAL" },
      { sno: "02", name: "MEMBER SECRETARY", designation: "LIBRARIAN" },
      { sno: "03", name: "MEMBER", designation: "FACULTY" },
      { sno: "04", name: "MEMBER", designation: "FACULTY" },
      { sno: "05", name: "STUDENT MEMBER", designation: "B.PHARMACY" },
      { sno: "06", name: "STUDENT MEMBER", designation: "M.PHARMACY" },
      { sno: "07", name: "STUDENT MEMBER", designation: "PHARM.D" }
    ]
  },
  {
    id: "sports",
    title: "SPORTS COMMITTEE",
    objectives: [
      "Promote sportive spirit in students by organizing interclass/intercollegiate sports.",
      "Encourage student participations by arranging inter and intra institutional events.",
      "Promote the culture of participation in state level and national level events.",
      "Maintaining GYM equipment, material and accessories in good condition.",
      "To procure sports / gym / games equipment as per requirement.",
      "To organise sports classes as per the academic time-table.",
      "Documentation of the events conducted."
    ],
    members: [
      { sno: "01", name: "CHAIRMAN", designation: "PRINCIPAL" },
      { sno: "02", name: "MEMBER", designation: "FACULTY" },
      { sno: "03", name: "MEMBER", designation: "FACULTY" },
      { sno: "04", name: "STUDENT MEMBER", designation: "B.PHARMACY" },
      { sno: "05", name: "STUDENT MEMBER", designation: "M.PHARMACY" },
      { sno: "06", name: "STUDENT MEMBER", designation: "PHARM.D" }
    ]
  },
  {
    id: "students-council",
    title: "STUDENTS COUNCIL",
    objectives: [
      "Plan and carry out specified activities and projects.",
      "Supervising events that are assigned to them.",
      "Develop leadership skills and to promote harmonious relations.",
      "Improve student teacher relationships and orderly direction of activities.",
      "Share student ideas, interest and concerns with the faculty and principal."
    ],
    members: [
      { sno: "01", name: "COORDINATOR", designation: "FACULTY" },
      { sno: "02", name: "COORDINATOR", designation: "FACULTY" },
      { sno: "03", name: "FACILITATOR", designation: "STUDENT" },
      { sno: "04", name: "FACILITATOR", designation: "STUDENT" },
      { sno: "05", name: "FACILITATOR", designation: "STUDENT" },
      { sno: "06", name: "INCHARGE", designation: "SPORTS" },
      { sno: "07", name: "MEMBER", designation: "STUDENT" },
      { sno: "08", name: "MEMBER", designation: "STUDENT" },
      { sno: "09", name: "MEMBER", designation: "STUDENT" },
      { sno: "10", name: "INCHARGE", designation: "CULTURALS" },
      { sno: "11", name: "STUDENT MEMBER", designation: "B.PHARMACY" },
      { sno: "12", name: "STUDENT MEMBER", designation: "M.PHARMACY" },
      { sno: "13", name: "STUDENT MEMBER", designation: "PHARM.D" },
      { sno: "14", name: "INCHARGE", designation: "PRAXIS" }
    ]
  },
  {
    id: "women-cell",
    title: "WOMEN CELL",
    objectives: [
      "Empower women and ascertain multidisciplinary approach for overall personality development.",
      "Maintain a dignified congenial working environment for women employees and students.",
      "Organizes various training programmes and self-employment schemes.",
      "Encourages involvement in cultural and outreach activities.",
      "Supports the talent and contribution of women."
    ],
    members: [
      { sno: "01", name: "COORDINATOR", designation: "FACULTY" },
      { sno: "02", name: "COORDINATOR", designation: "FACULTY" },
      { sno: "03", name: "STUDENT MEMBER", designation: "B.PHARMACY" },
      { sno: "04", name: "STUDENT MEMBER", designation: "M.PHARMACY" },
      { sno: "05", name: "STUDENT MEMBER", designation: "PHARM.D" },
      { sno: "06", name: "INCHARGE", designation: "CULTURALS" },
      { sno: "07", name: "MEMBER", designation: "STUDENT" },
      { sno: "08", name: "MEMBER", designation: "STUDENT" },
      { sno: "09", name: "MEMBER", designation: "STUDENT" }
    ]
  },
  {
    id: "sc-st-counselling",
    title: "SC/ST COUNCELLING COMMITTEE",
    objectives: [
      "Create awareness about the existence of the committee.",
      "Ensure there is no discrimination of SC/ST students in the premises.",
      "Encourage active participation in institutional activities.",
      "Promote welfare schemes like 'Book Bank'.",
      "Create awareness on educational schemes and scholarships.",
      "Educate students and faculty to utilise academic and research facilities."
    ],
    members: [
      { sno: "01", name: "CHAIRMAN", designation: "FACULTY" },
      { sno: "02", name: "MEMBER", designation: "FACULTY" },
      { sno: "03", name: "MEMBER", designation: "FACULTY" },
      { sno: "04", name: "STUDENT MEMBER", designation: "B.PHARMACY" },
      { sno: "05", name: "STUDENT MEMBER", designation: "M.PHARMACY" },
      { sno: "06", name: "STUDENT MEMBER", designation: "PHARM.D" }
    ]
  },
  {
    id: "examination-cell",
    title: "EXAMINATION CELL",
    objectives: [
      "Finalisation of sessional/annual examination schedules.",
      "Review on progress of syllabi with academic coordinators.",
      "Preparation of examination duties and question papers.",
      "Moderation of question papers with subject experts.",
      "Checking percentage of attendance for eligibility.",
      "Maintenance of marks mother registers and publishing results.",
      "Award certificates to the students who pass finally."
    ],
    members: [
      { sno: "01", name: "CHAIRPERSON", designation: "PRINCIPAL" },
      { sno: "02", name: "CONTROLLER OF EXAMINATIONS", designation: "FACULTY" },
      { sno: "03", name: "MEMBER", designation: "FACULTY" },
      { sno: "04", name: "MEMBER", designation: "FACULTY" },
      { sno: "05", name: "MEMBER", designation: "FACULTY" }
    ]
  },
  {
    id: "news-letters",
    title: "CLPT NEWS LETTER & PRAXIS",
    objectives: [
      "Publish of academic, co-curricular, research activities.",
      "Enrich students and faculty with editorial and communication skills.",
      "Connected with community and receive feedback.",
      "Focus and communicate advancements and achievements.",
      "Promote student wall magazine innovative ideas (PRAXIS)."
    ],
    members: [
      { sno: "01", name: "CHIEF PATRON", designation: "PRESIDENT, CES" },
      { sno: "02", name: "PATRON", designation: "PRINCIPAL" },
      { sno: "03", name: "CHIEF EDITOR", designation: "FACULTY" },
      { sno: "04", name: "ASSOCIATE EDITOR", designation: "FACULTY" },
      { sno: "05", name: "STUDENT EDITOR", designation: "M.PHARMACY" },
      { sno: "06", name: "STUDENT EDITOR", designation: "B.PHARMACY" },
      { sno: "07", name: "STUDENT EDITOR", designation: "PHARM-D" }
    ]
  },
  {
    id: "ipr-cell",
    title: "INTELLECTUAL PROPERTY RIGHTS CELL",
    objectives: [
      "Guides faculty and students in patentability assessment.",
      "Help in drafting patent applications and filling relevant forms.",
      "Conduct internal audits for quality management.",
      "Maintain documents confidentially via non-disclosure agreements."
    ],
    members: [
      { sno: "01", name: "CHAIRPERSON", designation: "PRINCIPAL" },
      { sno: "02", name: "COORDINATOR", designation: "FACULTY" },
      { sno: "03", name: "COORDINATOR", designation: "FACULTY" },
      { sno: "04", name: "MEMBER", designation: "FACULTY" },
      { sno: "05", name: "STUDENT MEMBER", designation: "B.PHARMACY" },
      { sno: "06", name: "STUDENT MEMBER", designation: "M.PHARMACY" },
      { sno: "07", name: "STUDENT MEMBER", designation: "PHARM.D" },
      { sno: "08", name: "MEMBER", designation: "INDUSTRY" },
      { sno: "09", name: "MEMBER", designation: "ALUMNI" },
      { sno: "10", name: "MEMBER", designation: "IQAC" }
    ]
  },
  {
    id: "staff-selection",
    title: "STAFF SELECTION COMMITTEE",
    objectives: [
      "Evaluate requirement of teaching staff as per AICTE/PCI/UGC norms.",
      "Recruit faculty on merit.",
      "Develop policies for annual monitoring of intellectual contributions.",
      "Determine ways to support and improve faculty development.",
      "Mentoring program for new faculty."
    ],
    members: [
      { sno: "01", name: "Principal, CLPT", designation: "" },
      { sno: "02", name: "Professor, ANU", designation: "" },
      { sno: "03", name: "Professor, Padmavathi Mahila Viswavidyalayam", designation: "" },
      { sno: "04", name: "President, CES", designation: "" },
      { sno: "05", name: "Joint-Secretary, CES", designation: "" }
    ]
  },
  {
    id: "internal-complaint",
    title: "INTERNAL COMPLAINT COMMITTEE (ICC)",
    objectives: [
      "Complain of sexual harassment within three months of incident.",
      "Immediately notify committee at the earliest (within three days).",
      "Decide to deal with the case or reject the complaint.",
      "The committee may settle the matter through conciliation.",
      "Provide safe environment and protection if required."
    ],
    members: [
      { sno: "01", name: "MEMBER", designation: "FACULTY" },
      { sno: "02", name: "MEMBER", designation: "FACULTY" },
      { sno: "03", name: "MEMBER", designation: "FACULTY" },
      { sno: "04", name: "MEMBER", designation: "FACULTY" },
      { sno: "05", name: "MEMBER", designation: "FACULTY" },
      { sno: "06", name: "STUDENT MEMBER", designation: "B.PHARMACY" },
      { sno: "07", name: "STUDENT MEMBER", designation: "M.PHARMACY" },
      { sno: "08", name: "STUDENT MEMBER", designation: "PHARM.D" }
    ]
  },
  {
    id: "purchase",
    title: "PURCHASE COMMITTEE",
    objectives: [
      "Summarize requirements, verify stock, obtain quotations and place orders.",
      "Verify stock registers for equipments/chemicals/glassware.",
      "Verify dead stock register for every year.",
      "Verify invoices against purchase orders."
    ],
    members: [
      { sno: "01", name: "CHAIRMAN", designation: "PRINCIPAL" },
      { sno: "02", name: "MEMBER", designation: "FACULTY" },
      { sno: "03", name: "MEMBER", designation: "FACULTY" },
      { sno: "04", name: "MEMBER", designation: "FACULTY" },
      { sno: "05", name: "MEMBER", designation: "FACULTY" },
      { sno: "06", name: "MEMBER", designation: "FACULTY" }
    ]
  },
  {
    id: "transport",
    title: "TRANSPORT COMMITTEE",
    objectives: [
      "Responsible for safety norms of the bus and fees.",
      "Identification of bus stops and verification of documents.",
      "Continuous vigilance during the pickup and drop out of students.",
      "Guide students regarding routes of college buses."
    ],
    members: [
      { sno: "01", name: "CHAIRPERSON", designation: "PRINCIPAL" },
      { sno: "02", name: "MEMBER", designation: "FACULTY" },
      { sno: "03", name: "MEMBER", designation: "FACULTY" },
      { sno: "04", name: "MEMBER", designation: "FACULTY" }
    ]
  },
  {
    id: "unnat-bharat",
    title: "UNNAT BHARATH ABHIYAN",
    objectives: [
      "Understanding institutional capacity relevant to national needs of rural India.",
      "Re-emphasize need for field work and stakeholder interactions.",
      "Improvise health of rural people and educate on balanced diet.",
      "Create awareness on blood and organ donation.",
      "Develop new processes to sustain outcomes of research."
    ],
    members: [
      { sno: "01", name: "CHAIRMAN", designation: "PRINCIPAL" },
      { sno: "02", name: "MEMBER", designation: "FACULTY" },
      { sno: "03", name: "MEMBER", designation: "FACULTY" },
      { sno: "04", name: "MEMBER", designation: "FACULTY" },
      { sno: "05", name: "MEMBER AND INCHARGE", designation: "FACULTY" },
      { sno: "06", name: "MEMBER", designation: "STUDENT" },
      { sno: "07", name: "MEMBER", designation: "STUDENT" }
    ]
  }
];
