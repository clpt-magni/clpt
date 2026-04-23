"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Library as LibraryIcon, 
  Globe, 
  Search, 
  Users, 
  Layers, 
  FileText, 
  Printer,
  ChevronRight,
  Database,
  Monitor,
  Bookmark
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const LIBRARY_STATS = [
  { label: "Total Area", value: "480.92 Sq.m.", icon: Layers },
  { label: "Library Volumes", value: "15,500+", icon: BookOpen },
  { label: "Total Titles", value: "5,200+", icon: Bookmark },
  { label: "Seating Capacity", value: "150+", icon: Users },
  { label: "National Journals", value: "24", icon: FileText },
  { label: "Intrd. Journals", value: "18", icon: Globe },
  { label: "Digital Systems", value: "15", icon: Monitor },
  { label: "E-Resources", value: "3,000+", icon: Database },
];

const DIGITAL_RESOURCES = [
  { 
    title: "Institutional Repository", 
    href: "/student-dashboard/library",
    description: "Access digitized thesis, previous year question papers, and course-specific materials." 
  },
  { 
    title: "E-Journal Subscriptions", 
    href: "https://clptlibrary.weebly.com/repository-services.html",
    description: "Direct access to DELNET, BENTHAM, and other leading pharmaceutical databases." 
  },
];

export default function LibraryResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/30">
      <PageHeader
        title="Institutional Library & Information Centre"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Library" }
        ]}
        description="A Knowledge Hub promoting archival discovery, research excellence, and pharmaceutical scholarship through extensive print and digital collections."
      />

      {/* Main Content */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-primary/5 blur-[100px] rounded-full -translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Stats & Description */}
            <div className="lg:col-span-8">
              <div className="max-w-3xl mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-black text-[10px] uppercase tracking-widest border border-primary/20 mb-8">
                  Academic Heart of CLPT
                </div>
                <h2 className="text-4xl font-black text-primary-dark uppercase tracking-tight mb-6">
                  Comprehensive <br /> Pharmaceutical Archive.
                </h2>
                <p className="text-slate-500 text-lg font-medium leading-relaxed italic">
                  Chalapathi Institute of Pharmaceutical Sciences maintains a modern, automated library system equipped with 
                  the latest pharmaceutical literature. Our collection is meticulously curated to support Undergraduate, 
                  Postgraduate, and Doctoral research needs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {LIBRARY_STATS.map((stat, idx) => (
                  <Card key={idx} className="border-none shadow-sm bg-slate-50 hover:shadow-xl transition-all duration-500 group overflow-hidden rounded-[2.5rem]">
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-white rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner flex items-center justify-center mb-6">
                        <stat.icon size={24} />
                      </div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</p>
                      <p className="text-xl font-black text-primary-dark mt-2 tracking-tighter">{stat.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Automation Feature */}
              <div className="mt-16 p-10 bg-gradient-to-br from-primary-dark to-slate-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 text-white/5 pointer-events-none transition-transform group-hover:scale-110 duration-700">
                  <LibraryIcon size={180} />
                </div>
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-black text-secondary uppercase">Automated Library Management</h3>
                  <p className="text-white/70 font-medium leading-relaxed italic max-w-2xl">
                    The library is fully automated using advanced Library Management Software, enabling students 
                    to search collections, check availability, and manage borrowings through a seamless digital interface.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar / Digital Gateway */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col gap-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-black text-primary uppercase tracking-tight">Digital Gateway</h2>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Global Repository Access</p>
                  </div>
                  
                  {DIGITAL_RESOURCES.map((res, idx) => (
                    <Link key={idx} href={res.href} className="group">
                      <div className="p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-primary hover:shadow-xl transition-all duration-500">
                        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <Search size={18} />
                        </div>
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide mb-3 group-hover:text-primary transition-colors">{res.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed font-medium mb-6">
                          {res.description}
                        </p>
                        <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-primary">
                          Explore Resource <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Technical Support */}
                <div className="p-8 border-2 border-dashed border-slate-200 rounded-[2.5rem] flex items-center gap-6 group hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                    <Printer size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-900 uppercase">Reprography Service</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mt-0.5 tracking-wider">Printing & Photocopying available</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Visual Context Strip */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="aspect-video bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden relative group">
                <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs font-black uppercase tracking-widest mb-1">Facility View</p>
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest italic">Research & Reading Area</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

