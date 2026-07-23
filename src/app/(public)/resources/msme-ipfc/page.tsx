import MsmeIpfcClient from "./MsmeIpfcClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Msme Ipfc | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Msme Ipfc facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <MsmeIpfcClient />;
}
