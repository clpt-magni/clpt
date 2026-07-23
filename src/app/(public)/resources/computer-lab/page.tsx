import ComputerLabClient from "./ComputerLabClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Computer Lab | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Computer Lab facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <ComputerLabClient />;
}
