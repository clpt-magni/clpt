"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Calendar, Clock, ArrowLeft, ChevronRight, ClipboardList,
  CheckCircle2, AlertCircle, HelpCircle
} from "lucide-react";

const sections = [
  { id: "structure", title: "Course Structure" },
  { id: "eligibility", title: "Eligibility Criteria" },
  { id: "entrance-exams", title: "Entrance Exams" },
  { id: "process", title: "Step-by-Step Process" },
  { id: "documents", title: "Important Documents" },
  { id: "choosing-college", title: "Choosing a College" },
  { id: "counseling", title: "Counseling & Allotment" },
  { id: "career-opportunities", title: "Career Opportunities" },
  { id: "about-chalapathi", title: "About Chalapathi" },
  { id: "faqs", title: "FAQs" }
];

export default function BPharmaCollegesClient() {
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Update reading progress bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Determine active section in view
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

  return (
    <>
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
              <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link>
              <ChevronRight size={14} />
              <span className="text-white">B.Pharmacy AP Admission Guide</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight max-w-4xl mb-6">
              Complete Admission Guide for B.Pharmacy Colleges in AP
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm font-bold uppercase tracking-wider">
              <span className="bg-secondary text-primary-dark px-3 py-1 rounded-full text-xs font-black">
                Admissions
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} /> June 12, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} /> 6 Min Read
              </span>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="container mx-auto px-4 py-16 flex-1">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">

            {/* Sticky Table of Contents (Desktop) */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-32 bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
                <h3 className="font-poppins font-black text-lg text-primary-dark mb-6 flex items-center gap-2 border-b pb-4">
                  <ClipboardList size={18} className="text-secondary" /> Table of Contents
                </h3>
                <nav className="space-y-3">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`block text-sm font-bold transition-all pl-3 border-l-2 hover:text-primary ${activeSection === section.id
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
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                <p className="font-medium text-slate-800 text-xl leading-relaxed italic">
                  Getting a Bachelor of Pharmacy degree can bring working in the fields of healthcare, drug manufacturing research regulatory affairs, and clinical services. If you are among the students wishing to enroll in B.Pharmacy colleges in AP, one of the things you should do is figure out the admission process since it will of course lessen your confusion and thereby also lead you to secure the admission in a suitable institution. You cannot ignore even a single point of the procedure laid out by the government for the fields of eligibility and counseling as every one of the steps is very important in your academic journey.
                </p>
              </div>

              {/* Course Structure */}
              <section id="structure" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Understanding the B.Pharmacy Course Structure
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    B.Pharmacy course is a 4-year bachelor degree program designed to build competent professionals in the field of pharmaceutical sciences, drug formulation, healthcare systems, medicinal chemistry, and patient care.
                  </p>
                  <p>
                    A large number of students who want to pursue a career in medicine, chemistry, healthcare, and life sciences go for this program as it has diverse career opportunities to offer.
                  </p>
                </div>
              </section>

              {/* Eligibility Criteria */}
              <section id="eligibility" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Eligibility Criteria for Admission
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    Before applying to B.Pharmacy colleges in AP, students should first familiarize themselves with the eligibility criteria. Most schools insist on the students completing their higher secondary education exposing them to the relevant science subjects.
                  </p>
                  <p>
                    Usually, the candidates need Physics, Chemistry, and Mathematics or Biology in their qualifying exam. Besides, the students having an intermediate final exam should complete the final qualification requirements during admission to have their application accepted.
                  </p>
                </div>
              </section>

              {/* Entrance Exams */}
              <section id="entrance-exams" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Entrance Exams for B.Pharmacy Admission
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    Admission to various B.Pharmacy colleges in AP is normally through AP EAPCET, earlier called AP EAMCET. This state-level test is for admission to pharmacy, agriculture, and engineering in the whole of Andhra Pradesh. It is a very important means of getting seats in government, private, and affiliated colleges.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 text-amber-900 text-base font-semibold">
                    <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={20} />
                    <div>
                      It is advisable that students keep track of official notifications from time to time as exam dates, application dates, and counseling schedules could be different every academic year. AP EAPCET 2026 declaration of results and issuance of rank cards is already part of this year&apos;s admission process.
                    </div>
                  </div>
                </div>
              </section>

              {/* Step-by-Step Admission Process */}
              <section id="process" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Step-by-Step Admission Process
                </h2>
                <div className="space-y-4">
                  <p>
                    Generally the AP B.Pharmacy colleges admission is made in this sequence:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { step: "1", title: "Registration & Exam", desc: "Students log in and register online for the entrance examination (AP EAPCET) of the winning university, then appear for the test." },
                      { step: "2", title: "Results & Ranks", desc: "Rank cards and results are issued after the students have completed and sat for the examination." },
                      { step: "3", title: "Counseling Registration", desc: "Candidates register for counseling, pay the required fees, and upload documents online." },
                      { step: "4", title: "Certificate Verification", desc: "Documents are verified by officials. After verification, candidates can access the web options page." },
                      { step: "5", title: "Filling Web Options", desc: "Candidates fill choices selecting their preferred colleges and courses in order of priority." },
                      { step: "6", title: "Seat Allotment", desc: "Seat allotments are announced based on rank, category, reservation rules, and seat availability." },
                      { step: "7", title: "Reporting & Confirmation", desc: "Candidates confirm their seat by reporting to the allotted institution and making the fee payment." }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0">
                          {item.step}
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-poppins font-bold text-primary-dark text-base">{item.title}</h4>
                          <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Required Documents */}
              <section id="documents" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Important Documents Required
                </h2>
                <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100">
                  <div className="bg-primary px-8 py-5 text-white font-bold font-poppins text-lg">
                    Checklist of Mandatory Documents
                  </div>
                  <div className="p-8">
                    <p className="mb-6">
                      Students should keep their documents organized before counseling begins. Verification delays for documents can lead to problems at the moment of admission - therefore preparation in advance is essential.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "AP EAPCET rank card and hall ticket",
                        "Intermediate mark sheets",
                        "Class 10 certificates",
                        "Transfer certificate",
                        "Income certificate (if applicable)",
                        "Category certificate (if applicable)",
                        "Residence proof documents",
                        "Passport-size photographs"
                      ].map((doc, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-slate-50 px-5 py-4 rounded-2xl border border-slate-100 text-slate-700 text-sm font-semibold">
                          <CheckCircle2 className="text-secondary shrink-0" size={18} />
                          <span>{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Choosing a College */}
              <section id="choosing-college" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Factors to Consider While Choosing a College
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    Selecting the right B.Pharmacy college in Andhra Pradesh from a bunch of options is not an easy task as it needs rigorous scrutiny. Students should refrain from making their decisions only based on the location or fees of the college.
                  </p>
                  <p>
                    The decision of choosing a college should be greatly influenced by a number of factors like the quality of the faculty, laboratory facilities, accreditation status (such as NAAC and NBA), industry exposure, placement support, internship opportunities, and research infrastructure.
                  </p>
                  <p>
                    Those educational institutions who are equipped with facilities for practical learning and have well-established industry partnerships are generally better able to prepare their students for their career.
                  </p>
                </div>
              </section>

              {/* Counseling */}
              <section id="counseling" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Understanding Counseling and Seat Allotment
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    Many students find their stress levels heighten at the time of counseling because the outcomes of allotment heavily depend upon factors like ranking, category, and choices. A strategic work plan comes handy in such situations.
                  </p>
                  <p>
                    They should maintain an equilibrium in the preference list by interspersing their choices with highly ambitious, quite realistic as well as safety colleges. Giving very limited choices might lessen the chances.
                  </p>
                  <p>
                    More than one phase might be there in the counseling rounds. Students may get further chances for seat upgrades, or different allotments in such rounds as per the availability of seats.
                  </p>
                </div>
              </section>

              {/* Career Opportunities */}
              <section id="career-opportunities" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Career Opportunities After B.Pharmacy
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    B.Pharmacy&apos;s popularity is still soaring mainly because graduates find many career fields open to them. Through this course, students can get jobs not only in pharmaceutical manufacturing and hospital pharmacy but also in research laboratories, quality assurance, drug safety, clinical research, or regulatory affairs.
                  </p>
                  <p>
                    Getting higher education like M.Pharm, Pharm. D, MBA, or special certifications can open even more career doors.
                  </p>
                </div>
              </section>

              {/* About Chalapathi */}
              <section id="about-chalapathi" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  About Chalapathi Pharmacy
                </h2>
                <div className="bg-primary-dark text-white rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                  <p className="leading-relaxed mb-6 font-medium text-lg">
                    At Chalapathi Pharmacy, our main aim is imparting quality pharmaceutical education through several means like practical learning, expert faculty, updated labs, and career-oriented training. We are passionate about strengthening students&apos; academic foundation and equipping them with first-hand industry knowledge, innovative thinking, and lifelong professional development to prepare them for their future pharmaceutical careers.
                  </p>
                  <Link href="/admissions">
                    <span className="bg-secondary hover:bg-secondary-light text-primary-dark font-black px-6 py-3.5 rounded-xl text-sm uppercase tracking-wider inline-block transition-colors cursor-pointer shadow-md">
                      Apply For Admissions 2026
                    </span>
                  </Link>
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "Which entrance exam is required for B. Pharmacy admission in Andhra Pradesh?",
                      a: "AP EAPCET is widely used for admission into numerous pharmacy institutions in Andhra Pradesh."
                    },
                    {
                      q: "What subjects are necessary for B. Pharmacy admission?",
                      a: "Generally, students require Physics, Chemistry, and either Mathematics or Biology in their intermediate education."
                    },
                    {
                      q: "How long is the B. Pharmacy course?",
                      a: "B. Pharmacy is a 4-year undergraduate degree programme."
                    },
                    {
                      q: "Is counseling essential for admission?",
                      a: "For entrance-based admissions, counseling is usually a very important step in seat allocation."
                    },
                    {
                      q: "Can students follow higher studies after B. Pharmacy?",
                      a: "Yes, students may follow M. Pharm, Pharm. D, MBA, and several special programmes after graduation."
                    }
                  ].map((faq, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-3">
                      <h4 className="font-poppins font-bold text-primary-dark text-lg flex items-start gap-2.5">
                        <HelpCircle className="text-secondary shrink-0 mt-1" size={18} />
                        <span>{faq.q}</span>
                      </h4>
                      <p className="text-slate-600 pl-7 text-base leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Back to Blog */}
              <div className="pt-8 border-t">
                <Link href="/blog">
                  <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:text-primary-dark transition-colors cursor-pointer">
                    <ArrowLeft size={16} /> Back to Blog
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
