"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { 
  Dna, 
  Leaf, 
  FlaskConical, 
  FileText, 
  ArrowRight,
  Sparkles,
  Search,
  Users
} from "lucide-react";
import Link from "next/link";

interface MuseumType {
  title: string;
  description: string;
  icon: any;
  pdfLink?: string;
  pdfLabel?: string;
}

const MUSEUM_TYPES: MuseumType[] = [
  { 
    title: "Crude Drug Museum", 
    description: "Extensive collection of natural raw materials used in pharmaceutical preparation and study.", 
    icon: Leaf,
    pdfLink: "/documents/resources/drug-museum/1.pdf",
    pdfLabel: "View Crude Drug List"
  },
  { 
    title: "Biological & Allopathic Museum", 
    description: "Features biological specimens and live human organs for advanced anatomical and clinical study.", 
    icon: Dna 
  },
  { 
    title: "Herbal Formulation Museum", 
    description: "Showcases marketed herbal formulations and tributes to pioneering scientists. Supported by Syndy Pharma.", 
    icon: FlaskConical,
    pdfLink: "/documents/resources/drug-museum/2.pdf",
    pdfLabel: "View Formulation List"
  }
];

export default function DrugMuseumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Institutional Drug Museum"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Drug Museum" }
        ]}
        description="A bridge between academic theory and real-world application, our museums house rare specimens and modern formulations across allopathic and herbal sciences."
      />

      {/* Overview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full font-black text-xs uppercase tracking-widest border border-primary/10 mb-8">
              Educational Explorer
           </div>
           <h2 className="text-4xl md:text-5xl font-black text-primary-dark uppercase tracking-tight mb-8">
              Explore the <br /> World of Pharmacy.
           </h2>
           <p className="text-xl text-slate-600 font-medium leading-relaxed">
             Our museum plays a major role in bridging the gap between student knowledge and the global pharmaceutical world, 
             offering direct exposure to crude drugs, biological specimens, and commercial formulations.
           </p>
        </div>
      </section>

      {/* Museum Grids */}
      <section className="pb-24 bg-white">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {MUSEUM_TYPES.map((museum, i) => (
                 <div key={i} className="group p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col items-center text-center hover:bg-primary-dark transition-all duration-500 hover:-translate-y-2">
                    <div className="w-16 h-16 rounded-[2rem] bg-white flex items-center justify-center text-primary group-hover:text-secondary shadow-sm transition-colors mb-8">
                      <museum.icon size={32} />
                    </div>
                    <h3 className="text-xl font-black text-primary-dark uppercase mb-4 tracking-tight group-hover:text-white transition-colors">{museum.title}</h3>
                    <p className="text-sm font-bold text-slate-500 leading-relaxed group-hover:text-white/60 transition-colors mb-8">{museum.description}</p>
                    {museum.pdfLink && (
                       <Link 
                         href={museum.pdfLink} 
                         target="_blank"
                         className="mt-auto inline-flex items-center gap-2 py-3 px-6 bg-white rounded-full font-black text-xs uppercase tracking-widest text-primary shadow-sm hover:bg-secondary hover:text-primary-dark transition-colors"
                       >
                         {museum.pdfLabel} <FileText size={16} />
                       </Link>
                    )}
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Special Thanks/Partner Section */}
      <section className="py-24 bg-primary-dark relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[40%] h-full bg-secondary/5 -skew-x-12 translate-x-1/2" />
         <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <Sparkles className="text-secondary mx-auto mb-8" size={60} />
            <h3 className="text-3xl font-black uppercase mb-6 tracking-tight">Herbal Museum Partnership</h3>
            <p className="text-white/60 font-medium text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Our specialized Herbal Drugs Museum is generously supported and enriched by <strong>Syndy Pharma, Hyderabad</strong>, 
              providing students with direct access to commercial formulation insights.
            </p>
            <Link 
              href="/documents/resources/drug-museum/3.pdf" 
              target="_blank"
              className="inline-flex items-center gap-4 py-4 px-10 bg-secondary text-primary-dark rounded-full font-black text-xs uppercase tracking-widest hover:bg-white transition-colors"
            >
               View Syndy Pharma Contributions <ArrowRight size={20} />
            </Link>
         </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-slate-50">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {[1, 2, 3, 4].map((num) => (
                 <div key={num} className="rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white hover:scale-[1.05] transition-transform duration-500">
                    <img src={`/images/resources/drug-museum/drug-${num}.jpg`} alt={`Museum Exhibit ${num}`} className="w-full h-auto" />
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
