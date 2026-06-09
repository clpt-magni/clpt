import React from "react";
import { client } from "../../../../../sanity/sanity.client";
import StudentsListClient from "./StudentsListClient";

export const revalidate = 60; // Revalidate every minute

export default async function StudentsListPage() {
  const query = `*[_type == "studentList"] | order(order desc) {
    _id,
    program,
    batch,
    "pdfUrl": pdfFile.asset->url,
    studentDataRaw,
    order
  }`;

  const initialLists = await client.fetch(query);

  return (
    <main>
      <StudentsListClient initialLists={initialLists} />
    </main>
  );
}
