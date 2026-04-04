-- Create library_resources table
CREATE TABLE IF NOT EXISTS public.library_resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    file_path TEXT UNIQUE NOT NULL,
    author TEXT,
    tags TEXT[],
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.library_resources ENABLE ROW LEVEL SECURITY;

-- Students and Staff can view
CREATE POLICY "Verified users can view library resources" ON public.library_resources
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.students WHERE clerk_user_id = requesting_clerk_id()
        ) OR is_staff()
    );

-- Only Staff can manage
CREATE POLICY "Staff can manage library resources" ON public.library_resources
    FOR ALL USING (is_staff());
