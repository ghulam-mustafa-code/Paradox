export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  shortDescription: string;
  image: string;
  iconName: string;
  tags: string[];
  status?: "Live" | "Beta" | "In Development";
  features: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "kirana-ai",
    name: "KiranaAI",
    category: "AI / Retail",
    tagline: "Smart Retail & Kiryana Store AI Management",
    shortDescription: "AI-powered smart management platform for local Kiryana and grocery stores.",
    image: "/images/products/kirana-ai.jpg",
    iconName: "Store",
    tags: ["AI", "Retail", "Inventory"],
    status: "Live",
    features: [
      "Smart Inventory Forecasting",
      "Automated Billing & POS",
      "Supplier Reordering AI",
      "Multilingual Voice Inputs"
    ],
  },
  {
    id: "fuelops",
    name: "FuelOps",
    category: "AI / Petrol Pump",
    tagline: "Operational Intelligence for Petrol Stations",
    shortDescription: "Petrol pump management and AI-powered operational intelligence platform.",
    image: "/images/products/fuelops.jpg",
    iconName: "Fuel",
    tags: ["AI", "Energy", "Fuel"],
    status: "Live",
    features: [
      "Real-time Tank Monitoring",
      "Shift Reconciliation & Audit",
      "Nozzle Sales Analytics",
      "Automated Loss Detection"
    ],
  },
  {
    id: "eduos",
    name: "EduOS",
    category: "AI / Education",
    tagline: "Intelligent School & Campus OS",
    shortDescription: "AI-powered school and college management platform for administration, students, teachers, attendance, academics, and analytics.",
    image: "/images/products/eduos.jpg",
    iconName: "GraduationCap",
    tags: ["AI", "EdTech", "Analytics"],
    status: "Live",
    features: [
      "Automated Attendance & Exam AI",
      "Socratic Student Assistant",
      "Parent & Faculty Portals",
      "Tuition & Fee Telemetry"
    ],
  },
  {
    id: "millai",
    name: "MillAI",
    category: "AI / Milling",
    tagline: "Industrial Grain & Flour Milling Intelligence",
    shortDescription: "AI-powered management system for flour, rice, grain, and other mills.",
    image: "/images/products/millai.jpg",
    iconName: "Factory",
    tags: ["AI", "Milling", "Supply Chain"],
    status: "Live",
    features: [
      "Raw Grain Quality Inspection",
      "Production Yield Analytics",
      "Maintenance Anomaly Alerts",
      "Bulk Shipment Dispatch"
    ],
  },
  {
    id: "factoryai",
    name: "FactoryAI",
    category: "AI / Manufacturing",
    tagline: "Smart Industrial Operations & Production Monitoring",
    shortDescription: "AI-powered manufacturing and industrial operations management platform.",
    image: "/images/products/factoryai.jpg",
    iconName: "Cpu",
    tags: ["AI", "Manufacturing", "IoT"],
    status: "Live",
    features: [
      "Computer Vision Quality Assurance",
      "Predictive Machine Maintenance",
      "Assembly Line Throughput AI",
      "Energy Efficiency Telemetry"
    ],
  },
  {
    id: "pharmaops",
    name: "PharmaOps",
    category: "AI / Pharmacy",
    tagline: "Pharmacy Inventory & Business Intelligence AI",
    shortDescription: "AI-powered pharmacy management solution for inventory, sales, medicines, suppliers, and business intelligence.",
    image: "/images/products/pharmaops.jpg",
    iconName: "Pill",
    tags: ["AI", "Healthcare", "Pharmacy"],
    status: "Live",
    features: [
      "Batch Expiry & Alert Systems",
      "Rx Prescription OCR Parser",
      "Automated Supplier Reordering",
      "Margin & Revenue Intelligence"
    ],
  },
  {
    id: "distributionai",
    name: "DistributionAI",
    category: "AI / Wholesale",
    tagline: "Wholesale & Supply Chain Distribution AI",
    shortDescription: "AI-powered wholesale and distribution management platform for orders, inventory, customers, suppliers, and sales operations.",
    image: "/images/products/distributionai.jpg",
    iconName: "Boxes",
    tags: ["AI", "Wholesale", "Logistics"],
    status: "Live",
    features: [
      "Demand Planning & Stock Optimization",
      "B2B Order Dispatch Tracking",
      "Credit & Collections AI",
      "Multi-Warehouse Inventory"
    ],
  },
  {
    id: "fleetai",
    name: "FleetAI",
    category: "AI / Transport & Fleet",
    tagline: "Smart Transport & Commercial Fleet Intelligence",
    shortDescription: "AI-powered fleet and transportation management platform for vehicles, drivers, routes, maintenance, and operational analytics.",
    image: "/images/products/fleetai.jpg",
    iconName: "Truck",
    tags: ["AI", "Fleet", "Telematics"],
    status: "Live",
    features: [
      "Dynamic Route Optimization",
      "Driver Behavior Telematics",
      "Fuel Consumption Monitoring",
      "Predictive Fleet Maintenance"
    ],
  },
  {
    id: "buildai",
    name: "BuildAI",
    category: "AI / Construction",
    tagline: "Construction & Infrastructure Project Management AI",
    shortDescription: "AI-powered construction project management platform for projects, workers, materials, budgets, progress, and planning.",
    image: "/images/products/buildai.jpg",
    iconName: "HardHat",
    tags: ["AI", "Construction", "PM"],
    status: "Live",
    features: [
      "Site Progress Milestone AI",
      "Material Utilization Tracking",
      "Budget Overrun Diagnostics",
      "Safety Compliance Vision AI"
    ],
  },
  {
    id: "agriai",
    name: "AgriAI",
    category: "AI / Agriculture",
    tagline: "Crop Health & Precision Agriculture Intelligence",
    shortDescription: "AI-powered agriculture and crop management platform for farmers, crop planning, production, field management, and agricultural intelligence.",
    image: "/images/products/agriai.jpg",
    iconName: "Sprout",
    tags: ["AI", "AgTech", "Analytics"],
    status: "Live",
    features: [
      "Satellite & Drone Field Analysis",
      "Early Pest & Disease Detection",
      "Weather & Yield Forecasting",
      "Irrigation & Soil Moisture AI"
    ],
  },
];
