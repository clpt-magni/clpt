import { Metadata } from 'next';
import { client } from '@/../sanity/sanity.client';
import FeeStructureClient from './FeeStructureClient';

export const metadata: Metadata = {
  title: 'Fee Structure | Chalapathi Institute of Pharmaceutical Sciences',
  description: 'View the comprehensive fee structure, intake sanctioned, and category-wise seat allotments for B.Pharmacy, Pharm.D, and M.Pharmacy programs.',
};

async function getFeeStructure() {
  const query = `*[_type == "feeStructure"] | order(academicYear desc)[0] {
    academicYear,
    programs[] {
      name,
      intake,
      categoryB,
      tuitionFee
    },
    applicationFee,
    applicationDetails,
    notes
  }`;
  
  return await client.fetch(query);
}

export default async function FeeStructurePage() {
  const data = await getFeeStructure();
  
  return <FeeStructureClient data={data} />;
}
