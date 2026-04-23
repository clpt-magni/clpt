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
          <h1 className="text-4xl md:text-5xl !text-white font-bold font-poppins mb-2 animate-in slide-in-from-left duration-700">About the Institute</h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl">Legacy of Excellence in Pharmaceutical Education since 2004.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* History Section */}
          <section id="history" className="scroll-mt-40 animate-in fade-in duration-1000">
            <Card className="border-none shadow-xl bg-white overflow-hidden border-l-[6px] border-primary">
              <CardContent className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <History className="text-primary w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-dark font-poppins border-b-2 border-secondary pb-2">Our History</h2>
                </div>
                <div className="space-y-8 text-slate-600 leading-relaxed text-lg">
                  <div className="space-y-4">
                    <h3 className="font-black text-primary-dark uppercase tracking-tight text-xl">Establishment & Vision</h3>
                    <p>
                      Chalapathi Institute of Pharmaceutical Sciences (CLPT) was established in 2004 under the aegis of the Chalapathi Educational Society (founded in 1995) by Sri Y. V. Anjaneyulu, with a forward-looking vision to strengthen and professionalize pharmaceutical education in India. The institution was founded at Lam, near Guntur in Andhra Pradesh, strategically located along the Guntur–Amaravathi corridor with strong connectivity to major cities such as Vijayawada, Hyderabad, and Chennai through national highway and rail networks.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-black text-primary-dark uppercase tracking-tight text-xl">Campus & Regulatory Framework</h3>
                    <p>
                      From its inception, CLPT was developed with a focus on creating a high-quality academic and research ecosystem within a pollution-free and eco-sustainable campus. The infrastructure was established in accordance with the regulatory standards of the Pharmacy Council of India and other statutory bodies. The institute became permanently affiliated with Acharya Nagarjuna University and was later granted autonomous status in 2016 by the University Grants Commission under Sections 2(f) and 12(B), marking a significant milestone in its academic evolution.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-black text-primary-dark uppercase tracking-tight text-xl">Accreditations & Rankings</h3>
                    <p>
                      Over the years, CLPT has progressively strengthened its quality benchmarks and academic standing. The B.Pharmacy program received accreditation from the National Board of Accreditation, and the institution achieved NAAC "A+" accreditation for two consecutive cycles with a CGPA of 3.37 on a 4.0 scale. Its consistent academic performance has been reflected in national rankings by the National Institutional Ranking Framework (NIRF), where it secured notable positions between 2017 and 2023, demonstrating sustained institutional growth and competitiveness.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-black text-primary-dark uppercase tracking-tight text-xl">Infrastructure & Specialized Facilities</h3>
                    <p>
                      As part of its developmental trajectory, CLPT expanded its academic and research infrastructure to include advanced laboratories, smart classrooms, simulation facilities, and comprehensive library resources. It also established several specialized units such as a Government-approved Drug Testing Laboratory, Pradhan Mantri Bharatiya Janaushadhi Kendra, CPCSEA-approved animal house, ADR Monitoring Centre, and an incubation centre, thereby enhancing its research and service capabilities. Recognition as a Scientific and Industrial Research Organization (SIRO) by the Department of Scientific and Industrial Research further strengthened its research profile.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-black text-primary-dark uppercase tracking-tight text-xl">Curriculum & Academic Ecosystem</h3>
                    <p>
                      Parallel to infrastructure growth, the institution developed a dynamic and industry-aligned curriculum integrating core pharmaceutical sciences with skill development, research training, and experiential learning components such as practice school, clerkship, and project work. Over time, CLPT established multiple academic and professional centres, including those dedicated to community services, competitive examinations, overseas education, intellectual property, and industry–institute partnerships.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-black text-primary-dark uppercase tracking-tight text-xl">Student Development & Career Progression</h3>
                    <p>
                      The institute has also evolved robust student support and career development systems, with the IIPEC Cell playing a key role in placements and higher education pathways, including international opportunities. Its growing alumni network has contributed significantly to academic enrichment and institutional reputation, with numerous batches of B.Pharmacy, M.Pharmacy, and Pharm.D graduates successfully completing their programs.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-black text-primary-dark uppercase tracking-tight text-xl">Continuous Quality Improvement</h3>
                    <p>
                      Throughout its history, CLPT has maintained a strong commitment to continuous quality improvement through structured feedback systems, academic audits, and alignment with emerging trends in pharmaceutical sciences. This sustained and systematic development has positioned the institution as a prominent center for pharmaceutical education and research with national recognition and expanding global relevance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Vision & Mission Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section id="vision" className="scroll-mt-40">
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

            <section id="mission" className="scroll-mt-40">
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
          <section id="quality-policy" className="scroll-mt-40">
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
              <div className="mt-8 pt-8 border-t border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-slate-500 font-medium italic">
                  Explore our broader institutional vision and the upcoming Chalapathi University (2025).
                </div>
                <Link href="/about/ces-overview">
                  <Button className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-6 rounded-xl shadow-lg transition-all">
                    View CES Overview
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Leadership Section */}
          <section id="leadership" className="pt-8 scroll-mt-40 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Chairman Card */}
              <Card className="text-center overflow-hidden shadow-2xl border-none transition-all hover:scale-[1.02] duration-500">
                <div className="h-24 bg-[#002147]" />
                <CardContent className="-mt-12 pb-8">
                  <img
                    src="/images/chairman.jpg"
                    alt="Sri Y.V. Anjaneyulu Garu"
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-bold text-primary-dark font-poppins">Sri Y.V. Anjaneyulu Garu</h3>
                  <p className="text-xs font-bold text-secondary-dark uppercase tracking-widest mt-1 mb-4">Founder President & Chairman</p>
                  <p className="text-sm text-slate-500 mb-6 italic leading-relaxed px-4">
                    "Providing high-quality, value-based education that prepares students for global challenges."
                  </p>
                  <Link href="/about/chairman">
                    <Button className="w-full bg-[#002147] !text-white hover:bg-primary font-bold py-6 rounded-xl shadow-lg transition-all">
                      View Full Profile
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Principal Card */}
              <Card className="text-center overflow-hidden shadow-2xl border-none transition-all hover:scale-[1.02] duration-500">
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
                  <Link href="/about/principal">
                    <Button className="w-full bg-primary-dark !text-white hover:bg-primary font-bold py-6 rounded-xl shadow-lg transition-all">
                      View Full Profile
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Governing Body Preview */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <Gavel className="text-primary w-10 h-10" />
                  <h2 className="text-3xl font-bold text-primary-dark font-poppins">Institutional Governance</h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">
                  The Governing Body and Academic Council of Chalapathi Institute of Pharmaceutical Sciences provide strategic direction, monitor institutional performance, and ensure global standards in pharmaceutical education.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
                <Link href="/about/governing-body">
                  <Button variant="outline" className="w-full sm:w-56 py-8 border-primary text-primary font-bold rounded-2xl hover:bg-primary/5">
                    Governing Body
                  </Button>
                </Link>
                <Link href="/about/academic-council">
                  <Button variant="outline" className="w-full sm:w-56 py-8 border-primary text-primary font-bold rounded-2xl hover:bg-primary/5">
                    Academic Council
                  </Button>
                </Link>
                <Link href="/about/finance-committee">
                  <Button variant="outline" className="w-full sm:w-56 py-8 border-primary text-primary font-bold rounded-2xl hover:bg-primary/5">
                    Finance Committee
                  </Button>
                </Link>
                <Link href="/about/bos">
                  <Button variant="outline" className="w-full sm:w-56 py-8 border-primary text-primary font-bold rounded-2xl hover:bg-primary/5">
                    Board of Studies
                  </Button>
                </Link>
                <Link href="/about/affiliations">
                  <Button variant="outline" className="w-full sm:w-56 py-8 border-primary text-primary font-bold rounded-2xl hover:bg-primary/5">
                    Affiliations & Approvals
                  </Button>
                </Link>
                <Link href="/faculty">
                  <Button variant="outline" className="w-full sm:w-56 py-8 border-primary text-primary font-bold rounded-2xl hover:bg-primary/5">
                    Faculty
                  </Button>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
