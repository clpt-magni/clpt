"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Briefcase,
  Target,
  Users,
  Factory,
  Lightbulb,
  BookOpen,
  Calendar,
  Building2,
  ChevronDown,
  PageHeader
} from "lucide-react";
import { PageHeader as CustomPageHeader } from "@/components/ui/PageHeader";

interface TrainingRecord {
  companyName: string;
  dateFrom: string;
  dateTo: string;
  noOfStudents: number;
}

interface IIPECTrainingYear {
  _id: string;
  academicYear: string;
  batch: string;
  totalStudents: number;
  records: TrainingRecord[];
}

export default function IIPECClientLayout({ records }: { records: IIPECTrainingYear[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(records.length > 0 ? records[0]._id : null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <CustomPageHeader
        title="IIPEC Network"
        breadcrumbs={[
          { label: "Academic", href: "/academic" },
          { label: "IIPEC" }
        ]}
        description="Industry Institute Placement & Entrepreneurship Cell — acts as an interface between industries and the institute to secure collaborative growth and professional pipelines."
      />

      {/* Main Content Split */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Left: Static IIPEC Information */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32 h-fit">

              <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl text-blue-600"><Target size={20} /></div>
                  <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900">Objectives</h3>
                </div>
                <p className="text-sm font-medium text-slate-600 leading-relaxed">
                  In the changing scenario of globalization, the relationship between Industry and Institute is indispensable. The objective of CLPT-IIPEC is to reduce the gap between Industry expectations and academic offerings by direct involvement to attain total symbiosis.
                </p>
              </div>

              <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl text-blue-600"><Users size={20} /></div>
                  <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900">Committee Structure</h3>
                </div>
                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  <li className="flex justify-between items-center pb-2 border-b border-slate-200"><span>Principal</span> <span className="font-bold text-slate-900">Chairman</span></li>
                  <li className="flex justify-between items-center pb-2 border-b border-slate-200"><span>Faculty</span> <span className="font-bold text-slate-900">Coordinator</span></li>
                  <li className="flex justify-between items-center pb-2 border-b border-slate-200"><span>Industrial Expert</span> <span className="font-bold text-slate-900">Member</span></li>
                  <li className="flex justify-between items-center pb-2 border-b border-slate-200"><span>IQAC Nominee</span> <span className="font-bold text-slate-900">Member</span></li>
                  <li className="flex justify-between items-center pb-2 border-b border-slate-200"><span>Alumni</span> <span className="font-bold text-slate-900">Member</span></li>
                  <li className="flex justify-between items-center"><span>Students (UG/PG)</span> <span className="font-bold text-slate-900">Members</span></li>
                </ul>
              </div>

            </div>

            {/* Right: Dynamic Industrial Training Records */}
            <div className="lg:col-span-8 space-y-12">

              <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
                <Factory size={32} className="text-blue-600" />
                <h2 className="text-3xl font-black text-slate-900">Industrial Training Tracker</h2>
              </div>

              <div className="space-y-6">
                {records.map((yearGroup) => (
                  <div key={yearGroup._id} className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/20">
                    <button
                      onClick={() => setExpandedId(expandedId === yearGroup._id ? null : yearGroup._id)}
                      className="w-full flex items-center justify-between p-6 md:p-8 bg-slate-50 hover:bg-blue-50/50 transition-colors text-left"
                    >
                      <div>
                        <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-2">Academic Segment • {yearGroup.batch}</p>
                        <h3 className="text-2xl font-black text-slate-900">{yearGroup.academicYear}</h3>
                        <p className="text-slate-500 font-medium text-sm mt-2 flex items-center gap-2">
                          <Users size={14} /> Total Students Placed: <span className="text-slate-900 font-bold">{yearGroup.totalStudents}</span>
                        </p>
                      </div>
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 ${expandedId === yearGroup._id ? 'bg-blue-600 text-white rotate-180' : 'bg-white border border-slate-200 text-slate-400'}`}>
                        <ChevronDown size={20} />
                      </div>
                    </button>

                    <AnimatePresence>
                      {expandedId === yearGroup._id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 md:p-8 border-t border-slate-100 space-y-4">
                            {yearGroup.records?.map((record, idx) => (
                              <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 transition-colors gap-4">

                                <div className="flex items-start gap-4">
                                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                                    <Building2 size={18} />
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-slate-900 text-sm md:text-base mb-1">{record.companyName}</h4>
                                    <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
                                      <span className="flex items-center gap-1.5"><Calendar size={12} /> {record.dateFrom} - {record.dateTo}</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center gap-2 md:justify-end md:min-w-[120px] bg-slate-50 px-4 py-2 rounded-xl self-start md:self-center border border-slate-100">
                                  <Users size={14} className="text-slate-400" />
                                  <span className="font-bold text-slate-900 text-sm">{record.noOfStudents} <span className="text-slate-500 font-medium">Students</span></span>
                                </div>

                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Core Functions / Entrepreneurship Grid */}
      <section className="py-24 bg-slate-50 border-t border-slate-100 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-6">Strategic Functions & <br /> <span className="text-blue-600">Entrepreneurship</span></h2>
            <p className="text-slate-500 font-medium leading-relaxed">Our multi-faceted approach to preparing students for the pharmaceutical vanguard.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/40 border border-slate-100">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 border border-blue-100">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-6">Core Functions</h3>
              <ul className="space-y-4 text-sm font-medium text-slate-600">
                <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" /> Arrange campus placement drives for students.</li>
                <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" /> Identify industry opportunities and meet expectations.</li>
                <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" /> Invite guest lectures by eminent personalities.</li>
                <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" /> Sign MoU with pharmaceutical industries for research.</li>
                <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" /> Develop relationships for consultancy works.</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/40 border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 border border-blue-100">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-6">Entrepreneurship Pipeline</h3>
              <ul className="space-y-4 text-sm font-medium text-slate-600 mb-8">
                <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" /> Develop and strengthen entrepreneurial motivation.</li>
                <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" /> Provide training to operate business & marketing.</li>
                <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" /> Encourage self-employment tendencies.</li>
              </ul>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2">Historical Seminar</p>
                <p className="text-sm font-bold text-slate-800 leading-snug">"Economic Reforms and Entrepreneurship" organized alongside DRDA Government of AP.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
