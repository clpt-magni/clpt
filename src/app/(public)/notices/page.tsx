import { Card, CardContent } from "@/components/ui/card";
import { getNotices } from "@/lib/sanity-actions";
import { Bell, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

export const revalidate = 60; // Revalidate every minute

export default async function NoticesPage() {
  const notices = await getNotices().catch(() => []);

  return (
    <div className="flex flex-col min-h-screen font-roboto bg-slate-50 pb-24">
      {/* Page Header */}
      <section className="bg-primary-dark py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
              Institutional <span className="text-secondary">Notices</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Stay updated with the latest announcements, examination schedules, and academic notifications from Chalapathi Institute of Pharmaceutical Sciences.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Notices Feed */}
          <div className="lg:col-span-2 space-y-6">
            {notices.length > 0 ? (
              notices.map((notice: any, i: number) => (
                <Card key={notice._id || i} className="border-none shadow-xl bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all group">
                  <div className={`h-2 w-full ${
                    notice.priority === 'High' ? 'bg-red-500' : 
                    notice.priority === 'Medium' ? 'bg-amber-500' : 'bg-blue-500'
                  }`} />
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                      <div className="flex items-center gap-3">
                         <div className={`p-2 rounded-lg ${
                            notice.priority === 'High' ? 'bg-red-50 text-red-600' : 
                            notice.priority === 'Medium' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
                         }`}>
                           <Bell size={20} />
                         </div>
                         <span className={`text-xs font-black uppercase tracking-widest ${
                            notice.priority === 'High' ? 'text-red-500' : 
                            notice.priority === 'Medium' ? 'text-amber-500' : 'text-blue-500'
                         }`}>
                           {notice.priority || 'Normal'} Priority
                         </span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 font-bold text-sm uppercase tracking-tighter">
                         <Calendar size={16} />
                         {notice.date ? new Date(notice.date).toLocaleDateString('en-IN', {
                           day: '2-digit',
                           month: 'long',
                           year: 'numeric'
                         }) : 'Recent'}
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-primary-dark font-poppins mb-4 group-hover:text-primary transition-colors">
                      {notice.title}
                    </h2>
                    
                    <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                      {notice.content}
                    </p>

                    <div className="flex flex-wrap gap-4">
                       <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary transition-all flex items-center gap-2">
                         Download PDF <ChevronRight size={16} />
                       </button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-24 bg-white rounded-[40px] border-2 border-dashed border-slate-200">
                <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bell size={40} className="text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No active notices</h3>
                <p className="text-slate-500">Check back later for new updates.</p>
              </div>
            )}
          </div>

          {/* Sidebar / Filters */}
          <div className="space-y-8">
             <div className="bg-primary text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                <h3 className="text-2xl font-bold mb-6 font-poppins relative z-10">Subscription</h3>
                <p className="text-white/80 mb-8 leading-relaxed relative z-10 italic">
                  Get instant notifications for new academic updates directly in your student portal.
                </p>
                <Link href="/student-dashboard">
                  <button className="w-full bg-white text-primary font-bold py-4 rounded-2xl hover:bg-secondary hover:text-primary-dark transition-all shadow-xl relative z-10">
                    Visit Student Portal
                  </button>
                </Link>
             </div>

             <Card className="border-none shadow-xl bg-white rounded-[40px] p-10">
                <h4 className="text-xl font-bold text-primary-dark font-poppins mb-8 border-b pb-4 border-slate-100 flex items-center gap-3">
                   Categories
                </h4>
                <div className="space-y-4">
                   {['Examination', 'Admissions', 'Academic', 'Research', 'General'].map((cat, i) => (
                     <button key={i} className="flex items-center justify-between w-full px-6 py-4 rounded-2xl hover:bg-slate-50 text-slate-600 hover:text-primary transition-all font-bold group">
                        <span>{cat}</span>
                        <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                     </button>
                   ))}
                </div>
             </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
