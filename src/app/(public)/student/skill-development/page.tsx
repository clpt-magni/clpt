import React from "react";
import { client } from "../../../../../sanity/sanity.client";
import SkillDevelopmentClient from "./SkillDevelopmentClient";

export const revalidate = 60; // Revalidate every minute

export default async function SkillDevelopmentPage() {
  const query = `*[_type == "skillPartner"] | order(order asc) {
    _id,
    name,
    fullName,
    description,
    "logoUrl": logo.asset->url,
    programs,
    order
  }`;

  const partners = await client.fetch(query);

  return (
    <main>
      <SkillDevelopmentClient partners={partners} />
    </main>
  );
}
