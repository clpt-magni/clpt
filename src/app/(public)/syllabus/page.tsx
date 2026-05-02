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
import Link from "next/link";
import { client } from "@/lib/sanity";

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
    icon: GraduationCap,
    gradient: "from-blue-600 via-blue-500 to-indigo-600"
  },
  {
    program: "M.Pharmacy",
    description: "Advanced Professional Post Graduate Syllabus",
    icon: BookOpen,
    gradient: "from-indigo-600 via-indigo-500 to-purple-600"
  },
  {
    program: "Pharm.D",
    description: "Intensive Doctoral and Clinical Practice Modules",
    icon: Layers,
    gradient: "from-emerald-600 via-teal-500 to-emerald-600"
  }
];

export default async function SyllabusPage() {
  const data: SyllabusItem[] = await client.fetch(`*[_type == "syllabus"] | order(title asc)`);

  // Group syllabus data by program
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-50/50 p-8 md:p-12 rounded-[3.5rem] border border-slate-200/50 hover:shadow-2xl hover:bg-white transition-all duration-500 group relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3.5rem] pointer-events-none" />
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

      {/* Syllabi Programs Grid */}
      <main className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {groupedData.map((category, idx) => (
            <div
              key={idx}
              className="flex flex-col h-full bg-white border border-slate-100/80 rounded-[3.5rem] p-8 md:p-12 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1.5 group select-none relative overflow-hidden"
            >
              {/* Soft Ambient Overlay */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-slate-50 rounded-full -mr-24 -mt-24 pointer-events-none group-hover:scale-125 transition-transform duration-700" />

              {/* Category Header */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <category.icon size={28} />
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 py-1.5 bg-slate-50 rounded-full">
                  {category.items.length} Files
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-primary-dark tracking-tight mb-2 uppercase group-hover:text-primary transition-colors duration-300">
                {category.program}
              </h2>
              <p className="text-slate-500 text-sm font-medium mb-10 leading-relaxed italic border-b border-slate-50 pb-6">
                {category.description}
              </p>

              {/* Items List */}
              {category.items.length > 0 ? (
                <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-start">
                  {category.items.map((item, i) => (
                    <Link
                      key={item._id || i}
                      href={item.url}
                      target="_blank"
                      className="flex items-center justify-between p-5 bg-slate-50/50 hover:bg-primary-dark hover:text-white group/item rounded-2xl transition-all duration-500 border border-slate-100/50 hover:shadow-lg hover:shadow-primary-dark/5"
                    >
                      <div className="flex flex-col max-w-[70%]">
                        <span className="text-xs font-black text-slate-800 group-hover/item:text-white uppercase tracking-tight truncate transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 group-hover/item:text-white/60 transition-colors mt-1 italic">
                          {item.batch}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white/60 group-hover/item:bg-primary flex items-center justify-center text-slate-400 group-hover/item:text-white transition-all group-hover/item:scale-110 duration-300">
                        <Eye size={16} />
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-slate-400 font-medium text-sm italic py-4">No records found.</p>
              )}
            </div>
          ))}
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
