import Link from "next/link";
import Image from "next/image";
import { Globe, Users, Link2, Play, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Widget */}
          <div className="space-y-6">
            <div className="relative h-12 w-48 bg-white/10 p-2 rounded flex items-center justify-center">
               <span className="text-white font-bold text-lg">CLPT LOGO</span>
               {/* Replace with real logo: <Image src="/assets/images/clptfull.png" alt="CLPT Logo" fill className="object-contain" /> */}
            </div>
            <p className="text-sm leading-relaxed">
              Chalapathi Institute of Pharmaceutical Sciences (Autonomous) is committed to impart Quality Pharmacy
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
                <span>+91 86325 24124, 2524125</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span>principalcips@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Chalapathi Institute of Pharmaceutical Sciences. All Rights Reserved.</p>
          <p>Designed by <span className="text-primary">Magni Digitech</span></p>
        </div>
      </div>
    </footer>
  );
}
