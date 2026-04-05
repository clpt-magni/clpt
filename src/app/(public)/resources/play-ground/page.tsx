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
  Monitor
} from "lucide-react";

const SPORTS = [
  { name: "Volleyball", icon: Zap },
  { name: "Shuttle Badminton", icon: Target },
  { name: "Throw Ball", icon: Users },
  { name: "Tennicoit", icon: Trophy },
];

export default function PlayGroundPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Campus Athletics: Play Ground"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Play Ground" }
        ]}
        description="Our spacious and attractive outdoor athletic facility provides a dynamic arena for students to excel in team sports, fitness, and cross-departmental competitions."
      />

      {/* Athletic Excellence Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Descriptive Content */}
            <div className="lg:col-span-12 lg:text-center space-y-12 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                   Physical Wellness & Spirit
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-primary-dark uppercase tracking-tight leading-tight">
                  A Field for Champions.
                </h2>
                <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
                  The college maintains a spacious and attractive play area for boys and girls. 
                  Designed for multi-sport versatility, it fosters a competitive spirit and ensures 
                  holistic physical development for our student community.
                </p>
              </div>

              {/* Sports Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 {SPORTS.map((sport, i) => (
                   <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col items-center group hover:bg-primary-dark transition-all duration-500 hover:-translate-y-2 shadow-sm">
                      <div className="bg-white p-4 rounded-2xl text-primary group-hover:text-secondary shadow-sm transition-colors mb-6">
                        <sport.icon size={32} />
                      </div>
                      <p className="text-sm font-black text-primary-dark group-hover:text-white transition-colors uppercase tracking-widest">{sport.name}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Image Hero */}
              <div className="lg:col-span-8 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-100 group relative">
                 <img src="/images/resources/play-ground/play-1.jpg" alt="Athletic Court View" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-12 flex items-end">
                    <p className="text-white text-2xl font-black uppercase tracking-tight">Vibrant Campus Life</p>
                 </div>
              </div>

              {/* Utility Card */}
              <div className="lg:col-span-4 p-12 bg-primary-dark text-white rounded-[4rem] shadow-xl relative overflow-hidden flex flex-col justify-center">
                 <div className="absolute top-0 right-0 p-12 text-white/5 pointer-events-none">
                    <Sparkles size={140} />
                 </div>
                 <h4 className="text-2xl font-black text-secondary uppercase mb-6 flex items-center gap-3">
                   <ChevronRight size={24} /> Arena Quality
                 </h4>
                 <p className="text-white/60 font-medium text-lg leading-relaxed mb-10 italic relative z-10">
                   Our grounds are systematically maintained by the physical education department, ensuring a safe and premium playing surface for all seasons.
                 </p>
                 <div className="inline-flex items-center gap-4 py-4 px-8 bg-white/10 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-primary-dark transition-all relative z-10">
                    Host Annual Athletic Meet <ArrowRight size={20} />
                 </div>
              </div>

           </div>
        </div>
      </section>
    </div>
  );
}
