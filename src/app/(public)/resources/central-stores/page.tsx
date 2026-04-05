"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { 
  Package, 
  RefreshCcw, 
  ShieldCheck, 
  ClipboardList, 
  TrendingDown, 
  BarChart3,
  ArrowRight,
  Sparkles,
  Boxes
} from "lucide-react";

const OBJECTIVES = [
  { text: "Ensure uninterrupted supply of materials without any logistical delay.", icon: RefreshCcw },
  { text: "Implement precision inventory to prevent overstocking and understocking.", icon: TrendingDown },
  { text: "Ensure safe handling of materials and prevent damage or deterioration.", icon: ShieldCheck },
  { text: "Systematic preparation of indents for seamless requisition of goods.", icon: ClipboardList },
  { text: "Analyze quotations to ensure effective purchasing and resource utilization.", icon: BarChart3 },
];

export default function CentralStoresPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Central Stores & Logistics"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Central Stores" }
        ]}
        description="The backbone of our institutional logistics, ensuring precision inventory management and the seamless supply of high-quality pharmaceutical and academic materials."
      />

      {/* Operational Excellence Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Descriptive Content */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                   Supply Chain & Quality
                </div>
                <h2 className="text-4xl font-black text-primary-dark uppercase tracking-tight leading-tight">
                  Logistical Precision <br /> & Safe Handling.
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed">
                   <p>
                    Our Central Stores department operates with the primary goal of maintaining an uninterrupted supply chain 
                    for all academic and research departments. We bridge the gap between procurement and utilization through 
                    rigorous analysis and safe material management.
                   </p>
                </div>
              </div>

              {/* Objectives Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {OBJECTIVES.map((obj, i) => (
                   <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-start group hover:bg-primary-dark transition-all duration-500">
                      <div className="bg-white p-3 rounded-2xl text-primary group-hover:text-secondary shadow-sm transition-colors mb-6">
                        <obj.icon size={24} />
                      </div>
                      <p className="text-sm font-bold text-slate-600 leading-relaxed group-hover:text-white/80 transition-colors uppercase italic">{obj.text}</p>
                   </div>
                 ))}
              </div>
            </div>

            {/* Visuals & Efficiency Focus */}
            <div className="lg:col-span-5 space-y-8">
               <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-100 group relative">
                  <img src="/images/resources/central-stores/central-1.jpg" alt="Inventory Management View" className="w-full h-auto transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex items-end">
                     <p className="text-white text-xl font-black uppercase tracking-tight italic">Efficient Supply Coordination</p>
                  </div>
               </div>

               {/* Inventory Standards Card */}
               <div className="p-10 bg-primary-dark text-white rounded-[3rem] shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-10 text-white/5 pointer-events-none">
                    <Boxes size={120} />
                  </div>
                  <h4 className="text-xl font-black text-secondary uppercase mb-6 flex items-center gap-2">
                    <Sparkles size={20} /> Strategic Purchasing
                  </h4>
                  <p className="text-white/60 font-medium text-sm leading-relaxed mb-10 italic">
                    By meticulously analyzing quotations and requisition patterns, we ensure that every departmental 
                    need is met with the most effective and high-quality materials available in the market.
                  </p>
                  <div className="inline-flex items-center gap-4 py-4 px-8 bg-white/10 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-primary-dark transition-all">
                     Managed via ERP System <ArrowRight size={20} />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Reliability Grid */}
      <section className="py-24 bg-slate-50">
         <div className="container mx-auto px-4">
            <div className="p-16 bg-white rounded-[4rem] shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto group hover:border-primary transition-colors">
               <div className="w-24 h-24 bg-primary/5 rounded-[2rem] flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <Package size={48} />
               </div>
               <div className="space-y-4">
                  <h4 className="text-3xl font-black text-primary-dark uppercase italic tracking-tight">Safeguarding Excellence</h4>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed italic">
                    From complex chemical reagents to sensitive laboratory glassware, our storage protocols are 
                    designed to prevent damage and ensure the longevity of institutional assets.
                  </p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
