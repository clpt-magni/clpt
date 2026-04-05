import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Building, BookOpen, Microscope, Briefcase, GraduationCap } from "lucide-react";

export default function PrincipalProfile() {
   return (
      <div className="flex flex-col min-h-screen font-roboto pb-24 bg-slate-50">
         {/* Page Header */}
         <section className="bg-gradient-to-r from-primary-dark to-primary-light py-20 text-white text-center shadow-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 opacity-20 pointer-events-none" />
            <div className="container mx-auto px-4 relative z-10">
               <h1 className="text-5xl !text-white font-bold font-poppins mb-4 animate-in fade-in slide-in-from-top duration-700">Principal's Profile</h1>
               <p className="text-white/80 text-xl font-light">Leading with Vision, Educating with Passion</p>
            </div>
         </section>

         <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

               {/* Sidebar Info */}
               <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
                  <Card className="border-none shadow-2xl rounded-[40px] bg-white overflow-hidden text-center group">
                     <div className="h-32 bg-primary transition-all group-hover:h-36 duration-500" />
                     <CardContent className="-mt-16 pb-12 px-8">
                        <img
                           src="/images/principal.jpg"
                           alt="Prof. Rama Rao Nadendla"
                           className="w-48 h-48 rounded-full border-[6px] border-white shadow-2xl mx-auto mb-8 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <h2 className="text-2xl font-bold text-primary-dark font-poppins mb-2">Dr. Rama Rao Nadendla</h2>
                        <p className="text-secondary-dark font-black uppercase tracking-widest text-xs mb-4">M.Pharmacy, Ph.D., F.I.C</p>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                           Professor and Principal<br />
                           Chalapathi Institute of Pharmaceutical Sciences
                        </p>

                        <div className="space-y-4 pt-8 border-t border-slate-100 text-left">
                           <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Direct Contact</h3>
                           <div className="flex items-center gap-4 group/item">
                              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center group-hover/item:bg-primary transition-colors">
                                 <Mail className="w-5 h-5 text-primary group-hover/item:text-white" />
                              </div>
                              <a href="mailto:nadendla2000@yahoo.co.in" className="text-sm font-bold text-primary-dark hover:text-primary transition-colors">nadendla2000@yahoo.co.in</a>
                           </div>
                           <div className="flex items-center gap-4 group/item">
                              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center group-hover/item:bg-primary transition-colors">
                                 <Phone className="w-5 h-5 text-primary group-hover/item:text-white" />
                              </div>
                              <span className="text-sm font-bold text-primary-dark group-hover/item:text-primary transition-colors">+91 94401 01685</span>
                           </div>
                           <div className="flex items-center gap-4 group/item">
                              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center group-hover/item:bg-primary transition-colors">
                                 <Building className="w-5 h-5 text-primary group-hover/item:text-white" />
                              </div>
                              <span className="text-sm font-bold text-primary-dark group-hover/item:text-primary transition-colors">Office: (0863) 2524124</span>
                           </div>
                        </div>
                     </CardContent>
                  </Card>
               </div>

               {/* Detailed Content */}
               <div className="lg:col-span-8 space-y-12">
                  <section className="space-y-6">
                     <h2 className="text-4xl font-bold text-primary-dark font-poppins border-b-4 border-secondary pb-4 inline-block">Professional Overview</h2>
                     <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 italic font-medium leading-relaxed text-slate-700 text-lg">
                        "Dr. Rama Rao Nadendla is a distinguished academician and researcher with over <strong>30 years of teaching experience</strong> and <strong>24 years of research experience</strong>. He currently serves as the Professor and Principal at Chalapathi Institute of Pharmaceutical Sciences (Autonomous) and also holds the honorary position of Dean, Faculty of Pharmacy at Acharya Nagarjuna University."
                     </div>
                  </section>

                  <section className="space-y-8">
                     <h2 className="text-3xl font-bold text-primary-dark font-poppins">Academic Excellence</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                           { degree: "Ph.D. in Pharmacy (2000)", inst: "JNTU, Hyderabad", detail: "Thesis on pregelatinized starch as pharmaceutical excipient under Prof. K.P.R. Chowdary" },
                           { degree: "M.Pharmacy (1990)", inst: "BITS, Pilani", detail: "Awarded with Distinction", highlight: true },
                           { degree: "B.Pharmacy (1987)", inst: "Gulbarga University", detail: "University 1st Rank & Distinction", highlight: true },
                           { degree: "D.Pharmacy (1983)", inst: "State Govt Board", detail: "Awarded with Distinction" }
                        ].map((edu, i) => (
                           <div key={i} className={`p-8 rounded-3xl border shadow-md transition-all hover:scale-[1.02] ${edu.highlight ? 'bg-primary text-white border-primary' : 'bg-white border-slate-100'}`}>
                              <GraduationCap className={`w-8 h-8 mb-4 ${edu.highlight ? 'text-secondary' : 'text-primary'}`} />
                              <h4 className="text-xl font-bold font-poppins mb-2">{edu.degree}</h4>
                              <p className={`text-sm font-bold mb-3 ${edu.highlight ? 'text-white/80' : 'text-primary'}`}>{edu.inst}</p>
                              <p className={`text-sm italic leading-relaxed ${edu.highlight ? 'text-white/70' : 'text-slate-500'}`}>{edu.detail}</p>
                           </div>
                        ))}
                     </div>
                  </section>

                  <section className="space-y-8">
                     <h2 className="text-3xl font-bold text-primary-dark font-poppins">Research Contributions</h2>
                     <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100 flex items-center gap-10 group overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-4">
                           <Microscope size={120} className="text-slate-50 group-hover:text-primary/5 transition-colors absolute -top-8 -right-8 rotate-12" />
                        </div>
                        <div className="w-24 h-24 bg-primary text-white rounded-3xl flex items-center justify-center text-4xl font-black shadow-xl group-hover:rotate-6 transition-transform relative z-10">
                           127
                        </div>
                        <div className="relative z-10">
                           <h4 className="text-2xl font-bold text-primary-dark font-poppins mb-2">Research Publications</h4>
                           <p className="text-slate-500 text-lg leading-relaxed">
                              Extensive publications in highly indexed National and International Journals including Web of Science, Scopus, and Thomson Reuters.
                           </p>
                        </div>
                     </div>
                  </section>

                  <section className="space-y-8">
                     <h2 className="text-3xl font-bold text-primary-dark font-poppins">Key Leadership Positions</h2>
                     <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-slate-100">
                        <table className="w-full text-left">
                           <thead>
                              <tr className="bg-slate-50 text-xs font-black uppercase tracking-widest text-slate-400 border-b">
                                 <th className="px-10 py-6">Position</th>
                                 <th className="px-10 py-6">Institution / Organization</th>
                              </tr>
                           </thead>
                           <tbody className="divide-y text-lg">
                              {[
                                 { pos: "Professor cum Principal", org: "CIPS (2004 - Present)" },
                                 { pos: "Dean (Honorary)", org: "Faculty of Pharmacy, ANU (2008 - Present)" },
                                 { pos: "Member (Central Council)", org: "Pharmacy Council of India (2020 - Present)" },
                                 { pos: "Peer Team Member", org: "UGC Autonomous Committees (2018 - Present)" }
                              ].map((pos, i) => (
                                 <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                                    <td className="px-10 py-8 font-poppins font-bold text-primary-dark group-hover:text-primary transition-colors">{pos.pos}</td>
                                    <td className="px-10 py-8 text-slate-600 font-medium">{pos.org}</td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </section>
               </div>
            </div>
         </div>
      </div>
   );
}
