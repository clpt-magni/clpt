"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { 
  ShieldCheck, 
  Thermometer, 
  Wind, 
  ArrowRight,
  Stethoscope,
  Activity,
  Layers,
  Lock,
  Users
} from "lucide-react";

interface Guideline {
  text: string;
  icon: any;
}

const GUIDELINES: Guideline[] = [
  { text: "Registered with CCSEA, Ministry of Environment and Forestry, Govt of India.", icon: ShieldCheck },
  { text: "Institutional Animal Ethics Committee (IAEC) advises on ethical practices.", icon: Activity },
  { text: "All animals are acquired lawfully as per standard CCSEA guidelines.", icon: Lock },
  { text: "Individual air-conditioned housing for each species to avoid conflict.", icon: Wind },
  { text: "Dedicated quarantine room facility for newly received animals.", icon: Layers },
  { text: "Strict separate entry and exit protocols to avoid contamination.", icon: ArrowRight },
  { text: "Controlled environmental conditions (22-26°C, 60% Humidity).", icon: Thermometer },
  { text: "Dedicated support staff for watering, restraining, and record keeping.", icon: Users },
];

export default function AnimalHousePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Institutional Animal House"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Animal House" }
        ]}
        description="A CCSEA-registered ethical research facility adhering to the highest standards of animal welfare and controlled environmental housing for pharmaceutical experimentation."
      />

      {/* Main Content Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Regulatory and Ethical Oversight */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                   Ethical Research Sanctuary
                </div>
                <h2 className="text-4xl font-black text-primary-dark uppercase tracking-tight leading-tight">
                  Regulatory Compliance <br /> & Ethical Care.
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed">
                   <p>
                    The Animal House is registered with the Committee for Control and Supervision of Experiments on Animals (CCSEA), 
                    Government of India. Our established Institutional Animal Ethics Committee (IAEC) ensures that every 
                    experiment adheres to international standards of humane care and scientific integrity.
                   </p>
                </div>
              </div>

              {/* Guidelines Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {GUIDELINES.map((guide, i) => (
                   <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-4 group hover:bg-primary-dark transition-all duration-500">
                      <div className="bg-white p-3 rounded-2xl text-primary group-hover:text-secondary shadow-sm transition-colors">
                        <guide.icon size={20} />
                      </div>
                      <p className="text-sm font-bold text-slate-600 leading-relaxed group-hover:text-white/80 transition-colors">{guide.text}</p>
                   </div>
                 ))}
              </div>
            </div>

            {/* Infrastructure Highlights */}
            <div className="lg:col-span-5 space-y-8">
               <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-100 group relative">
                  <img src="/images/resources/animal-house/animal-1.jpg" alt="Animal Housing Unit" className="w-full h-auto transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex items-end">
                     <p className="text-white text-xl font-black uppercase">Controlled Environment</p>
                  </div>
               </div>

               {/* Stats/Metrics Block */}
               <div className="p-10 bg-primary-dark text-white rounded-[2.5rem] shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 -skew-x-12 translate-x-1/2 -translate-y-1/2" />
                  <h4 className="text-lg font-black uppercase mb-6 flex items-center gap-2">
                    <Stethoscope size={20} className="text-secondary" /> Welfare Standards
                  </h4>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center py-4 border-b border-white/10">
                       <span className="text-sm font-medium text-white/60">Temperature Control</span>
                       <span className="text-sm font-black text-secondary uppercase">22-26<sup>o</sup>C</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-white/10">
                       <span className="text-sm font-medium text-white/60">Relative Humidity</span>
                       <span className="text-sm font-black text-secondary uppercase">60 +/- 10%</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-white/10">
                       <span className="text-sm font-medium text-white/60">Light/Dark Cycle</span>
                       <span className="text-sm font-black text-secondary uppercase">12 hr Alternate</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="py-24 bg-slate-50">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="rounded-[3rem] overflow-hidden shadow-xl border-4 border-white hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/resources/animal-house/animal-1.jpg" alt="Animal Care Protocol" className="w-full h-auto" />
               </div>
               <div className="rounded-[3rem] overflow-hidden shadow-xl border-4 border-white hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/resources/animal-house/animal-2.jpg" alt="Compliance Station" className="w-full h-auto" />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
