export interface Service {
  id: string;
  number: string;
  iconName: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
}

export const SERVICES: Service[] = [
  {
    id: "web-development",
    number: "01",
    iconName: "Globe",
    title: "Web Development",
    shortDescription: "Custom modern web applications, SaaS platforms, and enterprise solutions.",
    description: "We build scalable, high-performance web applications tailored to your business needs using Next.js, React, TypeScript, and modern CSS frameworks.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    id: "mobile-development",
    number: "02",
    iconName: "Smartphone",
    title: "Mobile App Development",
    shortDescription: "Native-quality cross-platform mobile apps for iOS and Android.",
    description: "Delivering intuitive, fast, and feature-rich mobile applications using Flutter and React Native, ensuring seamless performance across iOS and Android.",
    technologies: ["Flutter", "React Native", "iOS", "Android", "Firebase"],
  },
  {
    id: "artificial-intelligence",
    number: "03",
    iconName: "BrainCircuit",
    title: "Artificial Intelligence",
    shortDescription: "Custom AI agent integration, LLMs, and intelligent digital assistants.",
    description: "Empower your product with generative AI capabilities, custom agents, prompt engineering, and intelligent workflow automation built for speed and precision.",
    technologies: ["Python", "FastAPI", "OpenAI", "LangChain", "Vector DBs"],
  },
  {
    id: "machine-learning",
    number: "04",
    iconName: "Cpu",
    title: "Machine Learning",
    shortDescription: "Predictive models, computer vision algorithms, and data analytics pipelines.",
    description: "We design, train, and deploy customized machine learning models for classification, anomaly detection, predictive forecasting, and pattern recognition.",
    technologies: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "Pandas"],
  },
  {
    id: "saas-development",
    number: "05",
    iconName: "Layers",
    title: "SaaS Development",
    shortDescription: "End-to-end cloud-native SaaS product architecture and subscription engines.",
    description: "Transform your vision into a production-ready SaaS product with multi-tenant architecture, automated subscription billing, user analytics, and robust APIs.",
    technologies: ["Next.js", "PostgreSQL", "Stripe", "Supabase", "Docker"],
  },
  {
    id: "backend-api",
    number: "06",
    iconName: "Server",
    title: "Backend / API Development",
    shortDescription: "High-throughput microservices, RESTful & GraphQL APIs, and server infrastructure.",
    description: "Architecting resilient, secure, and blazing-fast backends designed to scale seamlessly under high traffic loads with zero downtime.",
    technologies: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    id: "cloud-devops",
    number: "07",
    iconName: "Cloud",
    title: "Cloud & DevOps",
    shortDescription: "Automated CI/CD pipelines, containerization, and cloud infrastructure management.",
    description: "Optimize your infrastructure with automated deployment pipelines, infrastructure-as-code, Docker containers, and 24/7 cloud monitoring.",
    technologies: ["Docker", "GitHub Actions", "Cloudflare", "AWS", "Kubernetes"],
  },
  {
    id: "ui-ux-design",
    number: "08",
    iconName: "Layout",
    title: "UI / UX Design",
    shortDescription: "User-centric interface design, design systems, and visual experience prototyping.",
    description: "Creating visually striking, ergonomic, and accessible user interfaces that drive user engagement and provide effortless navigation.",
    technologies: ["Figma", "Design Systems", "Prototyping", "Wireframing", "Tailwind CSS"],
  },
];
