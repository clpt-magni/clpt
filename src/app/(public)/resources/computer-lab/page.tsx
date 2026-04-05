"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Monitor, 
  Cpu, 
  Globe, 
  Printer, 
  Layers, 
  Smartphone, 
  Search, 
  FileText,
  MousePointer2,
  Settings,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

const LAB_STATS = [
  { label: "Floor Area", value: "140.92 Sq.m.", icon: Layers },
  { label: "Laboratory Rooms", value: "02", icon: Monitor },
  { label: "Total Computers", value: "113", icon: Cpu },
  { label: "Lab Specific PCs", value: "58", icon: MousePointer2 },
  { label: "Hardware Config", value: "Dual Core to i5", icon: Settings },
  { label: "Language Software", value: "Soft-X Tech", icon: Globe },
  { label: "Institutional Printers", value: "23", icon: Printer },
  { label: "Digital Scanners", value: "04", icon: Search },
];

const SOFTWARE_RESOURCES = [
  { 
    title: "Application Software", 
    count: "29", 
    href: "/documents/resources/computer-lab/APPLICATION SOFTWARE LIST.pdf",
    description: "Specialized pharmaceutical and academic application tools." 
  },
  { 
    title: "System Software", 
    count: "08", 
    href: "/documents/resources/computer-lab/SYSTEM SOFTWARE.pdf",
    description: "Core operating systems and utility software frameworks." 
  },
];

export default function ComputerLabPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Computer Cum Language Lab"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Computer Lab" }
        ]}
        description="A state-of-the-art computing environment designed to facilitate advanced pharmaceutical research and language communication skills."
      />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Stats Grid */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-primary mb-8 uppercase tracking-tight">Infrastructure Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {LAB_STATS.map((stat, idx) => (
                  <Card key={idx} className="border-none shadow-sm bg-slate-50 hover:shadow-md transition-shadow group overflow-hidden">
                    <CardContent className="p-6 flex items-center gap-6">
                      <div className="p-4 bg-white rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                        <stat.icon size={28} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                        <p className="text-xl font-black text-primary-dark mt-1">{stat.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Description Block */}
              <div className="mt-12 p-8 bg-primary/5 rounded-3xl border border-primary/10">
                <h3 className="text-xl font-black text-primary mb-4 uppercase">Communication Skills Emphasis</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  The Computer cum Language Laboratory is equipped with Soft-X Technology software integrated into 25 dedicated 
                  systems. This specialized setup empowers students to enhance their communication skills, professional 
                  presentation, and pharmaceutical terminologies through interactive digital learning modules.
                </p>
              </div>
            </div>

            {/* Sidebar / Software Downloads */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <h2 className="text-3xl font-black text-primary mb-8 uppercase tracking-tight">Resources</h2>
                
                {SOFTWARE_RESOURCES.map((res, idx) => (
                  <Link key={idx} href={res.href} target="_blank" className="block group">
                    <div className="p-8 bg-primary-dark text-white rounded-3xl transition-all group-hover:bg-primary shadow-xl group-hover:-translate-y-2">
                      <div className="flex justify-between items-start mb-6">
                        <FileText size={40} className="text-secondary" />
                        <span className="text-4xl font-black opacity-40">{res.count}</span>
                      </div>
                      <h4 className="text-xl font-black mb-2 uppercase">{res.title}</h4>
                      <p className="text-white/70 text-sm mb-6 leading-relaxed">{res.description}</p>
                      <div className="flex items-center gap-2 font-black text-xs uppercase tracking-[0.2em] text-secondary">
                        View List <ChevronRight size={16} />
                      </div>
                    </div>
                  </Link>
                ))}

                {/* Help Note */}
                <div className="p-6 border-2 border-dashed border-slate-200 rounded-3xl text-center">
                   <p className="text-slate-400 text-sm font-bold">PDF files require a modern browser or acrobat reader to view.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
