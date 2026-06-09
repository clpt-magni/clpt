"use client";

import { useState, useEffect } from "react";
import { getActiveTemplate, getStudentRecordsForTemplate, getStudents } from "@/lib/supabase-actions";
import { MarksGrid } from "./marks-grid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Loader2, Sparkles } from "lucide-react";

export function MarksEntryDashboard() {
  const [regulation, setRegulation] = useState("R23");
  const [branch, setBranch] = useState("B.Pharm");
  const [semester, setSemester] = useState("1-1");
  const [template, setTemplate] = useState<any>(null);
  const [students, setStudents] = useState<any[]>([]);
  const [records, setRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      setError(null);
      try {
        const [tpl, allStudents] = await Promise.all([
          getActiveTemplate(regulation, branch, semester),
          getStudents()
        ]);

        if (!tpl) {
          setError(`No active template found for ${regulation} | ${branch} | Semester ${semester}`);
          setTemplate(null);
        } else {
          setTemplate(tpl);
          const recs = await getStudentRecordsForTemplate(tpl.id);
          setRecords(recs);
        }

        // Filter students by regulation and branch if needed (Optional depending on business rules)
        setStudents(allStudents);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [regulation, branch, semester]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-1 space-y-6">
        <Card className="border-none shadow-xl bg-white rounded-[32px] overflow-hidden">
          <CardHeader className="bg-slate-50 border-b p-6">
            <CardTitle className="text-sm font-black text-primary uppercase tracking-widest flex items-center gap-2">
              <Sparkles size={16} /> Context Selection
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Regulation</label>
              <select 
                value={regulation}
                onChange={(e) => setRegulation(e.target.value)}
                className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              >
                <option value="R23">R23 Regulation</option>
                <option value="R20">R20 Regulation</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Branch / Program</label>
              <select 
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              >
                <option value="B.Pharm">B.Pharmacy</option>
                <option value="Pharm.D">Pharm.D</option>
                <option value="M.Pharm">M.Pharmacy</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Selected Semester</label>
              <select 
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              >
                {["1-1", "1-2", "2-1", "2-2", "3-1", "3-2", "4-1", "4-2"].map(s => (
                  <option key={s} value={s}>Semester {s}</option>
                ))}
              </select>
            </div>

            {template && (
              <div className="pt-4 border-t border-slate-50">
                 <p className="text-[10px] font-bold text-primary italic">Active Template: {template.pattern_name}</p>
                 <p className="text-[10px] text-slate-400 mt-1">{template.subjects.length} Subjects defined</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="p-6 bg-amber-50 rounded-[32px] border border-amber-100">
          <div className="flex items-start gap-3 text-amber-600">
            <AlertCircle size={20} className="mt-1" />
            <div className="text-xs font-bold leading-relaxed">
              Academic structures (subjects/max marks) are decoupled from records. Updating a template will reflect across all students for that semester.
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-3">
        {loading ? (
          <div className="h-64 flex flex-col items-center justify-center bg-white rounded-[40px] shadow-xl animate-pulse">
            <Loader2 className="h-8 w-8 text-primary animate-spin mb-4" />
            <p className="text-slate-400 font-bold text-sm tracking-widest">Resolving Template...</p>
          </div>
        ) : error ? (
          <div className="p-12 bg-white rounded-[40px] shadow-xl text-center border-2 border-dashed border-slate-100">
             <div className="h-16 w-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle size={32} />
             </div>
             <h3 className="text-xl font-black text-slate-800 mb-2 font-poppins italic">Setup Required</h3>
             <p className="text-slate-500 text-sm max-w-md mx-auto mb-8 font-medium">{error}</p>
             <div className="flex justify-center gap-4">
               <button 
                 onClick={() => window.location.href = "/admin/marks/templates/new"}
                 className="px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 active:scale-95 transition-all text-xs"
               >
                 Create Template
               </button>
               <button className="px-6 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl active:scale-95 transition-all text-xs">Knowledge Base</button>
             </div>
          </div>
        ) : template && (
          <Card className="border-none shadow-xl bg-white rounded-[40px] overflow-hidden">
             <CardHeader className="bg-slate-50 border-b px-8 py-6 flex flex-row items-center justify-between">
                <div>
                   <CardTitle className="text-lg font-bold text-primary-dark font-poppins">Score Entry Sheet</CardTitle>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
                     Regulation {regulation} | {branch} | Batch {semester}
                   </p>
                </div>
                <div className="flex items-center gap-2">
                   <div className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-black rounded-full tracking-widest uppercase">Live Connection</div>
                </div>
             </CardHeader>
             <CardContent className="p-0">
                <MarksGrid 
                  template={template}
                  students={students}
                  initialRecords={records}
                />
             </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
