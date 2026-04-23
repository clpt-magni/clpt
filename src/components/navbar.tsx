
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, Show } from "@clerk/nextjs";
import { TopBar } from "./top-bar";
import { ChevronDown, Menu } from "lucide-react";
import { topNav, NavItem } from "@/config/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  if (pathname?.startsWith('/studio')) return null;

  return (
    <>
      <TopBar />
      <header className="bg-white sticky top-0 z-50 shadow-md">
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
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 text-primary hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <Menu size={28} />
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
            </ul>
          </nav>
        </div>

        {/* Mobile Menu (Drawer) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t overflow-hidden shadow-2xl"
            >
              <div className="container mx-auto px-4 py-6 max-h-[80vh] overflow-y-auto">
                <ul className="space-y-4">
                  {topNav.map((item, idx) => (
                    <MobileNavItem key={idx} item={item} close={() => setMobileMenuOpen(false)} />
                  ))}
                </ul>
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

  return (
    <li className="border-b border-slate-50 last:border-0 pb-2">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={close}
          className="text-lg font-bold text-slate-800 hover:text-primary transition-colors py-2 flex-grow"
        >
          {item.label}
        </Link>
        {hasSub && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-3 text-slate-400 hover:text-primary transition-colors"
          >
            <ChevronDown size={20} className={`transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isExpanded && hasSub && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pl-4 mt-2 space-y-3 bg-slate-50 rounded-xl p-4"
          >
            {item.items?.map((sub, i) => (
              <li key={i}>
                <Link
                  href={sub.href}
                  onClick={close}
                  className="text-sm font-semibold text-slate-600 hover:text-primary flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  {sub.label}
                </Link>
                {sub.items && (
                  <ul className="pl-6 mt-2 space-y-2 border-l border-slate-200">
                    {sub.items.map((leaf, j) => (
                      <li key={j}>
                        <Link
                          href={leaf.href}
                          onClick={close}
                          className="text-xs text-slate-500 hover:text-primary"
                        >
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

