import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building,
  BookOpen,
  Microscope,
  Briefcase,
  GraduationCap,
  Quote,
  Award,
  Users,
  HeartHandshake,
  ExternalLink
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chairman's Profile | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Profile of Sri Y.V. Anjaneyulu Garu, Founder President & Chairman of Chalapathi Educational Society. A visionary leader in professional education and public service.",
};

export default function ChairmanProfile() {
  return (
    <div className="flex flex-col min-h-screen font-roboto pb-24 bg-slate-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-dark to-primary-light py-20 text-white text-center shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 opacity-20 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl !text-white font-bold font-poppins mb-2 animate-in slide-in-from-top duration-700">Chairman's Profile</h1>
          <p className="text-white/80 text-lg md:text-xl font-light">Leading with Vision, Educating with Passion</p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Sidebar Hero */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            <Card className="border-none shadow-2xl rounded-[40px] bg-white overflow-hidden text-center group">
              <div className="h-32 bg-primary transition-all group-hover:h-36 duration-500" />
              <CardContent className="-mt-24 pb-12 px-8 relative">
                <div className="relative inline-block mb-8">
                  <img
                    src="/images/chairman.jpg"
                    alt="Sri Y.V. Anjaneyulu Garu"
                    className="w-48 h-auto max-h-72 rounded-2xl border-[6px] border-white shadow-2xl mx-auto mb-8 object-contain transform transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute -bottom-4 right-0 bg-secondary text-primary-dark p-3 rounded-2xl shadow-xl animate-bounce">
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-primary-dark font-poppins mb-2">Sri Y.V. Anjaneyulu Garu</h2>
                <p className="text-secondary-dark font-black uppercase tracking-[0.2em] text-xs mb-6">Founder President & Chairman</p>

                <div className="bg-slate-50 rounded-3xl p-6 mb-8 text-slate-600 space-y-2 border border-slate-100">
                  <p className="text-sm font-semibold text-primary">Chalapathi Educational Society</p>
                  <p className="text-xs italic font-medium uppercase leading-relaxed uppercase tracking-wider">M.A. (Economics)</p>
                </div>

                <div className="space-y-4 pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/50 border border-transparent hover:border-primary/10 transition-all">
                    <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-primary">
                      <Building className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Office</p>
                      <p className="text-sm font-bold text-primary-dark">Chalapathi Group of Institutions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/50 border border-transparent hover:border-primary/10 transition-all">
                    <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-primary">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Leadership</p>
                      <p className="text-sm font-bold text-primary-dark">Former MLA, Sattenapalli</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Dossier Content */}
          <div className="lg:col-span-8 space-y-12">

            {/* Professional Manifesto */}
            <section className="space-y-6 animate-in slide-in-from-right duration-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-1 w-12 bg-secondary rounded-full" />
                <h2 className="text-lg !text-white font-black text-primary-white uppercase tracking-widest">The Architect of Ambition</h2>
              </div>
              <div className="bg-white p-10 md:p-14 rounded-[40px] shadow-xl border border-slate-100 relative group overflow-hidden">
                <Quote className="absolute top-8 right-8 w-24 h-24 text-slate-50 opacity-50 group-hover:text-primary/10 transition-all duration-700" />
                <div className="relative z-10 space-y-6 text-slate-700 leading-relaxed text-xl font-medium">
                  <p>
                    Sri Yalamanchili Veeranjaneyulu (popularly known as Y.V. Anjaneyulu) is a distinguished academician, visionary philanthropist, and former legislator who has redefined the landscape of professional education in Guntur and Andhra Pradesh.
                  </p>
                  <p className="text-lg text-slate-500 font-normal">
                    As the architect of the <strong className="text-primary-dark">Chalapathi Educational Society (est. 1995)</strong>, his primary mission has been to provide high-quality, value-based education that prepares students for global challenges.
                  </p>
                </div>
              </div>
            </section>

            {/* Academic Foundation Section */}
            <section id="vision" className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-dark font-poppins">Academic Foundation & Vision</h2>
                <BookOpen className="text-secondary w-8 h-8 opacity-20" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-3xl border-l-[6px] border-primary shadow-lg hover:shadow-xl transition-all">
                  <GraduationCap className="text-primary w-10 h-10 mb-6" />
                  <h3 className="text-xl font-bold font-poppins text-primary-dark mb-4">Educational Pillars</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Holding a <strong className="text-primary">Master of Arts (M.A.) in Economics</strong>, his strategic foresight allows him to navigate complex industrial shifts and manage a large-scale educational ecosystem.
                  </p>
                </div>
                <div className="bg-amber-50/50 p-8 rounded-3xl border-l-[6px] border-secondary shadow-lg hover:shadow-xl transition-all">
                  <HeartHandshake className="text-secondary-dark w-10 h-10 mb-6" />
                  <h3 className="text-xl font-bold font-poppins text-primary-dark mb-4">The "Chalapathi" Philosophy</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Named after <strong className="text-primary">Lord Venkateswara</strong>, symbolizing a "noble restlessness of questioning minds"—a core value integrated into the academic culture of CLPT.
                  </p>
                </div>
              </div>
            </section>

            {/* Leadership in Pharmacy (CLPT) */}
            <section id="clpt-leadership" className="space-y-8">
              <h2 className="text-3xl font-bold text-primary-dark font-poppins">Pharmacy Education Leadership</h2>
              <div className="bg-primary-dark rounded-[40px] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/10 rounded-2xl">
                        <Microscope className="w-6 h-6 text-secondary" />
                      </div>
                      <h4 className="text-xl !text-white font-bold">Research Excellence</h4>
                    </div>
                    <p className="text-white/70 leading-relaxed">
                      Under his stewardship, CLPT secured <strong className="text-secondary">NAAC 'A' Grade</strong>, NBA accreditation, and <strong className="text-secondary">Autonomous</strong> status, evolving into a premier research hub.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/10 rounded-2xl">
                        <Briefcase className="w-6 h-6 text-secondary" />
                      </div>
                      <h4 className="text-xl !text-white font-bold">Industry Focus</h4>
                    </div>
                    <p className="text-white/70 leading-relaxed">
                      He pioneered the "need-based" training model, ensuring graduates are clinical experts ready for global drug discovery and patient care.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Public Service & Experience */}
            <section className="space-y-8 text-primary-dark">
              <h2 className="text-3xl font-bold font-poppins">Public Service & Administration</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Legislative Service", detail: "Member of Legislative Assembly (MLA), Sattenapalli (1999–2004)" },
                  { title: "Academic Policy", detail: "Former EC Member (Senate Member) at Acharya Nagarjuna University" },
                  { title: "Institutional Roots", detail: "Former President of R.V.V.N. College, Amaravathi" }
                ].map((exp, i) => (
                  <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl hover:bg-slate-50/50 transition-all">
                    <h4 className="font-bold text-primary border-b border-slate-100 pb-3 mb-4">{exp.title}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{exp.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Quote of Ethics */}
            <section className="pt-8">
              <div className="bg-gradient-to-r from-secondary-dark to-amber-600 rounded-[40px] p-12 text-white relative overflow-hidden group shadow-2xl">
                <Quote className="absolute -left-4 -top-4 w-40 h-40 text-black/10 transition-transform group-hover:scale-110" />
                <div className="relative z-10 text-center space-y-8">
                  <p className="text-2xl md:text-3xl font-bold font-poppins italic leading-normal max-w-4xl mx-auto drop-shadow-md">
                    "My goal is to develop the institute into a center of excellence where technical training meets ethical practice, enabling our students to serve humanity through the healthcare sector."
                  </p>
                  <div className="pt-4">
                    <p className="text-sm font-black uppercase tracking-[0.4em] mb-1">Sri Y.V. Anjaneyulu</p>
                    <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Chairman, CLPT</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Institutional Ecosystem Section */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-1 w-12 bg-secondary rounded-full" />
                <h2 className="text-lg font-black text-secondary-dark uppercase tracking-widest">Institutional Portfolio</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Chalapathi Inst. of Pharm. Sciences (CLPT)", url: "https://www.chalapathipharmacy.ac.in" },
                  { name: "Chalapathi Inst. of Engineering & Tech (CIET)", url: "https://www.chalapathiengg.ac.in" },
                  { name: "Chalapathi Institute of Technology (CIT)", url: "https://www.city.ac.in" },
                  { name: "Chalapathi Junior College", url: "https://www.chalapathiiitneetacademy.com" },
                  { name: "Chalapathi Degree College", url: "https://www.chalapathi.org" },
                  { name: "Chalapathi High Schools", url: "https://www.chalapathi.org" },
                ].map((inst, i) => (
                  <a
                    key={i}
                    href={inst.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex items-center justify-between"
                  >
                    <span className="font-bold text-primary-dark group-hover:text-primary transition-colors text-sm md:text-base">
                      {inst.name}
                    </span>
                    <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </a>
                ))}
              </div>
              <p className="text-xs text-slate-400 italic text-center pt-4">
                * Managing the comprehensive Chalapathi group banners under the main Society portal.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
