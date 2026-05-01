"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  description?: string;
  size?: "default" | "compact";
}

export function PageHeader({ title, breadcrumbs, description, size = "default" }: PageHeaderProps) {
  const isCompact = size === "compact";

  return (
    <section className="relative bg-primary-dark overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 -skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none blur-3xl" />

      <div className={`container mx-auto px-4 ${isCompact ? "pt-12 pb-8 md:pt-16 md:pb-10" : "py-10 md:py-14"} relative z-10`}>
        <div className="max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-white/70 text-[10px] tracking-widest mb-3 font-black animate-in fade-in slide-in-from-left-4 duration-700">
            <Link href="/" className="hover:text-secondary transition-colors flex items-center gap-1">
              <Home size={12} />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight size={10} className="text-white/30" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-secondary transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-black">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Title */}
          <h1 className={`${isCompact ? "text-xl md:text-4xl" : "text-4xl md:text-6xl"} font-black text-white mb-3 tracking-tighter animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100`}>
            {title}
          </h1>

          {/* Optional Description */}
          {description && (
            <p className={`${isCompact ? "text-xs md:text-sm" : "text-xl"} text-white/60 max-w-2xl leading-snug font-bold animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 tracking-tight`}>
              {description}
            </p>
          )}

          {/* Decorative bar */}
          {!isCompact && (
            <div className="w-20 h-2 bg-secondary mt-8 rounded-full animate-in zoom-in duration-700 delay-300" />
          )}
        </div>
      </div>
    </section>
  );
}
