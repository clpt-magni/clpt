"use client";

import React, { useState, useMemo } from "react";
import { 
  Search, 
  Leaf, 
  FlaskConical, 
  Dna, 
  Stethoscope,
  X,
  Plus
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";

interface Plant {
  sNo: string;
  botanicalName: string;
  teluguName: string;
  family: string;
  constituents: string;
  uses: string;
}

interface MedicinalGardenClientProps {
  plantListRaw: string;
}

export default function MedicinalGardenClient({ plantListRaw }: MedicinalGardenClientProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const plants = useMemo(() => {
    if (!plantListRaw) return [];
    
    // Split by lines and remove header if present
    const lines = plantListRaw.split("\n").filter(line => line.trim() !== "");
    
    // Attempt to filter out header line if it contains "Botanical Name" or "S. No."
    const dataLines = lines.filter(line => 
      !line.toLowerCase().includes("botanical name") && 
      !line.toLowerCase().includes("telugu name") &&
      line.includes("|")
    );

    const cleanText = (text: string) => {
      if (!text) return "";
      // Remove [cite_start], [cite_end], [cite:1], [cite:23] etc.
      return text.replace(/\[cite_start\]|\[cite:.*?\]|\[cite_end\]/g, "").trim();
    };

    return dataLines.map(line => {
      const parts = line.split("|").map(p => p.trim());
      return {
        sNo: cleanText(parts[0]),
        botanicalName: cleanText(parts[1]),
        teluguName: cleanText(parts[2]),
        family: cleanText(parts[3]),
        constituents: cleanText(parts[4]),
        uses: cleanText(parts[5])
      } as Plant;
    });
  }, [plantListRaw]);

  const filteredPlants = useMemo(() => {
    if (!searchTerm) return plants;
    const lowerSearch = searchTerm.toLowerCase();
    return plants.filter(p => 
      p.botanicalName.toLowerCase().includes(lowerSearch) ||
      p.teluguName.toLowerCase().includes(lowerSearch) ||
      p.family.toLowerCase().includes(lowerSearch) ||
      p.uses.toLowerCase().includes(lowerSearch) ||
      p.constituents.toLowerCase().includes(lowerSearch)
    );
  }, [searchTerm, plants]);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Registry Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full font-black text-xs uppercase tracking-widest border border-emerald-100">
                Digital Inventory
             </div>
             <h3 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight flex items-center gap-4">
                Plant Registry
             </h3>
             <p className="text-slate-500 font-medium max-w-xl">
                Explore our comprehensive botanical collection. You can search by botanical name, local name, or medicinal properties.
             </p>
          </div>

          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors" size={20} />
            <Input 
              placeholder="Search botanical, family, or use..." 
              className="pl-12 h-14 bg-white border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-emerald-500 transition-all font-bold text-slate-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500 transition-colors"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        {searchTerm && (
          <div className="mb-8 flex items-center gap-2">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Found</span>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-black text-xs">{filteredPlants.length} species</span>
          </div>
        )}

        {/* Registry Grid (Responsive 1/2/3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlants.map((plant, idx) => (
            <div 
              key={idx} 
              className="group p-8 bg-white rounded-[3rem] shadow-sm border border-slate-100 space-y-6 hover:shadow-2xl hover:border-emerald-100 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                   <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">{plant.family}</p>
                   <h4 className="text-xl font-black text-primary-dark italic uppercase tracking-tight group-hover:text-primary transition-colors">{plant.botanicalName}</h4>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-[10px] font-black text-slate-300 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all">
                  #{plant.sNo}
                </div>
              </div>
              
              <div className="flex-grow space-y-5">
                 <div className="p-4 bg-slate-50 rounded-2xl flex items-center gap-4 group-hover:bg-emerald-50/50 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-emerald-600 shadow-sm">
                      <Leaf size={14} />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Local Name</p>
                      <p className="text-sm font-bold text-slate-700">{plant.teluguName}</p>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <FlaskConical size={12} className="text-primary" /> Constituents
                    </p>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed break-words line-clamp-3 group-hover:line-clamp-none transition-all">
                      {plant.constituents}
                    </p>
                 </div>

                 <div className="pt-4 border-t border-slate-50 space-y-2">
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest flex items-center gap-2">
                      <Stethoscope size={12} /> Medical Uses
                    </p>
                    <p className="text-xs text-slate-600 font-bold leading-relaxed italic break-words">
                      {plant.uses}
                    </p>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPlants.length === 0 && (
          <Card className="border-none shadow-sm rounded-[3rem] bg-white py-24">
             <CardContent className="text-center space-y-6">
                <div className="w-20 h-20 bg-slate-50 text-slate-200 rounded-full flex items-center justify-center mx-auto">
                   <Search size={40} />
                </div>
                <p className="text-slate-400 font-black uppercase tracking-[0.2em] text-sm">No plants matching your search</p>
             </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
