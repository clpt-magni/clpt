import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  MapPin, 
  Users, 
  Calendar, 
  HeartHandshake,
  Download,
  FileText,
  Share2,
  Bookmark
} from "lucide-react";
import { client } from "../../../../../../sanity/sanity.client";
import { PortableText } from "@portabletext/react";

const typeMap: Record<string, string> = {
  'nss-unit-1': 'nssUnit1Activity',
  'nss-unit-2': 'nssUnit2Activity',
  'ipa-lam': 'ipaLamActivity',
  'ispor-amaravati': 'isporAmaravatiActivity',
  'ispor-anu': 'isporAnuActivity'
};

async function getActivityData(chapterSlug: string, activitySlug: string) {
  const activityType = typeMap[chapterSlug] || "extensionActivityItem";
  
  const query = `*[_type == $activityType && slug.current == $activitySlug][0] {
    "id": _id,
    title,
    "slug": slug.current,
    date,
    place,
    participants,
    beneficiaries,
    description,
    "gallery": gallery[].asset->url,
    "documents": documents[] {
      label,
      "url": file.asset->url
    }
  }`;
  
  try {
    const data = await client.fetch(query, { activityType, activitySlug });
    
    // We also need chapter title for the UI
    const chapterQuery = `*[_type in ["nssUnit1", "nssUnit2", "ipaLam", "isporAmaravati", "isporAnu"] && slug.current == $chapterSlug][0] {
      title,
      "slug": slug.current
    }`;
    const chapter = await client.fetch(chapterQuery, { chapterSlug });
    
    return { ...data, chapter };
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null;
  }
}

export default async function ActivityDetailPage(props: { params: Promise<{ slug: string, activitySlug: string }> }) {
  const params = await props.params;
  const { slug, activitySlug } = params;
  const activity = await getActivityData(slug, activitySlug);

  if (!activity) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Event Hero Section */}
      <section className="bg-slate-50 pt-32 pb-20 md:pt-48 md:pb-32 text-slate-900 relative overflow-hidden border-b border-slate-100">
        {/* Background Decorative Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/[0.03] to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            href={`/extension-activities/${slug}`}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-600 transition-all mb-12 group"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Back to {activity.chapter?.title || 'Chapter'}
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-600 text-[white] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-blue-600/20">
                Institutional Activity
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 border-l border-slate-200 pl-4">
                <Calendar size={12} className="text-blue-600" /> {activity.date}
              </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] mb-12 text-slate-900">
              {activity.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="space-y-1">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Venue</div>
                <div className="text-sm font-bold flex items-center gap-2 text-slate-700">
                  <MapPin size={16} className="text-blue-600" /> {activity.place}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Participants</div>
                <div className="text-sm font-bold flex items-center gap-2 text-slate-700">
                  <Users size={16} className="text-blue-600" /> {activity.participants}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Beneficiaries</div>
                <div className="text-sm font-bold flex items-center gap-2 text-slate-700">
                  <HeartHandshake size={16} className="text-blue-600" /> {activity.beneficiaries}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Evidence Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left: Description & Gallery */}
            <div className="lg:w-2/3">
              {activity.description && activity.description.length > 0 && (
                <div className="prose prose-slate prose-lg max-w-none mb-20 text-slate-600 font-medium leading-relaxed">
                  <PortableText value={activity.description} />
                </div>
              )}

              {/* Gallery Section */}
              {activity.gallery && activity.gallery.length > 0 && (
                <div className="space-y-12">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-4">
                    <span className="w-10 h-1 bg-blue-600 rounded-full" />
                    Visual Evidence
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {activity.gallery.map((img: string, idx: number) => (
                      <div key={idx} className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:scale-[1.02] transition-transform duration-500">
                        <Image src={img} alt={`${activity.title} gallery ${idx}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!activity.description && !activity.gallery && (
                <div className="bg-slate-50 p-20 rounded-[3rem] text-center border-2 border-dashed border-slate-200">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                    <FileText size={32} className="text-slate-300" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-4">Detailed Report Awaited</h3>
                  <p className="text-slate-500 max-w-md mx-auto font-medium">
                    The full institutional report and photo evidence for this activity are currently being processed by the {activity.chapter?.title}.
                  </p>
                </div>
              )}
            </div>

            {/* Right: Sidebar Meta & Documents */}
            <div className="lg:w-1/3 space-y-12">
               {/* Chapter Info Card - UPDATED TO LIGHT */}
               <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-2xl shadow-slate-200/50 relative overflow-hidden group hover:border-blue-200 transition-all duration-500">
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/[0.03] rounded-full blur-[80px] group-hover:bg-blue-600/[0.05] transition-all" />
                  <div className="relative z-10">
                    <div className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-4 bg-blue-50 w-fit px-3 py-1 rounded-full">Institutional Body</div>
                    <h3 className="text-2xl font-black text-slate-900 leading-tight mb-8">{activity.chapter?.title}</h3>
                    <Link 
                      href={`/extension-activities/${activity.chapter?.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white bg-blue-600 px-6 py-3 rounded-2xl hover:bg-slate-900 transition-all shadow-lg shadow-blue-600/20"
                    >
                      View Chapter Hub
                    </Link>
                  </div>
               </div>

               {/* Document Vault Section */}
               {activity.documents && activity.documents.length > 0 && (
                 <div className="space-y-8">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-4">Event Documents</h4>
                    <div className="space-y-4">
                      {activity.documents.map((doc: any, idx: number) => (
                        <a 
                          key={idx} 
                          href={doc.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group p-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-between hover:bg-white hover:border-blue-600 hover:shadow-xl transition-all"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white text-slate-400 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                              <Download size={16} />
                            </div>
                            <div className="text-xs font-black text-slate-900">{doc.label}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                 </div>
               )}

               {/* Institutional Seal / Badge */}
               <div className="bg-blue-50/50 p-10 rounded-[3rem] border border-blue-100/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                      <Bookmark size={24} className="text-blue-600" />
                    </div>
                    <div className="text-sm font-black text-slate-900">Official Record</div>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    This activity is part of the official {activity.chapter?.title} record at Chalapathi Institute of Pharmaceutical Sciences.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-50 py-20 text-center border-t border-slate-100">
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">
          Institutional Identity • Community Impact • Excellence
        </p>
      </footer>
    </div>
  );
}
