"use client";

import { 
  FileText, 
  Download, 
  ArrowRight, 
  CheckCircle2, 
  Info,
  Clock,
  History,
  GraduationCap,
  Layers,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const applications = [
  {
    program: "B.Pharmacy",
    title: "B.PHARMACY Application Form",
    icon: GraduationCap,
    url: "/documents/applications/b-pharm-application.pdf",
    color: "blue"
  },
  {
    program: "M.Pharmacy",
    title: "M.PHARMACY Application Form",
    icon: BookOpen,
    url: "/documents/applications/m-pharm-application.pdf",
    color: "indigo"
  },
  {
    program: "Pharm.D",
    title: "PHARM-D Application Form",
    icon: Layers,
    url: "/documents/applications/pharm-d-application.pdf",
    color: "slate"
  }
];

const steps = [
  { title: "Download Form", description: "Select your desired program and download the official application form in PDF format." },
  { title: "Fill Details", description: "Provide accurate personal, academic, and contact information as per your official records." },
  { title: "Submit to Office", description: "Submit the filled application along with required certificates to the Principal's office." }
];

export default function ApplicationProcedurePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Institutional Hero Section */}
      <section className="bg-slate-50 pt-24 pb-20 md:pt-40 md:pb-32 relative overflow-hidden border-b border-slate-100/50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/[0.03] blur-[120px] rounded-full -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-400/[0.03] blur-[100px] rounded-full -ml-20 -mb-20" />
        
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-blue-600/5 border border-blue-600/10 rounded-full text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Admissions Portal
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight mb-8 leading-[0.95]">
              Application <br />
              <span className="text-blue-600">Procedure</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Start your professional journey in pharmacy. Follow the official application steps and download the program-specific forms below.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Downloadable Applications Section */}
      <section className="py-20 md:py-32 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {applications.map((app, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col bg-white border border-slate-100 rounded-[2.5rem] p-10 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group"
                >
                   <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 mb-8">
                      <app.icon size={28} />
                   </div>
                   
                   <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">{app.program}</p>
                   <h3 className="text-xl font-black text-slate-900 tracking-tight leading-tight mb-8">
                      {app.title}
                   </h3>
                   
                   <div className="mt-auto space-y-4">
                      <Link href={app.url} target="_blank">
                         <Button className="w-full h-14 rounded-2xl bg-slate-900 hover:bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] transition-all">
                            <Download size={16} className="mr-2" /> Download PDF Form
                         </Button>
                      </Link>
                      <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest opacity-50">Official Form for {app.program} Admission</p>
                   </div>
                </motion.div>
             ))}
          </div>

          {/* Guidelines Box */}
          <div className="mt-20 md:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-20 p-8 md:p-16 bg-slate-50 border border-slate-100 rounded-[3rem] relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/[0.02] blur-[100px] -mr-10 transition-all duration-700 group-hover:bg-blue-600/[0.04]" />
             
             <div className="lg:col-span-12">
                <div className="flex items-center gap-4 mb-12">
                   <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                      <Info size={18} />
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 tracking-tight">Step-by-Step Guide</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                   {steps.map((step, idx) => (
                     <div key={idx} className="space-y-4">
                        <div className="flex items-center gap-4">
                           <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-black text-slate-400">{idx + 1}</div>
                           <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">{step.title}</h4>
                        </div>
                        <p className="text-sm font-semibold text-slate-500 leading-relaxed pl-12">{step.description}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Official Bottom Branding */}
      <footer className="bg-slate-50 py-20 border-t border-slate-100/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] opacity-50">
            CLPT Academic Quality • Admissions Office
          </p>
        </div>
      </footer>
    </div>
  );
}
