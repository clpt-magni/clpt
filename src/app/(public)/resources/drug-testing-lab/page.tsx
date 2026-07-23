import DrugTestingLabClient from "./DrugTestingLabClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drug Testing Lab | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Drug Testing Lab facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <DrugTestingLabClient />;
}
