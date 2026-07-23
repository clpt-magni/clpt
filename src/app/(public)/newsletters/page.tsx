import NewslettersClient from "./NewslettersClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletters | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Newsletters at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur. Find details, facilities, and academic information.",
};

export default function Page() {
  return <NewslettersClient />;
}
