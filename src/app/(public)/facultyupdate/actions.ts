"use server";

import { createClient } from "next-sanity";

// We create a client with the write token
const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-10-01',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN || process.env.SANITY_WRITE_TOKEN,
});

import { revalidatePath } from "next/cache";

export async function checkFacultyByPhone(phone: string) {
  if (!phone) return null;
  const query = `*[_type == "faculty" && phone == $phone][0]`;
  const faculty = await writeClient.fetch(query, { phone });
  return faculty;
}

export async function saveFacultyProfile(data: any, existingId?: string) {
  try {
    // Basic formatting for slug
    const slug = data.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    const doc = {
      _type: 'faculty',
      prefix: data.prefix,
      name: data.name,
      slug: { _type: 'slug', current: slug },
      designation: Array.isArray(data.designation) ? data.designation.join(', ') : data.designation,
      department: data.department,
      email: data.email,
      phone: data.phone,
      password: data.password || "Clptf@2026",
      officeLocation: data.officeLocation,
      dateOfJoining: data.dateOfJoining || undefined,
      teachingExperience: Number(data.teachingExperience) || 0,
      industryExperience: Number(data.industryExperience) || 0,
      pciRegistration: data.pciRegistration,
      
      // Qualifications
      qualifications: Array.isArray(data.qualifications) ? data.qualifications.map((q: any) => ({
        _key: q._key || crypto.randomUUID(),
        degree: q.degree || "",
        institution: q.institution || "",
        year: q.year || ""
      })) : undefined,

      // Academic Operations
      specializations: Array.isArray(data.specializations) ? data.specializations.map((s: string) => s.trim()).filter(Boolean) : [],
      subjectsUG: Array.isArray(data.subjectsUG) ? data.subjectsUG.map((s: string) => s.trim()).filter(Boolean) : [],
      subjectsPG: Array.isArray(data.subjectsPG) ? data.subjectsPG.map((s: string) => s.trim()).filter(Boolean) : [],
      researchGuideship: {
        isApproved: Boolean(data.researchGuideshipApproved),
        scholarCount: Number(data.scholarCount) || 0,
      },

      // Arrays of objects
      publications: Array.isArray(data.publications) ? data.publications.map((p: any) => ({
        _key: p._key || crypto.randomUUID(),
        title: p.title || "",
        authors: p.authors || "",
        correspondingAuthor: p.correspondingAuthor || "No",
        journal: p.journal || "",
        volume: p.volume || "",
        issue: p.issue || "",
        year: p.year || "",
        impactFactor: p.impactFactor || "",
        link: p.link || ""
      })) : undefined,
      patents: Array.isArray(data.patents) ? data.patents.map((p: any) => ({
        _key: p._key || crypto.randomUUID(),
        title: p.title || "",
        appNumber: p.appNumber || "",
        status: p.status || "Filed",
        year: p.year || ""
      })) : undefined,
      grants: Array.isArray(data.grants) ? data.grants.map((g: any) => ({
        _key: g._key || crypto.randomUUID(),
        title: g.title || "",
        agency: g.agency || "",
        amount: g.amount || "",
        status: g.status || "Ongoing"
      })) : undefined,

      // Research Metrics
      totalPublications: Number(data.totalPublications) || 0,
      booksPublished: Number(data.booksPublished) || 0,
      bookChapters: Number(data.bookChapters) || 0,
      patentsGranted: Number(data.patentsGranted) || 0,
      patentsPublished: Number(data.patentsPublished) || 0,
      phdGuided: Number(data.phdGuided) || 0,
      citations: Number(data.citations) || 0,
      hIndex: Number(data.hIndex) || 0,
      i10Index: Number(data.i10Index) || 0,

      // Social Links
      socialLinks: {
        googleScholar: data.googleScholar || undefined,
        orcid: data.orcid || undefined,
        researchGate: data.researchGate || undefined,
        linkedIn: data.linkedIn || undefined,
      },
      
      conferences: Array.isArray(data.conferences) ? data.conferences.map((s: string) => s.trim()).filter(Boolean) : [],
      awards: Array.isArray(data.awards) ? data.awards.map((s: string) => s.trim()).filter(Boolean) : [],
      memberships: Array.isArray(data.memberships) ? data.memberships.map((s: string) => s.trim()).filter(Boolean) : [],
      
      innovativeTeaching: data.innovativeTeaching ? data.innovativeTeaching.split('\n').filter((t: string) => t.trim().length > 0).map((t: string) => ({
        _key: crypto.randomUUID(),
        _type: 'block',
        children: [{ _type: 'span', text: t.trim(), _key: crypto.randomUUID() }]
      })) : undefined,

      bio: data.bio ? data.bio.split('\n').filter((t: string) => t.trim().length > 0).map((t: string) => ({
        _key: crypto.randomUUID(),
        _type: 'block',
        children: [{ _type: 'span', text: t.trim(), _key: crypto.randomUUID() }]
      })) : undefined,

      isActive: true,
    } as any;

    // Handle Image Upload
    if (data.imageBase64) {
      try {
        const base64Data = data.imageBase64.split(',')[1];
        const buffer = Buffer.from(base64Data, 'base64');
        const asset = await writeClient.assets.upload('image', buffer, {
          filename: `${slug}-profile.jpg`
        });
        doc.image = { _type: 'image', asset: { _ref: asset._id } };
      } catch (err) {
        console.error("Image upload failed:", err);
      }
    }

    if (existingId) {
      // Update existing document
      const result = await writeClient.patch(existingId).set(doc).commit();
      revalidatePath('/', 'layout');
      return { success: true, result };
    } else {
      // Create new document
      const result = await writeClient.create(doc);
      revalidatePath('/', 'layout');
      return { success: true, result };
    }
  } catch (error: any) {
    console.error("Error saving faculty:", error);
    return { success: false, error: error.message };
  }
}
