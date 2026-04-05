"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { 
  Building2, 
  Microscope, 
  GraduationCap, 
  ArrowRight,
  ShieldCheck,
  Zap,
  BookOpen,
  Monitor
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const RESOURCE_CATEGORIES = [
  {
    title: "Campus & Infrastructure",
    description: "Modern architectural facilities including air-conditioned seminar halls, hostels, and recreational spaces.",
    icon: Building2,
    href: "/resources/infrastructure",
    color: "from-blue-500/20 to-indigo-500/20",
    features: ["Seminar Hall", "Hostels", "Canteen", "Play Ground", "Sports Room"]
  },
  {
    title: "Scientific & Research",
    description: "Advanced laboratory ecosystems, CPCSEA approved animal house, and specialized drug research centers.",
    icon: Microscope,
    href: "/resources/labs",
    color: "from-emerald-500/20 to-teal-500/20",
    features: ["Specialized Labs", "Animal House", "Drug Museum", "Medicinal Garden"]
  },
  {
    title: "Academic & Services",
    description: "Digital learning hubs, comprehensive library services, and high-tech language laboratories.",
    icon: GraduationCap,
    href: "/resources/library",
    color: "from-amber-500/20 to-orange-500/20",
    features: ["Digital Library", "Computer Lab", "Audio-Visual Hall", "Career Support"]
  }
];

export default function ResourcesGateway() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <PageHeader
        title="Institutional Resources"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" }
        ]}
        description="A world-class academic environment designed for pharmaceutical mastery, combining state-of-the-art infrastructure with advanced research ecosystems."
      />

      {/* Main Categories Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {RESOURCE_CATEGORIES.map((cat, i) => (
              <div key={i} className="group relative bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col items-start overflow-hidden hover:-translate-y-2">
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${cat.color} blur-[60px] translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="w-16 h-16 rounded-2xl bg-slate-50 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center mb-8 transition-all duration-500 shadow-inner group-hover:shadow-lg">
                  <cat.icon size={32} />
                </div>

                <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-1">
                  {cat.description}
                </p>

                <div className="space-y-3 mb-10 w-full">
                  {cat.features.slice(0, 4).map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                      <Zap size={12} className="text-secondary" /> {f}
                    </div>
                  ))}
                </div>

                <Link href={cat.href} className="w-full">
                  <Button className="w-full py-7 bg-slate-50 text-slate-900 font-black uppercase tracking-widest text-[10px] rounded-2xl border-none hover:bg-primary hover:text-white transition-all shadow-sm group-hover:shadow-lg active:scale-95">
                    Explore Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sub-Resources Feed */}
      <section className="py-24 bg-primary-dark relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 translate-x-1/2" />
         <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 px-4">
               <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-secondary rounded-full font-black text-[10px] uppercase tracking-widest border border-white/10">
                     Quick Access Gallery
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight italic">
                    Specialized <br /> Facilities.
                  </h2>
               </div>
               <Link href="/resources/infrastructure">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-primary-dark font-black uppercase tracking-widest text-[10px] py-6 px-10 rounded-full italic transition-all">
                    View Overall Map <ArrowRight size={16} className="ml-2" />
                  </Button>
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
               {[
                 { label: "Drug Museum", href: "/resources/drug-museum", icon: BookOpen },
                 { label: "Hostel Wings", href: "/resources/hostel", icon: Building2 },
                 { label: "Computer Hub", href: "/resources/computer-lab", icon: Monitor },
                 { label: "Sports Room", href: "/resources/sports-room", icon: Zap }
               ].map((res, i) => (
                 <Link key={i} href={res.href} className="group">
                    <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white hover:border-white transition-all duration-500 overflow-hidden relative">
                       <res.icon size={25} className="text-secondary group-hover:text-primary transition-colors mb-4" />
                       <h4 className="text-sm font-black text-white group-hover:text-primary-dark uppercase tracking-widest transition-colors">{res.label}</h4>
                    </div>
                 </Link>
               ))}
            </div>
         </div>
      </section>

      {/* Global Safety & Support Strip */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto p-12 md:p-20 bg-slate-50 rounded-[4rem] border border-slate-100 flex flex-col md:flex-row items-center gap-12 group hover:border-primary transition-colors duration-500 shadow-sm hover:shadow-xl">
               <div className="w-24 h-24 bg-primary text-white rounded-[2rem] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <ShieldCheck size={48} />
               </div>
               <div className="space-y-4">
                  <h4 className="text-3xl font-black text-primary-dark uppercase italic tracking-tight">Institutional Excellence</h4>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed italic max-w-2xl">
                    Our facilities under go regular quality audits and are maintained to international safety standards, 
                    ensuring that every resource contributes meaningfully to student success.
                  </p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
