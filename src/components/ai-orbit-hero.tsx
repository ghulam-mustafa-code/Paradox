"use client";

import * as React from "react";
import {
  Bot,
  BrainCircuit,
  Boxes,
  Cloud,
  Code2,
  Database,
  FileText,
  GitBranch,
  Workflow,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

export interface OrbitService {
  label: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export const DEFAULT_ORBIT_SERVICES: OrbitService[] = [
  { label: "LLM", description: "Large language models", icon: BrainCircuit },
  { label: "AI AGENTS", description: "Autonomous workflows", icon: Bot },
  { label: "APIs", description: "Connected systems", icon: GitBranch },
  { label: "RAG", description: "Grounded intelligence", icon: Database },
  { label: "NLP", description: "Language understanding", icon: FileText },
  { label: "CLOUD", description: "Scalable infrastructure", icon: Cloud },
  { label: "DATABASE", description: "Reliable data layers", icon: Boxes },
  { label: "AUTOMATION", description: "Smarter operations", icon: Workflow },
];

const RING_TRANSFORMS = [
  "translateZ(-24px) rotateX(72deg)",
  "translateZ(-14px) rotateX(72deg) rotateY(30deg)",
  "translateZ(-6px) rotateX(72deg) rotateY(60deg)",
  "translateZ(4px) rotateX(72deg) rotateY(90deg)",
  "translateZ(14px) rotateX(72deg) rotateY(120deg)",
  "translateZ(24px) rotateX(72deg) rotateY(150deg)",
];

const NODE_POSITIONS = [
  { x: 50, y: 8, z: 36 },
  { x: 78, y: 25, z: 55 },
  { x: 80, y: 68, z: -30 },
  { x: 68, y: 88, z: -45 },
  { x: 20, y: 68, z: -20 },
  { x: 14, y: 27, z: 45 },
  { x: 74, y: 10, z: -8 },
  { x: 32, y: 88, z: 25 },
];

interface AIOrbitHeroProps {
  services?: OrbitService[];
  coreTitle?: string;
  coreSubtitle?: string;
  className?: string;
}

export function AIOrbitHero({
  services = DEFAULT_ORBIT_SERVICES,
  coreTitle = "AI CORE",
  coreSubtitle = "RAG & AGENTS",
  className = "",
}: AIOrbitHeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = React.useState(false);
  const [activeService, setActiveService] = React.useState<number | null>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [4, -4]), {
    stiffness: 80,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 80,
    damping: 20,
  });

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const motionEnabled = isMounted && !prefersReducedMotion;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!motionEnabled || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  return (
    <div
      className={`ai-orbit-hero relative mx-auto aspect-square w-full max-w-140 ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
        setActiveService(null);
      }}
      aria-label="Interactive AI service orbit"
      role="img"
    >
      <motion.div
        className="absolute inset-[7%]"
        style={motionEnabled ? { rotateX, rotateY } : undefined}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
      >
        <div className="absolute inset-0 perspective-[900px]">
          <div
            className={`ai-orbit-globe ${motionEnabled ? "" : "ai-orbit-static"}`}
          >
            <div className="ai-orbit-rings" aria-hidden="true">
              {RING_TRANSFORMS.map((transform, index) => (
                <span
                  key={index}
                  className="ai-orbit-ring"
                  style={{ transform }}
                />
              ))}
            </div>

            <svg
              className="ai-orbit-lines"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              {services.slice(0, 8).map((service, index) => {
                const node = NODE_POSITIONS[index];
                return (
                  <line
                    key={service.label}
                    x1="50"
                    y1="50"
                    x2={node.x}
                    y2={node.y}
                    className={`ai-orbit-line ${index % 2 === 0 ? "ai-orbit-line-a" : "ai-orbit-line-b"}`}
                  />
                );
              })}
            </svg>

            <div className="ai-orbit-core-orientation">
              <motion.div
                className="ai-orbit-core"
                animate={motionEnabled ? { y: [0, -5, 0] } : undefined}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="ai-orbit-core-icon">
                  <BrainCircuit className="h-5 w-5" />
                </span>
                <span className="ai-orbit-core-title">{coreTitle}</span>
                <span className="ai-orbit-core-subtitle">{coreSubtitle}</span>
              </motion.div>
            </div>

            <div className="ai-orbit-nodes">
              {services.slice(0, 8).map((service, index) => {
                const position = NODE_POSITIONS[index];
                const Icon = service.icon || Code2;
                const isActive = activeService === index;

                return (
                  <motion.button
                    key={service.label}
                    type="button"
                    className={`ai-orbit-node ${isActive ? "ai-orbit-node-active" : ""}`}
                    style={
                      {
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                        zIndex: position.z > 0 ? 7 : 1,
                        "--node-depth": `${position.z}px`,
                      } as React.CSSProperties
                    }
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{
                      opacity: position.z > 0 ? 1 : 0.92,
                      scale: position.z > 0 ? 1 : 0.94,
                    }}
                    transition={{ duration: 0.45, delay: 0.55 + index * 0.06 }}
                    onFocus={() => setActiveService(index)}
                    onBlur={() => setActiveService(null)}
                    onMouseEnter={() => setActiveService(index)}
                    onMouseLeave={() => setActiveService(null)}
                    aria-label={`${service.label}: ${service.description || "AI service"}`}
                  >
                    <span className="ai-orbit-node-content">
                      <Icon className="h-4 w-4 shrink-0 text-blue-600 dark:text-cyan-400" />
                      <span>{service.label}</span>
                      {isActive && service.description && (
                        <span className="ai-orbit-tooltip">
                          {service.description}
                        </span>
                      )}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {(
              <div className="ai-orbit-particles" aria-hidden="true">
                {Array.from({ length: 10 }).map((_, index) => (
                  <span
                    key={index}
                    style={
                      {
                        "--particle-delay": `${index * -0.7}s`,
                      } as React.CSSProperties
                    }
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
