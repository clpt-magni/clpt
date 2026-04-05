"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Projector, 
  Tv, 
  Youtube, 
  Mic2, 
  Cast, 
  Volume2, 
  CheckCircle2, 
  Sparkles
} from "lucide-react";

const FACILITIES = [
  { 
    title: "LCD Projectors", 
    desc: "Each classroom is equipped with high-resolution LCD projectors for immersive visual learning.",
    icon: Projector
  },
  { 
    title: "Interactive Smart Boards", 
    desc: "Digital touch-enabled interfaces that turn traditional lectures into collaborative sessions.",
    icon: Cast
  },
  { 
    title: "Advanced Audio Systems", 
    desc: "Professional-grade wireless microphones and surround sound for clear communication in large halls.",
    icon: Volume2
  },
  { 
    title: "Video Streaming Units", 
    desc: "Ready-to-use broadcasting tools for digital webinars and global guest lectures.",
    icon: Youtube
  },
];

export default function AudioVisualPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Audio-Visual Facility"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Audio-Visual" }
        ]}
        description="Empowering education through modern digital learning aids. Our campus integrates advanced audio-visual technology to make teaching more effective and learning more interactive."
      />

      {/* Hero Section with Legacy Banner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-primary-dark rounded-full font-black text-xs uppercase tracking-widest">
                <Sparkles size={16} /> Digital Excellence
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight uppercase tracking-tight">
                Beyond Traditional <br /> Textbooks.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                <p>
                  The college has all modern learning facilities including LCD Projectors and OHP units. 
                  Audio-visual aids are deeply integrated into each classroom and department to ensure 
                  that teaching is as effective and engaging as possible.
                </p>
                <p>
                  We believe that learning is undoubtedly more effective through visual interactive 
                  materials. While traditional textbooks continue to be a major educational resource, 
                  videos and digital LCD presentations are fast becoming the primary alternative 
                  learning tools for the modern pharmacy professional.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                 {[
                   "100% Digital Classrooms",
                   "High-Resolution Projectors",
                   "Interactive Learning Tools",
                   "Effective Teaching Aids"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-primary-dark font-bold">
                     <CheckCircle2 size={20} className="text-secondary" /> {item}
                   </div>
                 ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
                
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                   <img 
                      src="/images/resources/audio-visual/av-head.jpg" 
                      alt="Audio Visual Concept" 
                      className="w-full h-auto"
                   />
                </div>
                
                <div className="absolute -bottom-12 -right-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-xs hidden md:block">
                  <div className="flex gap-4 items-center">
                     <div className="p-3 bg-primary text-white rounded-2xl">
                        <Projector size={24} />
                     </div>
                     <div>
                       <p className="text-sm font-black text-primary-dark uppercase">Digital Ready</p>
                       <p className="text-xs text-slate-500 font-bold">Smart equipment in every hall.</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-black text-primary uppercase tracking-tight mb-4">Core Visual Infrastructure</h3>
            <p className="text-slate-500 font-medium">Our facilities are equipped with the latest hardware to support a variety of pedagogical methods.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FACILITIES.map((fac, idx) => (
              <Card key={idx} className="border-none shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden rounded-[2rem]">
                <CardContent className="p-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                    <fac.icon size={36} />
                  </div>
                  <h4 className="text-xl font-black text-primary-dark mb-4 uppercase">{fac.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{fac.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual documentation area */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
           <div className="rounded-[3rem] overflow-hidden border-4 border-slate-50 shadow-inner relative group">
              <img 
                src="/images/resources/audio-visual/audio.jpg" 
                alt="Audio Visual Lab"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-12">
                 <p className="text-white text-2xl font-black uppercase tracking-widest">Advanced Learning Environment</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
