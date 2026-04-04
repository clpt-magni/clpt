"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Save, Loader2, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function CreateTemplatePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [masterSubjects, setMasterSubjects] = useState<any[]>([]);
  const [patternName, setPatternName] = useState("");
  const [regulation, setRegulation] = useState("R23");
  const [branch, setBranch] = useState("B.Pharm");
  const [semester, setSemester] = useState("1-1");
  const [subjects, setSubjects] = useState<any[]>([]);

  useEffect(() => {
    fetchMasterSubjects();
  }, []);

  async function fetchMasterSubjects() {
    const { data } = await supabase.from('subjects').select('*').order('code');
    setMasterSubjects(data || []);
  }

  const addSubjectFromMaster = (subject: any) => {
    if (subjects.find(s => s.code === subject.code)) return alert("Subject already added");
    setSubjects([...subjects, { 
      code: subject.code, 
      name: subject.name, 
      type: subject.type, 
      max_internal: 30, 
      max_external: 70, 
      credits: subject.credits, 
      mandatory: true 
    }]);
  };

  const addSubject = () => {
    setSubjects([...subjects, { code: "", name: "", type: "Theory", max_internal: 30, max_external: 70, credits: 4, mandatory: true }]);
  };

  const removeSubject = (index: number) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const updateSubject = (index: number, field: string, value: any) => {
    const newSubjects = [...subjects];
    (newSubjects[index] as any)[field] = value;
    setSubjects(newSubjects);
  };

  const handleSave = async () => {
    if (!patternName) return alert("Please enter a pattern name");
    setLoading(true);
    
    const { error } = await supabase
      .from('academic_templates')
      .insert({
        pattern_name: patternName,
        regulation,
        branch,
        semester,
        subjects,
        is_active: true
      });

    setLoading(false);
    if (error) {
      alert("Error saving template: " + error.message);
    } else {
      alert("Template created successfully!");
      router.push("/admin/marks");
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 font-poppins">Template Builder</h1>
          <p className="text-slate-500 mt-1">Design academic structures for DAMS.</p>
        </div>
        <Button 
          onClick={handleSave} 
          disabled={loading}
          className="bg-primary hover:bg-primary-dark font-bold px-8 rounded-xl shadow-lg h-12"
        >
          {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Save className="mr-2 h-5 w-5" />}
          Save Template
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-1 border-none shadow-xl bg-white rounded-[32px] overflow-hidden">
          <CardHeader className="bg-slate-50 border-b p-6">
            <CardTitle className="text-sm font-black text-primary uppercase tracking-widest flex items-center gap-2">
              <BookOpen size={16} /> Basic configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-2">
              <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Pattern Name</Label>
              <Input 
                value={patternName}
                onChange={(e) => setPatternName(e.target.value)}
                placeholder="e.g. B.Pharm R23 Sem 1-1" 
                className="h-12 rounded-2xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all px-4 font-bold"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Regulation</Label>
              <select 
                value={regulation}
                onChange={(e) => setRegulation(e.target.value)}
                className="w-full h-12 px-4 border rounded-2xl bg-slate-50/50 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all border-slate-200 font-bold text-slate-700"
              >
                <option value="R23">R23 Regulation</option>
                <option value="R20">R20 Regulation</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Branch</Label>
              <select 
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full h-12 px-4 border rounded-2xl bg-slate-50/50 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all border-slate-200 font-bold text-slate-700"
              >
                <option value="B.Pharm">B.Pharmacy</option>
                <option value="Pharm.D">Pharm.D</option>
                <option value="M.Pharm">M.Pharmacy</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Semester</Label>
              <select 
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full h-12 px-4 border rounded-2xl bg-slate-50/50 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all border-slate-200 font-bold text-slate-700"
              >
                {["1-1", "1-2", "2-1", "2-2", "3-1", "3-2", "4-1", "4-2"].map(s => (
                  <option key={s} value={s}>Semester {s}</option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 border-none shadow-xl bg-white rounded-[32px] overflow-hidden">
          <CardHeader className="bg-slate-50 border-b p-6 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-sm font-black text-primary uppercase tracking-widest">Subjects Allocation</CardTitle>
              <p className="text-[10px] text-slate-400 font-bold mt-1">Select from library or add custom row</p>
            </div>
            <div className="flex gap-2">
              <select 
                onChange={(e) => {
                  const s = masterSubjects.find(sub => sub.id === e.target.value);
                  if (s) addSubjectFromMaster(s);
                  e.target.value = "";
                }}
                className="h-9 px-3 border rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-primary/20 transition-all border-slate-200 bg-white"
                defaultValue=""
              >
                <option value="" disabled>Pick from Library...</option>
                {masterSubjects.map(s => (
                  <option key={s.id} value={s.id}>{s.code} - {s.name}</option>
                ))}
              </select>
              <Button onClick={() => setSubjects([...subjects, { code: "", name: "", type: "Theory", max_internal: 30, max_external: 70, credits: 4, mandatory: true }])} variant="outline" size="sm" className="rounded-xl font-bold border-primary text-primary hover:bg-primary/5">
                <Plus className="mr-2 h-4 w-4" /> Custom Row
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b">
                    <th className="px-6 py-4">Code</th>
                    <th className="px-6 py-4">Subject Name</th>
                    <th className="px-6 py-4 text-center">Int (Max)</th>
                    <th className="px-6 py-4 text-center">Ext (Max)</th>
                    <th className="px-6 py-4 text-center">Cr.</th>
                    <th className="px-6 py-4 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {subjects.map((s, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/30 transition-colors">
                      <td className="px-4 py-4">
                        <Input 
                          value={s.code} 
                          onChange={(e) => updateSubject(idx, 'code', e.target.value.toUpperCase())}
                          placeholder="CS101" 
                          className="h-9 w-24 rounded-lg border-slate-200 bg-transparent font-mono font-bold text-xs"
                        />
                      </td>
                      <td className="px-4 py-4">
                        <Input 
                          value={s.name} 
                          onChange={(e) => updateSubject(idx, 'name', e.target.value)}
                          placeholder="Subject Title" 
                          className="h-9 rounded-lg border-slate-200 bg-transparent font-bold text-xs min-w-[200px]"
                        />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Input 
                          type="number"
                          value={s.max_internal} 
                          onChange={(e) => updateSubject(idx, 'max_internal', parseInt(e.target.value))}
                          className="h-9 w-16 mx-auto rounded-lg border-slate-200 bg-transparent text-center font-bold text-xs"
                        />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Input 
                          type="number"
                          value={s.max_external} 
                          onChange={(e) => updateSubject(idx, 'max_external', parseInt(e.target.value))}
                          className="h-9 w-16 mx-auto rounded-lg border-slate-200 bg-transparent text-center font-bold text-xs"
                        />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Input 
                          type="number"
                          value={s.credits} 
                          onChange={(e) => updateSubject(idx, 'credits', parseInt(e.target.value))}
                          className="h-9 w-16 mx-auto rounded-lg border-slate-200 bg-transparent text-center font-bold text-xs"
                        />
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => removeSubject(idx)}
                          className="text-red-400 hover:text-red-600 transition-colors p-2 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {subjects.length === 0 && (
                <div className="p-12 text-center text-slate-400 italic">
                  No subjects added yet. Click "Add Subject" to begin.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
