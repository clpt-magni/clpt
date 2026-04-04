import Image from "next/image";
import Link from "next/link";
import { Mail, GraduationCap, Building2, User } from "lucide-react";
import { urlFor } from "@/lib/sanity";

export interface FacultyMember {
  _id: string;
  name: string;
  prefix?: string;
  slug: { current: string };
  designation: string;
  department: string;
  email?: string;
  image?: any;
}

const getInitials = (name: string) => {
  return name
    .split(' ')
    .filter(n => n.length > 0)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

/**
 * FacultyCard Component
 * Optimized for scanning and performance with next/image.
 * Enforces a 3:4 aspect ratio and provides a branded fallback.
 */
export default function FacultyCard({ faculty }: { faculty: FacultyMember }) {
  const initials = getInitials(faculty.name);

  return (
    <Link href={`/faculty/${faculty.slug.current}`} className="group block h-full">
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col ring-1 ring-slate-100/50">
        {/* Central Circular Image */}
        <div className="pt-8 pb-4 flex justify-center">
          <div className="w-28 h-28 md:w-32 md:h-32 relative rounded-full overflow-hidden border-4 border-slate-50 shadow-inner bg-slate-50">
            {faculty.image ? (
              <Image
                src={urlFor(faculty.image).url()}
                alt={`${faculty.prefix || ''} ${faculty.name}`.trim()}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 112px, 128px"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                <span className="text-xl font-bold text-slate-400">{initials}</span>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 md:p-5 flex flex-col flex-grow text-center">
          <div className="mb-3">
            <h3 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 tracking-tight leading-tight min-h-[2.5rem] text-center">
              <span className="inline-block">
                {faculty.prefix && <span className="mr-1">{faculty.prefix}</span>}
                {faculty.name}
              </span>
            </h3>
          </div>
          
          <div className="space-y-2 flex-grow">
            <p className="text-[11px] font-bold text-blue-600/80 line-clamp-1 uppercase tracking-wider uppercase">
              {faculty.designation}
            </p>
            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-[0.05em] line-clamp-2 leading-relaxed">
              {faculty.department}
            </p>
          </div>

          {/* Contact Node */}
          <div className="mt-5 pt-3 border-t border-slate-50 flex items-center justify-center gap-2 text-slate-400 group-hover:text-blue-600 transition-colors">
            <Mail size={12} className="shrink-0" />
            <span className="text-[10px] font-medium truncate max-w-[150px]">{faculty.email || 'faculty@clpt.edu.in'}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
