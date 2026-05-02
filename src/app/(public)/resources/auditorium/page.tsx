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
  { label: "Seating Capacity", value: "1000+ Attendees", icon: Users },
  { label: "Total Area", value: "1752 sq. m", icon: Maximize2 },
  { label: "Projection", value: "4K Laser Projector", icon: Tv },
  { label: "Audio", value: "Dolby Atmos Surround", icon: Mic2 },
];

export default function AuditoriumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Institutional Auditorium"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Auditorium" }
        ]}
        description="Modern auditorium equipped with high-defintion audio and video facilities for national and international conferences, workshops & Student Activities."
      />

      {/* Hero Showcase */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Descriptive Content */}
            <div className="lg:col-span-6 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full font-black text-xs tracking-widest border border-primary/10">
                  Conferences & Events
                </div>
                <h2 className="text-4xl font-black text-primary-dark tracking-tight leading-tight">
                  A Grand Venue for <br /> Landmark Events.
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed">
                  <p>
                    Our state-of-the-art auditorium serves as the premier venue for intellectual discourse and professional engagement. Designed to host national and international conferences, symposia, guest lectures, and major student events, it combines cutting-edge technology with architectural excellence.
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
                <img src="https://images.unsplash.com/photo-1475721027785-f74dea996949?auto=format&fit=crop&q=80&w=800" alt="Auditorium View" className="w-full h-auto transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex items-end">
                  <p className="text-white text-xl font-black tracking-tight">Premium Acoustics & Lighting</p>
                </div>
              </div>

              {/* Tech Details Card */}
              <div className="p-10 bg-primary-dark text-white rounded-[3rem] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 text-secondary/5 pointer-events-none">
                  <Cpu size={120} />
                </div>
                <h4 className="text-xl font-black text-secondary mb-6 flex items-center gap-2">
                  <Sparkles size={20} /> Advanced A/V Systems
                </h4>
                <p className="text-white/60 font-medium text-sm leading-relaxed mb-8">
                  Equipped with high-definition 4K laser projection, immersive Dolby Atmos surround sound, and professional-grade lighting rigs, ensuring an unforgettable experience for large audiences.
                </p>
                <div className="inline-flex items-center gap-3 py-3 px-6 bg-white/10 rounded-full font-black text-xs tracking-widest hover:bg-white hover:text-primary-dark transition-colors">
                  Facility Managed by Events Committee <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
