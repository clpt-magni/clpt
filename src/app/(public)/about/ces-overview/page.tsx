import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, GraduationCap, Award, Microscope, HeartPulse, Brain, Database, FileText } from "lucide-react";
import Link from "next/link";

export default function CesOverviewPage() {
  const focusAreas = [
    {
      title: "Deep Technology & Advanced Computational Sciences",
      icon: Database,
      desc: "Shaping the future through AI-driven research and advanced engineering solutions."
    },
    {
      title: "Industry-Aligned Skill-Oriented Programs",
      icon: Award,
      desc: "Bridging the gap between academia and global industrial requirements."
    },
    {
      title: "Community Healthcare & Allied Health Sciences",
      icon: HeartPulse,
      desc: "Promoting public health through outreach and specialized health education."
    },
    {
      title: "Behavioural Psychology & Forensic Science",
      icon: Brain,
      desc: "Exploring the human mind and legal applications for institutional excellence."
    },
    {
      title: "Clinical Research & Clinical Data Management",
      icon: Microscope,
      desc: "Pioneering evidence-based medical research and systematic trial analytics."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Chalapathi Educational Society (CES)"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Society Overview" }
        ]}
        description="Pioneering a transformation in higher education since 1995. The society is poised to launch the State Private University in 2025, integrating pharmacy and engineering into a unified center of global excellence."
      />

      {/* Core History & Vision */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-in slide-in-from-left duration-1000">
                 <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                   <p className="text-2xl font-bold text-primary-dark border-l-4 border-secondary pl-6 mb-8">
                     Chalapathi Educational Society (CES) was established in 1995 under the Andhra Pradesh Societies Registration Act.
                   </p>
                   <p>
                     With a futuristic vision of our president SRI Y.V. ANJANEYULU, the society is poised to launch a <strong>State Private University</strong> in the academic year 2025. This historic initiative will integrate the Chalapathi Institute of Pharmaceutical Sciences (est. 2004) and the Chalapathi Institute of Engineering and Technology (est. 2007) into a unified center of global excellence.
                   </p>
                   <p>
                     The academic buildings stand as a testament to our commitment, inaugurated by <strong>SRI NARA CHANDRABABU NAIDU GARU</strong>, the visionary Chief Minister of Andhra Pradesh, who shared our dream of creating a world-class educational hub in Lam Village, Guntur.
                   </p>
                 </div>
                 
                 <div className="pt-6">
                   <Link href="https://clpt.s3.ap-south-1.amazonaws.com/ces-overview.pdf" target="_blank" rel="noopener noreferrer">
                     <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-7 rounded-2xl font-bold shadow-xl flex items-center gap-3 transition-all active:scale-95">
                       <FileText size={20} /> View Official Society PDF
                     </Button>
                   </Link>
                 </div>
              </div>

              <div className="relative group overflow-hidden rounded-[40px] shadow-2xl animate-in fade-in duration-1000">
                 <img 
                    src="https://clpt.s3.ap-south-1.amazonaws.com/college-building.jpg" 
                    alt="Chalapathi Campus" 
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
                 <div className="absolute bottom-10 left-10 text-white">
                   <h3 className="text-3xl font-bold font-poppins">World-Class Infrastructure</h3>
                   <p className="text-white/80 font-light mt-2 uppercase tracking-widest text-sm">Empowering Future Leaders</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Pillars (NEP 2020) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 font-poppins">NEP 2020 Vision & Strategy</h2>
            <div className="h-1.5 w-32 bg-secondary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Embracing the transformative goals of the National Education Policy, Chalapathi University will expand its academic horizons significantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
             {focusAreas.map((area, idx) => (
                <Card key={idx} className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden group">
                  <CardContent className="p-10 space-y-6 bg-white">
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                       <area.icon size={32} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-primary-dark font-poppins group-hover:text-primary transition-colors leading-tight">
                        {area.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed text-sm">
                        {area.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
             ))}
          </div>
        </div>
      </section>

      {/* Integration Message */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10">
           <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-10 max-w-3xl mx-auto">
             Integrating Excellence for a Sustainable Future.
           </h2>
           <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-4 bg-white/10 px-8 py-6 rounded-3xl backdrop-blur-md border border-white/10">
                 <GraduationCap className="text-secondary w-10 h-10" />
                 <div className="text-left">
                   <div className="text-2xl font-bold">CLPT</div>
                   <div className="text-xs text-white/60 font-bold uppercase tracking-widest mt-1">Pharmacy Excellence</div>
                 </div>
              </div>
              <div className="text-2xl font-black text-secondary-dark">+</div>
              <div className="flex items-center gap-4 bg-white/10 px-8 py-6 rounded-3xl backdrop-blur-md border border-white/10">
                 <Building2 className="text-secondary w-10 h-10" />
                 <div className="text-left">
                   <div className="text-2xl font-bold">CIET</div>
                   <div className="text-xs text-white/60 font-bold uppercase tracking-widest mt-1">Engineering Future</div>
                 </div>
              </div>
           </div>
           
           <div className="mt-20">
              <Link href="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark px-10 py-7 font-bold rounded-2xl">
                  Back to Institutional Profile
                </Button>
              </Link>
           </div>
         </div>
      </section>
    </div>
  );
}
