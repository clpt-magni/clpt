import AwardsClient from "./AwardsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awards | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Read about Awards, college achievements, institutional practices, and rankings of Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <AwardsClient />;
}
