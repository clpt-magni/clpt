import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location of Chalapathi Pharmacy College Guntur",
  description: "Find the location and campus directions of Chalapathi Institute of Pharmaceutical Sciences, Guntur with easy access information.",
  alternates: {
    canonical: "/location",
  },
};

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
