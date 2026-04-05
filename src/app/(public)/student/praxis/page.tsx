import React from "react";
import type { Metadata } from "next";
import PraxisClient from "./PraxisClient";

export const metadata: Metadata = {
  title: "Praxis Student Wall Magazine | Chalapathi Institute of Pharmaceutical Sciences",
  description: "View the collections of Praxis, the annual student wall magazine of Chalapathi Institute of Pharmaceutical Sciences (CLPT). Exploring pharmacy student creativity and research excellence.",
};

export default function PraxisPage() {
  return (
    <main>
      <PraxisClient />
    </main>
  );
}
