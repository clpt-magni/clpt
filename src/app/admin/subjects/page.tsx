"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Save, Loader2, BookOpen, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";

export default function SubjectsPage() {
  const [loading, setLoading] = useState(true);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [newSubject, setNewSubject] = useState({ code: "", name: "", type: "Theory", credits: 4 });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchSubjects();
  }, []);

  async function fetchSubjects() {
    const { data, error } = await supabase.from('subjects').select('*').order('code');
    if (error) alert(error.message);
    else setSubjects(data || []);
    setLoading(false);
  }

  async function handleAddSubject() {
    if (!newSubject.code || !newSubject.name) return alert("Please fill all fields");
    setSaving(true);
    const { error } = await supabase.from('subjects').insert(newSubject);
    setSaving(false);
    if (error) alert(error.message);
    else {
      setNewSubject({ code: "", name: "", type: "Theory", credits: 4 });
      fetchSubjects();
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure? This might affect existing templates.")) return;
    const { error } = await supabase.from('subjects').delete().eq('id', id);
    if (error) alert(error.message);
    else fetchSubjects();
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 font-poppins">Master Subjects</h1>
          <p className="text-slate-500 mt-1">Manage global subject library for the institution.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-1 border-none shadow-xl bg-white rounded-[32px] overflow-hidden">
          <CardHeader className="bg-slate-50 border-b p-6">
            <CardTitle className="text-sm font-black text-primary uppercase tracking-widest flex items-center gap-2">
              <Plus size={16} /> Add New Subject
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-2">
              <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject Code</Label>
              <Input 
                value={newSubject.code}
                onChange={(e) => setNewSubject({...newSubject, code: e.target.value.toUpperCase()})}
                placeholder="e.g. PH101" 
                className="h-12 rounded-2xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all px-4 font-mono font-bold"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject Name</Label>
              <Input 
                value={newSubject.name}
                onChange={(e) => setNewSubject({...newSubject, name: e.target.value})}
                placeholder="e.g. Pharmaceutics" 
                className="h-12 rounded-2xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all px-4 font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Type</Label>
                <select 
                  value={newSubject.type}
                  onChange={(e) => setNewSubject({...newSubject, type: e.target.value})}
                  className="w-full h-12 px-4 border rounded-2xl bg-slate-50/50 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all border-slate-200 font-bold text-slate-700"
                >
                  <option value="Theory">Theory</option>
                  <option value="Practical">Practical</option>
                  <option value="Project">Project</option>
                  <option value="Seminar">Seminar</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Credits</Label>
                <Input 
                  type="number"
                  value={newSubject.credits}
                  onChange={(e) => setNewSubject({...newSubject, credits: parseInt(e.target.value)})}
                  className="h-12 rounded-2xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all px-4 font-bold"
                />
              </div>
            </div>

            <Button 
              onClick={handleAddSubject} 
              disabled={saving}
              className="w-full bg-primary hover:bg-primary-dark font-bold h-12 rounded-2xl shadow-lg mt-4"
            >
              {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Plus className="mr-2 h-4 w-4" />}
              Create Subject
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 border-none shadow-xl bg-white rounded-[32px] overflow-hidden">
          <CardHeader className="bg-slate-50 border-b p-6">
            <CardTitle className="text-sm font-black text-primary uppercase tracking-widest">Library ({subjects.length})</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
             {loading ? (
                <div className="p-12 text-center text-slate-400"><Loader2 className="animate-spin mx-auto h-8 w-8" /></div>
             ) : (
               <div className="overflow-x-auto">
                 <table className="w-full text-left">
                   <thead>
                     <tr className="bg-slate-50/50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b">
                       <th className="px-8 py-4">Code</th>
                       <th className="px-8 py-4">Name</th>
                       <th className="px-8 py-4">Type</th>
                       <th className="px-8 py-4">CR.</th>
                       <th className="px-8 py-4 text-right">Action</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-50">
                     {subjects.map((s) => (
                       <tr key={s.id} className="hover:bg-slate-50/30 transition-colors">
                         <td className="px-8 py-5 font-mono font-bold text-xs text-primary">{s.code}</td>
                         <td className="px-8 py-5 font-bold text-slate-700">{s.name}</td>
                         <td className="px-8 py-5">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                              s.type === 'Theory' ? 'bg-blue-50 text-blue-600' : 
                              s.type === 'Practical' ? 'bg-purple-50 text-purple-600' : 'bg-slate-100 text-slate-600'
                            }`}>
                              {s.type}
                            </span>
                         </td>
                         <td className="px-8 py-5 font-black text-slate-400">{s.credits}</td>
                         <td className="px-8 py-5 text-right">
                           <button 
                             onClick={() => handleDelete(s.id)}
                             className="text-slate-300 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-lg"
                           >
                             <Trash2 size={16} />
                           </button>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
             )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
