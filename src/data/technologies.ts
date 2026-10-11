export interface TechCategory {
  category: string;
  description: string;
  items: {
    name: string;
    description: string;
    iconName: string;
    highlight?: boolean;
  }[];
}

export const TECHNOLOGIES_DATA: TechCategory[] = [
  {
    category: "Frontend",
    description: "Modern, reactive, and responsive user interfaces optimized for speed.",
    items: [
      { name: "Next.js", description: "React framework for production App Router & SSR.", iconName: "Code2", highlight: true },
      { name: "React", description: "Component-based UI library for dynamic user interfaces.", iconName: "Atom" },
      { name: "TypeScript", description: "Type-safe JavaScript for robust codebases.", iconName: "FileCode" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework for custom modern design.", iconName: "Palette" },
    ],
  },
  {
    category: "Backend",
    description: "Scalable microservices, robust APIs, and server infrastructure.",
    items: [
      { name: "Python", description: "Primary language for data, AI, and web services.", iconName: "Terminal", highlight: true },
      { name: "FastAPI", description: "High-performance Python web framework for APIs.", iconName: "Zap" },
      { name: "Node.js", description: "Event-driven asynchronous JavaScript runtime.", iconName: "Server" },
      { name: "PHP", description: "Reliable backend scripting language for web platforms.", iconName: "FileText" },
    ],
  },
  {
    category: "Mobile",
    description: "Cross-platform mobile applications for iOS and Android.",
    items: [
      { name: "Flutter", description: "Google's UI toolkit for natively compiled mobile apps.", iconName: "Smartphone", highlight: true },
      { name: "React Native", description: "Cross-platform framework using React & JavaScript.", iconName: "Tablet" },
    ],
  },
  {
    category: "AI / ML",
    description: "Intelligent algorithm development, neural networks, and model training.",
    items: [
      { name: "Python", description: "Ecosystem language for Machine Learning & Data Science.", iconName: "Cpu" },
      { name: "Scikit-learn", description: "Machine learning library for predictive data analysis.", iconName: "Binary" },
      { name: "TensorFlow", description: "End-to-end open source platform for machine learning.", iconName: "Boxes" },
      { name: "PyTorch", description: "Flexible deep learning framework for research & production.", iconName: "Flame", highlight: true },
    ],
  },
  {
    category: "Database",
    description: "High-performance relational, document, and cloud database engines.",
    items: [
      { name: "PostgreSQL", description: "Advanced open-source relational database engine.", iconName: "Database", highlight: true },
      { name: "MySQL", description: "Relational database system for scalable web platforms.", iconName: "HardDrive" },
      { name: "MongoDB", description: "Flexible document-based NoSQL database engine.", iconName: "FolderGit2" },
      { name: "Supabase", description: "Open-source Firebase alternative with PostgreSQL power.", iconName: "Layers" },
    ],
  },
  {
    category: "DevOps",
    description: "Automated deployment pipelines, containerization, and cloud delivery.",
    items: [
      { name: "Docker", description: "Containerization platform for reliable environment isolation.", iconName: "Box", highlight: true },
      { name: "GitHub", description: "Code hosting platform for version control & collaboration.", iconName: "GitBranch" },
      { name: "GitHub Actions", description: "Automated CI/CD workflows for building & testing.", iconName: "Workflow" },
      { name: "Cloudflare", description: "Global edge network, CDN, and DNS security.", iconName: "Shield" },
    ],
  },
];
