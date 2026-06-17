import { client } from './sanity';

export interface ActivityReport {
  _id: string;
  eventId: string;
  title: string;
  organizedBy: string;
  category: string;
  startDate: string;
  endDate: string;
  venueMode: string;
  objectives?: string;
  coordinators: string;
  approvalStatus: string;
  studentsAttended?: number;
  facultyAttended?: number;
  brochure?: any;
  photographs?: Array<{
    _key: string;
    asset: any;
    caption?: string;
    url?: string;
  }>;
  attendanceSheet?: any;
  feedbackSummary?: any;
  brochureUrl?: string;
  attendanceSheetUrl?: string;
  feedbackSummaryUrl?: string;


  // Guest Lectures
  glSpeakerName?: string;
  glSpeakerDesignation?: string;
  glSpeakerOrganization?: string;
  glSpeakerEmail?: string;
  glSpeakerContact?: string;
  glTargetAudience?: string;
  glTopicArea?: string;
  glHonorarium?: number;
  glTxnRef?: string;

  // Seminars
  semSponsor?: string;
  semGrantAmount?: number;
  semRegFee?: number;
  semType?: string;
  semPapersReceived?: number;
  semPapersAccepted?: number;
  semIsbn?: string;

  // FDP
  fdpSourceFunding?: string;
  fdpExternalCount?: number;
  fdpInternalCount?: number;
  fdpResourcePersons?: Array<{
    _key: string;
    sessionTitle?: string;
    speakerName?: string;
    affiliation?: string;
  }>;
  fdpAssessment?: boolean;

  // Workshop
  wkInstrumentFocused?: string;
  wkConsumablesUtilized?: string;
  wkTrainerName?: string;
  wkTrainerExperience?: string;
  wkTrainerCompany?: string;
  wkEvaluationMethod?: string;

  // Skill Dev
  skType?: string;
  skPartnerAgency?: string;
  skCertificationBody?: string;

  // IIEC
  iiecType?: string;
  iiecTeamsCount?: number;
  iiecWinningIdeas?: string;
  iiecEvaluatorName?: string;
  iiecEvaluatorDesignation?: string;
  iiecEvaluatorCompany?: string;
  iiecSeedCapital?: number;

  // IPR
  iprCategory?: string;
  iprSessionFocus?: string;
  iprAttorneyName?: string;
  iprAttorneyFirm?: string;
  iprIdeasDiscussed?: boolean;
  iprIdeasDiscussedRef?: string;

  // Professional Body
  pbName?: string;
  pbOfficeBearers?: string;
  pbEventCategory?: string;

  // IQAC
  iqacCriteria?: string;
  iqacMetricNumber?: string;
  iqacMeetingRef?: string;
  iqacMetricsEnhanced?: string;
}

// Fetch all activity reports ordered by start date descending
export async function getActivities(): Promise<ActivityReport[]> {
  const query = `*[_type == "activityReport"] | order(startDate desc) {
    ...,
    "brochureUrl": brochure.asset->url,
    "attendanceSheetUrl": attendanceSheet.asset->url,
    "feedbackSummaryUrl": feedbackSummary.asset->url
  }`;
  return await client.fetch(query, {}, { cache: 'no-store', next: { revalidate: 0 } });
}

// Fetch a single activity report by ID (Sanity _id or eventId)
export async function getActivityById(id: string): Promise<ActivityReport | null> {
  const query = `*[_type == "activityReport" && (_id == $id || eventId == $id)][0] {
    ...,
    "brochureUrl": brochure.asset->url,
    "attendanceSheetUrl": attendanceSheet.asset->url,
    "feedbackSummaryUrl": feedbackSummary.asset->url,
    photographs[] {
      ...,
      "url": asset->url
    }
  }`;
  return await client.fetch(query, { id }, { cache: 'no-store', next: { revalidate: 0 } });
}

export interface AttendedActivity {
  _id: string;
  eventName: string;
  organizedBy: string;
  date: string;
  section: 'seminar' | 'wdh' | 'fdp';
  faculty?: Array<{
    _id: string;
    name: string;
    prefix?: string;
    designation?: string;
    slug?: {
      current: string;
    };
  }>;
}

// Fetch all attended activities with faculty references resolved
export async function getAttendedActivities(): Promise<AttendedActivity[]> {
  const query = `*[_type == "attendedActivity"] | order(date desc) {
    _id,
    eventName,
    organizedBy,
    date,
    section,
    faculty[]->{
      _id,
      name,
      prefix,
      designation,
      slug
    }
  }`;
  return await client.fetch(query, {}, { cache: 'no-store', next: { revalidate: 0 } });
}

