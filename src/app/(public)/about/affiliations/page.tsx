import { getAffiliations } from "@/lib/sanity-actions";
import AffiliationsClient from "@/components/about/AffiliationsClient";

export default async function AffiliationsPage() {
  const data = await getAffiliations();

  if (!data) {
    return (
      <div className="py-24 text-center bg-slate-50 min-h-screen pt-32">
        <h1 className="text-2xl font-bold text-slate-400 font-poppins tracking-tight">Affiliation Data Pending...</h1>
        <p className="text-slate-500 mt-2 font-medium">The migration script is currently uploading hundreds of PDF documents. Please check back in a few minutes.</p>
      </div>
    );
  }

  return <AffiliationsClient data={data} />;
}
