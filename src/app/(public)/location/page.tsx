"use client";

import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Bus, 
  Train, 
  Plane,
  ChevronRight,
  ExternalLink,
  Navigation
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const contactInfo = [
  {
    icon: MapPin,
    title: "Official Address",
    details: ["Chalapathi Nagar, LAM, Guntur 522 034", "Andhra Pradesh, INDIA"],
    color: "blue"
  },
  {
    icon: Phone,
    title: "Contact Numbers",
    details: ["+91 863 2524124, 2524125", "Cell: +91 94401 01685"],
    color: "indigo"
  },
  {
    icon: Mail,
    title: "Official Email",
    details: ["principalclpt@gmail.com", "nadendla2000@yahoo.co.in"],
    color: "slate"
  }
];

const transportGuide = [
  {
    icon: Bus,
    title: "By Road",
    description: "LAM is well connected by APSRTC buses from Guntur (9km) and Vijayawada (35km). Frequent city buses and private transport are available from Guntur NTR Bus Station."
  },
  {
    icon: Train,
    title: "By Rail",
    description: "The nearest major railway junction is Guntur Junction (GNT), which is approximately 10km from the campus. Vijayawada Junction (BZA) is another major railhead 40km away."
  },
  {
    icon: Plane,
    title: "By Air",
    description: "The nearest airport is Vijayawada International Airport (Hanna-varam), located about 55km from the campus, offering domestic and limited international connectivity."
  }
];

export default function LocationPage() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.0777765483435!2d80.4340180751423!3d16.369999934353935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f3546520387d%3A0x1074384ec16bc479!2sCLPT%2C%20Chalapathi%20Institute%20of%20Pharmaceutical%20Sciences!5e0!3m2!1sen!2sin!4v1775275955827!5m2!1sen!2sin";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Institutional Hero Section */}
      <section className="bg-slate-50 pt-24 pb-20 md:pt-40 md:pb-32 relative overflow-hidden border-b border-slate-100/50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/[0.03] blur-[120px] rounded-full -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-400/[0.03] blur-[100px] rounded-full -ml-20 -mb-20" />
        
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-blue-600/5 border border-blue-600/10 rounded-full text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Campus Visit
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight mb-8 leading-[0.95]">
              Location & <br />
              <span className="text-blue-600">Directions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Nestled in the educational hub of Guntur, our campus is easily accessible 
              via road, rail, and air. Visit us to experience our state-of-the-art facilities firsthand.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Map Presentation Section */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="relative group">
             {/* Map Container */}
             <div className="w-full h-[500px] md:h-[700px] rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl shadow-slate-200/50 relative z-10 transition-all duration-700 group-hover:border-blue-50">
                <iframe 
                  src={mapEmbedUrl}
                  className="w-full h-full border-0 grayscale-[0.2] contrast-[1.1] brightness-[1.05]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
             </div>

             {/* Floating Info Card (Desktop Only) */}
             <div className="hidden lg:block absolute bottom-12 left-12 z-20 max-w-md">
                <div className="bg-white/90 backdrop-blur-2xl border border-white p-10 rounded-[2.5rem] shadow-2xl">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                         <Navigation size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-slate-900 tracking-tight">Main Campus</h3>
                        <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Chalapathi Nagar, LAM</p>
                      </div>
                   </div>
                   <p className="text-sm font-semibold text-slate-500 leading-relaxed mb-8">
                      Our main campus is located in LAM, Guntur. Use the link below for precise navigation via Google Maps.
                   </p>
                   <Link href="https://maps.app.goo.gl/3a35f3546520387d" target="_blank">
                      <Button className="w-full h-14 rounded-2xl bg-slate-900 hover:bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] transition-all">
                         <MapPin size={16} className="mr-2" /> Start Navigation
                      </Button>
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Contact Info & Transport Guide */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/[0.02] blur-[120px] rounded-full -mr-20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Left: Contact Details */}
            <div className="lg:col-span-5 space-y-12">
               <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-6">Contact Institutional <br />Offices</h2>
                  <p className="text-slate-500 font-medium max-w-sm">Reach out to our administrative or principal offices for admission inquiries and program details.</p>
               </div>

               <div className="space-y-6">
                  {contactInfo.map((info, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-6 p-6 bg-white border border-slate-100 rounded-3xl"
                    >
                      <div className="w-14 h-14 bg-slate-50 flex-shrink-0 rounded-2xl flex items-center justify-center text-blue-600">
                         <info.icon size={24} />
                      </div>
                      <div>
                         <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{info.title}</h4>
                         {info.details.map((d, i) => (
                           <p key={i} className="text-sm font-black text-slate-900 leading-tight mb-1">{d}</p>
                         ))}
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>

            {/* Right: Transport Guide */}
            <div className="lg:col-span-7 space-y-12">
               <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-6">Getting to <span className="text-blue-600">Guntur</span></h2>
                  <p className="text-slate-500 font-medium max-w-xl">Guntur is an important educational centre in Andhra Pradesh, well-connected to major cities like Vijayawada, Hyderabad, and Chennai.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                  {transportGuide.map((guide, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-10 bg-white border border-slate-100 rounded-[2.5rem] group hover:border-blue-600/20 transition-all hover:shadow-xl hover:shadow-slate-200/40"
                    >
                      <div className="flex items-center gap-6 mb-6">
                         <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                            <guide.icon size={22} />
                         </div>
                         <h3 className="text-xl font-black text-slate-900 tracking-tight underline decoration-blue-600/20 underline-offset-8">{guide.title}</h3>
                      </div>
                      <p className="text-sm font-semibold text-slate-500 leading-relaxed max-w-2xl">
                        {guide.description}
                      </p>
                    </motion.div>
                  ))}
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Helpdesk CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.05] rounded-full blur-[100px] -mr-20" />
             
             <div className="relative z-10 max-w-xl">
               <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8">Need Assistance?</h2>
               <p className="text-blue-100 text-lg font-medium">Our helpdesk can guide you with detailed directions or help you plan your campus visit.</p>
             </div>

             <div className="relative z-10 flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <Link href="/contact">
                   <Button className="w-full md:w-auto h-16 px-10 rounded-2xl bg-white hover:bg-slate-50 text-blue-600 font-black uppercase tracking-widest text-[10px] shadow-2xl transition-all">
                      <Mail size={16} className="mr-2" /> Contact Helpdesk
                   </Button>
                </Link>
                <Link href="tel:+918632524124">
                   <Button variant="outline" className="w-full md:w-auto h-16 px-10 rounded-2xl bg-blue-700/50 border-blue-400/30 text-white font-black uppercase tracking-widest text-[10px] hover:bg-blue-700 transition-all">
                      <Phone size={16} className="mr-2" /> Call Office
                   </Button>
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Official Bottom Branding */}
      <footer className="bg-slate-50 py-20 border-t border-slate-100/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] opacity-50">
            Chalapathi Institute of Pharmaceutical Sciences • Campus Administration
          </p>
        </div>
      </footer>
    </div>
  );
}
