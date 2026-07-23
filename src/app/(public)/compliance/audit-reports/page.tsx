import AuditReportsClient from "./AuditReportsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit Reports | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Access official Audit Reports documents, audit reports, and regulatory approvals for Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <AuditReportsClient />;
}
