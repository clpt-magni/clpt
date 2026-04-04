import { getAcademicCalendars } from "@/lib/sanity-actions";
import { Calendar, Download, Filter, GraduationCap, Clock, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function AcademicCalendarPage() {
  const calendars = await getAcademicCalendars();

  return (
    <div className="min-h-screen bg-slate-50 pb-20 font-roboto">
      {/* Hero Section */}
      <div className="bg-primary-dark pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-6 border border-primary/20">
            <Calendar size={14} /> Institutional Schedule
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight font-poppins">
            Academic Calendar 2025-26
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Plan your academic journey with precision. View assignment deadlines, sessional exams, and institutional holidays.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        {calendars.length === 0 ? (
          <div className="bg-white rounded-[40px] shadow-2xl p-20 text-center border border-slate-100">
            <Calendar className="w-20 h-20 text-slate-200 mx-auto mb-6" />
            <h3 className="text-2xl font-black text-slate-300 uppercase tracking-widest">Calendar Pending</h3>
            <p className="text-slate-400 mt-2 font-medium">Academic schedules for 2025-26 are currently being finalized.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {calendars.map((cal: any) => (
              <div key={cal._id} className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
                {/* Calendar Header */}
                <div className="bg-slate-900 p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/5">
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                      <div className="p-3 bg-primary rounded-2xl shadow-lg shadow-primary/20">
                        <GraduationCap className="text-white" size={24} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">
                        {cal.program?.toUpperCase()}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black font-poppins tracking-tight mb-2">
                      {cal.semester}
                    </h2>
                    <p className="text-white/50 font-bold uppercase tracking-widest text-[10px]">
                      Academic Year: {cal.academicYear}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-primary hover:bg-primary/90 text-white font-black py-6 px-8 rounded-2xl shadow-xl transition-all gap-3 uppercase tracking-widest text-xs">
                      <Download size={16} /> PDF Version
                    </Button>
                  </div>
                </div>

                {/* Events Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 w-24 text-center">S.No</th>
                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Event Description</th>
                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Scheduled Date(s)</th>
                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cal.events?.map((event: any, i: number) => (
                        <tr key={i} className="group border-b border-slate-50 last:border-none hover:bg-slate-50/50 transition-colors">
                          <td className="px-8 py-6 text-center font-black text-slate-300 group-hover:text-primary transition-colors">
                            {String(i + 1).padStart(2, '0')}
                          </td>
                          <td className="px-8 py-6">
                            <p className="text-slate-900 font-bold text-lg leading-snug">{event.description}</p>
                          </td>
                          <td className="px-8 py-6">
                            <div className="flex items-center gap-3 text-slate-600 font-bold">
                              <Clock size={16} className="text-primary" />
                              {event.dateDisplay}
                            </div>
                          </td>
                          <td className="px-8 py-6 text-right">
                            <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest 
                              ${event.eventType === 'examination' ? 'bg-red-100 text-red-600' : 
                                event.eventType === 'holiday' ? 'bg-yellow-100 text-yellow-600' : 
                                event.eventType === 'vacation' ? 'bg-green-100 text-green-600' : 
                                'bg-slate-100 text-slate-600'}`}>
                              {event.eventType || 'Academic'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Footer / Notes */}
                <div className="p-8 bg-slate-50 rounded-b-[40px] flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-100">
                  <div className="flex items-center gap-4 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                    <Award size={16} className="text-primary" />
                    Official Academic Record of CLPT
                  </div>
                  <p className="text-slate-400 text-[10px] font-bold">
                    Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
