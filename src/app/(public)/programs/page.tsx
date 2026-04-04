import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { GraduationCap, Award, Clock, Users, ArrowRight } from "lucide-react";
import { getPrograms } from "@/lib/sanity-actions";

export default async function ProgramsPage() {
  const sanityPrograms = await getPrograms();
  
  // Fallback to empty array if Sanity returns null
  const programs = sanityPrograms || [];

  return (
    <div className="flex flex-col min-h-screen font-roboto pb-24 bg-slate-50">
      {/* Page Header */}
      <section className="bg-primary-dark py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 -z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-black font-poppins mb-4 tracking-tight">Academic Programs</h1>
          <p className="text-white/70 text-xl font-medium max-w-2xl mx-auto italic">
            World-class pharmaceutical education designed for the future of global healthcare.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pt-16">
        {programs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[40px] border border-slate-100 shadow-xl">
             <GraduationCap className="mx-auto text-slate-200 w-24 h-24 mb-6" />
             <h3 className="text-2xl font-bold text-slate-400">No Programs Found</h3>
             <p className="text-slate-400">Please populate your programs in the Sanity Studio.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {programs.map((prog: any, i: number) => (
              <Card key={i} className="border-none shadow-xl rounded-[32px] overflow-hidden flex flex-col bg-white group hover:shadow-2xl transition-all duration-500 border border-slate-100">
                {/* Header: Solid Blue Bar */}
                <div className="bg-[#0a3d62] p-6 md:p-8 flex items-center justify-between">
                  <h2 className="text-white !text-white text-2xl md:text-3xl font-black font-poppins tracking-tight">
                    {prog.title} {prog.type ? `(${prog.type.toUpperCase()})` : ''}
                  </h2>
                </div>
                
                <CardContent className="p-8 md:p-10 flex-1 flex flex-col">
                  {/* Consolidated Info Box */}
                  <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-primary mb-8">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-black text-slate-800">Duration:</span>
                        <span className="text-sm text-slate-600 font-bold">{prog.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-black text-slate-800">Intake:</span>
                        <span className="text-sm text-slate-600 font-bold">{prog.intake} Students</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 text-base leading-relaxed mb-8 flex-1 font-medium">
                    {prog.description}
                  </p>

                  {/* Dynamic Sections: Subjects or Specializations */}
                  <div className="space-y-8 mb-10">
                    {prog.subjects && prog.subjects.length > 0 && (
                      <div>
                        <h3 className="text-sm font-black text-primary uppercase tracking-widest mb-4">Core Subjects</h3>
                        <div className="flex flex-wrap gap-2">
                          {prog.subjects.map((s: string, j: number) => (
                            <span key={j} className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider border border-slate-200/50">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {prog.specializations && prog.specializations.length > 0 && (
                      <div>
                        <h3 className="text-sm font-black text-primary uppercase tracking-widest mb-4">Available Specializations</h3>
                        <ul className="space-y-2">
                          {prog.specializations.map((spec: string, k: number) => (
                            <li key={k} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* CTA Area */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6 border-t border-slate-50">
                    <Link href={`/programs/${prog.slug.current}`} className="flex-1">
                      <Button variant="outline" className="w-full py-7 text-xs font-black rounded-xl border-2 border-[#0a3d62] text-[#0a3d62] hover:bg-[#0a3d62] hover:text-white transition-all uppercase tracking-[0.2em] group">
                        Admission Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
