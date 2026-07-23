"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  ExternalLink, 
  Search, 
  History, 
  Download,
  AlertCircle,
  FileCheck
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const AICTE_REPORTS = [
  { title: "MANDATORY DISCLOSURE", year: "Current", filename: "man.pdf", type: "Disclosure" },
  { title: "EOA Autonomy 2022-23", year: "2022-23", filename: "EOA_Autonomy_22-23.PDF", type: "EOA" },
  { title: "EOA Autonomy 2021-22", year: "2021-22", filename: "EOA_Autonomy_21-22.PDF", type: "EOA" },
  { title: "EOA Autonomy 2020-21", year: "2020-21", filename: "EOA_Autonomy_20-21.PDF", type: "EOA" },
  { title: "EOA Autonomy 2019-20", year: "2019-20", filename: "EOA_Autonomy_19-20.PDF", type: "EOA" },
  { title: "EOA Autonomy 2018-19", year: "2018-19", filename: "EOA_Autonomy_18-19.PDF", type: "EOA" },
  { title: "EOA Report 2018-19", year: "2018-19", filename: "EOA_Report_2018-19.PDF", type: "Report" },
  { title: "EOA Report 2017-18", year: "2017-18", filename: "EOA_Report_2017-18.pdf", type: "Report" },
  { title: "EOA Report 2016-17", year: "2016-17", filename: "EOA_Report_2016-17.PDF", type: "Report" },
  { title: "EOA Report 2015-16", year: "2015-16", filename: "EOA_Report_2015-16.PDF", type: "Report" },
  { title: "EOA Report 2014-15", year: "2014-15", filename: "EOA_Report_2014-15.PDF", type: "Report" },
  { title: "EOA Report 2013-14", year: "2013-14", filename: "EOA_Report_2013-14.PDF", type: "Report" },
  { title: "EOA Report 2012-13", year: "2012-13", filename: "EOA_Report_2012-13.PDF", type: "Report" },
  { title: "EOA Report 2010-11", year: "2010-11", filename: "EOA_Report_2010-11.pdf", type: "Report" },
  { title: "EOA Report 2008-10", year: "2008-10", filename: "EOA_Report_2008-10.pdf", type: "Report" },
  { title: "EOA Report 2007-08", year: "2007-08", filename: "EOA_Report_2007-08.pdf", type: "Report" },
  { title: "EOA Report 2006-07", year: "2006-07", filename: "EOA_Report_2006-07.pdf", type: "Report" },
  { title: "EOA Report 2005-06", year: "2005-06", filename: "EOA_Report_2005-06.pdf", type: "Report" },
  { title: "EOA Report 2004-05", year: "2004-05", filename: "EOA_Report_2004-05.pdf", type: "Report" },
];

export default function AICTEReportsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredReports = AICTE_REPORTS.filter(rpt => 
    rpt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rpt.year.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="AICTE Reports"
        breadcrumbs={[
          { label: "Compliance", href: "/compliance/pci-approval" },
          { label: "AICTE Reports" }
        ]}
        description="The Institutional Archive of Extension of Approval (EOA) and Mandatory Disclosures as mandated by the All India Council for Technical Education."
      />

      {/* Main Content Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Sidebar / Context */}
            <div className="lg:w-1/3 sticky top-32 space-y-10">
               <div className="space-y-6">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary-dark rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                    Statutory Compliance
                 </div>
                 <h2 className="text-4xl font-black text-primary uppercase tracking-tight">AICTE <br /> Approvals</h2>
                 <p className="text-lg text-slate-600 font-medium leading-relaxed">
                   Chalapathi Institute of Pharmaceutical Sciences maintains a consistent record of AICTE 
                   approvals, reflecting our adherence to national educational standards. 
                 </p>
               </div>

               <Card className="border-none bg-slate-50 overflow-hidden rounded-[2rem] shadow-sm">
                  <CardContent className="p-8 space-y-6">
                    <div className="p-4 bg-white rounded-2xl w-fit shadow-sm text-primary">
                       <History size={28} />
                    </div>
                    <h3 className="text-xl font-black text-primary-dark uppercase">Approval History</h3>
                    <p className="text-sm text-slate-500 font-bold leading-relaxed">
                       This archive contains institutional audit reports and extension of approval documents 
                       dating back to the 2004-05 academic session.
                    </p>
                    <div className="pt-4 border-t border-slate-200">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Accreditation Body</p>
                       <p className="font-black text-primary uppercase text-xs">All India Council for Technical Education</p>
                    </div>
                  </CardContent>
               </Card>

               <div className="p-8 border-2 border-dashed border-slate-100 rounded-[2rem] flex items-start gap-4">
                  <AlertCircle className="text-secondary shrink-0" size={24} />
                  <p className="text-xs text-slate-400 font-bold italic">
                    Note: PDF files for the current academic year are updated post the official notification from AICTE.
                  </p>
               </div>
            </div>

            {/* Content Area / List */}
            <div className="lg:w-2/3 w-full">
               {/* Search Bar */}
               <div className="relative mb-12">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
                  <Input 
                    placeholder="Search by year or report type (e.g., EOA 2022)..." 
                    className="pl-16 h-20 bg-slate-50 border-none rounded-[2rem] font-black text-lg text-primary shadow-inner placeholder:text-slate-300 placeholder:italic"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>

               {/* Results Grid */}
               <div className="grid grid-cols-1 gap-6">
                  {filteredReports.map((rpt, idx) => (
                    <Link 
                      key={idx} 
                      href={`/documents/compliance/aicte/${rpt.filename}`} 
                      target="_blank"
                      className="group block"
                    >
                      <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 group-hover:-translate-y-1">
                         <div className="flex items-center gap-8 text-center md:text-left">
                            <div className="p-5 bg-primary/5 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                               <FileText size={32} />
                            </div>
                            <div className="space-y-1">
                               <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{rpt.type}</p>
                               <h4 className="text-xl font-black text-primary-dark group-hover:text-primary transition-colors">{rpt.title}</h4>
                            </div>
                         </div>

                         <div className="mt-6 md:mt-0 flex items-center gap-8">
                            <div className="text-right hidden md:block">
                               <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Academic Year</p>
                               <p className="text-lg font-black text-primary">{rpt.year}</p>
                            </div>
                            <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-all">
                               <ExternalLink size={20} />
                            </div>
                         </div>
                      </div>
                    </Link>
                  ))}

                  {filteredReports.length === 0 && (
                    <div className="py-20 text-center space-y-4">
                       <div className="w-20 h-20 bg-slate-50 text-slate-200 rounded-full flex items-center justify-center mx-auto">
                          <Search size={40} />
                       </div>
                       <p className="text-slate-400 font-bold uppercase tracking-widest">No reports found matching your criteria</p>
                    </div>
                  )}
               </div>

               <div className="mt-16 p-10 bg-primary shadow-2xl rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                  <div className="space-y-2 relative z-10">
                     <h4 className="text-2xl font-black uppercase tracking-tight">Need specific archives?</h4>
                     <p className="text-white/60 font-medium">Contact our administrative office for historical data prior to 2004.</p>
                  </div>
                  <Link href="/contact" className="px-10 py-5 bg-white text-primary font-black uppercase tracking-widest rounded-2xl hover:bg-secondary hover:text-primary-dark transition-all relative z-10 active:scale-95 shadow-xl">
                     Administration
                  </Link>
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
