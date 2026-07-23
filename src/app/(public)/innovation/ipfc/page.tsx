import IpfcClient from "./IpfcClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ipfc | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Ipfc at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur. Find details, facilities, and academic information.",
};

export default function Page() {
  return <IpfcClient />;
}
