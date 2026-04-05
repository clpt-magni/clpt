"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { 
  Coffee, 
  Utensils, 
  Clock, 
  Banknote, 
  ChevronRight,
  ShieldCheck,
  Zap,
  ArrowRight
} from "lucide-react";

const HIGHLIGHTS = [
  { label: "Operating Hours", value: "8:30 AM - 6:00 PM", icon: Clock },
  { label: "Pricing", value: "Subsidized Rates", icon: Banknote },
  { label: "Hygiene", value: "Certified Standards", icon: ShieldCheck },
  { label: "Service", value: "Fresh & Hot", icon: Zap },
];

export default function CanteenPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Institutional Canteen"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Canteen" }
        ]}
        description="A spacious and well-furnished culinary hub providing balanced, hygienic, and affordable meals and refreshments to our vibrant campus community."
      />

      {/* Culinary Showcase Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Descriptive Content */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                   Nourishment & Community
                </div>
                <h2 className="text-4xl font-black text-primary-dark uppercase tracking-tight leading-tight">
                  Fueling Your <br /> Academic Success.
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed">
                   <p>
                    Our well-furnished and spacious canteen functions as the heart of social and culinary life on campus. 
                    Meticulously designed to cater to the diverse nutritional needs of both students and faculty, 
                    it offers a rotating menu of meals and refreshments at subsidized rates.
                   </p>
                </div>
              </div>

              {/* Service Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {HIGHLIGHTS.map((item, i) => (
                   <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-primary-dark transition-all duration-500">
                      <div className="bg-white p-3 rounded-2xl text-primary group-hover:text-secondary shadow-sm transition-colors mb-4">
                        <item.icon size={24} />
                      </div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 group-hover:text-white/50">{item.label}</p>
                      <p className="text-xs font-black text-primary-dark group-hover:text-white transition-colors uppercase italic">{item.value}</p>
                   </div>
                 ))}
              </div>
            </div>

            {/* Timing & Menu Focus */}
            <div className="lg:col-span-5 space-y-8">
               <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-100 group relative">
                  <img src="/images/resources/canteen/canteen-head.jpg" alt="Canteen Dining View" className="w-full h-auto transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex items-end">
                     <p className="text-white text-xl font-black uppercase tracking-tight italic">Hygienic Dining Environment</p>
                  </div>
               </div>

               {/* Quick Info Card */}
               <div className="p-10 bg-primary-dark text-white rounded-[3rem] shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-10 text-white/5 pointer-events-none">
                    <Coffee size={120} />
                  </div>
                  <h4 className="text-xl font-black text-secondary uppercase mb-6 flex items-center gap-2">
                    <Clock size={20} /> Timings & Accessibility
                  </h4>
                  <p className="text-white/60 font-medium text-sm leading-relaxed mb-10 italic">
                    The canteen is open from 8:30 AM in the morning till 6:00 PM in the evening, 
                    providing consistent access to refreshments throughout the academic day.
                  </p>
                  <div className="inline-flex items-center gap-4 py-4 px-8 bg-secondary text-primary-dark rounded-full font-black text-xs uppercase tracking-widest hover:bg-white transition-colors">
                     View Menu & Specials <ArrowRight size={20} />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Stats Grid */}
      <section className="py-24 bg-slate-50">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
               <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100 space-y-6 group hover:border-primary transition-colors">
                  <div className="flex items-center gap-4">
                    <Utensils className="text-secondary" size={32} />
                    <h4 className="text-2xl font-black text-primary-dark uppercase italic tracking-tight">Student-First Pricing</h4>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed italic">
                    By subsidizing meal costs, we ensure that every student has access to high-quality, 
                    balanced nutrition without financial burden.
                  </p>
               </div>
               <div className="p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100 space-y-6 group hover:border-primary transition-colors">
                  <div className="flex items-center gap-4">
                    <ChevronRight className="text-secondary" size={32} />
                    <h4 className="text-2xl font-black text-primary-dark uppercase italic tracking-tight">Faculty & Guest Hub</h4>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed italic">
                    A dedicated space for faculty discussions and guest hospitality, maintaining a professional yet cozy atmosphere.
                  </p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
