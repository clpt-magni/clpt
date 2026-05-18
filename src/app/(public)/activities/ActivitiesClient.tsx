"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ActivityReport } from "@/lib/activity-actions";
import { 
  Calendar, 
  MapPin, 
  Users, 
  FileText, 
  Printer, 
  Search,
  Filter,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  XCircle
} from "lucide-react";

interface ActivitiesClientProps {
  initialActivities: ActivityReport[];
}

const CATEGORIES_MAP: { [key: string]: string } = {
  guestLecture: "Guest Lecture / Webinar",
  seminar: "Seminar / Conference",
  fdp: "FTP / FDP",
  workshop: "Workshop / Training",
  skillDev: "Skill Development",
  iiec: "IIEC / Incubation",
  ipr: "IPR Activity",
  professionalBody: "Professional Body Chapter",
  iqac: "IQAC Activity",
};

export default function ActivitiesClient({ initialActivities }: ActivitiesClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredActivities = useMemo(() => {
    return initialActivities.filter((act) => {
      const matchesSearch = 
        act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.organizedBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.coordinators.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.eventId.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = 
        selectedCategory === "all" || act.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [initialActivities, searchQuery, selectedCategory]);

  return (
    <div className="space-y-8">
      
      {/* Search and Filters Control */}
      <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-center justify-between">
        
        {/* Search Input */}
        <div className="relative w-full md:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search by Title, Coordinator, Event ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>

        {/* Category Dropdown & Admin Access */}
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto items-stretch sm:items-center">
          <div className="flex items-center gap-3">
            <Filter size={18} className="text-slate-400 shrink-0" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all min-w-[200px]"
            >
              <option value="all">All Categories</option>
              {Object.entries(CATEGORIES_MAP).map(([val, label]) => (
                <option key={val} value={val}>{label}</option>
              ))}
            </select>
          </div>

          <Link
            href="/activities/admin"
            className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-primary-dark text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary transition-colors"
          >
            <ShieldCheck size={16} /> Admin Portal
          </Link>
        </div>
      </div>

      {/* Activities Grid */}
      {filteredActivities.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <AlertCircle className="mx-auto text-slate-300" size={48} />
          <h5 className="text-lg font-black text-primary-dark uppercase">No Activities Found</h5>
          <p className="text-sm font-semibold text-slate-500 max-w-sm mx-auto">
            Try adjusting your search terms or selecting a different event category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity) => {
            const formattedDate = new Date(activity.startDate).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            });

            return (
              <div 
                key={activity._id} 
                className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Upper Section */}
                <div className="p-8 space-y-6">
                  
                  {/* Category and Approval Status */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="px-4 py-1.5 bg-primary/5 text-primary rounded-full font-black text-[10px] uppercase tracking-widest border border-primary/10">
                      {CATEGORIES_MAP[activity.category] || "Event"}
                    </span>

                    {/* Approval Status Badge */}
                    {activity.approvalStatus === 'approved' ? (
                      <span className="flex items-center gap-1 text-[10px] font-black uppercase text-green-600 tracking-wider">
                        <CheckCircle2 size={12} /> Approved
                      </span>
                    ) : activity.approvalStatus === 'rejected' ? (
                      <span className="flex items-center gap-1 text-[10px] font-black uppercase text-red-600 tracking-wider">
                        <XCircle size={12} /> Rejected
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[10px] font-black uppercase text-amber-500 tracking-wider">
                        <AlertCircle size={12} /> Pending Approval
                      </span>
                    )}
                  </div>

                  {/* Title & Organizer */}
                  <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">#{activity.eventId}</p>
                    <h3 className="text-lg font-black text-primary-dark group-hover:text-primary transition-colors line-clamp-2 uppercase">
                      {activity.title}
                    </h3>
                    <p className="text-xs font-bold text-slate-500">
                      Organized by: <strong className="text-slate-700">{activity.organizedBy}</strong>
                    </p>
                  </div>

                  {/* Details block */}
                  <div className="pt-4 border-t border-slate-50 space-y-3">
                    <div className="flex items-center gap-3 text-slate-600 text-xs font-semibold">
                      <Calendar size={15} className="text-slate-400 shrink-0" />
                      <span>{formattedDate}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 text-xs font-semibold">
                      <MapPin size={15} className="text-slate-400 shrink-0" />
                      <span className="truncate">{activity.venueMode}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 text-xs font-semibold">
                      <Users size={15} className="text-slate-400 shrink-0" />
                      <span>{activity.studentsAttended || 0} Students & {activity.facultyAttended || 0} Faculty</span>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between rounded-b-[2.5rem]">
                  <Link
                    href={`/activities/${activity._id}`}
                    className="inline-flex items-center gap-2 text-xs font-black text-primary uppercase tracking-wider hover:text-primary-dark transition-colors"
                  >
                    View Details <ArrowRight size={14} />
                  </Link>

                  <Link
                    href={`/activities/${activity._id}/pdf`}
                    target="_blank"
                    className="p-3 bg-white border border-slate-200 text-slate-600 hover:bg-primary-dark hover:text-white rounded-2xl shadow-sm transition-all duration-300 flex items-center justify-center"
                    title="Generate PDF Report"
                  >
                    <Printer size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
