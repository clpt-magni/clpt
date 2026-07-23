import RtiClient from "./RtiClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rti | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Access official Rti documents, audit reports, and regulatory approvals for Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <RtiClient />;
}
