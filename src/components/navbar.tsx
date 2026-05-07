
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, Show } from "@clerk/nextjs";
import { TopBar } from "./top-bar";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import { topNav, NavItem } from "@/config/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [noticeCount, setNoticeCount] = useState(3);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const { getNoticesCount } = await import("@/app/actions/notices");
        const count = await getNoticesCount();
        setNoticeCount(count);
      } catch (err) {
        console.error("Failed to fetch notices count client-side:", err);
      }
    };
    fetchCount();
  }, []);

  if (pathname?.startsWith('/studio')) return null;

  return (
    <>
      <TopBar />
    <header className="bg-white sticky top-0 z-[9999] shadow-lg border-b border-slate-100">
        <div className="container mx-auto px-4">
          {/* Logo and Accreditations Area */}
          <div className="py-3 flex justify-between items-center border-b md:border-none">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/flogo.png"
                alt="CLPT Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>

            <div className="flex items-center gap-4 md:gap-8">
              <div className="hidden lg:flex items-center gap-6">
                {[
                  { src: "/images/naac.jpg", alt: "NAAC A+" },
                  { src: "/images/iso.jpg", alt: "ISO Certified" }
                ].map((img, i) => (
                  <div key={i} className="group cursor-help">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {/* Student Login hidden temporarily
                <Show when="signed-in">
                  <Link href="/student-dashboard">
                    <Button variant="outline" size="sm" className="hidden border-primary text-primary hover:bg-primary hover:text-white md:flex transition-all font-bold">
                      Dashboard
                    </Button>
                  </Link>
                  <UserButton />
                </Show>
                <Show when="signed-out">
                  <SignInButton mode="modal">
                    <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-primary-dark transition-all active:scale-95 shadow-lg shadow-primary/20">
                      Student Login
                    </button>
                  </SignInButton>
                </Show>
                */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 text-primary hover:bg-slate-100 rounded-xl transition-all active:scale-90"
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>

          {/* Main Navigation Bar (Desktop) */}
          <nav className="hidden md:block py-1 border-t border-slate-50 relative">
            <ul className="flex items-center justify-center gap-1">
              {topNav.map((item, idx) => (
                <li key={idx} className={item.isMega ? "static" : "relative group"}>
                  <NavItemComponent item={item} />
                </li>
              ))}
              <li className="ml-2 relative">
                <Link
                  href="/notices"
                  className="relative flex items-center gap-1.5 px-3.5 py-2 text-[11px] font-black text-white bg-red-600 hover:bg-red-700 transition-all rounded-full whitespace-nowrap uppercase tracking-wider shadow-md hover:scale-105 transform active:scale-95 duration-150"
                >
                  <span className="flex h-2 w-2 rounded-full bg-white animate-ping shrink-0" />
                  <span>Notices</span>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[9px] font-black text-red-600 shadow-sm ml-0.5 shrink-0">
                    {noticeCount}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu (Stable Drawer) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-inner"
            >
              <div className="container mx-auto px-4 py-8 max-h-[75vh] overflow-y-auto">
                <nav>
                  <div className="mb-4">
                    <Link
                      href="/notices"
                      onClick={() => setMobileMenuOpen(false)}
                      className="relative flex items-center justify-between px-5 py-3.5 text-xs font-black text-white bg-red-600 hover:bg-red-700 transition-all rounded-xl uppercase tracking-wider shadow-md"
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-white animate-ping shrink-0" />
                        <span>Active Notices</span>
                      </div>
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-black text-red-600 shadow-sm shrink-0">
                        {noticeCount}
                      </span>
                    </Link>
                  </div>
                  <ul className="space-y-1">
                    {topNav.map((item, idx) => (
                      <MobileNavItem key={idx} item={item} close={() => setMobileMenuOpen(false)} />
                    ))}
                  </ul>
                </nav>
                
                <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-center gap-8 text-slate-400">
                  <a href="tel:+919440101685" className="hover:text-primary transition-colors">
                    <Phone size={20} />
                  </a>
                  <a href="mailto:principalclpt@gmail.com" className="hover:text-primary transition-colors">
                    <Mail size={20} />
                  </a>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-xs font-black uppercase tracking-widest hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

function NavItemComponent({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);

  // Determine if it's a mega menu
  const isMega = item.isMega && item.items && item.items.length > 0;

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={isMega ? "static" : "relative"}
    >
      <Link
        href={item.href}
        onClick={() => setIsOpen(false)}
        className="flex items-center gap-1 px-4 py-3 text-[13px] font-extrabold text-slate-700 hover:text-primary transition-all rounded-md hover:bg-slate-50/50 whitespace-nowrap uppercase tracking-tight"
      >
        {item.label}
        {item.items && <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} />}
      </Link>

      <AnimatePresence>
        {isOpen && item.items && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`absolute z-[100] ${isMega
              ? "left-4 right-4 top-full w-auto"
              : "left-1/2 -translate-x-1/2 top-full w-64"
              } bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl border border-slate-100 p-2 mt-1`}
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary-light via-primary to-primary-dark rounded-t-2xl" />

            {isMega ? (
              <div className="grid grid-cols-3 gap-8 p-8">
                {item.items.map((sub, i) => (
                  <div key={i} className="space-y-4">
                    <Link
                      href={sub.href}
                      onClick={() => setIsOpen(false)}
                      className="inline-block text-primary font-black text-base md:text-lg border-b-2 border-secondary pb-1 mb-2 hover:text-primary-dark transition-colors"
                    >
                      {sub.label}
                    </Link>
                    {sub.items && (
                      <ul className="space-y-2.5">
                        {sub.items.map((leaf, j) => (
                          <li key={j}>
                            <Link
                              href={leaf.href}
                              onClick={() => setIsOpen(false)}
                              className="group flex items-center gap-2 text-slate-500 hover:text-primary transition-all"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-primary group-hover:scale-125 transition-all" />
                              <span className="text-sm font-bold">{leaf.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <ul className="py-2">
                {item.items.map((sub, i) => (
                  <li key={i}>
                    <Link
                      href={sub.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-slate-600 hover:text-primary hover:bg-slate-50 rounded-xl mx-1 transition-all"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-primary transition-all" />
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavItem({ item, close }: { item: NavItem; close: () => void }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSub = item.items && item.items.length > 0;

  const handleToggle = (e: React.MouseEvent) => {
    if (hasSub) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    } else {
      close();
    }
  };

  return (
    <li className="last:border-0">
      <div className="flex items-center">
        <Link
          href={item.href}
          onClick={handleToggle}
          className={`flex-grow py-4 text-base font-bold transition-all flex items-center justify-between ${
            isExpanded ? "text-primary" : "text-slate-700"
          }`}
        >
          {item.label}
          {hasSub && (
            <div className={`p-1 rounded-lg bg-slate-50 transition-transform duration-300 ${isExpanded ? "rotate-180 bg-primary/10 text-primary" : "text-slate-400"}`}>
              <ChevronDown size={18} />
            </div>
          )}
        </Link>
      </div>

      <AnimatePresence>
        {isExpanded && hasSub && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-slate-50/50 rounded-2xl mb-2"
          >
            {item.items?.map((sub, i) => (
              <li key={i} className="border-b border-white last:border-0">
                <Link
                  href={sub.href}
                  onClick={close}
                  className="block p-4 text-sm font-bold text-slate-600 hover:text-primary active:bg-white transition-colors"
                >
                  {sub.label}
                </Link>
                {sub.items && (
                  <ul className="bg-white/50 px-4 pb-4 space-y-3">
                    {sub.items.map((leaf, j) => (
                      <li key={j}>
                        <Link
                          href={leaf.href}
                          onClick={close}
                          className="flex items-center gap-3 text-xs font-bold text-slate-400 hover:text-primary transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                          {leaf.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

