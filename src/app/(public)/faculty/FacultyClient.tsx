"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Filter, User, SlidersHorizontal, ArrowUp } from "lucide-react";
import Link from "next/link";
import { getFaculty } from "@/lib/sanity-actions";
import FacultyCard, { FacultyMember } from "@/components/faculty/FacultyCard";
import { PageHeader } from "@/components/ui/PageHeader";

function findMatchingDepartment(queryDept: string, availableDepts: string[]): string {
  if (!queryDept || queryDept === "All Departments") return "All Departments";
  const normalized = queryDept.trim().toLowerCase();

  const exact = availableDepts.find((d) => d.toLowerCase() === normalized);
  if (exact) return exact;

  const startsWith = availableDepts.find((d) => d.toLowerCase().startsWith(normalized));
  if (startsWith) return startsWith;

  const contains = availableDepts.find((d) => d.toLowerCase().includes(normalized));
  if (contains) return contains;

  return "All Departments";
}

export default function FacultyClient({ 
  initialFaculty,
  initialDepartment = ""
}: { 
  initialFaculty: FacultyMember[];
  initialDepartment?: string;
}) {
  const searchParams = useSearchParams();
  const [faculty, setFaculty] = useState<FacultyMember[]>(initialFaculty || []);
  const [loading, setLoading] = useState(false);

  // Dynamically extract unique departments from the faculty list
  const departmentsList = useMemo(() => {
    const depts = new Set<string>();
    faculty.forEach((f) => {
      if (f.department) {
        depts.add(f.department.trim());
      }
    });
    return ["All Departments", ...Array.from(depts).sort()];
  }, [faculty]);

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedDesignation, setSelectedDesignation] = useState("All Designations");
  const [isSticky, setIsSticky] = useState(false);

  // Sync selectedDept when URL department query parameter changes
  useEffect(() => {
    const deptQuery = searchParams?.get("department") || searchParams?.get("dept") || initialDepartment;
    if (deptQuery && departmentsList.length > 1) {
      const matched = findMatchingDepartment(deptQuery, departmentsList);
      if (matched && matched !== "All Departments") {
        setSelectedDept(matched);
      }
    }
  }, [searchParams, initialDepartment, departmentsList]);

  // Dynamically extract unique individual designations from the faculty list
  const designationsList = useMemo(() => {
    const desigs = new Set<string>();
    faculty.forEach((f) => {
      if (f.designation) {
        f.designation.split(',').forEach((d) => {
          const trimmed = d.trim();
          if (trimmed) {
            desigs.add(trimmed);
          }
        });
      }
    });
    return ["All Designations", ...Array.from(desigs).sort()];
  }, [faculty]);

  // Helper to categorize faculty into seniority tiers:
  // Tier 1: Principal & Dean (always on top)
  // Tier 2: Head of Department (HOD)
  // Tier 3: All other faculty members
  const getFacultyRoleTier = (member: FacultyMember): number => {
    const desig = (member.designation || "").toLowerCase();
    if (desig.includes("principal") || desig.includes("dean")) return 1;
    if (desig.includes("head of department") || desig.includes("hod")) return 2;
    return 3;
  };

  // Helper to get numeric timestamp for dateOfJoining (earlier joining date = higher seniority)
  const getJoiningTimestamp = (dateStr?: string): number => {
    if (!dateStr) return Number.MAX_SAFE_INTEGER;
    const time = new Date(dateStr).getTime();
    return isNaN(time) ? Number.MAX_SAFE_INTEGER : time;
  };

  useEffect(() => {
    // Sync initial fetched server data
    if (initialFaculty && initialFaculty.length > 0) {
      setFaculty(initialFaculty);
    }
    
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialFaculty]);

  // Optimized Client-Side Filtering & Sorting
  const filteredFaculty = useMemo(() => {
    const filtered = faculty.filter((f) => {
      const searchStr = `${f.name} ${f.designation}`.toLowerCase();
      const matchesSearch = searchStr.includes(searchQuery.toLowerCase());
      const matchesDept = 
        selectedDept === "All Departments" || 
        f.department === selectedDept ||
        (f.department && selectedDept && (
          f.department.toLowerCase().startsWith(selectedDept.toLowerCase()) ||
          selectedDept.toLowerCase().startsWith(f.department.toLowerCase())
        ));
      const matchesDesignation = selectedDesignation === "All Designations" || 
        (f.designation && f.designation.split(',').map(d => d.trim().toLowerCase()).includes(selectedDesignation.toLowerCase()));

      return matchesSearch && matchesDept && matchesDesignation;
    });

    // Sort order:
    // 1. Principal always on top (Tier 1)
    // 2. Next Head of Department / HOD (Tier 2)
    // 3. Faculty members sorted by date of joining (Tier 3 - earlier dates first)
    return filtered.sort((a, b) => {
      const tierA = getFacultyRoleTier(a);
      const tierB = getFacultyRoleTier(b);

      if (tierA !== tierB) {
        return tierA - tierB;
      }

      // Within the same tier (e.g. among HODs or among faculty):
      const dateA = getJoiningTimestamp(a.dateOfJoining);
      const dateB = getJoiningTimestamp(b.dateOfJoining);

      if (dateA !== dateB) {
        return dateA - dateB;
      }

      // Fallback: alphabetical by name
      return a.name.localeCompare(b.name);
    });
  }, [faculty, searchQuery, selectedDept, selectedDesignation]);

  return (
    <div className="min-h-screen bg-white font-sans">
      <PageHeader
        title="Distinguished Faculty"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Faculty Directory" }
        ]}
        description="Academic leaders and researchers shaping the future of pharmaceutical sciences."
      />

      {/* 2. Search & Filter Bar - Compacted segments */}
      <div
        id="faculty-directory"
        className={`z-40 transition-all duration-500 relative md:sticky md:top-[145px] ${isSticky
          ? "py-2 md:bg-white/95 md:backdrop-blur-md md:shadow-lg border-b border-slate-200 bg-white"
          : "py-4 bg-white border-b border-slate-100"
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
            {/* Search Input */}
            <div className="relative w-full lg:max-w-md group">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"
              />
              <input
                type="text"
                placeholder="Search faculty..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600/20 focus:bg-white transition-all text-sm font-medium text-slate-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 w-full lg:w-auto">
              <div className="relative w-full sm:w-56">
                <SlidersHorizontal size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <select
                  className="w-full pl-8 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600/20 focus:bg-white appearance-none cursor-pointer text-[11px] font-bold text-slate-700 tracking-tight"
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                >
                  {departmentsList.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div className="relative w-full sm:w-56">
                <Filter size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <select
                  className="w-full pl-8 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600/20 focus:bg-white appearance-none cursor-pointer text-[11px] font-bold text-slate-700 tracking-tight"
                  value={selectedDesignation}
                  onChange={(e) => setSelectedDesignation(e.target.value)}
                >
                  {designationsList.map(des => (
                    <option key={des} value={des}>{des}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Faculty Portal Admin Option */}
            <Link
              href="/facultyupdate"
              className="lg:ml-auto w-full lg:w-auto px-5 py-2.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary transition-all flex items-center justify-center gap-2 shadow-sm border border-slate-800"
            >
              <User size={13} />
              <span>Faculty Portal</span>
            </Link>
          </div>

          {/* Result Count Indicator */}
          {!loading && (
            <div className="flex items-center justify-center gap-3 mt-3">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                {filteredFaculty.length} Results
              </p>
              {(searchQuery || selectedDept !== "All Departments" || selectedDesignation !== "All Designations") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedDept("All Departments");
                    setSelectedDesignation("All Designations");
                  }}
                  className="text-[9px] font-black text-blue-600 uppercase tracking-tighter hover:underline underline-offset-2"
                >
                  Reset
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 3. Main Directory Grid */}
      <main className="container mx-auto px-6 py-12 md:py-20">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-slate-50 animate-pulse rounded-2xl border border-slate-100" />
            ))}
          </div>
        ) : filteredFaculty.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
            {filteredFaculty.map((member) => (
              <FacultyCard key={member._id} faculty={member} />
            ))}
          </div>
        ) : (
          <div className="py-40 text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-100 shadow-inner">
              <User size={36} className="text-slate-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">No faculty members found</h3>
            <p className="text-slate-500 max-w-sm mx-auto text-sm leading-relaxed">
              We couldn&apos;t find any records matching your current filter criteria. Try adjusting your search term or selecting &quot;All Departments&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDept("All Departments");
                setSelectedDesignation("All Designations");
              }}
              className="mt-10 px-8 py-3 bg-slate-950 text-white text-[11px] font-bold uppercase tracking-widest rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Floating Scroll to Top */}
      {isSticky && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-10 right-10 w-14 h-14 bg-slate-950 text-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center hover:bg-blue-600 hover:-translate-y-2 transition-all duration-500 z-[60] group"
        >
          <ArrowUp size={24} className="group-hover:scale-110 transition-transform" />
        </button>
      )}
    </div>
  );
}
