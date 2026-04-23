"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  Library, 
  HandCoins, 
  Lightbulb, 
  TrendingUp, 
  CheckCircle2, 
  Users, 
  Award,
  Download,
  BookOpen,
  GraduationCap
} from "lucide-react";
import { PageHeader as CustomPageHeader } from "@/components/ui/PageHeader";

const detailedPractices = [
  {
    id: "library",
    title: "Best Library Utilization Awards",
    icon: Library,
    color: "from-blue-600 to-indigo-600",
    objective: "Motivate students and staff to move beyond 'shortcut knowledge' from the internet and master foundational basics found in textbooks and journals.",
    implementation: [
      "Access from 8:30 AM to 8:00 PM on all working days.",
      "Specific hours integrated directly into the academic schedule.",
      "Enhanced seating capacity to 200 users to accommodate growing needs."
    ],
    success: [
      { label: "Peak Usage", value: "40,543", sub: "Visitors recorded in 2018" },
      { label: "Recent Data", value: "22,600", sub: "Annual visits tracked in 2021" },
      { label: "Recognition", value: "Annual Awards", sub: "Presented across departments" },
    ]
  },
  {
    id: "financial",
    title: "Financial Aid to Deserving Students",
    icon: HandCoins,
    color: "from-emerald-600 to-teal-600",
    objective: "Support students from rural backgrounds to prevent them from discontinuing their studies due to poverty.",
    implementation: [
      "Strict verification of financial backgrounds of applicants.",
      "Self-financed via student tuition fees to create an internal support ecosystem.",
      "Tiered aid distribution based on exact demonstrated need."
    ],
    success: [
      { label: "Highest Impact", value: "₹11.5L", sub: "Concessions during 2017-18" },
      { label: "Peak Support", value: "43", sub: "Students received aid in 18-19" },
      { label: "Recent Cycle", value: "₹3.6L", sub: "Distributed to 15 students (20-21)" },
    ]
  },
  {
    id: "skills",
    title: "Skill Development Programmes",
    icon: Lightbulb,
    color: "from-purple-600 to-fuchsia-600",
    objective: "Bridge the gap between academia and industry by equipping students with practical industrial skills and fostering Outcome Based Education (OBE).",
    implementation: [
      "High-level technical training in Quality by Design (QbD).",
      "Specialized sessions on Intellectual Property Rights (IPR).",
      "Practical workshops on Pharmacovigilance & eCTD submissions."
    ],
    success: [
      { label: "UGC Publications", value: "106", sub: "Papers published in 2021 (up from 49)" },
      { label: "Patents Published", value: "36", sub: "Innovative institutional patents" },
      { label: "Patents Granted", value: "1", sub: "Officially granted patent to date" },
    ]
  }
];

const otherInitiatives = [
  "100% Attendance Awards",
  "Distinguished Alumni Awards",
  "Minor Research Projects",
  "Industrial Training by Faculty",
  "Pedagogical Initiatives",
  "Research Awards for Faculty and Students",
  "Meditation",
  "Praxis (Student wall magazine)",
  "CLPT and Therapeutic News Letters",
  "Memorial Awards",
  "Book Chapters",
  "Pharma Book Exhibitions",
  "Pharma Science Exhibitions",
  "Faculty Refresher Courses",
  "Patent filing",
  "Journal Clubs",
  "Intercollegiate sports & Activities",
  "Seed Money for Research",
  "Industrial Visits"
];

export default function BestPracticesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <CustomPageHeader
        title="Institutional Best Practices"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Best Practices" }
        ]}
        description="Driving academic excellence, social equity, and holistic growth through systematic and recognized institutional initiatives."
      />

      {/* Document Highlight Section */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <FileText size={32} />
              </div>
              <div>
                <h3 className="text-xl font-black text-primary-dark uppercase tracking-tight">Technical Data Repository</h3>
                <p className="text-slate-500 text-sm font-medium">Download the official NAAC Best Practices audit report (PDF).</p>
              </div>
            </div>
            <a 
              href="/documents/about/best-practices-naac.pdf" 
              target="_blank" 
              className="px-10 py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2"
            >
              <Download size={18} /> Download NAAC Report
            </a>
          </div>
        </div>
      </section>

      {/* Featured Practices */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="mb-20">
             <div className="flex items-center gap-4 mb-6">
               <div className="h-px bg-slate-200 flex-grow" />
               <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                 Featured Initiatives
               </div>
               <div className="h-px bg-slate-200 flex-grow" />
             </div>
          </div>

          <div className="space-y-32">
            {detailedPractices.map((practice, idx) => (
              <motion.div 
                key={practice.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col lg:flex-row gap-16 items-start"
              >
                {/* Left side: Icon & Title & Objective */}
                <div className="lg:w-2/5 space-y-8 sticky top-32">
                   <div className={`w-20 h-20 rounded-[2rem] bg-gradient-to-br ${practice.color} text-white flex items-center justify-center shadow-2xl shadow-blue-600/20`}>
                     <practice.icon size={36} />
                   </div>
                   <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                     {practice.title}
                   </h2>
                   <p className="text-xl text-slate-500 font-medium leading-relaxed">
                     {practice.objective}
                   </p>
                </div>

                {/* Right side: Implementation & Success */}
                <div className="lg:w-3/5 space-y-12">
                   {/* Implementation Box */}
                   <div className="bg-slate-50 border border-slate-100 p-10 md:p-12 rounded-[3.5rem] relative overflow-hidden">
                     <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-8 flex items-center gap-3">
                       <BookOpen size={16} className="text-blue-600" /> Implementation Strategy
                     </h3>
                     <ul className="space-y-6">
                       {practice.implementation.map((step, i) => (
                         <li key={i} className="flex gap-4">
                           <CheckCircle2 size={24} className="text-blue-600 flex-shrink-0" />
                           <span className="text-lg text-slate-700 font-medium">{step}</span>
                         </li>
                       ))}
                     </ul>
                   </div>

                   {/* Success Metrics */}
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                     {practice.success.map((stat, i) => (
                       <div key={i} className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-xl shadow-slate-200/40 text-center hover:-translate-y-2 transition-transform duration-300">
                         <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">{stat.label}</div>
                         <div className="text-4xl font-black text-blue-600 mb-2">{stat.value}</div>
                         <div className="text-xs font-bold text-slate-500 leading-snug">{stat.sub}</div>
                       </div>
                     ))}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Institutional Initiatives - Visual Grid */}
      <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden rounded-t-[4rem] md:rounded-[4rem] md:mx-6 md:mb-12">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/[0.05] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8">
               Broader <span className="text-blue-500 italic">Initiatives</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              Beyond our core highlights, Chalapathi Institute maintains a robust portfolio of over 20 ongoing continuous improvement practices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
             {otherInitiatives.map((item, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: (idx % 8) * 0.05 }}
                 className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 hover:border-blue-500/30 transition-all group flex items-start gap-4"
               >
                 <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
                   <TrendingUp size={14} />
                 </div>
                 <div className="text-sm font-bold text-slate-200 leading-tight">
                   {item}
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] opacity-50">
            Institutional Growth • Social Responsibility • Excellence
          </p>
        </div>
      </footer>
    </div>
  );
}
