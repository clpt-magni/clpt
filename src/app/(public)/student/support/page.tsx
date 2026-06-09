"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  BookOpen, 
  Trophy, 
  Coins, 
  Library, 
  GraduationCap, 
  Users, 
  CreditCard, 
  ShieldCheck, 
  Factory, 
  Globe, 
  Smartphone, 
  Zap, 
  Plane, 
  Heart, 
  Laptop,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

const SUPPORT_INITIATIVES = [
  {
    title: "100% Attendance Awards",
    desc: "Institutional appreciation with cash prizes for students achieving perfect attendance records.",
    icon: CheckCircle2,
    category: "Recognition"
  },
  {
    title: "Meritorious Scholarships",
    desc: "Scholarships of Rs 5000/- awarded to students securing top marks in academic sessions.",
    icon: GraduationCap,
    category: "Financial"
  },
  {
    title: "Financial Assistance",
    desc: "Inclusive 'Earn while learn' schemes for financially backward students to support their education.",
    icon: Coins,
    category: "Financial"
  },
  {
    title: "Fee Concessions",
    desc: "Support for economically backward students with fee reductions and installment payment facilities.",
    icon: CreditCard,
    category: "Financial"
  },
  {
    title: "Accidental Insurance",
    desc: "Comprehensive accidental insurance coverage provided to all students by the institution.",
    icon: ShieldCheck,
    category: "Welfare"
  },
  {
    title: "Minor Research Projects",
    desc: "Encouragement and funding for students to lead research projects during their course of study.",
    icon: BookOpen,
    category: "Academic"
  },
  {
    title: "Best Library Utilization",
    desc: "Special awards to encourage and recognize library usage and research enthusiasm.",
    icon: Library,
    category: "Academic"
  },
  {
    title: "Student Representation",
    desc: "Active participation of students as members in various committees, Board of Studies, and Academic Council.",
    icon: Users,
    category: "Governance"
  },
  {
    title: "Internship & Industry Visits",
    desc: "Regular industrial visits and internship opportunities to enhance practical and technical abilities.",
    icon: Factory,
    category: "Professional"
  },
  {
    title: "Skill Development",
    desc: "Campus training sessions in association with APSSDC, Rubicon, and AICTE skilling programs.",
    icon: Zap,
    category: "Professional"
  },
  {
    title: "MOOCs Integration",
    desc: "Encouragement to learn additional courses online through University and Government portals.",
    icon: Laptop,
    category: "Academic"
  },
  {
    title: "International Exposure",
    desc: "Financial support for students to participate in international conferences and collaborations.",
    icon: Plane,
    category: "Professional"
  },
  {
    title: "Heartfulness Meditation",
    desc: "Inculcating mental peace and creative thinking through regular guided meditation sessions.",
    icon: Heart,
    category: "Wellness"
  },
  {
    title: "Flipped Classroom Learning",
    desc: "Digital sharing of theory materials to enable active learning and higher student involvement.",
    icon: Smartphone,
    category: "Academic"
  },
  {
    title: "Intercollegiate Competitions",
    desc: "Support for participation in state, national, and international level competitions.",
    icon: Trophy,
    category: "Recognition"
  },
  {
    title: "Memorial Awards",
    desc: "Special research awards and prizes sponsored by distinguished external members.",
    icon: Award,
    category: "Recognition"
  }
];

export default function StudentSupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Student Support & Welfare"
        breadcrumbs={[
          { label: "Student Life", href: "/student/support" },
          { label: "Support Services" }
        ]}
        description="Empowering our students through a comprehensive ecosystem of financial aid, academic incentives, professional exposure, and holistic well-being initiatives."
      />

      {/* Intro Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary-dark rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                Student-Centric Excellence
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight">Holistic Growth <br /> Beyond Academics</h2>
             <p className="text-lg text-slate-500 font-medium leading-relaxed italic">
                "Our commitment to student success extends far beyond the classroom. We provide a robust support 
                framework that nurtures talent, ensures financial security, and builds professional character."
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {SUPPORT_INITIATIVES.map((item, i) => (
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
                     <div className="text-[10px] font-black text-primary-dark/40 uppercase tracking-widest group-hover:text-primary transition-colors">Details Available</div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Support Highlight Section */}
      <section className="py-24 bg-primary-dark relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
         
         <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="space-y-10">
                  <div className="space-y-4">
                     <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">Need specific <br /> assistance?</h3>
                     <p className="text-white/60 text-lg font-medium leading-relaxed">
                        Our dedicated student welfare office is here to guide you through scholarships, 
                        insurance claims, and financial aid applications.
                     </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                     <div className="px-8 py-5 bg-secondary text-primary-dark font-black tracking-widest uppercase text-xs rounded-2xl shadow-xl hover:scale-105 transition-all cursor-pointer">
                        Welfare Office
                     </div>
                     <div className="px-8 py-5 bg-white/10 text-white font-black tracking-widest uppercase text-xs rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all cursor-pointer flex items-center gap-2">
                        Contact Coordinator <ChevronRight size={16} />
                     </div>
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Attendance Rewards", count: "100%", sub: "Efficiency" },
                    { label: "Scholarships", count: "₹5K", sub: "Merit-based" },
                    { label: "Research", count: "Active", sub: "Engagement" },
                    { label: "Placement", count: "Campus", sub: "Training" }
                  ].map((stat, i) => (
                    <div key={i} className="p-8 bg-white/5 rounded-[2rem] border border-white/5 backdrop-blur-sm space-y-2">
                       <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">{stat.sub}</p>
                       <p className="text-4xl font-black text-secondary">{stat.count}</p>
                       <p className="text-xs font-black text-white uppercase tracking-tight">{stat.label}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
