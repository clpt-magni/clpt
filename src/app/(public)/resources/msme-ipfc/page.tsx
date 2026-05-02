"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  Shield,
  FileText,
  Building2,
  Users,
  Lightbulb,
  Globe,
  Compass,
  ArrowRight,
  Eye,
  Target,
  Sparkles,
  ExternalLink,
  Mail,
  Phone,
  Clock,
  MapPin
} from "lucide-react";
import Link from "next/link";

const AUDIENCE = [
  { title: "MSMEs", desc: "For companies in health, life sciences, and pharmaceutical sectors.", icon: Building2 },
  { title: "Startups", desc: "Helping secure core ideas for funding and market entry.", icon: RocketIcon },
  { title: "Academia", desc: "Students, researchers, and faculty members protecting innovations.", icon: Users },
];

const SERVICES = [
  { title: "Patent & IP Filing", desc: "Conducting prior art and patentability searches, drafting patents, and filing nationally & internationally." },
  { title: "Trademarks & Copyrights", desc: "Assisting with trademark searches, copyright protection, and industrial design applications." },
  { title: "Geographical Indications", desc: "Supporting documentation and feasibility studies for regional pilot studies." },
  { title: "Capacity Building", desc: "Hosting awareness seminars, innovation boot camps, and certification programs." },
];

function RocketIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.95.71-2.29 0-3.5" />
      <path d="M12 12c-3.14 1.57-5.07 4.7-6.07 6.07M12 12c1.57-3.14 4.7-5.07 6.07-6.07" />
      <path d="M16.5 4.5c1.26-1.5 5-2 5-2s-.5 3.74-2 5c-.95.71-2.29.71-3.5 0" />
      <path d="m15 9-6 6" />
      <path d="m9 15-3-3" />
      <path d="m15 9 3 3" />
    </svg>
  );
}

export default function MSMEIPFCPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="MSMEs Intellectual Property Facilitation Centre"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "MSME-IPFC" }
        ]}
        description="A specialized knowledge and service hub supported by the Ministry of MSME, Govt of India to strengthen the Intellectual Property ecosystem."
      />

      {/* Overview Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column Content */}
            <div className="lg:col-span-6 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                  IP Services & Education
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight leading-tight">
                  Protect Your Innovation. <br /> Drive Global Growth.
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed italic">
                  <p>
                    The MSMEs Intellectual Property Facilitation Centre (IPFC) at Chalapathi Institute of Pharmaceutical Sciences (CLPT) serves as a dedicated knowledge hub to reinforce the Intellectual Property ecosystem. Under the aegis of the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India, we empower MSMEs, startups, and academia to create, manage, and monetize intellectual capital.
                  </p>
                </div>
              </div>

              {/* Direct Website Portal Card */}
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col justify-center items-start gap-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="space-y-2">
                  <h4 className="text-lg font-black text-primary-dark uppercase">Official Portal</h4>
                  <p className="text-sm text-slate-500 font-medium">Access direct intellectual property tools, applications, and support from the portal.</p>
                </div>
                <Link
                  href="https://chalapathipharmacyipfc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 py-4 px-8 bg-primary text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-primary-dark transition-all shadow-lg hover:-translate-y-0.5 active:scale-95"
                >
                  Visit IPFC Portal <ExternalLink size={16} />
                </Link>
              </div>
            </div>

            {/* Right Column Target Audience */}
            <div className="lg:col-span-6 space-y-8">
              <div className="max-w-4xl mx-auto text-left mb-4">
                <h3 className="text-2xl font-black text-primary-dark uppercase tracking-tight leading-tight flex items-center gap-2">
                  <Eye size={24} className="text-primary" /> Target Audience
                </h3>
                <div className="h-1 w-20 bg-primary mt-2 mb-6 rounded-full" />
              </div>

              <div className="grid grid-cols-1 gap-4">
                {AUDIENCE.map((item, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-3xl border border-slate-100 flex items-start gap-4 hover:shadow-xl hover:bg-primary-dark hover:text-white transition-all duration-500 hover:-translate-y-1 group">
                    <div className="bg-primary/5 group-hover:bg-white/10 p-4 rounded-2xl text-primary group-hover:text-secondary shadow-inner transition-colors duration-500">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-primary-dark group-hover:text-white transition-colors duration-500 uppercase tracking-tight mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 group-hover:text-white/70 text-sm font-medium transition-colors duration-500 italic">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
            
            {/* Vision */}
            <div className="bg-white p-10 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group relative flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-10 text-primary/5 pointer-events-none">
                <Compass size={130} />
              </div>
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Eye size={32} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-primary-dark group-hover:text-primary transition-colors leading-tight uppercase tracking-tight">
                    Our Vision
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-base font-medium italic transition-colors">
                    To create a robust, IP-driven innovation ecosystem that accelerates technological and scientific progress—especially in pharma and allied life sciences—contributing to regional and national economic growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-10 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group relative flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-10 text-primary/5 pointer-events-none">
                <Target size={130} />
              </div>
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Compass size={32} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-primary-dark group-hover:text-primary transition-colors leading-tight uppercase tracking-tight">
                    Our Mission
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-base font-medium italic transition-colors">
                    To empower MSMEs and innovators by providing end-to-end IP support (from protection to commercialization), bridging the gap between industry and academia, and promoting IP literacy in underserved and rural regions of Andhra Pradesh.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-primary-dark uppercase tracking-tight leading-tight">
              Services Offered
            </h2>
            <div className="h-1.5 w-32 bg-primary mx-auto my-6 rounded-full" />
            <p className="text-lg font-medium text-slate-500 leading-relaxed italic">
              Empowering innovators with comprehensive support throughout the entire IP lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {SERVICES.map((serv, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl hover:bg-primary-dark group transition-all duration-500 hover:-translate-y-1">
                <div className="space-y-4">
                  <h4 className="text-xl font-black text-primary-dark group-hover:text-white transition-colors uppercase tracking-tight">
                    {serv.title}
                  </h4>
                  <p className="text-slate-500 group-hover:text-white/70 leading-relaxed font-medium text-sm italic transition-colors">
                    {serv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Hours Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Info Points */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-primary-dark uppercase tracking-tight mb-8">Contact & Location</h3>
              <div className="flex items-start gap-4">
                <div className="text-primary shrink-0"><MapPin size={24} /></div>
                <div>
                  <p className="text-sm font-black text-primary-dark uppercase tracking-wider mb-1">Address</p>
                  <p className="text-slate-600 font-bold">Chalapathi Nagar, LAM, Guntur, Andhra Pradesh, INDIA - 522 034</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-primary shrink-0"><Mail size={24} /></div>
                <div>
                  <p className="text-sm font-black text-primary-dark uppercase tracking-wider mb-1">Email</p>
                  <p className="text-slate-600 font-bold">clptipfc@gmail.com, principalclpt@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-primary shrink-0"><Phone size={24} /></div>
                <div>
                  <p className="text-sm font-black text-primary-dark uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-slate-600 font-bold">0863 252 4685, +91 9490655685, +91 9440101685</p>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Clock className="text-primary shrink-0" size={28} />
                  <h3 className="text-2xl font-black text-primary-dark uppercase tracking-tight">Operating Hours</h3>
                </div>
                <div className="h-1 w-16 bg-primary mt-2 mb-6 rounded-full" />
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-bold border-b border-slate-100 pb-2">
                    <span className="text-slate-600">Monday - Saturday</span>
                    <span className="text-primary font-black">10:00 AM - 04:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold border-b border-slate-100 pb-2">
                    <span className="text-slate-600">Sunday</span>
                    <span className="text-slate-400">Closed</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-50 mt-6 flex justify-end">
                <Link
                  href="https://chalapathipharmacyipfc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-black uppercase text-primary tracking-widest hover:text-primary-dark transition-all hover:translate-x-1"
                >
                  Visit our Portal <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
