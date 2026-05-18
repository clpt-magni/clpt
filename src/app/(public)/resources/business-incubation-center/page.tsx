"use client";

import React from "react";
import ResourceGallery from "@/components/resources/ResourceGallery";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  Rocket,
  ShieldCheck,
  FlaskConical,
  Users,
  Building,
  Sparkles,
  ArrowRight,
  Briefcase,
  Lightbulb
} from "lucide-react";

const FEATURES = [
  { label: "Supported By", value: "Ministry of MSME", icon: Building },
  { label: "Focus Area", value: "Herbal Formulations", icon: FlaskConical },
  { label: "Incubatees", value: "Students, Staff & Alumni", icon: Users },
  { label: "Primary Goal", value: "Startup & IP Creation", icon: Rocket },
];

const VALUES = [
  {
    title: "MSME Center",
    desc: "A fully supported Business Incubation Center recognized by the Ministry of MSME, Govt of India.",
    icon: Building
  },
  {
    title: "Herbal Formulations",
    desc: "Fosters the development of cost-effective pharmaceutical herbal formulations with minimal side effects.",
    icon: FlaskConical
  },
  {
    title: "Startup Support",
    desc: "Facilitates incubation opportunities for students and staff to launch innovative healthcare and pharma startups.",
    icon: Briefcase
  }
];

export default function BusinessIncubationCenterPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="Business Incubation Center"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Business Incubation Center" }
        ]}
        description="A specialized center recognized by the Ministry of MSME, providing infrastructure and technical support for startups and herbal formulation research."
      />

      {/* Main Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Content Sidebar */}
            <div className="lg:col-span-6 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                  Innovation & Entrepreneurship
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight leading-tight">
                  Incubating Ideas. <br /> Launching Startups.
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed italic">
                  <p>
                    The Business Incubation Center at CLPT acts as a seedbed for visionary entrepreneurs. By partnering with the Ministry of MSME, we provide complete technical, legal, and commercial assistance to transform innovative ideas into viable startups.
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
                sectionKey="businessIncubationCenter"
                defaultMainImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
                defaultGalleryImages={[]}
                mainImageAlt="Business Incubation Center View"
              />

              {/* Utility Card */}
              <div className="p-10 bg-primary-dark text-white rounded-[3rem] shadow-xl relative overflow-hidden flex flex-col justify-center min-h-[220px]">
                <div className="absolute top-0 right-0 p-10 text-white/5 pointer-events-none">
                  <Lightbulb size={130} />
                </div>
                <h4 className="text-xl font-black text-secondary uppercase mb-4 flex items-center gap-2">
                  <Sparkles size={22} className="text-secondary animate-pulse" /> Entrepreneurial Vision
                </h4>
                <p className="text-white/70 font-medium text-sm leading-relaxed mb-6">
                  Assisting young founders with proof-of-concept testing, prototyping, patent applications, and initial fundraising strategies.
                </p>
                <div className="inline-flex items-center gap-3 py-3 px-6 bg-white/10 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-primary-dark transition-all relative z-10 w-fit cursor-pointer">
                  Explore Incubator <ArrowRight size={16} />
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
              Our Core Incubation Values
            </h2>
            <div className="h-1.5 w-32 bg-primary mx-auto my-6 rounded-full" />
            <p className="text-lg font-medium text-slate-500 leading-relaxed italic">
              Empowering innovators to bring cutting-edge herbal and pharmaceutical formulations to market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {VALUES.map((val, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl hover:bg-primary-dark transition-all duration-500 hover:-translate-y-2 group flex flex-col items-start justify-between min-h-[300px]">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-primary/5 group-hover:bg-white/10 rounded-2xl flex items-center justify-center text-primary group-hover:text-secondary transition-all duration-500 shadow-inner">
                    <val.icon size={32} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-black text-primary-dark group-hover:text-white transition-colors leading-tight uppercase tracking-tight">
                      {val.title}
                    </h3>
                    <p className="text-slate-500 group-hover:text-white/70 leading-relaxed text-sm font-medium italic transition-colors">
                      {val.desc}
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
