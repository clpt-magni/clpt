import React from "react";
import { client } from "../../../../../sanity/sanity.client";
import IIPECClientLayout from "./IIPECClientLayout";

export const revalidate = 60; // Revalidate dynamic content every 60 seconds

export default async function IIPECPage() {
  const query = `*[_type == "iipecTraining"] | order(academicYear desc) {
    _id,
    academicYear,
    batch,
    totalStudents,
    records[] {
      companyName,
      dateFrom,
      dateTo,
      noOfStudents
    }
  }`;
  
  const trainingRecords = await client.fetch(query);
  
  return <IIPECClientLayout records={trainingRecords} />;
}
