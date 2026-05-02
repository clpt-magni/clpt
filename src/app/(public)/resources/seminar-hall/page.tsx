"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  Mic2,
  Tv,
  Wind,
  Users,
  ArrowRight,
  Sparkles,
  Maximize2,
  Cpu
} from "lucide-react";

const FEATURES = [
  { label: "Seating Capacity", value: "200+ Persons", icon: Users },
  { label: "Total Area", value: "185 sq. m", icon: Maximize2 },
  { label: "Visuals", value: "High Definition Media", icon: Tv },
  { label: "Environment", value: "Air Conditioned", icon: Wind },
];

export default function SeminarHallPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Institutional Seminar Hall"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Seminar Hall" }
        ]}
        description="A premier venue for international conferences, technical presentations, and dynamic academic discussions equipped with state-of-the-art audio-visual technology."
      />

      {/* Hero Showcase */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Descriptive Content */}
            <div className="lg:col-span-6 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full font-black text-xs tracking-widest border border-primary/10">
                  Conferencing & Innovation
                </div>
                <h2 className="text-4xl font-black text-primary-dark tracking-tight leading-tight">
                  A Venue for <br /> Future Visionaries.
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed">
                  <p>
                    Our Seminar Hall serves as the central hub for intellectual exchange, technical workshops, and international conferences.
                    Designed to facilitate PowerPoint presentations and constant interactive discussions, it provides an environment
                    conducive to the highest levels of academic and professional engagement.
                  </p>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4">
                {FEATURES.map((feat, i) => (
                  <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-primary-dark transition-all duration-500">
                    <feat.icon size={28} className="text-primary group-hover:text-secondary mb-4 transition-colors" />
                    <p className="text-[10px] font-black text-slate-400 tracking-widest mb-1 group-hover:text-white/50">{feat.label}</p>
                    <p className="text-sm font-black text-primary-dark group-hover:text-white transition-colors">{feat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Content */}
            <div className="lg:col-span-6 space-y-8">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-100 group relative">
                <img src="/images/resources/seminar-hall/sh1.jpg" alt="Seminar Hall View" className="w-full h-auto transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex items-end">
                  <p className="text-white text-xl font-black tracking-tight">250 Capacity Venue</p>
                </div>
              </div>

              {/* Tech Details Card */}
              <div className="p-10 bg-primary-dark text-white rounded-[3rem] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 text-secondary/5 pointer-events-none">
                  <Cpu size={120} />
                </div>
                <h4 className="text-xl font-black text-secondary mb-6 flex items-center gap-2">
                  <Sparkles size={20} /> Smart Infrastructure
                </h4>
                <p className="text-white/60 font-medium text-sm leading-relaxed mb-8">
                  Equipped with the latest technological equipment and smart devices, the hall supports seamless
                  hybrid conferencing and high-definition visual outputs for all institutional events.
                </p>
                <div className="inline-flex items-center gap-3 py-3 px-6 bg-white/10 rounded-full font-black text-xs tracking-widest hover:bg-white hover:text-primary-dark transition-colors">
                  Facility Managed by Tech Wing <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exterior Showcase */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white">
            <img src="/images/resources/seminar-hall/sh2.jpg" alt="Main Hall Interior" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
