import AdmissionsClient from "./AdmissionsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Complete details on Admissions, rules, procedures, and criteria for pharmacy admissions at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <AdmissionsClient />;
}
