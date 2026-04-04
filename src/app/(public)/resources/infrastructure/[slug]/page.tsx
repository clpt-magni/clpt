import { infrastructureData } from "@/data/infrastructure";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, ChevronRight, Info } from "lucide-react";

export default function InfrastructureDetail({ params }: { params: { slug: string } }) {
  const item = infrastructureData.find((d) => d.slug === params.slug);

  if (!item) {
    notFound();
  }

  const Icon = item.icon;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Header Area */}
      <section className="bg-slate-50 pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-primary/2 px-12 md:px-24 flex items-center justify-end -z-0">
          <div className="opacity-10 scale-[2] md:scale-[3] text-primary rotate-12">
            <Icon size={120} strokeWidth={1} />
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            href="/resources/infrastructure" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-8 transition-colors text-xs font-black uppercase tracking-[0.2em]"
          >
            <ArrowLeft size={16} /> Back to Facilities
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
              {item.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed italic">
              {item.description}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Specs Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
            
            {/* Main Content Column */}
            <div className="flex-1 space-y-16">
              <div className="prose prose-slate prose-lg max-w-none">
                <h2 className="text-2xl font-black text-primary-dark uppercase tracking-wide border-b-2 border-primary-light pb-4 mb-8">
                  Overview & Scope
                </h2>
                <p className="text-slate-600 leading-[1.8] text-lg font-medium">
                  {item.longDescription}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-primary-dark uppercase tracking-wide border-b-2 border-primary-light pb-4 mb-8">
                  Core Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 group hover:border-primary/20 transition-all">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                        <CheckCircle2 size={24} />
                      </div>
                      <span className="text-slate-800 font-bold text-sm tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column (Technical Specs) */}
            <div className="w-full lg:w-96 shrink-0">
              <div className="bg-[#020617] rounded-3xl p-8 sticky top-32 shadow-2xl text-white">
                <div className="flex items-center gap-3 mb-8 pb-8 border-b border-white/10">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10">
                    <Info size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-blue-400 uppercase tracking-widest text-[10px]">Technical Specifications</h3>
                    <p className="text-slate-400 text-xs font-medium">Facility Verification Data</p>
                  </div>
                </div>

                <div className="space-y-6 mb-12">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{spec.label}</span>
                      <span className="text-lg font-medium text-white">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-[11px] py-7 rounded-xl shadow-lg transition-all active:scale-95 border-none">
                  Inquiry for Facility
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Browse Other Facilities */}
      <section className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-[0.2em]">Other Facilities</h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructureData
              .filter((d) => d.slug !== params.slug)
              .slice(0, 4)
              .map((other, i) => {
                const OtherIcon = other.icon;
                return (
                  <Link 
                    key={i} 
                    href={`/resources/infrastructure/${other.slug}`}
                    className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 hover:border-primary hover:shadow-xl transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/5 group-hover:text-primary transition-all">
                      <OtherIcon size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[13px] text-slate-800 uppercase tracking-tight">{other.title}</h4>
                      <div className="flex items-center gap-1 text-slate-400 text-[10px] uppercase tracking-widest mt-0.5 group-hover:text-primary transition-colors">
                        View Details <ChevronRight size={12} />
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
