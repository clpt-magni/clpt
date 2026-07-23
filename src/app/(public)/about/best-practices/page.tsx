import BestPracticesClient from "./BestPracticesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Practices | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Read about Best Practices, college achievements, institutional practices, and rankings of Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <BestPracticesClient />;
}
