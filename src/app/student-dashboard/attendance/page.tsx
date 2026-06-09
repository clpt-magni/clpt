import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const attendanceData = [
  { month: "Jan", percentage: 98 },
  { month: "Feb", percentage: 92 },
  { month: "Mar", percentage: 95 },
  { month: "Apr", percentage: 89 },
];

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Attendance Tracking</h1>
        <p className="text-slate-500">Keep track of your presence across different modules.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {attendanceData.map((data) => (
          <Card key={data.month} className="shadow-sm border-slate-200">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm font-bold text-slate-500 uppercase tracking-wider">{data.month}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-3xl font-bold text-primary">{data.percentage}%</div>
              <div className="mt-2 w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-primary h-full rounded-full transition-all duration-1000" 
                  style={{ width: `${data.percentage}%` }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden">
        <CardHeader>
          <CardTitle>Detailed Log</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center text-slate-400 italic">
          Daily attendance log will be loaded from the secure faculty portal.
        </CardContent>
      </Card>
    </div>
  );
}
