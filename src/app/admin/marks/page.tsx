import { MarksEntryDashboard } from "./dashboard";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MarksEntryPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 font-poppins">Academic Records (DAMS)</h1>
          <p className="text-slate-500 mt-1">Template-driven marks management system.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="px-6 rounded-xl font-bold">Drafts</Button>
          <Button className="bg-primary hover:bg-primary-dark font-bold px-6 rounded-xl shadow-lg">
            <Save className="mr-2 h-5 w-5" /> Finalize Results
          </Button>
        </div>
      </div>

      <MarksEntryDashboard />
    </div>
  );
}
