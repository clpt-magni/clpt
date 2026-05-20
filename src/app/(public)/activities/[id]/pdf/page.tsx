import React from "react";
import { notFound } from "next/navigation";
import { getActivityById } from "@/lib/activity-actions";
import PrintTrigger from "./PrintTrigger";

interface ActivityPrintPageProps {
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

export default async function ActivityPrintPage({ params }: ActivityPrintPageProps) {
  const resolvedParams = await params;
  const activity = await getActivityById(resolvedParams.id);

  if (!activity) {
    notFound();
  }

  const formattedStartDate = new Date(activity.startDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedEndDate = new Date(activity.endDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="min-h-screen bg-white p-8 sm:p-12 text-slate-800 font-sans print:p-0 print:text-black">
      
      {/* Client-side Auto-Print Dialog Trigger */}
      <PrintTrigger />

      {/* Printable Sheet Container (Matches A4 proportion) */}
      <div className="max-w-4xl mx-auto border border-slate-200 p-10 print:border-0 print:p-0 space-y-8">
        
        {/* ======================================================== */}
        {/* OFFICIAL COLLEGE LETTERHEAD HEADER */}
        {/* ======================================================== */}
        <div className="text-center border-b-4 border-double border-primary-dark pb-6 space-y-2 relative">
          <div className="flex items-center justify-center gap-4">
            {/* College Logo */}
            <img src="/images/flogo.png" alt="CLPT Emblem" className="w-20 h-20 print:w-16 print:h-16 shrink-0" />
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-black uppercase text-primary-dark tracking-tight leading-none print:text-xl">
                Chalapathi Institute of Pharmaceutical Sciences
              </h1>
              <p className="text-[10px] font-bold text-slate-600 print:text-[8px] uppercase tracking-wider">
                Approved by PCI, AICTE | Recognized by UGC under section 2(f) & 12(B)
              </p>
              <p className="text-[10px] font-black text-slate-700 print:text-[8px] uppercase tracking-wider">
                Accredited by NAAC with 'A' Grade | ISO 9001:2015 Certified Institution
              </p>
              <p className="text-[9px] font-semibold text-slate-500 print:text-[7px]">
                Chalapathi Nagar, Lam, Guntur - 522034, Andhra Pradesh, India.
              </p>
            </div>
          </div>
        </div>

        {/* REPORT TITLE */}
        <div className="text-center space-y-1">
          <h2 className="text-lg font-black uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-2">
            Official Event & Activity Report
          </h2>
          <div className="flex justify-between items-center text-xs font-bold text-slate-500 px-2 pt-1">
            <span>EVENT ID: <strong className="text-slate-800">#{activity.eventId}</strong></span>
            <span>STATUS: <strong className="text-slate-800 uppercase">{activity.approvalStatus}</strong></span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* GENERAL PARAMETERS TABLE */}
        {/* ======================================================== */}
        <div className="space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-primary-dark border-l-4 border-primary pl-2">
            1. General Specifications
          </h3>
          <div className="border border-slate-300 rounded-lg overflow-hidden">
            <table className="w-full text-left text-xs font-semibold text-slate-700 border-collapse">
              <tbody className="divide-y divide-slate-300">
                <tr>
                  <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Event Title</td>
                  <td className="px-4 py-3 font-black text-slate-800 uppercase">{activity.title}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Organized By</td>
                  <td className="px-4 py-3 font-bold text-slate-800 uppercase italic">{activity.organizedBy}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Event Category</td>
                  <td className="px-4 py-3 text-slate-800 font-bold">{CATEGORIES_MAP[activity.category]}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Start Date & Time</td>
                  <td className="px-4 py-3 text-slate-800 italic">{formattedStartDate}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">End Date & Time</td>
                  <td className="px-4 py-3 text-slate-800 italic">{formattedEndDate}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Venue / Platform</td>
                  <td className="px-4 py-3 text-slate-800 font-bold">{activity.venueMode}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Coordinators / Conveners</td>
                  <td className="px-4 py-3 text-slate-800 font-bold uppercase">{activity.coordinators}</td>
                </tr>
                {activity.objectives && (
                  <tr>
                    <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Objectives</td>
                    <td className="px-4 py-3 text-slate-600 font-medium leading-relaxed whitespace-pre-line">{activity.objectives}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DYNAMIC CATEGORY-SPECIFIC PARAMETERS TABLE */}
        {/* ======================================================== */}
        <div className="space-y-4 page-break-before">
          <h3 className="text-xs font-black uppercase tracking-widest text-primary-dark border-l-4 border-primary pl-2">
            2. Category Metrics & Dynamic Parameters
          </h3>
          <div className="border border-slate-300 rounded-lg overflow-hidden">
            <table className="w-full text-left text-xs font-semibold text-slate-700 border-collapse">
              <tbody className="divide-y divide-slate-300">
                
                {/* Guest Lecture */}
                {activity.category === 'guestLecture' && (
                  <>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Speaker Name</td>
                      <td className="px-4 py-3 font-bold text-slate-800 uppercase italic">{activity.glSpeakerName || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Speaker Designation</td>
                      <td className="px-4 py-3 text-slate-800 font-medium">{activity.glSpeakerDesignation || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Speaker Affiliation</td>
                      <td className="px-4 py-3 text-slate-800 font-medium">{activity.glSpeakerOrganization || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Speaker Contact Details</td>
                      <td className="px-4 py-3 text-slate-800 text-xs">Email: {activity.glSpeakerEmail || "N/A"} | Phone: {activity.glSpeakerContact || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Target Audience</td>
                      <td className="px-4 py-3 text-slate-800 font-semibold">{activity.glTargetAudience || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Topic Domain</td>
                      <td className="px-4 py-3 text-slate-800 font-semibold">{activity.glTopicArea || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Honorarium Remuneration</td>
                      <td className="px-4 py-3 text-slate-800 font-bold">INR {activity.glHonorarium || 0} (Ref: {activity.glTxnRef || "N/A"})</td>
                    </tr>
                  </>
                )}

                {/* Seminar / Conference */}
                {activity.category === 'seminar' && (
                  <>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Sponsoring Agency</td>
                      <td className="px-4 py-3 font-bold text-slate-800 uppercase italic">{activity.semSponsor || "Self-Funded"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Grant Amount Received</td>
                      <td className="px-4 py-3 text-slate-800 font-bold">INR {activity.semGrantAmount || 0}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Registration Fee</td>
                      <td className="px-4 py-3 text-slate-800 font-bold">INR {activity.semRegFee || 0} per participant</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Level of Event</td>
                      <td className="px-4 py-3 text-slate-800 font-semibold uppercase">{activity.semType || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Abstracts Summary</td>
                      <td className="px-4 py-3 text-slate-800 font-bold">Papers Received: {activity.semPapersReceived || 0} | Papers Accepted: {activity.semPapersAccepted || 0}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Proceedings ISBN/ISSN</td>
                      <td className="px-4 py-3 text-slate-800 font-mono">{activity.semIsbn || "N/A"}</td>
                    </tr>
                  </>
                )}

                {/* FTP / FDP */}
                {activity.category === 'fdp' && (
                  <>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Source of Funding</td>
                      <td className="px-4 py-3 text-slate-800 font-semibold">{activity.fdpSourceFunding || "Institutional"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Participants Count</td>
                      <td className="px-4 py-3 text-slate-800 font-bold">External Faculty: {activity.fdpExternalCount || 0} | Internal Faculty (CLPT): {activity.fdpInternalCount || 0}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Assessment Conducted</td>
                      <td className="px-4 py-3 text-slate-800 font-bold">{activity.fdpAssessment ? "YES" : "NO"}</td>
                    </tr>
                  </>
                )}

                {/* Workshops */}
                {activity.category === 'workshop' && (
                  <>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Instrument/Software Focus</td>
                      <td className="px-4 py-3 font-bold text-slate-800 uppercase italic">{activity.wkInstrumentFocused || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Trainer Full Name</td>
                      <td className="px-4 py-3 font-bold text-slate-800 uppercase italic">{activity.wkTrainerName || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Trainer Credentials</td>
                      <td className="px-4 py-3 text-slate-800 font-semibold">{activity.wkTrainerExperience || "N/A"} Years Exp. ({activity.wkTrainerCompany || "N/A"})</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Evaluation Method</td>
                      <td className="px-4 py-3 text-slate-800 font-semibold">{activity.wkEvaluationMethod || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Equipment & Chemicals Utilized</td>
                      <td className="px-4 py-3 text-slate-600 font-medium whitespace-pre-line">{activity.wkConsumablesUtilized || "N/A"}</td>
                    </tr>
                  </>
                )}

                {/* Skill Development */}
                {activity.category === 'skillDev' && (
                  <>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Skill Type</td>
                      <td className="px-4 py-3 text-slate-800 font-bold uppercase italic">{activity.skType || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Training Agency</td>
                      <td className="px-4 py-3 text-slate-800 font-semibold">{activity.skPartnerAgency || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Certification Body</td>
                      <td className="px-4 py-3 text-slate-800 font-semibold">{activity.skCertificationBody || "N/A"}</td>
                    </tr>
                  </>
                )}

                {/* IIEC / Incubation */}
                {activity.category === 'iiec' && (
                  <>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Activity Type</td>
                      <td className="px-4 py-3 text-slate-800 font-bold uppercase italic">{activity.iiecType || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Ideation Teams count</td>
                      <td className="px-4 py-3 text-slate-800 font-semibold">{activity.iiecTeamsCount || 0} Teams</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Evaluator Investor Name</td>
                      <td className="px-4 py-3 font-bold text-slate-800 uppercase italic">{activity.iiecEvaluatorName || "N/A"} ({activity.iiecEvaluatorDesignation || "N/A"} — {activity.iiecEvaluatorCompany || "N/A"})</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Seed Capital Promised</td>
                      <td className="px-4 py-3 text-slate-800 font-bold">INR {activity.iiecSeedCapital || 0}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Winning/Shortlisted Ideas</td>
                      <td className="px-4 py-3 text-slate-600 font-medium whitespace-pre-line">{activity.iiecWinningIdeas || "N/A"}</td>
                    </tr>
                  </>
                )}

                {/* IPR Activities */}
                {activity.category === 'ipr' && (
                  <>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">IPR Category</td>
                      <td className="px-4 py-3 text-slate-800 font-bold uppercase italic">{activity.iprCategory || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Session Focus</td>
                      <td className="px-4 py-3 text-slate-800 font-semibold">{activity.iprSessionFocus || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Patent Attorney Details</td>
                      <td className="px-4 py-3 font-bold text-slate-800 uppercase italic">{activity.iprAttorneyName || "N/A"} ({activity.iprAttorneyFirm || "N/A"})</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Patent Ideas Discussed</td>
                      <td className="px-4 py-3 text-slate-800 font-bold">{activity.iprIdeasDiscussed ? `YES (Ref: ${activity.iprIdeasDiscussedRef || "N/A"})` : "NO"}</td>
                    </tr>
                  </>
                )}

                {/* Professional Body */}
                {activity.category === 'professionalBody' && (
                  <>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Professional Body</td>
                      <td className="px-4 py-3 text-slate-800 font-bold">
                        {activity.pbName === 'ipa' ? "IPA Lam Branch" : activity.pbName === 'isporStudent' ? "ISPOR ANU Student Chapter" : "ISPOR Amaravathi Regional Chapter"}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Event Reference Category</td>
                      <td className="px-4 py-3 text-slate-800 font-semibold uppercase">{activity.pbEventCategory || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Bearers Present</td>
                      <td className="px-4 py-3 text-slate-600 font-medium whitespace-pre-line">{activity.pbOfficeBearers || "N/A"}</td>
                    </tr>
                  </>
                )}

                {/* IQAC Activities */}
                {activity.category === 'iqac' && (
                  <>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">NAAC Criteria</td>
                      <td className="px-4 py-3 text-slate-800 font-bold uppercase">{activity.iqacCriteria || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Specific Metric Number</td>
                      <td className="px-4 py-3 text-slate-800 font-mono">{activity.iqacMetricNumber || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Meeting Reference</td>
                      <td className="px-4 py-3 text-slate-800 font-semibold">{activity.iqacMeetingRef || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Metrics Enhanced</td>
                      <td className="px-4 py-3 text-slate-600 font-medium whitespace-pre-line">{activity.iqacMetricsEnhanced || "N/A"}</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ATTENDANCE COUNTS SUMMARY */}
        {/* ======================================================== */}
        <div className="space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-primary-dark border-l-4 border-primary pl-2">
            3. Attendance & Participant Summary
          </h3>
          <div className="border border-slate-300 rounded-lg overflow-hidden">
            <table className="w-full text-left text-xs font-semibold text-slate-700 border-collapse">
              <tbody className="divide-y divide-slate-300">
                <tr>
                  <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Total Students Attended</td>
                  <td className="px-4 py-3 font-bold text-slate-800 text-sm">{activity.studentsAttended || 0} Students</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 bg-slate-50 border-r border-slate-300 w-1/3 uppercase text-[9px] tracking-wider text-slate-500 font-bold">Total Faculty Attended</td>
                  <td className="px-4 py-3 font-bold text-slate-800 text-sm">{activity.facultyAttended || 0} Faculty members</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SIGNATURE BLOCK */}
        {/* ======================================================== */}
        <div className="pt-20 grid grid-cols-3 gap-8 text-center text-xs font-black uppercase tracking-wider">
          <div className="space-y-16">
            <div className="border-b border-slate-400 mx-6 h-4" />
            <p className="text-slate-600 text-[10px]">Event Coordinator</p>
          </div>
          <div className="space-y-16">
            <div className="border-b border-slate-400 mx-6 h-4" />
            <p className="text-slate-600 text-[10px]">IQAC Coordinator</p>
          </div>
          <div className="space-y-16">
            <div className="border-b border-slate-400 mx-6 h-4" />
            <p className="text-slate-600 text-[10px]">Principal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
