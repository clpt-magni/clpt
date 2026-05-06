"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap, Calendar, BookOpen, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdmissionsPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    // Show popup after a short 1.5 second delay
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const duration = 15000; // 15 seconds
    const intervalTime = 50; // Update every 50ms for smooth transition
    const steps = duration / intervalTime;
    let currentStep = 0;

    const progressTimer = setInterval(() => {
      currentStep++;
      const remainingProgress = 100 - (currentStep / steps) * 100;
      setProgress(remainingProgress);

      if (currentStep >= steps) {
        clearInterval(progressTimer);
        closePopup();
      }
    }, intervalTime);

    return () => clearInterval(progressTimer);
  }, [isOpen]);

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

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl border border-slate-100 relative z-10 flex flex-col font-poppins"
          >
            {/* Countdown Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-[6px] bg-slate-100 z-50">
              <div
                className="h-full bg-secondary transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-50 p-2.5 bg-slate-100 hover:bg-red-500 hover:text-white rounded-full text-slate-500 transition-all active:scale-90"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Top Header Card */}
            <div className="relative bg-primary p-8 text-white flex flex-col justify-center items-center overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16" />

              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 text-secondary border border-secondary/20 shadow-inner">
                <GraduationCap size={24} />
              </div>

              <span className="text-secondary text-xs font-black tracking-[0.25em] uppercase mb-1">
                Admissions Open 2026-27
              </span>
              <h2 className="text-xl md:text-2xl font-black tracking-tight leading-none mb-2 text-white">
                Chalapathi Institute of Pharmaceutical Sciences, Guntur, AP
              </h2>
            </div>

            {/* Modal Body / Info */}
            <div className="p-8 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Featured Programs
                </h3>
                <div className="grid grid-cols-1 gap-3 font-roboto">
                  {[
                    { name: "B. Pharmacy", duration: "4 Years" },
                    { name: "Pharm.D", duration: "6 Years" },
                    { name: "M. Pharmacy", duration: "2 Years" },
                  ].map((p, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-slate-100/50 transition-all group"
                    >
                      <span className="font-bold text-slate-800 font-poppins">{p.name}</span>
                      <span className="text-xs font-bold px-3 py-1 bg-white border rounded-full text-slate-500">
                        {p.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Codes strip */}
              <div className="bg-sky-50 border border-sky-100 p-4 rounded-2xl flex items-start gap-3">
                <AlertCircle className="text-sky-600 shrink-0 w-5 h-5 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <p className="font-bold text-sky-900 font-poppins">Counseling Codes</p>
                  <p className="text-sky-800/80 font-medium mt-0.5">
                    AP EAPCET: <span className="font-bold text-sky-900 underline">CLPT</span> | AP PGECET: <span className="font-bold text-sky-900 underline">CLPT1</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="px-8 pb-8 flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <Link href="/admissions/procedure" onClick={closePopup} className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 font-bold py-5 rounded-xl text-xs uppercase tracking-wider transition-all"
                  >
                    Procedure
                  </Button>
                </Link>
                <Link href="/admissions/fee-structure" onClick={closePopup} className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 font-bold py-5 rounded-xl text-xs uppercase tracking-wider transition-all"
                  >
                    Fee Structure
                  </Button>
                </Link>
              </div>

              <Link href="/admissions#contact-admissions" onClick={closePopup} className="w-full">
                <Button className="w-full bg-secondary hover:bg-secondary-light text-primary-dark font-black py-6 rounded-xl text-xs uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-2 border-none">
                  Enquire Now <ArrowRight size={14} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
