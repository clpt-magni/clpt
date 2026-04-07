"use client";

import { useState } from "react";
import { Calendar, Download, Eye, GraduationCap, Clock, Award, FileText, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DocViewerModal } from "@/components/ui/DocViewerModal";

// Legacy Static Calendars from public_html/ac.php
const LEGACY_CALENDARS = [
  {
    year: "2025-26",
    links: [
      { label: "B.Pharmacy", href: "/pdfs/academic-calendar/cal25-26/AC 2025-26 B.Pharmacy.pdf" },
      { label: "M.Pharmacy", href: "/pdfs/academic-calendar/cal25-26/AC 2025-26 M.Pharmacy.pdf" },
      { label: "Pharm.D", href: "/pdfs/academic-calendar/cal25-26/AC 2025-26 Pharm.D.pdf" },
    ]
  },
  {
    year: "2024-25",
    links: [
      { label: "B.Pharmacy", href: "/pdfs/academic-calendar/cal24-25/AC B.Pharmacy 2024-25.pdf" },
      { label: "M.Pharmacy", href: "/pdfs/academic-calendar/cal24-25/AC M.Pharmacy 2024-25.pdf" },
      { label: "Pharm.D", href: "/pdfs/academic-calendar/cal24-25/AC Pharm.D 2024-25.pdf" },
    ]
  },
  {
    year: "2023-24",
    links: [
      { label: "B.Pharmacy", href: "/pdfs/academic-calendar/cal23-24/B Pharmacy 2023-2024.pdf" },
      { label: "M.Pharmacy", href: "/pdfs/academic-calendar/cal23-24/M Pharmacy 2023-2024.pdf" },
      { label: "Pharm.D", href: "/pdfs/academic-calendar/cal23-24/Pharm.D 2023-2024.pdf" },
    ]
  },
  {
    year: "2022-23",
    links: [
      { label: "B.Pharmacy", href: "/pdfs/academic-calendar/cal22-23/bpharmacy 2022-23.pdf" },
      { label: "M.Pharmacy", href: "/pdfs/academic-calendar/cal22-23/mpharmacy 2022-23.pdf" },
      { label: "Pharm.D", href: "/pdfs/academic-calendar/cal22-23/pharm-d 2022-23.pdf" },
    ]
  },
  {
    year: "2021-22",
    links: [
      { label: "B.Pharmacy", href: "/pdfs/academic-calendar/cal21-22/bpharmacy 2021-22.pdf" },
      { label: "M.Pharmacy", href: "/pdfs/academic-calendar/cal21-22/mpharmacy 2021-22.pdf" },
      { label: "Pharm.D", href: "/pdfs/academic-calendar/cal21-22/pharm-d 2021-22.pdf" },
    ]
  }
];

export default function AcademicCalendarPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeDoc, setActiveDoc] = useState({ url: "", title: "" });

  const handleOpenPdf = (url: string, title: string) => {
    setActiveDoc({ url, title });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24 font-roboto">
      {/* Hero Section */}
      <div className="bg-primary-dark pt-32 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-24 -left-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full text-white font-black text-[10px] uppercase tracking-[0.2em] mb-6 border border-primary/20 animate-fade-in">
            <Calendar size={14} /> Institutional Planning
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight font-poppins">
            Academic Calendar
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Strategic scheduling for academic excellence. Access institutional calendars through our premium document viewer.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-14 relative z-20">
        <div className="space-y-16">
          {/* Main Archive Section */}
          <section className="space-y-12">
            <div className="flex items-center gap-4 px-2">
              <div className="h-px flex-1 bg-slate-200" />
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Institutional Calendar Archive</h2>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LEGACY_CALENDARS.map((yearGroup, idx) => (
                <div key={idx} className="bg-white rounded-[40px] shadow-2xl border border-slate-100 overflow-hidden transition-all hover:border-primary/20 hover:shadow-primary/5 group/year">
                  <div className="bg-slate-900 px-8 py-6 border-b border-primary/10 flex justify-between items-center group-hover/year:bg-primary transition-colors">
                    <h4 className="font-black text-white text-lg tracking-tight">{yearGroup.year}</h4>
                    <Calendar size={18} className="text-primary group-hover/year:text-white transition-colors" />
                  </div>
                  <div className="p-6 space-y-3">
                    {yearGroup.links.map((link, lIdx) => (
                      <button 
                        key={lIdx}
                        onClick={() => handleOpenPdf(encodeURI(link.href), `${link.label} Calendar ${yearGroup.year}`)}
                        className="flex items-center justify-between w-full p-5 rounded-3xl hover:bg-slate-50 group/link transition-all border border-transparent hover:border-slate-100"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-all shadow-sm">
                            <FileText size={16} />
                          </div>
                          <div className="text-left">
                            <span className="block text-[14px] font-black text-slate-900 group-hover/link:text-primary transition-colors leading-none mb-1">
                              {link.label}
                            </span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                              PDF Document
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-slate-300 group-hover/link:text-primary transition-all">
                          <span className="text-[9px] font-black uppercase tracking-widest opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all">View</span>
                          <Eye size={16} className="group-hover/link:scale-110 transition-transform" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Institutional Note */}
          <div className="bg-slate-100 rounded-[40px] p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-200/50">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-xl text-primary">
                <Award size={32} />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xl font-black text-slate-900 mb-1">Official Compliance</h4>
                <p className="text-slate-500 font-bold text-sm">All academic calendars are verified by the Office of the Controller of Examinations.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Authenticated</span>
                <span className="text-xs font-black text-primary uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20">CLPT AU-SYSTEM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Institutional Branding / CTA */}
      <div className="container mx-auto px-4 mt-24">
        <div className="bg-gradient-to-br from-primary-dark to-slate-900 rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight font-poppins">
              Academic Services
            </h2>
            <p className="text-white/60 text-lg mb-10 font-bold text-balance">
              For administrative inquiries regarding the academic schedule, please visit the college administration during working hours.
            </p>
          </div>
        </div>
      </div>

      {/* Institutional Modal Viewer */}
      <DocViewerModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        url={activeDoc.url} 
        title={activeDoc.title}
        type="pdf" 
      />
    </div>
  );
}
