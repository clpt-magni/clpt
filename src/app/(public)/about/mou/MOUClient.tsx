"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  FileText, 
  ExternalLink, 
  Building2, 
  ChevronRight,
  Filter,
  X,
  Download
} from "lucide-react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/PageHeader";

interface MOU {
  _id: string;
  title: string;
  serialNumber?: number;
  category?: string;
  description?: string;
  documentUrl?: string;
}

export default function MOUClient({ mous }: { mous: MOU[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeDoc, setActiveDoc] = useState<MOU | null>(null);

  const categories = ["all", ...Array.from(new Set(mous.map(m => m.category).filter((c): c is string => !!c)))];

  const filteredMous = mous.filter(mou => {
    const matchesSearch = mou.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || mou.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader
        title="Strategic Collaborations (MOUs)"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "MOUs" }
        ]}
        description="Fostering excellence through a global network of academic, industrial, and clinical training partnerships."
      />

      {/* Filter Section */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search partner institutions..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-200 pl-14 pr-6 py-5 rounded-3xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all shadow-sm"
              />
            </div>
            {categories.length > 1 && (
              <div className="relative min-w-[200px]">
                <Filter className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-white border border-slate-200 pl-14 pr-10 py-5 rounded-3xl text-sm font-medium focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all shadow-sm appearance-none"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* MOU List Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredMous.map((mou, index) => (
                <motion.div
                  key={mou._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: (index % 12) * 0.05 }}
                  className="bg-white border border-slate-100 rounded-[2.5rem] p-8 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all group flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-slate-50 text-slate-400 group-hover:bg-primary/5 group-hover:text-primary rounded-2xl flex items-center justify-center transition-colors">
                      {mou.serialNumber || index + 1}
                    </div>
                    {mou.category && (
                      <span className="bg-primary/5 text-primary text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-primary/10">
                        {mou.category}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-black text-slate-900 leading-tight mb-4 group-hover:text-primary transition-colors flex-grow">
                    {mou.title}
                  </h3>

                  {mou.description && (
                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 line-clamp-2">
                      {mou.description}
                    </p>
                  )}

                  {mou.documentUrl && (
                    <button 
                      onClick={() => setActiveDoc(mou)}
                      className="mt-auto inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-primary transition-all w-full"
                    >
                      <FileText size={16} /> View MOU Details
                    </button>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredMous.length === 0 && (
            <div className="py-32 text-center text-slate-400">
              <Building2 size={48} className="mx-auto mb-6 opacity-20" />
              <p className="font-medium">No partner institutions found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal Document Viewer */}
      <AnimatePresence>
        {activeDoc && activeDoc.documentUrl && (
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
                   <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 border border-slate-200 shadow-sm flex-shrink-0">
                     <FileText size={18} />
                   </div>
                   <h3 className="font-bold text-slate-900 text-sm md:text-base truncate max-w-[200px] sm:max-w-md">{activeDoc.title}</h3>
                 </div>
                 
                 <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                   <a 
                     href={activeDoc.documentUrl} 
                     download 
                     className="flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all flex-grow sm:flex-grow-0"
                   >
                     <Download size={16} /> Download
                   </a>
                   <button 
                     onClick={() => setActiveDoc(null)} 
                     className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all flex-shrink-0"
                   >
                     <X size={20} />
                   </button>
                 </div>
               </div>
               
               {/* Modal Body / PDF Viewer */}
               <div className="flex-grow w-full bg-slate-100 relative">
                 <iframe 
                   src={activeDoc.documentUrl} 
                   className="w-full h-full border-none absolute inset-0"
                   title={activeDoc.title}
                 />
               </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
