import AicteReportsClient from "./AicteReportsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aicte Reports | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Access official Aicte Reports documents, audit reports, and regulatory approvals for Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <AicteReportsClient />;
}
