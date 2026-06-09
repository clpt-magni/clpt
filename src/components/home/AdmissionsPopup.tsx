"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdmissionsPopup() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Show popup after a short 1.5 second delay
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(openTimer);
  }, []);

  if (!mounted) return null;

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Container (Scrollable on small screens, fits any device height) */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="bg-white rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl border border-slate-100 relative z-10 flex flex-col font-poppins max-h-[92vh]"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 z-50 p-2 bg-slate-100 hover:bg-red-500 hover:text-white rounded-full text-slate-500 transition-all active:scale-90"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <div className="overflow-y-auto flex-1">
              {/* Top Header Card */}
              <div className="relative bg-primary p-6 text-white flex flex-col justify-center items-center overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16" />

                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center mb-2.5 text-secondary border border-secondary/20 shadow-inner">
                  <GraduationCap size={20} />
                </div>

                <span className="text-secondary text-[10px] font-black tracking-[0.2em] uppercase mb-1">
                  Admissions Open 2026-27
                </span>
                <h2 className="text-base md:text-lg font-bold tracking-tight leading-snug text-white max-w-sm">
                  Chalapathi Institute of Pharmaceutical Sciences, Guntur, AP
                </h2>
              </div>

              {/* Modal Body / Info */}
              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-0.5">
                    Featured Programs
                  </h3>
                  <div className="grid grid-cols-1 gap-2 font-roboto">
                    {[
                      { name: "B. Pharmacy", duration: "4 Years" },
                      { name: "Pharm.D", duration: "6 Years" },
                      { name: "M. Pharmacy", duration: "2 Years" },
                    ].map((p, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100/70 rounded-xl hover:bg-slate-100/30 transition-all group"
                      >
                        <span className="font-bold text-sm text-slate-700 font-poppins">{p.name}</span>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 bg-white border border-slate-100 rounded-full text-slate-500">
                          {p.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Codes strip */}
                <div className="bg-sky-50 border border-sky-100/60 p-3 rounded-xl flex items-start gap-2.5">
                  <AlertCircle className="text-sky-600 shrink-0 w-4.5 h-4.5 mt-0.5" />
                  <div className="text-[11px] leading-normal">
                    <p className="font-bold text-sky-950 font-poppins">Counseling Codes</p>
                    <p className="text-sky-800 font-medium mt-0.5">
                      AP EAPCET: <span className="font-bold text-sky-950 underline">CLPT</span> | AP PGECET: <span className="font-bold text-sky-950 underline">CLPT1</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="px-6 pb-6 flex flex-col gap-2.5">
                <div className="grid grid-cols-2 gap-2.5">
                  <Link href="/admissions/procedure" onClick={closePopup} className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 font-bold py-4 rounded-lg text-[10px] uppercase tracking-wider transition-all"
                    >
                      Procedure
                    </Button>
                  </Link>
                  <Link href="/admissions/fee-structure" onClick={closePopup} className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 font-bold py-4 rounded-lg text-[10px] uppercase tracking-wider transition-all"
                    >
                      Fee Structure
                    </Button>
                  </Link>
                </div>

                <Link href="/admissions#contact-admissions" onClick={closePopup} className="w-full">
                  <Button className="w-full bg-secondary hover:bg-secondary-light text-primary-dark font-black py-5 rounded-lg text-[10px] uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-1.5 border-none">
                    Enquire Now <ArrowRight size={12} />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
