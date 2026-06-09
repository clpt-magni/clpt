import { getLaboratoryBySlug, getLaboratories } from "@/lib/sanity-actions";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LaboratoryInstruments } from "@/components/laboratory-instruments";
import { 
  ArrowLeft, 
  CheckCircle2, 
  ChevronRight, 
  Download, 
  Microscope, 
  Info, 
  ShieldCheck, 
  Layers,
  MapPin,
  Clock,
  ExternalLink,
  Calculator,
  ImageIcon
} from "lucide-react";
import { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const lab = await getLaboratoryBySlug(slug);
  if (!lab) return { title: "Laboratory Not Found" };

  return {
    title: `${lab.name} - Best Pharmacy College in Andhra Pradesh`,
    description: `Explore the state-of-the-art ${lab.name} at Chalapathi Institute of Pharmaceutical Sciences. Room ${lab.roomNo}, Area ${lab.area}. Advanced instruments and modern facilities.`,
    keywords: [`${lab.name}`, "best pharmacy college in AP", "pharmacy research labs in Andhra Pradesh", "CLPT Laboratories", "pharmaceutical chemistry labs"],
  };
}

export default async function LabDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lab = await getLaboratoryBySlug(slug);
  const allLabs = await getLaboratories();

  if (!lab) {
    notFound();
  }

  // Comma-splitting logic as requested
  const instrumentList = lab.instruments 
    ? lab.instruments.split(',').map((s: string) => s.trim()).filter((s: string) => s.length > 0)
    : [];
  
  const facilityList = lab.facilities
    ? lab.facilities.split(',').map((s: string) => s.trim()).filter((s: string) => s.length > 0)
    : [];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader
        title={lab.name}
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Laboratories", href: "/resources/labs" },
          { label: lab.name }
        ]}
        description={`Equipped with modern analytical tools and safety systems for pharmaceutical excellence. (Room ${lab.roomNo} | ${lab.area || "N/A"})`}
      />

      {/* 2. Image Gallery Section (New) */}
      {lab.images && lab.images.length > 0 && (
        <section className="py-12 bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-6">
             <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <ImageIcon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight">Facility Gallery</h3>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-0.5">Capturing Innovation</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lab.images.map((img: string, i: number) => (
                  <div key={i} className="group relative rounded-3xl overflow-hidden aspect-video bg-white shadow-sm hover:shadow-2xl transition-all duration-700">
                    <img 
                      src={img} 
                      alt={`${lab.name} - Facility View ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="text-white text-[10px] font-bold uppercase tracking-widest">
                        View Facility {i + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </section>
      )}

      {/* 3. Main Lab Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
            
            {/* Left Column: Instruments & Facilities */}
            <div className="flex-1 space-y-24">
              
              {/* Searchable Instruments List */}
              <LaboratoryInstruments instruments={instrumentList} />

              {/* Facilities Section */}
              <div>
                <div className="flex items-center justify-between border-b-2 border-slate-100 pb-6 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary-foreground">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Facilities</h2>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Safety & Infrastructure</p>
                    </div>
                  </div>
                </div>

                {facilityList.length > 0 ? (
                  <div className="flex flex-wrap gap-3">
                    {facilityList.map((item: string, i: number) => (
                      <div key={i} className="px-5 py-3 rounded-full bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider border border-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-10 text-center bg-slate-50 rounded-3xl border border-dashed border-slate-200 text-slate-400 font-medium italic"> 
                    Standard institutional safety facilities provided. 
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Sticky Sidebar Info */}
            <div className="lg:w-96 shrink-0 space-y-8">
              {/* Lab Summary Card */}
              <div className="bg-primary-dark text-white rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 -skew-x-12 translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-110 duration-700" />
                
                <h3 className="text-secondary font-black uppercase tracking-[0.2em] text-[11px] mb-10 flex items-center gap-2">
                  <Info size={16} /> Lab Quick View
                </h3>
                
                <div className="space-y-10 mb-12">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-secondary border border-white/10 group-hover:bg-secondary group-hover:text-primary-dark transition-all duration-500">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1.5">Location</div>
                      <div className="text-white font-black text-lg tracking-tight uppercase">Room {lab.roomNo}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-secondary border border-white/10 group-hover:bg-secondary group-hover:text-primary-dark transition-all duration-500">
                      <Calculator size={22} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1.5">Total Area</div>
                      <div className="text-secondary font-black text-lg tracking-tight">{lab.area || "N/A"}</div>
                    </div>
                  </div>
                </div>

                {lab.manualUrl ? (
                  <Link href={lab.manualUrl} target="_blank" className="block">
                    <Button className="w-full bg-secondary hover:bg-white text-primary-dark font-black uppercase tracking-widest text-[11px] py-8 rounded-2xl shadow-xl transition-all active:scale-95">
                      Download Manual <Download size={18} className="ml-2" />
                    </Button>
                  </Link>
                ) : (
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
                    <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">Manual Unavailable</p>
                  </div>
                )}
              </div>

              {/* Related Labs List */}
              <div className="bg-white border border-slate-100 rounded-[2rem] p-10">
                <h3 className="text-slate-800 font-bold uppercase tracking-tight mb-8">Other Facilities</h3>
                <div className="space-y-4">
                  {allLabs
                    .filter((l: any) => l.slug?.current !== slug)
                    .slice(0, 5)
                    .map((other: any, i: number) => (
                      <Link 
                        key={i} 
                        href={`/resources/labs/${other.slug?.current}`}
                        className="flex items-center justify-between group py-2"
                      >
                        <span className="text-slate-500 group-hover:text-primary font-bold text-[13px] transition-colors">{other.name}</span>
                        <ChevronRight size={14} className="text-slate-300 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
