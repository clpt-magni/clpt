import { getAcademicCalendars } from "@/lib/sanity-actions";
import AcademicCalendarClient from "./AcademicCalendarClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Calendar | Chalapathi Institute of Pharmaceutical Sciences",
  description: "Access institutional academic calendars, semester plans, and schedules at Chalapathi Institute of Pharmaceutical Sciences, Guntur.",
  alternates: {
    canonical: "/academic-calendar",
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AcademicCalendarPage() {
  const calendars = await getAcademicCalendars();
  return <AcademicCalendarClient initialCalendars={calendars || []} />;
}
