import PciApprovalClient from "./PciApprovalClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pci Approval | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Access official Pci Approval documents, audit reports, and regulatory approvals for Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <PciApprovalClient />;
}
