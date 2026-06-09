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

export default async function FacultyPage() {
  const initialFaculty = await getFaculty();
  
  return <FacultyClient initialFaculty={initialFaculty || []} />;
}
