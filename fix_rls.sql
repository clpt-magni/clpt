-- REFINED HELPER FUNCTION FOR CLERK (Handles Text IDs correctly)
-- This avoids the "invalid input syntax for type uuid" error
CREATE OR REPLACE FUNCTION requesting_clerk_id() 
RETURNS TEXT AS $$
    SELECT auth.jwt() ->> 'sub';
$$ LANGUAGE sql STABLE;

-- RESTORE SECURE POLICIES FOR LIBRARY
DROP POLICY IF EXISTS "Diagnose library visibility" ON public.library_resources;
DROP POLICY IF EXISTS "Authenticated users can view library resources" ON public.library_resources;
DROP POLICY IF EXISTS "Staff can manage library resources" ON public.library_resources;

-- Enable RLS
ALTER TABLE public.library_resources ENABLE ROW LEVEL SECURITY;

-- Allow ANY authenticated institutional user (Clerk IDs are Strings)
CREATE POLICY "Authenticated users can view library resources" ON public.library_resources
    FOR SELECT USING (requesting_clerk_id() IS NOT NULL);

-- Keep management limited
CREATE POLICY "Staff can manage library resources" ON public.library_resources
    FOR ALL USING (is_staff());
