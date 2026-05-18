"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import ResourceGallery from "@/components/resources/ResourceGallery";
import {
  Dumbbell,
  HeartPulse,
  Activity,
  Users,
  Search,
  Clock,
  Sparkles,
  Trophy
} from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  { label: "Facility Type", value: "Indoor & Outdoor", icon: Dumbbell },
  { label: "Total Equipment", value: "25+ Specialized Units", icon: Activity },
  { label: "Wellness Hub", value: "Daily Sessions", icon: HeartPulse },
  { label: "Supervision", value: "Trained Instructors", icon: Users },
];

const EQUIPMENT = [
  { name: "Butterfly", spec: "75 Kg" },
  { name: "Latis and Rowing", spec: "75 Kg" },
  { name: "Leg Press", spec: "80 Kg" },
  { name: "Leg curl and Leg extension", spec: "60 Kg" },
  { name: "Bench Press", spec: "80 Kg" },
  { name: "Biceps", spec: "60 Kg" },
  { name: "Chinning", spec: "1 Unit" },
  { name: "Abdomen Board", spec: "1 Unit" },
  { name: "Hip Flexer", spec: "1 Unit" },
  { name: "Hyper Extension", spec: "1 Unit" },
  { name: "Twister", spec: "1 Unit" },
  { name: "Dumbbells", spec: "1 Kg, 2 Kg, 3 Kg, 4 Kg" },
  { name: "Multi Press Bench", spec: "1 Unit" },
  { name: "Barbells Curl rods", spec: "2 Units" },
  { name: "Straight rod", spec: "1 Unit" },
  { name: "Pull up bar", spec: "1 Unit" },
  { name: "Push up bars", spec: "4 Units" },
  { name: "Dumbbell rods", spec: "4 Units" },
  { name: "Gym rope", spec: "1 Unit" },
  { name: "Gym plates (1 Kg)", spec: "2 Units" },
  { name: "Gym plates (2 Kg)", spec: "6 Units" },
  { name: "Gym plates (2.5 Kg)", spec: "4 Units" },
  { name: "Gym plates (3 Kg)", spec: "6 Units" },
  { name: "Gym plates (5 Kg)", spec: "6 Units" },
  { name: "Gym plates (10 Kg)", spec: "4 Units" }
];

const FITNESS_SCHEDULES = [
  {
    category: "Boys Session",
    color: "from-blue-600 to-sky-500",
    textLight: "text-blue-100",
    textDark: "text-blue-900",
    bgLight: "bg-blue-50/50",
    slots: [
      { label: "Morning Session", time: "5:30 AM - 6:30 AM" },
      { label: "Evening Session", time: "6:30 PM - 7:30 PM" }
    ]
  },
  {
    category: "Girls Session",
    color: "from-rose-500 to-pink-500",
    textLight: "text-rose-100",
    textDark: "text-rose-900",
    bgLight: "bg-rose-50/50",
    slots: [
      { label: "Morning Session", time: "6:30 AM - 7:30 AM" },
      { label: "Evening Session", time: "5:30 PM - 6:30 PM" }
    ]
  }
];

export default function GymnasiumPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEquipment = EQUIPMENT.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-white font-roboto">
      <PageHeader
        title="Institutional Gymnasium"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Gymnasium" }
        ]}
        description="A well-equipped indoor and outdoor gymnasium that provides a safe, inclusive, and dynamic environment for fitness, sports, and overall physical development."
      />

      {/* Hero Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Descriptive Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full font-bold text-[10px] tracking-widest uppercase border border-primary/10">
                  Sports & Cultural Committee
                </span>
                <h2 className="text-3xl font-bold text-slate-800 tracking-tight leading-tight font-poppins">
                  Indoor & Outdoor Fitness Facilities
                </h2>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">
                  At CLPT, we believe physical well-being is vital for academic excellence. Our campus gymnasium offers professional strength training, cardio gear, and weighted accessories to help both students and staff maintain their physical goals in a safe, fully supervised environment.
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4">
                {FEATURES.map((feat, i) => (
                  <div key={i} className="p-6 bg-slate-50/50 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                    <feat.icon size={22} className="text-primary mb-3" />
                    <p className="text-[9px] font-black text-slate-400 tracking-wider uppercase mb-1 font-poppins">{feat.label}</p>
                    <p className="text-xs font-bold text-slate-700 font-poppins">{feat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Content */}
            <div className="lg:col-span-5 relative">
              <ResourceGallery
                sectionKey="gymnasium"
                defaultMainImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
                mainImageAlt="Institutional Gymnasium View"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Fitness Schedule Section */}
      <section className="py-16 bg-slate-50/50 border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl space-y-10">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 font-poppins">
              Daily Fitness Schedule
            </h3>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
              Allocated slots for boys and girls to ensure optimal training comfort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FITNESS_SCHEDULES.map((sched, idx) => (
              <div 
                key={idx}
                className={`bg-white rounded-3xl p-8 border border-slate-100 shadow-md relative overflow-hidden flex flex-col justify-between`}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${sched.color} flex items-center justify-center text-white shadow-md`}>
                      <Clock size={18} />
                    </div>
                    <span className="text-base font-bold text-slate-800 font-poppins">{sched.category}</span>
                  </div>

                  <div className="space-y-4">
                    {sched.slots.map((slot, sIdx) => (
                      <div key={sIdx} className={`p-4 ${sched.bgLight} rounded-xl border border-slate-100 flex items-center justify-between`}>
                        <span className="text-xs font-bold text-slate-600 font-poppins">{slot.label}</span>
                        <span className="text-xs font-black text-primary font-poppins">{slot.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Inventory Directory */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl space-y-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                 <div className="w-1 h-6 bg-primary rounded-full" />
                 <h3 className="text-xl font-bold text-primary-dark font-poppins uppercase tracking-wide">
                    Equipment Inventory Directory
                 </h3>
              </div>
              <p className="text-slate-400 text-xs font-semibold">
                Official indoor & outdoor apparatuses registered with the Sports & Cultural Committee
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium outline-none focus:ring-2 focus:ring-primary/20 transition-all font-poppins"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredEquipment.map((item, i) => (
              <div key={i} className="p-4 bg-slate-50/50 border border-slate-100 rounded-2xl flex items-center justify-between hover:border-primary/10 hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/5 text-primary flex items-center justify-center text-xs font-bold font-poppins shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-xs font-bold text-slate-700 truncate max-w-[160px] font-poppins">{item.name}</span>
                </div>
                <span className="text-[10px] font-black text-primary px-2.5 py-1 bg-white rounded-full border border-slate-100 shrink-0 font-poppins uppercase">
                  {item.spec}
                </span>
              </div>
            ))}
          </div>

          {filteredEquipment.length === 0 && (
            <div className="text-center p-12 bg-slate-50 rounded-2xl border border-slate-100 text-slate-400 text-sm font-medium italic">
              No matching equipment found.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
