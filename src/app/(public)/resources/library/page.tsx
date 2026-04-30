"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Library as LibraryIcon,
  Globe,
  Search,
  Users,
  Layers,
  FileText,
  Printer,
  ChevronRight,
  Database,
  Monitor,
  Bookmark,
  Disc,
  GraduationCap,
  Tablet
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const LIBRARY_STATS = [
  { label: "Total Area", value: "345 Sq.m.", icon: Layers },
  { label: "Total Books", value: "20,768", icon: BookOpen },
  { label: "Total Titles", value: "12,913", icon: Bookmark },
  { label: "Total C.D's", value: "285", icon: Disc },
  { label: "Total Journals", value: "43", icon: FileText, subtext: "Int: 15, Nat: 28" },
  { label: "Total e-Books", value: "9,917", icon: Tablet },
  { label: "Thesis Reports", value: "1,832", icon: GraduationCap },
  { label: "Total e-Journals", value: "6,972", icon: Database, subtext: "e-Shodh Sindhu, Delnet..." },
  { label: "Seating Capacity", value: "150+", icon: Users },
  { label: "Digital Systems", value: "11", icon: Monitor },
];

const DIGITAL_RESOURCES = [
  {
    title: "Digital Library",
    href: "https://drive.google.com/drive/folders/14AsU08YzQ4tGp9Own-e0E4sSPXSNwrzm",
    description: "Cloud-based access to specialized pharmaceutical collections and study materials."
  },
  {
    title: "Previous Question Papers",
    href: "https://clptlibrary.weebly.com/old-question-papers.html",
    description: "Comprehensive archive of past examination papers for academic preparation."
  },
  {
    title: "E-Journal Subscriptions",
    href: "https://clptlibrary.weebly.com/repository-services.html",
    description: "Access to DELNET, BENTHAM, e-Shodh Sindhu, and National Digital Library."
  },
];

const SUBJECT_INVENTORY = [
  { sn: "01", subject: "Pharmacognosy", titles: "215", volumes: "727" },
  { sn: "02", subject: "Pharmacy Practice", titles: "125", volumes: "286" },
  { sn: "03", subject: "Human Anatomy & Physiology", titles: "186", volumes: "502" },
  { sn: "04", subject: "Pharmaceutics ( Dispensing & General Pharmacy)", titles: "347", volumes: "1290" },
  { sn: "05", subject: "Pharmaceutical Organic Chemistry", titles: "164", volumes: "810" },
  { sn: "06", subject: "Pharmaceutical Inorganic Chemistry", titles: "85", volumes: "363" },
  { sn: "07", subject: "Pharmaceutical Microbiology", titles: "143", volumes: "520" },
  { sn: "08", subject: "Pathophysiology", titles: "63", volumes: "189" },
  { sn: "09", subject: "Applied Biochemistry & Clinical Chemistry", titles: "139", volumes: "332" },
  { sn: "10", subject: "Pharmacology", titles: "209", volumes: "671" },
  { sn: "11", subject: "Pharmaceutical Jurisprudence", titles: "40", volumes: "235" },
  { sn: "12", subject: "Pharmaceutical Dosage Forms", titles: "72", volumes: "132" },
  { sn: "13", subject: "Community Pharmacy", titles: "55", volumes: "124" },
  { sn: "14", subject: "Clinical Pharmacy", titles: "212", volumes: "656" },
  { sn: "15", subject: "Hospital Pharmacy", titles: "74", volumes: "238" },
  { sn: "16", subject: "Pharmacotherapeutics", titles: "80", volumes: "842" },
  { sn: "17", subject: "Pharmaceutical Analysis", titles: "274", volumes: "1008" },
  { sn: "18", subject: "Medicinal Chemistry", titles: "87", volumes: "556" },
  { sn: "19", subject: "Biology", titles: "62", volumes: "178" },
  { sn: "20", subject: "Computer Science or Computer Application in Pharmacy", titles: "61", volumes: "155" },
  { sn: "21", subject: "Mathematics / Statistics", titles: "81", volumes: "163" },
  { sn: "22", subject: "Communication Skills", titles: "75", volumes: "143" },
  { sn: "23", subject: "Pharmaceutics - Drug Delivery Systems, Pharmaceutical Engineering, Regulatory Science", titles: "147", volumes: "731" },
];

const GALLERY_ITEMS = [
  {
    title: "CLPT Library Tour",
    subtitle: "Virtual Experience",
    image: "/images/library-tour.png"
  },
  {
    title: "CLPT Best Library Utilisation Award",
    subtitle: "Student Excellence",
    image: "/images/library-award.png"
  },
  {
    title: "Pharmabook Exhibition",
    subtitle: "Annual Event",
    image: "/images/pharmabook-exhibition.png"
  }
];

export default function LibraryResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/30">
      <PageHeader
        title="Institutional Library & Information Centre"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Library" }
        ]}
        description="A Knowledge Hub promoting archival discovery, research excellence, and pharmaceutical scholarship through extensive print and digital collections."
      />

      {/* Main Content */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-primary/5 blur-[100px] rounded-full -translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Stats & Description */}
            <div className="lg:col-span-8">
              <div className="max-w-3xl mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-black text-[10px] uppercase tracking-widest border border-primary/20 mb-8">
                  Academic Heart of CLPT
                </div>
                <h2 className="text-4xl font-black text-primary-dark uppercase tracking-tight mb-6">
                  Comprehensive <br /> Pharmaceutical Archive.
                </h2>
                <p className="text-slate-500 text-lg font-medium leading-relaxed italic">
                  Chalapathi Institute of Pharmaceutical Sciences maintains a modern, automated library system equipped with
                  the latest pharmaceutical literature. Our collection is meticulously curated to support Undergraduate,
                  Postgraduate, and Doctoral research needs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {LIBRARY_STATS.map((stat, idx) => (
                  <Card key={idx} className="border-none shadow-sm bg-slate-50 hover:shadow-xl transition-all duration-500 group overflow-hidden rounded-[2.5rem]">
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-white rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner flex items-center justify-center mb-6">
                        <stat.icon size={24} />
                      </div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</p>
                      <p className="text-xl font-black text-primary-dark mt-2 tracking-tighter">{stat.value}</p>
                      {stat.subtext && (
                        <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-wider leading-relaxed">{stat.subtext}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Automation Feature */}
              <div className="mt-16 p-10 bg-gradient-to-br from-primary-dark to-slate-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 text-white/5 pointer-events-none transition-transform group-hover:scale-110 duration-700">
                  <LibraryIcon size={180} />
                </div>
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-black text-secondary uppercase">Automated Library Management</h3>
                  <p className="text-white/70 font-medium leading-relaxed italic max-w-2xl">
                    The library is partially automated using advanced Library Management Software, enabling students
                    to search collections, check availability, and manage borrowings through a seamless digital interface.
                  </p>
                </div>
              </div>

              {/* Subject Wise Inventory Table */}
              <div className="mt-24 space-y-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-black text-primary-dark uppercase tracking-tight">Subject Wise Inventory</h3>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Comprehensive Collection Breakdown</p>
                </div>
                
                <div className="overflow-hidden rounded-[2rem] border border-slate-100 shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                      <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100">
                          <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">S.No</th>
                          <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject</th>
                          <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Titles</th>
                          <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Volumes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {SUBJECT_INVENTORY.map((item, idx) => (
                          <tr key={idx} className="group hover:bg-slate-50/50 transition-colors border-b border-slate-50 last:border-0">
                            <td className="px-8 py-5 text-[11px] font-bold text-slate-400">{item.sn}</td>
                            <td className="px-8 py-5 text-[11px] font-black text-slate-900 uppercase tracking-wide group-hover:text-primary transition-colors">{item.subject}</td>
                            <td className="px-8 py-5 text-[11px] font-black text-slate-600 text-center">{item.titles}</td>
                            <td className="px-8 py-5 text-[11px] font-black text-slate-900 text-center">{item.volumes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar / Digital Gateway */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col gap-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-black text-primary uppercase tracking-tight">Digital Gateway</h2>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Global Repository Access</p>
                  </div>

                  {DIGITAL_RESOURCES.map((res, idx) => (
                    <Link key={idx} href={res.href} className="group">
                      <div className="p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-primary hover:shadow-xl transition-all duration-500">
                        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <Search size={18} />
                        </div>
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide mb-3 group-hover:text-primary transition-colors">{res.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed font-medium mb-6">
                          {res.description}
                        </p>
                        <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-primary">
                          Explore Resource <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Technical Support */}
                <div className="p-8 border-2 border-dashed border-slate-200 rounded-[2.5rem] flex items-center gap-6 group hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                    <Printer size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-900 uppercase">Reprography Service</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mt-0.5 tracking-wider">Printing & Photocopying available</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Visual Context Strip */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_ITEMS.map((item, idx) => (
              <div key={idx} className="aspect-video bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden relative group">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-10 transition-opacity duration-500">
                  <p className="text-white text-xs font-black uppercase tracking-widest mb-1">{item.title}</p>
                  <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest italic">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

