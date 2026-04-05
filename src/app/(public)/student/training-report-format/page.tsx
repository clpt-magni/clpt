"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Download, 
  Settings, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  Users2,
  Briefcase
} from "lucide-react";
import Link from "next/link";

const GUIDELINES = [
  "Standardized A4 size document formatting.",
  "Detailed internship timeline and project outcomes.",
  "Mandatory signature from institutional and industrial supervisors.",
  "Inclusion of daily work logs and technical observations.",
  "Proper scientific nomenclature for pharmaceutical terms."
];

export default function TrainingReportFormatPage() {
  const pdfUrl = "/documents/student/training/Internship-training-report.pdf";

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Training Report Format"
        breadcrumbs={[
          { label: "Student Support", href: "/student/support" },
          { label: "Training Format" }
        ]}
        description="Access the standardized institutional format and guidelines for submission of Internship and Industrial Training reports."
      />

      {/* Main Action Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Context & Guidelines */}
            <div className="lg:w-3/5 space-y-12">
               <div className="space-y-6">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary-dark rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                    Industrial Training Standards
                 </div>
                 <h2 className="text-4xl font-black text-primary uppercase tracking-tight">Report Submission <br /> Guidelines</h2>
                 <p className="text-lg text-slate-600 font-medium leading-relaxed">
                   To maintain consistency in academic documentation, all students completing their pharmaceutical 
                   internships are required to follow the official institutional training report format.
                 </p>
               </div>

               <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-inner">
                  <h3 className="text-xl font-black text-primary mb-8 uppercase flex items-center gap-3">
                     <Settings className="text-secondary" /> Technical Requirements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                     {GUIDELINES.map((item, i) => (
                       <div key={i} className="flex gap-4 group">
                          <CheckCircle2 size={18} className="text-primary-dark shrink-0 mt-1" />
                          <span className="text-slate-600 font-bold text-sm leading-relaxed">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="p-8 border-2 border-dashed border-slate-100 rounded-[2.5rem] flex items-start gap-4">
                  <AlertCircle className="text-secondary shrink-0" size={24} />
                  <p className="text-xs text-slate-400 font-bold leading-relaxed italic">
                    Note: Reports submitted in non-standard formats will require revision. Ensure all signatures are obtained before final binding.
                  </p>
               </div>
            </div>

            {/* Download Card */}
            <div className="lg:w-2/5 w-full sticky top-32">
               <Card className="border-none bg-primary-dark text-white rounded-[3rem] shadow-2xl overflow-hidden group">
                  <CardContent className="p-12 space-y-10 relative">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                     <div className="absolute bottom-0 left-0 w-full h-2 bg-secondary group-hover:h-3 transition-all" />
                     
                     <div className="p-6 bg-white/10 rounded-3xl w-fit">
                        <FileText size={48} className="text-secondary" />
                     </div>

                     <div className="space-y-4">
                        <h4 className="text-3xl font-black uppercase tracking-tight">Internship Report <br /> Template</h4>
                        <p className="text-white/60 font-medium leading-relaxed">
                           Digital template containing front page design, index structure, and content formatting.
                        </p>
                     </div>

                     <Link 
                       href={pdfUrl} 
                       target="_blank"
                       className="flex items-center justify-center gap-3 w-full py-6 bg-white text-primary-dark font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-secondary hover:scale-[1.02] transition-all shadow-xl"
                     >
                        <Download size={20} /> Download Format
                     </Link>

                     <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                        <div className="flex flex-col">
                           <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Document Type</span>
                           <span className="text-xs font-black uppercase">Standard PDF</span>
                        </div>
                        <div className="flex flex-col text-right">
                           <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">File Size</span>
                           <span className="text-xs font-black uppercase">Archive</span>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Auxiliary Actions */}
               <div className="mt-8 flex gap-4">
                  <div className="flex-1 p-6 bg-slate-50 rounded-[2rem] text-center space-y-2 group hover:bg-white transition-all cursor-pointer">
                     <Briefcase size={24} className="mx-auto text-primary" />
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Placement Hub</p>
                  </div>
                  <div className="flex-1 p-6 bg-slate-50 rounded-[2rem] text-center space-y-2 group hover:bg-white transition-all cursor-pointer">
                     <Users2 size={24} className="mx-auto text-primary" />
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Support Forum</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Institutional Requirement Showcase */}
      <section className="py-24 bg-slate-50">
         <div className="container mx-auto px-4">
            <div className="p-16 bg-white rounded-[4rem] border border-slate-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="space-y-4 max-w-xl text-center md:text-left">
                  <h3 className="text-3xl font-black text-primary uppercase tracking-tight leading-tight">Professional Submission Portal</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                     Once completed and signed, training reports should be submitted to the academic office 
                     within 15 days of internship completion for credit processing.
                  </p>
               </div>
               <Link href="/contact" className="px-12 py-6 bg-primary-dark text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-primary hover:shadow-2xl transition-all whitespace-nowrap">
                  Academic Office
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
