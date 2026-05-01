"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  Dumbbell,
  HeartPulse,
  Activity,
  Users,
  ArrowRight,
  Sparkles,
  Trophy
} from "lucide-react";

const FEATURES = [
  { label: "Facility Type", value: "Indoor", icon: Dumbbell },
  { label: "Available Equipment", value: "Cardio & Strength", icon: Activity },
  { label: "Wellness Hub", value: "Open Daily", icon: HeartPulse },
  { label: "Environment", value: "Safe & Inclusive", icon: Users },
];

export default function GymnasiumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Institutional Gymnasium"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Gymnasium" }
        ]}
        description="A well-equipped indoor and outdoor gymnasium that provides a safe, inclusive, and dynamic environment for fitness, sports, and overall physical development."
      />

      {/* Hero Showcase */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Descriptive Content */}
            <div className="lg:col-span-6 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full font-black text-xs tracking-widest border border-primary/10">
                  Health & Fitness
                </div>
                <h2 className="text-4xl font-black text-primary-dark tracking-tight leading-tight">
                  Build Strength. <br /> Foster Wellness.
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed">
                  <p>
                    At CLPT, we believe in the physical well-being of our students. Our gymnasium is equipped with state-of-the-art fitness equipment to support your health and fitness goals. From advanced cardio machines to comprehensive strength training equipment, we have everything you need for a complete workout.
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
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" alt="Gymnasium View" className="w-full h-auto transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex items-end">
                  <p className="text-white text-xl font-black tracking-tight">Modern Fitness Equipment</p>
                </div>
              </div>

              {/* Tech Details Card */}
              <div className="p-10 bg-primary-dark text-white rounded-[3rem] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 text-secondary/5 pointer-events-none">
                  <Trophy size={120} />
                </div>
                <h4 className="text-xl font-black text-secondary mb-6 flex items-center gap-2">
                  <Sparkles size={20} /> Holistic Wellness
                </h4>
                <p className="text-white/60 font-medium text-sm leading-relaxed mb-8">
                  Dedicated spaces for both intensive weight training and cardiovascular health. Supervised by trained instructors to ensure a safe and motivating environment for everyone.
                </p>
                <div className="inline-flex items-center gap-3 py-3 px-6 bg-white/10 rounded-full font-black text-xs tracking-widest hover:bg-white hover:text-primary-dark transition-colors">
                  Open for all Students & Staff <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
