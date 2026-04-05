"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, X } from "lucide-react";

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  pdfUrl: string;
}

export function PdfViewerModal({ isOpen, onClose, title, pdfUrl }: PdfViewerModalProps) {
  if (!pdfUrl) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent showCloseButton={false} className="max-w-none sm:!max-w-[95vw] w-[95vw] h-[95vh] flex flex-col p-0 gap-0 overflow-hidden border-none shadow-2xl rounded-3xl z-[100]">
        {/* Header with gradient and glass effect */}
        <DialogHeader className="p-6 bg-[#003366] text-white flex-row items-center justify-between space-y-0 border-b border-white/10 shrink-0">
          <div className="flex flex-col gap-1 overflow-hidden">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ffc107] opacity-90">Document Viewer</span>
            <DialogTitle className="text-xl md:text-2xl font-bold font-poppins truncate pr-8 !text-white">
              {title}
            </DialogTitle>
          </div>
          <div className="flex items-center gap-2">
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full h-10 w-10">
                <ExternalLink size={20} />
              </Button>
            </a>
            <a href={pdfUrl} download>
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
            src={`${pdfUrl}#toolbar=0`}
            className="w-full h-full border-none"
            title={title}
          />

          {/* Mobile Overlay Fallback */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden">
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-secondary hover:bg-secondary-light text-primary-dark font-black px-8 py-6 rounded-2xl shadow-2xl">
                OPEN PDF FULLSCREEN
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
