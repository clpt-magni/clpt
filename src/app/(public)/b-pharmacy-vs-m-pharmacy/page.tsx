import BPharmacyVsMPharmacyClient from "./BPharmacyVsMPharmacyClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "B Pharmacy vs M Pharmacy: Which Course and College is Right for You? | CLPT",
  description: "Comprehensive guide comparing B Pharmacy and M Pharmacy: course duration, eligibility criteria, career opportunities, R&D scope, and choosing the best college in India.",
  alternates: {
    canonical: "/b-pharmacy-vs-m-pharmacy",
  },
};

export default function BPharmacyVsMPharmacyPage() {
  return <BPharmacyVsMPharmacyClient />;
}
