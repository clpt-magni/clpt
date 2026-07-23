import SimulationLaboratoryClient from "./SimulationLaboratoryClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulation Laboratory | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Simulation Laboratory facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <SimulationLaboratoryClient />;
}
