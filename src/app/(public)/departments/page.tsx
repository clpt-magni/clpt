import DepartmentsClient from "./DepartmentsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Departments | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Departments at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur. Find details, facilities, and academic information.",
};

export default function Page() {
  return <DepartmentsClient />;
}
