import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  ChevronRight, 
  Download, 
  Calendar, 
  MapPin, 
  Users, 
  Building2,
  ArrowLeft,
  FileText,
  Clock,
  HeartHandshake,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { extensionActivitiesRepo } from "@/data/extension-activities";

import ActivityTableClient from "@/components/activities/ActivityTableClient";

// This is a Server Component. We'll handle static data for now, 
// and the schema is ready for Sanity integration.

import { client } from "../../../../../sanity/sanity.client";

export async function generateStaticParams() {
  return extensionActivitiesRepo.map((activity) => ({
    slug: activity.slug,
  }));
}

const typeMap: Record<string, string> = {
  'nss-unit-1': 'nssUnit1Activity',
  'nss-unit-2': 'nssUnit2Activity',
  'ipa-lam': 'ipaLamActivity',
  'ispor-amaravati': 'isporAmaravatiActivity',
  'ispor-anu': 'isporAnuActivity'
};

async function getChapterData(slug: string) {
  const activityType = typeMap[slug] || "extensionActivityItem";
  
  // 1. Fetch Chapter Info
  // 2. Fetch associated activities of the specific type
  const query = `{
    "chapter": *[_type in ["nssUnit1", "nssUnit2", "ipaLam", "isporAmaravati", "isporAnu"] && slug.current == $slug][0] {
      "id": _id,
      title,
      "slug": slug.current,
      description,
      "logo": logo.asset->url,
      documents[] {
        label,
        "url": file.asset->url
      }
    },
    "activities": *[_type == $activityType] | order(date desc) {
      "id": _id,
      title,
      "slug": slug.current,
      date,
      place,
      participants,
      beneficiaries
    }
  }`;
  
  try {
    const data = await client.fetch(query, { slug, activityType });
    return data;
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null;
  }
}

export default async function ExtensionActivityDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;
  
  const data = await getChapterData(slug);
  const staticData = extensionActivitiesRepo.find((a) => a.slug === slug);
  
  // High-performance mapping: prioritize cloud data but never 404 for valid institutional slugs
  const chapter = data?.chapter || (staticData ? {
    title: staticData.title,
    description: staticData.description,
    logo: staticData.logo,
    documents: staticData.documents,
    slug: staticData.slug
  } : null);

  const activities = (data?.activities && data.activities.length > 0) 
    ? data.activities 
    : (staticData ? staticData.activities : []);

  if (!chapter) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Branded Header Section */}
      <section className="bg-slate-50 pt-32 pb-16 md:pt-40 md:pb-24 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <Link 
            href="/extension-activities"
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-600 transition-colors mb-12"
          >
            <ArrowLeft size={12} /> Back to Extension Activities
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-[10px] font-black uppercase tracking-widest bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full">
                  Institutional Chapter
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[0.95] mb-8">
                {chapter.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
                {chapter.description}
              </p>
            </div>

            {chapter.logo && (
              <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                <Image src={chapter.logo} alt={chapter.title} width={180} height={180} className="w-auto h-auto object-contain" />
              </div>
            )}
          </div>
        </div>
      </section>


      {/* 2. Structured Data Section - The Summary Table */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-4">
              <span className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                <Calendar size={24} />
              </span>
              Institutional Performance
            </h2>
          </div>

          <ActivityTableClient 
            activities={activities} 
            chapterSlug={params.slug} 
          />
        </div>
      </section>

      {/* 3. Documentation Center */}
      <section className="bg-slate-50 py-24 md:py-32 border-t border-slate-100">
         <div className="container mx-auto px-6 lg:flex items-center gap-24">
            <div className="lg:w-1/2 mb-16 lg:mb-0">
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[0.95] mb-8">
                  The Documentation <span className="text-blue-600">Vault</span>
               </h2>
               <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                  Access institutional records, detailed event reports, and participation 
                  summaries for {chapter.title}. All documents are officially verified.
               </p>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 gap-6">
               {chapter.documents?.map((doc: any, idx: number) => (
                 <a 
                   key={idx} 
                   href={doc.url} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="group p-8 bg-white border border-slate-200 rounded-[2rem] flex items-center justify-between hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500"
                 >
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                          <FileText size={24} />
                       </div>
                       <div>
                          <div className="text-xs font-black text-slate-900 mb-1">{doc.label}</div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Official Record Document</div>
                       </div>
                    </div>
                    <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all transform scale-90 group-hover:scale-100 duration-500">
                       <Download size={18} />
                    </div>
                 </a>
               ))}
            </div>
         </div>
      </section>

      <footer className="bg-white py-20 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] opacity-50">
            {chapter.title} • ACADEMIC RECORDS • CLPT
          </p>
        </div>
      </footer>
    </div>
  );
}
