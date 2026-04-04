import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, History, Target, ShieldCheck, Award, FileText, User, Users, Gavel } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-roboto">
      {/* Page Header */}
      <section className="bg-primary-dark py-16 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://clpt.s3.ap-south-1.amazonaws.com/college-building.jpg')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-2 animate-in slide-in-from-left duration-700">About the Institute</h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl">Legacy of Excellence in Pharmaceutical Education since 2004.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* History Section */}
          <section id="history" className="animate-in fade-in duration-1000">
            <Card className="border-none shadow-xl bg-white overflow-hidden border-l-[6px] border-primary">
              <CardContent className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <History className="text-primary w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-dark font-poppins border-b-2 border-secondary pb-2">Our History</h2>
                </div>
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                  <p>
                    Realizing the increasing importance of Pharmacy profession, Sri. Y.V. Anjaneyulu, President of Chalapathi Educational Society with his futuristic vision established Chalapathi Institute of Pharmaceutical Sciences (CLPT) at Lam in Guntur, Andhra Pradesh. It is located at about 8 K.M. from Guntur Town towards Amaravathi.
                  </p>
                  <p>
                    Guntur is well connected by bus or train from Vijayawada (40 min), Hyderabad (4.30 hrs.) and Chennai (7 hrs.) and is on the N.H.-5 connecting Chennai and Calcutta. Plenty of local transport is arrived from Guntur town to the college campus.
                  </p>
                  <p>
                    The campus is located in 2 acres pollution free, picturesque lush green environment offering right ambience and conduciveness for quality education and research. The College is housed in an independent and spacious building constructed as per the norms and specifications of AICTE and PCI New Delhi, Govt. of Andhra Pradesh. All Programmes offered by the Institution are permanently affiliated to ANU and the institution was accorded autonomous since 2016 by UGC and approved by UGC under Section 2(f) and 12 B.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Vision & Mission Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section id="vision">
              <div className="bg-slate-50 p-10 rounded-2xl border-l-[6px] border-primary h-full shadow-md group hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <Target className="text-primary w-8 h-8" />
                  <h2 className="text-2xl font-bold text-primary-dark font-poppins">Vision</h2>
                </div>
                <p className="text-xl font-medium italic text-slate-700 font-roboto leading-relaxed">
                  "To inculcate excellence in various fields of pharmacy, mould the institution as centre of excellence in terms of academics and advanced research."
                </p>
              </div>
            </section>

            <section id="mission">
              <div className="bg-amber-50/50 p-10 rounded-2xl border-l-[6px] border-secondary h-full shadow-md group hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <Award className="text-secondary-dark w-8 h-8" />
                  <h2 className="text-2xl font-bold text-primary-dark font-poppins">Mission</h2>
                </div>
                <p className="text-xl font-medium italic text-slate-700 font-roboto leading-relaxed">
                  "Committed to impart quality pharmaceutical education and research to meet global standards"
                </p>
              </div>
            </section>
          </div>

          {/* Quality Policy */}
          <section id="quality-policy">
            <div className="bg-blue-50/50 p-10 rounded-2xl border-l-[6px] border-blue-600 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck className="text-blue-600 w-8 h-8" />
                <h2 className="text-2xl font-bold text-primary-dark font-poppins">Quality Policy</h2>
              </div>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Chalapathi Institute of pharmaceutical sciences is committed to impart quality pharmaceutical education to the growing needs of the society by implementing quality management system on a continual contact basis and continually improved services.
                </p>
                <p>
                  We shall protect the interest of our students and prepare them to meet growing challenges with increased ability to serve the nation and society.
                </p>
              </div>
            </div>
          </section>

          {/* CES Overview */}
          <section id="ces-overview">
            <details className="group bg-white border border-slate-200 rounded-2xl shadow-lg border-l-[6px] border-primary overflow-hidden">
              <summary className="p-8 cursor-pointer list-none flex items-center justify-between">
                <h2 className="text-xl font-bold text-primary font-poppins">Chalapathi Educational Society (CES) Overview</h2>
                <ChevronDown size={20} className="text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-8 pb-8 space-y-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-6">
                <p>
                  Chalapathi Educational Society (CES), established in 1995 under the Andhra Pradesh Societies Registration Act, is poised to launch a State Private University in the academic year 2025. This initiative will integrate the Chalapathi Institute of Pharmaceutical Sciences (established in 2004) and the Chalapathi Institute of Engineering and Technology (established in 2007) in Lam Village, Guntur. The academic buildings were inaugurated by SRI NARA CHANDRABABU NAIDU GARU, the visionary Chief Minister of Andhra Pradesh.
                </p>
                <p>
                  Embracing the transformative goals of the National Education Policy (NEP) 2020, Chalapathi University will expand its academic horizons significantly.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none pl-0">
                  {[
                    "Deep Technology & Advanced Computational Sciences",
                    "Industry-Aligned Skill-Oriented Programs",
                    "Community Healthcare & Allied Health Sciences",
                    "Behavioural Psychology & Forensic Science",
                    "Clinical Research & Clinical Data Management"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Button variant="outline" className="border-primary text-primary font-bold hover:bg-primary hover:text-white">
                    <FileText className="mr-2 h-4 w-4" /> View Official PDF
                  </Button>
                </div>
              </div>
            </details>
          </section>

          {/* Principal Preview Card */}
          <section id="leadership" className="pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Leadership Column */}
              <div className="lg:col-span-1">
                <Card className="text-center overflow-hidden shadow-2xl border-none">
                  <div className="h-24 bg-primary" />
                  <CardContent className="-mt-12 pb-8">
                    <img
                      src="/images/principal.jpg"
                      alt="Prof. Rama Rao Nadendla"
                      className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto mb-6 object-cover"
                    />
                    <h3 className="text-xl font-bold text-primary-dark font-poppins">Prof. Rama Rao Nadendla</h3>
                    <p className="text-xs font-bold text-secondary-dark uppercase tracking-widest mt-1 mb-4">Principal & Professor</p>
                    <p className="text-sm text-slate-500 mb-6 italic leading-relaxed px-4">
                      "Leading with vision, educating with passion to create globally competent pharmacy professionals."
                    </p>
                         <Link href="/principal">
                           <Button className="w-full bg-primary-dark hover:bg-primary font-bold py-6 rounded-xl shadow-lg transition-all">
                             View Full Profile
                           </Button>
                         </Link>
                  </CardContent>
                </Card>
              </div>

              {/* Governing Body Preview */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <Gavel className="text-primary w-8 h-8" />
                      <h2 className="text-2xl font-bold text-primary-dark font-poppins">Institutional Governance</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-8">
                      The Governing Body and Academic Council of Chalapathi Institute of Pharmaceutical Sciences provide strategic direction, monitor institutional performance, and ensure global standards in pharmaceutical education.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="py-8 border-primary text-primary font-bold rounded-2xl hover:bg-primary/5">
                      Governing Body Members
                    </Button>
                    <Button variant="outline" className="py-8 border-primary text-primary font-bold rounded-2xl hover:bg-primary/5">
                      Academic Council
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
