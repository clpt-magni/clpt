import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { 
  Sprout, 
  Target, 
  Users, 
  ArrowRight,
  TreePine,
  Layers,
  Search,
  FlaskConical
} from "lucide-react";
import { client, urlFor } from "@/lib/sanity";
import MedicinalGardenClient from "@/components/resources/MedicinalGardenClient";

const DEFAULT_STATS = [
  { label: "Total Area", value: "2811.4 Sq.Mts.", iconName: "Layers" },
  { label: "Species Count", value: "128+", iconName: "TreePine" },
  { label: "Conservation", value: "Rare & Threatened", iconName: "Search" },
  { label: "Focus", value: "Research & teaching", iconName: "Sprout" },
];

const DEFAULT_OBJECTIVES = [
  "Introduce plants from different geographical zones for commercial medicinal importance.",
  "Document and inventorize all medicinal plants growing in the herbal garden.",
  "Raise biomass (ex-situ conservation) for research and teaching departments.",
  "Assess environmental stresses on medicinal plants and their secondary metabolites."
];

async function getGardenData() {
  const query = `*[_type == "medicinalGarden"][0]`;
  return await client.fetch(query);
}

export default async function MedicinalGardenPage() {
  const data = await getGardenData();

  const title = data?.title || "Medicinal Plant Garden";
  const description = data?.description || "A botanical sanctuary maintaining over 128 rare and commercially important medicinal plant species for advanced pharmaceutical research and conservation.";
  const stats = data?.statistics || DEFAULT_STATS;
  const objectives = data?.objectives || DEFAULT_OBJECTIVES;
  const gallery = data?.gallery || [];
  const plantListRaw = data?.plantListRaw || "";

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title={title}
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Medicinal Garden" }
        ]}
        description={description}
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
                   Nature's Pharmacy.
                </h2>
                <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                   <p>
                    {description}
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
                 {stats.map((stat: any, i: number) => {
                   const IconComponent = (LucideIcons as any)[stat.iconName] || Sprout;
                   return (
                     <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-center group hover:bg-emerald-600 transition-all duration-500">
                        <IconComponent size={24} className="mx-auto text-emerald-600 group-hover:text-white transition-colors mb-3" />
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-white/50">{stat.label}</p>
                        <p className="text-sm font-black text-primary-dark mt-1 group-hover:text-white">{stat.value}</p>
                     </div>
                   );
                 })}
              </div>

              {/* Objectives List */}
              <div className="bg-emerald-50/50 p-10 rounded-[3rem] border border-emerald-100 shadow-inner relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-10 text-emerald-100 pointer-events-none">
                    <TreePine size={120} />
                 </div>
                 <h3 className="text-2xl font-black text-primary mb-8 uppercase flex items-center gap-3 relative z-10">
                   <Target className="text-emerald-500" /> Core Objectives
                 </h3>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    {objectives.map((obj: string, i: number) => (
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

            {/* Visuals */}
            <div className="lg:col-span-5 space-y-8">
               <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-100 group relative">
                  {gallery[0] ? (
                    <img 
                      src={urlFor(gallery[0]).url()} 
                      alt="Botanical Garden View" 
                      className="w-full h-auto transition-transform duration-1000 group-hover:scale-110" 
                    />
                  ) : (
                    <img 
                      src="/images/resources/medicinal-garden/med-1.jpg" 
                      alt="Botanical Garden View" 
                      className="w-full h-auto" 
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex items-end">
                     <p className="text-white text-xl font-black uppercase">Sustainable Heritage</p>
                  </div>
               </div>

               {/* Quick Info Card */}
               <div className="p-10 bg-primary-dark text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-10 text-white/5 pointer-events-none">
                    <FlaskConical size={100} />
                  </div>
                  <h4 className="text-xl font-black text-secondary uppercase mb-4">Research Access</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-medium">
                    Scholars and researchers can request samples or site access for scientific studies through the institutional research advisory board.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Plant Registry Component */}
      <MedicinalGardenClient plantListRaw={plantListRaw} />

      {/* Gallery Section */}
      {gallery.length > 1 && (
        <section className="py-24 bg-white">
           <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {gallery.slice(1).map((img: any, i: number) => (
                    <div key={i} className="rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-slate-50 hover:scale-[1.02] transition-transform duration-500">
                       <img 
                         src={urlFor(img).url()} 
                         alt={`Botanical Species ${i+2}`} 
                         className="w-full h-72 object-cover" 
                       />
                    </div>
                 ))}
              </div>
           </div>
        </section>
      )}
    </div>
  );
}

// Add necessary imports for the icon mapper
import * as LucideIcons from "lucide-react";
