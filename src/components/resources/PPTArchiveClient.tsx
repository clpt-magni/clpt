"use client";

import { useState, useMemo } from "react";
import { CategoryGroup, FileEntry } from "@/lib/file-archives";
import { 
  FileText, 
  MonitorPlay, 
  FileVideo, 
  Download, 
  Eye, 
  Search, 
  Filter, 
  ChevronRight, 
  FolderOpen,
  X,
  FileCheck2,
  FileSearch2
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DocViewerModal } from "@/components/ui/DocViewerModal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface PPTArchiveClientProps {
  initialArchives: CategoryGroup[];
}

export function PPTArchiveClient({ initialArchives }: PPTArchiveClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeDoc, setActiveDoc] = useState<{ url: string; sourceUrl: string; title: string; type: FileEntry['type'] }>({ 
    url: "", 
    sourceUrl: "", 
    title: "", 
    type: 'other' 
  });

  const handleOpenDoc = (url: string, sourceUrl: string, title: string, type: FileEntry['type']) => {
    setActiveDoc({ url, sourceUrl, title, type });
    setModalOpen(true);
  };

  const filteredArchives = useMemo(() => {
    return initialArchives
      .map(group => ({
        ...group,
        files: group.files.filter(file => 
          file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          group.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }))
      .filter(group => group.files.length > 0)
      .filter(group => !selectedCategory || group.category === selectedCategory);
  }, [initialArchives, searchQuery, selectedCategory]);

  const categories = useMemo(() => 
    initialArchives.map(a => a.category).sort(),
    [initialArchives]
  );

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText className="text-red-500" size={18} />;
      case 'ppt':
      case 'pptx': return <MonitorPlay className="text-orange-500" size={18} />;
      case 'mp4': return <FileVideo className="text-blue-500" size={18} />;
      default: return <FileText className="text-slate-400" size={18} />;
    }
  };

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return "";
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)} MB`;
  };

  return (
    <div className="space-y-12">
      {/* Search & Filter Bar */}
      <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 flex flex-col md:flex-row gap-6 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
          <Input 
            placeholder="Search by topic, keyword, or course..." 
            className="pl-16 py-8 pr-8 rounded-3xl border-slate-100 bg-slate-50 focus:ring-primary focus:border-primary text-lg font-medium"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative group">
            <select 
              className="appearance-none bg-slate-50 border-slate-100 px-8 py-5 pr-14 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-500 focus:outline-none focus:ring-2 ring-primary/20 w-full md:w-auto"
              onChange={(e) => setSelectedCategory(e.target.value === "all" ? null : e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <Filter className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={14} />
          </div>
        </div>
      </div>

      {/* Archive Listing */}
      {filteredArchives.length === 0 ? (
        <div className="bg-white rounded-[40px] shadow-2xl p-24 text-center border border-slate-100">
          <div className="w-24 h-24 bg-slate-50 rounded-[35px] flex items-center justify-center mx-auto mb-8 border border-slate-100">
            <FileSearch2 className="text-slate-200" size={48} />
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-2 font-poppins">No matching archives found</h3>
          <p className="text-slate-400 font-medium max-w-sm mx-auto tracking-tight">Try adjusting your search terms or selecting a different category.</p>
          <Button 
            variant="ghost" 
            className="mt-8 text-primary font-black uppercase tracking-widest text-[10px]"
            onClick={() => { setSearchQuery(""); setSelectedCategory(null); }}
          >
            Clear Filter
          </Button>
        </div>
      ) : (
        <div className="space-y-10">
          <Accordion type="multiple" className="space-y-6" defaultValue={categories.slice(0, 3)}>
            {filteredArchives.map((group, groupIdx) => (
              <AccordionItem key={groupIdx} value={group.category} className="bg-white rounded-[40px] shadow-lg border border-slate-100 overflow-hidden px-10 transition-all hover:shadow-2xl hover:border-primary/20">
                <AccordionTrigger className="hover:no-underline py-10">
                  <div className="flex items-center gap-6 text-left w-full group">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <FolderOpen size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors pr-8 font-poppins capitalize">
                        {group.category.split(' / ').pop()}
                      </h4>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">
                        {group.files.length} Document{group.files.length !== 1 ? 's' : ''} in this category
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-10 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {group.files.map((file, fileIdx) => (
                      <div 
                        key={fileIdx} 
                        className="group/item bg-slate-50/50 p-6 rounded-3xl border border-slate-100 hover:bg-white hover:border-primary/30 transition-all flex items-center justify-between gap-6"
                      >
                        <div className="flex items-center gap-5 overflow-hidden">
                          <div className="shrink-0 p-3 bg-white rounded-2xl shadow-sm group-hover/item:shadow-md transition-all">
                            {getFileIcon(file.type)}
                          </div>
                          <div className="overflow-hidden">
                            <span className="block text-sm font-black text-slate-800 leading-tight truncate pr-4 group-hover/item:text-primary transition-colors">
                              {file.name.replace(/\.[^/.]+$/, "")}
                            </span>
                            <div className="flex items-center gap-3 mt-1.5">
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                {file.type.toUpperCase()}
                              </span>
                              {file.size && (
                                <>
                                  <span className="w-1 h-1 rounded-full bg-slate-200" />
                                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    {formatFileSize(file.size)}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          {/* View Button: Prefer PDF (viewUrl), fallback to Source (sourceUrl) */}
                          <Button 
                            onClick={() => handleOpenDoc(
                              encodeURI(file.viewUrl || file.sourceUrl || ""), 
                              encodeURI(file.sourceUrl || file.viewUrl || ""), // Exact source for download
                              file.name, 
                              file.viewUrl ? 'pdf' : file.type
                            )}
                            variant="ghost" 
                            size="icon" 
                            className="w-12 h-12 rounded-2xl bg-white text-primary hover:bg-primary hover:text-white transition-all shadow-md group-hover/item:scale-110"
                            title={file.viewUrl ? "View Presentation" : "Preview Presentation"}
                          >
                            <Eye size={18} />
                          </Button>

                          {/* Download Button: Prefer PPTX (sourceUrl) */}
                          {(file.sourceUrl || file.viewUrl) && (
                            <a href={encodeURI(file.sourceUrl || file.viewUrl || "")} download>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="w-12 h-12 rounded-2xl bg-white text-slate-400 hover:bg-secondary hover:text-primary-dark transition-all shadow-sm group-hover/item:scale-110"
                                title="Download Original"
                              >
                                <Download size={18} />
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}

      {/* Document Modal Viewer */}
      <DocViewerModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        url={activeDoc.url} 
        sourceUrl={activeDoc.sourceUrl}
        title={activeDoc.title}
        type={activeDoc.type} 
      />
    </div>
  );
}
