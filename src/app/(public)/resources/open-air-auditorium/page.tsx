import OpenAirAuditoriumClient from "./OpenAirAuditoriumClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Air Auditorium | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Open Air Auditorium facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <OpenAirAuditoriumClient />;
}
