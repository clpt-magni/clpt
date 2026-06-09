"use server";

import { getActiveTemplate, getStudentRecordsForTemplate, upsertStudentRecord } from "@/lib/supabase-actions";
import { revalidatePath } from "next/cache";

export async function saveStudentRecordAction(formData: FormData) {
  const studentId = formData.get("studentId") as string;
  const templateId = formData.get("templateId") as string;
  const status = formData.get("status") as 'Draft' | 'Finalized';
  const marksJson = formData.get("marksData") as string;
  
  try {
    const marksData = JSON.parse(marksJson);
    
    await upsertStudentRecord({
      student_id: studentId,
      template_id: templateId,
      marks_data: marksData,
      status: status
    });
    
    revalidatePath("/admin/marks");
    return { success: true };
  } catch (error: any) {
    console.error("DAMS Save Error:", error);
    return { success: false, error: error.message };
  }
}
