"use client";

import { useState, useMemo } from "react";
import { Save, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { saveStudentRecordAction } from "./actions";

interface Subject {
  code: string;
  name: string;
  type: string;
  max_internal: number;
  max_external: number;
  credits: number;
  mandatory: boolean;
}

interface Template {
  id: string;
  subjects: Subject[];
}

interface Student {
  student_id: string;
  name: string;
}

interface Record {
  student_id: string;
  marks_data: any;
  status: string;
}

export function MarksGrid({ 
  template, 
  students, 
  initialRecords 
}: { 
  template: Template; 
  students: Student[]; 
  initialRecords: Record[];
}) {
  const [records, setRecords] = useState<Record[]>(initialRecords);
  const [saving, setSaving] = useState<string | null>(null);

  const subjects = template.subjects;

  const handleMarkChange = (studentId: string, subjectCode: string, field: 'internal' | 'external', value: string) => {
    const numValue = value === "" ? "" : parseInt(value);
    
    setRecords(prev => {
      const existing = prev.find(r => r.student_id === studentId);
      const marksData = existing ? { ...existing.marks_data } : {};
      const subjectMarks = marksData[subjectCode] ? { ...marksData[subjectCode] } : { internal: 0, external: 0, total: 0, grade: "" };
      
      subjectMarks[field] = numValue;
      subjectMarks.total = (Number(subjectMarks.internal) || 0) + (Number(subjectMarks.external) || 0);
      
      // Basic Grade Logic (Placeholder)
      const total = subjectMarks.total;
      if (total >= 90) subjectMarks.grade = "O";
      else if (total >= 80) subjectMarks.grade = "A+";
      else if (total >= 70) subjectMarks.grade = "A";
      else if (total >= 60) subjectMarks.grade = "B";
      else if (total >= 50) subjectMarks.grade = "C";
      else subjectMarks.grade = "F";

      marksData[subjectCode] = subjectMarks;

      if (existing) {
        return prev.map(r => r.student_id === studentId ? { ...r, marks_data: marksData } : r);
      } else {
        return [...prev, { student_id: studentId, marks_data: marksData, status: 'Draft' }];
      }
    });
  };

  const onSave = async (studentId: string) => {
    setSaving(studentId);
    const record = records.find(r => r.student_id === studentId);
    if (!record) return;

    const formData = new FormData();
    formData.append("studentId", studentId);
    formData.append("templateId", template.id);
    formData.append("status", record.status as any);
    formData.append("marksData", JSON.stringify(record.marks_data));

    await saveStudentRecordAction(formData);
    setSaving(null);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[1000px]">
        <thead>
          <tr className="bg-slate-100/50 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] border-b">
            <th className="px-8 py-6 sticky left-0 bg-slate-50 z-10 w-64 shadow-[2px_0_5px_rgba(0,0,0,0.05)]">Student</th>
            {subjects.map(s => (
              <th key={s.code} className="px-6 py-6 border-l text-center bg-white">
                <div className="flex flex-col">
                  <span className="text-primary truncate max-w-[120px]" title={s.name}>{s.name}</span>
                  <span className="text-[8px] opacity-60">INT:{s.max_internal} | EXT:{s.max_external}</span>
                </div>
              </th>
            ))}
            <th className="px-8 py-6 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {students.map((student) => {
            const record = records.find(r => r.student_id === student.student_id);
            return (
              <tr key={student.student_id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-8 py-6 sticky left-0 bg-white group-hover:bg-slate-50 z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{student.name}</p>
                    <p className="text-[10px] text-slate-400 font-mono italic">ID: {student.student_id.slice(0,8)}</p>
                  </div>
                </td>
                {subjects.map(s => {
                  const marks = record?.marks_data?.[s.code] || { internal: "", external: "", total: 0, grade: "-" };
                  const isInvalid = (Number(marks.internal) > s.max_internal) || (Number(marks.external) > s.max_external);

                  return (
                    <td key={s.code} className="px-4 py-4 border-l">
                      <div className="flex items-center gap-2 justify-center">
                        <div className="flex flex-col gap-1">
                           <input 
                             type="number"
                             value={marks.internal}
                             onChange={(e) => handleMarkChange(student.student_id, s.code, 'internal', e.target.value)}
                             className={`w-12 p-1 text-xs border rounded text-center font-bold outline-none focus:ring-1 focus:ring-primary ${isInvalid ? 'border-red-500 bg-red-50' : ''}`}
                             placeholder="I"
                           />
                           <input 
                             type="number"
                             value={marks.external}
                             onChange={(e) => handleMarkChange(student.student_id, s.code, 'external', e.target.value)}
                             className={`w-12 p-1 text-xs border rounded text-center font-bold outline-none focus:ring-1 focus:ring-primary ${isInvalid ? 'border-red-500 bg-red-50' : ''}`}
                             placeholder="E"
                           />
                        </div>
                        <div className="flex flex-col items-center">
                           <div className="text-xs font-black text-slate-900">{marks.total}</div>
                           <div className={`text-[10px] font-bold ${marks.grade === 'F' ? 'text-red-500' : 'text-green-600'}`}>{marks.grade}</div>
                        </div>
                      </div>
                    </td>
                  );
                })}
                <td className="px-8 py-6 text-right">
                   <Button 
                     size="sm" 
                     variant={record?.status === 'Finalized' ? 'outline' : 'default'}
                     disabled={saving === student.student_id}
                     onClick={() => onSave(student.student_id)}
                     className="rounded-lg h-9 w-24 font-bold text-[10px] uppercase tracking-wider shadow-sm"
                   >
                     {saving === student.student_id ? "Saving..." : "Save Draft"}
                   </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
