import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, BookOpen, Microscope, Users, GraduationCap, Calendar, Laptop, Download, Briefcase, Clock, MapPin } from "lucide-react";
import { getNotices, getNews, getEvents } from "@/lib/sanity-actions";

import HeroVideo from "@/components/home/HeroVideo";
import AdmissionsPopup from "@/components/home/AdmissionsPopup";
import InternshipReportSection from "@/components/home/InternshipReportSection";

export const metadata: Metadata = {
  title: "Chalapathi Institute of Pharmaceutical Sciences, Guntur",
  description: "Explore courses, admissions, placements, research, and campus facilities at Chalapathi Institute of Pharmaceutical Sciences, Guntur.",
  alternates: {
    canonical: "/",
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const notices = await getNotices().catch(() => []);
  const news = await getNews().catch(() => []);
  const events = await getEvents().catch(() => []);

  return (
    <div className="flex flex-col min-h-screen">
      <AdmissionsPopup />
      {/* Hero Section */}
      <HeroVideo />

      {/* Quick Links Strip */}
      <div className="container mx-auto px-4 relative z-20 -translate-y-[60px]">
        <div className="grid grid-cols-2 md:grid-cols-6 bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100">
          {[
            { icon: Users, label: "Admissions", href: "/admissions" },
            { icon: Calendar, label: "Academic Calendar", href: "/academic-calendar" },
            { icon: Microscope, label: "PPT Presentations", href: "/resources/powerpoint-presentations" },
            { icon: BookOpen, label: "Repository", href: "https://clptlibrary.weebly.com/repository-services.html" },
            { icon: Laptop, label: "Assessment Portal", href: "https://clptexamination.weebly.com/" },
            { icon: GraduationCap, label: "Portal", href: "/student-dashboard" }
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group relative p-8 flex flex-col items-center text-center gap-4 border-r last:border-r-0 hover:bg-primary transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark to-primary-light opacity-0 group-hover:opacity-100 transition-opacity z-0" />
              <item.icon className="w-10 h-10 text-primary group-hover:text-white transition-all transform group-hover:-translate-y-1 z-10" />
              <span className="font-bold text-sm tracking-wider text-slate-800 group-hover:text-white transition-all transform group-hover:-translate-y-1 z-10 font-poppins">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Programs Section   <Link href={p.href}> */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl font-bold pb-4 inline-block text-primary font-poppins">
              Our Programs
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-secondary rounded-full" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-roboto">
            {[
              { title: "B. Pharmacy", desc: "A 4 Year Skill Oriented Student Centric Undergraduate Program integrated with Indian Knowledge System focusing on comprehensive pharmaceutical sciences.", href: "/programs/b-pharmacy" },
              { title: "M. Pharmacy", desc: "A 2 Year Skill Oriented Student Centric Post Graduate Program integrated with Indian Knowledge System with multiple specialized branches.", href: "/programs/m-pharmacy" },
              { title: "Pharm.D", desc: "A 6 Year Skill Oriented Student Centric Post Graduate Program integrated with Indian Knowledge System focusing on clinical pharmacy and patient care.", href: "/programs/pharmd" },
              { title: "Ph.D Program", desc: "A Skill Oriented Student Centric Doctoral Program integrated with Indian Knowledge System with multiple specialized branches.", href: "/programs/phd" }
            ].map((p, i) => (
              <Card key={i} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-slate-100 bg-slate-50 flex flex-col h-full overflow-hidden">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl text-primary-dark group-hover:text-primary transition-colors font-poppins">
                    <Link href={p.href}>{p.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8 flex-1 flex flex-col justify-between">
                  <p className="text-slate-600 mb-8 leading-relaxed italic">
                    {p.desc}
                  </p>
                  <Link href="/programs">
                    <Button variant="outline" className="w-full border-primary text-primary font-bold hover:bg-primary hover:text-white rounded-lg py-6 group-hover:shadow-md transition-all font-poppins">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Training Report Template Section */}
      <InternshipReportSection />

      {/* Important Notices Section */}
      <section className="py-16 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl font-bold pb-4 inline-block text-primary font-poppins relative">
              Important Notices & Announcements
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-secondary rounded-full" />
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto mt-4 text-base font-medium">
              Stay informed with the latest academic notifications, examination updates, and institutional circulars directly from the administration.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {notices.length > 0 ? (
              notices.slice(0, 3).map((notice: any, i: number) => (
                <Card key={notice._id || i} className="border-none shadow-md bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all group p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-[6px] border-primary">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        notice.priority === 'High' ? 'bg-red-50 text-red-600' :
                        notice.priority === 'Medium' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
                      }`}>
                        {notice.priority || 'Normal'} Priority
                      </span>
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-tighter">
                        {notice.date ? new Date(notice.date).toLocaleDateString('en-IN', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric'
                        }) : 'Recent'}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl text-primary-dark group-hover:text-primary transition-colors font-poppins">
                      {notice.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                      {notice.content}
                    </p>
                  </div>
                  <Link href="/notices" className="text-primary font-bold flex items-center gap-1.5 shrink-0 text-sm group-hover:translate-x-1 transition-transform">
                    Read Full Notice <ArrowRight size={14} />
                  </Link>
                </Card>
              ))
            ) : (
              <p className="text-slate-400 italic text-center">No active announcements at the moment.</p>
            )}
          </div>

          <div className="text-center mt-12">
            <Link href="/notices">
              <Button variant="outline" className="border-primary text-primary font-bold px-10 py-6 rounded-lg hover:bg-primary hover:text-white transition-all shadow-sm font-poppins">
                View All Institutional Notices
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ticker from Sanity */}
      <section className="bg-primary py-6 overflow-hidden border-y border-white/10">
        <div className="flex items-center overflow-hidden">
          <div className="animate-scroll flex whitespace-nowrap gap-12 px-12">
            {notices.length > 0 ? (
              notices.concat(notices, notices).map((notice: any, i: number) => (
                <span key={`${notice._id}-${i}`} className="text-white font-bold tracking-tight flex items-center gap-4 font-poppins">
                  <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(244,180,0,0.8)]" />
                  {notice.title.toUpperCase()}
                </span>
              ))
            ) : (
              [
                "FALL 2026 ADMISSIONS ARE NOW OPEN!",
                "JOIN US FOR THE ANNUAL PHARMACY SYMPOSIUM.",
                "NEW RESEARCH LAB INAUGURATED YESTERDAY.",
                "100% PLACEMENT RECORD FOR B.PHARM BATCH 2024"
              ].map((text, i) => (
                <span key={i} className="text-white font-bold tracking-tight flex items-center gap-4 font-poppins">
                  <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(244,180,0,0.8)]" />
                  {text}
                </span>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Placements & Research */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-roboto">
            <div className="bg-primary-dark text-white p-14 rounded-3xl text-center flex flex-col items-center group transition-all hover:bg-slate-900 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
              <div className="w-20 h-20 bg-secondary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner rotate-3 group-hover:rotate-0">
                <Briefcase size={40} className="text-secondary" />
              </div>
              <h2 className="text-3xl font-bold mb-6 !text-white tracking-tight font-poppins">Exceptional Placement Record</h2>
              <p className="mb-10 text-slate-300 max-w-sm leading-relaxed text-lg">Our students are consistently placed in top global pharmaceutical companies, healthcare institutions, and research organizations.</p>
              <Link href="/placements">
                <Button className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-10 py-7 text-lg rounded-xl shadow-xl transition-all transform hover:-translate-y-1 font-poppins border-none">
                  View Placement Reports
                </Button>
              </Link>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-14 rounded-3xl text-center flex flex-col items-center group transition-all hover:border-primary shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner -rotate-3 group-hover:rotate-0">
                <Microscope size={40} className="text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-primary-dark tracking-tight font-poppins">Advanced Research Hub</h2>
              <p className="mb-10 text-slate-500 max-w-sm leading-relaxed text-lg">CLPT hosts state-of-the-art laboratories and dedicated research wings focusing on drug discovery, formulation, and clinical sciences.</p>
              <Link href="/research">
                <Button variant="outline" className="border-primary text-primary font-bold px-10 py-7 text-lg rounded-xl hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-md font-poppins">
                  Explore Research Areas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
