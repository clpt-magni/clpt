"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarNav, topNav, SidebarGroup, NavItem } from "@/config/navigation";
import { useState, useEffect, useMemo } from "react";
import { 
  ChevronDown, 
  ExternalLink, 
  X, 
  Layers, 
  Home, 
  Info, 
  Book, 
  Users, 
  GraduationCap, 
  Microscope, 
  ClipboardList, 
  Phone, 
  MapPin, 
  Briefcase, 
  Zap, 
  ShieldCheck, 
  Award,
  Search,
  FileText
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { flattenNavigation } from "@/lib/nav-utils";

export function SidebarNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  // Flattened navigation for search
  const allLinks = useMemo(() => flattenNavigation(topNav, sidebarNav), []);

  // Filtering logic
  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return allLinks.filter(link => 
      link.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.category.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 15);
  }, [searchQuery, allLinks]);

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] bg-[#003366] text-white p-3 rounded-l-2xl shadow-[-5px_0_15px_rgba(0,0,0,0.1)] hover:pr-6 transition-all group flex flex-col items-center gap-2"
      >
        <Layers size={24} className="group-hover:scale-110 transition-transform" />
        <span className="[writing-mode:vertical-lr] text-[10px] font-bold uppercase tracking-widest">Resources</span>
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[110]"
          />
        )}
      </AnimatePresence>

      {/* Floating Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-full max-w-sm bg-white shadow-2xl z-[120] flex flex-col border-l border-slate-100"
          >
            {/* Header Sticky */}
            <div className="sticky top-0 z-20 bg-white border-b border-slate-100 flex flex-col shadow-sm">
              <div className="p-6 flex items-center justify-between pb-4">
                <div>
                  <h3 className="text-[#003366] font-black text-xl uppercase tracking-tighter">Campus Portal</h3>
                  <p className="text-slate-400 text-[9px] uppercase font-bold tracking-[0.2em] mt-1 italic">Knowledge & Resources</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-slate-50 rounded-full transition-colors text-slate-400"
                >
                  <X size={24} />
                </button>
              </div>

              {/* AJAX Search Bar */}
              <div className="px-6 pb-6 pt-0">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#003366] transition-colors" size={16} />
                  <input 
                    type="text"
                    placeholder="Quick Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#F8F9FA] border border-slate-100 pl-11 pr-4 py-4 rounded-2xl text-sm font-bold text-slate-900 focus:outline-none focus:bg-white focus:border-[#003366]/20 transition-all placeholder:text-slate-300"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-10 custom-scrollbar pb-12">
              <AnimatePresence mode="wait">
                {searchQuery.trim() ? (
                  /* Search Results */
                  <motion.section
                    key="search-results"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#003366] mb-6 px-1">Found {filteredResults.length} Results</h4>
                    <div className="space-y-2">
                       {filteredResults.map((result, i) => (
                         <Link
                           key={i}
                           href={result.href}
                           onClick={() => setIsOpen(false)}
                           className="flex flex-col p-4 rounded-2xl bg-[#F8F9FA] hover:bg-white border border-transparent hover:border-slate-100 transition-all"
                         >
                           <span className="text-[9px] font-black uppercase text-slate-400 mb-1">{result.category}</span>
                           <span className="text-sm font-bold text-[#003366]">{result.label}</span>
                         </Link>
                       ))}
                    </div>
                  </motion.section>
                ) : (
                  /* DEFAULT CONTENT */
                  <>
                    <section>
                      <div className="space-y-4">
                        {topNav.map((item, idx) => (
                          <RecursiveNavItem key={idx} item={item} closeDrawer={() => setIsOpen(false)} pathname={pathname} defaultExpanded={false} />
                        ))}
                      </div>
                    </section>

                    <section className="space-y-8 pt-6 border-t border-slate-50">
                        {sidebarNav.map((group, idx) => (
                          <SidebarAccordion key={idx} group={group} closeDrawer={() => setIsOpen(false)} pathname={pathname} defaultOpen={true} />
                        ))}
                    </section>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="p-6 bg-[#F8F9FA] border-t border-slate-100 mt-auto shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
              <div className="flex gap-3">
                  <Link href="/contact" onClick={() => setIsOpen(false)} className="flex-1 bg-[#003366] text-white text-[10px] font-black uppercase text-center py-4 rounded-xl shadow-lg shadow-[#003366]/20 hover:scale-[1.02] transition-transform">Contact Us</Link>
                  <Link href="/location" onClick={() => setIsOpen(false)} className="flex-1 bg-white border border-slate-200 text-[#003366] text-[10px] font-black uppercase text-center py-4 rounded-xl hover:bg-slate-50 transition-colors">Locate Us</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E2E8F0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #CBD5E1;
        }
      `}</style>
    </>
  );
}

function RecursiveNavItem({ item, level = 0, closeDrawer, pathname, defaultExpanded = false }: { item: NavItem; level?: number; closeDrawer: () => void; pathname: string; defaultExpanded?: boolean }) {
  const hasSub = item.items && item.items.length > 0;
  
  // A section is "active" if its href matches EXACTLY, or if any of its children are active.
  const isDirectActive = pathname === item.href;
  const isChildActive = useMemo(() => {
    if (!hasSub) return false;
    const checkChildren = (items: NavItem[]): boolean => {
      return items.some(child => child.href === pathname || (child.items && checkChildren(child.items)));
    };
    return checkChildren(item.items!);
  }, [item.items, pathname, hasSub]);

  const [isExpanded, setIsExpanded] = useState(defaultExpanded || isChildActive);
  
  // Expand automatically if a child becomes active (e.g. on direct page navigation)
  useEffect(() => {
    if (isChildActive) setIsExpanded(true);
  }, [isChildActive]);

  return (
    <div className="w-full">
      <div className={`flex items-center justify-between rounded-2xl transition-all ${isDirectActive ? "bg-[#F4F7F9]" : "hover:bg-slate-50"}`}>
        <Link
          href={item.href}
          onClick={hasSub ? undefined : closeDrawer}
          className={`flex-grow px-4 py-3.5 text-[15px] font-bold flex items-center gap-5 ${isDirectActive ? "text-[#003366]" : "text-slate-600"}`}
        >
          {level === 0 && (
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all ${(isDirectActive || isChildActive) ? "bg-[#003366] text-white shadow-lg shadow-blue-900/20" : "bg-[#F7FAFD] text-[#003366]"}`}>
              <NavIcon label={item.label} size={18} />
            </div>
          )}
          {item.label}
        </Link>
        {hasSub && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`p-4 transition-colors ${isExpanded ? "text-[#003366]" : "text-slate-300 hover:text-[#003366]"}`}
          >
            <ChevronDown size={18} className={`transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isExpanded && hasSub && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="ml-10 pl-6 border-l border-slate-100 mt-2 space-y-1 overflow-hidden"
          >
            {item.items?.map((sub, i) => (
              <RecursiveNavItem key={i} item={sub} level={level + 1} closeDrawer={closeDrawer} pathname={pathname} defaultExpanded={defaultExpanded} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavIcon({ label, size }: { label: string; size: number }) {
  const props = { size };
  switch (label.toLowerCase()) {
    case "home": return <Home {...props} />;
    case "about us": return <Info {...props} />;
    case "admission": return <GraduationCap {...props} />;
    case "alumni": return <Users {...props} />;
    case "programmes": return <Book {...props} />;
    case "departments": return <Microscope {...props} />;
    case "resources": return <Layers {...props} />;
    case "syllabus": return <ClipboardList {...props} />;
    case "contact": return <Phone {...props} />;
    case "location": return <MapPin {...props} />;
    default: return <FileText {...props} />;
  }
}

function SidebarAccordion({ 
  group, 
  closeDrawer,
  pathname,
  defaultOpen = true
}: { 
  group: SidebarGroup; 
  closeDrawer: () => void;
  pathname: string;
  defaultOpen?: boolean;
}) {
  const isAnyChildActive = useMemo(() => {
    return group.items.some(item => {
      if (item.href === pathname) return true;
      if ('items' in item && Array.isArray(item.items)) {
        return item.items.some(sub => sub.href === pathname);
      }
      return false;
    });
  }, [group.items, pathname]);

  const [isOpen, setIsOpen] = useState(defaultOpen || isAnyChildActive);
  const Icon = group.icon;

  // Sync open state if child becomes active
  useEffect(() => {
    if (isAnyChildActive) setIsOpen(true);
  }, [isAnyChildActive]);

  return (
    <div className="bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2.5 text-left group border-b border-transparent hover:border-slate-50 transition-all"
      >
        <div className="flex items-center gap-5">
          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all ${isAnyChildActive ? "bg-[#003366] text-white shadow-xl shadow-blue-900/20" : "bg-[#F7FAFD] text-[#003366]"}`}>
            <Icon size={18} />
          </div>
          <span className={`font-black text-[12.5px] uppercase tracking-wide transition-colors ${isAnyChildActive ? "text-[#003366]" : "text-slate-400 group-hover:text-[#003366]"}`}>
            {group.category}
          </span>
        </div>
        <ChevronDown
          size={18}
          className={`text-slate-300 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <ul className="py-2 space-y-1">
              {group.items.map((item, i) => {
                const isExternal = item.href.startsWith("http");
                const isItemActive = item.href === pathname;
                
                return (
                  <li key={i}>
                    <Link
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      onClick={isExternal ? undefined : closeDrawer}
                      className={`flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-all rounded-3xl group/link ${isItemActive ? "bg-[#F4F7F9]" : "bg-white"}`}
                    >
                      <span className={`text-[12px] font-black uppercase tracking-tight transition-colors ${isItemActive ? "text-[#003366]" : "text-slate-500 group-hover/link:text-[#003366]"}`}>
                        {item.label}
                      </span>
                      <div className={`w-1.5 h-1.5 rounded-full transition-all ${isItemActive ? "bg-[#003366] scale-125" : "bg-slate-200"}`} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
