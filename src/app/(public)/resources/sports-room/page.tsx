"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { 
  Trophy, 
  Target, 
  Users, 
  ArrowRight,
  Zap,
  Sparkles,
  ChevronRight,
  Monitor,
  LayoutGrid,
  ShieldCheck
} from "lucide-react";

const INDOOR_SPORTS = [
  { name: "Table Tennis", value: "Pro Tables", icon: Zap },
  { name: "Chess", value: "Strategic Play", icon: Target },
  { name: "Caroms", value: "Precision Boards", icon: LayoutGrid },
];

export default function SportsRoomPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Indoor Sports Arena"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Sports Room" }
        ]}
        description="Our specialized indoor sports facility provides a strategic and professional environment for table tennis, chess, and caroms, fostering concentration and sportsmanship."
      />

      {/* Strategic Gameplay Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Descriptive Content */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                   Indoor Athletics & Strategy
                </div>
                <h2 className="text-4xl font-black text-primary-dark uppercase tracking-tight leading-tight">
                  Focus, Precision <br /> & Fair Play.
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed">
                   <p>
                    The college maintains a specialized sports room meticulously curated to support high-level indoor athletics. 
                    From intense table tennis rallies to silent strategic battles in chess, this facility encourages 
                    disciplined competition and recreational excellence.
                   </p>
                </div>
              </div>

              {/* Indoor Sports Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 {INDOOR_SPORTS.map((sport, i) => (
                   <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-primary-dark transition-all duration-500">
                      <div className="bg-white p-3 rounded-2xl text-primary group-hover:text-secondary shadow-sm transition-colors mb-4">
                        <sport.icon size={28} />
                      </div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 group-hover:text-white/50">{sport.name}</p>
                      <p className="text-xs font-black text-primary-dark group-hover:text-white transition-colors uppercase italic">{sport.value}</p>
                   </div>
                 ))}
              </div>
            </div>

            {/* Supervision & Visuals */}
            <div className="lg:col-span-5 space-y-8">
               <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-100 group relative">
                  <img src="/images/resources/sports-room/sports1.jpg" alt="Indoor Sports Action" className="w-full h-auto transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex items-end">
                     <p className="text-white text-xl font-black uppercase tracking-tight">Professional Grade Boards</p>
                  </div>
               </div>

               {/* Director Supervision Card */}
               <div className="p-10 bg-primary-dark text-white rounded-[3rem] shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-10 text-white/5 pointer-events-none">
                    <ShieldCheck size={120} />
                  </div>
                  <h4 className="text-xl font-black text-secondary uppercase mb-6 flex items-center gap-2">
                    <Sparkles size={20} /> Expert Oversight
                  </h4>
                  <p className="text-white/60 font-medium text-sm leading-relaxed mb-8 italic">
                    The Sports room functions under the careful supervision of our Physical Director, 
                    ensuring professional conduct and systematic equipment maintenance.
                  </p>
                  <div className="inline-flex items-center gap-3 py-3 px-6 bg-white/10 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-primary-dark transition-all">
                     Open for All Departments <ArrowRight size={16} />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Achievement Block */}
      <section className="py-24 bg-slate-50">
         <div className="container mx-auto px-4">
            <div className="p-16 bg-white rounded-[4rem] shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto group hover:border-primary transition-colors">
               <div className="w-24 h-24 bg-primary/5 rounded-[2rem] flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <Trophy size={48} />
               </div>
               <div className="space-y-4">
                  <h4 className="text-3xl font-black text-primary-dark uppercase italic tracking-tight">Institutional Pride</h4>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed italic">
                    Our students have consistently brought home honors in indoor tournaments, 
                    leveraging this facility for systematic practice and tactical refinement.
                  </p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
