import RulesClient from "./RulesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rules | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Complete details on Rules, rules, procedures, and criteria for pharmacy admissions at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <RulesClient />;
}
