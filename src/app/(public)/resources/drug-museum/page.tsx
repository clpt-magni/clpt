import DrugMuseumClient from "./DrugMuseumClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drug Museum | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Drug Museum facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <DrugMuseumClient />;
}
