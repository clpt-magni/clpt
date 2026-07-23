import OtherFacilitiesClient from "./OtherFacilitiesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Facilities | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Other Facilities facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <OtherFacilitiesClient />;
}
