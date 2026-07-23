import IndustrialPharmacyClient from "./IndustrialPharmacyClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Pharmacy | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Industrial Pharmacy facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <IndustrialPharmacyClient />;
}
