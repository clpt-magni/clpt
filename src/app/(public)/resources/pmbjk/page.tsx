import PmbjkClient from "./PmbjkClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pmbjk | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Pmbjk facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <PmbjkClient />;
}
