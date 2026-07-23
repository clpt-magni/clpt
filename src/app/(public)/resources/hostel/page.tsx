import HostelClient from "./HostelClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hostel | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Hostel facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <HostelClient />;
}
