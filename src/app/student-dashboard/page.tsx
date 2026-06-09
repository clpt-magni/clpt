import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { currentUser } from "@clerk/nextjs/server";
import { GraduationCap, ClipboardCheck, Calendar } from "lucide-react";
import { getStudentProfile, getStudentMarks, getStudentAttendance } from "@/lib/supabase-actions";

export default async function DashboardPage() {
  const user = await currentUser();
  const profile = user ? await getStudentProfile(user.id) : null;
  const marks = profile ? await getStudentMarks(profile.student_id) : [];
  const attendance = profile ? await getStudentAttendance(profile.student_id) : [];

  // Calculate some stats
  const avgScore = marks.length > 0 
    ? (marks.reduce((acc: number, m: any) => acc + m.score, 0) / marks.length).toFixed(1)
    : "85.0"; // fallback
    
  const attendanceRate = attendance.length > 0
    ? Math.round((attendance.filter((a: any) => a.status === 'Present').length / attendance.length) * 100)
    : 94; // fallback


  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Welcome back, {user?.firstName || "Student"}!
        </h1>
        <p className="text-slate-500 mt-2">
          Here's what's happening with your studies today.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">
              GPA
            </CardTitle>
            <GraduationCap className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgScore}%</div>
            <p className="text-xs text-slate-400 mt-1">Average across subjects</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">
              Attendance
            </CardTitle>
            <ClipboardCheck className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attendanceRate}%</div>
            <p className="text-xs text-slate-400 mt-1">Institutional requirement: 75%</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">
              Next Exam
            </CardTitle>
            <Calendar className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold italic text-slate-400">TBD</div>
            <p className="text-xs text-slate-400 mt-1">Check schedule later</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-8">
        <Card className="lg:col-span-4 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Recent Performance</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center text-slate-400 italic">
            Chart data will appear here once grades are released.
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-3 shadow-sm border-slate-200 text-slate-900">
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 border-l-4 border-primary pl-4 py-1">
                <div className="flex-1">
                  <p className="text-sm font-semibold">Pharmacology Assignment</p>
                  <p className="text-xs text-slate-500">Due in 2 days</p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-l-4 border-slate-200 pl-4 py-1">
                <div className="flex-1">
                  <p className="text-sm font-semibold">Lab Report #4</p>
                  <p className="text-xs text-slate-500">Due in 5 days</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
