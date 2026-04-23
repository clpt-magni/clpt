"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Eye, Users, Calendar, Info, Award, UserCheck, GraduationCap, Building, Download } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { PdfViewerModal } from "@/components/ui/PdfViewerModal";
import { PageHeader } from "@/components/ui/PageHeader";

interface Meeting {
  meetingTitle: string;
  fileUrl?: string;
}

interface Category {
  categoryName: string;
  meetings: Meeting[];
}

interface MemberGroup {
  category: string;
  members: string[];
}

interface InstitutionalBodyProps {
  data: {
    title: string;
    summary?: string;
    membersList?: MemberGroup[];
    description?: any;
    term?: string;
    membersFileUrl?: string;
    meetingCategories?: Category[];
  };
}

const categoryIcons: { [key: string]: any } = {
  "Institutional Members & Leadership": Building,
  "External Academic Members (Nominated by ANU)": GraduationCap,
  "External Members (Nominated by Academic Council)": UserCheck,
  "Industry & Alumni Representatives": Award,
  "Student Representatives": Users,
};

export default function InstitutionalBodyClient({ data }: InstitutionalBodyProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activePdf, setActivePdf] = useState({ title: "", url: "" });

  if (!data) return <div className="py-24 text-center">Content not found.</div>;

  const openPdf = (title: string, url: string) => {
    setActivePdf({ title, url });
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title={data.title}
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: data.title }
        ]}
        description={data.summary}
      />

      <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Structured Members List */}
            {data.membersList && data.membersList.length > 0 && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-3">
                  <Users className="text-primary" size={32} />
                  Committee Members
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.membersList.map((group, idx) => {
                    const Icon = categoryIcons[group.category] || UserCheck;
                    return (
                      <Card key={idx} className="border-none shadow-xl bg-white rounded-[32px] overflow-hidden group hover:shadow-2xl transition-all duration-300">
                        <CardHeader className="p-6 bg-slate-50 border-b border-slate-100 flex-row items-center gap-4 space-y-0">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <Icon size={20} />
                          </div>
                          <CardTitle className="text-base font-bold text-primary-dark leading-tight">
                            {group.category}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                          <ul className="space-y-4">
                            {group.members.map((member, mIdx) => {
                              const parts = member.split("|").map(p => p.trim());
                              return (
                                <li key={mIdx} className="flex flex-col gap-1 border-b border-slate-50 last:border-0 pb-3 last:pb-0">
                                  <div className="flex items-start gap-2">
                                     <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0 group-hover:bg-primary transition-colors" />
                                     <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                        <span className="font-bold text-primary-dark">
                                           {parts[0]}
                                        </span>
                                        {parts.length > 1 && (
                                          <>
                                            <span className="text-slate-300 hidden md:inline">|</span>
                                            <span className="text-slate-500 font-medium italic text-xs md:text-sm">
                                               {parts[1]}
                                            </span>
                                          </>
                                        )}
                                        {parts.length > 2 && (
                                          <>
                                            <span className="text-slate-200 hidden md:inline">|</span>
                                            <span className="text-slate-400 font-semibold text-[10px] md:text-xs uppercase tracking-wider">
                                               {parts[2]}
                                            </span>
                                          </>
                                        )}
                                     </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Description / Functions / Composition */}
            {data.description && (
              <Card className="border-none shadow-2xl bg-white rounded-[40px] overflow-hidden">
                <div className="h-2 w-full bg-primary" />
                <CardHeader className="p-10 pb-0">
                  <CardTitle className="text-3xl font-bold text-primary-dark font-poppins flex items-center gap-4">
                    <Info className="text-primary" size={28} />
                    Core Functions & Composition
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-10 pt-6 prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-headings:text-primary-dark">
                  <PortableText value={data.description} />
                </CardContent>
              </Card>
            )}

            {/* Terms Section */}
            {data.term && (
              <Card className="border-none shadow-xl bg-slate-900 text-white rounded-[40px] p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                <h3 className="text-2xl font-bold mb-6 text-secondary font-poppins">Reconstitution & Terms</h3>
                <p className="text-slate-300 leading-relaxed text-lg italic">
                  {data.term}
                </p>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Institutional Documents Card */}
            {(data.membersFileUrl || (data.meetingCategories && data.meetingCategories.length > 0)) && (
              <div className="bg-primary-dark text-white rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 -skew-x-12 translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-110 duration-700" />
                
                <h3 className="text-secondary font-black uppercase tracking-[0.2em] text-[11px] mb-10 flex items-center gap-2">
                  <FileText size={16} /> Official Repository
                </h3>

                <div className="space-y-6">
                  {data.membersFileUrl && (
                    <button 
                      onClick={() => openPdf("Members List", data.membersFileUrl!)}
                      className="w-full flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-secondary hover:text-primary-dark transition-all duration-500 group/btn"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/btn:bg-primary-dark/10 group-hover/btn:border-primary-dark/20 text-secondary group-hover/btn:text-primary-dark">
                          <Users size={20} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-widest text-left">Members Profile</span>
                      </div>
                      <Download size={16} className="opacity-40 group-hover/btn:opacity-100" />
                    </button>
                  )}

                  {data.meetingCategories?.some(cat => cat.meetings.some(m => m.fileUrl)) && (
                    <div className="pt-6 border-t border-white/10">
                      <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-6">Recent Minutes</p>
                      <div className="space-y-3">
                        {data.meetingCategories.flatMap(cat => cat.meetings)
                          .filter(m => m.fileUrl)
                          .slice(0, 3)
                          .map((meeting, i) => (
                            <button 
                              key={i}
                              onClick={() => openPdf(meeting.meetingTitle, meeting.fileUrl!)}
                              className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-all text-left"
                            >
                              <FileText size={14} className="shrink-0" />
                              <span className="text-[11px] font-bold truncate">{meeting.meetingTitle}</span>
                            </button>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-primary-dark font-poppins px-4 flex items-center gap-3">
                <Calendar className="text-primary" size={24} />
                Meeting Minutes
              </h3>

              {data.meetingCategories && data.meetingCategories.length > 0 ? (
                data.meetingCategories.map((cat, i) => (
                  <Card key={i} className="border-none shadow-xl bg-white rounded-[40px] overflow-hidden">
                    <div className="bg-slate-50 p-6 border-b border-slate-100">
                      <h4 className="font-bold text-primary truncate">{cat.categoryName}</h4>
                    </div>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 gap-3">
                        {cat.meetings.map((meeting, j) => (
                          meeting.fileUrl ? (
                            <button 
                              key={j} 
                              onClick={() => openPdf(meeting.meetingTitle, meeting.fileUrl!)}
                              className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 text-slate-600 hover:text-primary transition-all font-semibold group border border-transparent hover:border-slate-100 text-left w-full"
                            >
                              <div className="flex items-center gap-3">
                                <FileText size={18} className="text-slate-400 group-hover:text-primary" />
                                <span className="text-sm">{meeting.meetingTitle}</span>
                              </div>
                              <Eye size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                          ) : (
                            <div key={j} className="flex items-center gap-3 p-4 text-slate-400 text-sm italic">
                               <FileText size={18} />
                               {meeting.meetingTitle} (Link Pending)
                            </div>
                          )
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-slate-400 italic px-4">No recent meeting minutes found.</p>
              )}
            </div>
          </div>

        </div>
      </div>

      <PdfViewerModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        title={activePdf.title} 
        pdfUrl={activePdf.url} 
      />
    </div>
  );
}
