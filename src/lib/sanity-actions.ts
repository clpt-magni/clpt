import { client } from "../../sanity/sanity.client";

export async function getNotices() {
  return await client.fetch(`*[_type == "notice"] | order(date desc)`);
}

export async function getFaculty() {
  return await client.fetch(`*[_type == "faculty"] | order(name asc)`);
}

export async function getFacultyBySlug(slug: string) {
  return await client.fetch(`*[_type == "faculty" && slug.current == $slug][0]`, { slug });
}

export async function getGallery() {
  return await client.fetch(`*[_type == "gallery"]`);
}

export async function getNews() {
  return await client.fetch(`*[_type == "news"] | order(date desc)`);
}

export async function getEvents() {
  return await client.fetch(`*[_type == "event"] | order(date asc)`);
}

export async function getLibraryResources() {
  return await client.fetch(`*[_type == "library"] {
    ...,
    "fileUrl": file.asset->url
  } | order(category asc, title asc)`);
}

export async function getPrograms() {
  return await client.fetch(`*[_type == "program"] | order(type asc, title asc)`);
}

export async function getProgramBySlug(slug: string) {
  return await client.fetch(`*[_type == "program" && slug.current == $slug][0]`, { slug });
}

export async function getAcademicCalendars() {
  return await client.fetch(`*[_type == "academicCalendar"] | order(academicYear desc) {
    ...,
    "pdfUrl": pdfFile.asset->url
  }`);
}

export async function getLaboratories() {
  return await client.fetch(`*[_type == "laboratory"] | order(roomNo asc)`);
}

export async function getLaboratoryBySlug(slug: string) {
  return await client.fetch(`*[_type == "laboratory" && slug.current == $slug][0] {
    ...,
    "manualUrl": manual.asset->url,
    "images": gallery[].asset->url
  }`, { slug });
}

export async function getInstitutionalBodyBySlug(slug: string) {
  return await client.fetch(`*[_type == "institutionalBody" && slug.current == $slug][0] {
    title,
    summary,
    membersList,
    description,
    term,
    "membersFileUrl": membersFile.asset->url,
    meetingCategories[] {
      ...,
      meetings[] {
        ...,
        "fileUrl": meetingFile.asset->url
      }
    }
  }`, { slug });
}

export async function getAffiliations() {
  return await client.fetch(`*[_type == "affiliation"][0] {
    ...,
    approvals[] {
      ...,
      "fileUrl": document.asset->url
    }
  }`);
}
