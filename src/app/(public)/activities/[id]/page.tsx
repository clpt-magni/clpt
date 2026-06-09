import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getActivityById } from "@/lib/activity-actions";
import { PageHeader } from "@/components/ui/PageHeader";
import { 
  Calendar, 
  MapPin, 
  Users, 
  FileText, 
  Printer, 
  Download,
  ArrowLeft,
  Briefcase,
  ExternalLink,
  Award,
  BookOpen,
  DollarSign,
  FileCheck
} from "lucide-react";

interface ActivityDetailPageProps {
  params: Promise<{ id: string }>;
}

const CATEGORIES_MAP: { [key: string]: string } = {
  // Department Activities
  awardsAchievements: "AWARDS-ACHIEVEMENTS",
  certificateProgramme: "CERTIFICATE PROGRAMME",
  fdp: "FDP (Faculty Development Programme)",
  guestLecture: "GUEST LECTURE",
  researchGrants: "RESEARCH GRANTS AND SPONSORED RESEARCH",
  ssm: "SSM",
  skillDevelopment: "SKILL DEVELOPMENT PROGRAMME",
  wdh: "WDH",

  // Cells & Committee Activities
  alumniAssociation: "ALUMNI ASSOCIATION ACTIVITIES",
  chess: "CHESS",
  culturalActivities: "CULTURAL ACTIVITIES",
  eagleClub: "EAGLE CLUB",
  extensionActivities: "EXTENSION ACTIVITIES",
  hmapActivities: "HMAP ACTIVITIES",
  hmrActivities: "HMR ACTIVITIES",
  iic: "IIC (Institution's Innovation Council)",
  iipec: "IIPEC (INDUSTRY INSTITUTE PARTNERSHIP CELL)",
  ipaLamBranch: "IPA-LAM BRANCH ACTIVITIES",
  iprActivities: "IPR ACTIVITIES (Intellectual Property Rights)",
  iqacActivities: "IQAC ACTIVITIES",
  isporAnuStudent: "ISPOR ANU STUDENT CHAPTER ACTIVITIES",
  isporAmaravathiRegional: "ISPOR INDIA AMARAVATHI REGIONAL CHAPTER ACTIVITIES",
  library: "LIBRARY",
  medicalCamp: "MEDICAL CAMP ACTIVITIES",
  nssUnit1: "NSS UNIT - I ACTIVITIES",
  nssUnit2: "NSS UNIT - II ACTIVITIES",
  orientationProgramme: "ORIENTATION PROGRAMME",
  pmbjakActivities: "PMBJAK ACTIVITIES",
  professionalTraining: "PROFESSIONAL TRAINING FOR TEACHING STAFF",
  sportsActivities: "SPORTS ACTIVITIES",
  womenCellActivities: "WOMEN CELL ACTIVITIES",
  yoga: "YOGA",
};

export default async function ActivityDetailPage({ params }: ActivityDetailPageProps) {
  const resolvedParams = await params;
  const activity = await getActivityById(resolvedParams.id);

  if (!activity) {
    notFound();
  }

  const formattedDate = new Date(activity.startDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <PageHeader
        title={activity.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Activities", href: "/activities" },
          { label: activity.eventId }
        ]}
        description={`Organized by ${activity.organizedBy} — Approved Status: ${activity.approvalStatus.toUpperCase()}`}
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          
          {/* Back & Print Toolbar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest text-slate-500 hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} /> Back to Directory
            </Link>

            <Link
              href={`/activities/${activity._id}/pdf`}
              target="_blank"
              className="inline-flex items-center justify-center gap-3 py-4 px-8 bg-primary text-white hover:bg-primary-dark rounded-2xl font-black text-xs uppercase tracking-widest shadow-md transition-colors"
            >
              <Printer size={18} /> Print / Generate PDF Report
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: General & Category-Specific Metrics */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Event Overview Card */}
              <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
                <div>
                  <span className="px-4 py-1.5 bg-primary/5 text-primary rounded-full font-black text-[10px] uppercase tracking-widest border border-primary/10">
                    {CATEGORIES_MAP[activity.category] || "Activity"}
                  </span>
                  <h2 className="text-3xl font-black text-primary-dark uppercase tracking-tight leading-tight mt-4">
                    {activity.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Organized By</p>
                    <p className="text-sm font-bold text-slate-800 uppercase italic">{activity.organizedBy}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Unique Event ID</p>
                    <p className="text-sm font-bold text-slate-800 uppercase italic">#{activity.eventId}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Date & Time</p>
                    <p className="text-sm font-bold text-slate-800 italic">{formattedDate}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Venue / Mode</p>
                    <p className="text-sm font-bold text-slate-800 italic">{activity.venueMode}</p>
                  </div>
                </div>

                {activity.objectives && (
                  <div className="pt-6 border-t border-slate-100 space-y-3">
                    <h4 className="text-xs font-black text-primary-dark uppercase tracking-wider">Objectives of the Event</h4>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed whitespace-pre-line">
                      {activity.objectives}
                    </p>
                  </div>
                )}
              </div>

              {/* DYNAMIC CATEGORY-SPECIFIC DETAILS CARD */}
              <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
                <h3 className="text-xl font-black text-primary-dark uppercase tracking-tight flex items-center gap-3">
                  <FileCheck className="text-primary" size={24} /> Category Details
                </h3>

                {/* GUEST LECTURES DETAILS */}
                {activity.category === 'guestLecture' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    <div className="md:col-span-2 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Speaker Profile</h4>
                      <p className="text-base font-black text-slate-800 uppercase italic">{activity.glSpeakerName}</p>
                      <p className="text-xs font-bold text-slate-500 mt-1">{activity.glSpeakerDesignation} — {activity.glSpeakerOrganization}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-200/60 text-xs font-semibold text-slate-600">
                        <p>Email: <strong className="text-slate-800">{activity.glSpeakerEmail || "N/A"}</strong></p>
                        <p>Phone: <strong className="text-slate-800">{activity.glSpeakerContact || "N/A"}</strong></p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Target Audience</p>
                      <p className="text-sm font-bold text-slate-800 italic">{activity.glTargetAudience || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Domain/Topic Area</p>
                      <p className="text-sm font-bold text-slate-800 italic">{activity.glTopicArea || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Honorarium Paid</p>
                      <p className="text-sm font-bold text-slate-800 italic">INR {activity.glHonorarium || 0}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Transaction Ref</p>
                      <p className="text-sm font-bold text-slate-800 italic">{activity.glTxnRef || "N/A"}</p>
                    </div>
                  </div>
                )}

                {/* SEMINAR/CONFERENCES DETAILS */}
                {activity.category === 'seminar' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Sponsoring Agency</p>
                      <p className="text-sm font-bold text-slate-800 italic">{activity.semSponsor || "Self-Funded"}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Grant Received</p>
                      <p className="text-sm font-bold text-slate-800 italic">INR {activity.semGrantAmount || 0}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Registration Fee</p>
                      <p className="text-sm font-bold text-slate-800 italic">INR {activity.semRegFee || 0}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Level of Event</p>
                      <p className="text-sm font-bold text-slate-800 uppercase italic">{activity.semType || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Abstracts Received</p>
                      <p className="text-sm font-bold text-slate-800 italic">{activity.semPapersReceived || 0}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Abstracts Accepted</p>
                      <p className="text-sm font-bold text-slate-800 italic">{activity.semPapersAccepted || 0}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Proceedings ISBN/ISSN</p>
                      <p className="text-sm font-bold text-slate-800 italic">{activity.semIsbn || "N/A"}</p>
                    </div>
                  </div>
                )}

                {/* FTP/FDP DETAILS */}
                {activity.category === 'fdp' && (
                  <div className="space-y-8 pt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Source of Funding</p>
                        <p className="text-sm font-bold text-slate-800 italic">{activity.fdpSourceFunding || "Institutional"}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">External Participants</p>
                        <p className="text-sm font-bold text-slate-800 italic">{activity.fdpExternalCount || 0}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Internal Participants</p>
                        <p className="text-sm font-bold text-slate-800 italic">{activity.fdpInternalCount || 0}</p>
                      </div>
                    </div>

                    {activity.fdpResourcePersons && activity.fdpResourcePersons.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Resource Persons Mapping</h4>
                        <div className="overflow-x-auto rounded-2xl border border-slate-100">
                          <table className="w-full text-left text-xs font-semibold text-slate-600">
                            <thead className="bg-slate-50 text-slate-700 uppercase tracking-wider text-[10px]">
                              <tr>
                                <th className="px-6 py-4">Session Title</th>
                                <th className="px-6 py-4">Speaker Name</th>
                                <th className="px-6 py-4">Affiliation / Organization</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {activity.fdpResourcePersons.map((rp, i) => (
                                <tr key={rp._key || i}>
                                  <td className="px-6 py-4 font-bold text-slate-800">{rp.sessionTitle || "N/A"}</td>
                                  <td className="px-6 py-4 uppercase italic text-slate-700">{rp.speakerName || "N/A"}</td>
                                  <td className="px-6 py-4 text-slate-500">{rp.affiliation || "N/A"}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* WORKSHOPS DETAILS */}
                {activity.category === 'workshop' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Instrument/Software Focused</p>
                      <p className="text-sm font-bold text-slate-800 italic">{activity.wkInstrumentFocused || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Evaluation Method</p>
                      <p className="text-sm font-bold text-slate-800 italic">{activity.wkEvaluationMethod || "N/A"}</p>
                    </div>
                    <div className="md:col-span-2 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Trainer Details</h4>
                      <p className="text-base font-black text-slate-800 uppercase italic">{activity.wkTrainerName}</p>
                      <p className="text-xs font-bold text-slate-500 mt-1">{activity.wkTrainerExperience || "N/A"} Years Experience — {activity.wkTrainerCompany || "N/A"}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Lab Equipment / Consumables Utilized</p>
                      <p className="text-sm font-bold text-slate-800 italic whitespace-pre-line">{activity.wkConsumablesUtilized || "N/A"}</p>
                    </div>
                  </div>
                )}

                {/* SKILL DEVELOPMENT DETAILS */}
                {activity.category === 'skillDev' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Skill Type</p>
                      <p className="text-sm font-bold text-slate-800 uppercase italic">{activity.skType || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Training Partner Agency</p>
                      <p className="text-sm font-bold text-slate-800 italic">{activity.skPartnerAgency || "N/A"}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Certification Issuing Body</p>
                      <p className="text-sm font-bold text-slate-800 italic">{activity.skCertificationBody || "N/A"}</p>
                    </div>
                  </div>
                )}

                {/* IIEC / INCUBATION DETAILS */}
                {activity.category === 'iiec' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Activity Type</p>
                      <p className="text-sm font-bold text-slate-800 uppercase italic">{activity.iiecType || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Teams Participated</p>
                      <p className="text-sm font-bold text-slate-800 italic">{activity.iiecTeamsCount || 0}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Winning / Shortlisted Ideas</p>
                      <p className="text-sm font-bold text-slate-800 italic whitespace-pre-line">{activity.iiecWinningIdeas || "N/A"}</p>
                    </div>
                    <div className="md:col-span-2 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Evaluator / Investor Profile</h4>
                      <p className="text-base font-black text-slate-800 uppercase italic">{activity.iiecEvaluatorName || "N/A"}</p>
                      <p className="text-xs font-bold text-slate-500 mt-1">{activity.iiecEvaluatorDesignation || "N/A"} — {activity.iiecEvaluatorCompany || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Seed Capital Promised</p>
                      <p className="text-sm font-bold text-slate-800 italic">INR {activity.iiecSeedCapital || 0}</p>
                    </div>
                  </div>
                )}

                {/* IPR ACTIVITIES */}
                {activity.category === 'ipr' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">IPR Category</p>
                      <p className="text-sm font-bold text-slate-800 uppercase italic">{activity.iprCategory || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Session Focus</p>
                      <p className="text-sm font-bold text-slate-800 italic">{activity.iprSessionFocus || "N/A"}</p>
                    </div>
                    <div className="md:col-span-2 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Patent Attorney Speaker</h4>
                      <p className="text-base font-black text-slate-800 uppercase italic">{activity.iprAttorneyName || "N/A"}</p>
                      <p className="text-xs font-bold text-slate-500 mt-1">{activity.iprAttorneyFirm || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Internal Patent Ideas Discussed?</p>
                      <p className="text-sm font-bold text-slate-800 italic">{activity.iprIdeasDiscussed ? "Yes" : "No"}</p>
                    </div>
                    {activity.iprIdeasDiscussed && (
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Internal Patents Tracking Ref</p>
                        <p className="text-sm font-bold text-slate-800 italic">{activity.iprIdeasDiscussedRef || "N/A"}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* PROFESSIONAL BODY DETAILS */}
                {activity.category === 'professionalBody' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Professional Body Name</p>
                      <p className="text-sm font-bold text-slate-800 uppercase italic">
                        {activity.pbName === 'ipa' ? "IPA Lam Branch" : activity.pbName === 'isporStudent' ? "ISPOR ANU Student Chapter" : "ISPOR Amaravathi Regional Chapter"}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Event Category Reference</p>
                      <p className="text-sm font-bold text-slate-800 uppercase italic">{activity.pbEventCategory || "N/A"}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Office Bearers Present</p>
                      <p className="text-sm font-bold text-slate-800 italic whitespace-pre-line">{activity.pbOfficeBearers || "N/A"}</p>
                    </div>
                  </div>
                )}

                {/* IQAC ACTIVITIES */}
                {activity.category === 'iqac' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">NAAC Criteria Mapping</p>
                      <p className="text-sm font-bold text-slate-800 uppercase italic">{activity.iqacCriteria || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Specific Metric Number</p>
                      <p className="text-sm font-bold text-slate-800 italic">{activity.iqacMetricNumber || "N/A"}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">IQAC Meeting Reference Number</p>
                      <p className="text-sm font-bold text-slate-800 italic">{activity.iqacMeetingRef || "N/A"}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Quality Metrics Enhanced</p>
                      <p className="text-sm font-bold text-slate-800 italic whitespace-pre-line">{activity.iqacMetricsEnhanced || "N/A"}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* PHOTOGRAPHS SHOWCASE (IF PRESENT) */}
              {activity.photographs && activity.photographs.length > 0 && (
                <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
                  <h4 className="text-xs font-black text-primary-dark uppercase tracking-widest">Geotagged Photographs</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {activity.photographs.map((photo, idx) => (
                      <div key={photo._key || idx} className="rounded-3xl overflow-hidden border-4 border-slate-100 shadow-sm space-y-2">
                        <img src={photo.url} alt={photo.caption || "Event Photograph"} className="w-full h-48 object-cover" />
                        {photo.caption && (
                          <p className="p-4 bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center border-t border-slate-100">
                            {photo.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Uploaded Official PDF Circulars & Attendance Sheets */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Quick Summary Counts Card */}
              <div className="p-8 bg-primary-dark text-white rounded-[2.5rem] shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none">
                  <Users size={120} />
                </div>
                <h4 className="text-lg font-black text-secondary uppercase mb-6 flex items-center gap-2">
                  <Award size={18} /> Official Attendance
                </h4>
                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-white/60 font-semibold text-xs uppercase">Students Attended</span>
                    <span className="text-lg font-black text-white">{activity.studentsAttended || 0}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-white/60 font-semibold text-xs uppercase">Faculty Attended</span>
                    <span className="text-lg font-black text-white">{activity.facultyAttended || 0}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-white/60 font-semibold text-xs uppercase">Coordinators</span>
                    <span className="text-xs font-bold text-white text-right max-w-[150px] truncate" title={activity.coordinators}>
                      {activity.coordinators}
                    </span>
                  </div>
                </div>
              </div>

              {/* Documents & Uploads Card */}
              <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
                <h4 className="text-xs font-black text-primary-dark uppercase tracking-widest">Official Documents</h4>
                <div className="space-y-4">
                  {/* Circular/Brochure */}
                  {activity.brochureUrl ? (
                    <a
                      href={activity.brochureUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 bg-slate-50 hover:bg-primary hover:text-white group border border-slate-100 rounded-2xl flex items-center justify-between transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="text-slate-400 group-hover:text-white shrink-0" size={20} />
                        <div>
                          <p className="text-xs font-black uppercase tracking-wider text-slate-700 group-hover:text-white">Event Brochure</p>
                          <p className="text-[10px] font-bold text-slate-400 group-hover:text-white/80">Brochure/Circular PDF</p>
                        </div>
                      </div>
                      <Download size={16} className="text-slate-400 group-hover:text-white" />
                    </a>
                  ) : (
                    <div className="p-5 bg-slate-50/50 border border-slate-100/50 rounded-2xl flex items-center justify-between text-slate-400 text-xs font-bold italic">
                      <span>Brochure Not Uploaded</span>
                    </div>
                  )}

                  {/* Attendance Sheet */}
                  {activity.attendanceSheetUrl ? (
                    <a
                      href={activity.attendanceSheetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 bg-slate-50 hover:bg-primary hover:text-white group border border-slate-100 rounded-2xl flex items-center justify-between transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="text-slate-400 group-hover:text-white shrink-0" size={20} />
                        <div>
                          <p className="text-xs font-black uppercase tracking-wider text-slate-700 group-hover:text-white">Attendance Sheet</p>
                          <p className="text-[10px] font-bold text-slate-400 group-hover:text-white/80">Scanned Attendance PDF</p>
                        </div>
                      </div>
                      <Download size={16} className="text-slate-400 group-hover:text-white" />
                    </a>
                  ) : (
                    <div className="p-5 bg-slate-50/50 border border-slate-100/50 rounded-2xl flex items-center justify-between text-slate-400 text-xs font-bold italic">
                      <span>Attendance Sheet Not Uploaded</span>
                    </div>
                  )}

                  {/* Feedback Report */}
                  {activity.feedbackSummaryUrl ? (
                    <a
                      href={activity.feedbackSummaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 bg-slate-50 hover:bg-primary hover:text-white group border border-slate-100 rounded-2xl flex items-center justify-between transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="text-slate-400 group-hover:text-white shrink-0" size={20} />
                        <div>
                          <p className="text-xs font-black uppercase tracking-wider text-slate-700 group-hover:text-white">Feedback Summary</p>
                          <p className="text-[10px] font-bold text-slate-400 group-hover:text-white/80">Summary Analysis PDF</p>
                        </div>
                      </div>
                      <Download size={16} className="text-slate-400 group-hover:text-white" />
                    </a>
                  ) : (
                    <div className="p-5 bg-slate-50/50 border border-slate-100/50 rounded-2xl flex items-center justify-between text-slate-400 text-xs font-bold italic">
                      <span>Feedback Report Not Uploaded</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
