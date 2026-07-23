import SportsFacilitiesClient from "./SportsFacilitiesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Facilities | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Sports Facilities facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <SportsFacilitiesClient />;
}
