// ── Centralized portfolio content ─────────────────────────────────────────────
// Semua data portofolio dipisah dari komponen, agar mudah dipelihara.

export const profile = {
  name: "Marwah Kamila Ahmad",
  initials: "MK",
  role: "Full Stack Developer & AI Research Intern",
  tagline:
    "Building clean, responsive, data-driven products across web platforms, enterprise dashboards, and computer vision research.",
  location: "Yogyakarta, Indonesia",
  availability: "Open to internships & full-stack roles",
  email: "hello@marwahkamila.dev",
  portrait: {
    light: "/src/assets/person.png",
    dark: "/src/assets/personwhite.png",
  },
  highlights: [
    {
      value: "Frontend",
      label: "React, TypeScript, responsive UI",
    },
    {
      value: "Backend",
      label: "ASP.NET, APIs, database design",
    },
    {
      value: "AI Research",
      label: "PyTorch, computer vision, evaluation",
    },
  ],
  badges: ["React", "TypeScript", "ASP.NET", "PyTorch"],
};

export const socials = [
  {
    title: "LinkedIn",
    handle: "marwah-kamila-ahmad",
    href: "https://www.linkedin.com/in/marwah-kamila-ahmad",
  },
  {
    title: "GitHub",
    handle: "marwahkamilaahmad",
    href: "https://github.com/Marwahkamilaahmad",
  },
  {
    title: "Instagram",
    handle: "@thisismarwah",
    href: "https://www.instagram.com/thisismarwah/",
  },
];

export const stacks = [
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "ts" },
  { name: "JavaScript", icon: "js" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "ASP.NET", icon: "dotnet" },
  { name: "Node.js", icon: "node" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "SQL Server", icon: "mssql" },
  { name: "Python", icon: "python" },
  { name: "PyTorch", icon: "pytorch" },
  { name: "Machine Learning", icon: "ml" },
  { name: "Computer Vision", icon: "cv" },
];

export const languages = [
  {
    name: "Indonesian",
    level: "Native",
    description: "Clear daily communication, product discussion, and writing.",
  },
  {
    name: "English",
    level: "Professional",
    description: "Documentation, team collaboration, and technical learning.",
  },
  {
    name: "Chinese",
    level: "Learning",
    description: "Basic communication and ongoing practice.",
  },
];

export const timeline = [
  {
    type: "Education",
    period: "2022 — 2025",
    place: "Universitas Gadjah Mada",
    title: "Software Engineering Foundation",
    description:
      "Built core competencies in software development, databases, web programming, and collaborative engineering workflows.",
  },
  {
    type: "Professional Experience",
    period: "Sep 2024 — Jan 2025",
    place: "HINO Motors Manufacturing Indonesia, Purwakarta",
    title: "Full Stack Developer",
    description:
      "Delivered an internal investment monitoring platform from database design through backend, frontend, reporting, and documentation.",
  },
  {
    type: "Internship",
    period: "Feb 2025 — Jun 2025",
    place: "PT Len Industri, Bandung",
    title: "Frontend Developer Internship",
    description:
      "Developed React and TypeScript dashboard interfaces for project monitoring and data visualization.",
  },
  {
    type: "Research Experience",
    period: "Mar 2026 — May 2026",
    place: "National Chung Cheng University, Taiwan",
    title: "TEEP AI Research Intern",
    description:
      "Worked on PyTorch, MeshMamba, computer vision, and ranking-based evaluation for 3D human pose estimation research.",
  },
];

export const projects = [
  {
    index: "01",
    title: "LEN Bitrix Dashboard",
    role: "Frontend Developer",
    assetFolder: "magang len",
    description:
      "Dashboard Bitrix untuk visualisasi data dan monitoring proyek divisi perusahaan, dikembangkan sebagai peningkatan dari dashboard sebelumnya.",
    responsibilities: [
      "Developed a dashboard website using React.js and TypeScript.",
      "Integrated RESTful APIs from backend services.",
      "Built responsive UI components.",
      "Implemented data visualization features.",
      "Collaborated with backend developers in Agile development processes.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "PostgreSQL",
      "Sequelize",
      "Tailwind CSS",
      "REST API",
    ],
    highlights: [
      "Improved monitoring efficiency through real-time visualization.",
      "Created responsive and reusable frontend components.",
      "Enhanced user experience compared to previous dashboard version.",
    ],
  },
  {
    index: "02",
    title: "HINO Division Website",
    role: "Full Stack Developer",
    assetFolder: "magang hino",
    description:
      "Website internal untuk pengelolaan dan pemantauan investasi finansial, dibangun end-to-end dari database hingga frontend dan backend.",
    responsibilities: [
      "Developed the entire system independently.",
      "Designed and implemented database architecture.",
      "Built frontend and backend features using ASP.NET.",
      "Developed reporting and investment tracking modules.",
      "Created comprehensive documentation and user manuals.",
    ],
    technologies: ["ASP.NET MVC", "C#", "SQL Server", "JavaScript", "Bootstrap"],
    highlights: [
      "Delivered end-to-end full stack solution.",
      "Produced user documentation exceeding 90 pages.",
      "Improved investment monitoring and reporting process.",
    ],
  },
  {
    index: "03",
    title: "TEEP Taiwan Research Internship",
    role: "AI Research Intern",
    assetFolder: "research teep",
    rotateImage: true,
    description:
      "Research internship at National Chung Cheng University, Taiwan, focused on machine learning experimentation and human pose estimation systems.",
    responsibilities: [
      "Conducted machine learning research and experimentation.",
      "Developed PyTorch-based MeshMamba scoring pipeline.",
      "Implemented ranking-based evaluation systems.",
      "Performed model performance analysis and optimization.",
      "Conducted comparative studies on human pose estimation models.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "MeshMamba",
      "Deep Learning",
      "Computer Vision",
      "Human Pose Estimation",
    ],
    highlights: [
      "Developed a scoring pipeline for 3D human pose estimation.",
      "Improved hypothesis selection through ranking-based evaluation.",
      "Conducted research under international internship program.",
    ],
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];
