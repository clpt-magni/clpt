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

      {/* Time Schedule Sheet */}
      <section className="py-16 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-dark uppercase tracking-tight leading-tight">
              Gymnasium Time Schedule
            </h2>
            <div className="h-1.5 w-32 bg-primary mx-auto my-6 rounded-full" />
            <p className="text-lg font-medium text-slate-500 leading-relaxed italic">
              Allocated slots for Day Scholars and Hostellers across both categories.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-slate-100 bg-slate-50">
                    <th className="py-4 px-6 text-xs font-black uppercase text-primary-dark tracking-widest">Category</th>
                    <th className="py-4 px-6 text-xs font-black uppercase text-primary-dark tracking-widest">Type</th>
                    <th className="py-4 px-6 text-xs font-black uppercase text-primary-dark tracking-widest">Morning Session</th>
                    <th className="py-4 px-6 text-xs font-black uppercase text-primary-dark tracking-widest">Evening Session</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-5 px-6 font-black text-slate-700">Day Scholars</td>
                    <td className="py-5 px-6 text-slate-600 font-bold">Girls</td>
                    <td className="py-5 px-6 text-slate-500">06:00 AM - 07:30 AM</td>
                    <td className="py-5 px-6 text-slate-500">04:30 PM - 05:45 PM</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-5 px-6 font-black text-slate-700">Day Scholars</td>
                    <td className="py-5 px-6 text-slate-600 font-bold">Boys</td>
                    <td className="py-5 px-6 text-slate-500">07:30 AM - 09:00 AM</td>
                    <td className="py-5 px-6 text-slate-500">05:45 PM - 07:00 PM</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-5 px-6 font-black text-slate-700">Hostellers</td>
                    <td className="py-5 px-6 text-slate-600 font-bold">Girls</td>
                    <td className="py-5 px-6 text-slate-500">05:30 AM - 06:45 AM</td>
                    <td className="py-5 px-6 text-slate-500">04:30 PM - 06:00 PM</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-5 px-6 font-black text-slate-700">Hostellers</td>
                    <td className="py-5 px-6 text-slate-600 font-bold">Boys</td>
                    <td className="py-5 px-6 text-slate-500">06:45 AM - 08:30 AM</td>
                    <td className="py-5 px-6 text-slate-500">06:00 PM - 07:45 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
