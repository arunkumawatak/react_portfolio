export interface Company {
  id: string;
  name: string;
  role: string;
  period: string;
  duration: string;
  overview: string;
  responsibilities: string[];
  projectIds: string[];
  techStack: string[];
}

export const companies: Company[] = [
  {
    id: "freelance",
    name: "Freelance / Independent",
    role: "Senior Flutter Developer",
    period: "2024 — Present",
    duration: "1+ yr",
    overview:
      "Working as an independent Flutter developer, partnering with startups and businesses across India to build production-grade mobile applications. From legal-tech to agri-tech, delivering end-to-end mobile solutions that serve real users daily.",
    responsibilities: [
      "Shipped 8+ production mobile apps across legal-tech, pharma, and agri-tech verticals",
      "Built and published apps on both Google Play Store and Apple App Store independently",
      "Developed dual-app platforms (User + Admin) with role-based access and real-time features",
      "Integrated Cashfree, Razorpay payment gateways and WebRTC for video consultations",
      "Managed full project lifecycle from client requirement gathering to store deployment",
    ],
    projectIds: ["consultkiya", "dawabajar"],
    techStack: ["Flutter", "Dart", "Firebase", "WebRTC", "Cashfree", "Razorpay"],
  },
  {
    id: "techvista",
    name: "TechVista Solutions",
    role: "Flutter Developer",
    period: "2023 — 2024",
    duration: "1.5 yrs",
    overview:
      "Worked as a core Flutter developer at TechVista Solutions, building enterprise-grade HR and workforce management applications. Led the mobile development for their flagship HRMS product used by multiple organizations for daily operations.",
    responsibilities: [
      "Architected and built GPS + selfie-based geofenced attendance system handling 500+ daily punches",
      "Developed multi-level approval workflows for leaves, overtime, and reimbursements",
      "Implemented anti-spoofing measures including mock location detection and anomaly detection",
      "Deployed Nway HRMS to both Play Store and App Store with zero-downtime releases",
      "Collaborated with backend team on REST API design and real-time data sync architecture",
    ],
    projectIds: ["nway-hrms"],
    techStack: ["Flutter", "Dart", "GPS/Geofencing", "Camera API", "Firebase", "REST APIs"],
  },
  {
    id: "encanto",
    name: "Encanto Technologies",
    role: "Junior Flutter Developer",
    period: "2022 — 2023",
    duration: "1 yr",
    overview:
      "Started my professional journey at Encanto Technologies, rapidly growing from junior developer to handling full app builds independently. Built e-commerce and SaaS applications across education and fresh produce verticals.",
    responsibilities: [
      "Built Green Chopper — a cross-platform fresh vegetable e-commerce app published on both stores",
      "Developed EduSmart — a multi-role school management SaaS with attendance, exams, and chat",
      "Integrated Google Maps API for delivery tracking and real-time order management",
      "Implemented role-based authentication systems for multi-stakeholder platforms",
      "Learned production deployment workflows, CI/CD pipelines, and app store optimization",
    ],
    projectIds: ["greenchopper", "edusmart"],
    techStack: ["Flutter", "Dart", "Firebase", "Google Maps", "Payment Gateway"],
  },
];

export const getCompanyById = (id: string) => companies.find((c) => c.id === id);
