import ConspectusClient from "./ConspectusClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conspectus | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Conspectus at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur. Find details, facilities, and academic information.",
};

export default function Page() {
  return <ConspectusClient />;
}
