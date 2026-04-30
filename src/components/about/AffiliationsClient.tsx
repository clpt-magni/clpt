"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Search, Award, FileText, X } from "lucide-react";
import { PdfViewerModal } from "@/components/ui/PdfViewerModal";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/ui/PageHeader";

interface AffiliationItem {
  _key: string;
  title: string;
  fileUrl?: string;
}

interface AffiliationsClientProps {
  data: {
    title: string;
    summary?: string;
    approvals?: AffiliationItem[];
  };
}

export default function AffiliationsClient({ data }: AffiliationsClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePdf, setActivePdf] = useState({ title: "", url: "" });

  const filteredApprovals = data.approvals?.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const openPdf = (title: string, url: string) => {
    setActivePdf({ title, url });
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title={data.title}
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Regulatory Compliance" }
        ]}
        description={data.summary || "Recognized and approved by leading regulatory bodies including AICTE, PCI, and affiliated with ANU."}
      />

      <div className="container mx-auto px-4 py-20 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* Institutional Trust Badges */}
          <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {["/images/naac.jpg", "/images/nba.png", "/images/iso.jpg", "/images/pci.png"].map((src, i) => (
              <div key={i} className="flex items-center justify-center p-4">
                <img src={src} alt="Institutional Badge" className="h-20 w-auto object-contain" />
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative group max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
              <Search size={18} />
            </div>
            <Input
              type="text"
              placeholder="Search affiliations..."
              className="w-full bg-white border-none shadow-xl rounded-2xl py-6 pl-14 pr-8 text-sm font-bold text-primary-dark placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-primary transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-6 flex items-center text-slate-400 hover:text-primary-dark transition-colors"
                title="Clear Search"
              >
                <X size={20} />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApprovals.length > 0 ? (
              filteredApprovals.map((item, i) => (
                <Card key={item._key || i} className="border-none shadow-md hover:shadow-xl transition-all bg-white rounded-[2rem] overflow-hidden group">
                  <CardContent className="p-6 flex flex-col h-full justify-between gap-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary-dark group-hover:bg-secondary group-hover:text-primary-dark transition-all duration-300 shrink-0">
                        <Award size={24} />
                      </div>
                      <h3 className="text-[13px] font-black text-primary-dark group-hover:text-primary transition-colors leading-tight uppercase tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    {item.fileUrl && (
                      <Button
                        onClick={() => openPdf(item.title, item.fileUrl!)}
                        size="sm"
                        className="w-full bg-primary hover:bg-primary-dark text-white h-12 rounded-xl font-black uppercase tracking-widest text-[9px] shadow-sm transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                      >
                        <Eye size={14} /> View PDF
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-white rounded-[40px] shadow-sm">
                <p className="text-slate-400 italic text-xl">No documents found matching "{searchTerm}"</p>
                <Button
                  variant="link"
                  className="mt-4 text-primary font-bold"
                  onClick={() => setSearchTerm("")}
                >
                  Clear search filters
                </Button>
              </div>
            )}
          </div>

          {/* Institutional Trust Badges */}
          <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {["/images/naac.jpg", "/images/nba.png", "/images/iso.jpg", "/images/pci.png"].map((src, i) => (
              <div key={i} className="flex items-center justify-center p-4">
                <img src={src} alt="Institutional Badge" className="h-20 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <PdfViewerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={activePdf.title}
        pdfUrl={activePdf.url}
      />
    </div>
  );
}
