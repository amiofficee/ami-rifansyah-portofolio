import { PersonalInfo, TechStack, Project, Experience, GalleryImage } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Ami Rifansyah",
  title: "Fullstack Developer",
  description: "A Fullstack Developer with experience in web and mobile application development. Experienced in modern technologies like Next.js, React, Node.js, and various databases.",
  email: "ami.rifansyah@email.com",
  linkedin: "https://www.linkedin.com/in/ami-rifansyah-1136b9209/",
  github: "https://github.com/amirifansyah",
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
    description: "Inventory management system with dashboard, reporting, and barcode scanner integration features.",
    stack: ["Next.js", "Tailwind CSS", "Node.js", "MySQL", "JWT"],
    role: "Fullstack Developer",
    features: ["JWT Login", "Dark mode", "Dynamic table", "Barcode scanner", "Export PDF"],
    github: "https://github.com/ami-rifansyah/inventory-admin",
    demo: "https://inventory-admin.vercel.app",
    image: "/projects/inventory-admin.png"
  },
  {
    id: "2",
    title: "Kanban Board App",
    description: "Kanban board application for task and project management with drag & drop.",
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
    description: "Complete e-commerce platform with payment gateway and admin panel.",
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
    period: "2023 - Present",
    description: "Handling vehicle appraisal feature development, Otospector API integration, and QC process performance optimization.",
    achievements: [
      "Developed vehicle appraisal system with third-party API integration",
      "Optimized application performance by 40% faster",
      "Implemented efficient QC system",
      "Mentored junior developers in the team"
    ]
  },
  {
    id: "2",
    company: "TechStart Indonesia",
    position: "Frontend Developer",
    period: "2022 - 2023",
    description: "Focused on responsive and modern UI/UX development for various web applications.",
    achievements: [
      "Developed 5+ web applications with React and Next.js",
      "Improved user experience with design system implementation",
      "Collaborated with design team for UI/UX optimization",
      "Optimized loading performance by 60%"
    ]
  },
  {
    id: "3",
    company: "Digital Solutions Co.",
    position: "Junior Developer",
    period: "2021 - 2022",
    description: "Learning and contributing to web application development using modern technologies.",
    achievements: [
      "Developed features for internal company applications",
      "Learned and implemented best practices in coding",
      "Participated in code review and pair programming",
      "Completed 10+ bug fixes and minor features"
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