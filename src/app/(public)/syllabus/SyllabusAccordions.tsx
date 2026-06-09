"use client";

import { useState } from "react";
import { ChevronDown, Eye, FileText, BookOpen, GraduationCap, Layers } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const iconMap: Record<string, any> = {
  GraduationCap,
  BookOpen,
  Layers,
};

interface SyllabusItem {
  _id: string;
  program: string;
  title: string;
  batch: string;
  url: string;
}

interface GroupedCategory {
  program: string;
  description: string;
  icon: string;
  items: SyllabusItem[];
}

export default function SyllabusAccordions({ data }: { data: GroupedCategory[] }) {
  // All tabs are closed by default on initial page load
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const toggleTab = (program: string) => {
    setActiveTab(activeTab === program ? null : program);
  };

  return (
    <div className="space-y-4">
      {data.map((category, idx) => {
        const isOpen = activeTab === category.program;
        const Icon = iconMap[category.icon] || FileText;

        return (
          <div
            key={idx}
            className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:border-slate-200/60"
          >
            {/* Header / Trigger */}
            <button
              onClick={() => toggleTab(category.program)}
              className={`w-full flex flex-col md:flex-row md:items-center justify-between p-8 text-left transition-colors duration-300 select-none gap-6 ${
                isOpen ? "bg-slate-50/60" : "bg-white hover:bg-slate-50/30"
              }`}
            >
              <div className="flex items-center gap-6">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shrink-0 ${
                    isOpen
                      ? "bg-primary text-white scale-105 shadow-lg shadow-primary/20"
                      : "bg-slate-50 border border-slate-100 text-primary"
                  }`}
                >
                  <Icon size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3
                      className={`text-2xl font-black uppercase tracking-tight transition-colors duration-300 ${
                        isOpen ? "text-primary" : "text-primary-dark"
                      }`}
                    >
                      {category.program}
                    </h3>
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-500 border border-slate-200/40 px-3 py-1 rounded-full shrink-0">
                      {category.items.length} Files
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm font-medium mt-1 italic leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              <div
                className={`w-10 h-10 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-400 flex items-center justify-center shrink-0 transition-all duration-500 self-end md:self-center ${
                  isOpen ? "rotate-180 bg-primary/5 border-primary/20 text-primary" : ""
                }`}
              >
                <ChevronDown size={20} />
              </div>
            </button>

            {/* Accordion Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="border-t border-slate-100 bg-white"
                >
                  <div className="p-8 md:p-10 space-y-3.5">
                    {category.items.length > 0 ? (
                      <div className="grid grid-cols-1 gap-4">
                        {category.items.map((item, i) => (
                          <Link
                            key={item._id || i}
                            href={item.url}
                            target="_blank"
                            className="flex flex-col md:flex-row md:items-center justify-between p-5 md:px-7 bg-slate-50/50 hover:bg-primary-dark hover:text-white rounded-2xl transition-all duration-500 border border-slate-100/50 hover:shadow-xl hover:shadow-primary-dark/5 gap-4 group/item select-none"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-xl bg-white/70 group-hover/item:bg-primary flex items-center justify-center text-slate-400 group-hover/item:text-white shrink-0 transition-all duration-500">
                                <FileText size={18} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-black text-slate-800 group-hover/item:text-white uppercase tracking-tight transition-colors">
                                  {item.title}
                                </span>
                                <span className="text-xs font-bold text-slate-400 group-hover/item:text-white/70 mt-1 transition-colors">
                                  {item.batch}
                                </span>
                              </div>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-white/70 group-hover/item:bg-primary flex items-center justify-center text-slate-400 group-hover/item:text-white shrink-0 self-end md:self-center transition-all duration-300">
                              <Eye size={16} />
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <p className="text-slate-400 text-sm font-medium italic select-none">
                        No records available for this program yet.
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
