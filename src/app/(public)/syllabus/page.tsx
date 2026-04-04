"use client";

import {
  BookOpen,
  Download,
  FileText,
  GraduationCap,
  Calendar,
  Layers,
  ChevronRight,
  ArrowDownToLine,
  Eye
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const syllabusData = [
  {
    program: "B.Pharmacy",
    description: "Bachelor of Pharmacy Curriculum & Syllabi",
    icon: GraduationCap,
    color: "blue",
    items: [
      {
        title: "B-Pharmacy Curriculum",
        batch: "w.e.f 2017 EAMCET Batch",
        url: "/documents/syllabus/b-pharm-2017.pdf"
      },
      {
        title: "B-Pharmacy Curriculum",
        batch: "w.e.f 2016 EAMCET Batch",
        url: "/documents/syllabus/b-pharm-2016.pdf"
      },
      {
        title: "B-Pharmacy Curriculum",
        batch: "w.e.f 2013 EAMCET Batch",
        url: "/documents/syllabus/b-pharm-2013.pdf"
      },
    ]
  },
  {
    program: "M.Pharmacy",
    description: "Master of Pharmacy Specialization Syllabi",
    icon: BookOpen,
    color: "indigo",
    items: [
      {
        title: "M-Pharmacy Curriculum",
        batch: "w.e.f 2017 EAMCET Batch",
        url: "/documents/syllabus/m-pharm-2017.pdf"
      },
    ]
  },
  {
    program: "Pharm.D",
    description: "Doctor of Pharmacy Year-wise Curriculum",
    icon: Layers,
    color: "slate",
    items: [
      { title: "Pharmacotherapeutics I & II", batch: "Special Subject", url: "/documents/syllabus/pharm-d-pharmacotherapeutics.pdf" },
      { title: "Pharm.D - First Year", batch: "Academic Year 1", url: "/documents/syllabus/pharm-d-y1.pdf" },
      { title: "Pharm.D - Second Year", batch: "Academic Year 2", url: "/documents/syllabus/pharm-d-y2.pdf" },
      { title: "Pharm.D - Third Year", batch: "Academic Year 3", url: "/documents/syllabus/pharm-d-y3.pdf" },
      { title: "Pharm.D - Fourth Year", batch: "Academic Year 4", url: "/documents/syllabus/pharm-d-y4.pdf" },
      { title: "Pharm.D - Fifth Year", batch: "Academic Year 5", url: "/documents/syllabus/pharm-d-y5.pdf" },
    ]
  }
];

export default function SyllabusPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Institutional Hero Section */}
      <section className="bg-slate-50 pt-24 pb-20 md:pt-40 md:pb-32 relative overflow-hidden border-b border-slate-100/50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/[0.03] blur-[120px] rounded-full -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-400/[0.03] blur-[100px] rounded-full -ml-20 -mb-20" />

        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-blue-600/5 border border-blue-600/10 rounded-full text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Academic Resources
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight mb-8 leading-[0.95]">
              Course <br />
              <span className="text-blue-600">Syllabus</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Access official curriculum documents and academic syllabi for all pharmacy programs.
              Our curriculum is designed to meet international standards and regulatory requirements.
            </p>

            <div className="mt-12 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href="/documents/syllabus/college-curriculum.pdf" target="_blank">
                <Button className="h-14 px-8 rounded-2xl bg-slate-900 hover:bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl shadow-slate-900/10 transition-all">
                  <ArrowDownToLine size={16} className="mr-2" /> Download Full Curriculum
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabi Grid */}
      <main className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {syllabusData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col h-full bg-white border border-slate-100 rounded-[2.5rem] p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <category.icon size={28} />
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 py-1 bg-slate-50 rounded-full">
                  {category.items.length} Files
                </div>
              </div>

              <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2 uppercase tracking-widest text-sm">
                {category.program}
              </h2>
              <p className="text-slate-500 text-sm font-medium mb-8">
                {category.description}
              </p>

              {/* Items List */}
              <div className="space-y-4">
                {category.items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.url}
                    target="_blank"
                    className="flex items-center justify-between p-4 bg-slate-50/50 hover:bg-slate-900 group/item rounded-2xl transition-all duration-300 border border-slate-100/50"
                  >
                    <div className="flex flex-col max-w-[70%]">
                      <span className="text-xs font-black text-slate-900 group-hover/item:text-white truncate transition-colors">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 group-hover/item:text-slate-400 transition-colors">
                        {item.batch}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-white/50 group-hover/item:bg-blue-600 flex items-center justify-center text-slate-400 group-hover/item:text-white transition-all">
                      <Eye size={14} />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Official Bottom Branding */}
      <section className="bg-slate-50 py-20 border-t border-slate-100/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] opacity-50">
            CLPT Academic Quality • Curriculum & Syllabus Office
          </p>
        </div>
      </section>
    </div>
  );
}
