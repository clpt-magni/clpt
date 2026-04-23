"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2,
  PageHeader
} from "lucide-react";
import { PageHeader as CustomPageHeader } from "@/components/ui/PageHeader";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

interface FeeProgram {
  name: string;
  intake: string;
  categoryB: string;
  tuitionFee: string;
}

interface FeeStructureData {
  academicYear: string;
  programs: FeeProgram[];
  applicationFee: string;
  applicationDetails: string;
  notes?: any[];
}

interface FeeStructureClientProps {
  data: FeeStructureData;
}

export default function FeeStructureClient({ data }: FeeStructureClientProps) {
  if (!data) return null;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <CustomPageHeader
        title="Fee Structure"
        breadcrumbs={[
          { label: "Student Center", href: "/student" },
          { label: "Fee Structure" }
        ]}
        description="Comprehensive breakdown of tuition fees, sanctioned intake, and category-wise seat allotments for all institutional programs."
      />

      {/* Main Content */}
      <section className="py-12 md:py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Fee Table Section */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-10">
               <div className="w-1.5 h-8 bg-primary rounded-full" />
               <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Program Details</h2>
            </div>

            <div className="overflow-hidden bg-white border border-slate-100 rounded-[2.5rem] shadow-xl shadow-slate-900/5">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-8 px-8 text-[11px] font-black uppercase tracking-[0.2em]">S.No</th>
                      <th className="py-8 px-8 text-[11px] font-black uppercase tracking-[0.2em]">Academic Program</th>
                      <th className="py-8 px-8 text-[11px] font-black uppercase tracking-[0.2em] text-center">Intake</th>
                      <th className="py-8 px-8 text-[11px] font-black uppercase tracking-[0.2em] text-center">Category "B"</th>
                      <th className="py-8 px-8 text-[11px] font-black uppercase tracking-[0.2em] text-right">Tuition Fee (Cat-A)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {data.programs.map((prog, idx) => (
                      <tr key={idx} className="group hover:bg-primary/5 transition-colors">
                        <td className="py-8 px-8 text-sm font-black text-slate-300">{(idx + 1).toString().padStart(2, '0')}</td>
                        <td className="py-8 px-8">
                          <span className="text-lg font-black text-slate-800 tracking-tight group-hover:text-primary transition-colors">{prog.name}</span>
                        </td>
                        <td className="py-8 px-8 text-center">
                          <span className="inline-flex items-center justify-center bg-slate-50 text-slate-600 px-4 py-2 rounded-xl text-sm font-black border border-slate-100">{prog.intake}</span>
                        </td>
                        <td className="py-8 px-8 text-center">
                          <span className="inline-flex items-center justify-center bg-primary/5 text-primary px-4 py-2 rounded-xl text-sm font-black border border-primary/10">{prog.categoryB}</span>
                        </td>
                        <td className="py-8 px-8 text-right">
                          <span className="text-xl font-black text-slate-900 tracking-tight">₹{prog.tuitionFee}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Application Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl shadow-primary/30"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -mr-32 -mt-32" />
               <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 blur-3xl rounded-full -ml-24 -mb-24" />
               
               <div className="flex items-start justify-between mb-12 relative z-10">
                 <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                   <CreditCard size={32} />
                 </div>
                 <div className="bg-white/20 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-sm border border-white/20">
                    Application Processing
                 </div>
               </div>

               <h3 className="text-3xl font-black mb-4 tracking-tight leading-tight">Administrative Cost</h3>
               <p className="text-white/80 text-lg font-medium mb-12 leading-relaxed">
                 A standard processing fee is applicable for all new enrollments across undergraduate and postgraduate programs.
               </p>

               <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 relative z-10">
                 <div className="flex items-center justify-between">
                   <span className="text-white/60 font-black uppercase tracking-widest text-[10px]">Application Fee</span>
                   <span className="text-4xl font-black italic tracking-tighter">{data.applicationFee}</span>
                 </div>
               </div>
            </motion.div>

            {/* How to Apply Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-slate-50 rounded-[3rem] p-10 md:p-12 border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary border border-slate-200">
                    <MapPin size={24} />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Submission Center</div>
                </div>

                <h4 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Obtaining Forms</h4>
                <div className="text-slate-500 font-bold leading-relaxed whitespace-pre-line text-base">
                  {data.applicationDetails}
                </div>
              </div>

              {data.notes && data.notes.length > 0 && (
                <div className="p-8 border border-slate-100 rounded-[2.5rem]">
                  <div className="flex items-center gap-3 mb-6">
                    <Info size={18} className="text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Important Disclosures</span>
                  </div>
                  <div className="prose prose-slate prose-sm max-w-none text-slate-500 font-medium prose-p:leading-relaxed">
                    <PortableText value={data.notes} />
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Value Prop Banner */}
          <div className="mt-24 pt-12 border-t border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "Transparent Pricing", desc: "No hidden charges or overheads." },
                { label: "Merit Support", desc: "Scholarships available for Cat-A." },
                { label: "Standardized Costs", desc: "Regulated by institutional policy." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/5 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-900 uppercase tracking-tight mb-2">{item.label}</div>
                    <p className="text-xs text-slate-400 font-bold tracking-tight leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
