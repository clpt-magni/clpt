"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Download, FileText, BookOpen, X, Maximize2, ChevronRight } from "lucide-react";
import { useUser, SignIn } from "@clerk/nextjs";
import { getLibraryResources } from "@/lib/sanity-actions";
import { Button } from "@/components/ui/button";

interface LibraryResource {
  _id: string;
  title: string;
  category: string;
  fileUrl: string;
  author?: string;
  tags?: string[];
}

export default function LibraryPage() {
  const { user } = useUser();
  const [resources, setResources] = useState<LibraryResource[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewingPdf, setViewingPdf] = useState<LibraryResource | null>(null);

  useEffect(() => {
    fetchResources();
  }, []);

  async function fetchResources() {
    try {
      setLoading(true);
      const data = await getLibraryResources();
      setResources(data || []);
    } catch (error: any) {
      console.error('Error fetching library:', error.message);
    } finally {
      setLoading(false);
    }
  }

  // Calculate category counts for the sidebar
  const categoryCounts = resources.reduce((acc, res) => {
    acc[res.category] = (acc[res.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = ["All", ...Object.keys(categoryCounts).sort()];

  const filteredResources = resources.filter(r => {
    const title = (r.title || "").toLowerCase();
    const category = (r.category || "").toLowerCase();
    const query = searchQuery.toLowerCase();
    
    const matchesSearch = title.includes(query) || category.includes(query);
    const matchesCategory = selectedCategory === "All" || r.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-8">
        <SignIn 
          appearance={{
            elements: {
              formButtonPrimary: 'bg-primary hover:bg-primary-dark text-sm normal-case',
              card: 'shadow-2xl rounded-[32px] border-none',
            },
          }}
          fallbackRedirectUrl="/student-dashboard/library"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Kindle-Style Sidebar */}
      <aside className="w-full md:w-72 bg-white border-r border-slate-200 flex flex-col sticky top-0 md:h-screen overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-white">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-black text-primary-dark tracking-tight">Repository</h2>
          </div>
          
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Search library..."
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400 font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-bold transition-all group ${
                selectedCategory === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]' 
                  : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <span className="flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-full transition-all ${selectedCategory === cat ? 'bg-white' : 'bg-slate-300 opacity-0 group-hover:opacity-100'}`} />
                {cat}
              </span>
              <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400'}`}>
                {cat === "All" ? resources.length : categoryCounts[cat]}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
        {/* Professional Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8 overflow-x-auto no-scrollbar whitespace-nowrap">
          <Link href="/student-dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
          <ChevronRight size={10} className="text-slate-300 flex-shrink-0" />
          <span className="text-slate-900">Library</span>
          {selectedCategory !== "All" && (
            <>
              <ChevronRight size={10} className="text-slate-300 flex-shrink-0" />
              <span className="text-primary">{selectedCategory}</span>
            </>
          )}
        </nav>

        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">{selectedCategory} Shelf</h1>
            <p className="text-slate-400 mt-1 font-bold text-sm uppercase tracking-widest">
              Institutional Collection • {filteredResources.length} items
            </p>
          </div>
          <div className="h-px flex-1 bg-slate-200 mb-2 hidden md:block mx-8 opacity-50" />
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {[1,2,3,4,5,6,7,8,9,10].map(i => (
              <div key={i} className="aspect-[3/4.5] bg-white rounded-[32px] border border-slate-100 shadow-sm animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredResources.map((resource) => (
              <div key={resource._id}>
                <div 
                  onClick={() => setViewingPdf(resource)}
                  className="group relative cursor-pointer flex flex-col bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 h-full"
                >
                  {/* Book Spine Detail */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary/10 border-r border-primary/5" />

                  <div className="flex-1 p-6 flex flex-col justify-center items-center text-center relative z-10">
                    <div className="w-14 h-14 bg-primary/5 rounded-[20px] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                      <BookOpen className="text-primary w-7 h-7" />
                    </div>
                    <h3 className="text-sm font-black text-slate-800 leading-tight line-clamp-4 px-2 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                  </div>
                  
                  {/* Subtle Card Footer */}
                  <div className="p-5 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between relative z-10">
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">Read Now</span>
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Maximize2 size={12} />
                    </div>
                  </div>
                </div>
                
                {/* Outside Label (Like Kindle Store) */}
                <div className="mt-4 px-2">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest truncate mb-0.5">{resource.category}</p>
                  <p className="text-xs font-bold text-slate-400 truncate">{resource.author || "Institutional Resource"}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredResources.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[48px] border border-dashed border-slate-200">
            <Search className="w-16 h-16 text-slate-200 mx-auto mb-6" />
            <h3 className="text-xl font-black text-slate-400 uppercase tracking-widest">Shelf Empty</h3>
            <p className="text-slate-400 mt-2 font-medium">Try broadening your search criteria.</p>
          </div>
        )}
      </main>

      {/* Professional PDF Viewer Modal */}
      {viewingPdf && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-xl flex items-center justify-center p-4 lg:p-10 animate-in fade-in zoom-in duration-300">
          <div className="bg-white w-full h-full max-w-7xl rounded-[48px] shadow-2xl flex flex-col overflow-hidden relative">
            {/* Modal Header */}
            <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-primary/10 rounded-[24px]">
                  <FileText className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-xl tracking-tight line-clamp-1">{viewingPdf.title}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-primary font-black uppercase tracking-widest">{viewingPdf.category}</span>
                    <div className="w-1 h-1 rounded-full bg-slate-200" />
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Institutional Repository</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <a href={viewingPdf.fileUrl} download className="block">
                  <Button variant="outline" className="rounded-2xl border-slate-200 text-slate-600 hover:bg-slate-50 font-bold px-6">
                    <Download size={18} className="mr-2" /> Download
                  </Button>
                </a>
                <button 
                  onClick={() => setViewingPdf(null)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-slate-100 rounded-2xl text-slate-400 transition-all active:scale-90"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Premium PDF Frame Area */}
            <div className="flex-1 bg-slate-100 flex flex-col relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                <BookOpen className="w-96 h-96 text-slate-900" />
              </div>
              <iframe 
                src={`${viewingPdf.fileUrl}#toolbar=0&navpanes=0`} 
                className="w-full h-full border-none z-10"
                title={viewingPdf.title}
              />
            </div>
          </div>
        </div>
      )}

      {/* Global Aesthetics */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
