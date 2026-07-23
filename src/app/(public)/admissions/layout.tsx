import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions at Chalapathi Pharmacy College Guntur",
  description: "Apply for pharmacy courses at Chalapathi Institute of Pharmaceutical Sciences, Guntur. Check eligibility, admission process, and courses offered.",

};

export default function AdmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
