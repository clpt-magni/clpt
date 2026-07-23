import SupportClient from "./SupportClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Support at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur. Find details, facilities, and academic information.",
};

export default function Page() {
  return <SupportClient />;
}
