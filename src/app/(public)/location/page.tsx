import LocationClient from "./LocationClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Location at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur. Find details, facilities, and academic information.",
};

export default function Page() {
  return <LocationClient />;
}
