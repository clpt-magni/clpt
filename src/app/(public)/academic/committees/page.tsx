"use client";

import { useState, useMemo } from "react";
import {
  ChevronRight,
  Search,
  ShieldAlert,
  ChevronDown,
  CheckCircle2,
  Users,
  FileText,
  ExternalLink
} from "lucide-react";
import { PageHeader as CustomPageHeader } from "@/components/ui/PageHeader";
import { academicCommittees, Committee } from "@/data/committees";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CommitteesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>("anti-ragging");

  const filteredCommittees = useMemo(() => {
    return academicCommittees.filter((c) =>
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.objectives.some(obj => obj.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <CustomPageHeader
        title="Academic Committees"
        breadcrumbs={[
          { label: "Academic", href: "/academic" },
          { label: "Committees" }
        ]}
        description="Chalapathi Institute of Pharmaceutical Sciences maintains a rigorous ecosystem of governance through specialized committees to ensure academic integrity and excellence."
      />

      {/* 2. Search & Filter Bar */}
      <section className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100 py-6">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search committees, objectives, or keywords..."
              className="w-full h-14 pl-14 pr-6 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* 3. Committees List */}
      <main className="container mx-auto px-6 py-20 pb-32">
        <div className="max-w-5xl mx-auto space-y-4">
          {filteredCommittees.map((committee) => (
            <div 
              key={committee.id} 
              className={`bg-white border rounded-[2rem] transition-all duration-500 overflow-hidden ${
                openId === committee.id 
                  ? "border-blue-600/20 shadow-2xl shadow-slate-200/60" 
                  : "border-slate-100 hover:border-slate-200"
              }`}
            >
              {/* Header */}
              <button 
                onClick={() => toggleAccordion(committee.id)}
                className="w-full px-8 py-8 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-6 text-left">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    openId === committee.id ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"
                  }`}>
                    <ShieldAlert size={20} />
                  </div>
                  <div>
                    <h3 className={`text-lg md:text-xl font-black tracking-tight transition-colors ${
                      openId === committee.id ? "text-slate-900" : "text-slate-600"
                    }`}>
                      {committee.title}
                    </h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Institutional Governance Body</p>
                  </div>
                </div>
                <div className={`transition-transform duration-500 ${openId === committee.id ? "rotate-180" : ""}`}>
                   <ChevronDown size={22} className={openId === committee.id ? "text-blue-600" : "text-slate-300"} />
                </div>
              </button>

              {/* Content */}
              <AnimatePresence>
                {openId === committee.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-8 pb-10 border-t border-slate-50">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10">
                        
                        {/* Objectives & Meta */}
                        <div className="lg:col-span-12 space-y-12">
                          
                          {/* Objectives Box */}
                          <div className="bg-slate-50/50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
                             <div className="flex items-center gap-4 mb-10">
                                <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Key Responsibilities</h4>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                {committee.objectives.map((obj, i) => (
                                  <div key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                      <CheckCircle2 size={16} className="text-blue-600" />
                                    </div>
                                    <p className="text-sm font-semibold text-slate-600 leading-relaxed">{obj}</p>
                                  </div>
                                ))}
                             </div>
                          </div>

                          {/* Members Table */}
                          <div className="space-y-8">
                             <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                                    <Users size={18} />
                                  </div>
                                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Committee Roster</h4>
                                </div>
                             </div>

                             <div className="overflow-x-auto rounded-3xl border border-slate-100">
                                <table className="w-full text-left border-collapse">
                                  <thead>
                                    <tr className="bg-slate-50 border-b border-slate-100">
                                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest w-16">S.No</th>
                                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Member Name</th>
                                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Designation</th>
                                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Contact</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-slate-50">
                                    {committee.members.map((member, i) => (
                                      <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                                        <td className="px-6 py-4 text-xs font-bold text-slate-400">{member.sno}</td>
                                        <td className="px-6 py-4 text-sm font-black text-slate-900">{member.name}</td>
                                        <td className="px-6 py-4 text-xs font-bold text-blue-600 uppercase tracking-tight">{member.designation}</td>
                                        <td className="px-6 py-4 text-xs font-bold text-slate-500">{member.mobile || "N/A"}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                             </div>
                          </div>

                          {/* Squad Section (if exists) */}
                          {committee.squad && (
                            <div className="space-y-8 pt-6">
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-400">
                                  <Users size={18} />
                                </div>
                                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest underline decoration-orange-500/30 underline-offset-4">Anti-Ragging Squad Members</h4>
                             </div>
                             <div className="overflow-x-auto rounded-3xl border border-orange-100">
                                <table className="w-full text-left border-collapse">
                                  <thead>
                                    <tr className="bg-orange-50/30 border-b border-orange-100">
                                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest w-16">S.No</th>
                                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Member Name</th>
                                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Designation</th>
                                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Contact</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-orange-100/50">
                                    {committee.squad.map((member, i) => (
                                      <tr key={i} className="group hover:bg-orange-50/10 transition-colors">
                                        <td className="px-6 py-4 text-xs font-bold text-slate-400">{member.sno}</td>
                                        <td className="px-6 py-4 text-sm font-black text-slate-900">{member.name}</td>
                                        <td className="px-6 py-4 text-xs font-bold text-orange-600 uppercase tracking-tight">{member.designation}</td>
                                        <td className="px-6 py-4 text-xs font-bold text-slate-500">{member.mobile || "N/A"}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                             </div>
                            </div>
                          )}

                          {/* Resources & External Links */}
                          {(committee.documents || committee.externalLinks) && (
                            <div className="flex flex-wrap gap-4 pt-4">
                               {committee.documents?.map((doc, i) => (
                                 <Link key={i} href={doc.url} target="_blank">
                                   <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all">
                                      <FileText size={14} className="mr-2" /> {doc.label}
                                   </Button>
                                 </Link>
                               ))}
                               {committee.externalLinks?.map((link, i) => (
                                 <Link key={i} href={link.url} target="_blank">
                                   <Button className="h-14 px-8 rounded-2xl bg-slate-900 hover:bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl shadow-slate-900/10 transition-all border-none">
                                      <ExternalLink size={14} className="mr-2" /> {link.label}
                                   </Button>
                                 </Link>
                               ))}
                            </div>
                          )}

                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </main>

      {/* 4. Official Footer Branding */}
      <section className="bg-slate-50 py-20 border-t border-slate-100/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] opacity-50">
            CLPT • Academic Quality & Governance • Institutional Portal
          </p>
        </div>
      </section>
    </div>
  );
}
