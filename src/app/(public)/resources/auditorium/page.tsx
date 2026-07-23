import AuditoriumClient from "./AuditoriumClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auditorium | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Auditorium facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <AuditoriumClient />;
}
