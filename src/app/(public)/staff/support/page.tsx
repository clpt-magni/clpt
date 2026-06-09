"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Briefcase, 
  BookOpen, 
  TrendingUp, 
  Globe, 
  Library, 
  Users, 
  Factory, 
  ShieldCheck, 
  Coins, 
  Zap, 
  Award, 
  GraduationCap,
  CheckCircle2,
  ChevronRight,
  Stethoscope
} from "lucide-react";

const STAFF_SUPPORT_INITIATIVES = [
  {
    title: "Minor Research Projects",
    desc: "Provision of institutional seed money to encourage faculty-led research and innovation.",
    icon: BookOpen,
    category: "Research"
  },
  {
    title: "Research Grants",
    desc: "Active support for writing proposals to Government funding bodies for major research grants.",
    icon: TrendingUp,
    category: "Research"
  },
  {
    title: "Conference Assistance",
    desc: "Financial assistance for faculty to participate in National and International conferences and workshops.",
    icon: Globe,
    category: "Professional"
  },
  {
    title: "Faculty Orientation",
    desc: "Regular training programmes and refresher courses to update and enhance domain knowledge.",
    icon: Users,
    category: "Professional"
  },
  {
    title: "Best Library Utilization",
    desc: "Recognition with 'Best Library Utilization Awards' for maximum engagement with library research resources.",
    icon: Library,
    category: "Recognition"
  },
  {
    title: "Industrial Training",
    desc: "Opportunities for faculty to undergo industrial training in advanced and emerging research areas.",
    icon: Factory,
    category: "Professional"
  },
  {
    title: "Personal Loans",
    desc: "Institutional financial support through personal loans to meet immediate faculty needs.",
    icon: Coins,
    category: "Welfare"
  },
  {
    title: "Comprehensive Insurance",
    desc: "Accidental insurance for all staff. Health insurance up to ₹1 Lakh for eligible faculty and non-teaching staff.",
    icon: Stethoscope,
    category: "Welfare"
  },
  {
    title: "Employees' Provident Fund",
    desc: "Mandatory EPF contributions for eligible faculty to ensure long-term financial security.",
    icon: ShieldCheck,
    category: "Welfare"
  },
  {
    title: "Technical Skill Upgradation",
    desc: "Specialized training for technical supporting staff in equipment handling and computer operations.",
    icon: Zap,
    category: "Technical"
  },
  {
    title: "Performance Incentives",
    desc: "Performance-based increments, incentives, and awards for both teaching and non-teaching staff.",
    icon: Award,
    category: "Recognition"
  },
  {
    title: "Higher Study Leave",
    desc: "Provision for study leaves to pursue higher studies, training courses, and specialized workshops.",
    icon: GraduationCap,
    category: "Academic"
  }
];

export default function StaffSupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Faculty & Staff Support"
        breadcrumbs={[
          { label: "Faculty", href: "/about/faculty" },
          { label: "Support Services" }
        ]}
        description="Nurturing a supportive professional ecosystem that prioritizes faculty welfare, academic freedom, and continuous career advancement."
      />

      {/* Intro Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary-dark rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                Institutional Welfare
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight">Empowering Our <br /> Academic Pillars</h2>
             <p className="text-lg text-slate-500 font-medium leading-relaxed italic">
                "We believe that institutional excellence is a direct result of faculty well-being. Our support 
                framework ensures that every member of our teaching and non-teaching staff has the resources 
                to thrive professionally and personally."
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {STAFF_SUPPORT_INITIATIVES.map((item, i) => (
               <div key={i} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-500 flex flex-col justify-between">
                  <div className="space-y-6">
                     <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12 group-hover:scale-110">
                        <item.icon size={28} />
                     </div>
                     <div className="space-y-2">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.category}</span>
                        <h4 className="text-lg font-black text-primary-dark uppercase leading-tight group-hover:text-primary transition-colors">{item.title}</h4>
                     </div>
                     <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-slate-200/50 flex items-center justify-between">
                     <div className="w-2 h-2 rounded-full bg-secondary group-hover:scale-150 transition-all" />
                     <div className="text-[10px] font-black text-primary-dark/40 uppercase tracking-widest group-hover:text-primary transition-colors">Faculty Resource</div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Welfare Impact section */}
      <section className="py-24 bg-primary-dark relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
         
         <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-10">
                  <div className="space-y-6">
                     <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">Security & <br /> Growth.</h3>
                     <p className="text-white/60 text-lg font-medium leading-relaxed">
                        Beyond career growth, we ensure the safety of our staff through robust accidental 
                        and health insurance coverage, coupled with financial stability through EPF and 
                        personal loan facilities.
                     </p>
                  </div>
                  <div className="flex flex-wrap gap-6">
                     <div className="px-10 py-5 bg-secondary text-primary-dark font-black tracking-widest uppercase text-xs rounded-2xl shadow-xl hover:scale-105 transition-all">
                        Finance Office
                     </div>
                     <div className="px-10 py-5 bg-white/10 text-white font-black tracking-widest uppercase text-xs rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all flex items-center gap-2">
                        Welfare Coordinator <ChevronRight size={16} />
                     </div>
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-8">
                  {[
                    { label: "Insurance Cover", count: "₹1L", sub: "Health" },
                    { label: "Faculty Grants", count: "Active", sub: "Research" },
                    { label: "EPF Support", count: "100%", sub: "Financial" },
                    { label: "Skill Training", count: "Annual", sub: "Technical" }
                  ].map((stat, i) => (
                    <div key={i} className="p-10 bg-white/5 rounded-[3rem] border border-white/5 backdrop-blur-sm space-y-4">
                       <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">{stat.sub}</p>
                       <p className="text-4xl font-black text-secondary">{stat.count}</p>
                       <p className="text-xs font-black text-white uppercase tracking-tight">{stat.label}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Professional Development Quote */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4">
            <Card className="border-none bg-slate-50 rounded-[4rem] p-16 shadow-inner relative overflow-hidden">
               <div className="absolute top-0 right-0 p-16 text-slate-100">
                  <Heart size={200} />
               </div>
               <div className="max-w-2xl space-y-8 relative z-10">
                  <h3 className="text-3xl font-black text-primary-dark uppercase">A Commitment to <br /> Lifelong Learning</h3>
                  <p className="text-xl text-slate-500 font-bold leading-relaxed">
                     "We encourage our faculty to continuously transcend academic boundaries. Whether it's 
                     international conferences or higher research degrees, CLPT stands by its staff in 
                     every scholarly endeavor."
                  </p>
                  <div className="pt-6 flex items-center gap-4">
                     <div className="w-12 h-1 bg-secondary rounded-full" />
                     <span className="font-black text-xs uppercase tracking-widest text-primary">Office of the Principal</span>
                  </div>
               </div>
            </Card>
         </div>
      </section>
    </div>
  );
}
