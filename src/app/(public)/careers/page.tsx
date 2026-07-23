import CareersClient from "./CareersClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Careers at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur. Find details, facilities, and academic information.",
};

export default function Page() {
  return <CareersClient />;
}
