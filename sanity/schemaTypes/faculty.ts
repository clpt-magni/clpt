import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'faculty',
  title: 'Faculty',
  type: 'document',
  groups: [
    { name: 'basic', title: 'Basic Info' },
    { name: 'credentials', title: 'Academic Credentials' },
    { name: 'academic', title: 'Academic Operations' },
    { name: 'research', title: 'Research & Publications' },
    { name: 'extended', title: 'Extended Info' },
    { name: 'system', title: 'System Fields' },
  ],
  fields: [
    // 1. Core Identification & Contact
    defineField({ 
      name: 'prefix', 
      title: 'Prefix', 
      type: 'string', 
      group: 'basic',
      options: { list: ['Dr.', 'Mr.', 'Mrs.', 'Ms.', 'Prof.'] } 
    }),
    defineField({ name: 'name', title: 'Full Name', type: 'string', group: 'basic', validation: (Rule) => Rule.required() }),
    defineField({ 
      name: 'slug', 
      title: 'Slug', 
      type: 'slug',
      group: 'basic',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: 'image', title: 'Profile Image', type: 'image', group: 'basic', options: { hotspot: true } }),
    defineField({ name: 'designation', title: 'Designation / Title', type: 'string', group: 'basic', options: {
      list: [
        'Head of Department (HOD)',
        'Professor',
        'Associate Professor',
        'Assistant Professor',
        'Senior Lecturer',
        'Lecturer',
        'Professor Emeritus',
        'Adjunct Professor',
        'Visiting Faculty',
        'Guest Lecturer',
        'Research Scientist',
        'Postdoctoral Fellow',
        'Research Associate',
        'Research Scholar / Ph.D. Candidate',
        'Teaching Assistant (TA)',
        'Librarian',
        'Assistant Librarian',
        'Placement Officer',
        'Laboratory Technician',
        'System Administrator',
        'Adjunct Faculty',
        'Principal and Dean',
      ]
    } }),
    defineField({ 
      name: 'department', 
      title: 'Department', 
      type: 'string',
      group: 'basic',
      options: {
        list: [
          'Pharmaceutics',
          'Pharmaceutical Chemistry',
          'Pharmacology',
          'Pharmacognosy',
          'Pharmaceutical Analysis',
          'Pharmacy Practice',
          'Regulatory Affairs',
          'Industrial Pharmacy',
          'Quality Assurance (QA)',
          'Pharmaceutical Biotechnology',
          'Human Anatomy and Physiology',
          'Mathematics and Biostatistics',
          'Computer Applications / IT',
          'Environmental Sciences',
          'Management Studies / MBA',
          'Physical Education',
          'Library Sciences',
        ]
      }
    }),
    defineField({ name: 'email', title: 'Official Email', type: 'string', group: 'basic' }),
    defineField({ name: 'phone', title: 'Contact / Extension', type: 'string', group: 'basic' }),
    defineField({ name: 'officeLocation', title: 'Office Location', type: 'string', group: 'basic', placeholder: 'e.g., Ground Floor, Room 102' }),

    // 2. Academic & Professional Credentials
    defineField({
      name: 'qualifications',
      title: 'Education / Qualifications',
      type: 'array',
      group: 'credentials',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'degree', title: 'Degree', type: 'string' },
            { name: 'institution', title: 'Institution', type: 'string' },
            { name: 'year', title: 'Year of Passing', type: 'string' },
          ]
        }
      ]
    }),
    defineField({ name: 'teachingExperience', title: 'Teaching Experience (Years)', type: 'number', group: 'credentials' }),
    defineField({ name: 'industryExperience', title: 'Industry/Research Experience (Years)', type: 'number', group: 'credentials' }),
    defineField({ name: 'pciRegistration', title: 'PCI Registration Number', type: 'string', group: 'credentials' }),
    defineField({ name: 'dateOfJoining', title: 'Date of Joining', type: 'date', group: 'credentials' }),

    // 3. Academic Operations & Teaching
    defineField({ name: 'specializations', title: 'Areas of Specialization / Research Interest', type: 'array', group: 'academic', of: [{ type: 'string' }] }),
    defineField({ name: 'subjectsUG', title: 'Subjects Taught (UG)', type: 'array', group: 'academic', of: [{ type: 'string' }] }),
    defineField({ name: 'subjectsPG', title: 'Subjects Taught (PG)', type: 'array', group: 'academic', of: [{ type: 'string' }] }),
    defineField({ 
      name: 'researchGuideship', 
      title: 'Research Guideship', 
      type: 'object', 
      group: 'academic',
      fields: [
        { name: 'isApproved', title: 'Approved Guide', type: 'boolean' },
        { name: 'scholarCount', title: 'Current Scholars', type: 'number' },
      ]
    }),
    defineField({ name: 'innovativeTeaching', title: 'Innovative Teaching Methods', type: 'array', group: 'academic', of: [{ type: 'block' }] }),

    // 4. Research, Publications & Achievements
    defineField({
      name: 'publications',
      title: 'Publications',
      type: 'array',
      group: 'research',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Paper Title', type: 'string' },
            { name: 'journal', title: 'Journal Name', type: 'string' },
            { name: 'year', title: 'Year', type: 'string' },
            { name: 'impactFactor', title: 'Impact Factor', type: 'string' },
            { name: 'link', title: 'DOI / Link', type: 'url' },
          ]
        }
      ]
    }),
    defineField({
      name: 'patents',
      title: 'Patents & Copyrights',
      type: 'array',
      group: 'research',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'appNumber', title: 'Application Number', type: 'string' },
            { name: 'status', title: 'Status', type: 'string', options: { list: ['Filed', 'Granted', 'Published'] } },
            { name: 'year', title: 'Year', type: 'string' },
          ]
        }
      ]
    }),
    defineField({
      name: 'grants',
      title: 'Grants & Funded Projects',
      type: 'array',
      group: 'research',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Project Title', type: 'string' },
            { name: 'agency', title: 'Funding Agency', type: 'string' },
            { name: 'amount', title: 'Amount Granted', type: 'string' },
            { name: 'status', title: 'Status', type: 'string', options: { list: ['Ongoing', 'Completed'] } },
          ]
        }
      ]
    }),
    defineField({ name: 'conferences', title: 'Conferences & Presentations', type: 'array', group: 'research', of: [{ type: 'string' }] }),
    defineField({ name: 'awards', title: 'Awards & Honors', type: 'array', group: 'research', of: [{ type: 'string' }] }),

    // Research Metrics (Quantitative)
    defineField({ name: 'booksPublished', title: 'Books Published', type: 'number', group: 'research' }),
    defineField({ name: 'bookChapters', title: 'Book Chapters', type: 'number', group: 'research' }),
    defineField({ name: 'patentsGranted', title: 'Patents Granted', type: 'number', group: 'research' }),
    defineField({ name: 'patentsPublished', title: 'Patents Published', type: 'number', group: 'research' }),
    defineField({ name: 'phdGuided', title: 'Ph.D. Guided', type: 'number', group: 'research' }),
    defineField({ name: 'citations', title: 'Citations (Google Scholar)', type: 'number', group: 'research' }),
    defineField({ name: 'hIndex', title: 'h-Index', type: 'number', group: 'research' }),
    defineField({ name: 'i10Index', title: 'i10-Index', type: 'number', group: 'research' }),

    // 5. Extended Information & External Links
    defineField({ name: 'bio', title: 'Biography / About', type: 'array', group: 'extended', of: [{ type: 'block' }] }),
    defineField({ name: 'memberships', title: 'Professional Memberships', type: 'array', group: 'extended', of: [{ type: 'string' }] }),
    defineField({
      name: 'socialLinks',
      title: 'External Profiles',
      type: 'object',
      group: 'extended',
      fields: [
        { name: 'googleScholar', title: 'Google Scholar', type: 'url' },
        { name: 'orcid', title: 'ORCID iD', type: 'url' },
        { name: 'researchGate', title: 'ResearchGate', type: 'url' },
        { name: 'linkedIn', title: 'LinkedIn', type: 'url' },
      ]
    }),

    // 6. Administrative / System Fields
    defineField({ name: 'isActive', title: 'Is Active', type: 'boolean', group: 'system', initialValue: true }),
    defineField({ name: 'displayOrder', title: 'Display Order', type: 'number', group: 'system', initialValue: 0 }),
  ],
});
