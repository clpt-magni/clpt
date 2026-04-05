"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileCheck, 
  ExternalLink, 
  ShieldAlert, 
  FileText,
  Download,
  Info
} from "lucide-react";
import Link from "next/link";

export default function UGCUndertakingPage() {
  const pdfUrl = "/documents/compliance/ugc/ugc.pdf";

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="UGC Undertaking"
        breadcrumbs={[
          { label: "Compliance", href: "/compliance/pci-approval" },
          { label: "UGC Undertaking" }
        ]}
        description="Statutory undertaking and institutional declaration as mandated by the University Grants Commission (UGC)."
      />

      {/* Overview & Action Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between p-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-inner">
             <div className="flex items-center gap-8">
                <div className="p-6 bg-primary text-white rounded-3xl shadow-xl">
                   <FileCheck size={40} />
                </div>
                <div className="space-y-2">
                   <h2 className="text-2xl font-black text-primary-dark uppercase">Official Undertaking</h2>
                   <p className="text-slate-500 font-medium">Verified institutional document for UGC compliance.</p>
                </div>
             </div>
             
             <div className="flex flex-wrap gap-4">
                <Link 
                  href={pdfUrl} 
                  target="_blank"
                  className="px-8 py-4 bg-primary-dark text-white font-black uppercase text-sm tracking-widest rounded-2xl flex items-center gap-3 hover:bg-primary hover:shadow-xl transition-all"
                >
                   <Download size={18} /> Download PDF
                </Link>
                <div className="px-8 py-4 bg-white border border-slate-200 text-slate-400 font-bold text-sm rounded-2xl flex items-center gap-2">
                   <ShieldAlert size={18} className="text-secondary" /> Required Disclosure
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Document Viewer Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
             <Card className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden bg-white ring-8 ring-white/50">
                <CardContent className="p-0">
                   <div className="bg-primary-dark px-10 py-4 flex items-center justify-between border-b border-primary/20">
                      <div className="flex items-center gap-3">
                         <div className="w-3 h-3 rounded-full bg-red-400" />
                         <div className="w-3 h-3 rounded-full bg-yellow-400" />
                         <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em]">Institutional Disclosure Viewer</span>
                      <FileText size={16} className="text-white/30" />
                   </div>
                   
                   <div className="aspect-[1/1.4] w-full">
                      <iframe 
                        src={`${pdfUrl}#toolbar=0&navpanes=0`} 
                        className="w-full h-full border-none"
                        title="UGC Undertaking PDF"
                      />
                   </div>
                </CardContent>
             </Card>

             <div className="mt-12 flex flex-col md:flex-row items-center gap-8 justify-between p-8 bg-white border border-slate-100 rounded-3xl">
                <div className="flex items-start gap-4">
                   <Info className="text-primary mt-1" size={24} />
                   <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
                     If the document is not loading correctly, please ensure your browser has a PDF viewer enabled or use the download button above.
                   </p>
                </div>
                <Link href="/compliance/aicte-reports" className="group flex items-center gap-4 text-primary font-black uppercase text-sm whitespace-nowrap">
                   View AICTE Reports <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
