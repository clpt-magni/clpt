import BPharmaCollegesClient from "./BPharmaCollegesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Admission Guide for B.Pharmacy Colleges in AP | CLPT Guntur",
  description: "Explore the B.Pharmacy admission process in AP, including eligibility criteria, AP EAPCET entrance exam, counseling, required documents, and seat allotment.",
  alternates: {
    canonical: "/b-pharma-colleges-in-ap",
  },
};

export default function BPharmaAdmissionsPage() {
  return <BPharmaCollegesClient />;
}
