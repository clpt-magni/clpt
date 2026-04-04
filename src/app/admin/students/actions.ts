"use server";

import { createClerkClient } from "@clerk/backend";
import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

export async function enrollStudentAction(formData: FormData) {
  const name = formData.get("name") as string;
  const enrollmentId = (formData.get("enrollmentId") as string).toUpperCase();
  const enrollmentYear = parseInt(formData.get("enrollmentYear") as string);
  const regulation = formData.get("regulation") as string;
  const branch = formData.get("branch") as string;

  try {
    // 1. Create User in Clerk
    console.log("Starting Clerk user creation for:", enrollmentId);
    console.log("CLERK_SECRET_KEY present:", !!process.env.CLERK_SECRET_KEY);

    const user = await clerk.users.createUser({
      username: enrollmentId,
      password: "Welcome@123",
      firstName: name.split(" ")[0],
      lastName: name.split(" ").slice(1).join(" ") || "Student",
      skipPasswordChecks: true,
      publicMetadata: {
        role: "student",
        enrollmentId: enrollmentId,
        regulation: regulation,
        branch: branch
      }
    });

    console.log("Clerk User Created successfully:", user.id);

    // 2. Link to Supabase Students Table
    console.log("Linking to Supabase students table...");
    console.log("SUPABASE_URL present:", !!process.env.NEXT_PUBLIC_SUPABASE_URL);

    const { error: sbError } = await supabase
      .from("students")
      .insert({
        clerk_user_id: user.id,
        name: name,
        enrollment_year: enrollmentYear,
        regulation: regulation,
        branch: branch,
        current_semester: "1-1"
      });

    if (sbError) {
      console.error("Supabase Insertion Error:", sbError);
      // Cleanup Clerk user if Supabase insert fails
      await clerk.users.deleteUser(user.id);
      throw sbError;
    }

    console.log("Supabase record created successfully.");
    revalidatePath("/admin/students");
    return { success: true };
  } catch (error: any) {
    console.error("Full Enrollment Error Object:", error);
    return { success: false, error: error.message || "An unexpected error occurred" };
  }
}
