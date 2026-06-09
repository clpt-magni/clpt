"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShieldCheck, 
  Users, 
  FileText, 
  TrendingUp, 
  Users2, 
  BookOpen, 
  Calendar,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Award
} from "lucide-react";
import Link from "next/link";

const IQAC_RESPONSIBILITIES = [
  "Awareness to faculty about NAAC accreditation standards.",
  "Guidance to faculty for lesson plans and log book preparation.",
  "Review and monitoring of academic activities and log books.",
  "Research activity awareness for faculty and P.G. students.",
  "Encouraging paper publications and conference presentations.",
  "Review on progress of B.Pharmacy & M.Pharmacy student projects.",
  "Facilitating industrial tours and professional training.",
  "Reviewing seminars, assignments, and student enrichment programmes.",
  "Monitoring NSS, IPA, ISPOR, and Alumni association activities.",
  "Oversight of Women’s, Anti-ragging, and Grievance cells.",
  "Monitoring of Lab maintenance, manuals, and job cards."
];

const AQAR_REPORTS = [
  { year: "2023-2024", filename: "aqar2024.pdf" },
  { year: "2022-2023", filename: "aqar2023.pdf" },
  { year: "2021-2022", filename: "aqar2122.pdf" },
  { year: "2020-2021", filename: "aqar2020.pdf" },
  { year: "2019-2020", filename: "aqar2019.pdf" },
  { year: "2018-2019", filename: "aqar2018.pdf" },
  { year: "2017-2018", filename: "aqar2017.pdf" },
  { year: "2016-2017", filename: "aqar2016.pdf" },
  { year: "2015-2016", filename: "aqar2015.pdf" },
];

export default function IQACPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Internal Quality Assurance Cell"
        breadcrumbs={[
          { label: "Academic", href: "/academic/committees" },
          { label: "IQAC" }
        ]}
        description="IQAC at Chalapathi Institute of Pharmaceutical Sciences works to internalize and institutionalize quality enhancement initiatives for academic and administrative excellence."
      />

      {/* Overview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Responsibilities */}
            <div className="lg:col-span-8 space-y-12">
               <div className="space-y-6">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary-dark rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                    Quality Excellence
                 </div>
                 <h2 className="text-4xl font-black text-primary uppercase tracking-tight leading-tight">IQAC <br /> Framework & Goals</h2>
                 <p className="text-lg text-slate-600 font-medium leading-relaxed italic border-l-4 border-secondary pl-6">
                   "To promote measures for institutional functioning towards quality enhancement throughization 
                   of quality culture and institutionalization of best practices."
                 </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {IQAC_RESPONSIBILITIES.map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                       <div className="mt-1 bg-primary/5 text-primary p-1 rounded-md shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          <CheckCircle2 size={16} />
                       </div>
                       <span className="text-slate-600 font-bold text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Quick Actions / Committee */}
            <div className="lg:col-span-4 space-y-8">
               <Link href="/documents/academic/iqac/iqac-members.pdf" target="_blank" className="block group">
                  <div className="p-10 bg-primary-dark text-white rounded-[2.5rem] shadow-2xl transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
                     <Users2 size={40} className="text-secondary mb-6" />
                     <h4 className="text-xl font-black uppercase mb-2">IQAC Committee</h4>
                     <p className="text-white/60 text-sm font-medium mb-8">View the full list of committee members and chairperson details.</p>
                     <div className="flex items-center gap-3 font-black text-[10px] uppercase tracking-widest text-secondary group-hover:text-white transition-colors">
                        View PDF <ChevronRight size={16} />
                     </div>
                  </div>
               </Link>

               <Card className="border-none bg-slate-50 rounded-[2.5rem] p-10 shadow-sm">
                  <div className="space-y-6">
                    <div className="p-4 bg-white rounded-2xl w-fit shadow-sm text-primary">
                       <Calendar size={28} />
                    </div>
                    <h4 className="text-lg font-black text-primary-dark uppercase">IQAC Meetings</h4>
                    <p className="text-sm text-slate-500 font-bold leading-relaxed">
                       Review meeting minutes, agendas, and quality action planning sessions.
                    </p>
                    <Link href="/academic/iqac/meetings" className="text-primary font-black uppercase text-xs tracking-widest flex items-center gap-2 hover:text-primary-dark">
                       View Minutes <ChevronRight size={14} />
                    </Link>
                  </div>
               </Card>
            </div>

          </div>
        </div>
      </section>

      {/* AQAR Reports Section */}
      <section className="py-24 bg-slate-50">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
               <div className="space-y-4">
                  <h3 className="text-3xl font-black text-primary uppercase tracking-tight flex items-center gap-3">
                     <Award className="text-secondary" /> AQAR Reports Archive
                  </h3>
                  <p className="text-slate-500 font-medium max-w-xl">
                     Annual Quality Assurance Reports submitted to NAAC by the institution across various academic sessions.
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {AQAR_REPORTS.map((rpt, i) => (
                 <Link 
                   key={i} 
                   href={`/documents/academic/iqac/${rpt.filename}`} 
                   target="_blank"
                   className="group block"
                 >
                   <div className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 flex items-center justify-between group-hover:-translate-y-1">
                      <div className="flex items-center gap-6">
                         <div className="p-4 bg-primary/5 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                            <FileText size={24} />
                         </div>
                         <div className="space-y-1">
                            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Academic Year</p>
                            <h4 className="text-lg font-black text-primary-dark group-hover:text-primary transition-colors">{rpt.year}</h4>
                         </div>
                      </div>
                      <div className="w-10 h-10 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-primary-dark transition-all">
                         <ExternalLink size={16} />
                      </div>
                   </div>
                 </Link>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
