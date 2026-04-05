import { getInstitutionalBodyBySlug } from "@/lib/sanity-actions";
import InstitutionalBodyClient from "@/components/about/InstitutionalBodyClient";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function InstitutionalBodyPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Protect existing landing pages or others if they are handled here
  // But Next.js prioritizing folders usually avoids this.
  
  const data = await getInstitutionalBodyBySlug(slug);

  if (!data) {
    notFound();
  }

  return <InstitutionalBodyClient data={data} />;
}
