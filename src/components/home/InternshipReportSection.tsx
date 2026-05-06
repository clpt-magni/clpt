"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, Eye, X, FileSpreadsheet, FileArchive } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InternshipReportSection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const docxUrl = "/documents/studentdocuments/Internship-training-report.docx";
  const pdfUrl = "/documents/studentdocuments/Internship-training-report.pdf";

  return (
    <>
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl relative overflow-hidden group">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/[0.01] rounded-full pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column Info */}
              <div className="md:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shadow-inner">
                    <FileText size={22} />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-primary font-poppins">Academic Toolkits</div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight font-poppins leading-none">
                    Internship Training Report
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm">
                    Access the approved template and submission guidelines for the official clinical or industrial pharmacy internship report. Download the template or preview the guide below.
                  </p>
                </div>
              </div>

              {/* Right Column Actions */}
              <div className="md:col-span-5 flex flex-col gap-3 font-poppins">
                <Button
                  onClick={() => setIsPreviewOpen(true)}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-6 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-primary/10 transition-all flex items-center justify-center gap-2 border-none"
                >
                  <Eye size={16} /> Preview PDF Guide
                </Button>

                <div className="grid grid-cols-2 gap-3">
                  <a href={docxUrl} download className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 font-bold py-5 rounded-xl text-[10px] uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                    >
                      <Download size={13} /> Download DOCX
                    </Button>
                  </a>
                  <a href={pdfUrl} download className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 font-bold py-5 rounded-xl text-[10px] uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                    >
                      <Download size={13} /> Download PDF
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Preview Modal overlay */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div className="fixed inset-0 z-[10100] flex items-center justify-center p-4 md:p-10">
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPreviewOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-[2.5rem] w-full max-w-5xl h-[85vh] overflow-hidden shadow-2xl border border-slate-100 relative z-10 flex flex-col font-poppins"
            >
              {/* Modal Header */}
              <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 leading-none">Internship Training Guide</h4>
                    <span className="text-[10px] font-bold text-slate-400 mt-1 block">PDF Preview Mode</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a href={docxUrl} download className="hidden sm:inline-block">
                    <Button
                      variant="outline"
                      className="border-slate-200 text-slate-700 hover:bg-slate-100 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                    >
                      <Download size={13} /> DOCX Template
                    </Button>
                  </a>
                  <a href={pdfUrl} download className="hidden sm:inline-block">
                    <Button
                      className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 border-none"
                    >
                      <Download size={13} /> Download PDF
                    </Button>
                  </a>
                  
                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="p-2.5 bg-slate-200/50 hover:bg-red-500 hover:text-white rounded-full text-slate-500 transition-all active:scale-90"
                    aria-label="Close"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* PDF Content iframe */}
              <div className="flex-1 bg-slate-100 relative">
                <iframe
                  src={`${pdfUrl}#toolbar=0`}
                  className="w-full h-full border-none"
                  title="Internship Training Report PDF"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
