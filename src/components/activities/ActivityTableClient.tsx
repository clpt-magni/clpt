"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  MapPin, 
  Users, 
  ChevronRight, 
  Filter,
  Calendar,
  XCircle,
  TrendingUp,
  LayoutGrid,
  ArrowRight,
  Eye,
  ChevronDown
} from "lucide-react";

interface Activity {
  id: string;
  title?: string;
  name?: string;
  slug: string;
  date: string;
  place: string;
  participants: string;
  beneficiaries: string;
}

interface ActivityTableClientProps {
  activities: Activity[];
  chapterSlug: string;
}

export default function ActivityTableClient({ activities, chapterSlug }: ActivityTableClientProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("All Years");

  // 1. Extract Unique Years for Filter
  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(activities.map(a => {
      const parts = a.date.split('-');
      return parts[parts.length - 1].trim(); 
    })));
    return ["All Years", ...uniqueYears.sort((a, b) => b.localeCompare(a))];
  }, [activities]);

  // 2. Sorting Logic: Recent First
  const sortedActivities = useMemo(() => {
    const parseDate = (dateStr: string) => {
      // Handles both DD-MM-YYYY and range like "01-08-2024 to 07-08-2024"
      // If it's a range, take the end date for sorting
      const cleanDate = dateStr.includes(" to ") ? dateStr.split(" to ")[1] : dateStr;
      const parts = cleanDate.split('-').map(Number);
      if (parts.length === 3) {
        const [d, m, y] = parts;
        return new Date(y, m - 1, d).getTime();
      }
      return 0; // Fallback for invalid dates
    };

    return [...activities].sort((a, b) => parseDate(b.date) - parseDate(a.date));
  }, [activities]);

  // 3. Filter Logic
  const filteredActivities = useMemo(() => {
    return sortedActivities.filter((activity) => {
      const activityTitle = (activity.title || activity.name || "").toLowerCase();
      const activityPlace = (activity.place || "").toLowerCase();
      const matchesSearch = activityTitle.includes(searchQuery.toLowerCase()) || 
                            activityPlace.includes(searchQuery.toLowerCase());
      
      const activityYear = activity.date.split('-').pop()?.trim() || "";
      const matchesYear = selectedYear === "All Years" || activityYear === selectedYear;
      
      return matchesSearch && matchesYear;
    });
  }, [sortedActivities, searchQuery, selectedYear]);

  // 4. Stats calculation
  const totalBeneficiaries = useMemo(() => {
    return filteredActivities.reduce((acc, curr) => {
      const count = parseInt(curr.beneficiaries.replace(/[^0-9]/g, "")) || 0;
      return acc + count;
    }, 0);
  }, [filteredActivities]);

  const handleNavigation = (activitySlug: string) => {
    router.push(`/extension-activities/${chapterSlug}/${activitySlug}`);
  };

  return (
    <div className="space-y-12">
      {/* --- Performance Metrics Dashboard --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/40 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <LayoutGrid size={48} className="text-blue-600" />
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Total Activities</div>
          <div className="text-5xl font-black text-slate-900 tracking-tight">{filteredActivities.length}</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/40 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Users size={48} className="text-blue-600" />
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Total Reach</div>
          <div className="text-5xl font-black text-slate-900 tracking-tight">
            {totalBeneficiaries.toLocaleString()}+
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-blue-600 p-8 rounded-[2.5rem] shadow-2xl shadow-blue-600/20 relative overflow-hidden text-white"
        >
          <div className="absolute top-0 right-0 p-6 opacity-20">
            <Calendar size={48} />
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-4">Current Filter</div>
          <div className="text-3xl font-black tracking-tight">{selectedYear}</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] shadow-sm relative overflow-hidden group"
        >
           <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Institutional Impact</div>
           <div className="text-lg font-black text-slate-900 leading-tight">Focusing on Excellence</div>
           <div className="mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
             <TrendingUp size={12} className="text-blue-600" /> Community Service
           </div>
        </motion.div>
      </div>

      {/* --- Filter Bar --- */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="relative flex-grow w-full">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search activities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-16 pl-16 pr-8 bg-slate-50 border border-slate-100 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all font-medium text-slate-700 shadow-sm"
          />
        </div>
        
        <div className="relative w-full md:w-64">
           <Filter className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
           <select 
             value={selectedYear}
             onChange={(e) => setSelectedYear(e.target.value)}
             className="w-full h-16 pl-16 pr-12 bg-slate-50 border border-slate-100 rounded-3xl outline-none appearance-none cursor-pointer focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all font-bold text-[10px] font-black uppercase tracking-widest text-slate-500 shadow-sm"
           >
             {years.map(year => (
               <option key={year} value={year}>{year}</option>
             ))}
           </select>
           <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
        </div>

        {(searchQuery || selectedYear !== "All Years") && (
          <button 
            onClick={() => { setSearchQuery(""); setSelectedYear("All Years"); }}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors px-4"
          >
            <XCircle size={14} /> Clear
          </button>
        )}
      </div>

      {/* --- Desktop View: Table Header --- */}
      <div className="hidden md:block overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/40 bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap w-24">S.NO</th>
              <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap w-32">DATE</th>
              <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">ACTIVITY</th>
              <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">LOCATION</th>
              <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap w-32 text-center">BENEFICIARIES</th>
              <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap w-20">VIEW</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filteredActivities.map((item, index) => (
              <tr 
                key={item.id || index}
                className="group cursor-pointer hover:bg-blue-50/50 transition-all duration-300"
                onClick={() => handleNavigation(item.slug)}
              >
                <td className="p-8 text-xs font-black text-slate-400 group-hover:text-blue-600">{index + 1}</td>
                <td className="p-8 text-xs font-bold text-slate-900">{item.date}</td>
                <td className="p-8">
                  <div className="text-xs font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title || item.name}
                  </div>
                </td>
                <td className="p-8">
                  <div className="text-xs font-bold text-slate-600 flex items-center gap-2">
                    <MapPin size={14} className="text-blue-600" /> {item.place}
                  </div>
                </td>
                <td className="p-8 text-center text-xs font-bold text-slate-900">{item.beneficiaries}</td>
                <td className="p-8 text-center">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Eye size={18} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody >
        </table>
      </div>

      {/* --- Mobile View: Card Style --- */}
      <div className="md:hidden space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredActivities.map((item, index) => (
            <motion.div
              layout
              key={item.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-xl shadow-slate-200/40 relative overflow-hidden active:scale-95 transition-all cursor-pointer group"
              onClick={() => handleNavigation(item.slug)}
            >
              <div className="flex justify-between items-start mb-6">
                 <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.date}</div>
                 <div className="w-10 h-10 bg-blue-50 text-blue-400 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                   <Eye size={18} />
                 </div>
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">{item.title || item.name}</h3>
              <div className="space-y-4">
                 <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                    <MapPin size={14} className="text-blue-600" /> {item.place}
                 </div>
                 <div className="flex items-center gap-3 text-xs font-bold text-slate-900 border-t border-slate-50 pt-4">
                    <Users size={14} className="text-blue-600" /> Beneficiaries: {item.beneficiaries}
                 </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredActivities.length === 0 && (
        <div className="p-20 text-center bg-white border border-slate-100 rounded-[3rem] shadow-sm">
          <Search size={48} className="text-slate-100 mx-auto mb-6" />
          <div className="text-lg font-black text-slate-900 mb-2">No activities found</div>
          <p className="text-xs text-slate-500 font-medium">Try different search terms or select another year.</p>
        </div>
      )}
    </div>
  );
}
