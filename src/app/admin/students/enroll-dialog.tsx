"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Loader2, AlertCircle } from "lucide-react";
import { enrollStudentAction } from "./actions";

export function EnrollStudentDialog() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await enrollStudentAction(formData);

    setLoading(false);
    if (result.success) {
      alert("Student enrolled and login credentials created.");
      setOpen(false);
    } else {
      setError(result.error || "Failed to enroll student.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <span className="bg-primary hover:bg-primary-dark font-bold px-6 py-4 rounded-xl shadow-lg text-white flex items-center gap-2 cursor-pointer transition-all active:scale-95 leading-none">
          <Plus size={20} /> Enroll New Student
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Enroll New Student</DialogTitle>
            <DialogDescription>
              Enter student details. A Clerk account will be created automatically with the ID as username.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-5 py-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-xs font-bold border border-red-100 italic flex items-center gap-2">
                <AlertCircle className="h-4 w-4" /> {error}
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" className="h-12 rounded-2xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all px-4" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="enrollmentId" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Student Register ID</Label>
              <Input 
                id="enrollmentId" 
                name="enrollmentId" 
                placeholder="17JR1A0460" 
                className="h-12 rounded-2xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all px-4 font-mono font-bold uppercase" 
                onChange={(e) => e.target.value = e.target.value.toUpperCase()}
                required 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="regulation" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Regulation</Label>
                <select id="regulation" name="regulation" className="w-full h-12 px-4 border rounded-2xl bg-slate-50/50 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all border-slate-200 font-bold text-slate-700">
                  <option value="R23">R23 Regulation</option>
                  <option value="R20">R20 Regulation</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="enrollmentYear" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Admin Year</Label>
                <Input id="enrollmentYear" name="enrollmentYear" type="number" defaultValue={new Date().getFullYear()} className="h-12 rounded-2xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all px-4 font-bold" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="branch" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Select Branch</Label>
              <select id="branch" name="branch" className="w-full h-12 px-4 border rounded-2xl bg-slate-50/50 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all border-slate-200 font-bold text-slate-700">
                <option value="B.Pharm">B.Pharmacy</option>
                <option value="Pharm.D">Pharm.D</option>
                <option value="M.Pharm">M.Pharmacy</option>
              </select>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-2">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Default Access:</span>
              <span className="text-[10px] bg-blue-50 text-primary px-3 py-1 rounded-full font-black">Welcome@123</span>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Complete Enrollment"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
