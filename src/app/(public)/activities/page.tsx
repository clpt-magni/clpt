import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { getActivities, getAttendedActivities } from "@/lib/activity-actions";
import { getFaculty } from "@/lib/sanity-actions";
import { PageHeader } from "@/components/ui/PageHeader";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Briefcase, 
  FileText, 
  Download, 
  Plus, 
  Award,
  Search,
  Filter
} from "lucide-react";
import ActivitiesClient from "./ActivitiesClient";

export const metadata: Metadata = {
  title: "Activities at Chalapathi Pharmacy College Guntur",
  description: "Explore academic activities, seminars, guest lectures, and student workshops at Chalapathi Institute of Pharmaceutical Sciences, Guntur.",
  alternates: {
    canonical: "/activities",
  },
};

export default async function ActivitiesPage() {
  const [activities, attendedActivities, facultyList] = await Promise.all([
    getActivities().catch(() => []),
    getAttendedActivities().catch(() => []),
    getFaculty().catch(() => [])
  ]);

  // Calculate dynamic metrics
  const totalEvents = activities.length;
  const totalStudents = activities.reduce((acc, act) => acc + (act.studentsAttended || 0), 0);
  const totalFaculty = activities.reduce((acc, act) => acc + (act.facultyAttended || 0), 0);
  const approvedEvents = activities.filter(act => act.approvalStatus === 'approved').length;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <PageHeader
        title="Institutional Activities & Event Registry"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Activities" }
        ]}
        description="Comprehensive register of all guest lectures, conferences, seminars, skill developments, FDPs, and IQAC operations at Chalapathi Institute of Pharmaceutical Sciences."
      />

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-6">
              <div className="p-4 bg-primary/5 text-primary rounded-2xl">
                <Calendar size={32} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Events</p>
                <h4 className="text-3xl font-black text-primary-dark">{totalEvents}</h4>
              </div>
            </div>

            <div className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-6">
              <div className="p-4 bg-secondary/10 text-secondary rounded-2xl">
                <Users size={32} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Students Trained</p>
                <h4 className="text-3xl font-black text-primary-dark">{totalStudents}+</h4>
              </div>
            </div>

            <div className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-6">
              <div className="p-4 bg-green-500/5 text-green-600 rounded-2xl">
                <Award size={32} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Faculty Attendees</p>
                <h4 className="text-3xl font-black text-primary-dark">{totalFaculty}+</h4>
              </div>
            </div>

            <div className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-6">
              <div className="p-4 bg-purple-500/5 text-purple-600 rounded-2xl">
                <Briefcase size={32} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Approved Reports</p>
                <h4 className="text-3xl font-black text-primary-dark">{approvedEvents} / {totalEvents}</h4>
              </div>
            </div>
          </div>

          {/* Interactive Client Component for Search, Filters, and Cards */}
          <ActivitiesClient 
            initialActivities={activities} 
            initialAttendedActivities={attendedActivities}
            facultyList={facultyList}
          />

        </div>
      </section>
    </div>
  );
}
