import RAndDClient from "./RAndDClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "R And D | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore R And D at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur. Find details, facilities, and academic information.",
};

export default function Page() {
  return <RAndDClient />;
}
