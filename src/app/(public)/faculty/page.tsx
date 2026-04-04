import { Metadata } from 'next';
import { getFaculty } from '@/lib/sanity-actions';
import FacultyClient from './FacultyClient';

export const metadata: Metadata = {
  title: 'Faculty Directory | Chalapathi Institute of Pharmaceutical Sciences',
  description: 'Distinguished faculty members and researchers shaping the future of pharmaceutical sciences.',
};

export default async function FacultyPage() {
  const initialFaculty = await getFaculty();
  
  return <FacultyClient initialFaculty={initialFaculty || []} />;
}
