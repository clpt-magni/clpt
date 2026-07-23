import ProcedureClient from "./ProcedureClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Procedure | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Complete details on Procedure, rules, procedures, and criteria for pharmacy admissions at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <ProcedureClient />;
}
