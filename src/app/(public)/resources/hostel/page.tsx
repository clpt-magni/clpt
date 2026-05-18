"use client";

import React from "react";
import ResourceGallery from "@/components/resources/ResourceGallery";
import { PageHeader } from "@/components/ui/PageHeader";
import { 
  Users, 
  Home, 
  ShieldCheck, 
  Utensils, 
  Wind, 
  Lightbulb, 
  ArrowRight,
  Sparkles,
  BedDouble
} from "lucide-react";

const AMENITIES = [
  { label: "Total Capacity", value: "150+ Students", icon: Users },
  { label: "Furnishings", value: "Beds, Fans & Lights", icon: BedDouble },
  { label: "Ventilation", value: "Ample Natural Light", icon: Wind },
  { label: "Dining", value: "4 Meals / Day", icon: Utensils },
  { label: "Security", value: "24/7 Warden", icon: ShieldCheck },
  { label: "Study Comfort", value: "Night Corridor Lights", icon: Lightbulb },
];

export default function HostelPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Institutional Hostels"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Hostels" }
        ]}
        description="A home away from home, providing a safe, intellectual, and spiritual environment for over 150 students with separate wings for boys and girls."
      />

      {/* Living Experience Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Descriptive Content */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full font-black text-xs uppercase tracking-widest border border-primary/10">
                   Resident Life & Comfort
                </div>
                <h2 className="text-4xl font-black text-primary-dark uppercase tracking-tight leading-tight">
                  A Balanced Home <br /> & Study Environment.
                </h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed">
                   <p>
                    Chalapathi Institute of Pharmaceutical Sciences offers separate residential wings for boys and girls, 
                    meticulously designed to support the intellectual, moral, and spiritual growth of our students. 
                   </p>
                   <p>
                    Every room is well-furnished and ventilated, ensuring a comfortable sanctuary for focused study and rest. 
                    Dedicated corridor lighting throughout the night ensures safety and a supportive environment for late-night academic pursuits.
                   </p>
                </div>
              </div>

              {/* Amenities Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                 {AMENITIES.map((amenity, i) => (
                   <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-primary-dark transition-all duration-500">
                      <div className="bg-white p-3 rounded-2xl text-primary group-hover:text-secondary shadow-sm transition-colors mb-4">
                        <amenity.icon size={24} />
                      </div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 group-hover:text-white/50">{amenity.label}</p>
                      <p className="text-xs font-black text-primary-dark group-hover:text-white transition-colors uppercase italic">{amenity.value}</p>
                   </div>
                 ))}
              </div>
            </div>

            {/* Visuals & Dining Focus */}
            <div className="lg:col-span-5 space-y-8">
               <ResourceGallery
                sectionKey="hostel"
                defaultMainImage="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800"
                defaultGalleryImages={[]}
                mainImageAlt="Hostel Facility View"
              />

               {/* Dining & Nutrition Card */}
               <div className="p-10 bg-primary-dark text-white rounded-[3rem] shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-10 text-white/5 pointer-events-none">
                     <Utensils size={120} />
                  </div>
                  <h4 className="text-xl font-black text-secondary uppercase mb-6 flex items-center gap-2">
                     <Sparkles size={20} /> Nutritional Excellence
                  </h4>
                  <p className="text-white/60 font-medium text-sm leading-relaxed mb-8">
                     Our well-furnished dining hall serves nutritious food four times a day, maintaining 
                     the highest standards of hygiene and student wellness.
                  </p>
                  <div className="inline-flex items-center gap-3 py-3 px-6 bg-white/10 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-primary-dark transition-colors">
                     24/7 Warden Assistance <ArrowRight size={16} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</div>
  );
}
