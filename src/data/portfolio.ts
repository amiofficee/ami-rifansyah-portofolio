import { PersonalInfo, TechStack, Project, Experience, GalleryImage } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Ami Rifansyah",
  title: "Fullstack Developer",
  description: "Seorang Fullstack Developer dengan pengalaman di bidang pengembangan web dan aplikasi mobile. Berpengalaman dalam teknologi modern seperti Next.js, React, Node.js, dan berbagai database.",
  email: "ami.rifansyah@email.com",
  linkedin: "https://linkedin.com/in/ami-rifansyah",
  github: "https://github.com/ami-rifansyah",
  cv: "/cv-ami-rifansyah.pdf",
  image: "/images/profile/ami2.jpeg"
};

export const techStack: TechStack[] = [
  {
    category: "Frontend",
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Redux", "Zustand"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express.js", "Laravel", "PHP", "REST API", "GraphQL"]
  },
  {
    category: "Database",
    technologies: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Prisma", "Sequelize"]
  },
  {
    category: "Tools & Others",
    technologies: ["Git", "Docker", "Vercel", "Postman", "Figma", "Jira", "AWS"]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Admin Panel Inventory",
    description: "Sistem manajemen inventori dengan fitur dashboard, laporan, dan integrasi barcode scanner.",
    stack: ["Next.js", "Tailwind CSS", "Node.js", "MySQL", "JWT"],
    role: "Fullstack Developer",
    features: ["Login dengan JWT", "Dark mode", "Dynamic table", "Barcode scanner", "Export PDF"],
    github: "https://github.com/ami-rifansyah/inventory-admin",
    demo: "https://inventory-admin.vercel.app",
    image: "/projects/inventory-admin.png"
  },
  {
    id: "2",
    title: "Kanban Board App",
    description: "Aplikasi kanban board untuk manajemen task dan project dengan drag & drop.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "React DnD"],
    role: "Frontend Developer",
    features: ["Drag & drop", "Real-time updates", "Task categories", "User management"],
    github: "https://github.com/ami-rifansyah/kanban-board",
    demo: "https://kanban-board.vercel.app",
    image: "/projects/kanban-board.png"
  },
  {
    id: "3",
    title: "E-commerce Platform",
    description: "Platform e-commerce lengkap dengan payment gateway dan admin panel.",
    stack: ["Next.js", "Stripe", "MongoDB", "Redux", "Tailwind CSS"],
    role: "Fullstack Developer",
    features: ["Payment integration", "User authentication", "Admin dashboard", "Order management"],
    github: "https://github.com/ami-rifansyah/ecommerce-platform",
    demo: "https://ecommerce-platform.vercel.app",
    image: "/projects/ecommerce.png"
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "OtoAppraisal",
    position: "Fullstack Developer",
    period: "2023 - Sekarang",
    description: "Menangani pengembangan fitur appraisal kendaraan, integrasi API Otospector, dan optimalisasi performa proses QC.",
    achievements: [
      "Mengembangkan sistem appraisal kendaraan dengan integrasi API pihak ketiga",
      "Mengoptimalkan performa aplikasi hingga 40% lebih cepat",
      "Mengimplementasikan sistem QC yang efisien",
      "Mentoring junior developer dalam tim"
    ]
  },
  {
    id: "2",
    company: "TechStart Indonesia",
    position: "Frontend Developer",
    period: "2022 - 2023",
    description: "Berfokus pada pengembangan UI/UX yang responsif dan modern untuk berbagai aplikasi web.",
    achievements: [
      "Mengembangkan 5+ aplikasi web dengan React dan Next.js",
      "Meningkatkan user experience dengan implementasi design system",
      "Kolaborasi dengan tim design untuk optimalisasi UI/UX",
      "Mengoptimalkan performa loading hingga 60%"
    ]
  },
  {
    id: "3",
    company: "Digital Solutions Co.",
    position: "Junior Developer",
    period: "2021 - 2022",
    description: "Belajar dan berkontribusi dalam pengembangan aplikasi web menggunakan teknologi modern.",
    achievements: [
      "Mengembangkan fitur-fitur untuk aplikasi internal perusahaan",
      "Belajar dan mengimplementasikan best practices dalam coding",
      "Berpartisipasi dalam code review dan pair programming",
      "Menyelesaikan 10+ bug fixes dan minor features"
    ]
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "Dashboard Analytics",
    description: "Dashboard analytics dengan visualisasi data yang interaktif",
    imageUrl: "/gallery/dashboard-analytics.jpg",
    category: "Dashboard"
  },
  {
    id: "2",
    title: "Mobile App UI",
    description: "Interface aplikasi mobile dengan design modern",
    imageUrl: "/gallery/mobile-app-ui.jpg",
    category: "Mobile"
  },
  {
    id: "3",
    title: "E-commerce Homepage",
    description: "Halaman utama platform e-commerce",
    imageUrl: "/gallery/ecommerce-homepage.jpg",
    category: "E-commerce"
  },
  {
    id: "4",
    title: "Admin Panel",
    description: "Panel admin dengan fitur manajemen yang lengkap",
    imageUrl: "/gallery/admin-panel.jpg",
    category: "Admin"
  },
  {
    id: "5",
    title: "Kanban Board",
    description: "Aplikasi kanban board untuk manajemen project",
    imageUrl: "/gallery/kanban-board.jpg",
    category: "Project Management"
  },
  {
    id: "6",
    title: "Landing Page",
    description: "Landing page dengan design yang menarik",
    imageUrl: "/gallery/landing-page.jpg",
    category: "Landing Page"
  }
]; 