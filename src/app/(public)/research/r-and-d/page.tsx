"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Lightbulb, 
  Search, 
  FlaskConical, 
  Users, 
  FileText, 
  TrendingUp, 
  GraduationCap, 
  Award, 
  ExternalLink, 
  ChevronRight,
  Database,
  Globe,
  Settings,
  Microscope,
  Briefcase,
  CheckCircle2
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const RAB_MEMBERS = [
  "Principal (Chairperson)",
  "Faculty - Pharmacology (Member)",
  "Faculty - Pharmaceutical Analysis (Member)",
  "Faculty - Phamaceutics (Member)",
  "Faculty - Pharmacy Practice (Member)",
  "Research Scientist (Member)",
  "Industrial Expert (Member)",
  "IQAC Nominee (Member)"
];

const RESEARCH_ACTIVITIES = [
  "Identify thrust areas of research based on current trends in pharmaceutical industry/R&D.",
  "Appoint research supervisors for major and minor research works of students.",
  "Educate and guide faculty members to apply for Ph.D registration.",
  "Encourage faculty to publish articles in peer reviewed indexed and reputed journals.",
  "Guide the faculty to apply for research grants from UGC, AICTE, DBT, DST, SERB, ICMR, etc.",
  "Encourage students and faculty to write and publish patents on their research work.",
  "Appreciate students and faculty with sponsored research awards and cash prizes.",
  "Encourage participation in workshops, seminars, and international conferences.",
  "Promote contract research projects and collaborative research."
];

const RESEARCH_AREAS = [
  "Drug Discovery and Drug Development",
  "Formulation Development",
  "Development of Formulations with Natural Products",
  "Validation of Newer Analytical Techniques",
  "Pre-Clinical and Clinical Investigations",
  "Pharmacoeconomics",
  "Pre-Clinical Research"
];

const RAB_MEETINGS = Array.from({ length: 33 }, (_, i) => 33 - i);
const CONSULTANCY_YEARS = [
  "2023-24", "2022-23", "2021-22", "2020-21", "2019-20", 
  "2018-19", "2017-18", "2016-17", "2015-16"
];

export default function ResearchAndDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Research & Development"
        breadcrumbs={[
          { label: "Research", href: "/research/publications" },
          { label: "R&D" }
        ]}
        description="Fostering innovation and scientific discovery through advanced pharmaceutical research, collaborative projects, and institutional support for academic excellence."
      />

      {/* Hero Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            
            <div className="lg:w-2/3 space-y-12">
               <div className="space-y-6">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary-dark rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                    <Lightbulb size={16} className="text-secondary" /> Innovation Hub
                 </div>
                 <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight leading-tight">Research <br /> Advisory Board</h2>
                 <p className="text-lg text-slate-600 font-medium leading-relaxed">
                   The Research Advisory Board (RAB) at Chalapathi Institute of Pharmaceutical Sciences 
                   sets the strategic direction for institutional research, ensuring alignment with 
                   global pharmaceutical trends and industry needs.
                 </p>
               </div>

               {/* Stats Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex items-center gap-6 group hover:bg-primary-dark transition-all duration-500">
                     <div className="p-4 bg-white rounded-2xl text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12">
                        <Database size={32} />
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-white/50">Completed Projects</p>
                        <p className="text-3xl font-black text-primary-dark group-hover:text-white">13</p>
                     </div>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex items-center gap-6 group hover:bg-secondary transition-all duration-500">
                     <div className="p-4 bg-white rounded-2xl text-primary shadow-sm group-hover:bg-primary-dark group-hover:text-white transition-all transform group-hover:-rotate-12">
                        <TrendingUp size={32} />
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-primary-dark/50">Ongoing Projects</p>
                        <p className="text-3xl font-black text-primary-dark group-hover:text-primary-dark">01</p>
                     </div>
                  </div>
               </div>

               {/* Board Members */}
               <div className="bg-primary/5 p-12 rounded-[3.5rem] border border-primary/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 text-primary/10">
                     <Users size={180} />
                  </div>
                  <h3 className="text-2xl font-black text-primary mb-8 uppercase tracking-tight relative z-10">Board Composition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 relative z-10">
                     {RAB_MEMBERS.map((mem, i) => (
                       <div key={i} className="flex items-center gap-3 text-slate-700 font-bold group">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:scale-150 transition-all" />
                          <span>{mem}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="lg:w-1/3 w-full sticky top-32 space-y-10">
               <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img src="/images/resources/research-banner.jpg" alt="RAB Board" className="w-full h-auto" />
               </div>

               <Link href="/documents/research/Research-Policy.pdf" target="_blank" className="block group">
                  <div className="p-10 bg-primary-dark text-white rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 -skew-x-12 translate-x-1/2 -translate-y-1/2" />
                     <FileText size={48} className="text-secondary mb-6" />
                     <h4 className="text-2xl font-black uppercase mb-2 leading-tight">Research Policy</h4>
                     <p className="text-white/60 font-medium text-sm mb-8 leading-relaxed">
                       Access the formal institutional framework and ethics guidelines for research activities.
                     </p>
                     <div className="inline-flex items-center gap-3 py-3 px-6 bg-white/10 rounded-full font-black text-xs uppercase tracking-widest group-hover:bg-secondary group-hover:text-primary-dark transition-colors">
                        View Document <ChevronRight size={16} />
                     </div>
                  </div>
               </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Areas and Activities */}
      <section className="py-24 bg-slate-50">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               
               <div className="space-y-8">
                  <h3 className="text-3xl font-black text-primary uppercase tracking-tight flex items-center gap-3">
                     <Settings className="text-secondary" /> Key Research Areas
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                     {RESEARCH_AREAS.map((area, i) => (
                       <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm group">
                          <div className="p-2 bg-primary/5 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                             <Microscope size={20} />
                          </div>
                          <span className="font-extrabold text-slate-700 text-sm uppercase tracking-tight">{area}</span>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="space-y-8">
                  <h3 className="text-3xl font-black text-primary uppercase tracking-tight flex items-center gap-3">
                     <FlaskConical className="text-secondary" /> Activities & Scope
                  </h3>
                  <div className="space-y-4">
                     {RESEARCH_ACTIVITIES.map((act, i) => (
                       <div key={i} className="flex gap-4 p-1">
                          <CheckCircle2 size={18} className="text-secondary shrink-0 mt-1" />
                          <p className="text-slate-600 font-bold text-sm leading-relaxed">{act}</p>
                       </div>
                     ))}
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Archives Section */}
      <section className="py-24 bg-white relative">
         <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
               <h3 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight mb-4">Research Archives</h3>
               <p className="text-slate-500 font-medium">Access historical documentation of board meetings and consultancy works.</p>
            </div>

            <Tabs defaultValue="rab" className="w-full">
               <div className="flex justify-center mb-12">
                  <TabsList className="bg-slate-100 p-2 rounded-[2rem] gap-2 h-auto">
                     <TabsTrigger value="rab" className="px-10 py-4 rounded-[1.5rem] font-black uppercase text-xs tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white transition-all">
                        RAB Meetings
                     </TabsTrigger>
                     <TabsTrigger value="consultancy" className="px-10 py-4 rounded-[1.5rem] font-black uppercase text-xs tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white transition-all">
                        Consultancy
                     </TabsTrigger>
                  </TabsList>
               </div>

               <TabsContent value="rab">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                     {RAB_MEETINGS.map((num) => (
                        <Link 
                          key={num} 
                          href={`/documents/research/meetings/${num}.pdf`} 
                          target="_blank"
                          className="group p-5 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                        >
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Board Meeting</p>
                           <p className="text-xl font-black text-primary-dark group-hover:text-primary">NO. {num}</p>
                           <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-black text-secondary uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                              View PDF <ExternalLink size={12} />
                           </div>
                        </Link>
                     ))}
                  </div>
               </TabsContent>

               <TabsContent value="consultancy">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                     {CONSULTANCY_YEARS.map((year) => (
                        <Link 
                          key={year} 
                          href={`/documents/research/consultancy/${year}.pdf`} 
                          target="_blank"
                          className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 flex items-center justify-between"
                        >
                           <div className="flex items-center gap-6">
                              <div className="p-4 bg-primary/5 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                                 <Briefcase size={24} />
                              </div>
                              <div className="space-y-1">
                                 <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Consultancy Year</p>
                                 <h4 className="text-xl font-black text-primary-dark group-hover:text-primary transition-colors">{year}</h4>
                              </div>
                           </div>
                           <div className="w-10 h-10 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-primary-dark transition-all">
                              <ExternalLink size={16} />
                           </div>
                        </Link>
                     ))}
                  </div>
               </TabsContent>
            </Tabs>
         </div>
      </section>

      {/* Research Centers / Seed Money / Ph.Ds */}
      <section className="py-24 bg-slate-50">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               
               {/* Seed Money & Minor Projects */}
               <Card className="lg:col-span-2 border-none shadow-xl rounded-[3rem] overflow-hidden bg-white">
                  <CardContent className="p-12 space-y-10">
                     <div className="space-y-4">
                        <h3 className="text-2xl font-black text-primary uppercase flex items-center gap-3">
                           <Award className="text-secondary" /> Financial Support & Seed Money
                        </h3>
                        <p className="text-slate-600 font-medium leading-relaxed">
                           Institutional support for pioneering research through seed funding and minor projects.
                        </p>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                           <h4 className="text-lg font-black text-primary-dark uppercase">Seed Money Policy</h4>
                           <ul className="space-y-3">
                              <li className="flex gap-2 text-sm text-slate-500 font-bold">
                                 <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                                 3-4 faculty supported every year.
                              </li>
                              <li className="flex gap-2 text-sm text-slate-500 font-bold">
                                 <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                                 Support for student planning abilities.
                              </li>
                              <li className="flex gap-2 text-sm text-slate-500 font-bold">
                                 <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                                 Patent filing & book translation support.
                              </li>
                           </ul>
                        </div>
                        <div className="space-y-6 flex flex-col justify-center">
                           <h4 className="text-lg font-black text-primary-dark uppercase">Minor Research Projects</h4>
                           <p className="text-sm text-slate-500 font-bold leading-relaxed">
                              Active students are encouraged to lead minor research projects guided by faculty.
                           </p>
                           <Link 
                             href="/documents/research/Minor-Projects-2022-23.pdf" 
                             target="_blank"
                             className="flex items-center gap-3 p-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-dark transition-all shadow-xl shadow-primary/20"
                           >
                              <FileText size={20} /> Minor Projects 2022-23
                           </Link>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Ph.D and Centers Sidebar */}
               <div className="lg:col-span-1 space-y-8">
                  <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-xl space-y-8">
                     <h3 className="text-xl font-black text-primary uppercase flex items-center gap-2">
                        <GraduationCap className="text-secondary" /> Ph.D Scholars
                     </h3>
                     <div className="space-y-4">
                        <Link href="/documents/research/PHD-Awarded.pdf" target="_blank" className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-primary-dark hover:text-white transition-all group font-bold text-sm">
                           <span>Ph.Ds Awarded</span>
                           <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/documents/research/PHD-Registered.pdf" target="_blank" className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-primary-dark hover:text-white transition-all group font-bold text-sm">
                           <span>Ph.Ds Registered</span>
                           <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                     </div>
                  </div>

                  <div className="p-10 bg-primary-dark text-white rounded-[3rem] shadow-2xl space-y-6 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full translate-x-1/2 -translate-y-1/2" />
                     <h3 className="text-xl font-black uppercase flex items-center gap-3">
                        <Globe className="text-secondary" size={24} /> Approved Centers
                     </h3>
                     <div className="space-y-4">
                        <div className="p-4 bg-white/10 rounded-2xl border border-white/5">
                           <p className="text-[10px] font-black text-secondary uppercase tracking-widest leading-none mb-2">Krishna University</p>
                           <p className="text-sm font-black uppercase">Machilipatnam, A.P.</p>
                        </div>
                        <div className="p-4 bg-white/10 rounded-2xl border border-white/5">
                           <p className="text-[10px] font-black text-secondary uppercase tracking-widest leading-none mb-2">Acharya Nagarjuna University</p>
                           <p className="text-sm font-black uppercase">Middemalle, A.P.</p>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
    </div>
  );
}
