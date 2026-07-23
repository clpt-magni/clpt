import MoocsClient from "./MoocsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moocs | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Moocs at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur. Find details, facilities, and academic information.",
};

export default function Page() {
  return <MoocsClient />;
}
