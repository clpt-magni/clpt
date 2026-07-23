import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Departments at Chalapathi Pharmacy College Guntur",
  description: "Explore pharmacy departments at Chalapathi Institute of Pharmaceutical Sciences, Guntur offering advanced education, research, and training.",

};

export default function DepartmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
