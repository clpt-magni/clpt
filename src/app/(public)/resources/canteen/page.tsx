import CanteenClient from "./CanteenClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canteen | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Canteen facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <CanteenClient />;
}
