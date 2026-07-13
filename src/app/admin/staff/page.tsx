import { permanentRedirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chalapathi Institute of Pharmaceutical Sciences, Guntur",
  description: "Explore courses, admissions, placements, research, and campus facilities at Chalapathi Institute of Pharmaceutical Sciences, Guntur.",
  alternates: {
    canonical: "/",
  },
};

export default function AdminStaffPage() {
  permanentRedirect("/");
}
