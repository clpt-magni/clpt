import { infrastructureData } from "@/data/infrastructure";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";

export default function InfrastructureOverview() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader
        title="Campus Infrastructure"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Infrastructure" }
        ]}
        description="State-of-the-art laboratories and administrative facilities designed to foster innovation and practical excellence in pharmaceutical education."
      />

      {/* Facilities Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {infrastructureData.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="group relative bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden"
                >
                  {/* Subtle Gradient Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Icon Area */}
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-lg">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-1">
                    {item.description}
                  </p>

                  {/* Action */}
                  <Link href={`/resources/${item.slug}`} className="w-full relative z-10">
                    <Button variant="outline" className="w-full border-slate-200 text-slate-600 font-bold group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 py-6 rounded-xl transition-all">
                      Explore Facility <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Strip */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "ACRES CAMPUS", value: "2.5+" },
              { label: "SPECIALIZED LABS", value: "18+" },
              { label: "RESEARCH AREAS", value: "10+" },
              { label: "STUDENT CAPACITY", value: "1500+" }
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl md:text-4xl font-black text-primary font-poppins">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
