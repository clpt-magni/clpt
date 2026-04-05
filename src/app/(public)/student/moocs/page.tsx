"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Laptop, 
  BookOpen, 
  ExternalLink, 
  Award, 
  FileText, 
  Globe, 
  ChevronRight,
  GraduationCap
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const BPHARM_MOOC = [
  { year: "2020-2024", filename: "2020-2024 MOOC.pdf" },
  { year: "2019-2023", filename: "2019-2023 MOOC.pdf" },
  { year: "2018-2022", filename: "B PHARM MOOCS 2018-22.pdf" },
  { year: "2017-2021", filename: "B PHM MOOCS 2017-2021.pdf" },
  { year: "2016-2020", filename: "B PHARMACY MOOCS BATCH-16-20.pdf" },
];

const MPHARM_MOOC = [
  { year: "2022-2023", filename: "MOOCS 2022-2023 M PHARM.pdf" },
  { year: "2021-2022", filename: "MOOCS 2021-2022 M PHARM.pdf" },
  { year: "2020-2021", filename: "MOOCS 2020-2021 M PHARM.pdf" },
  { year: "2019-2020", filename: "MOOCS 2019-2020 M PHARM.pdf" },
  { year: "2018-2019", filename: "MOOCS 2018-2019 M PHARM.pdf" },
];

export default function MOOCsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Massive Open Online Courses"
        breadcrumbs={[
          { label: "Student Life", href: "/student/support" },
          { label: "MOOCs" }
        ]}
        description="Encouraging students to expand their academic horizons through globally recognized online courses and certifications from top universities and platforms."
      />

      {/* Intro Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-12 text-center space-y-6 mb-16">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary-dark rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                  Global Learning Standards
               </div>
               <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight">MOOCs Achievement Archive</h2>
               <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto italic">
                  "At Chalapathi Pharmacy, we promote autonomous learning. Our students successfully complete 
                  specialized courses on platforms like NPTEL, Coursera, and Swayam to stay ahead in 
                  pharmaceutical innovation."
               </p>
            </div>

            <div className="lg:col-span-12">
               <Tabs defaultValue="bpharm" className="w-full">
                  <div className="flex justify-center mb-16">
                     <TabsList className="bg-slate-100 p-2 rounded-[2.5rem] gap-2 h-auto shadow-inner border border-slate-200">
                        <TabsTrigger value="bpharm" className="px-12 py-5 rounded-[2rem] font-black uppercase text-xs tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-xl transition-all">
                           B.Pharmacy
                        </TabsTrigger>
                        <TabsTrigger value="mpharm" className="px-12 py-5 rounded-[2rem] font-black uppercase text-xs tracking-widest data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-xl transition-all">
                           M.Pharmacy
                        </TabsTrigger>
                     </TabsList>
                  </div>

                  <TabsContent value="bpharm" className="mt-0">
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BPHARM_MOOC.map((rpt, i) => (
                           <Link 
                             key={i} 
                             href={`/documents/moocs/bp/${rpt.filename}`} 
                             target="_blank"
                             className="group block"
                           >
                              <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:bg-white hover:border-primary/20 transition-all duration-500 flex flex-col justify-between h-full group-hover:-translate-y-2">
                                 <div className="space-y-6">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12">
                                       <Award size={32} />
                                    </div>
                                    <div className="space-y-1">
                                       <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none">Course Batch</p>
                                       <h4 className="text-2xl font-black text-primary-dark group-hover:text-primary transition-colors tracking-tight">{rpt.year}</h4>
                                    </div>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                       Institutional record of massive online open courses certificates achieved by the batch.
                                    </p>
                                 </div>
                                 <div className="mt-10 flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">
                                    View Detailed List <ChevronRight size={14} />
                                 </div>
                              </div>
                           </Link>
                        ))}
                     </div>
                  </TabsContent>

                  <TabsContent value="mpharm" className="mt-0">
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {MPHARM_MOOC.map((rpt, i) => (
                           <Link 
                             key={i} 
                             href={`/documents/moocs/mp/${rpt.filename}`} 
                             target="_blank"
                             className="group block"
                           >
                              <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:bg-white hover:border-primary/20 transition-all duration-500 flex flex-col justify-between h-full group-hover:-translate-y-2">
                                 <div className="space-y-6">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-rotate-12">
                                       <GraduationCap size={32} />
                                    </div>
                                    <div className="space-y-1">
                                       <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none">Post-Grad Batch</p>
                                       <h4 className="text-2xl font-black text-primary-dark group-hover:text-primary transition-colors tracking-tight">{rpt.year}</h4>
                                    </div>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                       M.Pharmacy postgraduate specialization certificates and global course completion records.
                                    </p>
                                 </div>
                                 <div className="mt-10 flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">
                                    View Certificates <ChevronRight size={14} />
                                 </div>
                              </div>
                           </Link>
                        ))}
                     </div>
                  </TabsContent>
               </Tabs>
            </div>

          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
               <div className="lg:w-1/2 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                  <img src="/images/resources/moocs/1.jpg" alt="Student Certification 1" className="w-full h-auto" />
               </div>
               <div className="lg:w-1/2 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-700">
                  <img src="/images/resources/moocs/2.jpg" alt="Student Certification 2" className="w-full h-auto" />
               </div>
            </div>
         </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-primary text-white">
         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-4 max-w-2xl text-center md:text-left">
               <h3 className="text-4xl font-black uppercase tracking-tight">Expand Your Knowledge</h3>
               <p className="text-white/60 text-lg font-medium">Looking to enroll in a new session? Consult with our digital learning coordinator for platform access and course recommendations.</p>
            </div>
            <div className="flex gap-4">
               <div className="px-10 py-5 bg-secondary text-primary-dark font-black uppercase tracking-widest rounded-2xl shadow-xl hover:scale-105 transition-all cursor-pointer">
                  NPTEL Portal
               </div>
               <div className="px-10 py-5 bg-white/10 text-white font-black uppercase tracking-widest rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/20 transition-all cursor-pointer">
                  Coursera Hub
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
