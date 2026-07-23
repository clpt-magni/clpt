import CommitteesClient from "./CommitteesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Committees | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Learn more about the Committees guidelines, schedules, and academic quality assurance at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <CommitteesClient />;
}
