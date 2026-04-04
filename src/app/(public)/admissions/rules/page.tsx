"use client";

import { 
  ShieldCheck, 
  UserCheck, 
  AlertCircle, 
  Gavel, 
  CheckCircle2, 
  Info,
  ExternalLink,
  Users,
  Building,
  Smartphone,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const codeOfConduct = [
  "Conduct yourself at all times, in a manner befitting your association with the institute.",
  "Show due respect and courtesy to the teachers, administrators officers and employees of the institute.",
  "Pay due attention and courtesy to the visitors of the institute and residents of the campus.",
  "Show good neighbourly behavior to fellow students.",
  "Be logical and lucid in expressing your own opinions.",
  "Show due respect to the opinion of others even if it differs from your own opinion.",
  "Do not make any attempt to breach the rules and regulations of the institution.",
  "Do not use unfair means during examinations.",
  "Do not pinch or damage the institute property, or belongings of fellow students.",
  "Do not disturb other fellow students while they are studying.",
  "Do not exhibit noisy and unseemly behavior.",
  "Do not indulge in ragging in any form, whatsoever.",
  "Do not indulge in any activity which can possibly tarnish the image of the institute.",
  "ANY OTHER SIMILAR UNDESIRABLE ACTIVITY must be avoided.",
  "Any violation of CCS shall invite disciplinary action, which includes even expulsion from the institute."
];

const generalRules = [
  { icon: UserCheck, text: "Students shall try their best to cultivate and uphold noble ideals and high values of life and conduct." },
  { icon: Users, text: "They shall take active interest in all the academic, moral, cultural and social activities of the college." },
  { icon: Info, text: "Every student shall try to keep up dignity and morale in dealings with the staff and outsiders." },
  { icon: Building, text: "Students shall handle the property of the institution with care." },
  { icon: Gavel, text: "No meeting or function shall be held in the campus without prior sanction of the Principal." },
  { icon: Info, text: "Students are advised to consult the college notice board every day." },
  { icon: AlertCircle, text: "Students should keep the college building and premises clean. Dustbins are to be properly utilized." },
  { icon: Smartphone, text: "Using cellphones is strictly prohibited in the college campus." }
];

export default function RulesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Institutional Hero Section */}
      <section className="bg-slate-50 pt-24 pb-20 md:pt-40 md:pb-32 relative overflow-hidden border-b border-slate-100/50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/[0.03] blur-[120px] rounded-full -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-400/[0.03] blur-[100px] rounded-full -ml-20 -mb-20" />
        
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-blue-600/5 border border-blue-600/10 rounded-full text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Institutional Governance
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight mb-8 leading-[0.95]">
              Rules & <br />
              <span className="text-blue-600">Regulations</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Chalapathi Institute of Pharmaceutical Sciences upholds a standard of excellence, discipline, and mutual respect. 
              All students are required to adhere to the institutional code of conduct to ensure a productive academic environment.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Code of Conduct (Direct Content) */}
      <section className="py-20 md:py-32 bg-white container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Main Code of Conduct Card */}
          <div className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-20 shadow-2xl shadow-slate-200/40 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/[0.02] rounded-full blur-[100px] -mr-20 group-hover:bg-blue-600/[0.04] transition-all duration-700" />
             
             <div className="relative z-10">
                <div className="flex items-center gap-6 mb-16">
                   <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-600/20">
                      <ShieldCheck size={28} />
                   </div>
                   <div>
                      <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">Code of Conduct for Students</h2>
                      <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mt-1">Official Student Governance Policy</p>
                   </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-8">
                   {codeOfConduct.map((rule, idx) => (
                     <motion.div 
                       key={idx}
                       initial={{ opacity: 0, y: 10 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: idx * 0.05 }}
                       className="flex gap-6 group/rule"
                     >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400 group-hover/rule:bg-blue-600 group-hover/rule:text-white transition-all duration-300">
                           {idx + 1}
                        </div>
                        <p className="text-sm font-semibold text-slate-600 leading-relaxed group-hover/rule:text-slate-900 transition-colors">
                          {rule}
                        </p>
                     </motion.div>
                   ))}
                </div>
             </div>
          </div>

          {/* General Institutional Rules */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 pt-10">
             <div className="lg:col-span-4 self-center">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-6 underline decoration-blue-600/20 underline-offset-8">General <br />Institutional Rules</h3>
                <p className="text-slate-500 font-medium leading-relaxed">In addition to the code of conduct, these general guidelines govern the daily operations and decorum on the campus premises.</p>
                
                <div className="mt-10 p-8 bg-blue-600/5 border border-blue-600/10 rounded-3xl">
                   <p className="text-xs font-black text-blue-700 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Smartphone size={14} /> Critical Notice
                   </p>
                   <p className="text-sm font-bold text-blue-900 leading-relaxed italic">
                    Using cellphones is strictly prohibited within the college campus to maintain academic focus and institutional discipline.
                   </p>
                </div>
             </div>

             <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {generalRules.map((rule, idx) => (
                     <motion.div 
                       key={idx}
                       initial={{ opacity: 0, scale: 0.95 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       transition={{ delay: idx * 0.1 }}
                       className="p-8 bg-slate-50 border border-slate-100/50 rounded-3xl flex gap-6 hover:bg-white hover:border-blue-600/10 hover:shadow-xl transition-all"
                     >
                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
                           <rule.icon size={20} />
                        </div>
                        <p className="text-sm font-semibold text-slate-600 leading-relaxed">
                          {rule.text}
                        </p>
                     </motion.div>
                   ))}
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* 3. Anti-Ragging Integration */}
      <section className="bg-slate-900 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/[0.05] rounded-full blur-[120px] -mr-20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
             <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl shadow-blue-600/30 mb-10">
                <ShieldCheck size={40} />
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8">Strict Anti-Ragging Policy</h2>
             <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-12">
               CLPT maintains zero tolerance towards ragging. Students found indulging in any form of ragging will face immediate suspension and legal proceedings as per UGC directives.
             </p>
             <Link href="/academic/committees">
                <Button className="h-16 px-10 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 font-black uppercase tracking-widest text-[10px] transition-all">
                   View Anti-Ragging Committee Details <ChevronRight size={16} className="ml-2" />
                </Button>
             </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-50 py-20 border-t border-slate-100/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] opacity-50">
            CLPT Institutional Integrity • Students Affairs Division
          </p>
        </div>
      </footer>
    </div>
  );
}
