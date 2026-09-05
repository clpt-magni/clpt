import DepartmentsClient from "./DepartmentsClient";
import { Metadata } from "next";
import { getDepartments } from "@/lib/sanity-actions";

export const metadata: Metadata = {
  title: "Departments | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Explore Departments at Chalapathi Institute of Pharmaceutical Sciences (CLPT), Guntur. Find details, facilities, and academic information.",
};

export const revalidate = 0;

export default async function Page() {
  let sanityDepartments = [];
  try {
    sanityDepartments = await getDepartments();
  } catch (err) {
    console.error("Failed to load departments from Sanity:", err);
  }

  return <DepartmentsClient initialDepartments={sanityDepartments} />;
}
