import RecreationCentreClient from "./RecreationCentreClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recreation Centre | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Recreation Centre facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <RecreationCentreClient />;
}
