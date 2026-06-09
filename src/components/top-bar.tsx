"use client";

import { Phone, Mail, GraduationCap, User, Settings } from "lucide-react";
import Link from "next/link";

export function TopBar() {
  return (
    <div className="bg-slate-50 border-b py-2 text-xs font-medium text-slate-600 hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="tel:+918632524124" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={14} className="text-primary" />
            +91 9440101685
          </a>
          <a href="mailto:principalclpt@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={14} className="text-primary" />
            principalclpt@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/admissions" className="hover:text-primary transition-colors">Admissions</Link>
          <Link href="https://alumni.chalapathipharmacy.in/" className="flex items-center gap-1 hover:text-primary transition-colors">
            <User size={14} />
            Alumni
          </Link>
          <Link href="/admin" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Settings size={14} />
            Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
}
