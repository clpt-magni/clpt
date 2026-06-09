"use client";

import {
  ShieldCheck,
  UserCheck,
  AlertCircle,
  Gavel,
  Info,
  Users,
  Building,
  Smartphone,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";

const codeOfConduct = [
  "Conduct yourself at all times in a manner befitting your association with the institute.",
  "Show due respect and courtesy to teachers, administrative officers, and employees.",
  "Pay due attention and courtesy to visitors of the institute and campus residents.",
  "Show friendly and supportive behavior to fellow students.",
  "Be logical, respect other students' opinions, and maintain a focus on mutual understanding.",
  "Express own opinions with lucidity and show due respect to different viewpoints.",
  "Do not make any attempt to breach the rules and regulations of the institution.",
  "Using unfair means during examinations is strictly prohibited and heavily penalized.",
  "Do not damage institute property or the belongings of fellow students.",
  "Do not disturb other fellow students while they are studying.",
  "Do not exhibit noisy or unseemly behavior in classrooms or corridors.",
  "Do not indulge in ragging in any form, whatsoever.",
  "Do not indulge in any activity which can tarnish the high reputation of the institute.",
  "Any form of undesirable campus activity must be strictly avoided.",
  "Any violation of code of conduct shall invite disciplinary action, including expulsion."
];

const generalRules = [
  { icon: UserCheck, text: "Students shall try their best to cultivate and uphold noble ideals and high values of life and conduct." },
  { icon: Users, text: "They shall take active interest in all academic, moral, cultural, and social activities of the college." },
  { icon: Info, text: "Every student shall maintain dignity and morals in dealings with the staff and outsiders." },
  { icon: Building, text: "Students shall handle the property of the institution with care." },
  { icon: Gavel, text: "No meeting or function shall be held on campus without prior sanction of the Principal." },
  { icon: Info, text: "Students are advised to consult the college notice board daily." },
  { icon: AlertCircle, text: "Students should keep the college building and premises clean. Dustbins must be properly utilized." },
  { icon: Info, text: "Students shall maintain positive, collaborative, and respectful peer relationships at all times." }
];

export default function RulesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-roboto">
      {/* Unified Institutional Page Header */}
      <PageHeader
        title="Rules & Regulations"
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Rules & Regulations" }
        ]}
        description="Chalapathi Institute of Pharmaceutical Sciences maintains a standard of excellence, discipline, and mutual respect. Familiarize yourself with our student guidelines."
      />

      {/* Main Rules Content */}
      <section className="py-16 md:py-24 bg-white container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-24">

          {/* Code of Conduct Section */}
          <div className="bg-slate-50/50 border border-slate-100 rounded-[2.5rem] p-8 md:p-14 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.01] rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 font-poppins">Code of Conduct</h2>
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mt-1 font-poppins">Official Student Governance Policy</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {codeOfConduct.map((rule, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03 }}
                    className="flex gap-4 group/rule"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center text-xs font-bold font-poppins group-hover/rule:bg-primary group-hover/rule:text-white transition-all duration-300 shadow-sm">
                      {idx + 1}
                    </div>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed group-hover/rule:text-slate-800 transition-colors font-roboto pt-1">
                      {rule}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* General Institutional Rules (Title on top, below in 2 columns) */}
          <div className="space-y-12 pt-10">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3">
                 <div className="w-1.5 h-6 bg-primary rounded-full" />
                 <h3 className="text-2xl font-bold text-primary-dark font-poppins uppercase tracking-wider">
                    General Guidelines
                 </h3>
                 <div className="w-1.5 h-6 bg-primary rounded-full" />
              </div>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">
                In addition to the core code of conduct, these general directives govern everyday operations, campus decorum, and behavioral ethics for all students.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {generalRules.map((rule, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex gap-4 hover:bg-white hover:border-primary/15 hover:shadow-lg transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary border border-slate-100 shrink-0">
                    <rule.icon size={18} />
                  </div>
                  <p className="text-xs font-medium text-slate-500 leading-relaxed font-poppins pt-1">
                    {rule.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Zero Tolerance Anti-Ragging Policy */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-secondary mx-auto border border-white/10 shadow-inner">
              <ShieldCheck size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins tracking-tight">Strict Anti-Ragging Policy</h2>
            <p className="text-slate-300 text-base font-medium leading-relaxed max-w-xl mx-auto">
              CLPT maintains zero tolerance towards ragging. Students found indulging in any form of ragging will face immediate suspension and legal proceedings as per UGC directives.
            </p>
            <Link href="/academic/committees" className="inline-block">
              <Button className="h-14 px-8 rounded-xl bg-white hover:bg-slate-100 text-primary-dark font-bold uppercase tracking-wider text-xs transition-all flex items-center gap-2 border-none">
                View Committee Details <ChevronRight size={14} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Footer Section */}
      <footer className="bg-slate-50 py-12 border-t border-slate-100/50 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] opacity-50">
            CLPT Institutional Integrity • Student Affairs Division
          </p>
        </div>
      </footer>
    </div>
  );
}
