"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  ChevronRight, 
  Download, 
  Maximize2, 
  Minimize2, 
  Search, 
  ChevronUp,
  LayoutGrid,
  FileText,
  ShieldCheck,
  GraduationCap
} from "lucide-react";
import { PageHeader as CustomPageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { conspectusPages } from "@/data/conspectus";

export default function ConspectusPage() {
  const [activePage, setActivePage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize pageRefs
  useEffect(() => {
    pageRefs.current = pageRefs.current.slice(0, conspectusPages.length);
  }, []);

  // Intersection Observer to track active page
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pageIndex = parseInt(entry.target.getAttribute("data-page-index") || "1");
            setActivePage(pageIndex);
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px 0px -20% 0px" }
    );

    pageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPage = (index: number) => {
    const target = pageRefs.current[index - 1];
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleZoom = () => {
    setZoomLevel(prev => prev === 1 ? 1.5 : 1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <CustomPageHeader
        title="Institutional Conspectus"
        breadcrumbs={[
          { label: "Student Center", href: "/student" },
          { label: "Conspectus" }
        ]}
        description="The official academic handbook providing a comprehensive overview of our curriculum, institutional policies, and professional standards for student excellence."
      />

      {/* 2. Interactive E-Viewer Section */}
      <section className="bg-slate-50/50 py-12 md:py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 relative">
            
            {/* Sidebar Navigation - Fixed on Desktop */}
            <aside className={`hidden lg:block w-72 flex-shrink-0 sticky top-32 h-[calc(100vh-160px)] transition-all duration-500 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>
               <div className="bg-white border border-slate-100 rounded-3xl p-6 h-full flex flex-col shadow-xl shadow-slate-200/50">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                       <LayoutGrid size={14} className="text-blue-600" /> Navigation
                    </h3>
                  </div>

                  <div className="flex-grow overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                     {conspectusPages.map((page) => (
                       <button
                         key={page.index}
                         onClick={() => scrollToPage(page.index)}
                         className={`w-full text-left p-3 rounded-xl flex items-center gap-4 transition-all group ${activePage === page.index ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-[1.02]' : 'hover:bg-slate-50 text-slate-500'}`}
                       >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black ${activePage === page.index ? 'bg-white/20' : 'bg-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600'}`}>
                             {page.index}
                          </div>
                          <span className="text-xs font-bold truncate tracking-tight">{page.title}</span>
                       </button>
                     ))}
                  </div>
               </div>
            </aside>

            {/* Main Viewer Area */}
            <div className="flex-grow space-y-12 pb-32">
               {/* Viewer Toolbar */}
               <div className="sticky top-24 z-30 bg-white/80 backdrop-blur-xl border border-slate-100/50 rounded-2xl p-4 flex items-center justify-between shadow-lg shadow-slate-200/40">
                  <div className="flex items-center gap-6">
                     <button 
                       onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                       className="hidden lg:flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-blue-600 transition-colors"
                     >
                        <LayoutGrid size={16} /> 
                        {isSidebarOpen ? "Hide Index" : "Show Index"}
                     </button>
                     <div className="h-4 w-px bg-slate-200 hidden lg:block" />
                     <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Page <span className="text-blue-600 font-black">{activePage}</span> <span className="mx-1 opacity-30">/</span> 40
                     </div>
                  </div>

                  <div className="flex items-center gap-2">
                     <button 
                       onClick={toggleZoom}
                       className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100/50 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                       title="Toggle Zoom"
                     >
                        {zoomLevel === 1 ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                     </button>
                  </div>
               </div>

               {/* Pages Stack */}
               <div className="max-w-4xl mx-auto space-y-12">
                  {conspectusPages.map((page, idx) => (
                    <motion.div
                      key={page.index}
                      data-page-index={page.index}
                      ref={(el) => { pageRefs.current[idx] = el; }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="relative bg-white rounded-[2rem] shadow-2xl shadow-slate-200/60 overflow-hidden border border-slate-100 group"
                    >
                       <div className={`transition-all duration-700 ease-out flex justify-center`} style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}>
                          <Image
                            src={page.src}
                            alt={`Conspectus Page ${page.index}`}
                            width={1000}
                            height={1400}
                            className="w-full h-auto"
                            priority={page.index <= 2}
                            loading={page.index > 2 ? "lazy" : undefined}
                          />
                       </div>
                       
                       {/* Overlay indicator for context */}
                       <div className="absolute top-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-widest border border-white/10">
                            Institutional Document · Page {page.index}
                          </div>
                       </div>
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Engagement Section */}
      <section className="bg-white py-24 md:py-32 relative overflow-hidden border-t border-slate-100">
         <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="w-20 h-20 bg-blue-600/5 rounded-3xl flex items-center justify-center text-blue-600 mx-auto mb-10 border border-blue-600/10">
               <GraduationCap size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-8">Need Support?</h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
              For any clarifications regarding the institutional policies mentioned in the conspectus, 
              please reach out to the Student Affairs office.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/academic/committees">
                <Button className="h-16 px-10 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black uppercase tracking-widest text-[10px] transition-all">
                  Student Committees
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="h-16 px-10 rounded-2xl border-slate-200 hover:bg-slate-50 text-slate-900 font-black uppercase tracking-widest text-[10px] transition-all">
                  Contact Support
                </Button>
              </Link>
            </div>
         </div>
      </section>

      {/* Scroll to Top Action */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-white border border-slate-100 rounded-2xl shadow-2xl flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all z-50 group shadow-blue-600/10"
          >
            <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="bg-slate-50 py-20 border-t border-slate-100/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] opacity-50">
            CLPT STUDENT GOVERNANCE • ACADEMIC SESSION 2021-22
          </p>
        </div>
      </footer>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </div>
  );
}
