import { Card, CardContent } from "@/components/ui/card";
import { getNews, getEvents } from "@/lib/sanity-actions";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export const revalidate = 60;

export default async function NewsEventsPage() {
  const news = await getNews().catch(() => []);
  const events = await getEvents().catch(() => []);

  return (
    <div className="flex flex-col min-h-screen font-roboto bg-slate-50 pb-24">
      {/* Page Header */}
      <section className="bg-primary-dark py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
            News & <span className="text-secondary">Events</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
            Stay connected with the latest happenings, research breakthroughs, and upcoming campus activities at CLPT.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* News Section */}
          <section id="news" className="space-y-12">
            <div className="relative mb-12">
              <h2 className="text-4xl font-bold text-primary pb-4 inline-block font-poppins">
                Latest News
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-secondary rounded-full" />
              </h2>
            </div>
            
            <div className="space-y-8">
              {news.length > 0 ? (
                news.map((n: any, i: number) => (
                  <Card key={n._id || i} className="border-none shadow-xl bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all group">
                    <CardContent className="p-10">
                       <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/5 px-4 py-2 rounded-full mb-6 inline-block">
                          {n.date ? new Date(n.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Institutional Update'}
                       </span>
                       <h3 className="text-2xl font-bold text-primary-dark font-poppins mb-4 group-hover:text-primary transition-colors leading-tight">
                         {n.title}
                       </h3>
                       <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                         {n.description}
                       </p>
                       <button className="text-primary font-bold flex items-center gap-2 group/btn text-sm uppercase tracking-wider">
                         Read Full Article <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                       </button>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-slate-400 italic text-center py-12">No news updates available at this moment.</p>
              )}
            </div>
          </section>

          {/* Events Section */}
          <section id="events" className="space-y-12">
            <div className="relative mb-12">
              <h2 className="text-4xl font-bold text-primary pb-4 inline-block font-poppins">
                Upcoming Events
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-secondary rounded-full" />
              </h2>
            </div>

            <div className="space-y-8">
              {events.length > 0 ? (
                events.map((e: any, i: number) => {
                  const eventDate = new Date(e.date);
                  const day = eventDate.getDate();
                  const month = eventDate.toLocaleString('default', { month: 'short' }).toUpperCase();
                  const year = eventDate.getFullYear();
                  const time = eventDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

                  return (
                    <div key={e._id || i} className="flex flex-col sm:flex-row bg-white rounded-[40px] shadow-xl overflow-hidden hover:shadow-2xl transition-all border border-slate-100 group min-h-[160px]">
                      <div className="sm:w-40 bg-primary text-white flex flex-col items-center justify-center p-8 group-hover:bg-primary-dark transition-colors font-poppins shrink-0">
                        <span className="text-4xl font-bold mb-1 tracking-tighter">{day}</span>
                        <span className="text-sm font-black uppercase tracking-[0.2em] border-y border-white/20 w-full text-center py-2 my-2">{month}</span>
                        <span className="text-xs font-bold opacity-60 tracking-widest">{year}</span>
                      </div>
                      <div className="flex-1 p-10 flex flex-col justify-center">
                        <h3 className="font-bold text-2xl text-primary-dark mb-4 group-hover:text-primary transition-colors font-poppins leading-tight">
                          {e.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-500 font-bold uppercase tracking-tight">
                           <span className="flex items-center gap-3"><Clock size={18} className="text-primary" /> {time}</span>
                           <span className="flex items-center gap-3"><MapPin size={18} className="text-primary" /> {e.location}</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-slate-400 italic text-center py-12">No upcoming events found.</p>
              )}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
