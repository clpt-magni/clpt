"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Newspaper, 
  BookOpen, 
  FileText, 
  ExternalLink, 
  Download, 
  ChevronRight,
  Zap,
  ArrowUpRight,
  TrendingUp,
  History
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const MAIN_NEWSLETTERS = [
  { year: "2021", vols: [{ v: "XII", i: 1, f: "v12-1.pdf" }, { v: "XII", i: 2, f: "v12-2.pdf" }, { v: "XII", i: 3, f: "v12-3.pdf" }] },
  { year: "2020", vols: [{ v: "XI", i: 1, f: "v11-1.pdf" }, { v: "XI", i: 2, f: "v11-2.pdf" }, { v: "XI", i: 3, f: "v11-3.pdf" }] },
  { year: "2019", vols: [{ v: "X", i: 1, f: "v10-1.pdf" }, { v: "X", i: 2, f: "v10-2.pdf" }, { v: "X", i: 3, f: "v10-3.pdf" }] },
  { year: "2018", vols: [{ v: "IX", i: 1, f: "v9-1.pdf" }, { v: "IX", i: 2, f: "v9-2.pdf" }, { v: "IX", i: 3, f: "v9-3.pdf" }] },
  { year: "2017", vols: [{ v: "VIII", i: 1, f: "v8-1.pdf" }, { v: "VIII", i: 2, f: "v8-2.pdf" }, { v: "VIII", i: 3, f: "v8-3.pdf" }] },
  { year: "2016", vols: [{ v: "VII", i: 1, f: "v7-1.pdf" }, { v: "VII", i: 2, f: "v7-2.pdf" }, { v: "VII", i: 3, f: "v7-3.pdf" }] },
  { year: "2015", vols: [{ v: "VI", i: 1, f: "v6-1.pdf" }, { v: "VI", i: 2, f: "v6-2.pdf" }, { v: "VI", i: 3, f: "v6-3.pdf" }] },
  { year: "2014", vols: [{ v: "V", i: 1, f: "v5-1.pdf" }, { v: "V", i: 2, f: "v5-2.pdf" }, { v: "V", i: 3, f: "v5-3.pdf" }] },
  { year: "2013", vols: [{ v: "IV", i: 1, f: "v4-1.pdf" }, { v: "IV", i: 2, f: "v4-2.pdf" }, { v: "IV", i: 3, f: "v4-3.pdf" }] },
  { year: "2012", vols: [{ v: "III", i: 1, f: "v3-1.pdf" }, { v: "III", i: 2, f: "v3-2.pdf" }, { v: "III", i: 3, f: "v3-3.pdf" }] },
  { year: "2011", vols: [{ v: "II", i: 1, f: "v2-1.pdf" }, { v: "II", i: 2, f: "v2-2.pdf" }, { v: "II", i: 3, f: "v2-3.pdf" }] },
  { year: "2010", vols: [{ v: "I", i: 1, f: "v1-1.pdf" }, { v: "I", i: 2, f: "v1-2.pdf" }, { v: "I", i: 3, f: "v1-3.pdf" }] },
];

const TEJA_NEWSLETTERS = [
  { vol: "XIII", issues: [{ i: 6, f: "v13-6.pdf" }] },
  { vol: "XII", issues: [{ i: 5, f: "v12-5.pdf" }] },
  { vol: "XI", issues: [{ i: 4, f: "v11-4.pdf" }] },
  { vol: "X", issues: [{ i: 3, f: "v10-3.pdf" }] },
  { vol: "IX", issues: [{ i: 1, f: "v9-1.pdf" }, { i: 2, f: "v9-2.pdf" }] },
  { vol: "V", issues: [{ i: 1, f: "v5-1.pdf" }, { i: 2, f: "v5-2.pdf" }, { i: 3, f: "v5-3.pdf" }, { i: 4, f: "v5-4.pdf" }] },
  { vol: "IV", issues: [{ i: 3, f: "v4-3.pdf" }, { i: 4, f: "v4-4.pdf" }] },
  { vol: "III", issues: [{ i: 1, f: "v3-1.pdf" }, { i: 2, f: "v3-2.pdf" }] },
  { vol: "II", issues: [{ i: 2, f: "v2-2.pdf" }, { i: 3, f: "v2-3.pdf" }, { i: 4, f: "v2-4.pdf" }] },
  { vol: "I", issues: [{ i: 1, f: "v1-1.pdf" }, { i: 2, f: "v1-2.pdf" }, { i: 3, f: "v1-3.pdf" }] },
];

export default function NewslettersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Institutional Newsletters"
        breadcrumbs={[
          { label: "Campus life", href: "/about/chairman" },
          { label: "Newsletters" }
        ]}
        description="Stay updated with the latest events, research breakthroughs, and academic achievements through our periodic publications."
      />

      {/* Intro Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            <div className="lg:w-2/3 space-y-12">
               <div className="space-y-6">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary-dark rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                    Academic Chronicles
                 </div>
                 <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight leading-tight">The Institutional <br /> Voice.</h2>
                 <p className="text-lg text-slate-600 font-medium leading-relaxed">
                    Our newsletters serve as a record of institutional growth, highlighting the 
                    vibrant academic and extracurricular life at Chalapathi Pharmacy.
                 </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex items-start gap-6 group hover:bg-white hover:shadow-xl transition-all duration-500">
                     <div className="p-4 bg-white rounded-2xl text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                        <TrendingUp size={28} />
                     </div>
                     <div>
                        <h4 className="text-lg font-black text-primary-dark uppercase">Growth Archive</h4>
                        <p className="text-sm text-slate-500 font-bold mt-1">14+ years of documented progress and success stories.</p>
                     </div>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex items-start gap-6 group hover:bg-white hover:shadow-xl transition-all duration-500">
                     <div className="p-4 bg-white rounded-2xl text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-rotate-6">
                        <History size={28} />
                     </div>
                     <div>
                        <h4 className="text-lg font-black text-primary-dark uppercase">Historical Data</h4>
                        <p className="text-sm text-slate-500 font-bold mt-1">Special editions and volumes dating back to 2010.</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="lg:w-1/3 w-full sticky top-32">
               <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500 bg-slate-100 aspect-video relative group">
                  <img src="/images/resources/newsletters-banner.jpg" alt="Institutional News" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-primary-dark/40 group-hover:opacity-0 transition-opacity" />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Archive Selector */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
           <Tabs defaultValue="main" className="w-full">
              <div className="flex justify-center mb-16">
                 <TabsList className="bg-white p-2 rounded-[2.5rem] gap-2 h-auto shadow-sm border border-slate-100">
                    <TabsTrigger value="main" className="px-12 py-5 rounded-[2rem] font-black uppercase text-xs tracking-widest data-[state=active]:bg-primary-dark data-[state=active]:text-white transition-all">
                       Institutional News
                    </TabsTrigger>
                    <TabsTrigger value="teja" className="px-12 py-5 rounded-[2rem] font-black uppercase text-xs tracking-widest data-[state=active]:bg-primary-dark data-[state=active]:text-white transition-all">
                       Teja Newsletters
                    </TabsTrigger>
                 </TabsList>
              </div>

              <TabsContent value="main" className="space-y-12">
                 {MAIN_NEWSLETTERS.map((session, i) => (
                   <div key={i} className="space-y-6">
                      <div className="flex items-center gap-4">
                         <h3 className="text-2xl font-black text-primary-dark uppercase tracking-tight">{session.year}</h3>
                         <div className="h-0.5 flex-1 bg-slate-200" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                         {session.vols.map((vol, j) => (
                           <Link 
                             key={j} 
                             href={`/documents/newsletters/main/${vol.f}`} 
                             target="_blank"
                             className="group block"
                           >
                              <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex items-center justify-between group-hover:-translate-y-1">
                                 <div className="flex items-center gap-6">
                                    <div className="p-4 bg-primary/5 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                                       <BookOpen size={24} />
                                    </div>
                                    <div className="space-y-1">
                                       <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Volume {vol.v}</p>
                                       <h4 className="text-lg font-black text-primary-dark group-hover:text-primary transition-colors leading-none tracking-tight">Issue {vol.i}</h4>
                                    </div>
                                 </div>
                                 <ArrowUpRight size={20} className="text-slate-300 group-hover:text-secondary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                              </div>
                           </Link>
                         ))}
                      </div>
                   </div>
                 ))}
              </TabsContent>

              <TabsContent value="teja" className="space-y-12">
                 <div className="bg-primary/5 p-10 rounded-[3rem] border border-primary/10 flex flex-col md:flex-row items-center gap-8 mb-12">
                    <div className="w-20 h-20 bg-primary text-white rounded-3xl flex items-center justify-center shrink-0">
                       <Zap size={40} className="text-secondary" />
                    </div>
                    <div className="space-y-2 text-center md:text-left">
                       <h4 className="text-2xl font-black text-primary uppercase">Teja Special Editions</h4>
                       <p className="text-slate-500 font-medium leading-relaxed italic">
                          "Teja Newsletters capture the fast-paced innovations and specialized highlights of our institutional ecosystem."
                       </p>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {TEJA_NEWSLETTERS.map((v, i) => (
                       <Card key={i} className="border-none bg-white rounded-[3rem] shadow-sm overflow-hidden">
                          <CardContent className="p-8 space-y-6">
                             <div className="flex items-center justify-between">
                                <span className="px-5 py-2 bg-slate-50 text-primary-dark font-black text-[10px] uppercase tracking-widest rounded-full border border-slate-100">
                                   Volume {v.vol}
                                </span>
                                <Newspaper size={20} className="text-slate-200" />
                             </div>
                             <div className="space-y-2">
                                {v.issues.map((iss, k) => (
                                   <Link 
                                     key={k} 
                                     href={`/documents/newsletters/teja/${iss.f}`} 
                                     target="_blank"
                                     className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl hover:bg-primary-dark hover:text-white transition-all group font-bold text-sm"
                                   >
                                      <span>Issue {iss.i}</span>
                                      <Download size={16} className="text-slate-300 group-hover:text-secondary transition-colors" />
                                   </Link>
                                ))}
                             </div>
                          </CardContent>
                       </Card>
                    ))}
                 </div>
              </TabsContent>
           </Tabs>
        </div>
      </section>

      {/* Subscription / contact CTA */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4">
            <div className="p-16 bg-primary-dark rounded-[4.5rem] text-white flex flex-col items-center text-center space-y-10 relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
               <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/3 translate-y-1/3" />
               
               <div className="p-6 bg-white/10 rounded-full backdrop-blur-md">
                  <FileText size={48} className="text-secondary" />
               </div>
               
               <div className="space-y-4 max-w-2xl relative z-10">
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight">Contributions for <br /> Future Issues</h3>
                  <p className="text-white/60 font-medium text-lg leading-relaxed">
                     Are you a part of a recent breakthrough or event? Submit your articles and event highlights 
                     to the editorial board for inclusion in our next volume.
                  </p>
               </div>

               <Link 
                 href="/contact" 
                 className="px-12 py-6 bg-secondary text-primary-dark font-black tracking-[0.2em] uppercase rounded-[2rem] hover:bg-white transition-all shadow-2xl relative z-10"
               >
                  Contact Editorial Board
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
