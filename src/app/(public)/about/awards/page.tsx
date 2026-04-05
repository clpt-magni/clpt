"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Trophy, 
  Award, 
  Medal, 
  Star, 
  Users, 
  GraduationCap, 
  ExternalLink,
  Target,
  History,
  Sparkles
} from "lucide-react";

const AWARDS = [
  {
    title: "Alapati Jayasri Memorial Gold Medal",
    recipient: "V. Nishitha (B.Pharm Student)",
    info: "Received at 37th & 38th Convocation of Acharya Nagarjuna University on 20/08/2022.",
    image: "/images/awards/goldmedal.jpg",
    category: "Gold Medal"
  },
  {
    title: "Alapati Jayasree Memorial Award",
    recipient: "Ms.B.Shalini Krishna & Ms. Maganti Anusha",
    info: "Received at 35th & 36th Annual Convocation at Acharya Nagarjuna University.",
    image: "/images/awards/n2.jpg",
    category: "Gold Medal"
  },
  {
    title: "Certificate of Honour",
    recipient: "Dr. Rama Rao Nadendla",
    info: "Awarded by Sunpure Research Incubation Centre for scientific excellence.",
    image: "/images/awards/n1.jpg",
    category: "Faculty Excellence"
  },
  {
    title: "National Level Essay Writing - 3rd Prize",
    recipient: "P. Jeevani (B.Pharmacy-2004-08)",
    info: "Awarded by Dr. A.P.J. Abdul Kalam (16-8-2008) during IPASC Conference, Mumbai.",
    image: "/images/awards/1.jpg",
    category: "Innovation"
  },
  {
    title: "M.L. Khorana Memorial Award",
    recipient: "R. Rama Krishna",
    info: "Recognized for outstanding pharmaceutical research and academic merit.",
    image: "/images/awards/3.jpg",
    category: "National Award"
  },
  {
    title: "National Level Assay Competition - 1st Place",
    recipient: "Mr. S.S. Mani Kiran (Faculty)",
    info: "Secured first place in a prestigious national level technical competition.",
    image: "/images/awards/4.jpg",
    category: "Faculty Excellence"
  },
  {
    title: "J.B. Modi Award",
    recipient: "R. Rama Krishna",
    info: "Academic excellence and contribution to pharmaceutical sciences.",
    image: "/images/awards/5.jpg",
    category: "National Award"
  },
  {
    title: "Institutional Gold Medals (ANU)",
    recipient: "J. Nalini, R. Rama Krishna & M. Ushasree",
    info: "Multiple gold medals received during 33rd & 34th ANU Convocation.",
    image: "/images/awards/6.jpg",
    category: "Gold Medal"
  }
];

export default function AwardsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Awards & Honours"
        breadcrumbs={[
          { label: "About", href: "/about/chairman" },
          { label: "Awards" }
        ]}
        description="Celebrating the legacy of academic brilliance, research innovation, and competitive excellence that defines the Chalapathi community."
      />

      {/* Hero / Statistics */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            <div className="lg:w-1/2 space-y-12">
               <div className="space-y-6">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary-dark rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                    Legacy of Brilliance
                 </div>
                 <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tight leading-tight">Elite <br /> Recognition.</h2>
                 <p className="text-lg text-slate-600 font-medium leading-relaxed italic border-l-4 border-secondary pl-6">
                    "Our students and faculty continue to set global benchmarks in pharmaceutical education 
                    and research, earning prestigious accolades from national and international bodies."
                 </p>
               </div>

               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <p className="text-5xl font-black text-primary flex items-center gap-2">
                        <Sparkles className="text-secondary" /> 50+
                     </p>
                     <p className="text-xs font-black text-slate-400 uppercase tracking-widest">University Gold Medals</p>
                  </div>
                  <div className="space-y-2">
                     <p className="text-5xl font-black text-primary flex items-center gap-2">
                        <Trophy className="text-secondary" /> 10+
                     </p>
                     <p className="text-xs font-black text-slate-400 uppercase tracking-widest">National Research Awards</p>
                  </div>
               </div>
            </div>

            <div className="lg:w-1/2 w-full">
               <div className="rounded-[4rem] overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700 border-8 border-white">
                  <img src="/images/awards/banner.jpg" alt="Awards Ceremony" className="w-full h-auto" />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Awards Gallery */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
               <h3 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight">Hall of Fame</h3>
               <p className="text-slate-500 font-medium">Distinguished achievements that define our institutional history.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {AWARDS.map((award, i) => (
                 <div key={i} className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full group-hover:-translate-y-2">
                    <div className="aspect-[4/3] overflow-hidden relative">
                       <img 
                         src={award.image} 
                         alt={award.title} 
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                       />
                       <div className="absolute top-6 left-6">
                          <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-primary-dark font-black text-[10px] uppercase tracking-widest rounded-full shadow-lg">
                             {award.category}
                          </span>
                       </div>
                    </div>
                    
                    <CardContent className="p-10 flex flex-col grow justify-between">
                       <div className="space-y-4">
                          <div className="p-3 bg-primary/5 text-primary rounded-2xl w-fit">
                             <Medal size={24} />
                          </div>
                          <h4 className="text-xl font-black text-primary-dark uppercase leading-tight group-hover:text-primary transition-colors">{award.title}</h4>
                          <p className="font-extrabold text-secondary uppercase text-[10px] tracking-widest">{award.recipient}</p>
                          <p className="text-sm text-slate-500 font-medium leading-relaxed">{award.info}</p>
                       </div>
                       
                       <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between">
                          <div className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-slate-300 group-hover:text-primary transition-colors">
                             View details <ExternalLink size={14} />
                          </div>
                          <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-primary-dark group-hover:text-white transition-all">
                             <Trophy size={16} />
                          </div>
                       </div>
                    </CardContent>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Achievement Spotlight */}
      <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
         
         <div className="container mx-auto px-4 relative z-10">
            <div className="p-16 bg-white/5 rounded-[4rem] border border-white/5 backdrop-blur-xl flex flex-col lg:flex-row items-center gap-16">
               <div className="lg:w-1/3 flex justify-center">
                  <div className="w-48 h-48 bg-secondary rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                     <Target size={80} className="text-primary-dark" />
                  </div>
               </div>
               <div className="lg:w-2/3 space-y-8 text-center lg:text-left">
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Aiming for the <br /> National Ranks.</h3>
                  <p className="text-white/60 text-lg font-medium leading-relaxed max-w-2xl">
                     Our institutional vision is to consistently produce rank-holders and pioneers 
                     who lead the future of pharmacy through dedicated academic rigor and 
                     innovative problem-solving.
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                     <div className="flex items-center gap-3 px-8 py-4 bg-white/10 rounded-2xl border border-white/10">
                        <Users size={20} className="text-secondary" />
                        <span className="font-black uppercase text-xs tracking-widest">Active Community</span>
                     </div>
                     <div className="flex items-center gap-3 px-8 py-4 bg-white/10 rounded-2xl border border-white/10">
                        <History size={20} className="text-secondary" />
                        <span className="font-black uppercase text-xs tracking-widest">Rich History</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
