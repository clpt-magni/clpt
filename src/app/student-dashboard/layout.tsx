import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { LayoutDashboard, GraduationCap, ClipboardCheck, User, BookOpen, Calendar } from "lucide-react";

const sidebarLinks = [
  { name: "Overview", href: "/student-dashboard", icon: LayoutDashboard },
  { name: "Academic Calendar", href: "/academic-calendar", icon: Calendar },
  { name: "My Marks", href: "/student-dashboard/marks", icon: GraduationCap },
  { name: "Attendance", href: "/student-dashboard/attendance", icon: ClipboardCheck },
  { name: "Digital Library", href: "/student-dashboard/library", icon: BookOpen },
  { name: "Profile", href: "/student-dashboard/profile", icon: User },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b">
          <Link href="/" className="text-xl font-bold text-primary flex items-center gap-2">
            <span className="bg-primary text-white p-1 rounded-md text-sm">PC</span>
            SIS Portal
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-100 hover:text-primary transition-colors"
            >
              <link.icon className="w-4 h-4" />
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t">
          <div className="flex items-center gap-3 px-3 py-2">
            <UserButton showName />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="md:hidden h-16 bg-white border-b px-4 flex items-center justify-between sticky top-0 z-10">
          <Link href="/" className="text-lg font-bold text-primary">
            SIS Portal
          </Link>
          <UserButton />
        </header>

        <main className="flex-1 p-4 md:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
