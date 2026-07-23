"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  ExternalLink, 
  Search, 
  History, 
  ShieldCheck,
  TrendingUp,
  Scale
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const AUDIT_REPORTS = [
  { title: "Audit Report Statement 2023-2024", year: "2023-2024", filename: "23-24.pdf" },
  { title: "Audit Report Statement 2022-2023", year: "2022-2023", filename: "22-23.pdf" },
  { title: "Audit Report Statement 2021-2022", year: "2021-2022", filename: "21-22.pdf" },
  { title: "Audit Report Statement 2020-2021", year: "2020-2021", filename: "20-21.pdf" },
  { title: "Audit Report Statement 2019-2020", year: "2019-2020", filename: "19-20.pdf" },
  { title: "Audit Report Statement 2018-2019", year: "2018-2019", filename: "18-19.pdf" },
  { title: "Audit Report Statement 2017-2018", year: "2017-2018", filename: "17-18.pdf" },
  { title: "Audit Report Statement 2016-2017", year: "2016-2017", filename: "16-17.pdf" },
  { title: "Audit Report Statement 2015-2016", year: "2015-2016", filename: "15-16.pdf" },
];

export default function AuditReportsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredReports = AUDIT_REPORTS.filter(rpt => 
    rpt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rpt.year.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Audit Reports"
        breadcrumbs={[
          { label: "Compliance", href: "/compliance/pci-approval" },
          { label: "Audit Reports" }
        ]}
        description="Comprehensive financial transparency archives. Access audited institutional financial statements and compliance reports across academic sessions."
      />

      {/* Main Content */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            
            {/* Context & Highlights */}
            <div className="lg:w-1/3 sticky top-32 space-y-10">
               <div className="space-y-6">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-500 rounded-full font-black text-xs uppercase tracking-widest border border-slate-100">
                    Financial Transparency
                 </div>
                 <h2 className="text-4xl font-black text-primary uppercase tracking-tight">Audit <br /> Archives</h2>
                 <p className="text-lg text-slate-600 font-medium leading-relaxed">
                   Our institution maintains peak financial transparency through regular, independent audits. 
                   These reports represent our commitment to fiscal responsibility and regulatory compliance.
                 </p>
               </div>

               <div className="grid grid-cols-1 gap-4">
                  {[
                    { label: "Compliance", icon: ShieldCheck, desc: "Strict adherence to statutory financial norms." },
                    { label: "Integrity", icon: Scale, desc: "Verified and independent financial assessments." },
                    { label: "Growth", icon: TrendingUp, desc: "Sustained institutional fiscal development." }
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 items-start group hover:bg-white hover:shadow-xl transition-all duration-500">
                       <div className="p-3 bg-white text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                          <feat.icon size={20} />
                       </div>
                       <div>
                          <p className="text-sm font-black text-primary uppercase tracking-tight">{feat.label}</p>
                          <p className="text-xs text-slate-400 font-bold mt-1 leading-relaxed">{feat.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="p-8 bg-primary-dark rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                  <History size={40} className="text-secondary mb-4" />
                  <h4 className="text-xl font-black uppercase mb-2">9+ Years of Data</h4>
                  <p className="text-white/60 text-sm font-medium">Digital archives available for verification from 2015 onwards.</p>
               </div>
            </div>

            {/* Document Listing */}
            <div className="lg:w-2/3 w-full">
               <div className="relative mb-12">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
                  <Input 
                    placeholder="Search audit years (e.g., 2023)..." 
                    className="pl-16 h-20 bg-slate-50 border-none rounded-[2rem] font-black text-lg text-primary shadow-inner placeholder:text-slate-300 placeholder:italic"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>

               <div className="grid grid-cols-1 gap-6">
                  {filteredReports.map((rpt, idx) => (
                    <Link 
                      key={idx} 
                      href={`/documents/compliance/audit/${rpt.filename}`} 
                      target="_blank"
                      className="group block"
                    >
                      <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group-hover:-translate-y-1">
                         <div className="flex items-center gap-10">
                            <div className="relative">
                               <div className="p-6 bg-primary/5 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12">
                                  <FileText size={36} />
                               </div>
                               <div className="absolute -top-2 -right-2 bg-secondary text-primary-dark w-8 h-8 rounded-full flex items-center justify-center font-black text-[10px] shadow-lg border-2 border-white">
                                  PDF
                               </div>
                            </div>
                            <div className="space-y-2">
                               <p className="text-xs font-black text-slate-300 uppercase tracking-[0.2em]">Audit Statement</p>
                               <h4 className="text-2xl font-black text-primary-dark group-hover:text-primary transition-colors tracking-tight">{rpt.year}</h4>
                            </div>
                         </div>

                         <div className="mt-8 md:mt-0 px-8 py-3 bg-slate-50 text-slate-400 group-hover:bg-secondary group-hover:text-primary-dark rounded-full font-black text-xs uppercase tracking-widest transition-all overflow-hidden flex items-center gap-3">
                            View Report <ExternalLink size={16} />
                         </div>
                      </div>
                    </Link>
                  ))}

                  {filteredReports.length === 0 && (
                    <div className="py-20 text-center space-y-6">
                       <div className="w-24 h-24 bg-slate-50 text-slate-100 rounded-full flex items-center justify-center mx-auto">
                          <Search size={48} />
                       </div>
                       <p className="text-slate-400 font-black uppercase tracking-widest">No matching audit records found</p>
                    </div>
                  )}
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
