"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Briefcase, 
  Users, 
  Heart, 
  Scale, 
  Search, 
  MapPin, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Globe,
  Mail,
  UserPlus
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const VACANCIES = [
  {
    dept: "Pharmaceutical Chemistry",
    title: "Professor",
    count: "01",
    type: "Full-Time",
    location: "Main Campus"
  },
  {
    dept: "Pharmaceutics",
    title: "Professor / Associate Professor",
    count: "----",
    type: "N/A",
    location: "Main Campus"
  },
  {
    dept: "Pharmacognosy",
    title: "Professor / Assistant Professor",
    count: "----",
    type: "N/A",
    location: "Main Campus"
  },
  {
    dept: "Pharmacology",
    title: "Assistant Professor",
    count: "----",
    type: "N/A",
    location: "Main Campus"
  },
  {
    dept: "Pharmacy Practice",
    title: "Professor / Associate / Assistant",
    count: "----",
    type: "N/A",
    location: "Main Campus"
  }
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Careers at Chalapathi"
        breadcrumbs={[
          { label: "About", href: "/about/chairman" },
          { label: "Careers" }
        ]}
        description="Join a legacy of excellence. We are committed to fostering a diverse and inclusive environment that empowers pharmaceutical educators and researchers."
      />

      {/* Intro Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-8 space-y-12">
               <div className="space-y-6">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary-dark rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                    Inclusive Excellence
                 </div>
                 <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight leading-tight">Diversity & <br /> Growth.</h2>
                 <p className="text-lg text-slate-600 font-medium leading-relaxed italic">
                    "Chalapathi Institute of Pharmaceutical Sciences (CLPT) has a strong commitment to the principles 
                    of diversity and inclusion and to maintaining a working and learning environment that is 
                    conductive and devoid of all forms of discrimination."
                 </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex items-start gap-6 group hover:bg-white hover:shadow-xl transition-all duration-500">
                     <div className="p-4 bg-white rounded-2xl text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                        <Scale size={28} />
                     </div>
                     <div>
                        <h4 className="text-lg font-black text-primary-dark uppercase">Fair Recruitment</h4>
                        <p className="text-sm text-slate-500 font-bold mt-1">Merit-based selection process for all academic and staff roles.</p>
                     </div>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex items-start gap-6 group hover:bg-white hover:shadow-xl transition-all duration-500">
                     <div className="p-4 bg-white rounded-2xl text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-rotate-6">
                        <Heart size={28} />
                     </div>
                     <div>
                        <h4 className="text-lg font-black text-primary-dark uppercase">Supportive Culture</h4>
                        <p className="text-sm text-slate-500 font-bold mt-1">Environment focused on professional development and well-being.</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-4 sticky top-32">
               <div className="p-10 bg-primary-dark text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-secondary" />
                  
                  <div className="space-y-6">
                     <div className="p-4 bg-white/10 rounded-2xl w-fit">
                        <Mail size={32} className="text-secondary" />
                     </div>
                     <h3 className="text-2xl font-black uppercase tracking-tight">Apply Now</h3>
                     <p className="text-white/60 font-medium text-sm leading-relaxed">
                        Interested candidates can send their detailed resume and credentials to our recruitment office.
                     </p>
                     
                     <div className="space-y-4 pt-4">
                        <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                           <p className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-1">Email Address</p>
                           <p className="text-sm font-black uppercase">principalclpt@gmail.com</p>
                        </div>
                        <Link href="/contact" className="flex items-center justify-between p-4 bg-secondary text-primary-dark rounded-2xl hover:bg-white transition-all group">
                           <span className="font-black text-xs uppercase tracking-widest">Contact Recruitment</span>
                           <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vacancy Board */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
               <div className="space-y-4">
                  <h3 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight flex items-center gap-4">
                     <Briefcase className="text-secondary" size={40} /> Current Openings
                  </h3>
                  <p className="text-slate-500 font-medium max-w-xl">
                     Explore available academic positions across our pharmaceutical departments.
                  </p>
               </div>
               <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-slate-200 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Board Updated Today</span>
               </div>
            </div>

            <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden">
               <CardContent className="p-0">
                  <div className="overflow-x-auto">
                     <Table>
                        <TableHeader className="bg-primary-dark">
                           <TableRow className="border-none hover:bg-transparent">
                              <TableHead className="text-white font-black uppercase py-8 px-10 text-xs tracking-widest">Department</TableHead>
                              <TableHead className="text-white font-black uppercase py-8 px-10 text-xs tracking-widest">Position</TableHead>
                              <TableHead className="text-white font-black uppercase py-8 px-10 text-xs tracking-widest text-center">Vacancies</TableHead>
                              <TableHead className="text-white font-black uppercase py-8 px-10 text-xs tracking-widest text-right">Status</TableHead>
                           </TableRow>
                        </TableHeader>
                        <TableBody>
                           {VACANCIES.map((vac, idx) => (
                              <TableRow key={idx} className="border-slate-100 hover:bg-slate-50 transition-colors">
                                 <TableCell className="py-8 px-10">
                                    <div className="flex items-center gap-4">
                                       <div className="p-3 bg-primary/5 text-primary rounded-xl">
                                          <Globe size={18} />
                                       </div>
                                       <span className="font-black text-slate-700 uppercase tracking-tight text-sm">{vac.dept}</span>
                                    </div>
                                 </TableCell>
                                 <TableCell className="py-8 px-10">
                                    <div className="space-y-1">
                                       <p className="text-sm font-black text-primary-dark uppercase">{vac.title}</p>
                                       <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                          <span className="flex items-center gap-1"><Clock size={10} /> {vac.type}</span>
                                          <span className="flex items-center gap-1"><MapPin size={10} /> {vac.location}</span>
                                       </div>
                                    </div>
                                 </TableCell>
                                 <TableCell className="py-8 px-10 text-center">
                                    <span className={`px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest ${vac.count !== '----' ? 'bg-secondary text-primary-dark' : 'bg-slate-100 text-slate-300'}`}>
                                       {vac.count}
                                    </span>
                                 </TableCell>
                                 <TableCell className="py-8 px-10 text-right">
                                    {vac.count !== '----' ? (
                                       <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-50 text-emerald-600 rounded-full font-black text-[10px] uppercase tracking-widest border border-emerald-100">
                                          Active <ShieldCheck size={14} />
                                       </div>
                                    ) : (
                                       <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic">Closed</span>
                                    )}
                                 </TableCell>
                              </TableRow>
                           ))}
                        </TableBody>
                     </Table>
                  </div>
               </CardContent>
            </Card>
         </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { title: "Application", desc: "Submit your comprehensive portfolio and research vision via email.", icon: UserPlus },
                 { title: "Review", desc: "Our selection committee evaluates academic rigor and institutional fit.", icon: Search },
                 { title: "Onboarding", desc: "A guided transition into the institutional research and teaching faculty.", icon: Award }
               ].map((step, i) => (
                 <div key={i} className="text-center space-y-6">
                    <div className="w-20 h-20 bg-slate-50 text-primary rounded-[2rem] flex items-center justify-center mx-auto shadow-sm group hover:bg-primary hover:text-white hover:scale-110 transition-all duration-500">
                       <step.icon size={32} />
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-xl font-black text-primary uppercase tracking-tight">{step.title}</h4>
                       <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[250px] mx-auto">{step.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
