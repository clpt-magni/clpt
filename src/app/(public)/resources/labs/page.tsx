import { Metadata } from 'next';
import { getLaboratories } from '@/lib/sanity-actions';
import LabsClient from './LabsClient';

export const metadata: Metadata = {
  title: 'Laboratories & Infrastructure | Chalapathi Institute of Pharmaceutical Sciences',
  description: 'Explore our world-class research facilities across specialized disciplines, featuring advanced instrumentation and modern safety protocols.',
};

export default async function LabsOverviewPage() {
  const initialLabs = await getLaboratories();
  
  return <LabsClient initialLabs={initialLabs || []} />;
}
