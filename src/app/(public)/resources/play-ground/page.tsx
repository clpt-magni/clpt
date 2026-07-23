import PlayGroundClient from "./PlayGroundClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Play Ground | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Play Ground facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <PlayGroundClient />;
}
