"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Globe, Users, Link2, Play, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/studio')) return null;
  return (
    <footer className="bg-primary-dark text-slate-300 py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Widget */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <img src="/images/footerlogo.png" alt="CLPT Logo" className="h-16 w-auto object-contain" />
            </Link>
            <p className="text-sm leading-relaxed">
              Chalapathi Institute of Pharmaceutical Sciences (Autonomous) is committed to impart Quality Pharmaceutical
              Education and Research to meet Global standards.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition-colors"><Globe size={20} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Users size={20} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Link2 size={20} /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Play size={20} /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-primary transition-colors">Academic Programs</Link></li>
              <li><Link href="/admissions" className="hover:text-primary transition-colors">Admissions Open</Link></li>
              <li><Link href="/placements" className="hover:text-primary transition-colors">Placements & Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Mandatory Disclosures</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Anti-Ragging Committee</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/student-dashboard" className="hover:text-primary transition-colors">Student Portal</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Faculty Portal</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Alumni Registration</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Library / E-Resources</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Research Publications</Link></li>
              <li><Link href="/admin" className="hover:text-primary transition-colors">Admin Login</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <span>Chalapathi Nagar, Lam, Guntur - 522 034, Andhra Pradesh, India.</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+91 9440101685</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span>principalclpt@gmail.com</span>
                <span>officeclpt2@gmail.com</span>
              </li>
            </ul>

            {/* Visitor Counter */}
            <div className="pt-4 space-y-2">
              <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Visitor Count</p>
              <div className="inline-block bg-white/5 p-2 rounded-lg backdrop-blur-sm border border-white/10">
                <img
                  src="https://hitwebcounter.com/counter/counter.php?page=7119490&style=0038&nbdigits=6&type=page&initCount=0"
                  title="Visitor Counter"
                  alt="Hits"
                  className="opacity-50 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-medium uppercase tracking-wider text-slate-500">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>&copy; {new Date().getFullYear()} Chalapathi Institute of Pharmaceutical Sciences. All Rights Reserved.</p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Site Updated: <span className="text-slate-300">April 10th, 2026</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span>Developed & Maintained by </span>
            <Link href="https://magnidigitech.com" target="_blank" className="hover:opacity-80 transition-all hover:scale-105 active:scale-95">
              <img src="/images/magnidigitech.png" alt="Magni Digitech" className="h-8 w-auto opacity-90 hover:opacity-100 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
