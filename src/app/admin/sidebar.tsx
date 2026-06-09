"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Users, 
  BookOpen, 
  BarChart3, 
  ShieldCheck, 
  Settings, 
  LayoutDashboard,
  Home,
  Database
} from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
    { icon: Users, label: "Students", href: "/admin/students" },
    { icon: BookOpen, label: "Subjects", href: "/admin/subjects" },
    { icon: BarChart3, label: "Marks Entry", href: "/admin/marks" },
    { icon: ShieldCheck, label: "Staff", href: "/admin/staff" },
    { icon: Database, label: "Manage Content (CMS)", href: "/studio" },
  ];

  return (
    <aside className="w-72 bg-[#051C33] text-white flex flex-col fixed inset-y-0 shadow-[4px_0_24px_rgba(0,0,0,0.1)] z-50">
      <div className="p-8 border-b border-white/5 flex items-center justify-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-primary p-2 rounded-xl group-hover:rotate-6 transition-all shadow-lg shadow-primary/20">
            <Home className="text-white h-5 w-5" />
          </div>
          <span className="font-black text-xl tracking-tight font-poppins text-white">CLPT <span className="text-secondary">ADMIN</span></span>
        </Link>
      </div>

      <nav className="flex-1 p-6 space-y-3 mt-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold group border-l-4 ${
                isActive 
                ? "bg-white/10 text-white border-secondary shadow-lg" 
                : "text-slate-400 border-transparent hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="text-sm font-poppins tracking-wide">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-8 border-t border-white/5">
         <Link
            href="/admin/settings"
            className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold group border-l-4 ${
              pathname === "/admin/settings"
              ? "bg-white/10 text-white border-secondary shadow-lg"
              : "text-slate-500 border-transparent hover:bg-white/5 hover:text-white"
            }`}
          >
            <Settings className={`h-5 w-5 transition-all duration-500 ${pathname === "/admin/settings" ? "rotate-90" : "group-hover:rotate-90"}`} />
            <span className="text-sm font-poppins tracking-wide">Settings</span>
          </Link>
      </div>
    </aside>
  );
}
