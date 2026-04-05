"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { 
  Monitor, 
  Phone, 
  Droplets, 
  Car, 
  Users, 
  CreditCard, 
  Video, 
  Dumbbell, 
  Mail,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building
} from "lucide-react";

interface Facility {
  title: string;
  description: string;
  icon: any;
}

const UTILITIES: Facility[] = [
  { title: "Digital Integration", description: "High-speed computer and internet connectivity across all institutional departments.", icon: Monitor },
  { title: "Smart Intercom", description: "Quick and easy inter-departmental communication via seamless intercom connectivity.", icon: Phone },
  { title: "Mineral Water", description: "Certified drinking mineral water dispensers installed on every floor for students and staff.", icon: Droplets },
  { title: "Campus Parking", description: "Spacious and dedicated parking facilities for vehicles of both students and faculty.", icon: Car },
];

const AMENITIES: Facility[] = [
  { title: "Board Room", description: "Premium executive venue designed for high-level institutional meetings and guest hospitality.", icon: Building },
  { title: "On-Campus ATM", description: "Secure on-campus money transactions and banking services for total student convenience.", icon: CreditCard },
  { title: "Campus Gym", description: "Equipped fitness center empowering students and staff to build healthy training habits.", icon: Dumbbell },
  { title: "Postal Services", description: "On-site post office providing delivery services and essential postal benefits.", icon: Mail },
];

export default function OtherFacilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Campus Infrastructure & Utilities"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Other Facilities" }
        ]}
        description="Our campus ecosystem is designed to provide holistic support, combining high-tech security with essential utilities to ensure a comfortable academic journey."
      />

      {/* Security Focus Section */}
      <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 p-24 text-white/5 pointer-events-none">
            <Video size={180} />
         </div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl space-y-8">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full font-black text-xs uppercase tracking-widest border border-emerald-500/30">
                  <ShieldCheck size={14} /> Safety First Protocols
               </div>
               <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight italic">
                 24-Hour Surveillance <br /> & Monitoring.
               </h2>
               <p className="text-white/60 font-medium text-lg leading-relaxed italic">
                 The entire campus is under constant 24-hour surveillance through a sophisticated network of CCTV cameras, 
                 ensuring a secure environment for every member of our academic community.
               </p>
            </div>
         </div>
      </section>

      {/* Digital & Utility Core */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
               
               {/* Digital Row */}
               <div className="space-y-12">
                  <h3 className="text-3xl font-black text-primary uppercase tracking-tight flex items-center gap-4 italic">
                    <Zap className="text-secondary" /> Connected Campus
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {UTILITIES.map((fac, i) => (
                       <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col group hover:bg-primary transition-all duration-500 hover:-translate-y-2">
                          <div className="w-14 h-14 rounded-2xl bg-white text-primary group-hover:text-secondary shadow-sm flex items-center justify-center mb-6 transition-colors">
                             <fac.icon size={28} />
                          </div>
                          <h4 className="text-lg font-black text-primary-dark mb-4 uppercase group-hover:text-white transition-colors">{fac.title}</h4>
                          <p className="text-xs font-bold text-slate-500 leading-relaxed group-hover:text-white/60 transition-colors uppercase italic">{fac.description}</p>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Amenities Row */}
               <div className="space-y-12">
                  <h3 className="text-3xl font-black text-primary uppercase tracking-tight flex items-center gap-4 italic">
                    <CheckCircle2 className="text-secondary" /> Premier Amenities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {AMENITIES.map((fac, i) => (
                       <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col group hover:bg-primary transition-all duration-500 hover:-translate-y-2">
                          <div className="w-14 h-14 rounded-2xl bg-white text-primary group-hover:text-secondary shadow-sm flex items-center justify-center mb-6 transition-colors">
                             <fac.icon size={28} />
                          </div>
                          <h4 className="text-lg font-black text-primary-dark mb-4 uppercase group-hover:text-white transition-colors">{fac.title}</h4>
                          <p className="text-xs font-bold text-slate-500 leading-relaxed group-hover:text-white/60 transition-colors uppercase italic">{fac.description}</p>
                       </div>
                     ))}
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Emergency Focus Block */}
      <section className="py-24 bg-slate-50">
         <div className="container mx-auto px-4">
            <div className="p-16 bg-white rounded-[4.5rem] shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-16 max-w-5xl mx-auto group hover:border-primary-dark transition-all duration-700">
               <div className="w-24 h-24 bg-primary-dark text-secondary rounded-[2.5rem] flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                  <Phone size={48} />
               </div>
               <div className="space-y-6">
                  <h4 className="text-3xl font-black text-primary-dark uppercase italic tracking-tight">Emergency Public Telephone</h4>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed italic">
                    Acknowledging the campus ban on mobile phones, we maintain a public telephone facility accessible 
                    to all students for essential emergency communication.
                  </p>
                  <div className="inline-flex items-center gap-3 py-3 px-6 bg-primary/5 rounded-full font-black text-[10px] uppercase tracking-widest text-primary-dark group-hover:bg-primary-dark group-hover:text-white transition-colors">
                     Accessible to All Students <ArrowRight size={16} />
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
