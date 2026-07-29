import { Card, CardContent } from "@/components/ui/card";
import { getNoticesByCategory } from "@/lib/sanity-actions";
import { Bell, Calendar, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

const VALID_CATEGORIES = ['examination', 'admissions', 'academic', 'research', 'general'];

function renderContentWithLinks(content: string) {
  if (!content) return null;
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = content.split(urlRegex);
  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
          {part}
        </a>
      );
    }
    return part;
  });
}

export default async function CategoryNoticesPage({ params }: PageProps) {
  const { category } = await params;

  if (!VALID_CATEGORIES.includes(category.toLowerCase())) {
    notFound();
  }

  const notices = await getNoticesByCategory(category.toLowerCase()).catch(() => []);

  const displayCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const activeNotices: any[] = [];
  const previousNotices: any[] = [];

  notices.forEach((notice: any) => {
    if (!notice.date) {
      activeNotices.push(notice);
      return;
    }
    const noticeDate = new Date(notice.date);
    noticeDate.setHours(0, 0, 0, 0);
    if (noticeDate < today) {
      previousNotices.push(notice);
    } else {
      activeNotices.push(notice);
    }
  });

  // Sort active notices: priority (High first), then upcoming first (ascending date)
  const getPriorityScore = (p: string) => {
    switch (p) {
      case 'High': return 4;
      case 'Medium': return 3;
      case 'Low': return 2;
      case 'Normal':
      default: return 1;
    }
  };

  activeNotices.sort((a, b) => {
    const scoreA = getPriorityScore(a.priority);
    const scoreB = getPriorityScore(b.priority);
    if (scoreA !== scoreB) {
      return scoreB - scoreA;
    }
    const timeA = a.date ? new Date(a.date).getTime() : today.getTime();
    const timeB = b.date ? new Date(b.date).getTime() : today.getTime();
    return timeA - timeB;
  });

  // Sort previous notices by date descending (latest first)
  previousNotices.sort((a, b) => {
    const timeA = a.date ? new Date(a.date).getTime() : 0;
    const timeB = b.date ? new Date(b.date).getTime() : 0;
    return timeB - timeA;
  });

  const renderNoticeCard = (notice: any, i: number, isCompact = false) => (
    <Card key={notice._id || i} className={`border-none ${isCompact ? 'shadow-lg hover:shadow-xl' : 'shadow-xl hover:shadow-2xl'} bg-white rounded-3xl overflow-hidden transition-all group`}>
      <div className={`h-2 w-full ${
        notice.priority === 'High' ? 'bg-red-500' :
        notice.priority === 'Medium' ? 'bg-amber-500' :
        notice.priority === 'Low' ? 'bg-slate-400' :
        'bg-blue-500'
      }`} />
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${
              notice.priority === 'High' ? 'bg-red-50 text-red-600' :
              notice.priority === 'Medium' ? 'bg-amber-50 text-amber-600' :
              notice.priority === 'Low' ? 'bg-slate-50 text-slate-600' :
              'bg-blue-550/10 text-blue-600'
            }`}>
              <Bell size={20} />
            </div>
            <span className={`text-xs font-black uppercase tracking-widest ${
              notice.priority === 'High' ? 'text-red-500' :
              notice.priority === 'Medium' ? 'text-amber-500' :
              notice.priority === 'Low' ? 'text-slate-500' :
              'text-blue-500'
            }`}>
              {notice.priority || 'Normal'} Priority
            </span>
            {notice.category && (
              <Link
                href={`/notices/${notice.category.toLowerCase()}`}
                className="text-[10px] font-black uppercase tracking-widest bg-slate-100 hover:bg-primary/10 hover:text-primary text-slate-500 px-3 py-1 rounded-full transition-all"
              >
                {notice.category}
              </Link>
            )}
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

        <p className="text-slate-600 leading-relaxed mb-8 text-lg whitespace-pre-line">
          {renderContentWithLinks(notice.content)}
        </p>

        {(notice.pdfUrl || notice.link) && (
          <div className="flex flex-wrap gap-4 mt-6">
            {notice.pdfUrl && (
              <a href={notice.pdfUrl} download target="_blank" rel="noopener noreferrer">
                <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary transition-all flex items-center gap-2 cursor-pointer">
                  Download PDF <ChevronRight size={16} />
                </button>
              </a>
            )}
            {notice.link && (
              <a href={notice.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary-dark transition-all flex items-center gap-2 cursor-pointer">
                  Visit Link <ChevronRight size={16} />
                </button>
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="flex flex-col min-h-screen font-roboto bg-slate-50 pb-24">
      {/* Page Header */}
      <section className="bg-primary-dark py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-widest mb-4">
              <Link href="/notices" className="hover:underline">Notices</Link>
              <ChevronRight size={14} />
              <span>{displayCategory}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
              <span className="text-secondary">{displayCategory} Notices</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Stay updated with the latest {displayCategory.toLowerCase()} announcements, schedules, and academic notifications from Chalapathi Institute of Pharmaceutical Sciences.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 relative z-20 max-w-4xl">
        {/* Categories Bar */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-10 flex flex-col gap-4 border border-slate-100">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Categories:</span>
            <Link
              href="/notices"
              className="px-4 py-1.5 rounded-full text-xs font-bold transition-all bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 flex items-center gap-1.5"
            >
              Clear Filter <X size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 w-full">
            {['Examination', 'Admissions', 'Academic', 'Research', 'General'].map((cat, i) => {
              const isActive = cat.toLowerCase() === category.toLowerCase();
              return (
                <Link
                  key={i}
                  href={`/notices/${cat.toLowerCase()}`}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all border text-center whitespace-nowrap w-full ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-slate-50 text-slate-600 hover:bg-primary/10 hover:text-primary border-slate-100'
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Main Notices Feed */}
        <div className="space-y-6">
          {activeNotices.length > 0 ? (
            activeNotices.map((notice, i) => renderNoticeCard(notice, i))
          ) : (
            <div className="text-center py-24 bg-white rounded-[40px] border-2 border-dashed border-slate-200 shadow-sm">
              <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bell size={40} className="text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No active {displayCategory.toLowerCase()} notices</h3>
              <p className="text-slate-500">Check back later for new updates in this category.</p>
            </div>
          )}

          {/* Previous Notices Accordion */}
          {previousNotices.length > 0 && (
            <div className="mt-12">
              <Accordion type="single" defaultValue="">
                <AccordionItem value="previous-notices" className="border-none">
                  <AccordionTrigger className="w-full bg-slate-200/50 hover:bg-slate-200/80 hover:no-underline px-8 py-5 rounded-3xl font-bold font-poppins text-slate-800 text-lg flex items-center justify-between transition-colors shadow-sm">
                    <span>Previous Notices ({previousNotices.length})</span>
                  </AccordionTrigger>
                  <AccordionContent value="previous-notices" className="pt-6 pb-0 space-y-6">
                    {previousNotices.map((notice, i) => renderNoticeCard(notice, i, true))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
