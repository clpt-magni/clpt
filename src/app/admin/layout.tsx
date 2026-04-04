import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { 
  Users, 
  BookOpen, 
  BarChart3, 
  ShieldCheck, 
  Settings, 
  LayoutDashboard,
  Home
} from "lucide-react";

import { Sidebar } from "./sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50 font-roboto">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 pl-72 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-white border-b sticky top-0 z-40 px-8 flex items-center justify-between shadow-sm">
          <h2 className="font-bold text-primary text-lg font-poppins">Management Portal</h2>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:block">Administrator</span>
            <UserButton />
          </div>
        </header>

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
