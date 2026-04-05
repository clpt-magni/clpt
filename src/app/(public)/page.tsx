import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, BookOpen, Microscope, Users, GraduationCap, Calendar, Laptop, Download, Briefcase, Clock, MapPin } from "lucide-react";
import { getNotices, getNews, getEvents } from "@/lib/sanity-actions";

import HeroVideo from "@/components/home/HeroVideo";

export default async function Home() {
  const notices = await getNotices().catch(() => []);
  const news = await getNews().catch(() => []);
  const events = await getEvents().catch(() => []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroVideo />

      {/* Quick Links Strip */}
      <div className="container mx-auto px-4 relative z-20 -translate-y-[60px]">
        <div className="grid grid-cols-2 md:grid-cols-5 bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100">
          {[
            { icon: Users, label: "Admissions", href: "/admissions" },
            { icon: Calendar, label: "Academic Calendar", href: "https://teamup.com/ks6153fe8c4bedca6a" },
            { icon: Laptop, label: "Examination Portal", href: "https://clptexamination.weebly.com/" },
            { icon: Download, label: "Downloads", href: "#" },
            { icon: GraduationCap, label: "Student Portal", href: "/student-dashboard" }
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group relative p-8 flex flex-col items-center text-center gap-4 border-r last:border-r-0 hover:bg-primary transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark to-primary-light opacity-0 group-hover:opacity-100 transition-opacity z-0" />
              <item.icon className="w-10 h-10 text-primary group-hover:text-white transition-all transform group-hover:-translate-y-1 z-10" />
              <span className="font-bold text-sm uppercase tracking-wider text-slate-800 group-hover:text-white transition-all transform group-hover:-translate-y-1 z-10 font-poppins">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Programs Section   <Link href={p.href}> */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl font-bold pb-4 inline-block text-primary font-poppins">
              Our Programs
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-secondary rounded-full" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-roboto">
            {[
              { title: "B. Pharmacy", desc: "4 Year Undergraduate Program focusing on comprehensive pharmaceutical sciences.", href: "/programs/b-pharmacy" },
              { title: "M. Pharmacy", desc: "2 Year Post Graduate Program with multiple specialized branches.", href: "/programs/m-pharmacy" },
              { title: "Pharm.D", desc: "6 Year Doctoral Program focusing on clinical pharmacy and patient care.", href: "/programs/pharm-d" },
              { title: "Ph.D Program", desc: "Advanced research opportunities in various pharmaceutical disciplines.", href: "/programs/phd" }
            ].map((p, i) => (
              <Card key={i} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-slate-100 bg-slate-50 flex flex-col h-full overflow-hidden">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl text-primary-dark group-hover:text-primary transition-colors font-poppins">
                    <Link href={p.href}>{p.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8 flex-1 flex flex-col justify-between">
                  <p className="text-slate-600 mb-8 leading-relaxed italic">
                    {p.desc}
                  </p>
                  <Link href="/programs">
                    <Button variant="outline" className="w-full border-primary text-primary font-bold hover:bg-primary hover:text-white rounded-lg py-6 group-hover:shadow-md transition-all font-poppins">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-24 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* News Area */}
            <div className="space-y-8 font-roboto">
              <div className="relative mb-12">
                <h2 className="text-4xl font-bold text-primary pb-4 inline-block font-poppins">
                  Latest News
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-secondary rounded-full" />
                </h2>
              </div>

              <div className="space-y-6">
                {news.length > 0 ? (
                  news.slice(0, 3).map((n: any, i: number) => (
                    <Card key={n._id || i} className="hover:shadow-lg transition-all border-none bg-white p-2">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-xl mb-2 text-primary-dark font-poppins">{n.title}</h3>
                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-4">
                          {n.date ? new Date(n.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Latest'}
                        </p>
                        <p className="text-slate-600 mb-6 leading-relaxed line-clamp-2">{n.description}</p>
                        <Link href="/news" className="text-primary font-bold flex items-center gap-2 group text-sm self-start">
                          Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))
                ) : null}
                {news.length === 0 && (
                  <p className="text-slate-400 italic">No recent news updates.</p>
                )}
              </div>
              <Link href="/news">
                <Button variant="outline" className="mt-8 border-primary text-primary font-bold px-8 py-6 rounded-lg hover:bg-primary hover:text-white transition-all shadow-sm font-poppins">
                  View All News
                </Button>
              </Link>
            </div>

            {/* Events Area */}
            <div className="space-y-8 font-roboto">
              <div className="relative mb-12">
                <h2 className="text-4xl font-bold text-primary pb-4 inline-block font-poppins">
                  Upcoming Events
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-secondary rounded-full" />
                </h2>
              </div>

              <div className="space-y-6">
                {events.length > 0 ? (
                  events.slice(0, 3).map((e: any, i: number) => {
                    const eventDate = new Date(e.date);
                    const day = eventDate.getDate();
                    const month = eventDate.toLocaleString('default', { month: 'short' }).toUpperCase();
                    const year = eventDate.getFullYear();
                    const time = eventDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

                    return (
                      <div key={e._id || i} className="flex bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all h-36 border border-slate-100 group">
                        <div className="w-32 bg-primary text-white flex flex-col items-center justify-center p-6 group-hover:bg-primary-dark transition-colors font-poppins">
                          <span className="text-3xl font-bold leading-none mb-1">{day}</span>
                          <span className="text-sm font-bold uppercase tracking-widest border-y border-white/20 w-full text-center py-1.5 my-1.5">{month}</span>
                          <span className="text-xs opacity-75">{year}</span>
                        </div>
                        <div className="flex-1 p-8 flex flex-col justify-center">
                          <h3 className="font-bold text-xl text-primary-dark mb-3 group-hover:text-primary transition-colors font-poppins truncate pr-4">{e.title}</h3>
                          <div className="flex flex-col gap-2 text-sm text-slate-500 italic">
                            <span className="flex items-center gap-2"><Clock size={14} className="text-primary" /> {time}</span>
                            <span className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> {e.location}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-slate-400 italic">No upcoming events scheduled.</p>
                )}
              </div>
              <Link href="/news#events">
                <Button variant="outline" className="mt-8 border-primary text-primary font-bold px-8 py-6 rounded-lg hover:bg-primary hover:text-white transition-all shadow-sm font-poppins">
                  View All Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker from Sanity */}
      <section className="bg-primary py-6 overflow-hidden border-y border-white/10">
        <div className="flex items-center overflow-hidden">
          <div className="animate-scroll flex whitespace-nowrap gap-12 px-12">
            {notices.length > 0 ? (
              notices.concat(notices, notices).map((notice: any, i: number) => (
                <span key={`${notice._id}-${i}`} className="text-white font-bold tracking-tight flex items-center gap-4 font-poppins">
                  <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(244,180,0,0.8)]" />
                  {notice.title.toUpperCase()}
                </span>
              ))
            ) : (
              [
                "FALL 2026 ADMISSIONS ARE NOW OPEN!",
                "JOIN US FOR THE ANNUAL PHARMACY SYMPOSIUM.",
                "NEW RESEARCH LAB INAUGURATED YESTERDAY.",
                "100% PLACEMENT RECORD FOR B.PHARM BATCH 2024"
              ].map((text, i) => (
                <span key={i} className="text-white font-bold tracking-tight flex items-center gap-4 font-poppins">
                  <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(244,180,0,0.8)]" />
                  {text}
                </span>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Placements & Research */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-roboto">
            <div className="bg-primary-dark text-white p-14 rounded-3xl text-center flex flex-col items-center group transition-all hover:bg-slate-900 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
              <div className="w-20 h-20 bg-secondary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner rotate-3 group-hover:rotate-0">
                <Briefcase size={40} className="text-secondary" />
              </div>
              <h2 className="text-3xl font-bold mb-6 !text-white tracking-tight font-poppins">Exceptional Placement Record</h2>
              <p className="mb-10 text-slate-300 max-w-sm leading-relaxed text-lg">Our students are consistently placed in top global pharmaceutical companies, healthcare institutions, and research organizations.</p>
              <Link href="/placements">
                <Button className="bg-secondary hover:bg-secondary-light text-primary-dark font-bold px-10 py-7 text-lg rounded-xl shadow-xl transition-all transform hover:-translate-y-1 font-poppins border-none">
                  View Placement Reports
                </Button>
              </Link>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-14 rounded-3xl text-center flex flex-col items-center group transition-all hover:border-primary shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner -rotate-3 group-hover:rotate-0">
                <Microscope size={40} className="text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-primary-dark tracking-tight font-poppins">Advanced Research Hub</h2>
              <p className="mb-10 text-slate-500 max-w-sm leading-relaxed text-lg">CLPT hosts state-of-the-art laboratories and dedicated research wings focusing on drug discovery, formulation, and clinical sciences.</p>
              <Link href="/research">
                <Button variant="outline" className="border-primary text-primary font-bold px-10 py-7 text-lg rounded-xl hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-md font-poppins">
                  Explore Research Areas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
