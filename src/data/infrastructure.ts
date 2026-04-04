import { 
  Dog, 
  Coffee, 
  Box, 
  Library, 
  Home, 
  Microscope, 
  Building2, 
  Trophy 
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
    title: "Animal House",
    slug: "animal-house",
    description: "CPCSEA approved facility dedicated to pharmacological research and ethical animal experimentation.",
    longDescription: "Our Animal House is a state-of-the-art facility meticulously designed according to CPCSEA (Committee for the Purpose of Control and Supervision of Experiments on Animals) guidelines. It serves as an essential hub for pharmacological and toxicological research, ensuring that all ethical standards are met while providing a controlled environment for scientific inquiry.",
    icon: Dog,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800", // Generic lab/animal info image
    features: [
      "Ethical Research Compliance",
      "Controlled Environment Systems",
      "Dedicated Quarantine Zone",
      "Sterilized Housing Units"
    ],
    specs: [
      { label: "Certification", value: "CPCSEA Approved" },
      { label: "Total Area", value: "2,500 Sq. Ft." },
      { label: "Ventilation", value: "HEPA Filtered" }
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
    title: "Drug Museum",
    slug: "drug-museum",
    description: "An extensive collection of pharmaceutical dosage forms, crude drugs, and medicinal plant samples.",
    longDescription: "The Drug Museum at CLPT serves as a living encyclopedia of pharmacy. It houses a vast collection of traditional and modern dosage forms, crude drug samples, and comprehensive information on medicinal plants, providing students with a tangible link to pharmaceutical history and practice.",
    icon: Library,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=800",
    features: [
      "Historical Dosage Forms",
      "Phytochemistry Exhibits",
      "Packaging Evolution Gallery",
      "Botanical Identification"
    ],
    specs: [
      { label: "Total Samples", value: "1,200+" },
      { label: "Special Sections", value: "Rare Crude Drugs" },
      { label: "Learning Tool", value: "Interactive QR Labels" }
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
    description: "Modern auditorium with audio-visual equipment for international conferences, guest lectures, and student activities.",
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
    title: "Sports Room",
    slug: "sports-room",
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
  }
];
