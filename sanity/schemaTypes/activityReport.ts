import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'activityReport',
  title: 'Activity & Event Reports',
  type: 'document',
  groups: [
    { name: 'general', title: '1. General Info' },
    { name: 'attendance', title: '2. Attendance & Metrics' },
    { name: 'uploads', title: '3. Official Uploads' },
    { name: 'categoryFields', title: '4. Category Details' },
  ],
  fields: [
    // ==========================================
    // 1. GENERAL/COMMON FIELDS
    // ==========================================
    defineField({
      name: 'eventId',
      title: 'Unique Event ID',
      type: 'string',
      group: 'general',
      description: 'Auto-generated or official code for official tracking (e.g., CLPT/CONF/2026/01).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Event Title / Name',
      type: 'string',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'organizedBy',
      title: 'Organized By (Department/Cell/Committee)',
      type: 'string',
      group: 'general',
      description: 'Name of the department, cell, or committee responsible (e.g., Dept of Pharmaceutics, NSS Unit).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Event Category',
      type: 'string',
      group: 'general',
      options: {
        list: [
          { value: 'guestLecture', title: 'Guest Lectures & Webinars' },
          { value: 'seminar', title: 'Seminars / Symposiums / Conferences' },
          { value: 'fdp', title: 'FTP / FDP (Faculty Training/Development)' },
          { value: 'workshop', title: 'Workshops & Hands-on Training' },
          { value: 'skillDev', title: 'Skill Development' },
          { value: 'iiec', title: 'IIEC / Incubation & MSME / Enrich Cell' },
          { value: 'ipr', title: 'IPR Activities' },
          { value: 'professionalBody', title: 'IPA Lam Branch / ISPOR Chapters' },
          { value: 'iqac', title: 'IQAC Activities' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Event Start Date & Time',
      type: 'datetime',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'Event End Date & Time',
      type: 'datetime',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'venueMode',
      title: 'Venue / Platform',
      type: 'string',
      group: 'general',
      description: 'Physical room number or virtual platform link (e.g., Seminar Hall II, Zoom Link).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'objectives',
      title: 'Objectives of the Event',
      type: 'text',
      group: 'general',
      description: 'Brief details on the goals and objectives of this event.',
    }),
    defineField({
      name: 'coordinators',
      title: 'Coordinator / Convener Name(s)',
      type: 'string',
      group: 'general',
      description: 'Names of faculty coordinators, separated by commas.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'approvalStatus',
      title: 'Principal Approval Status',
      type: 'string',
      group: 'general',
      options: {
        list: [
          { value: 'pending', title: 'Pending' },
          { value: 'approved', title: 'Approved' },
          { value: 'rejected', title: 'Rejected' },
        ],
        layout: 'radio',
      },
      initialValue: 'pending',
    }),

    // ==========================================
    // 2. ATTENDANCE & METRICS
    // ==========================================
    defineField({
      name: 'studentsAttended',
      title: 'Total Number of Students Attended',
      type: 'number',
      group: 'attendance',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'facultyAttended',
      title: 'Total Number of Faculty Attended',
      type: 'number',
      group: 'attendance',
      validation: (Rule) => Rule.min(0),
    }),

    // ==========================================
    // 3. UPLOADS SECTION
    // ==========================================
    defineField({
      name: 'brochure',
      title: 'Event Brochure / Circular (PDF)',
      type: 'file',
      group: 'uploads',
      options: { accept: '.pdf' },
    }),
    defineField({
      name: 'photographs',
      title: 'Geotagged Photographs',
      type: 'array',
      group: 'uploads',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'e.g., Guest Speaker presenting, Hands-on Lab Session',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'attendanceSheet',
      title: 'Scanned Attendance Sheet (PDF)',
      type: 'file',
      group: 'uploads',
      options: { accept: '.pdf' },
    }),
    defineField({
      name: 'feedbackSummary',
      title: 'Feedback Summary Report (PDF)',
      type: 'file',
      group: 'uploads',
      options: { accept: '.pdf' },
    }),

    // ==========================================
    // 4. CATEGORY 1: GUEST LECTURES & WEBINARS
    // ==========================================
    defineField({
      name: 'glSpeakerName',
      title: 'Speaker Full Name',
      type: 'string',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'guestLecture',
    }),
    defineField({
      name: 'glSpeakerDesignation',
      title: 'Speaker Designation',
      type: 'string',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'guestLecture',
    }),
    defineField({
      name: 'glSpeakerOrganization',
      title: 'Speaker Organization / Affiliation',
      type: 'string',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'guestLecture',
    }),
    defineField({
      name: 'glSpeakerEmail',
      title: 'Speaker Email ID',
      type: 'string',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'guestLecture',
    }),
    defineField({
      name: 'glSpeakerContact',
      title: 'Speaker Contact Number',
      type: 'string',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'guestLecture',
    }),
    defineField({
      name: 'glTargetAudience',
      title: 'Target Audience',
      type: 'string',
      group: 'categoryFields',
      description: 'e.g., B.Pharm Year I-IV, M.Pharm, Pharm.D',
      hidden: ({ document }) => document?.category !== 'guestLecture',
    }),
    defineField({
      name: 'glTopicArea',
      title: 'Topic / Domain Area',
      type: 'string',
      group: 'categoryFields',
      description: 'e.g., Pharmaceutics, Pharmacology, Regulatory Affairs',
      hidden: ({ document }) => document?.category !== 'guestLecture',
    }),
    defineField({
      name: 'glHonorarium',
      title: 'Remuneration / Honorarium Paid (INR)',
      type: 'number',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'guestLecture',
    }),
    defineField({
      name: 'glTxnRef',
      title: 'Transaction Reference Number',
      type: 'string',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'guestLecture',
    }),

    // ==========================================
    // 5. CATEGORY 2: SEMINARS / SYMPOSIUMS / CONFERENCES
    // ==========================================
    defineField({
      name: 'semSponsor',
      title: 'Collaborating / Sponsoring Agency',
      type: 'string',
      group: 'categoryFields',
      description: 'e.g., AICTE, PCI, DST, ISPOR, or Self-Funded',
      hidden: ({ document }) => document?.category !== 'seminar',
    }),
    defineField({
      name: 'semGrantAmount',
      title: 'Grant Amount Received (INR)',
      type: 'number',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'seminar',
    }),
    defineField({
      name: 'semRegFee',
      title: 'Registration Fee per Participant (INR)',
      type: 'number',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'seminar',
    }),
    defineField({
      name: 'semType',
      title: 'Type of Event',
      type: 'string',
      group: 'categoryFields',
      options: {
        list: [
          { value: 'international', title: 'International Level' },
          { value: 'national', title: 'National Level' },
          { value: 'state', title: 'State Level' },
          { value: 'university', title: 'University Level' },
          { value: 'institution', title: 'Institution Level' },
        ],
      },
      hidden: ({ document }) => document?.category !== 'seminar',
    }),
    defineField({
      name: 'semPapersReceived',
      title: 'Total Abstracts/Papers Received',
      type: 'number',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'seminar',
    }),
    defineField({
      name: 'semPapersAccepted',
      title: 'Total Abstracts/Papers Accepted',
      type: 'number',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'seminar',
    }),
    defineField({
      name: 'semIsbn',
      title: 'Conference Proceedings ISBN/ISSN',
      type: 'string',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'seminar',
    }),

    // ==========================================
    // 6. CATEGORY 3: FTP / FDP
    // ==========================================
    defineField({
      name: 'fdpSourceFunding',
      title: 'Source of Funding',
      type: 'string',
      group: 'categoryFields',
      description: 'e.g., Institutional, AICTE Sponsor, PCI Sponsor',
      hidden: ({ document }) => document?.category !== 'fdp',
    }),
    defineField({
      name: 'fdpExternalCount',
      title: 'Number of External Participants',
      type: 'number',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'fdp',
    }),
    defineField({
      name: 'fdpInternalCount',
      title: 'Number of Internal Participants (CLPT)',
      type: 'number',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'fdp',
    }),
    defineField({
      name: 'fdpResourcePersons',
      title: 'Resource Persons Mapping',
      type: 'array',
      group: 'categoryFields',
      of: [
        {
          type: 'object',
          title: 'Resource Person Session',
          fields: [
            { name: 'sessionTitle', title: 'Session Title', type: 'string' },
            { name: 'speakerName', title: 'Speaker Name', type: 'string' },
            { name: 'affiliation', title: 'Affiliation / Organization', type: 'string' },
          ],
        },
      ],
      hidden: ({ document }) => document?.category !== 'fdp',
    }),
    defineField({
      name: 'fdpAssessment',
      title: 'Assessment / Test Conducted?',
      type: 'boolean',
      group: 'categoryFields',
      initialValue: false,
      hidden: ({ document }) => document?.category !== 'fdp',
    }),

    // ==========================================
    // 7. CATEGORY 4: WORKSHOPS & HANDS-ON TRAINING
    // ==========================================
    defineField({
      name: 'wkInstrumentFocused',
      title: 'Hands-on Instrument / Software Focused',
      type: 'string',
      group: 'categoryFields',
      description: 'e.g., HPLC, UV-Vis Spectrophotometer, Molecular Modeling, Python',
      hidden: ({ document }) => document?.category !== 'workshop',
    }),
    defineField({
      name: 'wkConsumablesUtilized',
      title: 'Lab Equipment / Consumables Utilized',
      type: 'text',
      group: 'categoryFields',
      description: 'Specific kits, instruments, or chemicals used during training.',
      hidden: ({ document }) => document?.category !== 'workshop',
    }),
    defineField({
      name: 'wkTrainerName',
      title: 'Trainer Full Name',
      type: 'string',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'workshop',
    }),
    defineField({
      name: 'wkTrainerExperience',
      title: 'Trainer Professional Experience (Years)',
      type: 'string',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'workshop',
    }),
    defineField({
      name: 'wkTrainerCompany',
      title: 'Trainer Company / Institution Name',
      type: 'string',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'workshop',
    }),
    defineField({
      name: 'wkEvaluationMethod',
      title: 'Evaluation Method',
      type: 'string',
      group: 'categoryFields',
      description: 'e.g., Lab Viva, Practical Test, Component Design',
      hidden: ({ document }) => document?.category !== 'workshop',
    }),

    // ==========================================
    // 8. CATEGORY 5: SKILL DEVELOPMENT
    // ==========================================
    defineField({
      name: 'skType',
      title: 'Skill Type',
      type: 'string',
      group: 'categoryFields',
      options: {
        list: [
          { value: 'technical', title: 'Technical Skill' },
          { value: 'soft', title: 'Soft Skill' },
          { value: 'communication', title: 'Communication Skill' },
          { value: 'life', title: 'Life Skill' },
        ],
      },
      hidden: ({ document }) => document?.category !== 'skillDev',
    }),
    defineField({
      name: 'skPartnerAgency',
      title: 'Training Partner Agency',
      type: 'string',
      group: 'categoryFields',
      description: 'e.g., APSSDC, external institute, or internal faculty',
      hidden: ({ document }) => document?.category !== 'skillDev',
    }),
    defineField({
      name: 'skCertificationBody',
      title: 'Certification Issuing Body',
      type: 'string',
      group: 'categoryFields',
      description: 'e.g., CLPT, APSSDC, National Skill Development Corp',
      hidden: ({ document }) => document?.category !== 'skillDev',
    }),

    // ==========================================
    // 9. CATEGORY 6: IIEC / INCUBATION & MSME
    // ==========================================
    defineField({
      name: 'iiecType',
      title: 'IIEC Activity Type',
      type: 'string',
      group: 'categoryFields',
      options: {
        list: [
          { value: 'hackathon', title: 'Hackathon' },
          { value: 'pitching', title: 'Idea Pitching' },
          { value: 'ideation', title: 'Ideation Session' },
          { value: 'mentorship', title: 'Mentorship / Business Plan' },
          { value: 'awareness', title: 'Awareness Campaign' },
        ],
      },
      hidden: ({ document }) => document?.category !== 'iiec',
    }),
    defineField({
      name: 'iiecTeamsCount',
      title: 'Number of Ideation Teams Participated',
      type: 'number',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'iiec',
    }),
    defineField({
      name: 'iiecWinningIdeas',
      title: 'Winning / Shortlisted Idea Titles',
      type: 'text',
      group: 'categoryFields',
      description: 'List of projects/ideas that won or were highly evaluated.',
      hidden: ({ document }) => document?.category !== 'iiec',
    }),
    defineField({
      name: 'iiecEvaluatorName',
      title: 'Evaluator / Investor Full Name',
      type: 'string',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'iiec',
    }),
    defineField({
      name: 'iiecEvaluatorDesignation',
      title: 'Evaluator / Investor Designation',
      type: 'string',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'iiec',
    }),
    defineField({
      name: 'iiecEvaluatorCompany',
      title: 'Venture Capital / Company Name',
      type: 'string',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'iiec',
    }),
    defineField({
      name: 'iiecSeedCapital',
      title: 'Funding / Seed Capital Promised (INR)',
      type: 'number',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'iiec',
    }),

    // ==========================================
    // 10. CATEGORY 7: IPR ACTIVITIES
    // ==========================================
    defineField({
      name: 'iprCategory',
      title: 'IPR Category',
      type: 'string',
      group: 'categoryFields',
      options: {
        list: [
          { value: 'patent', title: 'Patents' },
          { value: 'copyright', title: 'Copyrights' },
          { value: 'trademark', title: 'Trademarks' },
          { value: 'design', title: 'Industrial Designs' },
        ],
      },
      hidden: ({ document }) => document?.category !== 'ipr',
    }),
    defineField({
      name: 'iprSessionFocus',
      title: 'Session Focus',
      type: 'string',
      group: 'categoryFields',
      description: 'e.g., Patent Filing Process, Prior Art Search, Drafting, IP Commercialization',
      hidden: ({ document }) => document?.category !== 'ipr',
    }),
    defineField({
      name: 'iprAttorneyName',
      title: 'Expert Patent Attorney / Speaker Name',
      type: 'string',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'ipr',
    }),
    defineField({
      name: 'iprAttorneyFirm',
      title: 'Attorney Law Firm Name',
      type: 'string',
      group: 'categoryFields',
      hidden: ({ document }) => document?.category !== 'ipr',
    }),
    defineField({
      name: 'iprIdeasDiscussed',
      title: 'Internal Patent Ideas Discussed?',
      type: 'boolean',
      group: 'categoryFields',
      initialValue: false,
      hidden: ({ document }) => document?.category !== 'ipr',
    }),
    defineField({
      name: 'iprIdeasDiscussedRef',
      title: 'Internal Patent Tracking Reference(s)',
      type: 'string',
      group: 'categoryFields',
      description: 'Reference codes for discussed ideas, if yes.',
      hidden: ({ document, parent }) => document?.category !== 'ipr' || !parent?.iprIdeasDiscussed,
    }),

    // ==========================================
    // 11. CATEGORY 8: PROFESSIONAL BODIES
    // ==========================================
    defineField({
      name: 'pbName',
      title: 'Professional Body Name',
      type: 'string',
      group: 'categoryFields',
      options: {
        list: [
          { value: 'ipa', title: 'IPA Lam Branch' },
          { value: 'isporStudent', title: 'ISPOR ANU Student Chapter' },
          { value: 'isporRegional', title: 'ISPOR Amaravathi Regional Chapter' },
        ],
      },
      hidden: ({ document }) => document?.category !== 'professionalBody',
    }),
    defineField({
      name: 'pbOfficeBearers',
      title: 'Chapter Office Bearers Present',
      type: 'text',
      group: 'categoryFields',
      description: 'Names and designations of official chapter bearers attending.',
      hidden: ({ document }) => document?.category !== 'professionalBody',
    }),
    defineField({
      name: 'pbEventCategory',
      title: 'Event Category Reference',
      type: 'string',
      group: 'categoryFields',
      options: {
        list: [
          { value: 'meeting', title: 'Routine Meeting' },
          { value: 'webinar', title: 'Technical Webinar' },
          { value: 'community', title: 'Community Project' },
        ],
      },
      hidden: ({ document }) => document?.category !== 'professionalBody',
    }),

    // ==========================================
    // 12. CATEGORY 9: IQAC ACTIVITIES
    // ==========================================
    defineField({
      name: 'iqacCriteria',
      title: 'NAAC Criteria Mapping',
      type: 'string',
      group: 'categoryFields',
      options: {
        list: [
          { value: 'criteria1', title: 'Criteria 1 - Curricular Aspects' },
          { value: 'criteria2', title: 'Criteria 2 - Teaching-Learning & Evaluation' },
          { value: 'criteria3', title: 'Criteria 3 - Research, Innovations & Extension' },
          { value: 'criteria4', title: 'Criteria 4 - Infrastructure & Learning Resources' },
          { value: 'criteria5', title: 'Criteria 5 - Student Support & Progression' },
          { value: 'criteria6', title: 'Criteria 6 - Governance, Leadership & Management' },
          { value: 'criteria7', title: 'Criteria 7 - Institutional Values & Best Practices' },
        ],
      },
      hidden: ({ document }) => document?.category !== 'iqac',
    }),
    defineField({
      name: 'iqacMetricNumber',
      title: 'Specific NAAC Metric Number',
      type: 'string',
      group: 'categoryFields',
      description: 'e.g., 1.3.2, 3.1.3, 5.2.1',
      hidden: ({ document }) => document?.category !== 'iqac',
    }),
    defineField({
      name: 'iqacMeetingRef',
      title: 'IQAC Meeting Reference Number',
      type: 'string',
      group: 'categoryFields',
      description: 'Reference link/code to approved minutes of the meeting (e.g., CLPT/IQAC/2026/M2).',
      hidden: ({ document }) => document?.category !== 'iqac',
    }),
    defineField({
      name: 'iqacMetricsEnhanced',
      title: 'Quality Metrics Enhanced',
      type: 'text',
      group: 'categoryFields',
      description: 'Brief description of the quality outcome achieved or metric enhanced.',
      hidden: ({ document }) => document?.category !== 'iqac',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'organizedBy',
      category: 'category',
    },
    prepare({ title, subtitle, category }) {
      const categoriesMap: { [key: string]: string } = {
        guestLecture: 'Guest Lecture / Webinar',
        seminar: 'Seminar / Conference',
        fdp: 'FTP / FDP',
        workshop: 'Workshop / Training',
        skillDev: 'Skill Development',
        iiec: 'IIEC / Incubation',
        ipr: 'IPR Activity',
        professionalBody: 'Professional Body Chapter',
        iqac: 'IQAC Activity',
      };
      const catLabel = category ? categoriesMap[category] : 'Activity';
      return {
        title: title || 'Unnamed Activity',
        subtitle: `${catLabel} - ${subtitle || 'Unknown organizer'}`,
      };
    },
  },
});
