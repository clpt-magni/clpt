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
  ExternalLink,
  DollarSign,
  FileCheck,
  Building2,
} from "lucide-react";

const sections = [
  { id: "intro", title: "Overview" },
  { id: "accreditation", title: "1. Accreditation & Approvals" },
  { id: "course-structure", title: "2. B.Pharm vs M.Pharm" },
  { id: "laboratories", title: "3. Labs & Research Facilities" },
  { id: "faculty", title: "4. Faculty Qualifications" },
  { id: "specializations", title: "5. Specializations & Scope" },
  { id: "placements", title: "6. Placements & Industry" },
  { id: "fees", title: "7. Fees & Scholarships" },
  { id: "admissions", title: "8. Admission Process" },
  { id: "academics", title: "9. Academic Environment" },
  { id: "why-chalapathi", title: "Why Chalapathi (CLPT)?" },
  { id: "summary", title: "Summary" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqsData = [
  {
    q: "How to select a good B. Pharmacy college in India?",
    a: "Check PCI approval for the concerned course, academic affiliation, curriculum, lab facilities, faculty, placement records, fees, and admission requirements. Compare official information from several institutions before you decide.",
  },
  {
    q: "What to Look for in a Good M Pharmacy College?",
    a: "Look for a good specialization, qualified faculty, research facilities, access to laboratories, project supervision, and clear placement information. Ensure the program complies with relevant approval requirements.",
  },
  {
    q: "Duration of B.Pharm and M.Pharm?",
    a: "B. Pharm is four years in duration, generally divided into eight semesters. M.Pharm is generally two years in duration, divided into four semesters, after qualifying for a pharmacy degree.",
  },
  {
    q: "What specializations are available in M.Pharm?",
    a: "Depending on the institution, typical specializations are pharmaceutics, pharmacology, pharmaceutical analysis, quality assurance, and regulatory affairs. Check the current program list before submitting an application.",
  },
  {
    q: "Do placements matter while choosing a pharmacy college?",
    a: "Yes. Career services can help students explore opportunities, but take a close look at the most recent data. Do not just look at the headline claims; look at the number of students eligible, placement outcomes, job roles, and employers participating.",
  },
  {
    q: "Why should I join Chalapathi Institute of Pharmaceutical Sciences?",
    a: "You can think over it by looking at their B.Pharm and M.Pharm programs, offered specializations, facilities, admissions, and placement records. Compare these details with your own career goals and check out the current course and admission requirements before you enroll.",
  },
];

export default function HowToSelectGoodPharmacyCollegeClient() {
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
    "headline": "How to Select a Good Pharmacy or M Pharmacy College",
    "description":
      "A comprehensive guide on how to choose a good B Pharmacy or M Pharmacy college in India. Evaluate PCI approval, lab infrastructure, faculty credentials, placements, and fees.",
    "url": "https://www.chalapathipharmacy.ac.in/how-to-select-a-good-pharmacy-college",
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
      "@id": "https://www.chalapathipharmacy.ac.in/how-to-select-a-good-pharmacy-college",
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
              <span className="text-white">How to Select a Good Pharmacy College</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight max-w-4xl mb-6">
              How to Select a Good Pharmacy or M Pharmacy College
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm font-bold uppercase tracking-wider">
              <span className="bg-secondary text-primary-dark px-3 py-1 rounded-full text-xs font-black">
                Admissions & College Selection
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} /> October 14, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} /> 7 Min Read
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
                  Choosing the right pharmacy college is an important decision for students aspiring
                  to make a career in pharmaceutical sciences, healthcare, drug research, or the
                  pharmaceutical industry. There are many institutions that offer undergraduate and
                  postgraduate programs, and so students should consider more than just the college
                  rankings or campus facilities before applying.
                </p>
                <p className="text-slate-600 mb-4">
                  The good B Pharmacy colleges give a strong foundation in pharmaceutical sciences,
                  practical lab experience, and chances to learn how medicines are developed,
                  tested, and used. A good M Pharmacy college should offer focused academic
                  training, research opportunities, and exposure to relevant industry practices for
                  graduates looking to specialize.
                </p>
                <p className="text-slate-600">
                  If you are a student of Class 12th or you have a B. Pharm degree, then to choose
                  the best pharmacy college for your goals, you need to do detailed research. This
                  guide will tell you the important things to think about before you make your
                  decision.
                </p>
              </div>

              {/* 1. Look at Accreditation, Approval, and Affiliation */}
              <section id="accreditation" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  1. Look at Accreditation, Approval, and Affiliation
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-5">
                  <p>
                    The first thing when selecting a pharmacy college is to check the regulatory
                    approval and the academic recognition of the college. In India, the{" "}
                    <strong>Pharmacy Council of India (PCI)</strong> is the body providing
                    information about the approved pharmacy courses and institutions. Students
                    should check the approval status related to their intended program and admission
                    year.
                  </p>
                  <p>
                    Also check the institution’s university affiliation or autonomous status,
                    accreditation details, and official academic records. This information will help
                    you understand how the program is accredited and managed.
                  </p>
                  <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 text-base space-y-2">
                    <div className="flex items-center gap-2 font-bold text-amber-950">
                      <ShieldCheck size={20} className="text-amber-600" />
                      Important Verification Tip
                    </div>
                    <p>
                      While comparing a good B Pharmacy college, do not rely only on promotional
                      advertisements. Refer to the official website of the PCI and the published
                      information of the institution. The same process is important when selecting
                      a good M. Pharm college, especially as postgraduate programs can have
                      different specializations and approval details.
                    </p>
                  </div>
                  <p className="text-sm text-slate-500 pt-2 flex flex-wrap items-center gap-3">
                    <span>Official resources to verify:</span>
                    <a
                      href="https://www.pci.nic.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline"
                    >
                      Pharmacy Council of India (PCI) <ExternalLink size={14} />
                    </a>
                    <span>•</span>
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline"
                    >
                      Chalapathi Institute Approvals & Accreditations
                    </Link>
                  </p>
                </div>
              </section>

              {/* 2. B.Pharm vs. M.Pharm Course Structure Comparison */}
              <section id="course-structure" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  2. B.Pharm vs. M.Pharm Course Structure Comparison
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-6">
                  <p>
                    Before you apply, look into how each degree fits your career goals. Both programs
                    serve distinct educational and professional milestones:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* B.Pharm Box */}
                    <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-3">
                      <div className="flex items-center gap-2.5 text-primary-dark font-bold font-poppins text-xl">
                        <GraduationCap className="text-primary" size={24} />
                        <h3>Bachelor of Pharmacy (B. Pharm.)</h3>
                      </div>
                      <p className="text-slate-700 text-base">
                        B. Pharm is an undergraduate degree program of four years’ duration
                        consisting of 8 semesters. Students will learn about pharmaceutical
                        chemistry, pharmaceutics, pharmacology, pharmacognosy, pharmaceutical
                        analysis, and other subjects related to medicines and healthcare.
                      </p>
                      <p className="text-slate-700 text-base">
                        A good B Pharmacy college combines classroom teaching with laboratory
                        sessions, practical assessments, and opportunities to develop scientific
                        and professional skills. Students should consult the syllabus, teaching
                        method, and practical training requirements before enrolling.
                      </p>
                    </div>

                    {/* M.Pharm Box */}
                    <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-3">
                      <div className="flex items-center gap-2.5 text-primary-dark font-bold font-poppins text-xl">
                        <FlaskConical className="text-emerald-600" size={24} />
                        <h3>M.Pharm (Master of Pharmacy)</h3>
                      </div>
                      <p className="text-slate-700 text-base">
                        M. Pharm is a two-year postgraduate program spread over four semesters. It
                        enables graduates to follow a more specialized area of pharmaceutical
                        science.
                      </p>
                      <p className="text-slate-700 text-base">
                        A good M. Pharm. college should have the right specialization, advanced
                        practical learning, and an opportunity to do research or project work.{" "}
                        <strong>Chalapathi Institute of Pharmaceutical Sciences</strong> has
                        specializations listed as <em>Pharmaceutics</em>, <em>Pharmacology</em>,{" "}
                        <em>Pharmaceutical Analysis</em>, and <em>Regulatory Affairs</em>.
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-slate-600">
                    Students should check the course structure and the faculty expertise and
                    research facilities available for their preferred specialization before
                    finalizing their choice.
                  </p>
                </div>
              </section>

              {/* 3. Assess Laboratories and Research Facilities */}
              <section id="laboratories" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  3. Assess Laboratories and Research Facilities
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-5">
                  <p>
                    Pharmacy is a science-based, practical discipline. Students need the opportunity
                    to understand pharmaceutical processes, work with laboratory equipment, and
                    apply the concepts learned in class.
                  </p>
                  <p>
                    If it is a college you are visiting, make sure that the facilities of that
                    college suit the course you want to take. Relevant resources may include
                    pharmaceutical analysis laboratories, pharmaceutics laboratories, computer
                    facilities, research spaces, and a well-equipped library.
                  </p>
                  <p>
                    Access to research equipment, project supervision, and specialized laboratory
                    facilities can be of special importance for postgraduate students.
                  </p>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <h4 className="font-bold text-primary-dark font-poppins text-base flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-emerald-600" />
                      What to Look For in Labs:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Modern analytical instrumentation (HPLC, UV-Vis Spectrophotometers)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Dedicated Pharmaceutics & Formulation labs
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Machine room with tablet punching, coating machines
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Pharmacology animal simulation / computer-assisted learning
                      </li>
                    </ul>
                  </div>
                  <p>
                    A good B Pharmacy college should give students practical skills as well as
                    theoretical knowledge. Similarly, a good M Pharmacy college should also promote
                    higher learning in the chosen area by the student. Go to the institution’s
                    website and check out the facilities. If you can, go to the campus and see how
                    students use the facilities.
                  </p>
                </div>
              </section>

              {/* 4. Evaluate Faculty Qualifications and Academic Support */}
              <section id="faculty" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  4. Evaluate Faculty Qualifications and Academic Support
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    Nothing can replace experienced faculty in influencing a student’s academic
                    growth. Find instructors with the credentials, subject knowledge, research
                    background, and a commitment to mentoring students through difficult subjects.
                  </p>
                  <p>
                    Teaching support is essential for B.Pharm students to learn the basic subjects
                    and prepare for practical exams. Students of M.Pharm also need guidance in
                    research methodology, dissertations, laboratory projects, and scientific
                    writing.
                  </p>
                  <p>
                    Check out the faculty profiles, department details, academic calendars, and
                    student support services to find the best pharmacy college for you.
                  </p>
                  <p className="text-slate-600 bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-base">
                    💡 <strong>Pro Tip:</strong> You can also speak to current students about
                    classroom interaction, practical supervision, and access to academic advice.
                    Their experiences can give you a sense of what the institution is really like
                    beyond what they tell you in official promotional materials. Check our{" "}
                    <Link href="/faculty" className="text-primary font-bold hover:underline">
                      CLPT Faculty Directory
                    </Link>{" "}
                    to see qualifications and research credentials.
                  </p>
                </div>
              </section>

              {/* 5. Explore Specializations and Future Career Prospects */}
              <section id="specializations" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  5. Explore Specializations and Future Career Prospects
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>Choose your program according to your interests and future career plans.</p>
                  <p>
                    Depending on the requirements of the role, <strong>B. Pharm graduates</strong>{" "}
                    can explore opportunities in pharmaceutical production, quality control, quality
                    assurance, regulatory support, sales, medical information, and further
                    education.
                  </p>
                  <p>
                    The <strong>M.Pharm</strong> provides an opportunity to study a subject in more
                    depth and can be relevant to careers in research and development (R&amp;D),
                    formulation development, pharmaceutical analysis, pharmacology, and regulatory
                    affairs.
                  </p>
                  <p>
                    A good college for M Pharmacy should have a specialization of your interest and
                    should have the required academic resources to pursue it well. Look at the
                    subjects you’ll study, the projects you’ll be working on, and the career
                    options open to you before you make a decision. If you need help understanding
                    the differences between specializations, talk to faculty members or industry
                    professionals.
                  </p>
                </div>
              </section>

              {/* 6. Review Placement Support & Industry Exposure */}
              <section id="placements" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  6. Review Placement Support &amp; Industry Exposure
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-5">
                  <p>
                    Placement support can be a useful element when comparing pharmacy institutions.
                    But students should not be satisfied with generic statements like &ldquo;100%
                    placement&rdquo; or simple lists of popular recruiters.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                      <h4 className="font-bold text-primary-dark font-poppins">
                        Metrics to Inquire About:
                      </h4>
                      <ul className="space-y-1.5 text-slate-600 text-sm">
                        <li>• Number of eligible vs. placed students</li>
                        <li>• Actual recruiters visiting campus</li>
                        <li>• Job profiles offered (R&amp;D, QA, QC, Sales)</li>
                        <li>• Average and median salary packages</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                      <h4 className="font-bold text-primary-dark font-poppins">
                        Practical Exposure:
                      </h4>
                      <ul className="space-y-1.5 text-slate-600 text-sm">
                        <li>• Industry internships &amp; field training</li>
                        <li>• Industrial plant visits and guest lectures</li>
                        <li>• Real-time industry-sponsored research</li>
                        <li>• Personality &amp; interview grooming</li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    A good B Pharmacy college should provide students with employability skills. A
                    good M. Pharmacy college should help students pursue the more specialized career
                    paths they want to.
                  </p>
                  <p className="text-sm text-slate-500 pt-2">
                    For details on institutional career support, please visit the{" "}
                    <Link
                      href="/placements"
                      className="text-primary font-bold hover:underline inline-flex items-center gap-1"
                    >
                      Placements Page of Chalapathi Institute of Pharmaceutical Sciences{" "}
                      <ChevronRight size={14} />
                    </Link>{" "}
                    and refer to the published data carefully.
                  </p>
                </div>
              </section>

              {/* 7. Fees, Scholarships and Living Expenses */}
              <section id="fees" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  7. Fees, Scholarships and Living Expenses
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    Course fees are an important consideration, and the cheapest fee doesn’t
                    necessarily mean the best overall value.
                  </p>
                  <p>
                    Compare the tuition fees, examination fees, laboratory fees, hostel fees,
                    transport, books, and other expenses. Get a clear fee schedule and information in
                    writing from the admissions office about payment deadlines and refund
                    policies.
                  </p>
                  <p>
                    Also look into scholarships, government aid, and eligibility for fee
                    reimbursement (such as Jagananna Vidya Deevena in Andhra Pradesh), if
                    applicable. Don&apos;t assume that all students or admissions categories are
                    entitled to the same benefits.
                  </p>
                  <p className="font-medium text-slate-800">
                    A good B. Pharmacy college or a good M. Pharmacy college should be affordable to
                    your family as a whole, and the facilities and academic support should be worth
                    the price.
                  </p>
                </div>
              </section>

              {/* 8. Admission Process and Eligibility Requirements */}
              <section id="admissions" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  8. Admission Process and Eligibility Requirements
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    Admission requirements may vary according to the program, institution, state
                    rules, and admission category.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-xs font-black uppercase text-primary tracking-wider">
                        B.Pharm Pathway
                      </span>
                      <p className="text-sm text-slate-700 mt-2">
                        Class 12 or equivalent with compulsory science subjects (Physics, Chemistry,
                        and Biology/Mathematics) + state entrance exam (such as AP EAPCET).
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-xs font-black uppercase text-emerald-700 tracking-wider">
                        M.Pharm Pathway
                      </span>
                      <p className="text-sm text-slate-700 mt-2">
                        B.Pharm degree with qualifying marks + entrance examination (GPAT / AP
                        PGECET) and counseling process.
                      </p>
                    </div>
                  </div>
                  <p>
                    Chalapathi Institute of Pharmaceutical Sciences published information regarding
                    B.Pharm and M.Pharm programs, which includes eligibility criteria and admission
                    pathways. Students should consult the current requirements for the year of
                    admission prior to application.
                  </p>
                  <p>
                    Check out entrance exams, the counseling process, application dates, documents
                    needed, and category rules. Getting in early and having your documents ready can
                    save you unnecessary delays.
                  </p>
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
                  >
                    View CLPT Admissions Guidelines <ChevronRight size={16} />
                  </Link>
                </div>
              </section>

              {/* 9. Check out the Academics at the College */}
              <section id="academics" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  9. Check out the Academics at the College
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    The learning environment can impact your overall college experience. Take into
                    account the library, classroom facilities, student activities, mentoring,
                    campus safety, accommodation, and transport arrangements.
                  </p>
                  <p>
                    Talk to current students or alumni, review the academic information that you are
                    able to, and visit the campus or attend counseling sessions if you are able to.
                  </p>
                  <p>
                    Instead of simply looking at the rankings, if you want to find the best pharmacy
                    college for your situation, evaluate how well the institution matches your
                    learning preferences, career goals, budget, and location requirements.
                  </p>
                </div>
              </section>

              {/* Why Chalapathi Institute of Pharmaceutical Sciences? */}
              <section id="why-chalapathi" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Why Chalapathi Institute of Pharmaceutical Sciences?
                </h2>
                <div className="bg-primary-dark text-white rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-20 -mt-20" />
                  <p className="leading-relaxed mb-6 font-medium text-lg">
                    Chalapathi Institute of Pharmaceutical Sciences, Guntur, Andhra Pradesh,
                    provides B. Pharm and M. Pharm courses and other pharmacy-related academic
                    choices. It states B.Pharm as a four-year course in the published program
                    information and M.Pharm as a two-year postgraduate program with multiple
                    specializations.
                  </p>
                  <p className="leading-relaxed mb-6 text-white/90 text-base">
                    Students can check the courses offered, admission requirements, specializations
                    available, facilities on campus, and placement details on the official website
                    of the college. This enables you to match up the programs with your academic
                    needs and future plans.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link href="/programs">
                      <span className="bg-secondary hover:bg-secondary-light text-primary-dark font-black px-6 py-3.5 rounded-xl text-sm uppercase tracking-wider inline-block transition-colors cursor-pointer shadow-md">
                        Explore Our Programs
                      </span>
                    </Link>
                    <Link href="/contact">
                      <span className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl text-sm uppercase tracking-wider inline-block transition-colors cursor-pointer border border-white/20">
                        Contact Admissions Office
                      </span>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Summary */}
              <section id="summary" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Summary
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    Choosing the right pharmacy college calls for careful consideration of its
                    approval status, curriculum, laboratories, faculty, research facilities,
                    placements, fees, and student support. These help you make a better decision
                    than just rankings or ads.
                  </p>
                  <p>
                    A good B Pharmacy College can give you a good base in pharmaceutical sciences,
                    and a good M Pharmacy college can help you with specialized study and research.
                    The best pharmacy college for you will be the one that meets the regulatory
                    requirements and matches your career goals, financial situation, and learning
                    needs.
                  </p>
                  <p>
                    Before you enroll, take time to compare institutions, verify official
                    information, and understand the admission process. A well-researched decision
                    can help you prepare for the next step in your pharmacy education and
                    professional development.
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
                <Link href="/b-pharmacy-vs-m-pharmacy">
                  <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:text-primary-dark transition-colors cursor-pointer">
                    Read: B Pharmacy vs M Pharmacy Comparison <ChevronRight size={16} />
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
