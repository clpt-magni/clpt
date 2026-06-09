-- Helper function to extract Clerk User ID from JWT
CREATE OR REPLACE FUNCTION requesting_clerk_id() 
RETURNS TEXT AS $$
    SELECT NULLIF(current_setting('request.headers', true)::json->>'x-clerk-user-id', '')::text;
$$ LANGUAGE sql STABLE;

-- Table: students
CREATE TABLE public.students (
    student_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clerk_user_id TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    enrollment_year INT NOT NULL,
    regulation TEXT NOT NULL DEFAULT 'R23', -- e.g., R23
    branch TEXT NOT NULL DEFAULT 'B.Pharm', -- e.g., B.Pharm
    current_semester TEXT NOT NULL DEFAULT '1-1', -- e.g., 1-1
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Table: subjects (Global Library)
CREATE TABLE public.subjects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT UNIQUE NOT NULL, -- e.g. PH101
    name TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('Theory', 'Practical', 'Project', 'Seminar')),
    credits INT NOT NULL DEFAULT 4,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Table: academic_templates (Immutable Pattern Layer)
CREATE TABLE public.academic_templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    pattern_name TEXT NOT NULL,
    regulation TEXT NOT NULL, -- e.g., R23
    branch TEXT NOT NULL, -- e.g., B.Pharm
    semester TEXT NOT NULL, -- e.g., 1-1
    subjects JSONB NOT NULL, -- Strict Contract: [{code, name, type, max_internal, max_external, credits, mandatory}]
    version INT DEFAULT 1,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Table: student_records (Transactional Layer)
CREATE TABLE public.student_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID REFERENCES public.students(student_id) ON DELETE CASCADE,
    template_id UUID REFERENCES public.academic_templates(id),
    marks_data JSONB NOT NULL, -- { "CODE": { internal, external, total, grade } }
    status TEXT CHECK (status IN ('Draft', 'Finalized')) DEFAULT 'Draft',
    last_updated TIMESTAMPTZ DEFAULT now(),
    UNIQUE (student_id, template_id)
);

-- Table: attendance
CREATE TABLE public.attendance (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID REFERENCES public.students(student_id) ON DELETE CASCADE,
    date DATE NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('Present', 'Absent', 'Late')),
    UNIQUE (student_id, date)
);

-- Table: staff (New)
CREATE TABLE public.staff (
    staff_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clerk_user_id TEXT UNIQUE NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('Admin', 'Faculty')),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS for staff
ALTER TABLE public.staff ENABLE ROW LEVEL SECURITY;

-- Helper function to check if the current user is a staff member
CREATE OR REPLACE FUNCTION is_staff() RETURNS boolean AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.staff 
    WHERE clerk_user_id = requesting_clerk_id()
  );
$$ LANGUAGE sql STABLE;

-- RLS Policy: staff
CREATE POLICY "Staff can view their own record" ON public.staff
    FOR SELECT USING (clerk_user_id = requesting_clerk_id());

-- RLS Policy: students (Updated)
CREATE POLICY "Students can view their own profile" ON public.students
    FOR SELECT USING (clerk_user_id = requesting_clerk_id());

CREATE POLICY "Staff can manage all students" ON public.students
    FOR ALL USING (is_staff());

-- RLS Policy: academic_templates
ALTER TABLE public.academic_templates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view templates" ON public.academic_templates
    FOR SELECT USING (requesting_clerk_id() IS NOT NULL);
CREATE POLICY "Staff can manage templates" ON public.academic_templates
    FOR ALL USING (is_staff());

-- RLS Policy: student_records
ALTER TABLE public.student_records ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Students can view their own records" ON public.student_records
    FOR SELECT USING (
        student_id IN (
            SELECT student_id FROM public.students 
            WHERE clerk_user_id = requesting_clerk_id()
        )
    );
CREATE POLICY "Staff can manage student records" ON public.student_records
    FOR ALL USING (is_staff());

-- RLS Policy: attendance (Updated)
CREATE POLICY "Students can view their own attendance" ON public.attendance
    FOR SELECT USING (
        student_id IN (
            SELECT student_id FROM public.students 
            WHERE clerk_user_id = requesting_clerk_id()
        )
    );

CREATE POLICY "Staff can manage all attendance" ON public.attendance
    FOR ALL USING (is_staff());

-- RLS Policy: subjects
ALTER TABLE public.subjects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view subjects" ON public.subjects
    FOR SELECT USING (requesting_clerk_id() IS NOT NULL);
CREATE POLICY "Staff can manage subjects" ON public.subjects
    FOR ALL USING (is_staff());
