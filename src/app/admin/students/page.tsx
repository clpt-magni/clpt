import { getStudents } from "@/lib/supabase-actions";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, MoreVertical, Edit2, Trash2 } from "lucide-react";
import { EnrollStudentDialog } from "./enroll-dialog";

export default async function StudentsPage() {
  const students = await getStudents();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 font-poppins">Student Repository</h1>
          <p className="text-slate-500 mt-1">Manage all academic records and profiles from here.</p>
        </div>
        <EnrollStudentDialog />
      </div>

      <Card className="border-none shadow-xl bg-white overflow-hidden">
        <CardHeader className="border-b bg-slate-50/50 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name, ID or year..." 
              className="w-full pl-10 pr-4 py-2 bg-white border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="text-slate-600">
              <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
            <Button variant="outline" size="sm" className="text-slate-600">
              Export PDF
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b text-slate-500 text-xs font-bold uppercase tracking-wider">
                  <th className="px-6 py-4">Student Name</th>
                  <th className="px-6 py-4">Enrollment Year</th>
                  <th className="px-6 py-4">Clerk ID</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {students.map((student) => (
                  <tr key={student.student_id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-800">{student.name}</td>
                    <td className="px-6 py-4 text-slate-600">{student.enrollment_year}</td>
                    <td className="px-6 py-4 font-mono text-xs text-slate-400">{student.clerk_user_id}</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600 hover:bg-blue-50">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:bg-red-50">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
                {students.length === 0 && (
                   <tr>
                     <td colSpan={5} className="px-6 py-20 text-center text-slate-500 italic">
                       No students found. Please enroll your first student.
                     </td>
                   </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
