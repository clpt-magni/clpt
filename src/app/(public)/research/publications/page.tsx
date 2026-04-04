import React from "react";
import { client } from "../../../../../sanity/sanity.client";
import PublicationClient from "./PublicationClient";

export const revalidate = 60; // Revalidate every minute

export default async function PublicationPage() {
  const query = `*[_type == "publication"] | order(year desc) {
    _id,
    year,
    title,
    "summaryPdfUrl": summaryPdf.asset->url,
    articles[] {
      slNo,
      description,
      impactFactor
    }
  }`;

  const publications = await client.fetch(query);

  return (
    <main>
      <PublicationClient publications={publications} />
    </main>
  );
}
