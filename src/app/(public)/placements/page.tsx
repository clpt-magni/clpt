import React from "react";
import { client } from "../../../../sanity/sanity.client";
import PlacementClient from "./PlacementClient";

export const revalidate = 60; // Revalidate every minute

export default async function PlacementPage() {
  const statsQuery = `*[_type == "placementStats"] | order(academicYear desc) {
    _id,
    academicYear,
    program,
    totalStudents,
    noOfIndustries,
    noPlaced,
    higherEducation,
    percentage
  }`;

  const companiesQuery = `*[_type == "placementCompany"] | order(order asc) {
    _id,
    name,
    "logoUrl": logo.asset->url
  }`;

  const [stats, companies] = await Promise.all([
    client.fetch(statsQuery),
    client.fetch(companiesQuery),
  ]);

  return (
    <main>
      <PlacementClient stats={stats} companies={companies} />
    </main>
  );
}
