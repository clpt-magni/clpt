import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { getStudentProfile } from "@/lib/supabase-actions";

export default async function ProfilePage() {
  const user = await currentUser();
  const profile = user ? await getStudentProfile(user.id) : null;


  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Student Profile</h1>
        <p className="text-slate-500">Manage your personal information and institutional records.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 shadow-sm border-slate-200">
          <CardContent className="pt-6 text-center">
            <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-white shadow-md">
              <User className="w-12 h-12 text-slate-400" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">{user?.fullName}</h2>
            <p className="text-slate-500 text-sm">Institutional ID: {profile?.student_id.slice(0, 8) || "PH-2026-X"}</p>
            <div className="mt-4 pt-4 border-t border-slate-100 text-sm font-medium text-emerald-600">
              {profile ? "Verified Student" : "Pending Verification"}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg">Institutional Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-50">
              <div className="space-y-1">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Department</p>
                <p className="text-sm font-medium text-slate-900">B.Pharm (Bachelor of Pharmacy)</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Enrollment Year</p>
                <p className="text-sm font-medium text-slate-900">{profile?.enrollment_year || "2026"}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-50">
              <div className="space-y-1">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email Address</p>
                <p className="text-sm font-medium text-slate-900">{user?.emailAddresses[0].emailAddress}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Semester</p>
                <p className="text-sm font-medium text-slate-900">1st Semester</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Admission Status</p>
              <p className="text-sm font-medium text-slate-900">Verified & Confirmed</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
