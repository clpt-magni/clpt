"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Info, Phone, Mail, Globe, Milestone } from "lucide-react";

interface Program {
  title: string;
  duration: string;
  eligibility: string;
  isHighlight?: boolean;
  icon?: any;
  button?: string;
  specializations?: string;
  criteria?: { label: string; desc: string }[];
}

function AdmissionCard({ prog }: { prog: Program }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`border-none shadow-xl rounded-3xl overflow-hidden transition-all duration-300 ${prog.isHighlight ? 'ring-2 ring-secondary bg-white' : 'bg-white'} ${isHovered ? 'shadow-2xl' : ''}`}
    >
      <CardHeader
        className="p-8 border-b transition-colors duration-300"
        style={{ backgroundColor: isHovered ? '#0F3C6E' : 'rgba(241, 245, 249, 0.5)' }}
      >
        <div className="flex justify-between items-center">
          <h2
            className="text-2xl font-bold font-poppins transition-colors duration-300"
            style={{ color: isHovered ? 'white' : (prog.isHighlight ? '#0F3C6E' : '#08284B') }}
          >
            {prog.title}
          </h2>
          <span
            className="text-xs font-bold px-3 py-1 rounded-full border transition-all duration-300 backdrop-blur-sm"
            style={{
              backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.2)',
              color: isHovered ? 'white' : '#64748b',
              borderColor: isHovered ? 'rgba(255, 255, 255, 0.3)' : '#e2e8f0'
            }}
          >
            {prog.duration}
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Eligibility</h4>
          <p className="text-slate-600 leading-relaxed font-medium italic">"{prog.eligibility}"</p>
        </div>

        {prog.specializations && (
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Specializations</h4>
            <p className="text-slate-800 font-bold">{prog.specializations}</p>
          </div>
        )}

        {prog.criteria && (
          <div className="bg-slate-50 p-6 rounded-2xl space-y-4">
            <h4 className="font-bold text-primary-dark font-poppins flex items-center gap-2">
              <Milestone className="w-4 h-4" /> Admission Criteria
            </h4>
            <ul className="space-y-4">
              {prog.criteria.map((c, j) => (
                <li key={j} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="text-white w-3 h-3" />
                  </div>
                  <div className="text-sm">
                    <span className="font-black text-slate-800">{c.label}:</span>
                    <p className="text-slate-500">{c.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {prog.button && (
          <Button variant="outline" className="w-full border-secondary text-secondary-dark hover:bg-secondary hover:text-white font-bold py-7 rounded-2xl transition-all">
            {prog.icon && <prog.icon className="mr-2 h-5 w-5" />} {prog.button}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default function AdmissionsPage() {
  const programs: Program[] = [
    {
      title: "B. Pharmacy",
      duration: "4 Years, 8 Semesters",
      eligibility: "A pass in 10+2 examination or an equivalent examination with Physics, Chemistry and Biology / Mathematics as subjects.",
      criteria: [
        { label: "Category-A (70%)", desc: "Filled via AP EAPCET counseling by Govt. of Andhra Pradesh." },
        { label: "Category-B (30%)", desc: "Filled by the Institution as per the guidelines of Govt. of Andhra Pradesh." }
      ]
    },
    {
      title: "Pharm. D",
      duration: "6 Years (5+1 Internship)",
      eligibility: "A pass in 10+2 examination with Physics and Chemistry as compulsory subjects along with Mathematics or Biology.",
      criteria: [
        { label: "Category-A (70%)", desc: "Filled via AP EAPCET counseling." },
        { label: "Category-B (30%)", desc: "Filled by the Institution as per the guidelines of Govt. of Andhra Pradesh." }
      ]
    },
    {
      title: "M. Pharmacy",
      duration: "2 Years, 4 Semesters",
      eligibility: "B.Pharmacy degree from an PCI approved institution with at least 50% marks (45% for reserved categories).",
      specializations: "Pharmaceutics, Pharmacology, Pharmaceutical Analysis, Regulatory Affairs.",
      criteria: [
        { label: "Category-A", desc: "GPAT/PGECET qualified candidates as per the guidelines of Govt. of Andhra Pradesh" },
        { label: "Category-B", desc: "Filled by the Institution as per the guidelines of Govt. of Andhra Pradesh." }
      ]
    },
    {
      title: "International Students",
      isHighlight: true,
      duration: "Across all programs",
      eligibility: "CLPT welcomes applications from Foreign National students subject to fulfilling eligibility requirements as per the guidelines of PCI, Govt. of Andhra Pradesh, Govt. of India",
      icon: Globe,
      button: "Contact International Desk"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen font-roboto bg-slate-50">
      {/* Page Header */}
      <section className="bg-primary-dark py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://clpt.s3.ap-south-1.amazonaws.com/college-building.jpg')] opacity-20 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6 leading-tight">Admissions & Eligibility</h1>
            <p className="text-xl text-white/90 font-light leading-relaxed">
              Join Andhra Pradesh's premier autonomous pharmacy college. We welcome dedicated students driven to make a difference in healthcare.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -translate-y-12 relative z-20">
        {/* Urgent Announcement Pin */}
        <div className="bg-sky-100 border-l-[6px] border-sky-600 p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 mb-12 transform hover:scale-[1.01] transition-transform">
          <div className="flex items-start gap-4">
            <div className="bg-sky-600 p-3 rounded-xl mt-1">
              <Info className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-sky-900 font-poppins">Admissions for Academic Year 2025-26 are Open</h3>
              <p className="text-sky-800/80 mt-1 font-medium">Counseling codes: AP EAPCET - <span className="font-black text-sky-900 underline">CLPT</span> | AP PGECET - <span className="font-black text-sky-900 underline">CLPT1</span> | AP ECET - <span className="font-black text-sky-900 underline">CLPT</span></p>
            </div>
          </div>
          <Button className="bg-sky-700 hover:bg-sky-800 text-white font-bold px-10 py-7 rounded-xl text-lg shadow-lg whitespace-nowrap">
            Enquire Now
          </Button>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {programs.map((prog, i) => (
            <AdmissionCard key={i} prog={prog} />
          ))}
        </div>

        {/* Enquiry Form */}
        <section id="contact-admissions" className="mb-24">
          <Card className="border-none shadow-2xl rounded-[40px] overflow-hidden bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-primary p-12 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
                <h2 className="text-4xl font-bold font-poppins mb-6 relative z-10">Get Personalized Counseling</h2>
                <p className="text-white/80 text-lg mb-8 relative z-10">
                  Our expert academic advisors are ready to help you choose the right path for your career in pharmaceutical sciences.
                </p>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-lg">+91 863-2524126</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-lg">admissions@chalapathipharmacy.ac.in</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 p-12">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600 uppercase tracking-widest pl-1">Full Name *</label>
                    <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600 uppercase tracking-widest pl-1">Phone Number *</label>
                    <input type="tel" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+91 00000 00000" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600 uppercase tracking-widest pl-1">Email Address</label>
                    <input type="email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600 uppercase tracking-widest pl-1">Interested Program *</label>
                    <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none" required>
                      <option value="">-- Select Program --</option>
                      <option value="bpharm">B. Pharmacy</option>
                      <option value="mpharm">M. Pharmacy</option>
                      <option value="pharmd">Pharm. D</option>
                      <option value="phd">Ph.D</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-600 uppercase tracking-widest pl-1">Your Query</label>
                    <textarea rows={4} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="Ask us anything about the program..." />
                  </div>
                  <Button className="md:col-span-2 bg-primary hover:bg-primary-dark font-bold py-8 text-lg rounded-2xl shadow-xl transform active:scale-[0.98] transition-all">
                    Submit Enquiry Sheet
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
