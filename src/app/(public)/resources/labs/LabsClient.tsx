"use client";

import { useEffect, useState, useMemo } from "react";
import { getLaboratories } from "@/lib/sanity-actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Microscope, ArrowRight, Filter, Calculator } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";

export default function LabsClient({ initialLabs }: { initialLabs: any[] }) {
  const [labs, setLabs] = useState<any[]>(initialLabs || []);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (initialLabs && initialLabs.length > 0) {
      setLabs(initialLabs);
    }
  }, [initialLabs]);

  const filteredLabs = useMemo(() => {
    return labs.filter(lab => 
      lab.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.roomNo.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [labs, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader
        title="Research Laboratories"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Laboratories" }
        ]}
        description="Explore our world-class research facilities across 18+ specialized disciplines, featuring advanced instrumentation and modern safety protocols."
      />

      {/* 2. Advanced Search & Filter Bar */}
      <div className="sticky top-[140px] z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-md group">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search by Lab Name or Room No (e.g. 204)..."
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all outline-none font-medium text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden md:block">
                Showing {filteredLabs.length} Laboratories
              </span>
              <Button variant="outline" className="border-slate-200 rounded-xl px-6">
                <Filter size={16} className="mr-2" /> All Streams
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Labs Grid */}
      <main className="container mx-auto px-6 py-20">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-80 bg-slate-50 rounded-3xl animate-pulse" />
            ))}
          </div>
        ) : filteredLabs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredLabs.map((lab, idx) => (
                <motion.div
                  key={lab._id || idx}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative bg-white border border-slate-100 rounded-[2rem] p-4 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 flex flex-col h-full"
                >
                  {/* Visual ID */}
                  <div className="bg-slate-50 rounded-[1.5rem] p-8 mb-6 flex flex-col items-center justify-center text-center group-hover:bg-primary transition-colors duration-500 overflow-hidden relative">
                    <Microscope size={48} className="text-primary group-hover:text-white transition-colors mb-4 relative z-10" />
                    <div className="text-slate-400 group-hover:text-white/60 text-[10px] font-black uppercase tracking-widest relative z-10 transition-colors">
                      Room {lab.roomNo}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-4 pb-4 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors leading-tight">
                      {lab.name}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-500 mb-6 font-medium text-sm">
                      <Calculator size={14} className="text-slate-400" />
                      Area: {lab.area || "N/A"}
                    </div>
                    
                    <div className="mt-auto">
                      <Link href={`/resources/labs/${lab.slug?.current}`}>
                        <Button className="w-full bg-slate-900 group-hover:bg-primary py-7 rounded-2xl text-white font-bold transition-all shadow-xl shadow-slate-900/10 group-hover:shadow-primary/20">
                          View Lab Profile <ArrowRight size={18} className="ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-40 text-center bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
            <div className="max-w-md mx-auto">
              <Microscope size={48} className="mx-auto text-slate-300 mb-6" />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">No Laboratories Found</h3>
              <p className="text-slate-500 mb-8 font-medium">We couldn't find any laboratories matching your current search parameters. Try adjusting the name or room number.</p>
              <Button onClick={() => setSearchQuery("")} variant="outline" className="border-slate-300 rounded-xl px-8">Reset Search</Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
