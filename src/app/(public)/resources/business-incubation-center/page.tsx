import BusinessIncubationCenterClient from "./BusinessIncubationCenterClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Incubation Center | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Business Incubation Center facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <BusinessIncubationCenterClient />;
}
