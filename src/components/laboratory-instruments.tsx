"use client";

import { useState, useMemo } from "react";
import { Search, Layers, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LaboratoryInstrumentsProps {
  instruments: string[];
}

export function LaboratoryInstruments({ instruments }: LaboratoryInstrumentsProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInstruments = useMemo(() => {
    return instruments.filter(item => 
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [instruments, searchQuery]);

  return (
    <div>
      {/* Section Header with Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-slate-100 pb-6 mb-10 gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
            <Layers size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">List of Instruments</h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Specialized Lab Equipment</p>
          </div>
        </div>

        {/* Local Search for Instruments */}
        <div className="relative w-full md:max-w-xs group">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Find equipment..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all outline-none font-medium text-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Grid of Instruments */}
      {filteredInstruments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredInstruments.map((item: string, i: number) => (
              <motion.div 
                key={item + i} 
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all h-full"
              >
                <div className="w-6 h-6 shrink-0 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-slate-100">
                  <CheckCircle2 size={14} />
                </div>
                <span className="text-slate-700 font-bold text-sm leading-snug">{item}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="p-20 text-center bg-slate-50 rounded-3xl border border-dashed border-slate-200 text-slate-400 font-medium">
          No equipment found matching "{searchQuery}"
        </div>
      )}
    </div>
  );
}
