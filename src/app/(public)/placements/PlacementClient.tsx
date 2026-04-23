"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight
} from "lucide-react";
import { PageHeader as CustomPageHeader } from "@/components/ui/PageHeader";
import Link from 'next/link';

interface PlacementStat {
  _id: string;
  academicYear: string;
  program: string;
  totalStudents?: number;
  noOfIndustries?: number;
  noPlaced?: number;
  higherEducation?: number;
  percentage?: number;
}

interface Company {
  _id: string;
  name: string;
  logoUrl?: string;
}

export default function PlacementClient({ stats, companies }: { stats: PlacementStat[], companies: Company[] }) {
  const [activeProgram, setActiveProgram] = useState("bpharm");

  const programs = [
    { id: "bpharm", label: "B. Pharmacy", icon: <GraduationCap size={18} /> },
    { id: "mpharm", label: "M. Pharmacy", icon: <TrendingUp size={18} /> },
    { id: "pharmd", label: "Pharm. D", icon: <Target size={18} /> },
  ];

  const filteredStats = stats.filter(s => s.program === activeProgram);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <CustomPageHeader
        title="Careers & Success"
        breadcrumbs={[
          { label: "Placements" }
        ]}
        description="Bridging the gap between pharmaceutical education and global industry demands through consistent excellence in placements."
      />

      {/* Quick Stats Banner (Moved below header) */}
      <section className="bg-white pb-12 md:pb-20 relative z-20">
        <div className="container mx-auto px-6 max-w-4xl -mt-12 md:-mt-20">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 rounded-[2rem] bg-white shadow-xl shadow-blue-900/5 divide-y md:divide-y-0 md:divide-x divide-slate-100 overflow-hidden"
             >
               <div className="p-8">
                 <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Highest Placement</div>
                 <div className="text-4xl font-black text-slate-900">96%</div>
                 <div className="text-xs font-bold text-green-500 mt-1 flex items-center gap-1">
                   <ArrowUpRight size={14} /> M. Pharmacy Records
                 </div>
               </div>
               <div className="p-8 text-center md:text-left">
                 <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Recruiting Partners</div>
                 <div className="text-4xl font-black text-slate-900">50+</div>
                 <div className="text-xs font-bold text-blue-500 mt-1">Multi-national Industries</div>
               </div>
               <div className="p-8 text-center md:text-left">
                 <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Success Stories</div>
                 <div className="text-4xl font-black text-slate-900">1000+</div>
                 <div className="text-xs font-bold text-slate-500 mt-1">Career Placements</div>
               </div>
             </motion.div>
        </div>
      </section>

      {/* Main Placement Dashboard */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Program Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => setActiveProgram(program.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeProgram === program.id
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/30 -translate-y-1'
                  : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {program.icon} {program.label}
              </button>
            ))}
          </div>

          {/* Stats Dashboard */}
          <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-4 md:p-12 overflow-hidden">
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="pb-8 text-left text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Academic Year</th>
                    <th className="pb-8 text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Total Students</th>
                    <th className="pb-8 text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Recruiters</th>
                    <th className="pb-8 text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Placed</th>
                    {activeProgram === 'bpharm' && (
                       <th className="pb-8 text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Higher Education</th>
                    )}
                    <th className="pb-8 text-right text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Success Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <AnimatePresence mode="wait">
                    {filteredStats.map((stat, idx) => (
                      <motion.tr
                        key={stat._id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ delay: idx * 0.05 }}
                        className="group hover:bg-white transition-colors"
                      >
                        <td className="py-8">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-xs shadow-sm group-hover:scale-110 transition-transform">
                              {idx + 1}
                            </div>
                            <span className="font-black text-slate-900">{stat.academicYear}</span>
                          </div>
                        </td>
                        <td className="py-8 text-center font-bold text-slate-600">{stat.totalStudents}</td>
                        <td className="py-8 text-center font-bold text-slate-600">{stat.noOfIndustries}</td>
                        <td className="py-8 text-center">
                          <span className="bg-white px-4 py-2 rounded-xl border border-slate-100 font-black text-slate-900 text-sm shadow-sm">
                            {stat.noPlaced}
                          </span>
                        </td>
                        {activeProgram === 'bpharm' && (
                          <td className="py-8 text-center font-bold text-slate-500 italic">{stat.higherEducation}</td>
                        )}
                        <td className="py-8 text-right">
                          <div className="flex items-center justify-end gap-3">
                            <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden hidden sm:block">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${stat.percentage}%` }}
                                className="h-full bg-blue-600"
                              />
                            </div>
                            <span className="font-black text-blue-600">{stat.percentage}%</span>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              <AnimatePresence mode="wait">
                {filteredStats.map((stat, idx) => (
                  <motion.div
                    key={stat._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold text-xs">
                          {idx + 1}
                        </div>
                        <span className="font-black text-slate-900 text-lg">{stat.academicYear}</span>
                      </div>
                      <div className="text-right">
                         <div className="text-[10px] font-black uppercase text-slate-400 mb-1">Success Rate</div>
                         <div className="text-xl font-black text-blue-600">{stat.percentage}%</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <div className="text-[9px] font-black uppercase text-slate-400 mb-1">Total Students</div>
                        <div className="font-black text-slate-900">{stat.totalStudents}</div>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <div className="text-[9px] font-black uppercase text-slate-400 mb-1">Recruiters</div>
                        <div className="font-black text-slate-900">{stat.noOfIndustries}</div>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <div className="text-[9px] font-black uppercase text-slate-400 mb-1">Students Placed</div>
                        <div className="font-black text-blue-600">{stat.noPlaced}</div>
                      </div>
                      {activeProgram === 'bpharm' && (
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          <div className="text-[9px] font-black uppercase text-slate-400 mb-1">Higher Edu</div>
                          <div className="font-black text-slate-900">{stat.higherEducation}</div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {filteredStats.length === 0 && (
              <div className="py-32 text-center text-slate-400 italic font-medium">
                No placement records found for this program.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Recruiter Gallery */}
      <section className="py-24 pb-32 bg-slate-50 border-t border-slate-100 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                Global <span className="text-blue-600 italic">Partners</span> <br /> in Excellence
              </h2>
              <p className="text-slate-500 font-medium">Over 50+ industry leaders trust our students for their expertise and dedication in the pharmaceutical sector.</p>
            </div>
            <div className="flex-shrink-0">
               <Building2 className="text-blue-600/20" size={80} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, idx) => (
              <motion.div
                key={company._id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 flex items-center gap-6 group hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-600/5 transition-all"
              >
                <div className="w-12 h-12 bg-slate-50 text-slate-300 rounded-xl flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  <Building2 size={24} />
                </div>
                <h4 className="font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight truncate">{company.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
