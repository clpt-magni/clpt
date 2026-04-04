"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Target,
  Award,
  Lightbulb,
  ChevronRight,
  ShieldCheck,
  Zap,
  Building2,
  CheckCircle2
} from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

interface SkillPartner {
  _id: string;
  name: string;
  fullName: string;
  description?: string;
  logoUrl?: string;
  programs?: string[];
  order: number;
}

export default function SkillDevelopmentClient({ partners }: { partners: SkillPartner[] }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full sm:pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/5 blur-[100px] rounded-full sm:pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-all mb-12">
              <Link href="/">Home</Link>
              <ChevronRight size={10} />
              <Link href="/student">Student</Link>
              <ChevronRight size={10} />
              <span className="text-primary">Skill Development</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-2xl shadow-lg shadow-primary/20">
                <Rocket size={24} />
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Center for Excellence</div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-[0.9] mb-8"
            >
              Future Ready <span className="text-primary italic">Skills</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mb-12"
            >
              Bridging the gap between pharmaceutical education and global industry standards through strategic government and industrial partnerships.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/40 flex flex-col hover:border-primary/20 transition-all group"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
                  <div className="w-24 h-24 relative flex-shrink-0 bg-white p-4 rounded-3xl border border-slate-50 shadow-sm overflow-hidden flex items-center justify-center">
                    {partner.logoUrl ? (
                      <Image
                        src={partner.logoUrl}
                        alt={partner.name}
                        fill
                        className="object-contain p-2 group-hover:scale-110 transition-transform"
                      />
                    ) : (
                      <Building2 className="text-slate-300" size={40} />
                    )}
                  </div>
                  <div className="text-center md:text-left flex-grow">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <span className="bg-primary/5 text-primary text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-primary/10">
                        {partner.name}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Strategic Partner</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                      {partner.fullName}
                    </h3>
                  </div>
                </div>

                <div className="space-y-8 flex-grow">
                  <p className="text-slate-500 font-medium leading-relaxed">
                    {partner.description}
                  </p>

                  {partner.programs && partner.programs.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 border-b border-slate-100 pb-2">Training Highlights</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {partner.programs.map((prog, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:bg-primary/5 hover:border-primary/10 transition-colors">
                            <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                            <span className="text-xs font-bold text-slate-700 leading-tight truncate">{prog}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Institutional Vision Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-24 bg-slate-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-primary text-white rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-primary/20">
                <Zap size={36} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-8">
                Empowering the Next Generation of <br />
                <span className="text-primary-light italic">Pharmaceutical Leaders</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-12">
                Our Skill Development Center integrates real-world industrial certifications with academic prowess, ensuring our students transition seamlessly into the professional forefront of healthcare.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full">
                  <ShieldCheck className="text-primary-light" size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">Government Certified</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full">
                  <Lightbulb className="text-primary-light" size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">Innovation Focused</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
