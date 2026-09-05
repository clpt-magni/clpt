import { Suspense } from 'react';
import { Metadata } from 'next';
import { getFaculty } from '@/lib/sanity-actions';
import FacultyClient from './FacultyClient';

export const metadata: Metadata = {
  title: "Faculty at Chalapathi Pharmacy College Guntur",
  description: "Meet the experienced faculty at Chalapathi Institute of Pharmaceutical Sciences, Guntur dedicated to quality pharmacy education and research.",
  alternates: {
    canonical: "/faculty",
  },
};

export const revalidate = 0;

export default async function FacultyPage({
  searchParams,
}: {
  searchParams?: Promise<{ department?: string; dept?: string }>;
}) {
  const params = await searchParams;
  const initialDept = params?.department || params?.dept || "";
  const initialFaculty = await getFaculty();
  
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <FacultyClient initialFaculty={initialFaculty || []} initialDepartment={initialDept} />
    </Suspense>
  );
}
