import BestPharmacyCollegeClient from "./BestPharmacyCollegeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choosing the Best Pharmacy College Matters for a Successful Career",
  description: "Discover why choosing the best pharmacy college matters for career success through quality education, industry exposure, research, and placement support at CLPT Guntur.",
  alternates: {
    canonical: "/best-pharmacy-college",
  },
};

export default function BestPharmacyCollegePage() {
  return <BestPharmacyCollegeClient />;
}
