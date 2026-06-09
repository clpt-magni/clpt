"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ActivityReport } from "@/lib/activity-actions";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Printer, 
  Search,
  Filter,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  X,
  RefreshCw
} from "lucide-react";

interface ActivitiesClientProps {
  initialActivities: ActivityReport[];
}

const DEPT_ACTIVITIES = [
  { value: "awardsAchievements", label: "AWARDS-ACHIEVEMENTS" },
  { value: "certificateProgramme", label: "CERTIFICATE PROGRAMME" },
  { value: "fdp", label: "FDP (Faculty Development Programme)" },
  { value: "guestLecture", label: "GUEST LECTURE" },
  { value: "researchGrants", label: "RESEARCH GRANTS AND SPONSORED RESEARCH" },
  { value: "ssm", label: "SSM" },
  { value: "skillDevelopment", label: "SKILL DEVELOPMENT PROGRAMME" },
  { value: "wdh", label: "WDH" },
];

const CELL_ACTIVITIES = [
  { value: "alumniAssociation", label: "ALUMNI ASSOCIATION ACTIVITIES" },
  { value: "chess", label: "CHESS" },
  { value: "culturalActivities", label: "CULTURAL ACTIVITIES" },
  { value: "eagleClub", label: "EAGLE CLUB" },
  { value: "extensionActivities", label: "EXTENSION ACTIVITIES" },
  { value: "hmapActivities", label: "HMAP ACTIVITIES" },
  { value: "hmrActivities", label: "HMR ACTIVITIES" },
  { value: "iic", label: "IIC (Institution's Innovation Council)" },
  { value: "iipec", label: "IIPEC (INDUSTRY INSTITUTE PARTNERSHIP CELL)" },
  { value: "ipaLamBranch", label: "IPA-LAM BRANCH ACTIVITIES" },
  { value: "iprActivities", label: "IPR ACTIVITIES (Intellectual Property Rights)" },
  { value: "iqacActivities", label: "IQAC ACTIVITIES" },
  { value: "isporAnuStudent", label: "ISPOR ANU STUDENT CHAPTER ACTIVITIES" },
  { value: "isporAmaravathiRegional", label: "ISPOR INDIA AMARAVATHI REGIONAL CHAPTER ACTIVITIES" },
  { value: "library", label: "LIBRARY" },
  { value: "medicalCamp", label: "MEDICAL CAMP ACTIVITIES" },
  { value: "nssUnit1", label: "NSS UNIT - I ACTIVITIES" },
  { value: "nssUnit2", label: "NSS UNIT - II ACTIVITIES" },
  { value: "orientationProgramme", label: "ORIENTATION PROGRAMME" },
  { value: "pmbjakActivities", label: "PMBJAK ACTIVITIES" },
  { value: "professionalTraining", label: "PROFESSIONAL TRAINING FOR TEACHING STAFF" },
  { value: "sportsActivities", label: "SPORTS ACTIVITIES" },
  { value: "womenCellActivities", label: "WOMEN CELL ACTIVITIES" },
  { value: "yoga", label: "YOGA" },
];

const CATEGORIES_MAP: { [key: string]: string } = {
  // Department Activities
  awardsAchievements: "AWARDS-ACHIEVEMENTS",
  certificateProgramme: "CERTIFICATE PROGRAMME",
  fdp: "FDP (Faculty Development Programme)",
  guestLecture: "GUEST LECTURE",
  researchGrants: "RESEARCH GRANTS AND SPONSORED RESEARCH",
  ssm: "SSM",
  skillDevelopment: "SKILL DEVELOPMENT PROGRAMME",
  wdh: "WDH",

  // Cells & Committee Activities
  alumniAssociation: "ALUMNI ASSOCIATION ACTIVITIES",
  chess: "CHESS",
  culturalActivities: "CULTURAL ACTIVITIES",
  eagleClub: "EAGLE CLUB",
  extensionActivities: "EXTENSION ACTIVITIES",
  hmapActivities: "HMAP ACTIVITIES",
  hmrActivities: "HMR ACTIVITIES",
  iic: "IIC (Institution's Innovation Council)",
  iipec: "IIPEC (INDUSTRY INSTITUTE PARTNERSHIP CELL)",
  ipaLamBranch: "IPA-LAM BRANCH ACTIVITIES",
  iprActivities: "IPR ACTIVITIES (Intellectual Property Rights)",
  iqacActivities: "IQAC ACTIVITIES",
  isporAnuStudent: "ISPOR ANU STUDENT CHAPTER ACTIVITIES",
  isporAmaravathiRegional: "ISPOR INDIA AMARAVATHI REGIONAL CHAPTER ACTIVITIES",
  library: "LIBRARY",
  medicalCamp: "MEDICAL CAMP ACTIVITIES",
  nssUnit1: "NSS UNIT - I ACTIVITIES",
  nssUnit2: "NSS UNIT - II ACTIVITIES",
  orientationProgramme: "ORIENTATION PROGRAMME",
  pmbjakActivities: "PMBJAK ACTIVITIES",
  professionalTraining: "PROFESSIONAL TRAINING FOR TEACHING STAFF",
  sportsActivities: "SPORTS ACTIVITIES",
  womenCellActivities: "WOMEN CELL ACTIVITIES",
  yoga: "YOGA",
};

export default function ActivitiesClient({ initialActivities }: ActivitiesClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"dept" | "cell">("dept");

  const filteredActivities = useMemo(() => {
    return initialActivities.filter((act) => {
      const matchesSearch = 
        act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.organizedBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.coordinators.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.eventId.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = 
        selectedCategory === "all" || 
        selectedCategory === "all_dept" && DEPT_ACTIVITIES.some(d => d.value === act.category) ||
        selectedCategory === "all_cell" && CELL_ACTIVITIES.some(c => c.value === act.category) ||
        act.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [initialActivities, searchQuery, selectedCategory]);

  const activeCategoryLabel = useMemo(() => {
    if (selectedCategory === "all") return "All Activities";
    if (selectedCategory === "all_dept") return "All Department Activities";
    if (selectedCategory === "all_cell") return "All Cells & Committee Activities";
    return CATEGORIES_MAP[selectedCategory] || "Selected Activity";
  }, [selectedCategory]);

  return (
    <div className="space-y-8">
      
      {/* Search and Filters Control */}
      <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-6">
        
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
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
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl text-sm font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/40 focus:bg-white transition-all duration-300"
            />
          </div>

          {/* Toggle Filter Button & Admin Link */}
          <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full md:w-auto items-center justify-end">
            <button
              onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
              className={`inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl font-black text-xs uppercase tracking-widest border transition-all duration-300 ${
                isFilterPanelOpen || selectedCategory !== "all"
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Filter size={15} />
              <span>Filter Categories</span>
              {isFilterPanelOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            <Link
              href="/activities/admin"
              className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary transition-all duration-300 shadow-sm border border-slate-800"
            >
              <ShieldCheck size={16} /> Admin Portal
            </Link>
          </div>
        </div>

        {/* Selected Filter Pills/Chips */}
        {selectedCategory !== "all" && (
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Filter:</span>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/20 text-primary rounded-full text-xs font-black uppercase tracking-wider">
              <span>{activeCategoryLabel}</span>
              <button 
                onClick={() => {
                  setSelectedCategory("all");
                }}
                className="p-0.5 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
              >
                <X size={10} />
              </button>
            </div>
            
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="inline-flex items-center gap-1 text-[10px] font-black uppercase text-slate-400 hover:text-red-500 tracking-wider transition-colors"
            >
              <RefreshCw size={10} /> Reset All
            </button>
          </div>
        )}

        {/* Expandable Filter Panel */}
        <AnimatePresence>
          {isFilterPanelOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-slate-100 pt-6"
            >
              <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100">
                {/* 2 Tabs Header */}
                <div className="flex border-b border-slate-200/80 mb-6 max-w-md">
                  <button
                    onClick={() => setActiveTab("dept")}
                    className={`flex-1 pb-3 text-xs font-black uppercase tracking-widest transition-all border-b-2 text-center ${
                      activeTab === "dept"
                        ? "border-primary text-primary"
                        : "border-transparent text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    Department Activities
                  </button>
                  <button
                    onClick={() => setActiveTab("cell")}
                    className={`flex-1 pb-3 text-xs font-black uppercase tracking-widest transition-all border-b-2 text-center ${
                      activeTab === "cell"
                        ? "border-primary text-primary"
                        : "border-transparent text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    Cells & Committee Activities
                  </button>
                </div>

                {/* Tab Contents */}
                <div>
                  {activeTab === "dept" ? (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {DEPT_ACTIVITIES.map((act) => (
                          <button
                            key={act.value}
                            onClick={() => {
                              setSelectedCategory(act.value);
                              setIsFilterPanelOpen(false);
                            }}
                            className={`p-3 text-left rounded-xl text-xs font-bold transition-all border leading-tight ${
                              selectedCategory === act.value
                                ? "bg-primary/5 border-primary text-primary font-extrabold shadow-sm"
                                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            }`}
                          >
                            {act.label}
                          </button>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-slate-200/60 flex justify-end">
                        <button
                          onClick={() => {
                            setSelectedCategory("all_dept");
                            setIsFilterPanelOpen(false);
                          }}
                          className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-colors"
                        >
                          Show All Department Activities
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {CELL_ACTIVITIES.map((act) => (
                          <button
                            key={act.value}
                            onClick={() => {
                              setSelectedCategory(act.value);
                              setIsFilterPanelOpen(false);
                            }}
                            className={`p-3 text-left rounded-xl text-xs font-bold transition-all border leading-tight ${
                              selectedCategory === act.value
                                ? "bg-primary/5 border-primary text-primary font-extrabold shadow-sm"
                                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            }`}
                          >
                            {act.label}
                          </button>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-slate-200/60 flex justify-end">
                        <button
                          onClick={() => {
                            setSelectedCategory("all_cell");
                            setIsFilterPanelOpen(false);
                          }}
                          className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-colors"
                        >
                          Show All Cells & Committee Activities
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Activities Grid */}
      {filteredActivities.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <AlertCircle className="mx-auto text-slate-300" size={48} />
          <h5 className="text-lg font-black text-primary-dark uppercase">No Activities Found</h5>
          <p className="text-sm font-semibold text-slate-500 max-w-sm mx-auto">
            We couldn't find any activities matching your selected filters or search terms.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="mt-4 px-6 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all duration-300"
          >
            Clear Filters
          </button>
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
                    <span className="px-4 py-1.5 bg-primary/5 text-primary rounded-full font-black text-[9px] uppercase tracking-widest border border-primary/10 max-w-[200px] truncate" title={CATEGORIES_MAP[activity.category] || "Event"}>
                      {CATEGORIES_MAP[activity.category] || "Event"}
                    </span>

                    {/* Approval Status Badge */}
                    {activity.approvalStatus === 'approved' ? (
                      <span className="flex items-center gap-1 text-[10px] font-black uppercase text-green-600 tracking-wider shrink-0">
                        <CheckCircle2 size={12} /> Approved
                      </span>
                    ) : activity.approvalStatus === 'rejected' ? (
                      <span className="flex items-center gap-1 text-[10px] font-black uppercase text-red-600 tracking-wider shrink-0">
                        <XCircle size={12} /> Rejected
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[10px] font-black uppercase text-amber-500 tracking-wider shrink-0">
                        <AlertCircle size={12} /> Pending
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
                      Organized by: <strong className="text-slate-700 uppercase">{activity.organizedBy}</strong>
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
