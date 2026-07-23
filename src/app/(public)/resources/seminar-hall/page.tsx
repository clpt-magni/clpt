import SeminarHallClient from "./SeminarHallClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seminar Hall | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Seminar Hall facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <SeminarHallClient />;
}
