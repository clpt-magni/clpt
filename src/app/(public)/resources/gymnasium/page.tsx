import GymnasiumClient from "./GymnasiumClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gymnasium | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Gymnasium facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <GymnasiumClient />;
}
