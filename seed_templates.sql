-- INSERT SAMPLE TEMPLATE FOR B.PHARM R23 SEMESTER 1-1
INSERT INTO public.academic_templates (pattern_name, regulation, branch, semester, subjects, is_active)
VALUES (
    'B.Pharm R23 Sem 1-1', 
    'R23', 
    'B.Pharm', 
    '1-1', 
    '[
        {
            "code": "R23PH01",
            "name": "Human Anatomy & Physiology I",
            "type": "Theory",
            "max_internal": 30,
            "max_external": 70,
            "credits": 4,
            "mandatory": true
        },
        {
            "code": "R23PH02",
            "name": "Pharmaceutical Analysis I",
            "type": "Theory",
            "max_internal": 30,
            "max_external": 70,
            "credits": 4,
            "mandatory": true
        },
        {
            "code": "R23PH03",
            "name": "Pharmaceutics I",
            "type": "Theory",
            "max_internal": 30,
            "max_external": 70,
            "credits": 4,
            "mandatory": true
        }
    ]'::jsonb,
    true
);
