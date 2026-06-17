"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  BookOpen, Calendar, Clock, ArrowLeft, Briefcase,
  ChevronRight, CheckCircle2, HelpCircle, Award,
  BookOpenCheck, ShieldAlert, GraduationCap, School
} from "lucide-react";

const sections = [
  { id: "education", title: "Quality Education" },
  { id: "infrastructure", title: "Infrastructure" },
  { id: "industry", title: "Industry Exposure" },
  { id: "placements", title: "Placement Support" },
  { id: "research", title: "Research Opportunities" },
  { id: "skills", title: "Skill Development" },
  { id: "career-paths", title: "Diverse Career Paths" },
  { id: "confidence", title: "Confidence & Reputation" },
  { id: "about-chalapathi", title: "About Chalapathi" },
  { id: "faqs", title: "FAQs" }
];

export default function BestPharmacyCollegePage() {
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.chalapathipharmacy.ac.in/best-pharmacy-college"
    },
    "headline": "Why Choosing the Best Pharmacy College Matters for a Successful Career",
    "description": "Discover why choosing the best pharmacy college matters for career success through quality education, industry exposure, research, and placements.",
    "image": "https://www.chalapathipharmacy.ac.in/images/og-image.jpg",
    "author": {
      "@type": "Organization",
      "name": "Chalapathi Institute of Pharmaceutical Sciences",
      "url": "https://www.chalapathipharmacy.ac.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Chalapathi Institute of Pharmaceutical Sciences",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.chalapathipharmacy.ac.in/images/flogo.png"
      }
    },
    "datePublished": "2026-06-12",
    "dateModified": "2026-06-12"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is it crucial to select the best pharmacy college?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A good college offers quality education, hands-on experience, placement and better opportunities for career."
        }
      },
      {
        "@type": "Question",
        "name": "What are the professions that a student in the pharmacy program can choose?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Students may pursue careers in the pharmaceutical industry, hospitals, research institutes, health-care facilities, and academia."
        }
      },
      {
        "@type": "Question",
        "name": "Why are placements so essential in Pharmacy Education?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Placement support helps students find their first job with proper assistance and robust industry connections."
        }
      },
      {
        "@type": "Question",
        "name": "Is infrastructure important in the field of Pharmacy Education?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, laboratories, research facilities and modern equipment enhance the practical learning experience."
        }
      },
      {
        "@type": "Question",
        "name": "What other skills should be developed in the students in Pharmacy apart from academics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Communication skills, leadership, teamwork, and problem-solving skills are very important to develop throughout the career."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link>
              <ChevronRight size={14} />
              <span className="text-white">Why Choosing Best College Matters</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight max-w-4xl mb-6">
              Why Choosing the Best Pharmacy College Matters for a Successful Career
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm font-bold uppercase tracking-wider">
              <span className="bg-secondary text-primary-dark px-3 py-1 rounded-full text-xs font-black">
                Career Guidance
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} /> June 12, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} /> 5 Min Read
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
                  <Award size={18} className="text-secondary" /> Key Factors
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
                  The Healthcare sector is still growing with good demand for skilled Pharmacy staff members in hospitals, research institutes, pharmaceutical companies, retail pharmacies and healthcare institutions. Passion and dedication are important for a successful career, but the school you attend can also have a big impact on your future career. Choosing the right pharmacy college is not an easy process, it&apos;s about developing a solid base for a successful career in the future.
                </p>
              </div>

              {/* Quality Education */}
              <section id="education" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Quality Education Shapes Professional Competence
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    For a career in Pharmacy, one should possess good theoretical knowledge along with practical knowledge. A good pharmacy college offers a course of study that is more than just reading and memorizing facts, and it enables students to grasp pharmaceutical sciences, patient care, drug formulation and healthcare practice in depth.
                  </p>
                  <p>
                    Faculty expertise, current pedagogical frameworks and the structured academic curriculum enables analytical thinking and problem solving skills to be developed. A good educational climate equips students to take on challenges in the workplace upon graduation.
                  </p>
                </div>
              </section>

              {/* Infrastructure */}
              <section id="infrastructure" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Enhanced Learning Through Improved Infrastructure
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    Laboratories, research facilities, libraries and technological resources are vital to modern pharmacy education. Well-equipped colleges offer students practical learning experiences to enhance their experiential knowledge.
                  </p>
                  <p>
                    Students have the opportunity to experience the pharmaceutical processes in well-equipped pharmaceutical labs, drug analysis equipment and research facilities. Students graduate with practical skills as well as academic excellence with access to proper resources.
                  </p>
                </div>
              </section>

              {/* Industry Exposure */}
              <section id="industry" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Industry Exposure Generates Career Opportunities
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    Being part of the best pharmacy college comes with lots of benefits, one of them being industry exposure. Many top schools have connections with pharmaceutical companies, hospitals, medical research institutions and health care providers.
                  </p>
                  <p>
                    Students have the opportunity to learn about the industry through internships, industrial visits, seminars, workshops and guest lectures. Such experiences will enable students to become employable and will also help in networking that can be beneficial in the future.
                  </p>
                </div>
              </section>

              {/* Placement Support */}
              <section id="placements" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Strong Placement Support Makes a Difference
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    A college&apos;s placement support system can have a direct effect on career placement. Placement assistance is another one of the many factors students consider when looking for institutions that will provide them with the help they need in finding their first job.
                  </p>
                  <p>
                    The top pharmacy college generally offers career counselling, interview preparation classes, resume building tips and campus recruitment. Having a good placement network is good for getting jobs in pharmaceutical companies, hospitals, manufacturing units, research laboratories and healthcare organizations.
                  </p>
                </div>
              </section>

              {/* Research Opportunities */}
              <section id="research" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Research Opportunities Expand Career Possibilities
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    Pharmacy is a dynamic profession and innovation will be an important part of it. Institutions fostering research activities are very useful for students who want to pursue research or further studies or specialized areas of study.
                  </p>
                  <p>
                    Research active colleges introduce formulation development, drug discovery, quality testing, and pharmaceutical innovation to the students. Exposing students early gives them a taste of the advanced career opportunities in academics, development, and scientific research.
                  </p>
                </div>
              </section>

              {/* Skill Development */}
              <section id="skills" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Skill Development Beyond Academics
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    Success in the professional world is not only about knowledge. These are also crucial in the healthcare industry: ability to communicate, cooperate within a team, be a leader and think critically.
                  </p>
                  <p>
                    The best pharmacy college puts great emphasis on personality development, communication skills, presentation skills and extra-curricular activities, where the students can become well-rounded professionals. These extra skills enhance job readiness and job performance.
                  </p>
                </div>
              </section>

              {/* Diverse Career Paths */}
              <section id="career-paths" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Access to Diverse Career Paths
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    Pharmacy graduates are offered a myriad of career paths available today. Opportunities exist for students to work in pharmaceutical industry, regulatory affairs, clinical research, community pharmacy, hospital pharmacy, quality control, drug safety and academia.
                  </p>
                  <p>
                    The right school will provide exposure to these several career avenues early on. Career guidance programmes and specific training enable students to find the path that is in line with their interests and goals.
                  </p>
                </div>
              </section>

              {/* Confidence & Reputation */}
              <section id="confidence" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  Building Professional Confidence and Reputation
                </h2>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                  <p>
                    Your professional identity can be shaped by the institution you finish your studies at. A good college that has good academic standards and is recognized by the industry can definitely positively impact career development.
                  </p>
                  <p>
                    Employers often prefer to hire graduates from well known institutions that offer good education and practical training. The best pharmacy college education can boost the credibility and confidence in competitive job markets.
                  </p>
                </div>
              </section>

              {/* Conclusion */}
              <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-4">
                <h3 className="font-poppins font-bold text-primary-dark text-xl">Conclusion</h3>
                <p>
                  Making the right decisions about your education is the first step towards a successful pharmacy career. Whether it&apos;s a quality education, advanced infrastructure, exposure to industry or placement assistance, the right institution makes opportunities available beyond the classroom. Making the time to find the best pharmacy college is an investment in your career; one that can help you gain knowledge, skills, and confidence to help you succeed in the changing healthcare landscape.
                </p>
              </div>

              {/* About Chalapathi */}
              <section id="about-chalapathi" className="space-y-6 pt-4">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-secondary rounded-full inline-block" />
                  About Chalapathi Pharmacy
                </h2>
                <div className="bg-primary-dark text-white rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                  <p className="leading-relaxed mb-6 font-medium text-lg">
                    Our emphasis at Chalapathi Pharmacy is to provide quality education, hands-on training and career oriented training. We ensure that students gain a good knowledge of the pharmaceutical industry, exposure to the industry and professional confidence. We are dedicated to developing successful careers in the expanding healthcare and pharmaceutical industry for our students.
                  </p>
                  <Link href="/about">
                    <span className="bg-secondary hover:bg-secondary-light text-primary-dark font-black px-6 py-3.5 rounded-xl text-sm uppercase tracking-wider inline-block transition-colors cursor-pointer shadow-md">
                      Explore Our Campus & Vision
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
                      q: "Why is it crucial to select the best pharmacy college?",
                      a: "A good college offers quality education, hands-on experience, placement and better opportunities for career."
                    },
                    {
                      q: "What are the professions that a student in the pharmacy program can choose?",
                      a: "Students may pursue careers in the pharmaceutical industry, hospitals, research institutes, health-care facilities, and academia."
                    },
                    {
                      q: "Why are placements so essential in Pharmacy Education?",
                      a: "Placement support: students will find their first job with the assistance available; industry connections."
                    },
                    {
                      q: "Is infrastructure important in the field of Pharmacy Education?",
                      a: "Yes, laboratories, research facilities and modern equipment enhance practical learning experience."
                    },
                    {
                      q: "What other skills should be developed in the students in Pharmacy apart from academics?",
                      a: "Communication skills, leadership, team work, problem solving skills are very important to develop throughout the career."
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
