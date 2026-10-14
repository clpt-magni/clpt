"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  Award,
  ShieldCheck,
  FlaskConical,
  GraduationCap,
  Sparkles,
  BookOpen,
  Briefcase,
  Building2,
  Layers,
  Search,
  Check,
} from "lucide-react";

const sections = [
  { id: "intro", title: "Overview" },
  { id: "what-is-bpharm", title: "What is B.Pharm?" },
  { id: "bpharm-eligibility", title: "B.Pharm Eligibility" },
  { id: "bpharm-career", title: "Career Scope After B.Pharm" },
  { id: "what-is-mpharm", title: "What is M.Pharm?" },
  { id: "mpharm-eligibility", title: "M.Pharm Eligibility Criteria" },
  { id: "mpharm-career", title: "M.Pharm Career Opportunities" },
  { id: "how-to-select-college", title: "How to Select a College" },
  { id: "good-mpharm-college", title: "Choosing an M.Pharm College" },
  { id: "why-chalapathi", title: "Why Choose Chalapathi?" },
  { id: "which-course", title: "Which Course is Best for You?" },
  { id: "career-scope-india", title: "Pharmacy Career Scope in India" },
  { id: "conclusion", title: "Conclusion" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqsData = [
  {
    q: "What is the difference between B Pharmacy and M Pharmacy?",
    a: "The B.Pharmacy is an undergraduate degree program that gives basic knowledge of pharmaceutical sciences. This is normally a 4-year course. The M Pharmacy is a postgraduate degree course which generally takes two years and involves advanced study in a selected specialization.",
  },
  {
    q: "B Pharmacy vs M Pharmacy: which is better?",
    a: "There is no better course in all respects. B Pharmacy is the best choice for students who want to pursue this field after Class 12. M Pharmacy is for eligible B Pharmacy graduates who want to specialize or pursue advanced research opportunities.",
  },
  {
    q: "How to choose good B Pharmacy colleges in India?",
    a: "Check regulatory approvals, faculty qualifications, laboratories, curriculum, practical training, student support, fees, and placement details. Always verify current admission and eligibility requirements before applying.",
  },
  {
    q: "How to Choose a Good Pharmacy College?",
    a: "Compare specializations available, research facilities, faculty expertise, practical training, dissertation opportunities, industry exposure, and options for academic progression.",
  },
  {
    q: "What are the M Pharmacy specializations available in Chalapathi Institute of Pharmaceutical Sciences?",
    a: "Pharmaceutics, Pharmacology, Pharmaceutical Analysis, and Regulatory Affairs are listed as published program information by the institute. Please refer to the official website for the most up-to-date information on availability, eligibility, and how to apply for admission.",
  },
  {
    q: "Is Chalapathi Institute of Pharmaceutical Sciences a good college for pharmacy?",
    a: "It is an institution that aspiring students can evaluate while comparing pharmacy colleges in Guntur, Andhra Pradesh. See its latest program information, regulatory approvals, faculty, facilities, fees, and placement information to check if it meets your needs.",
  },
];

export default function BPharmacyVsMPharmacyClient() {
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      let currentSection = "";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection || sections[0].id);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "B Pharmacy vs M Pharmacy: Which Pharmacy Course and College is Right for You?",
    "description":
      "Comprehensive comparison between B Pharmacy and M Pharmacy: course duration, eligibility criteria, career opportunities, R&D scope, and choosing the best college in India.",
    "url": "https://www.chalapathipharmacy.ac.in/b-pharmacy-vs-m-pharmacy",
    "datePublished": "2026-10-14T10:00:00+05:30",
    "dateModified": "2026-10-14T10:00:00+05:30",
    "author": {
      "@type": "Organization",
      "name": "Chalapathi Institute of Pharmaceutical Sciences",
      "url": "https://www.chalapathipharmacy.ac.in",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Chalapathi Institute of Pharmaceutical Sciences",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.chalapathipharmacy.ac.in/images/flogo.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.chalapathipharmacy.ac.in/b-pharmacy-vs-m-pharmacy",
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      {/* Structured Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-[92px] left-0 h-1 bg-secondary z-[9999] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="flex flex-col min-h-screen font-roboto bg-slate-50">
        {/* Hero Section */}
        <section className="bg-primary-dark py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/60 text-sm font-bold uppercase tracking-wider mb-6">
              <Link href="/" className="hover:text-secondary transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <Link href="/blog" className="hover:text-secondary transition-colors">
                Blog
              </Link>
              <ChevronRight size={14} />
              <span className="text-white">B.Pharm vs M.Pharm Guide</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight max-w-4xl mb-6">
              B Pharmacy vs M Pharmacy: Which Pharmacy Course and College is Right for You?
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm font-bold uppercase tracking-wider">
              <span className="bg-secondary text-primary-dark px-3 py-1 rounded-full text-xs font-black">
                Course Comparison & Career Guidance
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} /> October 14, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} /> 8 Min Read
              </span>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="container mx-auto px-4 py-16 flex-1">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            {/* Sticky Table of Contents (Desktop) */}
            <aside className="hidden lg:block w-80 shrink-0">
              <div className="sticky top-32 bg-white rounded-3xl p-8 shadow-lg border border-slate-100 max-h-[calc(100vh-160px)] overflow-y-auto">
                <h3 className="font-poppins font-black text-lg text-primary-dark mb-6 flex items-center gap-2 border-b pb-4">
                  <Award size={18} className="text-secondary" /> Table of Contents
                </h3>
                <nav className="space-y-2.5">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`block text-xs font-bold transition-all pl-3 border-l-2 hover:text-primary ${
                        activeSection === section.id
                          ? "border-primary text-primary font-black scale-105 transform translate-x-1"
                          : "border-slate-100 text-slate-400"
                      }`}
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content Body */}
            <article className="flex-1 space-y-12 text-slate-700 leading-relaxed text-lg">
              {/* Introduction Card */}
              <div
                id="intro"
                className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                <p className="font-medium text-slate-800 text-xl leading-relaxed mb-4">
                  Pharmacy is a very important field because it links healthcare, medicine,
                  scientific research, and the pharmaceutical industry. Pharmacy education can lead
                  you to many rewarding career paths in drug development, pharmaceutical
                  manufacturing, quality control, clinical research, and healthcare services, which
                  offer growing opportunities. Choosing the right course after Class 12 or a
                  bachelor’s degree in pharmacy is an important step toward building a successful
                  future for students.
                </p>
                <p className="text-slate-600 mb-4">
                  The question of <strong>B Pharmacy or M Pharmacy</strong> is often on the minds of
                  students. Both are great learning opportunities but differ in duration, academic
                  depth, specialization, and career direction. Choosing a good B Pharmacy college
                  will help students to build a strong base in pharmaceutical sciences, and a good M
                  Pharmacy college will give them advanced knowledge in a specific field of
                  pharmacy.
                </p>
                <p className="text-slate-600">
                  If you are exploring pharmacy education in India, knowing these differences will
                  help you make an informed decision. This guide provides information on the
                  courses, eligibility criteria, career opportunities, and important points to
                  consider while looking for the best pharmacy college for your goals.
                </p>
              </div>

              {/* What is B.Pharm? */}
              <section id="what-is-bpharm" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  What is B.Pharm?
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    <strong>Bachelor of Pharmacy (B. Pharm)</strong> is an undergraduate course that
                    aims to make students familiar with the science of medicines and their
                    applications. The course includes pharmaceutical chemistry, pharmacology,
                    pharmaceutics, pharmaceutical analysis, and other subjects relevant to the
                    development, manufacture, quality, and safe use of medicines.
                  </p>
                  <p>
                    Generally, the B Pharmacy course is of <strong>four-year duration</strong> with{" "}
                    <strong>eight semesters</strong>. Students learn through classroom instruction,
                    laboratory practicals, assignments, projects, and other academic activities.
                  </p>
                </div>
              </section>

              {/* B Pharmacy Eligibility */}
              <section id="bpharm-eligibility" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  B Pharmacy Eligibility
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <div className="p-5 bg-blue-50 rounded-2xl border border-blue-200 text-blue-900">
                    <p className="font-semibold">
                      Students generally need to have studied Class 12 with physics and chemistry and
                      biology or mathematics from a recognized board.
                    </p>
                  </div>
                  <p>
                    Admission criteria, minimum marks, and rules of the entrance examination may
                    vary from institution to institution and from state to state (such as AP EAPCET
                    in Andhra Pradesh).
                  </p>
                  <p className="text-slate-600">
                    Students should check the current admission guidelines and approval status of
                    the institution before applying.
                  </p>
                </div>
              </section>

              {/* Career Scope After B. Pharmacy */}
              <section id="bpharm-career" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Career Scope After B. Pharmacy
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-6">
                  <p>After B Pharmacy, the graduates can search for opportunities in:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Pharmaceutical manufacturing and production",
                      "Quality assurance & quality control (QA/QC)",
                      "Medical & Pharmaceutical Sales",
                      "Pharmacovigilance and medication safety",
                      "Clinical research and clinical data management",
                      "Regulatory and pharmaceutical documentation",
                      "Community and hospital pharmacy, subject to registration rules",
                      "Research and higher education (M.Pharm, MBA, MS)",
                    ].map((career, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200"
                      >
                        <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                        <span className="text-base font-medium text-slate-800">{career}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-600">
                    B Pharmacy can be a good start for students who are interested in joining the
                    pharmaceutical industry after their graduation. Postgraduate education may also
                    be of interest to you if you are considering advanced research, specialized
                    technical work, or an academic career.
                  </p>
                </div>
              </section>

              {/* What is the M Pharmacy course? */}
              <section id="what-is-mpharm" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  What is the M Pharmacy Course?
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    <strong>M.Pharmacy (Master of Pharmacy)</strong> is a postgraduate degree course
                    that helps pharmacy graduates to achieve expertise in a specific area of
                    pharmacy sciences.
                  </p>
                  <p>
                    The course is generally of <strong>two years&apos; duration</strong> and divided
                    into <strong>four semesters</strong>. M Pharmacy emphasizes specialization,
                    advanced practical training, research methodology, scientific analysis, and
                    project work to a greater extent than undergraduate study.
                  </p>
                  <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-950 space-y-3">
                    <h4 className="font-bold font-poppins text-lg flex items-center gap-2">
                      <FlaskConical className="text-emerald-700" size={20} />
                      M.Pharm Specializations at Chalapathi Institute of Pharmaceutical Sciences:
                    </h4>
                    <p className="text-base text-emerald-900">
                      The students of Chalapathi Institute of Pharmaceutical Sciences can opt for
                      specialization in:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="bg-white p-3.5 rounded-xl border border-emerald-200 font-semibold text-primary-dark">
                        • Pharmaceutics
                      </div>
                      <div className="bg-white p-3.5 rounded-xl border border-emerald-200 font-semibold text-primary-dark">
                        • Pharmacology
                      </div>
                      <div className="bg-white p-3.5 rounded-xl border border-emerald-200 font-semibold text-primary-dark">
                        • Pharmaceutical Analysis
                      </div>
                      <div className="bg-white p-3.5 rounded-xl border border-emerald-200 font-semibold text-primary-dark">
                        • Regulatory Affairs
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* M Pharmacy Eligibility Criteria */}
              <section id="mpharm-eligibility" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  M Pharmacy Eligibility Criteria
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <div className="p-5 bg-indigo-50 rounded-2xl border border-indigo-200 text-indigo-900">
                    <p className="font-semibold">
                      Candidates must have a B.Pharmacy degree from any recognized institution
                      approved by the Pharmacy Council of India (PCI).
                    </p>
                  </div>
                  <p>
                    Minimum marks, entrance tests (such as GPAT or state-level PGECET), and other
                    admission requirements are as per the rules and policies of the institution and
                    state counseling authority.
                  </p>
                  <p className="text-slate-600">
                    Students are advised to check the latest eligibility criteria before applying.
                  </p>
                </div>
              </section>

              {/* M Pharmacy Career Opportunities */}
              <section id="mpharm-career" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  M Pharmacy Career Opportunities
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-6">
                  <p>
                    After M Pharmacy qualification, graduates can pursue specialized, high-impact
                    roles in:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Pharmaceutical Research and Development (R&D)",
                      "Development of formulations (F&D)",
                      "Quality control and quality assurance management",
                      "Analysis of pharmaceuticals & method validation",
                      "Regulatory Affairs & global dossiers (USFDA, EMA)",
                      "Pharmacology Research & pre-clinical safety",
                      "Clinical trials & clinical studies",
                      "Pharmaceutical education and teaching (Faculty / Lecturer)",
                    ].map((career, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200"
                      >
                        <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                        <span className="text-base font-medium text-slate-800">{career}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-medium text-slate-800">
                    The proper specialization depends on the interests, academic strengths, and
                    desired career path of the student.
                  </p>
                </div>
              </section>

              {/* How to Select a Good Pharmacy College */}
              <section id="how-to-select-college" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  How to Select a Good Pharmacy College
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-6">
                  <p>
                    Your choice of institution can have an impact on your academic experience,
                    practical skills, and career preparation. Students searching for a good B
                    Pharmacy college should not just look at the name or the location of the
                    college.
                  </p>

                  <div className="space-y-4">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                      <h4 className="font-bold text-primary-dark font-poppins text-lg">
                        1. Check Approvals &amp; Accreditation
                      </h4>
                      <p className="text-slate-600 text-base">
                        Verify the institution&apos;s current approvals, recognition, affiliation, and
                        applicable regulatory requirements (PCI approval, NAAC grade, NBA
                        accreditation). These checks are important to make sure that the program
                        meets relevant educational standards.
                      </p>
                    </div>

                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                      <h4 className="font-bold text-primary-dark font-poppins text-lg">
                        2. Assess Laboratories and Infrastructure
                      </h4>
                      <p className="text-slate-600 text-base">
                        Hands-on experience is an essential part of pharmacy education. Look for
                        well-equipped laboratories, a suitable library, availability of learning
                        resources, and facilities for scientific experiments and project work.
                      </p>
                    </div>

                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                      <h4 className="font-bold text-primary-dark font-poppins text-lg">
                        3. Review Faculty and Academic Support
                      </h4>
                      <p className="text-slate-600 text-base">
                        Experienced faculty can help learners comprehend complex subjects and
                        develop analytical skills. Look at the faculty credentials, academic
                        support, mentoring opportunities, and the availability of practical
                        guidance.
                      </p>
                    </div>

                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                      <h4 className="font-bold text-primary-dark font-poppins text-lg">
                        4. Research, Career, and Internship Services
                      </h4>
                      <p className="text-slate-600 text-base">
                        A good pharmacy program should offer practical exposure, projects, industry
                        interactions, or anything that would assist students in comprehending the
                        expectations of the industry. Placement information should be read
                        carefully, and the information should include clearly documented outcomes as
                        opposed to general promotional claims.
                      </p>
                    </div>

                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                      <h4 className="font-bold text-primary-dark font-poppins text-lg">
                        5. Compare Student Facilities and Fees
                      </h4>
                      <p className="text-slate-600 text-base">
                        Include tuition fees, accommodation, transport, scholarships (where
                        available), and other expenses. A realistic comparison can help families
                        choose an appropriate institution and not overlook critical costs.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Qualities to Look for in a Good M Pharmacy College */}
              <section id="good-mpharm-college" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Qualities to Look for in a Good M Pharmacy College
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-5">
                  <p>
                    Students must look for a good M.Pharmacy college that offers specialization
                    opportunities, research opportunities, laboratory facilities, and faculty
                    expertise.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <h4 className="font-bold text-primary-dark font-poppins">
                        Options for Specialization
                      </h4>
                      <p className="text-sm text-slate-600">
                        Choose a program that corresponds to the career you want. Pharmaceutics
                        suits formulations and drug delivery; pharmacology studies drug action and
                        biological systems; pharmaceutical analysis focuses on testing and
                        analytical methods; regulatory affairs governs pharmaceutical regulations
                        and compliance.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <h4 className="font-bold text-primary-dark font-poppins">
                        Research Facilities
                      </h4>
                      <p className="text-sm text-slate-600">
                        Check out the availability of special instruments (HPLC, GC, dissolution
                        apparatus), research guidance, project funding, and scientific learning
                        resources.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <h4 className="font-bold text-primary-dark font-poppins">Industry Relevance</h4>
                      <p className="text-sm text-slate-600">
                        Verify if the curriculum and practical activities equip students for the
                        current demands and regulatory standards of the pharmaceutical industry.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <h4 className="font-bold text-primary-dark font-poppins">
                        Academic Progression
                      </h4>
                      <p className="text-sm text-slate-600">
                        If you are considering a Ph.D. or an academic career, evaluate research
                        guidance, dissertation opportunities, publication records, and eligibility
                        criteria for advanced doctoral studies.
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600">
                    By comparing these elements, you can find which postgraduate institution fits
                    your career aspirations.
                  </p>
                </div>
              </section>

              {/* Why Choose Chalapathi Institute of Pharmaceutical Sciences? */}
              <section id="why-chalapathi" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Why Choose Chalapathi Institute of Pharmaceutical Sciences?
                </h2>
                <div className="bg-primary-dark text-white rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-20 -mt-20" />
                  <p className="leading-relaxed mb-6 font-medium text-lg">
                    If you are looking for B Pharmacy and D Pharmacy colleges in India,{" "}
                    <strong>Chalapathi Institute of Pharmaceutical Sciences</strong> in Guntur,
                    Andhra Pradesh is an option.
                  </p>
                  <p className="leading-relaxed mb-6 text-white/90 text-base">
                    The institute provides B.Pharmacy &amp; M.Pharmacy courses to develop knowledge
                    and practical skills in the pharmaceutical field. Its M. Pharmacy offerings
                    include <em>Pharmaceutics</em>, <em>Pharmacology</em>,{" "}
                    <em>Pharmaceutical Analysis</em>, and <em>Regulatory Affairs</em>, as per the
                    published program information.
                  </p>
                  <p className="leading-relaxed mb-6 text-white/80 text-sm">
                    The aspirants can check out the course curriculum, faculty details, facilities
                    available in the institution, admission criteria, and placement details to
                    decide wisely whether the institute is suitable for their academic goals or not.
                    Students are advised to verify the latest program approvals, eligibility
                    criteria, fees, and intake, and admission procedures from the official website
                    before taking admission.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link href="/programs">
                      <span className="bg-secondary hover:bg-secondary-light text-primary-dark font-black px-6 py-3.5 rounded-xl text-sm uppercase tracking-wider inline-block transition-colors cursor-pointer shadow-md">
                        Check Course Programs
                      </span>
                    </Link>
                    <Link href="/admissions">
                      <span className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl text-sm uppercase tracking-wider inline-block transition-colors cursor-pointer border border-white/20">
                        Admission Details
                      </span>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Which course is best for you? */}
              <section id="which-course" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Which Course is Best for You?
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-6">
                  <p>
                    If you need to decide between B Pharmacy and M Pharmacy, it is contingent upon
                    your current qualification and your future plans.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Choose B.Pharm Box */}
                    <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-4">
                      <div className="flex items-center gap-2 text-primary-dark font-bold font-poppins text-lg">
                        <GraduationCap className="text-primary" size={22} />
                        <h4>Opt for B Pharmacy if:</h4>
                      </div>
                      <ul className="space-y-2.5 text-slate-700 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="text-primary shrink-0 mt-0.5" size={16} />
                          You have passed Class 12 with the required science subjects (PCM/PCB).
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="text-primary shrink-0 mt-0.5" size={16} />
                          You are looking to build a foundation in pharmaceutical sciences.
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="text-primary shrink-0 mt-0.5" size={16} />
                          You want to learn about the different career paths in pharmacy.
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="text-primary shrink-0 mt-0.5" size={16} />
                          You want to keep the option of postgraduate study open for the future.
                        </li>
                      </ul>
                    </div>

                    {/* Choose M.Pharm Box */}
                    <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-4">
                      <div className="flex items-center gap-2 text-primary-dark font-bold font-poppins text-lg">
                        <FlaskConical className="text-emerald-600" size={22} />
                        <h4>Choose M Pharmacy if:</h4>
                      </div>
                      <ul className="space-y-2.5 text-slate-700 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                          You have completed B Pharmacy and met the eligibility criteria.
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                          You want to specialize in a specific pharmaceutical discipline.
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                          You have an interest in research, formulation development, analysis, or
                          regulatory work.
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="text-emerald-600 shrink-0 mt-0.5" size={16} />
                          You would like to explore additional technical, managerial, or academic
                          opportunities.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-slate-600 text-base">
                    If you are still in doubt, consult with academic counselors, read the syllabus,
                    and discuss your areas of interest with professionals working in the
                    pharmaceutical sector.
                  </p>
                </div>
              </section>

              {/* Career Scope of Pharmacy in India */}
              <section id="career-scope-india" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Career Scope of Pharmacy in India
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    India has a big pharmaceutical sector that covers medicine manufacturing,
                    research, testing, distribution, clinical research, and regulatory activities.
                    Graduates in pharmacy can pursue a variety of positions, depending on their
                    qualifications, skills, practical experience, and applicable professional
                    requirements.
                  </p>
                  <p>
                    <strong>B Pharmacy</strong> can give the academic base required to start
                    exploring these opportunities. <strong>M Pharmacy</strong> allows students to
                    acquire advanced knowledge in particular subjects.
                  </p>
                  <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200 text-amber-950 text-base">
                    <p>
                      <strong>Note:</strong> Just having a degree does not mean you will get a job
                      or a certain salary. Employers may require technical skills, communication
                      skills, internships, research experience, entrance qualifications, and
                      role-specific requirements. Students should therefore seek to combine their
                      education with practical learning and continuous professional development.
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section id="conclusion" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Conclusion
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    Choosing between B Pharmacy and M Pharmacy is a big decision and should be made
                    based on your educational background, interests, and career goals. B Pharmacy
                    offers a wide introduction to pharmaceutical sciences, and M Pharmacy allows
                    the development of specialist knowledge and research skills.
                  </p>
                  <p>
                    While comparing the colleges, check the regulatory approvals, faculty
                    expertise, laboratories, course structure, research opportunities, student
                    support, and transparent placement information. These factors are better than
                    merely choosing an institution on the basis of reputation.
                  </p>
                  <p>
                    Whether you are looking for a good B.Pharmacy college after Class 12 or a good
                    M.Pharmacy college after graduation, extensive research will help you find a
                    suitable academic environment. Students who are looking for the best pharmacy
                    college for them can check the programs offered by{" "}
                    <strong>Chalapathi Institute of Pharmaceutical Sciences</strong> and check the
                    official admission details before applying.
                  </p>
                  <p className="font-medium text-slate-800">
                    Making an informed decision can help you to develop the knowledge, practical
                    skills, and professional confidence needed to pursue opportunities in
                    pharmaceutical sciences.
                  </p>
                </div>
              </section>

              {/* Frequently Asked Questions (FAQs) */}
              <section id="faqs" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Frequently Asked Questions (FAQs)
                </h2>
                <div className="space-y-4">
                  {faqsData.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-3"
                    >
                      <h4 className="font-poppins font-bold text-primary-dark text-lg flex items-start gap-2.5">
                        <HelpCircle className="text-secondary shrink-0 mt-1" size={18} />
                        <span>
                          {idx + 1}. {faq.q}
                        </span>
                      </h4>
                      <p className="text-slate-600 pl-7 text-base leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Back to Blog */}
              <div className="pt-8 border-t flex flex-wrap items-center justify-between gap-4">
                <Link href="/blog">
                  <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:text-primary-dark transition-colors cursor-pointer">
                    <ArrowLeft size={16} /> Back to Blog Index
                  </span>
                </Link>
                <Link href="/how-to-select-a-good-pharmacy-college">
                  <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:text-primary-dark transition-colors cursor-pointer">
                    Read: How to Select a Good Pharmacy College <ChevronRight size={16} />
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
