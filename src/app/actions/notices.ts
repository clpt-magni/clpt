"use server";

import { getNotices } from "@/lib/sanity-actions";

export async function getNoticesCount() {
  try {
    const list = await getNotices();
    return list ? list.length : 3;
  } catch (err) {
    console.error("Error fetching notices count on server:", err);
    return 3; // Fallback default
  }
}
