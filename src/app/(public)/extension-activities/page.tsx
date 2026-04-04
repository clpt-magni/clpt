"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  HeartHandshake, 
  ChevronRight, 
  FileText, 
  Users, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  Building2
} from "lucide-react";
import { extensionActivitiesRepo } from "@/data/extension-activities";

export default function ExtensionActivitiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Creative Hero Section */}
      <section className="bg-slate-50 pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/[0.03] blur-[120px] rounded-full -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-400/[0.03] blur-[100px] rounded-full -ml-20 -mb-20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ChevronRight size={10} />
              <span className="text-slate-600">Institutional Excellence</span>
              <ChevronRight size={10} />
              <span className="text-blue-600">Extension Activities</span>
            </nav>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight mb-8 leading-[0.9]"
            >
              Beyond the <br />
              <span className="text-blue-600 italic">Classroom</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              We empower our students to lead change through community service, 
              healthcare initiatives, and professional outreach programs.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Activity Segments - Card Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extensionActivitiesRepo.map((activity, idx) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link 
                  href={`/extension-activities/${activity.slug}`}
                  className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-10 h-full flex flex-col hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500 overflow-hidden"
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 p-8">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Icon/Category */}
                  <div className="mb-10 text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 w-fit px-4 py-1.5 rounded-full">
                    {activity.category}
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-10 flex-grow line-clamp-4">
                    {activity.description}
                  </p>

                  <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                    <Zap size={14} className="text-blue-600" /> View Chapter Details
                  </div>

                  {/* Hover Background Accent */}
                  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/[0.02] rounded-full group-hover:scale-150 transition-transform duration-1000" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="bg-slate-900 py-32 relative overflow-hidden rounded-[4rem] mx-6 mb-12">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8">
            Ready to make an <span className="text-blue-500">Impact?</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
            Students interested in joining our extension activities can register with 
            the respective faculty coordinators at the Student Affairs office.
          </p>
          <Link href="/contact">
            <button className="h-20 px-12 rounded-3xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-blue-600/20 active:scale-95">
              Contact Coordinator
            </button>
          </Link>
        </div>
      </section>

      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] opacity-50">
            Institutional Growth • Social Responsibility • CLPT 2024
          </p>
        </div>
      </footer>
    </div>
  );
}
