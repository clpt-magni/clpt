import IdpClient from "./IdpClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Idp | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Learn more about the Idp guidelines, schedules, and academic quality assurance at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <IdpClient />;
}
