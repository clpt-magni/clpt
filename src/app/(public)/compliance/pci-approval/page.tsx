"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  ShieldCheck, 
  Eye, 
  Download,
  X,
  FileText,
  CalendarCheck
} from "lucide-react";

const pciDocuments = [
  {
    title: "PCI Approval Letter (2024-2025) - B.Pharmacy, Pharm.D, M.Pharmacy",
    filename: "PCI-APPROVAL LETTER-2024-2025-B.PHARMACY-PHARMD-MPHARMACY.pdf"
  },
  {
    title: "PCI Approval Letter (2023-2024) - B.Pharmacy, Pharm.D, M.Pharmacy",
    filename: "PCI-APPROVAL LETTER-2023-2024-B.PHARMACY-PHARM.D-M.PHARMACY.pdf"
  },
  {
    title: "PCI Approval Letter (2022-2023) - B.Pharmacy, Pharm.D, M.Pharmacy",
    filename: "PCI APPROVAL LETTER -2022-2023-B.PHARMACY-PHARM.D-M.PHARMACY.pdf"
  },
  {
    title: "PCI Approval Letter (2021-2022) - B.Pharmacy, Pharm.D, M.Pharmacy",
    filename: "PCI APPROVAL LETTER -2021-2022-B.PHARMACY-PHARM.D-M.PHARMACY.pdf"
  },
  {
    title: "PCI Approval Letter (2020-2021) - B.Pharmacy, Pharm.D, M.Pharmacy",
    filename: "PCI  APPROVAL LETTER - 2020-2021-B.PHARMACY-PHARM.D-M.PHARMACY.pdf"
  },
  {
    title: "PCI Approval Letter (2019-2020) - B.Pharmacy, Pharm.D, M.Pharmacy",
    filename: "PCI APPROVAL LETTER-2019-2020-B.PHARMACY-PHARM.D-M.PHARMACY.pdf"
  },
  {
    title: "PCI Approval Letter (2018-2019) - B.Pharmacy, Pharm.D, M.Pharmacy",
    filename: "PCI APPROVAL LETTER-2018-2019-B.PHARMACY-PHARM.D-M.PHARMACY.pdf"
  },
  {
    title: "PCI Approval Letter (2017-2018) - B.Pharmacy, Pharm.D, M.Pharmacy",
    filename: "PCI APPROVAL LETTER-2017-2018-B.PHARMACY-PHARM.D-M.PHARMACY.pdf"
  },
  {
    title: "PCI Approval Letter (2016-2017) - B.Pharmacy",
    filename: "PCI APPROVAL LETTER-2016-2017 B.PHARMACY.pdf"
  },
  {
    title: "PCI Approvals Letter (2016-2017) - B.Pharmacy",
    filename: "PCI APPROVALS LETTER -2016-2017-B.PHARMACY.pdf"
  },
  {
    title: "PCI Approval Letter (2013-2014) - B.Pharmacy",
    filename: "PCI APPROVAL LETTER- 2013-2014-B.PHARMACY.pdf"
  },
  {
    title: "PCI Approval Letter (2009-2010 to 2017-2018) - Pharm.D",
    filename: "PCI-APPROVAL LETTER-2009-2010 to 2017-2018-PHARM.D.pdf"
  },
  {
    title: "PCI Approval Letter (2009-2010 to 2012-2013) - B.Pharmacy",
    filename: "PCI APPROVAL LETTER 2009-2010 to 2012-2013 - B.PHARMACY.pdf"
  },
  {
    title: "PCI Approval Letter (2004-2008) - B.Pharmacy",
    filename: "PCI APPROVAL LETTER-2004-2008-B.PHARMACY.pdf"
  }
];

export default function PCIApprovalPage() {
  const [activeDoc, setActiveDoc] = useState<{title: string, filename: string} | null>(null);

  // Lock scroll when modal is open
  React.useEffect(() => {
    if (activeDoc) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeDoc]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/[0.03] blur-[120px] rounded-full sm:pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-400/[0.03] blur-[100px] rounded-full sm:pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-600 transition-all mb-12">
              <Link href="/">Home</Link>
              <ChevronRight size={10} />
              <Link href="/compliance">Compliance</Link>
              <ChevronRight size={10} />
              <span className="text-blue-600">PCI Approvals</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-2xl shadow-sm border border-slate-200">
                <ShieldCheck size={24} />
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Official Accreditations</div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-[0.9] mb-8"
            >
              PCI <span className="text-blue-600 italic">Approvals</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl"
            >
              View the comprehensive public ledger of the Pharmacy Council of India approval letters for all our pharmaceutical programs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Approvals Document List */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white border border-slate-100 shadow-xl shadow-slate-200/40 rounded-[3rem] p-6 md:p-12">
            
            <div className="flex items-center gap-3 mb-10 pb-6 border-b border-slate-100">
              <CalendarCheck size={24} className="text-blue-600" />
              <h2 className="text-2xl font-black text-slate-900">Historical Records</h2>
            </div>

            <div className="space-y-4">
              {pciDocuments.map((doc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 10) * 0.05 }}
                  className="flex items-center justify-between p-6 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-blue-50/50 hover:border-blue-100 transition-all group"
                >
                   <div className="flex flex-col md:flex-row md:items-center gap-4 flex-grow pr-4">
                     <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-200 shadow-sm transition-colors flex-shrink-0">
                       <FileText size={20} />
                     </div>
                     <h3 className="text-sm md:text-base font-bold text-slate-800 leading-snug">
                       {doc.title}
                     </h3>
                   </div>
                   
                   <button 
                     onClick={() => setActiveDoc(doc)}
                     className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-2xl text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-sm transition-all focus:outline-none focus:ring-4 focus:ring-blue-100 flex-shrink-0"
                     title="View Document"
                   >
                     <Eye size={20} />
                   </button>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Modal Document Viewer */}
      <AnimatePresence>
        {activeDoc && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 md:p-8 lg:p-12"
          >
             <motion.div 
               initial={{ scale: 0.95, y: 20 }}
               animate={{ scale: 1, y: 0 }}
               exit={{ scale: 0.95, y: 20 }}
               className="bg-white rounded-[2rem] w-full max-w-6xl h-full flex flex-col shadow-2xl overflow-hidden border border-slate-100"
             >
               {/* Modal Header */}
               <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 border-b border-slate-100 bg-slate-50 gap-4">
                 <div className="flex items-center gap-4 w-full sm:w-auto">
                   <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 border border-slate-200 shadow-sm flex-shrink-0">
                     <FileText size={18} />
                   </div>
                   <h3 className="font-bold text-slate-900 text-sm md:text-base truncate truncate-max-width">{activeDoc.title}</h3>
                 </div>
                 
                 <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                   <a 
                     href={`/documents/compliance/pci/${activeDoc.filename}`} 
                     download 
                     className="flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all flex-grow sm:flex-grow-0"
                   >
                     <Download size={16} /> Download PDF
                   </a>
                   <button 
                     onClick={() => setActiveDoc(null)} 
                     className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all flex-shrink-0"
                     title="Close Viewer"
                   >
                     <X size={20} />
                   </button>
                 </div>
               </div>
               
               {/* Modal Body / PDF Viewer */}
               <div className="flex-grow w-full bg-slate-100 relative">
                 <iframe 
                   src={`/documents/compliance/pci/${activeDoc.filename}`} 
                   className="w-full h-full border-none absolute inset-0"
                   title={activeDoc.title}
                 />
               </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .truncate-max-width {
          max-width: 60vw;
        }
        @media (max-width: 640px) {
           .truncate-max-width {
             max-width: 70vw;
           }
        }
      `}</style>
    </div>
  );
}
