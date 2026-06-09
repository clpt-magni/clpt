import { getFileArchive } from "@/lib/file-archives";
import { PPTArchiveClient } from "@/components/resources/PPTArchiveClient";
import { MonitorPlay, Search, ArrowRight, BookOpen, Microscope } from "lucide-react";

export default async function PPTPresentationsPage() {
  const archives = await getFileArchive();

  return (
    <div className="min-h-screen bg-slate-50 pb-24 font-roboto">
      {/* Hero Section */}
      <div className="bg-primary-dark pt-32 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-24 -left-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full text-white font-black text-[10px] uppercase tracking-[0.2em] mb-6 border border-primary/20 animate-fade-in">
            <MonitorPlay size={14} /> Academic Repository
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight font-poppins">
            PowerPoint Presentations
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Access a comprehensive digital library of pharmaceutical lectures, research presentations, and clinical case studies.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-14 relative z-20">
        <PPTArchiveClient initialArchives={archives} />
      </div>

      {/* Institutional Branding / CTA */}
      <div className="container mx-auto px-4 mt-24">
        <div className="bg-gradient-to-br from-primary-dark to-slate-900 rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight font-poppins">
              Contribute to the Archive
            </h2>
            <p className="text-white/60 text-lg mb-10 font-bold text-balance">
              Faculty members are encouraged to upload their latest presentations to ensure our digital library remains at the cutting edge of pharmaceutical education.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3 text-white/50 text-xs font-black uppercase tracking-widest">
                <BookOpen size={16} className="text-primary" />
                Library Verified
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
              <div className="flex items-center gap-3 text-white/50 text-xs font-black uppercase tracking-widest">
                <Microscope size={16} className="text-primary" />
                Research Aligned
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
