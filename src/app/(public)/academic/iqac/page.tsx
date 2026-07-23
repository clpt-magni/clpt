import IqacClient from "./IqacClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iqac | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Learn more about the Iqac guidelines, schedules, and academic quality assurance at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <IqacClient />;
}
