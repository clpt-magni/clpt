"use client";

import React, { useState } from "react";
import { Eye, GraduationCap, Calendar, FileText, LayoutGrid, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PdfViewerModal } from "@/components/ui/PdfViewerModal";
import { PdfThumbnail } from "@/components/ui/PdfThumbnail";
import { Input } from "@/components/ui/input";

const PRAXIS_ISSUES = [
  { year: "2024", title: "Praxis Student Wall Magazine 2024", pdfUrl: "/documents/praxis/2024.pdf" },
  { year: "2023", title: "Praxis Student Wall Magazine 2023", pdfUrl: "/documents/praxis/2023.pdf" },
  { year: "2022", title: "Praxis Student Wall Magazine 2022", pdfUrl: "/documents/praxis/2022.pdf" },
  { year: "2021", title: "Praxis Student Wall Magazine 2021", pdfUrl: "/documents/praxis/2021.pdf" },
  { year: "2019", title: "Praxis Student Wall Magazine 2019", pdfUrl: "/documents/praxis/2019.pdf" },
  { year: "2018", title: "Praxis Student Wall Magazine 2018", pdfUrl: "/documents/praxis/2018.pdf" },
  { year: "2017", title: "Praxis Student Wall Magazine 2017", pdfUrl: "/documents/praxis/2017.pdf" },
  { year: "2016", title: "Praxis Student Wall Magazine 2016", pdfUrl: "/documents/praxis/2016.pdf" },
  { year: "2015", title: "Praxis Student Wall Magazine 2015", pdfUrl: "/documents/praxis/2015.pdf" },
  { year: "2014", title: "Praxis Student Wall Magazine 2014", pdfUrl: "/documents/praxis/2014.pdf" },
];

export default function PraxisClient() {
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIssues = PRAXIS_ISSUES.filter((issue) =>
    issue.year.includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-slate-50 font-roboto pb-24">
      {/* Page Header */}
      <section className="bg-primary-dark pt-24 pb-32 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
            <LayoutGrid className="w-4 h-4 text-secondary" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Student Publications</span>
          </div>
          <h1 className="text-5xl md:text-6xl !text-white font-black font-poppins mb-6">Praxis Wall Magazine</h1>
          <p className="text-white/70 text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            Exploring the creative and intellectual horizons of our pharmacy students through their annual wall magazine collections.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-16 relative z-20">
        {/* Search & Stats Bar */}
        <div className="bg-white p-6 rounded-[32px] shadow-2xl border border-slate-100 mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 transition-colors group-focus-within:text-primary" />
            <Input
              type="text"
              placeholder="Search by year..."
              className="pl-12 py-6 rounded-2xl bg-slate-50 border-none ring-0 focus-visible:ring-2 focus-visible:ring-primary/20 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right flex flex-col items-end">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Issues</span>
              <span className="text-2xl font-black text-primary font-poppins">{PRAXIS_ISSUES.length} Editions</span>
            </div>
          </div>
        </div>

        {/* Magazine Grid */}
        {filteredIssues.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIssues.map((issue) => (
              <Card key={issue.year} className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[40px] bg-white">
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Dynamic PDF Thumbnail Header */}
                  <div className="h-48 md:h-56 bg-slate-100 relative overflow-hidden transition-all duration-500 group-hover:h-52 md:group-hover:h-60">
                    <PdfThumbnail 
                      pdfUrl={issue.pdfUrl} 
                      className="w-full h-full"
                    />
                    <div className="absolute top-6 left-6 z-30">
                       <span className="px-4 py-2 bg-secondary text-primary-dark font-black rounded-xl text-sm md:text-lg shadow-xl border border-white/20 backdrop-blur-md">
                         {issue.year}
                       </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 space-y-6 flex-1 flex flex-col">
                    <div>
                      <h3 className="text-xl font-bold text-primary-dark font-poppins mb-2 line-clamp-2">
                        {issue.title}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium tracking-wide italic">Annual Edition</span>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-slate-100 mt-auto">
                      <Button
                        onClick={() => setSelectedPdf({ url: issue.pdfUrl, title: issue.title })}
                        className="w-full bg-[#003366] hover:bg-primary text-white font-bold py-7 rounded-2xl shadow-lg transition-all group-hover:scale-[1.02] flex items-center justify-center gap-3"
                      >
                        <Eye size={20} />
                        VIEW MAGAZINE
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[40px] shadow-xl border border-slate-100">
             <Search className="mx-auto text-slate-200 w-24 h-24 mb-6" />
             <h3 className="text-2xl font-bold text-slate-400">No Editions Found</h3>
             <p className="text-slate-400">Try searching for a different academic year.</p>
          </div>
        )}
      </div>

      {/* PDF Viewer Component */}
      <PdfViewerModal
        isOpen={!!selectedPdf}
        onClose={() => setSelectedPdf(null)}
        title={selectedPdf?.title || ""}
        pdfUrl={selectedPdf?.url || ""}
      />
    </div>
  );
}
