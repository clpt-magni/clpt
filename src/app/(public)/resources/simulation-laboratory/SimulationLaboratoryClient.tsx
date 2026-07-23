"use client";

import React from "react";
import ResourceGallery from "@/components/resources/ResourceGallery";
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
  Users
} from "lucide-react";

const FEATURES = [
  { label: "Laboratory Type", value: "Clinical Simulation", icon: Activity },
  { label: "Available Tools", value: "Smart Boards & Software", icon: Laptop },
  { label: "Emergency Prep", value: "Mannequins", icon: Users },
  { label: "Primary Audience", value: "Students & Researchers", icon: Stethoscope },
];

const MODULES = [
  {
    title: "Hands-On Training",
    desc: "Equipped with training instruments that provide real-world, hands-on learning experiences.",
    icon: Stethoscope
  },
  {
    title: "Clinical Parameter Measurement",
    desc: "Enables students to measure and interpret physiological clinical parameters using medical devices.",
    icon: Heart
  },
  {
    title: "Preclinical Pharmacology Simulation",
    desc: "Offers training in preclinical activities through pharmacology simulation software modules.",
    icon: Cpu
  },
  {
    title: "First Aid & Emergency Response",
    desc: "Facilitates practical skill development using medical mannequins for first aid and emergency response training.",
    icon: Activity
  },
  {
    title: "Interactive Smart Boards",
    desc: "Integrates touch-enabled Smart Boards for modern, technology-enabled, and interactive classroom learning.",
    icon: Monitor
  }
];

export default function SimulationLaboratoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Simulation Laboratory"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Simulation Laboratory" }
        ]}
        description="A facility providing experiential training, clinical parameter measurements, pharmacology simulation software, and emergency response tools."
      />

      {/* Main Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Content Sidebar */}
            <div className="lg:col-span-6 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                  Simulation & Medical Practice
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight leading-tight">
                  Simulate Care. <br /> Improve the Practice.
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed italic">
                  <p>
                    The Simulation Laboratory provides an exceptional environment for our students to improve their critical clinical and emergency skills before entering real-world hospital environments. With pharmacology simulation software and medical mannequins, our curriculum seamlessly integrates theory with immersive practical applications.
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
              <ResourceGallery
                sectionKey="simulationLab"
                defaultMainImage="https://images.unsplash.com/photo-1532187828452-b32053a65b8a?auto=format&fit=crop&q=80&w=800"
                defaultGalleryImages={[]}
                mainImageAlt="Simulation Laboratory View"
              />

              {/* Utility Card */}
              <div className="p-10 bg-primary-dark text-white rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col justify-center min-h-[220px]">
                <div className="absolute top-0 right-0 p-10 text-white/5 pointer-events-none">
                  <Award size={130} />
                </div>
                <h4 className="text-xl font-black text-secondary uppercase mb-4 flex items-center gap-2">
                  <Sparkles size={22} className="text-secondary animate-pulse" /> Skill Development
                </h4>
                <p className="text-white/70 font-medium text-sm leading-relaxed mb-6">
                  Providing modern interactive tools, high-fidelity mannequins, and touch-enabled Smart Boards to ensure a deeply interactive learning space.
                </p>
                <div className="inline-flex items-center gap-3 py-3 px-6 bg-white/10 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-primary-dark transition-all relative z-10 w-fit cursor-pointer">
                  Explore Lab Modules <ArrowRight size={16} />
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
              Core Simulation Modules
            </h2>
            <div className="h-1.5 w-32 bg-primary mx-auto my-6 rounded-full" />
            <p className="text-lg font-medium text-slate-500 leading-relaxed italic">
              Empowering healthcare professionals of tomorrow with essential clinical training.
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
