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
}

export function PageHeader({ title, breadcrumbs, description }: PageHeaderProps) {
  return (
    <section className="relative bg-primary-dark overflow-hidden">
      {/* Decorative background elements for "Modern/Clean" feel */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 -skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none blur-3xl" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-white/70 text-sm mb-6 font-medium animate-in fade-in slide-in-from-left-4 duration-700">
            <Link href="/" className="hover:text-secondary transition-colors flex items-center gap-1">
              <Home size={14} />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight size={14} className="text-white/30" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-secondary transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-bold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {title}
          </h1>

          {/* Optional Description */}
          {description && (
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              {description}
            </p>
          )}

          {/* Decorative bar */}
          <div className="w-20 h-2 bg-secondary mt-8 rounded-full animate-in zoom-in duration-700 delay-300" />
        </div>
      </div>
    </section>
  );
}
