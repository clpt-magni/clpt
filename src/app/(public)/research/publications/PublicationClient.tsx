"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  FileText, 
  Download, 
  ChevronRight, 
  BookOpen, 
  Calendar,
  ExternalLink,
  ChevronDown,
  X,
  Minus
} from "lucide-react";
import { PageHeader as CustomPageHeader } from "@/components/ui/PageHeader";
import Link from 'next/link';

interface Article {
  slNo?: string;
  description: string;
  impactFactor?: string;
}

interface Publication {
  _id: string;
  year: number;
  title: string;
  summaryPdfUrl?: string;
  articles?: Article[];
}

export default function PublicationClient({ publications }: { publications: Publication[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedYear, setExpandedYear] = useState<number | null>(publications[0]?.year || null);
  const [activePdf, setActivePdf] = useState<{ url: string; title: string } | null>(null);

  const filteredPublications = publications.map(pub => ({
    ...pub,
    articles: pub.articles?.filter(article => 
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(pub => 
    pub.articles && pub.articles.length > 0 || 
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.year.toString().includes(searchTerm)
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <CustomPageHeader
        title="Research Publications"
        breadcrumbs={[
          { label: "Research", href: "/research" },
          { label: "Publications" }
        ]}
        description="A comprehensive archive of our institutional research, review articles, and scholarly publications across pharmaceutical sciences."
      />

      <section className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-xl mx-auto"
          >
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by title, author, or year..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 pl-14 pr-6 py-5 rounded-3xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all shadow-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-6">
            {filteredPublications.map((pub, idx) => (
              <motion.div
                key={pub._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`border rounded-[2.5rem] overflow-hidden transition-all ${
                  expandedYear === pub.year 
                  ? 'border-blue-200 bg-blue-50/30' 
                  : 'border-slate-100 bg-white hover:border-slate-200'
                }`}
              >
                <button 
                  onClick={() => setExpandedYear(expandedYear === pub.year ? null : pub.year)}
                  className="w-full flex items-center justify-between p-8 md:p-10 text-left group"
                >
                  <div className="flex items-center gap-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl transition-all ${
                      expandedYear === pub.year 
                      ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20 scale-110' 
                      : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100 group-hover:text-slate-900'
                    }`}>
                      {pub.year}
                    </div>
                    <div>
                      <h3 className={`text-xl font-black transition-colors ${
                        expandedYear === pub.year ? 'text-slate-900' : 'text-slate-600'
                      }`}>
                        {pub.title}
                      </h3>
                      <div className="flex gap-4 mt-2">
                         <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                           <Calendar size={12} /> Academic Year
                         </span>
                         {pub.articles && pub.articles.length > 0 && (
                           <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-100/50 px-2.5 py-0.5 rounded-full border border-blue-100">
                             {pub.articles.length} Records
                           </span>
                         )}
                      </div>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                    expandedYear === pub.year 
                    ? 'border-blue-200 bg-white text-blue-600 rotate-180' 
                    : 'border-slate-100 bg-slate-50 text-slate-400'
                  }`}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                <AnimatePresence>
                  {expandedYear === pub.year && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-10 md:px-10 md:pb-12 space-y-8">
                        {/* Summary PDF Section */}
                        {pub.summaryPdfUrl && (
                          <div className="bg-white border border-blue-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                            <div className="flex items-center gap-6">
                               <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center">
                                 <FileText size={28} />
                               </div>
                               <div>
                                 <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight leading-tight">Comprehensive Summary</h4>
                                 <p className="text-sm font-medium text-slate-500">Download the full research output document for {pub.year}.</p>
                               </div>
                            </div>
                            <div className="flex gap-3 w-full md:w-auto">
                              <button 
                                onClick={() => setActivePdf({ url: pub.summaryPdfUrl!, title: pub.title })}
                                className="flex-grow md:flex-grow-0 flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-blue-600/10"
                              >
                                <ExternalLink size={16} /> View Document
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Articles Table Section */}
                        {pub.articles && pub.articles.length > 0 && (
                          <div className="border border-slate-100 rounded-3xl overflow-hidden bg-white shadow-sm">
                            {/* Desktop Header */}
                            <div className="hidden md:grid grid-cols-12 bg-slate-50 border-b border-slate-100 p-4 font-black text-[10px] uppercase tracking-widest text-slate-500">
                              <div className="col-span-1 text-center">SL</div>
                              <div className="col-span-9 pl-4">Research Article / Poster Details</div>
                              <div className="col-span-2 text-center">Impact Factor</div>
                            </div>
                            
                            {/* Desktop/Mobile List */}
                            <div className="divide-y divide-slate-50">
                              {pub.articles.map((article, aIdx) => (
                                <div key={aIdx} className="group">
                                  {/* Desktop Grid Layout */}
                                  <div className="hidden md:grid grid-cols-12 p-6 md:p-4 items-center hover:bg-slate-50/50 transition-colors gap-4 md:gap-0">
                                    <div className="md:col-span-1 text-center font-bold text-slate-400 text-xs">{article.slNo || aIdx + 1}</div>
                                    <div className="md:col-span-9 md:pl-4">
                                      <p className="text-sm font-medium text-slate-600 leading-relaxed">
                                        {article.description}
                                      </p>
                                    </div>
                                    <div className="md:col-span-2 text-center">
                                      {article.impactFactor ? (
                                        <span className="bg-green-50 text-green-600 text-[10px] font-black px-3 py-1 rounded-full border border-green-100">
                                          {article.impactFactor}
                                        </span>
                                      ) : (
                                        <span className="text-slate-300 text-[10px] font-bold italic">N/A</span>
                                      )}
                                    </div>
                                  </div>

                                  {/* Mobile Card Layout */}
                                  <div className="md:hidden p-6 space-y-4">
                                    <div className="flex items-start justify-between gap-4">
                                      <div className="w-8 h-8 bg-slate-50 text-slate-400 rounded-lg flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                                        {article.slNo || aIdx + 1}
                                      </div>
                                      {article.impactFactor && (
                                        <div className="flex flex-col items-end">
                                          <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest mb-1">Impact Factor</span>
                                          <span className="bg-green-50 text-green-600 text-[10px] font-black px-2.5 py-1 rounded-full border border-green-100">
                                            {article.impactFactor}
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                    <p className="text-sm font-medium text-slate-600 leading-relaxed">
                                      {article.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="py-32 text-center text-slate-400">
              <BookOpen size={48} className="mx-auto mb-6 opacity-20" />
              <p className="font-medium text-lg italic">The research records you are looking for seem to be missing.</p>
              <button 
                onClick={() => setSearchTerm("")}
                className="mt-6 text-blue-600 font-black uppercase text-xs tracking-widest hover:underline"
              >
                Clear all search filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PDF Modal Viewer */}
      <AnimatePresence>
        {activePdf && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 md:p-8 lg:p-12"
          >
             <motion.div 
               initial={{ scale: 0.95, y: 20 }}
               animate={{ scale: 1, y: 0 }}
               exit={{ scale: 0.95, y: 20 }}
               className="bg-white rounded-[2rem] w-full max-w-6xl h-full flex flex-col shadow-2xl overflow-hidden border border-slate-100"
             >
               {/* Modal Header */}
               <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 border-b border-slate-100 bg-slate-50 gap-4">
                 <div className="flex items-center gap-4 w-full sm:w-auto">
                   <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-red-500 border border-slate-200 shadow-sm flex-shrink-0">
                     <FileText size={18} />
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-900 text-sm md:text-base leading-tight">{activePdf.title}</h3>
                     <p className="text-[10px] text-slate-500 font-medium">Institutional Research Document</p>
                   </div>
                 </div>
                 
                 <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                   <a 
                     href={activePdf.url} 
                     download 
                     className="flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all flex-grow sm:flex-grow-0"
                   >
                     <Download size={16} /> Download PDF
                   </a>
                   <button 
                     onClick={() => setActivePdf(null)} 
                     className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all flex-shrink-0"
                   >
                     <X size={20} />
                   </button>
                 </div>
               </div>
               
               {/* PDF Viewer Iframe */}
               <div className="flex-grow w-full bg-slate-100 relative">
                 <iframe 
                   src={`${activePdf.url}#toolbar=0`} 
                   className="w-full h-full border-none absolute inset-0"
                   title="PDF Viewer"
                 />
               </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
