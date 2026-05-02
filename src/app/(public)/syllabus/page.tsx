import {
  BookOpen,
  FileText,
  GraduationCap,
  Layers,
  ArrowDownToLine,
  Eye,
  Sparkles
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { client } from "@/lib/sanity";
import SyllabusAccordions from "./SyllabusAccordions";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface SyllabusItem {
  _id: string;
  program: string;
  title: string;
  batch: string;
  url: string;
}

const PROGRAM_META = [
  {
    program: "B.Pharmacy",
    description: "Comprehensive Undergraduate Coursework & Curricula",
    icon: "GraduationCap",
  },
  {
    program: "M.Pharmacy",
    description: "Advanced Professional Post Graduate Syllabus",
    icon: "BookOpen",
  },
  {
    program: "Pharm.D",
    description: "Intensive Doctoral and Clinical Practice Modules",
    icon: "Layers",
  }
];

export default async function SyllabusPage() {
  const data: SyllabusItem[] = await client.fetch(`*[_type == "syllabus"] | order(title asc)`);

  const groupedData = PROGRAM_META.map(meta => {
    return {
      ...meta,
      items: data.filter(item => item.program === meta.program)
    };
  });

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <PageHeader
        title="Institutional Course Syllabus"
        breadcrumbs={[
          { label: "Syllabus" }
        ]}
        description="Access official curriculum documents and academic syllabi for all pharmacy programs designed to meet world-class regulatory standards."
      />

      {/* Hero Header Strip */}
      <section className="py-12 bg-white relative border-b border-slate-100 overflow-hidden select-none">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-50/50 p-8 md:p-12 rounded-[2.5rem] border border-slate-200/50 hover:shadow-2xl hover:bg-white transition-all duration-500 group relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none" />
            <div className="flex items-center gap-6 relative z-10">
              <div className="w-16 h-16 rounded-3xl bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                <FileText size={32} />
              </div>
              <div>
                <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full border border-primary/10">Academic Excellence</span>
                <h3 className="text-2xl font-black text-primary-dark uppercase tracking-tight mt-2">Full Syllabus Repository</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-lg mt-1 italic">
                  Download the complete institutional academic handbook (PDF) to view courses, credit rules, and testing schemes.
                </p>
              </div>
            </div>
            <a
              href="/documents/syllabus/college-curriculum.pdf"
              target="_blank"
              className="px-10 py-5 bg-primary-dark hover:bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 active:scale-95 flex items-center gap-2 shadow-xl hover:shadow-primary/20 relative z-10"
            >
              <ArrowDownToLine size={18} /> Download Handbook
            </a>
          </div>
        </div>
      </section>

      {/* Full-Width Accordion Tabs Section */}
      <main className="container mx-auto px-6 py-16 md:py-24 flex-1">
        <div className="max-w-5xl mx-auto space-y-6">
          <SyllabusAccordions data={groupedData} />
        </div>
      </main>

      {/* Academic Quality Accreditation Footer */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <div className="flex items-center justify-center gap-2 text-primary font-black uppercase text-xs tracking-widest mb-4">
            <Sparkles size={18} className="animate-pulse" /> Global Standard Curriculum
          </div>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] opacity-80 leading-relaxed">
            Chalapathi Institute of Pharmaceutical Sciences • Curriculum Office
          </p>
        </div>
      </section>
    </div>
  );
}
