import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, GraduationCap, TrendingUp, Plus, ShieldCheck, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Students", value: "1,240", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Active Courses", value: "48", icon: BookOpen, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Faculty Staff", value: "85", icon: GraduationCap, color: "text-orange-600", bg: "bg-orange-50" },
    { label: "Pass Rate", value: "94.2%", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 font-poppins">System Overview</h1>
        <p className="text-slate-500 mt-1">Welcome back. Here is what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-none shadow-xl hover:shadow-2xl transition-all rounded-[32px] overflow-hidden group">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl group-hover:scale-110 transition-transform`}>
                  <stat.icon size={24} />
                </div>
                <div className="text-right">
                   <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                   <div className="text-3xl font-black text-slate-900 font-poppins">{stat.value}</div>
                </div>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                 <div className={`h-full bg-current ${stat.color.replace('text-', 'bg-')} transition-all duration-1000 w-[70%]`} />
              </div>
              <p className="text-[10px] text-slate-400 mt-4 flex items-center gap-1 font-bold italic">
                <TrendingUp size={10} className="text-green-500" /> +2.5% progress this month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-none shadow-xl rounded-[40px] bg-white overflow-hidden">
          <CardHeader className="p-8 border-b border-slate-50 flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-bold font-poppins text-primary-dark">Recent Activity</CardTitle>
            <Button variant="ghost" className="text-xs font-bold text-primary hover:bg-primary/5">View All Logs</Button>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              {[
                { title: "New student enrolled in B.Pharm", time: "2 hours ago", type: "enrollment", icon: Users, bg: "bg-blue-50", color: "text-blue-600" },
                { title: "Semester marks updated for Pharm.D", time: "5 hours ago", type: "academic", icon: GraduationCap, bg: "bg-purple-50", color: "text-purple-600" },
                { title: "System backup completed", time: "10 hours ago", type: "system", icon: ShieldCheck, bg: "bg-green-50", color: "text-green-600" }
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-6 group cursor-pointer hover:translate-x-1 transition-transform">
                  <div className={`h-14 w-14 rounded-[20px] flex-shrink-0 flex items-center justify-center ${activity.bg} ${activity.color}`}>
                    <activity.icon size={24} />
                  </div>
                  <div className="flex-1 pb-6 border-b border-slate-50">
                    <p className="text-md font-bold text-slate-800 mb-1 group-hover:text-primary transition-colors">{activity.title}</p>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter italic">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-xl rounded-[40px] bg-white overflow-hidden">
          <CardHeader className="p-8 border-b border-slate-50">
            <CardTitle className="text-xl font-bold font-poppins text-primary-dark">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="/admin/students" className="flex flex-col items-center justify-center p-10 rounded-[32px] bg-primary/5 border border-primary/5 hover:bg-primary/10 hover:border-primary/20 transition-all group/tile shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
               <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-4 group-hover/tile:scale-110 group-hover/tile:rotate-3 transition-all">
                 <Plus className="h-8 w-8 text-primary" />
               </div>
               <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">Add Student</span>
            </Link>
            <Link href="/admin/marks" className="flex flex-col items-center justify-center p-10 rounded-[32px] bg-secondary/5 border border-secondary/5 hover:bg-secondary/10 hover:border-secondary/20 transition-all group/tile shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
               <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-4 group-hover/tile:scale-110 group-hover/tile:-rotate-3 transition-all">
                 <BarChart3 className="h-8 w-8 text-secondary-dark" />
               </div>
               <span className="text-xs font-black text-secondary-dark uppercase tracking-[0.2em]">Reports</span>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
