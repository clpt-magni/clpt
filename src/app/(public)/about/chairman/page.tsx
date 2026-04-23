import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/PageHeader";
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
  ExternalLink,
  MapPin,
  Calendar,
  ShieldCheck,
  Star,
  Globe,
  ArrowUpRight
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chairman's Profile | Yalamanchili Veeranjaneyulu | Chalapathi Group",
  description: "Profile of Sri Yalamanchili Veeranjaneyulu, Chairman of Chalapathi Group of Institutions. Former MLA, distinguished educationist, and social entrepreneur.",
};

export default function ChairmanProfile() {
  return (
    <div className="flex flex-col min-h-screen font-roboto pb-24 bg-slate-50">
      <PageHeader
        title="Chairman's Profile"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Chairman's Profile" }
        ]}
        description="A distinguished educationist, philanthropist, and former legislator with over 38 years of leadership in building one of Andhra Pradesh's most respected educational groups."
      />

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
                    alt="Sri Yalamanchili Veeranjaneyulu"
                    className="w-48 h-auto max-h-72 rounded-2xl border-[6px] border-white shadow-2xl mx-auto mb-8 object-contain transform transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute -bottom-4 right-0 bg-secondary text-primary-dark p-3 rounded-2xl shadow-xl animate-bounce">
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-primary-dark font-poppins mb-1">Sri Yalamanchili Veeranjaneyulu</h2>
                <p className="text-secondary-dark font-black uppercase tracking-[0.2em] text-[10px] mb-6">Chairman, Chalapathi Group</p>

                <div className="bg-slate-50 rounded-3xl p-6 mb-8 border border-slate-100 flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
                    <MapPin size={14} className="text-primary" /> Guntur, Andhra Pradesh
                  </div>
                  <a 
                    href="https://linkedin.com/in/yalamanchili-veeranjaneyulu-b1b251111" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#0077b5] text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-md"
                  >
                    <ExternalLink size={14} /> Connect on LinkedIn
                  </a>
                </div>

                <div className="space-y-4 pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/50 border border-transparent hover:border-primary/10 transition-all">
                    <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-primary">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Honorary</p>
                      <p className="text-xs font-bold text-primary-dark">Dr. of Letters (D.Litt.)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/50 border border-transparent hover:border-primary/10 transition-all">
                    <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-primary">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Public Service</p>
                      <p className="text-xs font-bold text-primary-dark">Former MLA, Sattenapalli</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Core Competencies Sidebar Card */}
            <Card className="border-none shadow-xl rounded-[2rem] bg-primary-dark text-white p-8">
              <h3 className="text-sm font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Core Competencies</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-secondary mb-3">Leadership</p>
                  <div className="flex flex-wrap gap-2 text-[9px] font-bold">
                    {["Institutional Leadership", "Strategic Vision", "Educational Administration", "Policy Advocacy", "Governance"].map(tag => (
                      <span key={tag} className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-secondary mb-3">Domain Expertise</p>
                  <div className="flex flex-wrap gap-2 text-[9px] font-bold">
                    {["Higher Education Management", "Industry-Academia Collaboration", "Rural Education", "Social Entrepreneurship", "Legislative Affairs"].map(tag => (
                      <span key={tag} className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Dossier Content */}
          <div className="lg:col-span-8 space-y-12">

            {/* Introduction Section */}
            <section className="space-y-6">
              <div className="bg-white p-10 md:p-14 rounded-[40px] shadow-xl border border-slate-100 relative group overflow-hidden">
                <Quote className="absolute top-8 right-8 w-24 h-24 text-slate-50 opacity-50 group-hover:text-primary/10 transition-all duration-700" />
                <div className="relative z-10 space-y-6 text-slate-700 leading-relaxed text-xl font-medium">
                  <p>
                    Recipient of an Honorary <strong className="text-primary">Doctorate of Letters</strong> from Burlington State University, USA (2025), Sri Yalamanchili Veeranjaneyulu is a distinguished educationist, philanthropist, and former legislator with over <strong className="text-primary">38 years</strong> of leadership.
                  </p>
                  <p className="text-lg text-slate-500 font-normal">
                    Committed to empowering rural students through quality, globally benchmarked education, he has built the <strong className="text-primary-dark">Chalapathi Group of Institutions</strong> into one of Andhra Pradesh's most respected academic ecosystems.
                  </p>
                </div>
              </div>
            </section>

            {/* Professional Experience Section */}
            <section className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-black text-primary-dark font-poppins uppercase tracking-tight">Professional Leadership</h2>
                <Briefcase className="text-primary w-8 h-8 opacity-20" />
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-all" />
                  <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                    <div>
                      <h3 className="text-2xl font-black text-primary-dark mb-1">Chairman and Managing Director</h3>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Chalapathi Group of Institutions</p>
                    </div>
                    <div className="bg-slate-50 px-5 py-2.5 rounded-2xl border border-slate-100 self-start text-xs font-black text-primary uppercase tracking-widest">
                       1988 – Present · 38+ Years
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <div>Built a multi-disciplinary portfolio focused on quality education for rural and underprivileged students.</div>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <div>Championed industry-academia partnerships with global leaders including <strong className="text-slate-900">SAP, ServiceNow, Microsoft, Cisco, and EC-Council</strong>.</div>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <div>Facilitated established <strong className="text-slate-900">QNX Everywhere Centre of Excellence</strong> in collaboration with BlackBerry QNX.</div>
                      </li>
                    </ul>
                    <div className="bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
                       <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">
                         <Star size={12} /> Strategic Milestones
                       </h4>
                       <div className="space-y-4">
                          <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                             <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">CIET Ranking (Times)</span>
                             <span className="text-lg font-black text-primary-dark">154th</span>
                          </div>
                          <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                             <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global Certifications</span>
                             <span className="text-lg font-black text-primary-dark">277+</span>
                          </div>
                          <div className="flex justify-between items-end">
                             <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">EduSkills (AP & TS)</span>
                             <span className="text-lg font-black text-primary-dark">Rank 8</span>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-dark p-8 md:p-10 rounded-[3rem] text-white relative overflow-hidden shadow-xl shadow-primary-dark/20">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                  <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                    <div>
                      <h3 className="text-2xl font-black !text-white mb-1">Member of Legislative Assembly (MLA)</h3>
                      <p className="text-sm font-bold text-white/50 uppercase tracking-widest">Sattenapalli Constituency</p>
                    </div>
                    <div className="bg-white/10 px-5 py-2.5 rounded-2xl border border-white/10 self-start text-xs font-black text-secondary uppercase tracking-widest">
                       2 Consecutive Terms (1994 – 2003)
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <p className="text-white/80 text-sm leading-relaxed font-medium">
                       Served as the elected representative for Sattenapalli constituency in Guntur district, actively advocating for rural development, social welfare, and legislative reforms to strengthen the education system.
                     </p>
                     <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                           <Globe size={20} className="text-secondary" />
                           <span className="text-xs font-bold uppercase tracking-widest">Rural Development Advocate</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                           <ArrowUpRight size={20} className="text-secondary" />
                           <span className="text-xs font-bold uppercase tracking-widest">Policy Innovation</span>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Honours and Education Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <section className="space-y-6">
                 <h2 className="text-2xl font-black text-primary-dark font-poppins uppercase tracking-tight">Honours</h2>
                 <div className="bg-amber-50 rounded-[2.5rem] p-8 border-l-8 border-secondary shadow-lg">
                   <Award className="text-secondary w-10 h-10 mb-6" />
                   <h3 className="text-lg font-black text-primary-dark mb-2">Honorary Doctorate of Letters (D.Litt.)</h3>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Burlington State University, USA · 2025</p>
                   <p className="text-sm text-slate-600 font-medium leading-relaxed italic">
                     "In recognition of outstanding contributions in the fields of education and social service."
                   </p>
                 </div>
               </section>

               <section className="space-y-6">
                 <h2 className="text-2xl font-black text-primary-dark font-poppins uppercase tracking-tight">Academic Journey</h2>
                 <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-lg space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-primary border border-slate-100 flex-shrink-0">
                          <GraduationCap size={20} />
                       </div>
                       <div>
                          <h4 className="text-sm font-black text-primary-dark uppercase tracking-tight">Master's in Economics</h4>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Bhopal University · 1980</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-primary border border-slate-100 flex-shrink-0">
                          <BookOpen size={20} />
                       </div>
                       <div>
                          <h4 className="text-sm font-black text-primary-dark uppercase tracking-tight">Bachelor of Commerce (B.Com)</h4>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">RVVN College · 1978</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-primary border border-slate-100 flex-shrink-0">
                          <Building size={20} />
                       </div>
                       <div>
                          <h4 className="text-sm font-black text-primary-dark uppercase tracking-tight">Secondary Education</h4>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">SRKHH High School · 1973</p>
                       </div>
                    </div>
                 </div>
               </section>
            </div>

            {/* Institutional Ecosystem Section */}
            <section className="space-y-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-1 w-12 bg-secondary rounded-full" />
                <h2 className="text-lg font-black text-secondary-dark uppercase tracking-widest">The Chalapathi Ecosystem</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "CLPT (Lam, Guntur)", url: "https://www.chalapathipharmacy.ac.in", badge: "Accredited" },
                  { name: "CIET (Lam, Guntur)", url: "https://www.chalapathiengg.ac.in", badge: "Times Rank 154" },
                  { name: "CITY (Mothadaka)", url: "https://www.city.ac.in", badge: "Autonomous" },
                  { name: "SRKHH School (Amaravathi)", url: "https://www.chalapathi.org", badge: "Elite" },
                  { name: "Chalapathi Degree College", url: "https://www.chalapathi.org", badge: "Holistic" },
                  { name: "Chalapathi Chit Fund", url: "#", badge: "Corporate" },
                ].map((inst, i) => (
                  <a
                    key={i}
                    href={inst.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all flex flex-col gap-4"
                  >
                    <div className="flex items-center justify-between">
                       <span className="text-[8px] font-black uppercase text-primary border border-primary/20 bg-primary/5 px-2 py-1 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                         {inst.badge}
                       </span>
                       <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-primary" />
                    </div>
                    <span className="font-black text-primary-dark group-hover:text-primary transition-colors text-xs uppercase tracking-tight">
                      {inst.name}
                    </span>
                  </a>
                ))}
              </div>
            </section>

            {/* Social Contributions */}
            <section className="bg-slate-900 rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full" />
               <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center border border-white/20 flex-shrink-0">
                     <HeartHandshake size={48} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black !text-white mb-6 uppercase tracking-tight">Social & Community Advocacy</h3>
                    <p className="text-white/60 font-medium leading-relaxed mb-6">
                      Dedicated over three decades to improving educational access for rural students in Guntur district. As an active patron of community development and social service, he continues to empower youth initiatives across the region.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                       <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-[9px] font-black uppercase tracking-widest">37+ Years Governance</div>
                       <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-[9px] font-black uppercase tracking-widest">Rural Empowerment</div>
                       <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-[9px] font-black uppercase tracking-widest">Educational Equity</div>
                    </div>
                  </div>
               </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
