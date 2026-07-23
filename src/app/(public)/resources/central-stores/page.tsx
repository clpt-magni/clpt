import CentralStoresClient from "./CentralStoresClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Central Stores | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Central Stores facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <CentralStoresClient />;
}
