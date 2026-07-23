import UgcUndertakingClient from "./UgcUndertakingClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ugc Undertaking | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Access official Ugc Undertaking documents, audit reports, and regulatory approvals for Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <UgcUndertakingClient />;
}
