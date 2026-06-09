import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { currentUser } from "@clerk/nextjs/server";
import { getStudentProfile, getStudentMarks } from "@/lib/supabase-actions";

const demoMarks = [
  { subject: "Pharmaceutics I", marks: 85, grade: "A", semester: 1 },
  { subject: "Pharmaceutical Inorganic Chemistry", marks: 78, grade: "B+", semester: 1 },
  { subject: "Human Anatomy and Physiology", marks: 92, grade: "A+", semester: 1 },
  { subject: "Communication Skills", marks: 88, grade: "A", semester: 1 },
];

export default async function MarksPage() {
  const user = await currentUser();
  const profile = user ? await getStudentProfile(user.id) : null;
  const dbMarks = profile ? await getStudentMarks(profile.student_id) : [];
  
  const displayMarks = dbMarks.length > 0 
    ? dbMarks.map((m: any) => ({
        subject: m.subjects.name,
        marks: m.score,
        grade: m.score >= 90 ? 'A+' : m.score >= 80 ? 'A' : 'B',
        semester: m.semester
      }))
    : demoMarks;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Academic Records</h1>
        <p className="text-slate-500">Detailed breakdown of your semester performance.</p>
      </div>

      <Card className="shadow-sm border-slate-200">
        <CardHeader>
          <CardTitle>Semester 1 - Results</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Subject</TableHead>
                <TableHead>Marks obtained</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead className="text-right">Semester</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayMarks.map((m: any) => (
                <TableRow key={m.subject}>
                  <TableCell className="font-medium text-slate-900">{m.subject}</TableCell>
                  <TableCell>{m.marks} / 100</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-primary border border-primary/10">
                      {m.grade}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">{m.semester}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary rounded-lg text-white font-bold text-xl">
            A
          </div>
          <div>
            <p className="text-sm font-medium text-primary">Academic Standing</p>
            <p className="text-slate-600 text-sm">You are in the top 10% of your class. Keep it up!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
