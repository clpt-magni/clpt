import { getProgramBySlug, getPrograms } from "@/lib/sanity-actions";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import {
  Clock,
  Users,
  GraduationCap,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  Briefcase,
  Award
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProgramPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProgramDetailPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = await getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  const primaryColor = program.theme?.primaryColor?.hex || "#0a3d62";
  const heroBgColor = program.theme?.backgroundColor?.hex || "#0a3d62";

  return (
    <div className="min-h-screen bg-white font-roboto">
      {/* Hero Section */}
      <section 
        className="relative py-20 text-white overflow-hidden"
        style={{ backgroundColor: heroBgColor }}
      >
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white mb-8 group transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Programs
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-white/10">
              <Award size={14} style={{ color: program.theme?.primaryColor?.hex || "#ffcc00" }} />
              {program.type?.toUpperCase() || 'Academic Program'}
            </div>

            <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-8 font-poppins leading-tight text-white !text-white">
              {program.title}
            </h1>

            <p className="text-xl text-white/80 leading-relaxed font-medium max-w-3xl mb-12 italic">
              {program.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10 flex items-center gap-5 group hover:bg-white/10 transition-colors">
                <div 
                  className="p-4 rounded-2xl shadow-lg"
                  style={{ backgroundColor: primaryColor, boxShadow: `0 10px 15px -3px ${primaryColor}40` }}
                >
                  <Clock className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Duration</p>
                  <p className="font-bold text-white text-lg">{program.duration}</p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10 flex items-center gap-5 group hover:bg-white/10 transition-colors">
                <div 
                  className="p-4 rounded-2xl shadow-lg"
                  style={{ backgroundColor: primaryColor, boxShadow: `0 10px 15px -3px ${primaryColor}40` }}
                >
                  <Users className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Intake</p>
                  <p className="font-bold text-white text-lg">{program.intake} Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-16">
              {program.detailedDescription && (
                <div className="prose prose-lg prose-slate max-w-none prose-headings:font-poppins prose-headings:font-black prose-headings:text-primary-dark">
                  <PortableText value={program.detailedDescription} />
                </div>
              )}

              {program.subjects && program.subjects.length > 0 && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-black text-primary-dark font-poppins uppercase tracking-tight">Core Focus Areas</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {program.subjects.map((subject: string, i: number) => (
                      <div key={i} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                        <CheckCircle2 style={{ color: primaryColor }} className="w-5 h-5 mt-1 shrink-0" />
                        <span className="font-bold text-slate-700">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {program.specializations && program.specializations.length > 0 && (
                <div 
                  className="p-10 sm:p-16 rounded-[48px] space-y-10 border"
                  style={{ backgroundColor: `${primaryColor}08`, borderColor: `${primaryColor}15` }}
                >
                  <h2 className="text-3xl font-black text-primary-dark font-poppins text-center">Specializations Offered</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {program.specializations.map((spec: string, i: number) => (
                      <div key={i} className="bg-white p-6 rounded-3xl shadow-sm flex items-center justify-between group hover:scale-[1.02] transition-transform">
                        <span className="font-black text-primary-dark">{spec}</span>
                        <ChevronRight style={{ color: primaryColor }} className="group-hover:translate-x-1 transition-transform" size={20} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4 space-y-12">
              <div className="sticky top-12 space-y-8">
                <div className="bg-slate-900 rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
                  <div className="relative z-10 space-y-8">
                    <h3 className="text-2xl font-black font-poppins text-white !text-white">Eligibility & Admissions</h3>
                    
                    {program.eligibility && (
                      <div className="flex gap-4">
                        <GraduationCap style={{ color: primaryColor }} className="w-6 h-6 shrink-0" />
                        <div className="text-sm font-medium text-slate-300 leading-relaxed prose prose-invert prose-sm">
                          <PortableText value={program.eligibility} />
                        </div>
                      </div>
                    )}

                    {program.admissionCriteria && program.admissionCriteria.length > 0 && (
                      <div className="space-y-4 pt-4 border-t border-white/10">
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Admission Requirements</p>
                        <ul className="space-y-3">
                          {program.admissionCriteria.map((point: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-xs font-bold text-slate-300">
                              <CheckCircle2 style={{ color: primaryColor }} size={14} className="mt-0.5 shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Link href="/admissions" className="block">
                      <Button 
                        className="w-full text-white font-black py-8 rounded-2xl shadow-xl transition-all uppercase tracking-widest text-[10px]"
                        style={{ backgroundColor: primaryColor }}
                      >
                        Start Enrollment
                      </Button>
                    </Link>
                  </div>
                </div>

                {program.careerProspects && program.careerProspects.length > 0 && (
                  <div className="p-8 border border-slate-100 rounded-[40px] bg-white">
                    <div className="flex items-center gap-3 mb-8">
                      <Briefcase style={{ color: primaryColor }} className="w-5 h-5" />
                      <h4 className="font-black text-primary-dark uppercase tracking-wider text-sm">Career Prospects</h4>
                    </div>
                    <ul className="space-y-4">
                      {program.careerProspects.map((career: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: program.theme?.secondaryColor?.hex || "#ffcc00" }} />
                          {career}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const programs = await getPrograms();
  return (programs || []).map((program: any) => ({
    slug: program.slug.current,
  }));
}
