"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap,
  Search,
  Eye,
  Download,
  Filter,
  FileText,
  X
} from "lucide-react";
import { PageHeader as CustomPageHeader } from "@/components/ui/PageHeader";

interface StudentList {
  _id: string;
  program: string;
  batch: string;
  pdfUrl: string;
  studentDataRaw?: string;
  order: number;
}

interface StudentsListClientProps {
  initialLists: StudentList[];
}

export default function StudentsListClient({ initialLists }: StudentsListClientProps) {
  const [activeTab, setActiveTab] = useState<string>("B.Pharmacy");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDoc, setActiveDoc] = useState<StudentList | null>(null);
  const [viewMode, setViewMode] = useState<"pdf" | "table">("pdf");

  const programs = ["B.Pharmacy", "M.Pharmacy", "Pharm.D"];

  // Parsing logic for the raw student data text
  const parseStudentData = (rawText: string) => {
    if (!rawText) return [];
    // Pattern: S.No, REGISTER NO, NAME
    // Using positive lookahead to find the next occurrence of digits followed by a comma
    const regex = /(\d+),\s*([^,]+),\s*(.*?)(?=\s*\d+,|$)/g;
    const matches = [...rawText.matchAll(regex)];
    
    return matches.map(m => ({
      sno: m[1].trim(),
      regNo: m[2].trim(),
      name: m[3].trim()
    }));
  };

  const currentStudentsList = useMemo(() => {
    if (!activeDoc?.studentDataRaw) return [];
    return parseStudentData(activeDoc.studentDataRaw);
  }, [activeDoc]);

  // Filter based on table search if in table mode
  const [tableSearch, setTableSearch] = useState("");
  const filteredStudents = useMemo(() => {
    if (!tableSearch) return currentStudentsList;
    return currentStudentsList.filter(s => 
      s.name.toLowerCase().includes(tableSearch.toLowerCase()) || 
      s.regNo.toLowerCase().includes(tableSearch.toLowerCase())
    );
  }, [currentStudentsList, tableSearch]);

  // Filter main lists
  const filteredLists = useMemo(() => {
    return initialLists
      .filter(list => list.program === activeTab)
      .filter(list => {
        const searchStr = `${list.program} ${list.batch}`.toLowerCase();
        return searchStr.includes(searchQuery.toLowerCase());
      })
      .sort((a, b) => (b.order || 0) - (a.order || 0));
  }, [initialLists, activeTab, searchQuery]);

  // Lock scroll when modal is open
  React.useEffect(() => {
    if (activeDoc) {
      document.body.style.overflow = "hidden";
      if (!activeDoc.studentDataRaw) setViewMode("pdf");
    } else {
      document.body.style.overflow = "unset";
      setTableSearch("");
    }
  }, [activeDoc]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <CustomPageHeader
        title="Registered Students"
        breadcrumbs={[
          { label: "Student Center", href: "/student" },
          { label: "Students List" }
        ]}
        description="Access official student enrollment records and batch-wise directories for all pharmaceutical academic programs."
      />

      {/* Main Content Sections */}
      <section className="py-8 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Controls Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
            {/* Custom Tabs */}
            <div className="flex p-1.5 bg-slate-100 rounded-2xl w-fit">
              {programs.map((program) => (
                <button
                  key={program}
                  onClick={() => setActiveTab(program)}
                  className={`px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                    activeTab === program 
                      ? "bg-white text-[#003366] shadow-xl shadow-slate-200/50 scale-[1.02]" 
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {program}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative group w-full lg:max-w-md">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
              <input 
                type="text"
                placeholder="Search batch or year..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 pl-14 pr-6 py-4.5 rounded-2xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:bg-white focus:border-primary/20 transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Records Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredLists.length > 0 ? (
                filteredLists.map((list, idx) => (
                  <motion.div
                    key={list._id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group bg-white border border-slate-100 rounded-[2.5rem] p-8 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[5rem] -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-700 blur-2xl" />
                    
                    <div className="flex items-center gap-4 mb-8">
                       <div className="w-14 h-14 bg-slate-50 text-slate-400 group-hover:bg-primary group-hover:text-white group-hover:rotate-6 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm border border-slate-100 group-hover:border-primary/50">
                          <GraduationCap size={24} />
                       </div>
                       <div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">{list.program}</div>
                          <div className="text-xl font-black text-slate-900 tracking-tight">{list.batch}</div>
                       </div>
                    </div>

                    <div className="flex gap-3">
                       <button 
                         onClick={() => {
                           setActiveDoc(list);
                           setViewMode(list.studentDataRaw ? "table" : "pdf");
                         }}
                         className="flex-1 bg-slate-900 text-white rounded-xl py-4 px-6 text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary transition-all hover:translate-y-[-2px] shadow-lg shadow-slate-900/10 hover:shadow-primary/20"
                       >
                         <Eye size={16} /> {list.studentDataRaw ? "View List" : "View PDF"}
                       </button>
                       <a 
                         href={list.pdfUrl} 
                         download 
                         className="w-14 h-14 bg-white border border-slate-200 text-slate-400 rounded-xl flex items-center justify-center hover:bg-slate-50 hover:text-slate-900 transition-all"
                         title="Download PDF"
                       >
                         <Download size={20} />
                       </a>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-32 text-center">
                   <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-200">
                      <Filter size={40} />
                   </div>
                   <p className="text-slate-400 font-bold italic text-lg uppercase tracking-tight">No records found matching your criteria.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Modal PDF/Table Viewer */}
      <AnimatePresence>
        {activeDoc && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-md"
          >
             <motion.div 
               initial={{ y: "100%", opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: "100%", opacity: 0 }}
               transition={{ type: "spring", damping: 25, stiffness: 200 }}
               className="bg-white rounded-t-[2.5rem] sm:rounded-[3rem] w-full sm:max-w-6xl h-[92vh] sm:h-[85vh] flex flex-col shadow-2xl overflow-hidden border-t sm:border border-slate-200"
             >
               {/* Modal Header */}
               <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 border-b border-slate-100 bg-slate-50/50 gap-6">
                 <div className="flex items-center gap-5 w-full md:w-auto">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary border border-slate-200 shadow-xl shadow-primary/5 flex-shrink-0">
                     <FileText size={24} />
                   </div>
                   <div>
                     <h3 className="font-black text-slate-900 text-lg md:text-2xl leading-none mb-1">{activeDoc.batch} Students</h3>
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{activeDoc.program} Department</p>
                   </div>
                 </div>
                 
                 {/* View Toggle */}
                 {activeDoc.studentDataRaw && (
                   <div className="flex p-1 bg-slate-200 rounded-xl w-full md:w-auto">
                     <button
                       onClick={() => setViewMode("table")}
                       className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${viewMode === "table" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500"}`}
                     >
                       Table List
                     </button>
                     <button
                       onClick={() => setViewMode("pdf")}
                       className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${viewMode === "pdf" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500"}`}
                     >
                       PDF Preview
                     </button>
                   </div>
                 )}

                 <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                   <a 
                     href={activeDoc.pdfUrl} 
                     download 
                     className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-blue-600/20"
                   >
                     <Download size={18} />
                   </a>
                   <button 
                     onClick={() => setActiveDoc(null)} 
                     className="w-14 h-14 flex items-center justify-center bg-white border border-slate-200 rounded-2xl text-slate-400 hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all flex-shrink-0"
                   >
                     <X size={24} />
                   </button>
                 </div>
               </div>
               
               {/* Modal Body */}
               <div className="flex-grow w-full bg-slate-50 relative overflow-hidden">
                  {viewMode === "pdf" ? (
                    <iframe 
                      src={activeDoc.pdfUrl} 
                      className="w-full h-full border-none absolute inset-0"
                      title={`${activeDoc.program} ${activeDoc.batch}`}
                    />
                  ) : (
                    <div className="p-4 sm:p-12 h-full flex flex-col">
                      <div className="relative mb-6 sm:mb-8">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input 
                          type="text"
                          placeholder="Quick search by name or register number..."
                          value={tableSearch}
                          onChange={(e) => setTableSearch(e.target.value)}
                          className="w-full bg-white border border-slate-200 pl-14 pr-6 py-4.5 rounded-2xl text-sm font-bold text-slate-800 transition-all focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/20 shadow-sm"
                        />
                      </div>
                      
                      <div className="flex-grow overflow-auto rounded-3xl border border-slate-200 bg-white">
                        <table className="w-full text-left border-collapse">
                          <thead className="sticky top-0 bg-slate-50 border-b border-slate-200 z-10">
                            <tr>
                              <th className="hidden sm:table-cell py-5 px-8 text-[11px] font-black uppercase tracking-widest text-slate-400 text-center">S.No</th>
                              <th className="py-5 px-6 sm:px-8 text-[11px] font-black uppercase tracking-widest text-slate-400">Register No</th>
                              <th className="py-5 px-6 sm:px-8 text-[11px] font-black uppercase tracking-widest text-slate-400">Student Name</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {filteredStudents.length > 0 ? (
                              filteredStudents.map((student, sIdx) => (
                                <tr key={sIdx} className="hover:bg-primary/5 transition-colors group">
                                  <td className="hidden sm:table-cell py-5 px-8 text-center">
                                    <span className="text-[11px] font-black text-slate-300">{student.sno}</span>
                                  </td>
                                  <td className="py-5 px-6 sm:px-8">
                                    <span className="text-sm font-black text-primary tracking-tight">{student.regNo}</span>
                                  </td>
                                  <td className="py-5 px-6 sm:px-8">
                                    <div className="flex items-center gap-3">
                                      <div className="hidden xs:flex w-8 h-8 rounded-lg bg-slate-50 text-slate-300 items-center justify-center text-[10px] font-black group-hover:bg-white group-hover:text-primary transition-all">
                                        {student.name.charAt(0)}
                                      </div>
                                      <span className="text-[13px] sm:text-sm font-bold text-slate-700 leading-tight">{student.name}</span>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan={3} className="py-20 text-center">
                                  <p className="text-slate-400 font-bold italic tracking-tight">No students found matching your search.</p>
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
               </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8fafc;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
