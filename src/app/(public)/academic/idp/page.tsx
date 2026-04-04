"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Building2,
  BookOpen,
  Microscope,
  Briefcase,
  Download,
  Target,
  Users,
  Award,
  Globe2,
  Rocket
} from "lucide-react";

export default function IDPPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/[0.03] blur-[120px] rounded-full sm:pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-400/[0.03] blur-[100px] rounded-full sm:pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-600 transition-all mb-12">
              <Link href="/">Home</Link>
              <ChevronRight size={10} />
              <Link href="/academic">Academic</Link>
              <ChevronRight size={10} />
              <span className="text-blue-600">IDP</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-2xl shadow-lg shadow-blue-600/20">
                <Target size={24} />
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Strategic Roadmap</div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-[0.9] mb-8"
            >
              Institutional <br />
              <span className="text-blue-600 italic">Development Plan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mb-12"
            >
              A comprehensive framework charting our excellence in pharmaceutical education, advanced research, and global healthcare delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/documents/academic/IDP.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-widest text-white hover:bg-slate-900 transition-all shadow-xl shadow-blue-600/20 group"
              >
                <Download size={18} className="group-hover:-translate-y-1 transition-transform" /> Download Official IDP
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Institutional Pillars */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Left: Sticky Navigation or Context */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32 h-fit">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Key Structural <br /> <span className="text-blue-600">Pillars</span>
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed">
                Our strategy is anchored across fundamental operational areas. The institution holds permanent affiliation with Acharya Nagarjuna University and is accredited by NAAC with an "A+" grade (3.37 CGPA) alongside NBA accreditation for the B. Pharmacy program.
              </p>

              <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 mt-8">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-6">Mission Focus</h3>
                <p className="text-sm font-bold text-slate-700 leading-relaxed mb-6">
                  "To inculcate excellence in various fields of pharmacy and mould the institution as a centre of excellence."
                </p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm"><Award size={18} /></div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm"><Globe2 size={18} /></div>
                </div>
              </div>
            </div>

            {/* Right: Detailed Pillars */}
            <div className="lg:col-span-8 space-y-8">

              {/* Box 1: Infrastructure */}
              <div className="bg-white border border-slate-100 p-10 md:p-14 rounded-[3rem] shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:border-blue-200 transition-all">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Building2 size={120} />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                    <Building2 size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6">Infrastructure & Facilities</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-slate-600 font-medium leading-relaxed">
                        <strong className="text-slate-900">Academic:</strong> 19 lecture halls (13 ICT equipped, 3 smart classrooms) and centralized computing facilities.
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-slate-600 font-medium leading-relaxed">
                        <strong className="text-slate-900">Laboratories:</strong> 26 modern laboratories, Central Instrumentation Facility, and a CCSEA-approved pre-clinical center.
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-slate-600 font-medium leading-relaxed">
                        <strong className="text-slate-900">Library:</strong> 10,658 volumes, 2,923 titles, NDL, Inflibnet, and E-Shodh Sindhu access.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2: Academic Programs */}
              <div className="bg-white border border-slate-100 p-10 md:p-14 rounded-[3rem] shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:border-blue-200 transition-all">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <BookOpen size={120} />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                    <BookOpen size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6">Academic Programs & Support</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-slate-600 font-medium leading-relaxed">
                        <strong className="text-slate-900">Mentoring System:</strong> 100% student coverage via the Proctorial System (15-25 students per teaching staff).
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-slate-600 font-medium leading-relaxed">
                        <strong className="text-slate-900">Equity & Aid:</strong> Robust financial assistance for economically disadvantaged students directly managed by the society.
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-slate-600 font-medium leading-relaxed">
                        <strong className="text-slate-900">Curriculum (2022):</strong> Integrated with industrial skill-development modules and mandatory MOOCs for senior students.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 3: Research */}
              <div className="bg-white border border-slate-100 p-10 md:p-14 rounded-[3rem] shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:border-blue-200 transition-all">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Microscope size={120} />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                    <Microscope size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6">Research & Innovation</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-slate-600 font-medium leading-relaxed">
                        <strong className="text-slate-900">Research Ecosystem:</strong> MSME approved Business Incubation Center, DSIR recognized for SIRO.
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-slate-600 font-medium leading-relaxed">
                        <strong className="text-slate-900">Thrust Areas:</strong> Chemotherapeutic agents, targeted formulations, bioanalytical methods, and synthetic techniques.
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-slate-600 font-medium leading-relaxed">
                        <strong className="text-slate-900">Institutional Support:</strong> Financial backing for conferences, paper publications, and active undergraduate minor research projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 4: Placements */}
              <div className="bg-white border border-slate-100 p-10 md:p-14 rounded-[3rem] shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:border-blue-200 transition-all">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Briefcase size={120} />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                    <Briefcase size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6">Placements & Global Opportunities</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-slate-600 font-medium leading-relaxed">
                        <strong className="text-slate-900">Industry Tie-ups:</strong> Established via the Industry-Institute Partnership and Entrepreneurial Cell (IIPER).
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-slate-600 font-medium leading-relaxed">
                        <strong className="text-slate-900">Global Hub:</strong> Dedicated Centre for Overseas Services assisting with visas and abroad studies.
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-slate-600 font-medium leading-relaxed">
                        <strong className="text-slate-900">Training Pipelines:</strong> Core focus on clinical/hospital needs, professional communication, and soft skills execution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Strategic Roadmap Timeline (2021-2025) */}
      <section className="bg-slate-50 py-32 relative overflow-hidden rounded-[4rem] mx-6 mb-12 border border-slate-100">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-sm">
              <Rocket size={36} />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-8">
              Strategic <span className="text-blue-600 italic">Roadmap</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
              Institutional Development Timeline (2021 - 2025)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="bg-white border border-slate-100 rounded-[3rem] p-10 hover:border-blue-200 transition-colors shadow-xl shadow-slate-200/40">
              <div className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6">Phase 1</div>
              <h3 className="text-2xl font-black text-slate-900 mb-6">Short-Term (1-2 Yrs)</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-600 font-medium text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  Establish e-content recording studio.
                </li>
                <li className="flex gap-3 text-slate-600 font-medium text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  Upgrade 40% classrooms to smart environments.
                </li>
                <li className="flex gap-3 text-slate-600 font-medium text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  Secure ₹30-50 Lakhs in active research funds.
                </li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="bg-white border border-slate-100 rounded-[3rem] p-10 hover:border-blue-200 transition-colors shadow-xl shadow-slate-200/40 relative">
              <div className="absolute inset-0 border-2 border-slate-100 hover:border-blue-200 rounded-[3rem] pointer-events-none transition-colors" />
              <div className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6">Phase 2</div>
              <h3 className="text-2xl font-black text-slate-900 mb-6">Mid-Term (5 Yrs)</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-600 font-medium text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  Scale smart classroom coverage to 60%.
                </li>
                <li className="flex gap-3 text-slate-600 font-medium text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  Foster interdisciplinary research collaborations.
                </li>
                <li className="flex gap-3 text-slate-600 font-medium text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  Secure ₹60L to ₹1Cr in institutional grants.
                </li>
              </ul>
            </div>


            {/* Phase 3 */}
            <div className="bg-white border border-slate-100 rounded-[3rem] p-10 hover:border-blue-200 transition-colors shadow-xl shadow-slate-200/40 relative">
              <div className="absolute inset-0 border-2 border-slate-100 hover:border-blue-200 rounded-[3rem] pointer-events-none transition-colors" />
              <div className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6">Phase 3</div>
              <h3 className="text-2xl font-black text-slate-900 mb-6">Long-Term (10 Yrs)</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-600 font-medium text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  100% Smart classroom implementation.
                </li>
                <li className="flex gap-3 text-slate-600 font-medium text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  Acquire globally competitive advanced instruments.
                </li>
                <li className="flex gap-3 text-slate-600 font-medium text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  Exceed ₹2Cr in advanced research funding.
                </li>
                <li className="flex gap-3 text-slate-600 font-medium text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  Create a globally embedded alumni network pipeline.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] opacity-50">
            Institutional Growth • Strategic Focus • 2021-2025
          </p>
        </div>
      </footer>
    </div>
  );
}
