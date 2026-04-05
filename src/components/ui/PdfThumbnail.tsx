"use client";

import React, { useState } from "react";
import { FileText, Loader2 } from "lucide-react";

interface PdfThumbnailProps {
  pdfUrl: string;
  className?: string;
}

/**
 * PdfThumbnail
 * Uses the browser's native PDF viewing capabilities to show the first page.
 * This approach is more reliable and robust in Next.js/Turbopack environments 
 * compared to complex client-side PDF.js rendering.
 */
export function PdfThumbnail({ pdfUrl, className = "" }: PdfThumbnailProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden group bg-slate-50 ${className}`}>
      {/* Background Icon (Fallback/Loading Shimmer) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20 pointer-events-none translate-y-2">
        <FileText className="w-16 h-16 text-primary-dark" />
        <span className="text-[10px] font-black uppercase tracking-[0.2em] mt-4">Issue Preview</span>
      </div>

      {/* 
        Native PDF View 
        #page=1: focus on the first page
        #toolbar=0&navpanes=0&view=FitH: hide UI and fit to width
      */}
      <iframe
        src={`${pdfUrl}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
        className={`w-full h-[150%] -translate-y-2 border-none transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setLoading(false)}
        title="Magazine Preview"
      />

      {/* 
        Interaction Shield (Critical)
        This absolute div prevents any mouse events from reaching the iframe.
        This ensures clicks trigger our card transition/modal logic, not the PDF viewer's UI.
      */}
      <div className="absolute inset-0 z-20 cursor-pointer bg-transparent" />

      {/* Gradient Overlay for Visual Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Dynamic Loader Shimmer */}
      {loading && (
        <div className="absolute inset-0 z-30 bg-white/60 backdrop-blur-sm flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
      )}
    </div>
  );
}
