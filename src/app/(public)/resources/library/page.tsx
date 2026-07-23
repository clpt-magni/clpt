import LibraryClient from "./LibraryClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Library facilities, infrastructure, and student resources at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur.",
};

export default function Page() {
  return <LibraryClient />;
}
