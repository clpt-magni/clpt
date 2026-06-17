import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, Clock, ArrowRight, GraduationCap, Briefcase } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CLPT Pharmacy Blog & Admission Guides | Chalapathi Pharmacy",
  description: "Read our comprehensive guides and articles on B.Pharmacy admissions, entrance exams, and career pathways in pharmaceutical sciences.",
  alternates: {
    canonical: "/blog",
  },
};

const blogPosts = [
  {
    title: "Complete Admission Guide for B.Pharmacy Colleges in AP",
    slug: "b-pharma-colleges-in-ap",
    description: "Explore the complete B.Pharmacy admission process in Andhra Pradesh. Get detailed insights on eligibility criteria, AP EAPCET entrance exam, counseling steps, required documents, and choosing the right college for your studies.",
    category: "Admissions",
    icon: GraduationCap,
    readTime: "6 min read",
    date: "June 12, 2026",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    title: "Why Choosing the Best Pharmacy College Matters for a Successful Career",
    slug: "best-pharmacy-college",
    description: "Discover why selecting a top-tier pharmacy college is critical for your long-term success. Learn how premium infrastructure, expert faculty, industry exposure, research opportunities, and robust placement support shape your professional path.",
    category: "Career Guidance",
    icon: Briefcase,
    readTime: "5 min read",
    date: "June 12, 2026",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col min-h-screen font-roboto bg-slate-50 pb-24">
      {/* Hero Header Section */}
      <section className="bg-primary-dark py-20 text-white relative overflow-hidden">
        {/* Abstract background grids/circles */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-secondary text-sm font-black uppercase tracking-widest mb-6">
            <BookOpen size={16} /> Knowledge Hub
          </span>
          <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
            CLPT <span className="text-secondary">Pharmacy Blog</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
            Stay informed with expert guidance on pharmacy admissions, career paths, industrial trends, and academic excellence.
          </p>
        </div>
      </section>

      {/* Blog Listing Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogPosts.map((post) => {
              const IconComponent = post.icon;
              return (
                <Card
                  key={post.slug}
                  className="border-none shadow-lg bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col h-full"
                >
                  <CardContent className="p-8 md:p-10 flex flex-col h-full justify-between">
                    <div className="space-y-6">
                      {/* Meta Tags */}
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <span className={`text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${post.badgeColor}`}>
                          {post.category}
                        </span>
                        <div className="flex items-center gap-4 text-slate-400 text-xs font-semibold">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={14} />
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Header & Icon */}
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                          <IconComponent size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-primary-dark font-poppins leading-snug group-hover:text-primary transition-colors duration-300">
                          <Link href={`/${post.slug}`} id={`blog-link-${post.slug}`}>
                            {post.title}
                          </Link>
                        </h2>
                      </div>

                      {/* Summary */}
                      <p className="text-slate-600 leading-relaxed text-base">
                        {post.description}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-8 mt-auto">
                      <Link href={`/${post.slug}`}>
                        <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:text-primary-dark transition-colors cursor-pointer">
                          Read Article <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
