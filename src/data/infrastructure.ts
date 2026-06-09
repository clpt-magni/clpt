import {
  Dog,
  Coffee,
  Box,
  Library,
  Home,
  Microscope,
  Building2,
  Trophy,
  Dumbbell,
  Trees,
  LayoutGrid,
  FlaskConical,
  Leaf,
  BookOpen,
  Presentation,
  Monitor,
  Video,
  Pill,
  Gamepad2
} from "lucide-react";

export interface InfrastructureItem {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: any;
  image: string;
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export const infrastructureData: InfrastructureItem[] = [
  {
    title: "Library",
    slug: "library",
    description: "A comprehensive collection of books, journals, and digital resources for academic and research needs.",
    longDescription: "Our central library is a cornerstone of learning, housing a vast collection of pharmaceutical texts, scientific journals, and digital databases. It provides a quiet, conducive environment for study and research, equipped with modern amenities to support academic excellence.",
    icon: Library,
    image: "https://images.unsplash.com/photo-1572756622305-6364b9f8315e?auto=format&fit=crop&q=80&w=800",
    features: [
      "Extensive Collection",
      "Digital Resources",
      "Reading Halls",
      "24/7 Access"
    ],
    specs: [
      { label: "Total Volumes", value: "10,000+" },
      { label: "Journals", value: "50+ Subscribed" },
      { label: "Seating Capacity", value: "150" }
    ]
  },
  {
    title: "Hostel",
    slug: "hostel",
    description: "Comfortable and secure residential wings with modern amenities, fostering a home-away-from-home atmosphere.",
    longDescription: "Our residential facilities are designed to provide a secure and focused environment for students. Separate wings for boys and girls offer clean, well-ventilated rooms, high-speed connectivity, and dedicated study areas to support holistic development.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800",
    features: [
      "24/7 High Security",
      "Wi-Fi Connectivity",
      "Resident Staff Support",
      "Laundry & Gym Access"
    ],
    specs: [
      { label: "Occupancy", value: "500+ Residents" },
      { label: "Room Types", value: "Single/Double Sharing" },
      { label: "Safety", value: "CCTV Surveillance" }
    ]
  },
  {
    title: "Laboratories",
    slug: "labs",
    description: "Cutting-edge research and training labs equipped with advanced instrumentation for practical mastery.",
    longDescription: "The heart of CLPT lies in its specialized laboratories. Each lab is dedicated to a specific branch of pharmacy—from Pharmaceutics to Medicinal Chemistry—providing students with the tools and environment necessary to conduct high-level research and practical experiments.",
    icon: Microscope,
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800",
    features: [
      "Advanced Analytical Tools",
      "Pilot Plant Facilities",
      "Computer-Aided Drug Design",
      "Strict Safety Protocols"
    ],
    specs: [
      { label: "Number of Labs", value: "18+ Specialized" },
      { label: "Lab Safety", value: "OSHA Standards" },
      { label: "Core Equipment", value: "HPLC, UV, FT-IR" }
    ]
  },
  {
    title: "Seminar Hall",
    slug: "seminar-hall",
    description: "Equipped with audio-visual equipment for seminars, webinars, workshops, guest lectures, and student activities.",
    longDescription: "Our Seminar Hall is a venue for intellectual discourse and professional networking. Equipped with integrated audio-visual systems and ergonomic seating, it hosts regular guest lectures by industry experts, international symposia, and university-level competitions.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1475721027785-f74dea996949?auto=format&fit=crop&q=80&w=800",
    features: [
      "Integrated AV Controls",
      "Video Conferencing",
      "Ergonomic Tiered Seating",
      "Acoustic Optimization"
    ],
    specs: [
      { label: "Seating Capacity", value: "300+ Attendees" },
      { label: "Connectivity", value: "High-speed Ethernet" },
      { label: "Projection", value: "4K Laser Projector" }
    ]
  },
  {
    title: "Auditorium",
    slug: "auditorium",
    description: "Modern auditorium equipped with high-defintion audio and video facilities for national and international conferences, workshops & Student Activities.",
    longDescription: "Our state-of-the-art auditorium serves as the premier venue for intellectual discourse and professional engagement. Designed to host national and international conferences, symposia, guest lectures, and major student events, it combines cutting-edge technology with architectural excellence.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1475721027785-f74dea996949?auto=format&fit=crop&q=80&w=800",
    features: [
      "High-Definition 4K Laser Projection",
      "Immersive Dolby Atmos Surround Sound",
      "Professional Grade Lighting Rig",
      "Ergonomic Tiered Seating",
      "Acoustic Optimization"
    ],
    specs: [
      { label: "Seating Capacity", value: "300+ Attendees" },
      { label: "Connectivity", value: "High-speed Ethernet" },
      { label: "Projection", value: "4K Laser Projector" }
    ]
  },
  {
    title: "Open Air Auditorium",
    slug: "open-air-auditorium",
    description: "Equipped with audio video facilities for student activities like national level sports and cultural meets, yoga & meditation, gatherings, functions and events.",
    longDescription: "Open Air Auditorium at CLPT is a serene amphitheater designed for large gatherings and performances under the open sky. With its natural acoustics and professional stage setup, it provides an inspiring backdrop for cultural festivals, large-scale conferences, yoga & meditation sessions, and community events.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1475721027785-f74dea996949?auto=format&fit=crop&q=80&w=800",
    features: [
      "Integrated AV Controls",
      "Video Conferencing",
      "Ergonomic Tiered Seating",
      "Acoustic Optimization"
    ],
    specs: [
      { label: "Seating Capacity", value: "300+ Attendees" },
      { label: "Connectivity", value: "High-speed Ethernet" },
      { label: "Projection", value: "4K Laser Projector" }
    ]
  },
  {
    title: "Sports Facilities",
    slug: "sports-facilities",
    description: "Comprehensive facilities for indoor and outdoor sports to ensure physical wellness and team spirit.",
    longDescription: "At CLPT, we believe in the physical well-being of our students. Our sports facilities include a dedicated indoor sports room for games like Table Tennis and Chess, alongside well-maintained outdoor courts for Volleyball and Cricket, encouraging a healthy, balanced lifestyle.",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    features: [
      "Indoor Sports Arena",
      "Outdoor Playing Fields",
      "Annual Athletic Meet",
      "Professional Equipment"
    ],
    specs: [
      { label: "Facility Type", value: "Indoor & Outdoor" },
      { label: "Available Sports", value: "10+ Disciplines" },
      { label: "Wellness Hub", value: "Open Daily" }
    ]
  },
  {
    title: "Gymnasium",
    slug: "gymnasium",
    description: "A well-equipped indoor and outdoor gymnasium that provides boys and girls with a safe, inclusive, and dynamic environment for fitness, sports, and overall physical development in both comfortable indoor settings and refreshing open-air spaces.",
    longDescription: "At CLPT, we believe in the physical well-being of our students. Our gymnasium is equipped with state-of-the-art fitness equipment to support your health and fitness goals. From cardio machines to strength training equipment, we have everything you need for a comprehensive workout.",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    features: [
      "Cardio Machines",
      "Strength Training Equipment",
      "Professional Equipment"
    ],
    specs: [
      { label: "Facility Type", value: "Indoor" },
      { label: "Available Equipment", value: "Cardio Machines, Strength Training Equipment" },
      { label: "Wellness Hub", value: "Open Daily" }
    ]
  },
  {
    title: "Canteen",
    slug: "canteen",
    description: "Hygienic and vibrant dining space offering nutritious meals and refreshments for students and staff.",
    longDescription: "The CLPT Canteen is more than just a dining hall; it's a social hub where students and faculty gather to recharge. We prioritize hygiene, nutrition, and variety, offering a range of freshly prepared meals and snacks in a clean, modern environment.",
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1567529684892-0f1964096379?auto=format&fit=crop&q=80&w=800",
    features: [
      "Nutritious Meal Plans",
      "RO Purified Water",
      "Spacious Seating",
      "Regular Quality Audits"
    ],
    specs: [
      { label: "Capacity", value: "200+ Students" },
      { label: "Cuisine", value: "Multi-cuisine" },
      { label: "Quality Rating", value: "Grade A" }
    ]
  },
  {
    title: "Central Stores",
    slug: "central-stores",
    description: "Efficiently managed inventory for high-grade chemicals, glassware, and sophisticated lab equipment.",
    longDescription: "Our Central Stores facility ensures that academic and research activities are never interrupted. We maintain a rigorous inventory of high-purity chemicals, specialized glassware, and equipment, all stored under appropriate safety and environmental conditions.",
    icon: Box,
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800",
    features: [
      "Automated Inventory Tracking",
      "Hazardous Material Safety",
      "Cool Storage Facilities",
      "Bulk Procurement Efficiency"
    ],
    specs: [
      { label: "Inventory Count", value: "5,000+ Items" },
      { label: "Safety System", value: "NFPA Compliant" },
      { label: "Supply Chain", value: "Direct OEM Tie-ups" }
    ]
  },
  {
    title: "Play Ground",
    slug: "play-ground",
    description: "Expansive outdoor play area for various sports and recreational activities.",
    longDescription: "Our expansive playground provides students with ample space for outdoor sports, fitness routines, and large recreational events, promoting physical wellness and teamwork.",
    icon: Trees,
    image: "https://images.unsplash.com/photo-1529900965798-f40a33654f5a?auto=format&fit=crop&q=80&w=800",
    features: ["Outdoor Sports", "Athletics Track", "Recreational Space", "Well-Maintained"],
    specs: [
      { label: "Type", value: "Outdoor Field" },
      { label: "Usage", value: "Sports & Events" },
      { label: "Access", value: "All Students" }
    ]
  },
  {
    title: "Other Facilities",
    slug: "other-facilities",
    description: "Additional campus amenities supporting a comprehensive student experience.",
    longDescription: "Beyond our core academic and recreational spaces, the campus is equipped with various other facilities including dedicated parking, security outposts, and student support kiosks to ensure a seamless daily experience.",
    icon: LayoutGrid,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    features: ["Campus Security", "Parking Zones", "Support Kiosks", "Accessibility Support"],
    specs: [
      { label: "Scope", value: "Campus-wide" },
      { label: "Availability", value: "24/7 Support" },
      { label: "Focus", value: "Student Convenience" }
    ]
  },
  {
    title: "Chalapathi Drug Testing Laboratory",
    slug: "drug-testing-lab",
    description: "Advanced testing facility for pharmaceutical quality control and research analysis.",
    longDescription: "The Chalapathi Drug Testing Laboratory is equipped with high-precision analytical instruments to conduct rigorous quality control and research-based testing of pharmaceutical formulations.",
    icon: FlaskConical,
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800",
    features: ["Quality Control", "Analytical Testing", "Precision Instruments", "Research Support"],
    specs: [
      { label: "Specialty", value: "Drug Analysis" },
      { label: "Equipment", value: "High-Precision" },
      { label: "Standards", value: "Industry Compliant" }
    ]
  },
  {
    title: "Medicinal Plant Garden",
    slug: "medicinal-garden",
    description: "A diverse collection of medicinal plants supporting botanical and pharmacognosy studies.",
    longDescription: "Our Medicinal Plant Garden is a living laboratory featuring a vast array of flora used in traditional and modern medicine, providing students with hands-on pharmacognosy education.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1466692476877-04f08ce38db0?auto=format&fit=crop&q=80&w=800",
    features: ["Rare Species", "Botanical Study", "Pharmacognosy", "Eco-friendly"],
    specs: [
      { label: "Plant Varieties", value: "200+ Species" },
      { label: "Type", value: "Botanical Garden" },
      { label: "Maintenance", value: "Organic" }
    ]
  },
  {
    title: "Library",
    slug: "library",
    description: "A comprehensive collection of books, journals, and digital resources for academic and research needs.",
    longDescription: "Our central library is a cornerstone of learning, housing a vast collection of pharmaceutical texts, scientific journals, and digital databases. It provides a quiet, conducive environment for study and research, equipped with modern amenities.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1572756622305-6364b9f8315e?auto=format&fit=crop&q=80&w=800",
    features: ["Extensive Collection", "Digital Resources", "Reading Halls", "24/7 Access"],
    specs: [
      { label: "Total Volumes", value: "10,000+" },
      { label: "Journals", value: "50+ Subscribed" },
      { label: "Seating Capacity", value: "150+" }
    ]
  },
  {
    title: "PPT Presentations",
    slug: "powerpoint-presentations",
    description: "Dedicated digital repository and screening rooms for academic presentations.",
    longDescription: "A specialized resource offering a digital repository of academic presentations and screening facilities to help students and faculty prepare, review, and deliver high-quality scientific talks.",
    icon: Presentation,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    features: ["Digital Repository", "Screening Rooms", "Academic Review", "Interactive Displays"],
    specs: [
      { label: "Resource Type", value: "Digital & Physical" },
      { label: "Access", value: "Institutional Network" },
      { label: "Support", value: "Technical Assistance" }
    ]
  },
  {
    title: "Computer cum Language Laboratory",
    slug: "computer-lab",
    description: "High-tech computing facility integrated with specialized language learning software.",
    longDescription: "This dual-purpose laboratory provides students with high-speed computing resources for research and data analysis, alongside advanced language software to enhance communication and professional skills.",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1571260899304-42507611e159?auto=format&fit=crop&q=80&w=800",
    features: ["High-speed Internet", "Language Software", "Programming Tools", "Research Access"],
    specs: [
      { label: "Terminals", value: "100+ Systems" },
      { label: "Software", value: "Industry Standard" },
      { label: "Focus", value: "IT & Communication" }
    ]
  },
  {
    title: "Audio-Visual Facility",
    slug: "audio-visual",
    description: "Multimedia rooms equipped for interactive learning and visual education.",
    longDescription: "Our Audio-Visual Facility supports modern pedagogical methods by providing multimedia resources, video conferencing capabilities, and specialized equipment for interactive learning sessions.",
    icon: Video,
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800",
    features: ["Multimedia Projection", "Video Conferencing", "Interactive Boards", "Sound Systems"],
    specs: [
      { label: "Technology", value: "Smart Classrooms" },
      { label: "Capacity", value: "Flexible Seating" },
      { label: "Usage", value: "Lectures & Seminars" }
    ]
  },
  {
    title: "Pharmacy",
    slug: "pharmacy",
    description: "On-campus pharmacy providing essential medicines and practical dispensing experience.",
    longDescription: "The institutional pharmacy serves the health needs of the campus community while functioning as a practical training ground for students to learn dispensing, inventory management, and patient interaction.",
    icon: Pill,
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800",
    features: ["Essential Medicines", "Clinical Training", "Inventory Management", "Patient Counseling"],
    specs: [
      { label: "Services", value: "Dispensing & Care" },
      { label: "Training", value: "Hands-on Practice" },
      { label: "Operations", value: "Licensed Facility" }
    ]
  },
  {
    title: "Student Recreation Centre",
    slug: "recreation-centre",
    description: "A vibrant space for relaxation, socialization, and extracurricular activities.",
    longDescription: "Designed to foster a balanced campus life, the Student Recreation Centre offers lounges, indoor games, and collaborative spaces where students can unwind, socialize, and engage in extracurricular pursuits.",
    icon: Gamepad2,
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&q=80&w=800",
    features: ["Lounge Areas", "Indoor Games", "Social Spaces", "Event Zones"],
    specs: [
      { label: "Environment", value: "Relaxed & Vibrant" },
      { label: "Activities", value: "Extracurricular" },
      { label: "Access", value: "Student Community" }
    ]
  }
];
