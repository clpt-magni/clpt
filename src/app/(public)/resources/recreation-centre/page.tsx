"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Coffee, 
  Users, 
  Smile, 
  Gamepad2, 
  Sun,
  Laptop,
  CheckCircle2
} from "lucide-react";

const AMENITIES = [
  { label: "Relaxation Zones", icon: Coffee },
  { label: "Group Study Areas", icon: Users },
  { label: "Indoor Leisure Aids", icon: Gamepad2 },
  { label: "Climate Controlled", icon: Sun },
];

export default function RecreationCentrePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Student Recreation Centre"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Recreation Centre" }
        ]}
        description="A vibrant social hub designed for student relaxation, interaction, and creative collaboration during free hours."
      />

      {/* Showcase Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="space-y-10 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary-dark rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                   Student Life Excellence
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight leading-tight">
                  The Heart of <br /> Student Life.
                </h2>
                <p className="text-xl text-slate-600 font-medium leading-relaxed">
                  The college features a dedicated recreation centre within the campus, which has 
                  become the most favourite hangout for students during their non-academic hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {AMENITIES.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="p-3 bg-white text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                       <item.icon size={24} />
                    </div>
                    <span className="font-bold text-slate-700 uppercase tracking-wide text-sm">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-2 rounded-full shrink-0">
                    <Smile className="text-primary-dark" size={20} />
                  </div>
                  <div>
                    <p className="text-primary-dark font-black uppercase text-sm mb-1">Empowering Social Growth</p>
                    <p className="text-slate-500 font-medium">We believe that a balanced academic life requires spaces where students can unwind and build meaningful peer connections.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Decorative blobs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl -z-10 scale-150" />
                
                <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-100 relative group">
                  <img 
                    src="/images/resources/recreation-centre/sr-1.jpg" 
                    alt="Student Recreation Centre" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* Floating Stats */}
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-50 hidden md:block animate-in slide-in-from-bottom-8 duration-1000">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                       <p className="text-4xl font-black text-primary">100%</p>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Free Access</p>
                    </div>
                    <div className="w-px h-12 bg-slate-100" />
                    <div className="text-center">
                       <p className="text-4xl font-black text-primary">Integrated</p>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Campus Hub</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 -skew-x-12 translate-x-1/3 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Fostering a Vibrant Campus Culture</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
               {[
                 { title: "Favorite Hangout", desc: "Most sought after spot for downtime interaction." },
                 { title: "Inclusive Space", desc: "Designed for all students of Chalapathi Institute." },
                 { title: "Creative Zone", desc: "Perfect for informal student project discussions." }
               ].map((item, i) => (
                 <div key={i} className="text-center space-y-4">
                   <div className="inline-block p-4 bg-white/10 rounded-2xl mb-2 backdrop-blur-md">
                      <CheckCircle2 className="text-secondary" size={32} />
                   </div>
                   <h4 className="text-xl font-bold uppercase">{item.title}</h4>
                   <p className="text-white/60 text-sm font-medium">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
