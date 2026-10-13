export interface Project {
  id: string;
  title: string;
  category: "Web" | "Mobile" | "AI" | "SaaS";
  shortDescription: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  demoUrl: string;
}

export const PROJECTS: Project[] = [
  {
    id: "cortexai",
    title: "CortexAI",
    category: "SaaS",
    shortDescription:
      "Live AI-powered SaaS platform that brings business operations, data, and growth intelligence into one clear workspace.",
    description:
      "A production-ready SaaS product built for real business operations, combining AI-powered workflows, operational clarity, and scalable dashboards.",
    technologies: ["Next.js", "TypeScript", "AI", "SaaS"],
    image: "/images/projects/business-analytics.jpg",
    imageAlt: "CortexAI business intelligence dashboard",
    demoUrl: "https://myfrontend-bice.vercel.app/",
  },
  {
    id: "ai-crop-doctor",
    title: "AI Crop Doctor",
    category: "AI",
    shortDescription:
      "Computer vision machine learning platform for diagnosing crop diseases from smartphone imagery.",
    description:
      "Built for agricultural specialists, this platform processes leaf photos using deep learning CNNs to detect crop stress and disease early.",
    technologies: ["Python", "PyTorch", "Flutter", "FastAPI"],
    image: "/images/projects/ai-crop-doctor.jpg",
    imageAlt: "AI Crop Doctor computer vision diagnostics",
    demoUrl: "#",
  },
  {
    id: "ai-study-assistant",
    title: "AI Study Assistant",
    category: "AI",
    shortDescription:
      "Generative AI study platform providing instant flashcards, summary generation, and interactive tutoring.",
    description:
      "An AI-native learning platform that converts lectures, PDFs, and notes into structured revision guides and practice exams.",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/ai-study-assistant.jpg",
    imageAlt: "AI Study Assistant digital learning platform",
    demoUrl: "#",
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction",
    category: "AI",
    shortDescription:
      "Predictive real estate valuation engine powered by multi-variable regression models.",
    description:
      "Processes historical property data, spatial proximity, and market trends to deliver real-time home valuation estimates.",
    technologies: ["Python", "Scikit-learn", "FastAPI", "React"],
    image: "/images/projects/house-price-prediction.jpg",
    imageAlt: "House Price Prediction real estate analytics",
    demoUrl: "#",
  },
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    category: "Web",
    shortDescription:
      "High-performance headless e-commerce store with instant search and multi-currency checkout.",
    description:
      "Designed for scaling brands with modular cart management, instant catalog indexing, and automated inventory sync.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "/images/projects/ecommerce.jpg",
    imageAlt: "E-Commerce Platform online shopping store",
    demoUrl: "#",
  },
  {
    id: "university-management-system",
    title: "University Management System",
    category: "SaaS",
    shortDescription:
      "Comprehensive web platform for academic administration, grading, and student registration.",
    description:
      "Integrated institutional system supporting course scheduling, faculty administration, fee processing, and student portals.",
    technologies: ["React", "TypeScript", "Python", "PostgreSQL"],
    image: "/images/projects/university-management.jpg",
    imageAlt: "University Management System campus administration",
    demoUrl: "#",
  },
  {
    id: "business-analytics-dashboard",
    title: "Business Analytics Dashboard",
    category: "SaaS",
    shortDescription:
      "Real-time metrics visualization platform with custom KPI tracking and automated reporting.",
    description:
      "Empowers executive teams to monitor live data streams, track conversion pipelines, and generate shareable metric reports.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/images/projects/business-analytics.jpg",
    imageAlt: "Business Analytics Dashboard real-time KPIs",
    demoUrl: "#",
  },
];
