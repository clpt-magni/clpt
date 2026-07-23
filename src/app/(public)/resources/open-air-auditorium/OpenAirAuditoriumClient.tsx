"use client";

import React from "react";
import ResourceGallery from "@/components/resources/ResourceGallery";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  Sun,
  Users,
  Music,
  Tent,
  ArrowRight,
  Sparkles,
  TreePine,
  Maximize2
} from "lucide-react";

const FEATURES = [
  { label: "Setting", value: "Open Amphitheater", icon: Tent },
  { label: "Seating Capacity", value: "1500+ Attendees", icon: Users },
  { label: "Total Area", value: "1299 sq. m", icon: Maximize2 },
  { label: "Activities", value: "Cultural & Sports", icon: Music },
];

export default function OpenAirAuditoriumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Open-Air Auditorium"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Open-Air Auditorium" }
        ]}
        description="Equipped with audio video facilities for student activities like national level sports and cultural meets, yoga & meditation, gatherings, functions and events."
      />

      {/* Hero Showcase */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Descriptive Content */}
            <div className="lg:col-span-6 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full font-black text-xs tracking-widest border border-primary/10">
                  Cultural & Community
                </div>
                <h2 className="text-4xl font-black text-primary-dark tracking-tight leading-tight">
                  A Serene Space for <br /> Grand Gatherings.
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed">
                  <p>
                    The Open-Air Auditorium at CLPT is a serene amphitheater designed for large gatherings and performances under the open sky. With its natural acoustics and professional stage setup, it provides an inspiring backdrop for cultural festivals, large-scale conferences, yoga & meditation sessions, and community events.
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
              <ResourceGallery
                sectionKey="openAirAuditorium"
                defaultMainImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800"
                mainImageAlt="Open-Air Auditorium View"
              />

                            {/* Tech Details Card */}
              <div className="p-10 bg-primary-dark text-white rounded-[3rem] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 text-secondary/5 pointer-events-none">
                  <Sun size={120} />
                </div>
                <h4 className="text-xl font-black text-secondary mb-6 flex items-center gap-2">
                  <Sparkles size={20} /> Vibrant Atmosphere
                </h4>
                <p className="text-white/60 font-medium text-sm leading-relaxed mb-8">
                  Perfectly suited for cultural fests and holistic health sessions, this space blends nature with professional event management facilities, including reliable power backup and dynamic stage lighting.
                </p>
                <div className="inline-flex items-center gap-3 py-3 px-6 bg-white/10 rounded-full font-black text-xs tracking-widest hover:bg-white hover:text-primary-dark transition-colors">
                  Available for Student Clubs <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
