import { PersonalInfo, TechStack, Project, Experience, GalleryImage } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Ami Rifansyah",
  title: "Fullstack Developer",
  description: "A Fullstack Developer with experience in web and mobile application development. Experienced in modern technologies like Next.js, React, Node.js, and various databases.",
  email: "amirifansyah5@gmail.com",
  linkedin: "https://www.linkedin.com/in/ami-rifansyah-1136b9209/",
  github: "https://github.com/amirifansyah",
  cv: "/cv-ami-rifansyah.pdf",
  image: "/images/profile/ami2.jpeg"
};

import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaPhp,
  FaGithub,
  FaDocker,
  FaAws,
  FaVuejs,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiSequelize,
  SiVercel,
  SiPostman,
  SiFirebase,
  SiBitbucket,
  SiChakraui,
} from 'react-icons/si';
import { GiPolarBear } from 'react-icons/gi';

export const techStack: TechStack[] = [
  {
    category: "Frontend",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Nuxt.js", icon: SiNuxtdotjs, color: "#00DC82" },
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Vue.js", icon: FaVuejs, color: "#42b883" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
      // { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Zustand", icon: GiPolarBear, color: "#FF9900" }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "REST API", icon: SiPostman, color: "#FF6C37" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }
      // { name: "GraphQL", icon: SiGraphql, color: "#E10098" }
    ]
  },
  {
    category: "Database",
    technologies: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      // { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Redis", icon: SiRedis, color: "#D82C20" },
      // { name: "Prisma", icon: SiPrisma, color: "#0C344B" },
      { name: "Sequelize", icon: SiSequelize, color: "#52B0E7" }
    ]
  },
  {
    category: "Tools & Others",
    technologies: [
      // { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      // { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      // { name: "Jira", icon: SiJira, color: "#0052CC" },
      { name: "AWS", icon: FaAws, color: "#FF9900" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E‑Commerce Scraping Extension",
    description: "Chrome extension for scraping product data from multiple e-commerce platforms such as Tokopedia, Shopee, 1688, and Taobao. The system extracts product information using injected scripts and stores results in Firebase.",
    stack: ["JavaScript", "nodeJS", "Python", "Firebase", "Chrome Extension", "Inject Script"],
    role: "Fullstack Developer",
    features: [
      "Login with Firebase Authentication",
      "Scraping product details from Tokopedia, Shopee, 1688, Taobao",
      "Injected script for DOM extraction",
      "Automatic product categorization",
      "Store and sync data via Firebase Firestore",
      "Multi-language support",
      "Export data to CSV/JSON"
    ],
    // github: "https://github.com/ami-rifansyah/chrome-scraper-extension",
    // demo: "https://chrome.google.com/webstore/...",
    image: "/images/project/extention-chrome.png"
  },
  {
    id: "2",
    title: "E‑Commerce Import Platform",
    description: "Web platform to assist importing products from China, Thailand, Korea, USA, and Japan. The system helps users search, manage, and track imported goods efficiently with real-time updates and task management features.",
    stack: ["JavaScript", "React.js", "Chakra UI", "Firebase", "React DnD"],
    role: "Frontend Developer",
    features: [
      "Drag & drop interface for managing imported items",
      "Real-time updates with Firebase",
      "Task and order categorization",
      "User authentication and management via Firebase",
      "Multi-country product tracking and filtering",
      "Responsive and user-friendly interface"
    ],
    // github: "https://github.com/ami-rifansyah/ecommerce-import-platform",
    // demo: "https://kanban-board.vercel.app",
    image: "/images/project/forwarder.png"
  },
  {
    id: "3",
    title: "E‑Commerce Admin Platform",
    description: "Admin panel for managing customer purchases, tracking shipments from abroad to Indonesia, and facilitating communication between admins. System handles automatic notifications via email, WhatsApp, or SMS, and integrates payment gateways like Xendit and Midtrans. The platform includes a Kanban view for easy task visualization and efficient workflow management.",
    stack: [
      "Vue.js",
      "React.js",
      "Nuxt.js",
      "Next.js",
      "Tailwind CSS",
      "Chakra UI",
      "Bootstrap",
      "Firebase",
      "Redux",
      "Laravel",
      "MySQL",
      "MongoDB"
    ],
    role: "Fullstack Developer",
    features: [
      "Payment integration with Xendit and Midtrans",
      "User authentication and role-based access",
      "Admin dashboard for managing shipments and orders",
      "Kanban board for tracking tasks and shipment progress",
      "Internal chat between admin users",
      "Automatic notifications to users via email, WhatsApp, and SMS",
      "Dynamic order and inventory management",
      "Multi-stack frontend and backend support for scalable architecture"
    ],
    // github: "https://github.com/ami-rifansyah/ecommerce-admin-platform",
    // demo: "https://ecommerce-admin-platform.vercel.app",
    image: "/images/project/forwarder-admin.png"
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "IMPORTIR.COM",
    position: "Full Stack Engineer",
    period: "September 2020 - June 2021",
    description: "Bug fixing, creating new features for application, internal RBAC implementation, and RESTful API development.",
    achievements: [
      "Fixed bugs and optimized existing features",
      "Created new application features",
      "Implemented internal RBAC system",
      "Developed RESTful APIs"
    ]
  },
  {
    id: "2",
    company: "IMPORTIR.COM",
    position: "Middle Full Stack Engineer",
    period: "July 2021 - May 2022",
    description: "Rebuilding and optimizing queries, maintaining mobile apps (iOS & Android), managing budgets and accounting features.",
    achievements: [
      "Rebuilt and optimized queries for the platform",
      "Maintained mobile apps (iOS & Android)",
      "Maintained budgeting and accounting modules"
    ]
  },
  {
    id: "3",
    company: "Deoapp.com",
    position: "Senior Full Stack Developer",
    period: "May 2022 - December 2023",
    description: "Bug fixing, creating new features, internal RBAC implementation, RESTful API development, scraping, and deploying new projects to production servers.",
    achievements: [
      "Fixed bugs and improved application stability",
      "Developed new application features",
      "Implemented internal RBAC system",
      "Created RESTful APIs",
      "Performed data scraping",
      "Deployed new projects to production"
    ]
  },
  {
    id: "4",
    company: "Forwarder.co.id",
    position: "Tech Lead Full Stack Developer",
    period: "December 2023 - September 2024",
    description: "Leading team, developing new features, internal RBAC, RESTful API, scraping, Chrome extension deployment, and payment integration with Xendit & Midtrans.",
    achievements: [
      "Fixed bugs and maintained system stability",
      "Developed new application features",
      "Implemented internal RBAC and RESTful APIs",
      "Scraping data for application needs",
      "Deployed Chrome extension to Chrome Web Store",
      "Integrated payment with Xendit and Midtrans",
      "Delegated tasks and managed the development team"
    ]
  },
  {
    id: "5",
    company: "Kelas Tambahan",
    position: "Lead Developer",
    period: "January 2023 - October 2024",
    description: "Discussing features with Product Owner, creating web applications including company profiles and educational platforms, bug fixes, and project deployment.",
    achievements: [
      "Collaborated with Product Owner to design new features",
      "Developed Web Sumber Karya Teknik",
      "Created company profile web applications",
      "Fixed bugs and optimized existing systems",
      "Developed web applications for Tofico"
    ]
  },
  {
    id: "6",
    company: "Mitra Unggul Solusi",
    position: "Full Stack Developer – Zuno",
    period: "October 2024 - September 2025",
    description: "Led development for Zuno platform, delivering scalable features while ensuring high code quality, maintainability, and best practices.",
    achievements: [
      "Designed and implemented new features for Zuno platform",
      "Optimized system architecture for performance and scalability",
      "Established coding standards and ensured consistent code quality",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with Product Owner and stakeholders for feature planning",
      "Integrated APIs and third-party services to extend platform capabilities"
    ]
  },
  {
    id: "7",
    company: "Grosir Mobil",
    position: "Full Stack Developer",
    period: "October 2025 - Present",
    description: "Developed and maintained web platform for automotive wholesale, providing guidance on technology stack and coding best practices.",
    achievements: [
      "Advised team on optimal technology stack choices (frontend, backend, database)",
      "Implemented clean code principles and coding standards across the project",
      "Reviewed and refactored existing code to improve readability and maintainability",
      "Created new features for automotive inventory management and analytics",
      "Optimized platform performance and ensured scalable architecture",
      "Mentored junior developers and conducted code reviews"
    ]
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "Dashboard Analytics",
    description: "Analytics dashboard with interactive data visualization",
    imageUrl: "/gallery/dashboard-analytics.jpg",
    category: "Dashboard"
  },
  {
    id: "2",
    title: "Mobile App UI",
    description: "Mobile application interface with modern design",
    imageUrl: "/gallery/mobile-app-ui.jpg",
    category: "Mobile"
  },
  {
    id: "3",
    title: "E-commerce Homepage",
    description: "E-commerce platform homepage",
    imageUrl: "/gallery/ecommerce-homepage.jpg",
    category: "E-commerce"
  },
  {
    id: "4",
    title: "Admin Panel",
    description: "Admin panel with complete management features",
    imageUrl: "/gallery/admin-panel.jpg",
    category: "Admin"
  },
  {
    id: "5",
    title: "Kanban Board",
    description: "Kanban board application for project management",
    imageUrl: "/gallery/kanban-board.jpg",
    category: "Project Management"
  },
  {
    id: "6",
    title: "Landing Page",
    description: "Landing page with attractive design",
    imageUrl: "/gallery/landing-page.jpg",
    category: "Landing Page"
  }
]; 