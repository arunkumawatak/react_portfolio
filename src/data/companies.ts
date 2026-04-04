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
    id: "indhanpay",
    name: "IndhanPay Pvt. Ltd.",
    role: "Flutter Developer",
    period: "Feb 2025 — Present",
    duration: "1+ yr",
    overview:
      "Working on a production-grade fuel station management system integrating mobile apps with POS machines, NFC, and real-time transaction systems. Focused on solving complex payment flows and hardware-level integrations in a live environment.",
    responsibilities: [
      "Developed multi-role mobile app (Admin, Manager, Employee) handling fuel sales, attendance, and transaction tracking",
      "Integrated Pine Labs POS machine with mobile app using native Android communication (platform channels)",
      "Implemented NFC-based user identification and role-based access control",
      "Handled multi-payment flows including POS, QR, cash, and credit with unified transaction logic",
      "Solved async POS response issues and ensured reliable transaction state management",
      "Built background services for real-time fuel price updates and transaction sync",
    ],
    projectIds: ["indhanpay"],
    techStack: ["Flutter", "Dart", "Firebase", "Platform Channels", "NFC", "POS Integration"],
  },

  {
    id: "nway",
    name: "NWAY Technologies Pvt. Ltd.",
    role: "Flutter Developer",
    period: "Sept 2024 — Jan 2025",
    duration: "5 months",
    overview:
      "Worked on enterprise HRMS and workforce management applications used by on-field teams. Focused on geofencing, role-based workflows, and large-scale attendance systems.",
    responsibilities: [
      "Built GPS-based attendance system with geofencing and selfie verification",
      "Handled real-world GPS accuracy issues and edge cases in field conditions",
      "Developed multi-level approval workflows for leave, overtime, and reimbursements",
      "Managed role-based access for employees, managers, and HR within a single app",
      "Collaborated with backend team for API integration and real-time data handling",
    ],
    projectIds: ["nway-hrms"],
    techStack: ["Flutter", "Dart", "GPS/Geofencing", "Camera API", "Firebase", "REST APIs"],
  },

  {
    id: "encanto",
    name: "Encanto Technologies LLP",
    role: "Flutter Developer",
    period: "June 2023 — Aug 2024",
    duration: "1.2 yrs",
    overview:
      "Worked on multiple client projects across e-commerce, education, and marketplace domains. Built and maintained production apps with focus on UI, API integration, and core business logic.",
    responsibilities: [
      "Developed Green Chopper — e-commerce app with dynamic filters, cart management, and Razorpay integration",
      "Worked on EduSmart — school management app with attendance, chat, and content modules",
      "Rebuilt DawaBajar from unstable state, implementing custom cart logic and GST-based pricing system",
      "Integrated Firebase authentication, push notifications, and API-driven dynamic data",
      "Handled complex frontend logic including product availability, filtering, and pricing conditions",
    ],
    projectIds: ["greenchopper", "edusmart", "dawabajar"],
    techStack: ["Flutter", "Dart", "Firebase", "REST APIs", "Payment Gateway"],
  },
];
export const getCompanyById = (id: string) => companies.find((c) => c.id === id);
