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
      {/* 1. Header Area with Glassmorphism Overlay */}
      <section className="bg-[#020617] pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 flex items-center justify-center -z-0">
          <Microscope size={600} className="text-blue-500/20 rotate-12" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            href="/resources/labs" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-white mb-10 transition-colors text-xs font-black uppercase tracking-[0.2em]"
          >
            <ArrowLeft size={16} /> All Laboratories
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Room {lab.roomNo} | {lab.area || "N/A"}
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight mb-8 leading-tight">
              {lab.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed italic max-w-2xl">
              Equipped with modern analytical tools and safety systems for pharmaceutical excellence.
            </p>
          </div>
        </div>
      </section>

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
              <div className="bg-[#020617] rounded-[2rem] p-4 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full" />
                <div className="bg-white/5 backdrop-blur-md rounded-[1.5rem] p-10 border border-white/10 relative z-10 h-full">
                  <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-8">Lab Quick View</h3>
                  
                  <div className="space-y-8 mb-12">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 border border-white/10">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Location</div>
                        <div className="text-white font-bold text-sm">Room {lab.roomNo}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 border border-white/10">
                        <Calculator size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Total Area</div>
                        <div className="text-white font-bold text-sm">{lab.area || "Not Specified"}</div>
                      </div>
                    </div>
                  </div>

                  {lab.manualUrl ? (
                    <Link href={lab.manualUrl} target="_blank">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-[11px] py-8 rounded-2xl shadow-xl transition-all">
                        Download Manual <Download size={18} className="ml-2" />
                      </Button>
                    </Link>
                  ) : (
                    <Button disabled className="w-full bg-white/5 text-white/50 font-black uppercase tracking-widest text-[11px] py-8 rounded-2xl border border-white/10 cursor-not-allowed">
                      Manual Unavailable
                    </Button>
                  )}
                </div>
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
