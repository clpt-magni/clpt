"use client";

import { useEffect } from "react";

export default function PrintTrigger() {
  useEffect(() => {
    // Wait a short moment to ensure stylesheets and fonts are compiled and loaded, then trigger native print
    const timer = setTimeout(() => {
      window.print();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
