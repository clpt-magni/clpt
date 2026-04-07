import {
  FileText,
  Users,
  Award,
  BookOpen,
  Microscope,
  Briefcase,
  Download,
  ShieldCheck,
  Globe,
  Settings,
  ClipboardList,
  GraduationCap,
  MessageSquare,
  Building2,
  FileSearch,
  LayoutDashboard,
  Zap,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  items?: NavItem[];
  isMega?: boolean;
}

export interface SidebarGroup {
  category: string;
  icon: any;
  items: { label: string; href: string; items?: { label: string; href: string }[] }[];
}

export const topNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    isMega: true,
    items: [
      {
        label: "Profile",
        href: "/about",
        items: [
          { label: "History", href: "/about#history" },
          { label: "Vision", href: "/about#vision" },
          { label: "Mission", href: "/about#mission" },
          { label: "Quality Policy", href: "/about#quality-policy" },
        ],
      },
      {
        label: "Committees",
        href: "/about/academic-council",
        items: [
          { label: "Academic Council", href: "/about/academic-council" },
          { label: "Board of Studies (BOS)", href: "/about/bos" },
          { label: "Governing Body", href: "/about/governing-body" },
          { label: "Finance Committee", href: "/about/finance-committee" },
        ],
      },
      {
        label: "Admin Leadership",
        href: "/about/ces-overview",
        items: [
          { label: "CES-OVERVIEW", href: "/about/ces-overview" },
          { label: "Chairman", href: "/about/chairman" },
          { label: "Principal", href: "/about/principal" },
          { label: "Faculty", href: "/faculty" },
          { label: "Affiliations and Approvals", href: "/about/affiliations" },
        ],
      },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    items: [
      { label: "Overview", href: "/admissions" },
      { label: "Application Procedure", href: "/admissions/procedure" },
      { label: "Rules and Regulations", href: "/admissions/rules" },
    ],
  },
  { label: "Alumni", href: "https://alumni.chalapathipharmacy.in/" },
  {
    label: "Programmes",
    href: "/programs",
    items: [
      { label: "Overview", href: "/programs" },
      { label: "B.Pharmacy", href: "/programs/b-pharmacy" },
      { label: "M.Pharmacy", href: "/programs/m-pharmacy" },
      { label: "Pharm.D", href: "/programs/pharmd" },
    ],
  },
  {
    label: "Departments",
    href: "/departments",
    items: [
      { label: "B.Pharmacy", href: "/departments" },
      { label: "Pharmaceutics", href: "/departments" },
      {
        label: "Pharmaceutical Analysis including Regulatory Affairs",
        href: "/departments",
      },
      {
        label: "Pharmacology including Pharmacy Practice",
        href: "/departments",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    isMega: true,
    items: [
      {
        label: "Campus & Infrastructure",
        href: "/resources/infrastructure",
        items: [
          { label: "Seminar Hall", href: "/resources/seminar-hall" },
          { label: "Hostel", href: "/resources/hostel" },
          { label: "Canteen", href: "/resources/canteen" },
          { label: "Central Stores", href: "/resources/central-stores" },
          { label: "Play Ground", href: "/resources/play-ground" },
          { label: "Sports Room", href: "/resources/sports-room" },
          { label: "Other Facilities", href: "/resources/other-facilities" },
        ],
      },
      {
        label: "Scientific & Research",
        href: "/resources/labs",
        items: [
          { label: "Laboratories", href: "/resources/labs" },
          { label: "Chalapathi Drug Testing Laboratory", href: "/resources/drug-testing-lab" },
          { label: "Medicinal Plant Garden", href: "/resources/medicinal-garden" },
          { label: "Drug Museum", href: "/resources/drug-museum" },
          { label: "Animal House", href: "/resources/animal-house" },
        ],
      },
      {
        label: "Academic & Services",
        href: "/resources/library",
        items: [
          { label: "Library", href: "/resources/library" },
          { label: "Repository Service", href: "https://clptlibrary.weebly.com/repository-services.html" },
          { label: "PPT Presentations", href: "/resources/powerpoint-presentations" },
          { label: "Computer cum Language Laboratory", href: "/resources/computer-lab" },
          { label: "Audio-visual facility", href: "/resources/audio-visual" },
          { label: "Pharmacy", href: "/resources/pharmacy" },
          { label: "Student Recreation Centre", href: "/resources/recreation-centre" },
        ],
      },
    ],
  },
  { label: "Syllabus", href: "/syllabus" },
  { label: "Contact", href: "/contact" },
  { label: "Location", href: "/location" },
];

export const sidebarNav: SidebarGroup[] = [
  {
    category: "Statutory & Compliance",
    icon: ShieldCheck,
    items: [
      { label: "PCI APPROVAL LETTERS", href: "/compliance/pci-approval" },
      { label: "AICTE - EOA REPORTS", href: "/compliance/aicte-reports" },
      { label: "NIRF DATA", href: "/compliance/nirf-data" },
      { label: "AUDIT REPORTS", href: "/compliance/audit-reports" },
      { label: "RTI", href: "/compliance/rti" },
      { label: "UGC-UNDERTAKING", href: "/compliance/ugc-undertaking" },
      {
        label: "AICTE FEED BACK PORTAL",
        href: "https://www.aicte-india.org/feedback/index.php",
      },
      { label: "UGC E-SAMADHAAN", href: "https://samadhaan.ugc.ac.in/" },
    ],
  },
  {
    category: "Academic & Research Excellence",
    icon: Award,
    items: [
      { label: "IQAC", href: "/academic/iqac" },
      { label: "IIPEC", href: "/academic/iipec" },
      { label: "FACULTY", href: "/faculty" },
      { label: "COMMITTEES", href: "/academic/committees" },
      { label: "INSTITUTIONAL DEVELOPMENT PLAN", href: "/academic/idp" },
      { label: "PUBLICATIONS", href: "/research/publications" },
      { label: "RESEARCH & DEVELOPMENT", href: "/research/r-and-d" },
      { label: "INTELLECTUAL PROPERTY CENTRE (IPFC)", href: "/innovation/ipfc" },
    ],
  },
  {
    category: "Student Success Center",
    icon: GraduationCap,
    items: [
      { label: "CONSPECTUS", href: "/student/conspectus" },
      { label: "STUDENT SUPPORT", href: "/student/support" },
      { label: "FEE STRUCTURE", href: "/student/fee-structure" },
      { label: "STUDENTS LIST", href: "/student/students-list" },
      { label: "MOOCS", href: "/student/moocs" },
      { label: "PRAXIS STUDENTS WALL MAGAZINE", href: "/student/praxis" },
      { label: "DOWNLOAD APPLICATIONS", href: "/student/downloads" },
      {
        label: "FORMAT FOR INDUSTRIAL TRAINING REPORT",
        href: "/student/training-report-format",
      },
      {
        label: "ADMISSIONS FOR INTERNATIONAL STUDENTS",
        href: "/admission/international",
      },
    ],
  },
  {
    category: "Corporate & Community Engagement",
    icon: Briefcase,
    items: [
      { label: "PLACEMENTS", href: "/placements" },
      { label: "SKILL DEVELOPMENT CENTER", href: "/student/skill-development" },
      { label: "MoU", href: "/about/mou" },
      { label: "JOBS @ CLPT", href: "/careers" },
      {
        label: "EXTENSION ACTIVITIES",
        href: "/extension-activities",
        items: [
          { label: "NSS UNIT - I", href: "/extension-activities/nss-unit-1" },
          { label: "NSS UNIT - II", href: "/extension-activities/nss-unit-2" },
          { label: "IPA - LAM", href: "/extension-activities/ipa-lam" },
          { label: "ISPOR AMARAVATI", href: "/extension-activities/ispor-amaravati" },
          { label: "ISPOR ANU", href: "/extension-activities/ispor-anu" },
        ],
      },
    ],
  },
  {
    category: "Institutional Heritage & Support",
    icon: Building2,
    items: [
      { label: "BEST PRACTICES", href: "/about/best-practices" },
      { label: "NEWS LETTERS - ARCHIEVE", href: "/newsletters" },
      { label: "AWARDS AND HONOURS", href: "/about/awards" },
      { label: "STAFF SUPPORT", href: "/staff/support" },
    ],
  },
];
