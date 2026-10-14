import HowToSelectGoodPharmacyCollegeClient from "./HowToSelectGoodPharmacyCollegeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Select a Good Pharmacy or M Pharmacy College | CLPT Guntur",
  description: "A comprehensive guide on how to choose a good B Pharmacy or M Pharmacy college in India. Evaluate PCI approval, lab infrastructure, faculty credentials, placements, and fees.",
  alternates: {
    canonical: "/how-to-select-a-good-pharmacy-college",
  },
};

export default function HowToSelectGoodPharmacyCollegePage() {
  return <HowToSelectGoodPharmacyCollegeClient />;
}
