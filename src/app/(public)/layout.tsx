"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SidebarNav } from "@/components/sidebar-nav";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 relative">
        {/* Global Floating Sidebar */}
        <SidebarNav />
        
        {/* Page Content */}
        {children}
      </main>
      <Footer />
    </div>
  );
}


