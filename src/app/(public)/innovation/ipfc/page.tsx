"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Lightbulb, 
  ShieldCheck, 
  Gavel, 
  FileCheck, 
  Globe, 
  ExternalLink, 
  ChevronRight,
  Target,
  Users,
  Compass
} from "lucide-react";
import Link from "next/link";

const IPFC_FEATURES = [
  {
    title: "Patent Facilitation",
    desc: "End-to-end support for searching, drafting, and filing patent applications for student and faculty inventions.",
    icon: Lightbulb
  },
  {
    title: "Trademark Protection",
    desc: "Assistance in identifying and protecting institutional and individual brand identities through trademarking.",
    icon: ShieldCheck
  },
  {
    title: "Industrial Designs",
    desc: "Facilitating the registration of unique aesthetic and functional designs for laboratory innovations.",
    icon: Compass
  },
  {
    title: "Copyright Support",
    desc: "Helping authors and researchers protect their literary, dramatic, and artistic works from unauthorized use.",
    icon: FileCheck
  }
];

export default function IPFCPage() {
  const externalLink = "https://chalapathipharmacyipfc.com/";

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Intellectual Property Centre"
        breadcrumbs={[
          { label: "Innovation", href: "/research/r-and-d" },
          { label: "IPFC" }
        ]}
        description="The Chalapathi Intellectual Property Facilitation Centre (IPFC) is dedicated to protecting, promoting, and managing the intellectual assets of our institutional community."
      />

      {/* Hero / CTA Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
            
            <div className="lg:w-1/2 space-y-12">
               <div className="space-y-6">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary-dark rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                    Proprietary Excellence
                 </div>
                 <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tight leading-tight">Securing Your <br /> Innovations.</h2>
                 <p className="text-lg text-slate-600 font-medium leading-relaxed">
                   The IPFC serves as an institutional bridge between pharmaceutical innovation and legal protection, 
                   providing the expertise required to navigate the complex landscape of Intellectual Property Rights (IPR).
                 </p>
               </div>

               <div className="flex flex-wrap gap-6">
                  <Link 
                    href={externalLink} 
                    target="_blank"
                    className="px-10 py-5 bg-primary-dark text-white font-black uppercase text-sm tracking-widest rounded-2xl flex items-center gap-3 hover:bg-primary shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1"
                  >
                     Official IPFC Portal <ExternalLink size={20} />
                  </Link>
                  <div className="px-10 py-5 bg-slate-50 border border-slate-100 text-slate-400 font-black uppercase text-sm tracking-widest rounded-2xl flex items-center gap-3">
                     <Users size={20} /> Innovator Support
                  </div>
               </div>
            </div>

            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-primary/5 rounded-[4rem] rotate-3 -z-10" />
               <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white p-12 space-y-10">
                  <div className="space-y-4">
                     <h3 className="text-2xl font-black text-primary uppercase flex items-center gap-3">
                        <Target className="text-secondary" /> Our Objectives
                     </h3>
                     <p className="text-slate-500 font-medium leading-relaxed italic">
                        "To create an institutional ecosystem that values, protects, and leverages intellectual work 
                        for the benefit of the innovator and the society at large."
                     </p>
                  </div>

                  <ul className="grid grid-cols-1 gap-6">
                     {[
                       "Awareness of Intellectual Property Rights.",
                       "Assistance in commercializing patented technology.",
                       "Legal coordination for infringement protection.",
                       "Maintaining an institutional IPR database."
                     ].map((obj, i) => (
                       <li key={i} className="flex gap-4 items-start font-bold text-slate-600">
                          <div className="mt-1 bg-primary text-white p-1 rounded-md shrink-0">
                             <ChevronRight size={14} />
                          </div>
                          <span>{obj}</span>
                       </li>
                     ))}
                  </ul>
               </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
         <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
               <h3 className="text-3xl font-black text-primary uppercase tracking-tight">Facilitation Services</h3>
               <p className="text-slate-500 font-medium tracking-tight uppercase text-xs font-black">Comprehensive Support for Intellectual Property</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {IPFC_FEATURES.map((feat, i) => (
                 <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between">
                    <div className="space-y-6">
                       <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-rotate-12 group-hover:scale-110">
                          <feat.icon size={32} />
                       </div>
                       <h4 className="text-xl font-black text-primary-dark uppercase tracking-tight leading-tight">{feat.title}</h4>
                       <p className="text-sm text-slate-500 font-medium leading-relaxed">{feat.desc}</p>
                    </div>
                    <div className="mt-10 h-1 bg-slate-50 w-full rounded-full overflow-hidden">
                       <div className="w-0 group-hover:w-full h-full bg-secondary transition-all duration-1000" />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* External Portal Promo */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4">
            <div className="p-16 bg-primary-dark rounded-[4rem] text-white flex flex-col items-center text-center space-y-10 relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
               <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
               
               <div className="p-6 bg-white/10 rounded-3xl backdrop-blur-sm">
                  <Globe size={48} className="text-secondary" />
               </div>
               
               <div className="space-y-4 max-w-2xl relative z-10">
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Visit the Official <br /> IPFC Portal</h3>
                  <p className="text-white/60 font-medium text-lg leading-relaxed">
                     Navigate to our dedicated portal for filing requests, real-time tracking of IP status, 
                     and access to specialized IPR webinars and resources.
                  </p>
               </div>

               <Link 
                 href={externalLink} 
                 target="_blank"
                 className="px-12 py-6 bg-secondary text-primary-dark font-black tracking-[0.2em] uppercase rounded-[2rem] hover:bg-white hover:scale-105 transition-all shadow-2xl relative z-10"
               >
                  Go to chalapathipharmacyipfc.com
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
