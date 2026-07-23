"use client"
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Microscope, Activity, FlaskConical, Stethoscope, Mail } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";

const departments = [
  {
    name: "Pharmaceutics",
    icon: FlaskConical,
    description: "The Department of Pharmaceutics is dedicated to the formulation and evaluation of various dosage forms. It focuses on novel drug delivery systems, nanomedicines, and biopharmaceutics.",
    vision: "To become a leading expert in the field of pharmaceutics with comprehensive knowledge on various emerging areas and to attain competency in skills and to cater the healthcare as well as career prospects.",
    email: "clptceutics@gmail.com"
  },
  {
    name: "Pharmaceutical Analysis",
    icon: FlaskConical,
    description: "This department ensures the quality, safety, and efficacy of drugs through sophisticated analytical techniques like HPLC, GC, and spectroscopy, supporting rigorous quality control standards.",
    vision: "To be a centre of excellence in pharmaceutical analysis, regulatory affairs, and pharmaceutical chemistry while contributing to socio-economic progress, strengthening industry–institute interaction, empowering students in regulatory and drug testing practices, and promoting higher education, research, and innovative problem-based learning.",
    email: "analysisclpt@gmail.com"
  },
  {
    name: "Pharmacology",
    icon: Activity,
    description: "Focuses on understanding the mechanisms of drug action, pre-clinical screening of new chemical entities, and toxicological studies. The department is equipped with state-of-the-art animal handling facilities.",
    vision: "To lead toward effective global healthcare by flourishing advanced research in pharmacology and assimilating true entrepreneurial spirit with care and lenity.",
    email: "clptpharmacology@gmail.com"
  },
  {
    name: "Pharmacy Practice",
    icon: Stethoscope,
    description: "Integrated with hospital settings, this department trains Pharm.D students in clinical pharmacy, patient care, ward rounds, therapeutic drug monitoring, and pharmacovigilance.",
    vision: "To become a centre of excellence for undergraduate and postgraduate studies in pharmaceutical sciences through quality education, research and innovative practices and contribute to the healthcare needs of society.",
    email: "clptpp2020@gmail.com"
  }
];

export default function DepartmentsPage() {
  return (
    <div className="flex flex-col min-h-screen font-roboto bg-slate-50 pb-24">
      <PageHeader
        title="Academic Departments"
        breadcrumbs={[
          { label: "Departments" }
        ]}
        description="Explore the specialized wings that form the core of pharmaceutical research and education at CLPT."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((dept, i) => (
            <Card key={i} className="border-none shadow-xl bg-white rounded-3xl overflow-hidden group hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <CardContent className="p-10 flex flex-col h-full">
                <div className="flex items-center gap-6 mb-8 border-b border-slate-100 pb-8">
                  <div className="bg-slate-50 p-6 rounded-2xl group-hover:bg-primary transition-colors">
                    <dept.icon className="text-primary w-10 h-10 group-hover:text-white transition-colors" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-dark font-poppins">{dept.name}</h2>
                </div>

                <p className="text-slate-600 text-lg leading-relaxed mb-8 flex-1 italic">
                  {dept.description}
                </p>

                <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-100">
                  <h4 className="text-xs font-black tracking-widest text-slate-400 mb-3">Vision</h4>
                  <p className="text-sm font-bold text-slate-700 leading-relaxed group-hover:text-primary transition-colors">
                    "{dept.vision}"
                  </p>
                </div>

                <a 
                  href={`mailto:${dept.email}`}
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "w-full bg-slate-50 text-slate-600 hover:bg-primary/10 hover:text-primary border border-slate-100 gap-3 py-6 rounded-2xl transition-all mb-6 h-auto"
                  )}
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-bold">{dept.email}</span>
                </a>

                <Link href="/faculty">
                  <Button variant="outline" className="w-full border-primary text-primary font-bold py-7 rounded-2xl hover:bg-primary hover:text-white transition-all shadow-md group-hover:scale-[1.02]">
                    View All Department Faculty
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
