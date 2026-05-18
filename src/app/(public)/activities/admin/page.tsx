import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { getActivities } from "@/lib/activity-actions";
import { PageHeader } from "@/components/ui/PageHeader";
import { 
  Calendar, 
  ShieldAlert, 
  ShieldCheck, 
  ExternalLink, 
  Printer, 
  Plus, 
  CheckCircle2, 
  AlertCircle, 
  XCircle,
  FileText,
  Users,
  Lock
} from "lucide-react";

// Secure Whitelist of administrators
const AUTHORIZED_EMAILS = [
  "admin@chalapathipharmacy.ac.in",
  "principalclpt@gmail.com",
  "officeclpt2@gmail.com",
  "venkatavivek@gmail.com"
];

// Custom check to see if user has institutional access
function isAuthorized(email: string): boolean {
  if (!email) return false;
  
  // Rule 1: Suffix domain check
  if (email.endsWith("@chalapathipharmacy.ac.in")) {
    return true;
  }
  
  // Rule 2: Explicit whitelist check
  return AUTHORIZED_EMAILS.includes(email.toLowerCase());
}

const CATEGORIES_MAP: { [key: string]: string } = {
  guestLecture: "Guest Lecture / Webinar",
  seminar: "Seminar / Conference",
  fdp: "FTP / FDP",
  workshop: "Workshop / Training",
  skillDev: "Skill Development",
  iiec: "IIEC / Incubation",
  ipr: "IPR Activity",
  professionalBody: "Professional Body Chapter",
  iqac: "IQAC Activity",
};

export default async function ActivitiesAdminPage() {
  const user = await currentUser();

  // If user is not logged in, perform clean server HTTP redirect to sign-in page
  if (!user) {
    redirect("/sign-in?redirect_url=/activities/admin");
  }

  const email = user.emailAddresses[0]?.emailAddress || "";
  const hasAccess = isAuthorized(email);

  if (!hasAccess) {
    return (
      <div className="flex flex-col min-h-screen bg-slate-50/50 justify-center items-center py-20 px-4">
        <div className="max-w-md w-full p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl text-center space-y-6">
          <div className="mx-auto w-20 h-20 bg-red-500/5 text-red-600 rounded-full flex items-center justify-center border border-red-500/10">
            <ShieldAlert size={40} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-black text-primary-dark uppercase">Access Denied</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Logged in as: {email}</p>
          </div>
          <p className="text-sm font-semibold text-slate-500 leading-relaxed">
            Your account does not have administrator permissions for the Activity Registry. 
            Please sign in with an official institutional address ending with <strong className="text-slate-800">@chalapathipharmacy.ac.in</strong>.
          </p>
          <div className="pt-4 border-t border-slate-100">
            <Link
              href="/"
              className="inline-flex items-center justify-center py-3 px-6 bg-slate-100 text-slate-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const activities = await getActivities();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <PageHeader
        title="Admin Activities Dashboard"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Activities", href: "/activities" },
          { label: "Admin Portal" }
        ]}
        description={`Logged in securely as: ${email}`}
      />

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl space-y-8">
          
          {/* Quick Toolbar */}
          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="space-y-1">
              <h3 className="text-lg font-black text-primary-dark uppercase tracking-wide flex items-center gap-2">
                <Lock className="text-primary" size={20} /> Management Portal
              </h3>
              <p className="text-xs font-semibold text-slate-400">Add, edit, approval verify and download institutional reports.</p>
            </div>

            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <a
                href="/studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-4 px-6 bg-primary text-white hover:bg-primary-dark rounded-2xl font-black text-xs uppercase tracking-widest shadow-md transition-colors"
              >
                <Plus size={16} /> Create Activity in Studio <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Activities Register Panel */}
          <div className="bg-white border border-slate-100 rounded-[2.5rem] shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-100">
              <h4 className="text-sm font-black text-primary-dark uppercase tracking-widest">Active Activity Register</h4>
            </div>

            {activities.length === 0 ? (
              <div className="text-center py-20 text-slate-400 space-y-4">
                <AlertCircle className="mx-auto" size={40} />
                <p className="text-sm font-bold uppercase">No Activities Registered Yet</p>
                <p className="text-xs font-semibold text-slate-400 max-w-xs mx-auto">
                  Click the "Create Activity in Studio" button above to log your first institutional event!
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-semibold text-slate-600 border-collapse">
                  <thead className="bg-slate-50 text-slate-700 uppercase tracking-widest text-[9px] border-b border-slate-100">
                    <tr>
                      <th className="px-8 py-5">Event ID & Title</th>
                      <th className="px-6 py-5">Organized By</th>
                      <th className="px-6 py-5">Category</th>
                      <th className="px-6 py-5">Date</th>
                      <th className="px-6 py-5 text-center">Attendees</th>
                      <th className="px-6 py-5 text-center">Approval</th>
                      <th className="px-8 py-5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {activities.map((act) => {
                      const formattedDate = new Date(act.startDate).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      });

                      return (
                        <tr key={act._id} className="hover:bg-slate-50/50 transition-colors">
                          {/* ID & Title */}
                          <td className="px-8 py-5">
                            <div className="space-y-1 max-w-[280px]">
                              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">#{act.eventId}</span>
                              <h5 className="font-black text-primary-dark uppercase truncate" title={act.title}>
                                {act.title}
                              </h5>
                              <p className="text-[10px] font-bold text-slate-400 truncate">Coord: {act.coordinators}</p>
                            </div>
                          </td>

                          {/* Organized By */}
                          <td className="px-6 py-5">
                            <span className="font-bold text-slate-800 uppercase italic">{act.organizedBy}</span>
                          </td>

                          {/* Category */}
                          <td className="px-6 py-5">
                            <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full font-black text-[9px] uppercase tracking-wider">
                              {CATEGORIES_MAP[act.category] || "Event"}
                            </span>
                          </td>

                          {/* Date */}
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-1.5 text-slate-500 font-bold">
                              <Calendar size={13} className="text-slate-400" />
                              <span>{formattedDate}</span>
                            </div>
                          </td>

                          {/* Attendees */}
                          <td className="px-6 py-5 text-center">
                            <div className="font-bold text-slate-700">
                              <span>S: <strong className="text-primary font-black">{act.studentsAttended || 0}</strong></span>
                              <span className="mx-2 text-slate-300">|</span>
                              <span>F: <strong className="text-secondary font-black">{act.facultyAttended || 0}</strong></span>
                            </div>
                          </td>

                          {/* Approval Status */}
                          <td className="px-6 py-5">
                            <div className="flex items-center justify-center">
                              {act.approvalStatus === 'approved' ? (
                                <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase text-green-600 tracking-wider">
                                  <CheckCircle2 size={12} /> Approved
                                </span>
                              ) : act.approvalStatus === 'rejected' ? (
                                <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase text-red-600 tracking-wider">
                                  <XCircle size={12} /> Rejected
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase text-amber-500 tracking-wider">
                                  <AlertCircle size={12} /> Pending
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Actions */}
                          <td className="px-8 py-5 text-right">
                            <div className="flex items-center justify-end gap-3">
                              <Link
                                href={`/activities/${act._id}`}
                                className="inline-flex items-center justify-center p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-all"
                                title="Preview Details"
                              >
                                <ExternalLink size={15} />
                              </Link>

                              <Link
                                href={`/activities/${act._id}/pdf`}
                                target="_blank"
                                className="inline-flex items-center justify-center p-2.5 bg-primary/5 hover:bg-primary-dark hover:text-white text-primary rounded-xl transition-all shadow-sm"
                                title="Print / PDF Report"
                              >
                                <Printer size={15} />
                              </Link>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
