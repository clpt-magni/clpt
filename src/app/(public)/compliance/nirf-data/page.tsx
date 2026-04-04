import { 
  FileText, 
  Download, 
  ExternalLink, 
  Mail, 
  Users, 
  TrendingUp, 
  Zap, 
  Building2, 
  GraduationCap, 
  Briefcase,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const nirfReports = [
  { year: "2025", filename: "NIRF DATA-2025.pdf" },
  { year: "2024", filename: "NIRF DATA-2024.pdf" },
  { year: "2023", filename: "nirf-data-2023.pdf" },
  { year: "2022", filename: "nirf-data-2022.pdf" },
  { year: "2021", filename: "nirf-data-2021.pdf" },
  { year: "2019", filename: "nirf-data-2019.pdf" },
  { year: "2018", filename: "nirf-data-2018.pdf" },
];

export default function NirfDataPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. SE0-Optimized Institutional Hero (Light Theme) */}
      <section className="bg-slate-50 pt-20 pb-16 md:pt-32 md:pb-24 relative overflow-hidden border-b border-slate-100/50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/[0.03] blur-[120px] rounded-full -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-400/[0.03] blur-[100px] rounded-full -ml-20 -mb-20" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-blue-600/5 border border-blue-600/10 rounded-full text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Governance & Institutional Compliance
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1] md:leading-[0.95]">
              NIRF Data <br />
              <span className="text-blue-600">& Performance</span>
            </h1>
            <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl">
              Chalapathi Institute of Pharmaceutical Sciences (CIPS) continues to demonstrate its commitment to academic excellence, 
              research innovation, and student success. As per the latest <strong>National Institutional Ranking Framework (NIRF) 2025</strong> submission.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Quick Stats Grid (Floating Style) */}
      <section className="container mx-auto px-4 md:px-6 -mt-10 mb-16 md:mb-24 relative z-30">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Students", value: "701", icon: Users },
            { label: "Median", value: "₹3.88L", icon: TrendingUp },
            { label: "Patents", value: "15", icon: Zap },
            { label: "Investment", value: "₹1.5Cr+", icon: Building2 },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-5 md:p-8 rounded-3xl md:rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100 group hover:border-blue-600/20 transition-all hover:-translate-y-1 duration-500">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-slate-50 group-hover:bg-blue-600/5 flex items-center justify-center text-slate-400 group-hover:text-blue-600 mb-4 md:mb-6 transition-colors">
                <stat.icon size={20} strokeWidth={2.5} />
              </div>
              <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1 tracking-tighter">{stat.value}</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Main Content Area */}
      <main className="container mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
          
          {/* Detailed Summary Card */}
          <div className="lg:col-span-3 space-y-20">
            
            {/* Narrative Summary (Paper Style) */}
            <div className="bg-white border border-slate-200 rounded-3xl md:rounded-[3.5rem] p-6 md:p-12 relative shadow-sm overflow-hidden md:mt-10">
               <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 -z-0 opacity-50" />
               <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8 md:mb-12">
                    <div className="w-1 md:w-1.5 h-8 md:h-12 bg-blue-600 rounded-full" />
                    <div>
                      <h2 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight">Executive Summary</h2>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Official Institutional Review 2025</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-slate-600 leading-relaxed font-semibold text-sm">
                    <div className="space-y-4 md:space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-blue-600/5 flex items-center justify-center text-blue-600">
                          <GraduationCap size={14} />
                        </div>
                        <h3 className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Academic Strength</h3>
                      </div>
                      <p>
                        We host a diverse student body across UG and PG programs, with a total strength of <strong>701 students</strong>. 
                        Sanctioned intake includes UG, PG, and Pharm.D programs. 
                        Over <strong>70%</strong> of our students receive full tuition fee reimbursement.
                      </p>
                    </div>
                    <div className="space-y-4 md:space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-blue-600/5 flex items-center justify-center text-blue-600">
                          <Briefcase size={14} />
                        </div>
                        <h3 className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Career Progression</h3>
                      </div>
                      <p>
                        Graduates consistently secure positions in leading pharma sectors. Median salaries range from 
                        <strong> ₹3.65 Lakhs (UG)</strong> to <strong>₹3.88 Lakhs (PG)</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 pt-10 md:mt-12 md:pt-12 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-slate-600 leading-relaxed font-semibold text-sm">
                    <div className="space-y-4 md:space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-blue-600/5 flex items-center justify-center text-blue-600">
                          <Zap size={14} />
                        </div>
                        <h3 className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Research & Innovation</h3>
                      </div>
                      <p>
                        CIPS secured <strong>65 sponsored projects</strong> in 2023-24. IP development includes <strong>11 patents published</strong> and 4 granted recently.
                      </p>
                    </div>
                    <div className="space-y-4 md:space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-blue-600/5 flex items-center justify-center text-blue-600">
                          <Users size={14} />
                        </div>
                        <h3 className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Expert Faculty</h3>
                      </div>
                      <p>
                        Supported by <strong>63 faculty members</strong>, including experienced Professors with specializations in Ph.D., M.Pharm, and Pharm.D.
                      </p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Document List */}
            <div className="space-y-10">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300">
                    <FileText size={24} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Detailed Report Archive</h3>
              </div>

              <div className="grid grid-cols-1 gap-5">
                {nirfReports.map((report, idx) => (
                  <div 
                    key={idx}
                    className="group bg-white border border-slate-100 p-5 md:p-8 rounded-3xl md:rounded-[2.5rem] hover:shadow-2xl hover:shadow-slate-200/60 hover:border-blue-600/20 transition-all duration-500 overflow-hidden relative"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 relative z-10">
                        <div className="flex items-center gap-4 md:gap-8">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-50 group-hover:bg-blue-600/5 rounded-2xl md:rounded-3xl flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-all duration-500 transform group-hover:scale-110">
                                <FileText size={26} strokeWidth={2} />
                            </div>
                            <div>
                                <h3 className="font-black text-slate-900 text-sm md:text-lg uppercase tracking-tight">NIRF Submission {report.year}</h3>
                                <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1 flex items-center gap-2">
                                    <span className="w-1 h-1 bg-blue-600/40 rounded-full" /> 
                                    Official Dataset
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row md:flex-row items-center gap-2 md:gap-3">
                            <Link href={`/documents/nirf/${report.filename}`} target="_blank" className="flex-1">
                                <Button variant="outline" className="w-full border-slate-200 text-slate-600 font-black uppercase tracking-widest text-[9px] md:text-[10px] h-10 md:h-14 px-4 md:px-8 rounded-xl md:rounded-2xl hover:bg-slate-50 hover:text-blue-600 transition-all">
                                    View Inline
                                </Button>
                            </Link>
                            <Link href={`/documents/nirf/${report.filename}`} download className="flex-1">
                                <Button className="w-full bg-slate-900 hover:bg-blue-600 text-white font-black uppercase tracking-widest text-[9px] md:text-[10px] h-10 md:h-14 px-4 md:px-8 rounded-xl md:rounded-2xl shadow-lg transition-all border-none">
                                    Download
                                </Button>
                            </Link>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-10 lg:pt-10">
            {/* Professional Correspondence Card */}
            <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200/60 shadow-sm relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-blue-600 mb-6 pb-6 border-b border-slate-200/80">
                  <Mail size={20} strokeWidth={2.5} />
                  <h3 className="font-black uppercase tracking-[0.2em] text-[10px]">Correspondence</h3>
                </div>
                <p className="text-slate-500 text-[13px] font-semibold leading-relaxed mb-8">
                   Contact our official channel for any inquiries regarding NIRF data submissions or clarifications.
                </p>
                <Link href="mailto:nadendla2000@yahoo.co.in">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-[10px] h-14 rounded-2xl shadow-lg transition-all active:scale-95 border-none">
                    Contact Coordinator
                  </Button>
                </Link>
                <div className="mt-8 pt-8 border-t border-slate-200/80">
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1 text-center">Protocol Mail</div>
                  <div className="text-[11px] md:text-xs font-black text-slate-900 text-center break-words select-all hover:text-blue-600 transition-colors uppercase tracking-tight">nadendla2000@yahoo.co.in</div>
                </div>
              </div>
            </div>

            {/* Compliance Hub Navigation */}
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm">
                <h3 className="font-black text-slate-900 uppercase tracking-tighter text-xl mb-10 border-b border-slate-50 pb-6">Compliance Hub</h3>
                <div className="space-y-6">
                    {[
                      { label: "PCI APPROVALS", href: "/compliance/pci-approval" },
                      { label: "AICTE REPORTS", href: "/compliance/aicte-reports" },
                      { label: "AUDIT REPORTS", href: "/compliance/audit-reports" },
                      { label: "RTI DISCLOSURES", href: "/compliance/rti" },
                    ].map((link, i) => (
                      <Link key={i} href={link.href} className="flex items-center justify-between group py-1">
                        <span className="text-[10px] font-black text-slate-400 group-hover:text-blue-600 uppercase tracking-[0.2em] transition-colors">{link.label}</span>
                        <ChevronRight size={14} className="text-slate-200 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                </div>
            </div>
          </div>

        </div>
      </main>

      {/* Official Footnote Branding */}
      <section className="bg-slate-50 py-20 border-t border-slate-100/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] opacity-50">
            NIRF • National Institutional Ranking Framework • Chalapathi Institutional Portal
          </p>
        </div>
      </section>
    </div>
  );
}
