"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, X, MonitorPlay, FileText } from "lucide-react";

interface DocViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string; // The URL for the iframe (Preferably PDF)
  sourceUrl?: string; // The original source URL (PPTX)
  type: 'pdf' | 'ppt' | 'pptx' | 'mp4' | 'other';
}

export function DocViewerModal({ isOpen, onClose, title, url, sourceUrl, type }: DocViewerModalProps) {
  if (!url) return null;

  // For PPT/PPTX, we use the Microsoft Office Online Viewer
  const isPpt = type === 'ppt' || type === 'pptx';
  const encodedUrl = url; // Already encoded by parent
  const encodedSourceUrl = sourceUrl ? sourceUrl : encodedUrl;
  
  const displayUrl = isPpt 
    ? `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(window.location.origin + encodedUrl)}` 
    : encodedUrl;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent showCloseButton={false} className="max-w-none sm:!max-w-[95vw] w-[95vw] h-[95vh] flex flex-col p-0 gap-0 overflow-hidden border-none shadow-2xl rounded-3xl z-[100]">
        {/* Header with gradient and glass effect */}
        <DialogHeader className="p-6 bg-[#003366] text-white flex-row items-center justify-between space-y-0 border-b border-white/10 shrink-0">
          <div className="flex flex-col gap-1 overflow-hidden">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ffc107] opacity-90">
                {isPpt ? "Institutional Presentation Viewer" : "Institutional Document Viewer"}
              </span>
              <div className={`px-2 py-0.5 rounded-full text-[8px] font-black tracking-widest uppercase ${isPpt ? "bg-orange-500" : "bg-red-500"}`}>
                {type}
              </div>
            </div>
            <DialogTitle className="text-xl md:text-2xl font-bold font-poppins truncate pr-8 !text-white">
              {title}
            </DialogTitle>
          </div>
          <div className="flex items-center gap-2">
            <a href={encodedUrl} target="_blank" rel="noopener noreferrer" title="Open in new tab">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full h-10 w-10">
                <ExternalLink size={20} />
              </Button>
            </a>
            <a href={encodedSourceUrl} download title="Download Original File">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full h-10 w-10">
                <Download size={20} />
              </Button>
            </a>
            <Button onClick={onClose} variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full h-10 w-10">
              <X size={24} />
            </Button>
          </div>
        </DialogHeader>

        {/* Viewer Area */}
        <div className="flex-1 bg-slate-900 relative">
          <iframe
            src={displayUrl}
            className="w-full h-full border-none"
            title={title}
            allowFullScreen
          />

          {/* Local / Development Fallback UI for PPTs */}
          {isPpt && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && (
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-[#001f3f]/95 z-10 font-roboto">
              <div className="max-w-xl space-y-8 animate-fade-in">
                <div className="w-24 h-24 bg-white/5 rounded-[40px] flex items-center justify-center mx-auto text-primary border border-white/10 shadow-2xl">
                   <div className="w-16 h-16 bg-primary rounded-[30px] flex items-center justify-center text-white shadow-xl">
                      <MonitorPlay size={32} />
                   </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-black text-white font-poppins tracking-tighter">Native Browser Rendering Disabled</h3>
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
                    This file is in <span className="text-orange-400 font-black">PPTX</span> format. To enable the high-fidelity instant preview on localhost, please download the file or convert it to <span className="text-red-400 font-black">PDF</span> and upload it to the same folder.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a href={encodedSourceUrl} download className="w-full sm:w-auto">
                    <Button className="w-full bg-primary hover:bg-primary-dark text-white font-black px-10 py-8 text-lg rounded-3xl shadow-2xl transition-all transform hover:-translate-y-1 gap-4 border-none">
                      <Download size={24} />
                      DOWNLOAD PPTX
                    </Button>
                  </a>
                  <a href={encodedSourceUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 font-bold px-10 py-8 text-lg rounded-3xl transition-all gap-4">
                      <ExternalLink size={24} />
                      DIRECT LINK
                    </Button>
                  </a>
                </div>
                <div className="pt-8 border-t border-white/10">
                   <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest opacity-60 mb-4">
                     Recommended Institutional Workflow:
                   </p>
                   <div className="bg-white/5 p-4 rounded-2xl text-[11px] text-slate-400 font-bold leading-relaxed">
                     Right-click file in Finder → Quick Actions → Create PDF. <br/>
                     Uploading the PDF alongside the PPTX unlocks the native browser viewer.
                   </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Overlay Fallback */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden z-20">
            <a href={encodedUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-secondary hover:bg-secondary-light text-primary-dark font-black px-8 py-6 rounded-2xl shadow-2xl">
                OPEN FULLSCREEN
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
