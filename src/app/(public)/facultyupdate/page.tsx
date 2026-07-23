import FacultyupdateClient from "./FacultyupdateClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facultyupdate | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Facultyupdate at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur. Find details, facilities, and academic information.",
};

export default function Page() {
  return <FacultyupdateClient />;
}
