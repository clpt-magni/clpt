"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  CreditCard,
  MapPin,
  Info
} from "lucide-react";
import { PageHeader as CustomPageHeader } from "@/components/ui/PageHeader";
import { PortableText } from "@portabletext/react";

interface FeeProgram {
  name: string;
  intake: string;
  categoryB: string;
  tuitionFee: string;
  categoryBFee?: string;
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

  const formatFee = (fee: string | number) => {
    if (fee === undefined || fee === null || fee === "") return "Contact Office";
    const strFee = fee.toString().trim();
    // Check if it's already a descriptive string (e.g., "Contact Office", "TBD")
    const cleanedDigits = strFee.replace(/[^0-9]/g, "");
    if (!cleanedDigits) return strFee; // return the descriptive string directly
    const num = Number(cleanedDigits);
    if (isNaN(num)) return strFee;
    return `₹ ${num.toLocaleString("en-IN")}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-roboto">
      <CustomPageHeader
        title="Fee Structure"
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Fee Structure" }
        ]}
        description="View sanctioned intake, category allotments, and tuition fee details for all undergraduate and postgraduate programs."
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl space-y-16">

          {/* Fee Table Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-primary rounded-full" />
              <h2 className="text-xl font-bold text-primary-dark font-poppins uppercase tracking-wider">
                Academic Programs & Allotments
              </h2>
            </div>

            <div className="overflow-hidden bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-100/50">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/75 border-b border-slate-100 text-slate-500">
                      <th className="py-5 px-6 text-xs font-black uppercase tracking-wider">Program</th>
                      <th className="py-5 px-6 text-xs font-black uppercase tracking-wider text-center">Sanctioned Intake</th>
                      <th className="py-5 px-6 text-xs font-black uppercase tracking-wider text-center">Category "B" Seats</th>
                      <th className="py-5 px-6 text-xs font-black uppercase tracking-wider text-right">Cat-A Tuition Fee (Annual)</th>
                      <th className="py-5 px-6 text-xs font-black uppercase tracking-wider text-right">Cat-B Tuition Fee (Annual)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.programs.map((prog, idx) => (
                      <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                        <td className="py-5 px-6">
                          <span className="text-base font-bold text-slate-800 group-hover:text-primary transition-colors font-poppins">
                            {prog.name}
                          </span>
                        </td>
                        <td className="py-5 px-6 text-center">
                          <span className="inline-flex items-center justify-center bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold border border-slate-200/40 font-poppins">
                            {prog.intake} Seats
                          </span>
                        </td>
                        <td className="py-5 px-6 text-center">
                          <span className="inline-flex items-center justify-center bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold border border-emerald-100 font-poppins">
                            {prog.categoryB} Seats
                          </span>
                        </td>
                        <td className="py-5 px-6 text-right">
                          <span className="text-base font-black text-slate-800 font-poppins tracking-tight">
                            {formatFee(prog.tuitionFee)}
                          </span>
                        </td>
                        <td className="py-5 px-6 text-right">
                          <span className="text-base font-black text-primary font-poppins tracking-tight">
                            {formatFee(prog.categoryBFee || "")}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Details & Submission Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Application Section */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-xl flex flex-col justify-between border border-primary-dark"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.03] rounded-full -mr-24 -mt-24" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/[0.02] rounded-full -ml-16 -mb-16" />

              <div>
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
                    <CreditCard size={22} className="text-secondary" />
                  </div>
                  <div className="bg-white/10 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider border border-white/10">
                    Application Processing
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 font-poppins tracking-tight">Processing Fee</h3>
                <p className="text-slate-300 text-sm font-medium mb-10 leading-relaxed max-w-sm">
                  A standardized processing fee is applicable at the time of application submission for all institutional courses.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative z-10 mt-auto">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 font-black uppercase tracking-wider text-[10px] font-poppins">
                    Processing Cost
                  </span>
                  <span className="text-3xl font-black text-secondary font-poppins">
                    ₹ {data.applicationFee}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* How to Apply Section */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between gap-6"
            >
              <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 flex-1 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.01] rounded-full pointer-events-none" />

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary border border-slate-100">
                      <MapPin size={20} />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-poppins">Submission Center</div>
                  </div>

                  <h4 className="text-lg font-bold text-slate-800 mb-4 font-poppins">Obtaining Application Sheets</h4>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm whitespace-pre-line">
                    {data.applicationDetails}
                  </p>
                </div>
              </div>

              {data.notes && data.notes.length > 0 && (
                <div className="p-6 bg-amber-50/50 border border-amber-100 rounded-2xl flex items-start gap-3">
                  <Info size={18} className="text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed text-amber-800 font-medium font-poppins">
                    <span className="font-bold block uppercase tracking-wide text-[10px] text-amber-900 mb-1">
                      Important Disclosures
                    </span>
                    <PortableText value={data.notes} />
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Core Guarantees */}
          <div className="pt-10 border-t border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "Transparent Structure", desc: "Regulated strictly by institutional and govt. policies." },
                { label: "No Hidden Costs", desc: "Tuition and administrative costs are fixed per academic year." },
                { label: "Merit Support", desc: "Financial aid opportunities available for Category-A candidates." }
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/5 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={12} />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-slate-800 uppercase tracking-wider font-poppins mb-1">
                      {item.label}
                    </h5>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed">
                      {item.desc}
                    </p>
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
