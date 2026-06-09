import React from "react";
import { client } from "../../../../../sanity/sanity.client";
import MOUClient from "./MOUClient";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function MOUPage() {
  // Fetch MOUs with optional document URL
  const query = `*[_type == "mou"] | order(serialNumber asc) {
    _id,
    title,
    serialNumber,
    category,
    description,
    "documentUrl": document.asset->url
  }`;

  const mous = await client.fetch(query);

  return (
    <main>
      <MOUClient mous={mous} />
    </main>
  );
}
