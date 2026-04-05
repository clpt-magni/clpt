"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sprout, 
  Target, 
  Search, 
  Users, 
  FileText, 
  ArrowRight,
  Maximize2,
  TreePine,
  Layers
} from "lucide-react";
import Link from "next/link";

const STATS = [
  { label: "Total Area", value: "2811.4 Sq.Mts.", icon: Layers },
  { label: "Species Count", value: "128+", icon: TreePine },
  { label: "Conservation", value: "Rare & Threatened", icon: Search },
  { label: "Focus", value: "Research & teaching", icon: Sprout },
];

const OBJECTIVES = [
  "Introduce plants from different geographical zones for commercial medicinal importance.",
  "Document and inventorize all medicinal plants growing in the herbal garden.",
  "Raise biomass (ex-situ conservation) for research and teaching departments.",
  "Assess environmental stresses on medicinal plants and their secondary metabolites."
];

const COMMITTEE = [
  { role: "Faculty In-Charge", count: 1 },
  { role: "Faculty Co-Ordinator", count: 1 },
  { role: "Attendant", count: 1 },
  { role: "Gardener", count: 1 },
];

export default function MedicinalGardenPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Medicinal Plant Garden"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Medicinal Garden" }
        ]}
        description="A botanical sanctuary maintaining over 128 rare and commercially important medicinal plant species for advanced pharmaceutical research and conservation."
      />

      {/* Overview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Context and Mission */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full font-black text-xs uppercase tracking-widest border border-emerald-100">
                   Botanical Research Hub
                </div>
                <h2 className="text-4xl font-black text-primary uppercase tracking-tight leading-tight">
                  Herbal Excellence <br /> & Conservation.
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed">
                   <p>
                    Keeping in view the importance of herbs, Chalapathi Institute of Pharmaceutical Sciences 
                    has established an herbal garden with more than 100 rare, threatened, and commercially 
                    important medicinal plants introduced from various regions of Andhra Pradesh.
                   </p>
                   <p>
                    The garden serves as an essential tool for both teaching and research, striving to 
                    conserve species from different agro-climatic zones of India for a sustainable 
                    supply of raw materials.
                   </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {STATS.map((stat, i) => (
                   <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-center group hover:bg-primary-dark transition-all duration-500">
                      <stat.icon size={24} className="mx-auto text-primary group-hover:text-secondary transition-colors mb-3" />
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-white/50">{stat.label}</p>
                      <p className="text-sm font-black text-primary-dark mt-1 group-hover:text-white">{stat.value}</p>
                   </div>
                 ))}
              </div>

              {/* Objectives List */}
              <div className="bg-primary/5 p-10 rounded-[3rem] border border-primary/10">
                 <h3 className="text-2xl font-black text-primary mb-8 uppercase flex items-center gap-3">
                   <Target className="text-secondary" /> Core Objectives
                 </h3>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {OBJECTIVES.map((obj, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="mt-1 bg-white p-1 rounded-md text-emerald-600 shrink-0 shadow-sm">
                           <ArrowRight size={14} />
                        </div>
                        <span className="text-slate-600 font-bold text-sm leading-relaxed">{obj}</span>
                      </li>
                    ))}
                 </ul>
              </div>
            </div>

            {/* Visuals and Registry */}
            <div className="lg:col-span-5 space-y-8">
               <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-100 group relative">
                  <img src="/images/resources/medicinal-garden/med-1.jpg" alt="Botanical Garden View" className="w-full h-auto transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex items-end">
                     <p className="text-white text-xl font-black uppercase">Sustainable Heritage</p>
                  </div>
               </div>

               {/* PDF Registry Card */}
               <Link 
                 href="/documents/resources/medicinal-garden/medical.pdf" 
                 target="_blank"
                 className="block group"
               >
                 <div className="p-10 bg-primary-dark text-white rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 -skew-x-12 translate-x-1/2 -translate-y-1/2" />
                    <FileText size={48} className="text-secondary mb-6" />
                    <h4 className="text-2xl font-black uppercase mb-2">Plant Registry</h4>
                    <p className="text-white/60 font-medium text-sm mb-8 leading-relaxed">
                      Access the comprehensive detailed list of all 128 medicinal plants currently maintained in the garden.
                    </p>
                    <div className="inline-flex items-center gap-3 py-3 px-6 bg-white/10 rounded-full font-black text-xs uppercase tracking-widest group-hover:bg-secondary group-hover:text-primary-dark transition-colors">
                       View Detailed List <ArrowRight size={16} />
                    </div>
                 </div>
               </Link>

               {/* Committee Card */}
               <div className="p-10 border-2 border-dashed border-slate-200 rounded-[2.5rem]">
                  <h4 className="text-lg font-black text-primary uppercase mb-6 flex items-center gap-2">
                    <Users size={20} className="text-secondary" /> Garden Committee
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                     {COMMITTEE.map((mem, i) => (
                       <div key={i} className="flex flex-col">
                          <span className="text-[10px] font-black text-slate-400 uppercase">{mem.role}</span>
                          <span className="text-sm font-black text-primary-dark uppercase tracking-tight">Active</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Botanical Gallery */}
      <section className="py-24 bg-slate-50">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="rounded-[3rem] overflow-hidden shadow-xl border-4 border-white hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/resources/medicinal-garden/med-2.jpg" alt="Herbal Species" className="w-full h-auto" />
               </div>
               <div className="rounded-[3rem] overflow-hidden shadow-xl border-4 border-white hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/resources/medicinal-garden/med-3.jpg" alt="Botanical Rows" className="w-full h-auto" />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
