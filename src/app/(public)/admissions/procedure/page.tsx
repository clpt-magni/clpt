"use client";

import { 
  Download, 
  Info,
  GraduationCap,
  Layers,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";

const applications = [
  {
    program: "B.Pharmacy",
    title: "B.PHARMACY Application Form",
    icon: GraduationCap,
    url: "/documents/applications/b-pharm-application.pdf",
  },
  {
    program: "M.Pharmacy",
    title: "M.PHARMACY Application Form",
    icon: BookOpen,
    url: "/documents/applications/m-pharm-application.pdf",
  },
  {
    program: "Pharm.D",
    title: "PHARM-D Application Form",
    icon: Layers,
    url: "/documents/applications/pharm-d-application.pdf",
  }
];

const steps = [
  { 
    title: "Download Form", 
    description: "Select your desired program and download the official application form in PDF format." 
  },
  { 
    title: "Fill Details", 
    description: "Provide accurate personal, academic, and contact information as per your official records." 
  },
  { 
    title: "Submit to Office", 
    description: "Submit the filled application along with required certificates to the Principal's office." 
  }
];

export default function ApplicationProcedurePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-roboto">
      {/* Premium Unified Page Header */}
      <PageHeader
        title="Application Procedure"
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Procedure" }
        ]}
        description="Follow the official application process and download program-specific registration forms. We look forward to welcoming you to CLPT."
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* Applications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {applications.map((app, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col bg-slate-50/50 border border-slate-100 rounded-[2.25rem] p-8 hover:shadow-2xl hover:border-primary/10 transition-all duration-500 group relative overflow-hidden"
                >
                   {/* Decorative border highlight */}
                   <div className="absolute top-0 left-0 w-full h-1.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-full" />
                   
                   <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 mb-8 shadow-inner">
                      <app.icon size={24} />
                   </div>
                   
                   <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-2 font-poppins">
                      {app.program}
                   </span>
                   <h3 className="text-xl font-bold text-slate-800 tracking-tight leading-snug mb-8 font-poppins">
                      {app.title}
                   </h3>
                   
                   <div className="mt-auto space-y-4">
                       <Link href={app.url} target="_blank" className="w-full block">
                          <Button className="w-full h-14 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 border-none shadow-lg shadow-primary/10">
                             <Download size={16} /> Download PDF Form
                          </Button>
                       </Link>
                       <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest opacity-60">
                          Official Form for {app.program} Admission
                       </p>
                    </div>
                </motion.div>
             ))}
          </div>

          {/* Step by Step Guide Box */}
          <div className="p-8 md:p-14 bg-slate-50 border border-slate-100 rounded-[2.5rem] relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.01] blur-[80px] -mr-10 transition-all duration-700 group-hover:bg-primary/[0.03] pointer-events-none" />
             
             <div className="space-y-10">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                      <Info size={18} />
                   </div>
                   <h3 className="text-2xl font-bold text-primary-dark font-poppins">Step-by-Step Guide</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                   {steps.map((step, idx) => (
                     <div key={idx} className="space-y-4 relative">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-md font-poppins text-sm">
                              {idx + 1}
                           </div>
                           <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest font-poppins">
                              {step.title}
                           </h4>
                        </div>
                        <p className="text-sm font-medium text-slate-500 leading-relaxed pl-14">
                           {step.description}
                        </p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Official Bottom Branding */}
      <footer className="bg-slate-50 py-16 border-t border-slate-100/50 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] opacity-50">
            CLPT Academic Quality • Admissions Office
          </p>
        </div>
      </footer>
    </div>
  );
}
