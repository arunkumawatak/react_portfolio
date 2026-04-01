export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  playStore?: string;
  appStore?: string;
  featured?: boolean;
  image: string;
  companyId?: string;
  contribution?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: "consultkiya",
    title: "ConsultKiya",
    subtitle: "Legal-Tech Platform",
    description: "Dual-app legal consultation platform with real-time video calls and in-app payments.",
    problem: "Users had no easy way to instantly connect with verified lawyers for legal consultation without visiting offices.",
    solution: "Built a dual-app platform (User + Lawyer) with real-time video calls, scheduling, and in-app payments.",
    impact: "Dual app serving both sides of the marketplace. Live on Play Store with real-time consultation capability.",
    tech: ["Flutter", "Firebase", "WebRTC", "Payment Gateway", "Push Notifications"],
    playStore: "https://play.google.com/store/search?q=consultkiya&c=apps",
    featured: true,
    image: "", // TODO: Add your image import here
    companyId: "freelance",
    contribution: "Led end-to-end development of both User and Lawyer apps, implemented WebRTC video calls, and integrated payment gateway for seamless transactions.",
    gallery: [], // TODO: Add gallery image imports here
  },
  {
    id: "nway-hrms",
    title: "Nway HRMS",
    subtitle: "Enterprise HR Operations",
    description: "GPS + selfie-based attendance system with multi-level approval workflows.",
    problem: "Companies needed geofenced attendance tracking with multi-level approval workflows.",
    solution: "Built a GPS + selfie-based punch system with hierarchical approval flows for leaves, OT, and reimbursements.",
    impact: "Live on both stores. Used by organizations for daily workforce management with zero manual attendance.",
    tech: ["Flutter", "GPS/Geofencing", "Camera API", "Firebase", "REST APIs"],
    playStore: "https://play.google.com/store/apps/details?id=com.nway.hrm.ios",
    appStore: "https://apps.apple.com/in/app/nway-hrms/id6742221199",
    featured: true,
    image: "", // TODO: Add your image import here
    companyId: "freelance",
    contribution: "Architected the geofencing attendance system, built multi-level approval workflows, and deployed to both app stores.",
    gallery: [],
  },
  {
    id: "dawabajar",
    title: "DawaBajar",
    subtitle: "B2B Pharma E-commerce",
    description: "B2B pharmaceutical marketplace with Cashfree integration and real-time inventory.",
    problem: "Medical suppliers lacked a digital platform for bulk medicine ordering with secure payments.",
    solution: "Built a B2B pharmaceutical marketplace with Cashfree integration and real-time inventory notifications.",
    impact: "Streamlined ordering for pharmacies. Cashfree-integrated payments processing real transactions.",
    tech: ["Flutter", "Cashfree", "Firebase", "Real-time Notifications"],
    playStore: "https://play.google.com/store/apps/details?id=com.encanto.dawabajar",
    image: "", // TODO: Add your image import here
    companyId: "freelance",
    contribution: "Built the complete B2B marketplace from scratch including Cashfree payment integration and real-time inventory management.",
    gallery: [],
  },
  {
    id: "greenchopper",
    title: "Green Chopper",
    subtitle: "Fresh Vegetables E-commerce",
    description: "Cross-platform e-commerce connecting local sources to customers with fresh produce.",
    problem: "Customers wanted fresh-cut vegetables delivered without markup and staleness.",
    solution: "Cross-platform e-commerce app connecting local sources directly to customers with fresh cutting on demand.",
    impact: "Published on both App Store & Play Store. Serving real customers with daily fresh deliveries.",
    tech: ["Flutter", "Firebase", "Payment Gateway", "Google Maps API"],
    playStore: "https://play.google.com/store/apps/details?id=com.greenchopper.android",
    appStore: "https://apps.apple.com/in/app/greenchopper/id6474066136",
    image: "", // TODO: Add your image import here
    companyId: "freelance",
    contribution: "Developed the full e-commerce flow including Google Maps delivery tracking, payment integration, and order management.",
    gallery: [],
  },
  {
    id: "edusmart",
    title: "EduSmart",
    subtitle: "School Management SaaS",
    description: "Comprehensive SaaS with real-time attendance, exam management, and in-app chat.",
    problem: "Schools needed a unified platform for attendance, exams, and communication.",
    solution: "Comprehensive SaaS with real-time attendance, exam management, role-based dashboards, and in-app chat.",
    impact: "Multi-role SaaS platform actively used by educational institutions.",
    tech: ["Flutter", "Firebase", "Chat System", "Role-based Auth"],
    playStore: "https://play.google.com/store/apps/details?id=com.encanto.edusmart",
    image: "", // TODO: Add your image import here
    companyId: "freelance",
    contribution: "Built the entire multi-role SaaS platform with role-based dashboards, real-time attendance, and in-app chat system.",
    gallery: [],
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured).slice(0, 3);
export const getProjectById = (id: string) => projects.find((p) => p.id === id);
export const getProjectsByCompany = (companyId: string) => projects.filter((p) => p.companyId === companyId);
