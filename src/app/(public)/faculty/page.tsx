"use client";

import { useState, useEffect, useMemo } from "react";
import { Search, Filter, User, SlidersHorizontal, ArrowUp } from "lucide-react";
import { getFaculty } from "@/lib/sanity-actions";
import FacultyCard, { FacultyMember } from "@/components/faculty/FacultyCard";

/**
 * GROQ Query for Faculty Directory
 * 
 * *[_type == "faculty"] | order(name asc) {
 *   _id,
 *   name,
 *   prefix,
 *   slug,
 *   designation,
 *   department,
 *   email,
 *   image
 * }
 */

const DEPARTMENTS = [
  "All Departments",
  "Pharmaceutics",
  "Pharmaceutical Chemistry",
  "Pharmacology",
  "Pharmacognosy",
  "Pharmaceutical Analysis",
  "Pharmacy Practice",
  "Regulatory Affairs",
  "Industrial Pharmacy",
  "Quality Assurance (QA)",
  "Pharmaceutical Biotechnology",
  "Human Anatomy and Physiology",
  "Mathematics and Biostatistics",
  "Computer Applications / IT",
  "Environmental Sciences",
];

const DESIGNATIONS = [
  "All Designations",
  "Head of Department (HOD)",
  "Professor",
  "Associate Professor",
  "Assistant Professor",
  "Senior Lecturer",
  "Lecturer",
  "Professor Emeritus",
  "Adjunct Professor",
  "Visiting Faculty",
  "Guest Lecturer",
  "Research Scientist",
  "Postdoctoral Fellow",
  "Research Associate",
  "Research Scholar / Ph.D. Candidate",
  "Teaching Assistant (TA)",
  "Librarian",
  "Assistant Librarian",
  "Placement Officer",
  "Laboratory Technician",
  "System Administrator",
];

export default function FacultyPage() {
  const [faculty, setFaculty] = useState<FacultyMember[]>([]);
  const [loading, setLoading] = useState(true);

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedDesignation, setSelectedDesignation] = useState("All Designations");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        const data = await getFaculty();
        setFaculty(data);
      } catch (error) {
        console.error("Error fetching faculty:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFacultyData();

    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Optimized Client-Side Filtering
  const filteredFaculty = useMemo(() => {
    return faculty.filter((f) => {
      const searchStr = `${f.name} ${f.designation}`.toLowerCase();
      const matchesSearch = searchStr.includes(searchQuery.toLowerCase());
      const matchesDept = selectedDept === "All Departments" || f.department === selectedDept;
      const matchesDesignation = selectedDesignation === "All Designations" || f.designation === selectedDesignation;

      return matchesSearch && matchesDept && matchesDesignation;
    });
  }, [faculty, searchQuery, selectedDept, selectedDesignation]);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. Page Header - More compact and professional */}
      <header className="bg-[#020617] pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-600/5 blur-[100px] rounded-full" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[9px] font-bold uppercase tracking-[0.2em] mb-6">
            Faculty Directory
          </span>
          <h1 className="text-3xl md:text-6xl font-bold !text-white tracking-tight mb-4 leading-tight">
            Distinguished <span className="text-blue-400">Faculty</span>
          </h1>
          <p className="!text-slate-400 text-sm md:text-lg max-w-xl mx-auto font-medium leading-relaxed">
            Academic leaders and researchers shaping the future of pharmaceutical sciences.
          </p>
        </div>
      </header>

      {/* 2. Search & Filter Bar - Compacted segments */}
      <div
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
                  {DEPARTMENTS.map(dept => (
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
                  {DESIGNATIONS.map(des => (
                    <option key={des} value={des}>{des}</option>
                  ))}
                </select>
              </div>
            </div>
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
