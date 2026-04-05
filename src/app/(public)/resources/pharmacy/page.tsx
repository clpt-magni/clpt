"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  ShieldCheck, 
  Stethoscope, 
  Pill, 
  UserRoundCheck,
  Building2,
  PhoneCall
} from "lucide-react";

export default function PharmacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Institutional Pharmacy"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Pharmacy" }
        ]}
        description="A professionally managed pharmacy store providing essential medicines and healthcare support to students and faculty, approved by the Drug Control Administration."
      />

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Description and Key Info */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-black text-primary uppercase tracking-tight">Healthcare Support</h2>
                <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed">
                  <p>
                    The institution maintains a well-stocked Pharmacy store which contains essential medicines 
                    in the form of tablets, capsules, and syrups, primarily for common health problems.
                  </p>
                  <p>
                    All dosage forms are dispensed by a **Registered Pharmacist**, ensuring safety and 
                    professional guidance for every student and faculty member.
                  </p>
                </div>
              </div>

              {/* Status Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-none bg-slate-50 overflow-hidden rounded-3xl shadow-sm">
                  <CardContent className="p-8">
                    <ShieldCheck size={40} className="text-primary mb-6" />
                    <h3 className="text-xl font-black text-primary-dark mb-2 uppercase">Approved Facility</h3>
                    <p className="text-sm text-slate-500 font-bold">
                      Approved by the Department of Drug Control Administration, Govt. of Andhra Pradesh.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none bg-primary-dark text-white overflow-hidden rounded-3xl shadow-xl">
                  <CardContent className="p-8">
                    <Clock size={40} className="text-secondary mb-6" />
                    <h3 className="text-xl font-black mb-2 uppercase tracking-tight">Active Hours</h3>
                    <p className="text-3xl font-black text-secondary">09:30 AM — 06:30 PM</p>
                    <p className="text-xs text-white/50 mt-2 font-bold tracking-widest uppercase">Available Weekdays</p>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Services List */}
              <div className="space-y-6 pt-6">
                <h3 className="text-2xl font-black text-primary uppercase">Services & Accessibility</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {[
                     { label: "Emergency First Aid", icon: Stethoscope },
                     { label: "Common Medications", icon: Pill },
                     { label: "Faculty Support", icon: Building2 },
                     { label: "Pharmacist Consultation", icon: UserRoundCheck }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                        <div className="p-2 bg-primary/5 text-primary rounded-lg">
                           <item.icon size={20} />
                        </div>
                        <span className="font-bold text-slate-700">{item.label}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>

            {/* Visual Gallery */}
            <div className="lg:col-span-5 space-y-8">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/images/resources/pharmacy/p1.jpg" 
                  alt="Pharmacy Storefront" 
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img src="/images/resources/pharmacy/p2.jpg" alt="Pharmacy Interior" className="w-full h-auto" />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img src="/images/resources/pharmacy/p3.jpg" alt="Pharmacy Inventory" className="w-full h-auto" />
                </div>
              </div>

              {/* Emergency Contact Note */}
              <div className="bg-secondary/10 p-8 rounded-[2rem] border border-secondary/20 text-center">
                 <PhoneCall size={32} className="mx-auto text-primary-dark mb-4" />
                 <p className="text-sm font-black text-primary-dark uppercase mb-1">Campus Medical Support</p>
                 <p className="text-xs text-slate-500 font-bold">Contact the admin office for emergency assistance outside regular hours.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
