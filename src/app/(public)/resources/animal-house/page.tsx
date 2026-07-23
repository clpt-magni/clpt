import AnimalHouseClient from "./AnimalHouseClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animal House | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Animal House facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <AnimalHouseClient />;
}
