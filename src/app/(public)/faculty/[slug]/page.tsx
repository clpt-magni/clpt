import { getFacultyBySlug, getFaculty } from "@/lib/sanity-actions";
import { urlFor } from "@/lib/sanity";
import {
  User,
  Mail,
  GraduationCap,
  MapPin,
  Briefcase,
  BookOpen,
  ChevronLeft,
  Award,
  FileText,
  Globe,
  Phone,
  Lightbulb,
  ExternalLink,
  Search,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PortableText } from "@portabletext/react";

export default async function FacultyProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const faculty = await getFacultyBySlug(slug);

  if (!faculty) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-100 selection:text-slate-900">
      {/* 1. Hero / Header Section: Minimalist Dark Slate */}
      <div className="bg-slate-900 py-12 md:py-16">
        <div className="container mx-auto px-6">
          <Link
            href="/faculty"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-10 text-xs font-semibold uppercase tracking-wider transition-colors group"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Directory
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-800 shrink-0">
              {faculty.image ? (
                <img
                  src={urlFor(faculty.image).url()}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User className="w-12 h-12 text-slate-600" />
                </div>
              )}
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold !text-white tracking-tight leading-tight mb-3">
                {faculty.prefix} {faculty.name}
              </h1>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                <p className="text-xl text-white/80 font-medium">{faculty.designation}</p>
                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/30" />
                <span className="px-3 py-1 bg-white/10 rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/20 backdrop-blur-sm">
                  {faculty.department}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Layout Grid: Sidebar (30%) and Main Content (70%) */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24">

          {/* Left Column (Sidebar) */}
          <div className="lg:col-span-4 space-y-10 md:space-y-12">

            {/* Institutional Contact Card */}
            <section className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
              <h3 className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-8">
                Institutional Contact
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-slate-400 shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
                  <div className="min-w-0">
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">Official Email</p>
                    <p className="text-sm font-semibold text-slate-900 break-all">{faculty.email || "faculty@clpt.edu.in"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-slate-400 shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
                  <div>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">Extension / Phone</p>
                    <p className="text-sm font-semibold text-slate-900">{faculty.phone || "+91 (863) 1234567"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-slate-400 shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
                  <div>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">Office Location</p>
                    <p className="text-sm font-semibold text-slate-900">{faculty.officeLocation || "Block A, Level 2"}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Qualifications: Minimalist Vertical Timeline */}
            {faculty.qualifications && faculty.qualifications.length > 0 && (
              <section className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
                <h3 className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-8">
                  Qualifications
                </h3>
                <div className="space-y-8 relative">
                  {faculty.qualifications.map((q: any, i: number) => (
                    <div key={i} className="flex gap-4 relative">
                      {/* Timeline Line */}
                      {i !== faculty.qualifications.length - 1 && (
                        <div className="absolute left-[9px] top-[24px] bottom-[-32px] w-px bg-slate-100" />
                      )}
                      <div className="w-5 h-5 rounded-full border-2 border-slate-200 bg-white shrink-0 z-10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      </div>
                      <div className="-mt-1">
                        <p className="text-sm font-bold text-slate-900 leading-tight mb-1">{q.degree}</p>
                        <p className="text-xs text-slate-500 font-medium mb-1">{q.institution}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{q.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Professional Links Card */}
            <section className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
              <h3 className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-8">
                Professional Connections
              </h3>
              <div className="grid grid-cols-2 xs:grid-cols-4 lg:grid-cols-2 gap-3">
                {[
                  { name: 'Scholar', icon: Globe, link: faculty.socialLinks?.googleScholar },
                  { name: 'LinkedIn', icon: Briefcase, link: faculty.socialLinks?.linkedIn },
                  { name: 'ORCID', icon: FileText, link: faculty.socialLinks?.orcid },
                  { name: 'GATE', icon: Lightbulb, link: faculty.socialLinks?.researchGate }
                ].map((item, i) => (
                  <Link key={i} href={item.link || '#'} target="_blank" className={`group ${!item.link && 'opacity-30 cursor-not-allowed pointer-events-none'}`}>
                    <div className="border border-slate-200 rounded-lg p-4 md:p-5 flex flex-col items-center justify-center gap-3 group-hover:bg-slate-50 transition-colors h-full">
                      <item.icon size={18} className="text-slate-400 group-hover:text-slate-900 transition-colors" />
                      <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors text-center">{item.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column (Main Content) */}
          <div className="lg:col-span-8 space-y-16 md:space-y-20">

            {/* Academic Biography Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-6 md:mb-8">Academic Biography</h2>
              <div className="prose prose-slate md:prose-lg max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-slate-900">
                {faculty.bio ? (
                  <PortableText value={faculty.bio} />
                ) : (
                  <p>No professional biography has been provided at this time. Dedicated to advancing pharmaceutical education and research through academic excellence and institutional leadership.</p>
                )}
              </div>
            </section>

            {/* Faint Divider */}
            <div className="border-t border-slate-100" />

            {/* Innovative Teaching Methods: Clean Flat Container */}
            {faculty.innovativeTeaching && faculty.innovativeTeaching.length > 0 && (
              <section className="bg-slate-50 border border-slate-200 rounded-xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    <Lightbulb size={20} className="text-slate-700" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">Innovative Teaching Methods</h3>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600 font-medium opacity-90 leading-relaxed text-sm md:text-base">
                  <PortableText value={faculty.innovativeTeaching} />
                </div>
              </section>
            )}

            {/* Research Interests (Pills) */}
            {faculty.specializations && faculty.specializations.length > 0 && (
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-8">Research Interests</h2>
                <div className="flex flex-wrap gap-2">
                  {faculty.specializations.map((interest: string, i: number) => (
                    <span key={i} className="px-3 md:px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-[11px] md:text-xs font-semibold text-slate-600 tracking-tight">
                      {interest}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Research Portfolio: Flat Bordered Cards */}
            {faculty.publications && faculty.publications.length > 0 && (
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-8 md:mb-10">Research Portfolio</h2>
                <div className="space-y-4">
                  {faculty.publications.map((p: any, i: number) => (
                    <div key={i} className="group bg-white border border-slate-200 rounded-xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                      <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                        <FileText size={24} className="text-slate-400 group-hover:text-slate-900 transition-colors" strokeWidth={1} />
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="font-bold text-slate-900 mb-3 tracking-tight leading-snug text-sm md:text-base">
                          {p.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{p.journal}</span>
                          <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[9px] font-black uppercase tracking-widest rounded-md border border-blue-100">
                            IF: {p.impactFactor || "0.00"}
                          </span>
                          <span className="text-[10px] font-bold text-slate-300 tracking-widest">{p.year}</span>
                        </div>
                      </div>
                      {p.link && (
                        <Link href={p.link} target="_blank" className="w-full sm:w-auto">
                          <Button variant="outline" size="sm" className="w-full sm:w-auto rounded-lg border-slate-200 text-slate-500 font-bold gap-2 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300">
                            View DOI <ExternalLink size={14} />
                          </Button>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom Grid: Patents & Funded Projects */}
            {(faculty.patents?.length > 0 || faculty.grants?.length > 0) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {faculty.patents?.length > 0 && (
                  <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-xl">
                    <h4 className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                      <Award size={16} className="text-slate-400" /> Intellectual Property
                    </h4>
                    <div className="space-y-6">
                      {faculty.patents.map((pat: any, i: number) => (
                        <div key={i} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                          <p className="text-sm font-bold text-slate-900 leading-tight mb-1.5">{pat.title}</p>
                          <div className="flex items-center gap-3">
                            <span className="text-[9px] font-black uppercase tracking-widest text-slate-700">{pat.status}</span>
                            <div className="w-1 h-1 rounded-full bg-slate-200" />
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{pat.year}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {faculty.grants?.length > 0 && (
                  <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-xl">
                    <h4 className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                      <BookOpen size={16} className="text-slate-400" /> Funded Projects
                    </h4>
                    <div className="space-y-6">
                      {faculty.grants.map((g: any, i: number) => (
                        <div key={i} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                          <p className="text-sm font-bold text-slate-900 leading-tight mb-1.5">{g.title}</p>
                          <div className="flex items-center gap-3">
                            <span className="text-[9px] font-black uppercase tracking-widest text-[#0a3d62]">₹{g.amount}</span>
                            <div className="w-1 h-1 rounded-full bg-slate-200" />
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{g.agency}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const facultyList = await getFaculty();
  return (facultyList || []).map((f: any) => ({
    slug: f.slug?.current,
  }));
}
