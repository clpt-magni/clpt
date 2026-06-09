import { supabase } from "./supabase";

export async function getStudentProfile(clerkId: string) {
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .eq('clerk_user_id', clerkId)
    .single();
    
  if (error) return null;
  return data;
}

export async function getStudentMarks(studentId: string) {
  const { data, error } = await supabase
    .from('marks')
    .select('*, subjects(*)')
    .eq('student_id', studentId);
    
  if (error) return [];
  return data;
}

export async function getStudentAttendance(studentId: string) {
  const { data, error } = await supabase
    .from('attendance')
    .select('*')
    .eq('student_id', studentId);
    
  if (error) return [];
  return data;
}
export async function getStudents() {
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .order('name');
    
  if (error) return [];
  return data;
}

export async function getAllSubjects() {
  const { data, error } = await supabase
    .from('subjects')
    .select('*')
    .order('name');
    
  if (error) return [];
  return data;
}

export async function upsertMark(mark: any) {
  const { data, error } = await supabase
    .from('marks')
    .upsert(mark)
    .select()
    .single();
    
  if (error) throw error;
  return data;
}

// --- DAMS (Dynamic Academic Management System) Functions ---

export async function getActiveTemplate(regulation: string, branch: string, semester: string) {
  const { data, error } = await supabase
    .from('academic_templates')
    .select('*')
    .eq('regulation', regulation)
    .eq('branch', branch)
    .eq('semester', semester)
    .eq('is_active', true)
    .maybeSingle();
    
  if (error) throw error;
  return data;
}

export async function getStudentRecord(studentId: string, templateId: string) {
  const { data, error } = await supabase
    .from('student_records')
    .select('*')
    .eq('student_id', studentId)
    .eq('template_id', templateId)
    .maybeSingle();
    
  if (error) throw error;
  return data;
}

export async function getStudentRecordsForTemplate(templateId: string) {
  const { data, error } = await supabase
    .from('student_records')
    .select('*')
    .eq('template_id', templateId);
    
  if (error) throw error;
  return data;
}

export async function upsertStudentRecord(record: {
  student_id: string;
  template_id: string;
  marks_data: any;
  status: 'Draft' | 'Finalized';
}) {
  const { data, error } = await supabase
    .from('student_records')
    .upsert(record, { onConflict: 'student_id,template_id' })
    .select()
    .single();
    
  if (error) throw error;
  return data;
}
