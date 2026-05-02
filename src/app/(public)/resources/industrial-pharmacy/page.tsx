"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  Activity,
  Heart,
  Laptop,
  Cpu,
  Monitor,
  Sparkles,
  ArrowRight,
  Stethoscope,
  Award,
  Users,
  Settings,
  Briefcase
} from "lucide-react";

const FEATURES = [
  { label: "Facility Type", value: "Industrial Division", icon: Settings },
  { label: "Primary Focus", value: "Formulation Design", icon: Activity },
  { label: "Services", value: "Consultancy & Optimization", icon: Briefcase },
  { label: "Audience", value: "Industry & Academia", icon: Users },
];

const MODULES = [
  {
    title: "Advanced Formulation Design",
    desc: "Equipped with advanced equipment and machines for the modern design and development of pharmaceutical formulations.",
    icon: Settings
  },
  {
    title: "Hands-On Training",
    desc: "Provides hands-on training to students, researchers, industry professionals, and faculty members.",
    icon: Stethoscope
  },
  {
    title: "Consultancy Services",
    desc: "Supports formulation development and pharmaceutical process optimization consultancy for industrial partners.",
    icon: Briefcase
  }
];

export default function IndustrialPharmacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Industrial Pharmacy Division"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Industrial Pharmacy" }
        ]}
        description="Providing facilities for formulation design, professional training, and process optimization consultancy services."
      />

      {/* Main Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Content Sidebar */}
            <div className="lg:col-span-6 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                  Pharma Manufacturing & Training
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight leading-tight">
                  Modern Production. <br /> Maximum Efficiency.
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed italic">
                  <p>
                    The Industrial Pharmacy Division at CLPT stands as a bridge between academic learning and industry standards. Through the usage of formulation equipment, we expose our students to manufacturing protocols and offer professional testing services.
                  </p>
                </div>
              </div>

              {/* Grid with Specs */}
              <div className="grid grid-cols-2 gap-4">
                {FEATURES.map((feat, i) => (
                  <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-primary hover:text-white transition-all duration-500 shadow-sm hover:shadow-md hover:-translate-y-1">
                    <feat.icon size={32} className="text-primary group-hover:text-white mb-4 transition-colors" />
                    <p className="text-[10px] font-black text-slate-400 tracking-widest mb-1 group-hover:text-white/70 uppercase">
                      {feat.label}
                    </p>
                    <p className="text-sm font-black text-primary-dark group-hover:text-white transition-colors">
                      {feat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visuals Sidebar */}
            <div className="lg:col-span-6 space-y-8">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-100 group relative aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1579165466541-7183b6fbe954?auto=format&fit=crop&q=80&w=800"
                  alt="Industrial Pharmacy lab space"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex items-end">
                  <p className="text-white text-xl font-black uppercase tracking-tight">Formulation & Development</p>
                </div>
              </div>

              {/* Utility Card */}
              <div className="p-10 bg-primary-dark text-white rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col justify-center min-h-[220px]">
                <div className="absolute top-0 right-0 p-10 text-white/5 pointer-events-none">
                  <Award size={130} />
                </div>
                <h4 className="text-xl font-black text-secondary uppercase mb-4 flex items-center gap-2">
                  <Sparkles size={22} className="text-secondary animate-pulse" /> Advanced Skillsets
                </h4>
                <p className="text-white/70 font-medium text-sm leading-relaxed mb-6">
                  Supporting industrial partnerships, research breakthroughs, and modern drug processing techniques.
                </p>
                <div className="inline-flex items-center gap-3 py-3 px-6 bg-white/10 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-primary-dark transition-all relative z-10 w-fit cursor-pointer">
                  Explore Division <ArrowRight size={16} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Strategic Focus Areas */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-primary-dark uppercase tracking-tight leading-tight">
              Our Core Services
            </h2>
            <div className="h-1.5 w-32 bg-primary mx-auto my-6 rounded-full" />
            <p className="text-lg font-medium text-slate-500 leading-relaxed italic">
              Empowering future pharmaceutical professionals with elite formulation expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {MODULES.map((mod, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl hover:bg-primary-dark transition-all duration-500 hover:-translate-y-2 group flex flex-col items-start justify-between min-h-[300px]">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-primary/5 group-hover:bg-white/10 rounded-2xl flex items-center justify-center text-primary group-hover:text-secondary transition-all duration-500 shadow-inner">
                    <mod.icon size={32} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-black text-primary-dark group-hover:text-white transition-colors leading-tight uppercase tracking-tight">
                      {mod.title}
                    </h3>
                    <p className="text-slate-500 group-hover:text-white/70 leading-relaxed text-sm font-medium italic transition-colors">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
