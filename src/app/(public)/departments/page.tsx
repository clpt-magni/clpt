import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Microscope, Activity, FlaskConical, Stethoscope } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";

const departments = [
  {
    name: "Pharmaceutics",
    icon: FlaskConical,
    description: "The Department of Pharmaceutics is dedicated to the formulation and evaluation of various dosage forms. It focuses on novel drug delivery systems, nanomedicines, and biopharmaceutics.",
    vision: "To be a center of excellence in Pharmaceutics education and research, producing globally competent professionals."
  },
  {
    name: "Pharmaceutical Analysis",
    icon: FlaskConical,
    description: "This department ensures the quality, safety, and efficacy of drugs through sophisticated analytical techniques like HPLC, GC, and spectroscopy, supporting rigorous quality control standards.",
    vision: "To produce skilled analytical professionals for pharmaceutical industry and research."
  },
  {
    name: "Pharmacology",
    icon: Activity,
    description: "Focuses on understanding the mechanisms of drug action, pre-clinical screening of new chemical entities, and toxicological studies. The department is equipped with state-of-the-art animal handling facilities.",
    vision: "To impart quality education and promote ethical research in the field of Pharmacology and Toxicology."
  },
  {
    name: "Pharmacy Practice",
    icon: Stethoscope,
    description: "Integrated with hospital settings, this department trains Pharm.D students in clinical pharmacy, patient care, ward rounds, therapeutic drug monitoring, and pharmacovigilance.",
    vision: "To lead in patient-centered pharmaceutical care and clinical research."
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

      <div className="container mx-auto px-4 py-16">
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
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Vision</h4>
                  <p className="text-sm font-bold text-slate-700 leading-relaxed group-hover:text-primary transition-colors">
                    "{dept.vision}"
                  </p>
                </div>

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
