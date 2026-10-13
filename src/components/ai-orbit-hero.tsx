"use client";

import * as React from "react";
import { BrainCircuit, Cloud, Database, GitBranch, Sparkles, Workflow } from "lucide-react";
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
  { label: "LLM", description: "Large language models" },
  { label: "AGENTS", description: "Autonomous workflows" },
  { label: "RAG", description: "Grounded intelligence" },
  { label: "CLOUD", description: "Scalable infrastructure" },
  { label: "APIs", description: "Connected systems" },
  { label: "WORKFLOWS", description: "Smarter operations" },
];

const SIGNALS = [
  { x: "7%", y: "28%", icon: Cloud },
  { x: "78%", y: "16%", icon: GitBranch },
  { x: "82%", y: "67%", icon: Database },
  { x: "5%", y: "71%", icon: Workflow },
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
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [8, -8]), {
    stiffness: 100,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 100,
    damping: 22,
  });

  const motionEnabled = !prefersReducedMotion;
  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!motionEnabled || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  return (
    <div
      className={`sphere-stage relative mx-auto aspect-square w-full max-w-140 ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
      aria-label="Interactive 3D AI technology sphere"
      role="img"
    >
      <motion.div
        className="sphere-scene absolute inset-[4%]"
        style={motionEnabled ? { rotateX, rotateY } : undefined}
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="sphere-halo" aria-hidden="true" />
        <div className={`sphere-orbit sphere-orbit-one ${motionEnabled ? "" : "sphere-static"}`} aria-hidden="true" />
        <div className={`sphere-orbit sphere-orbit-two ${motionEnabled ? "" : "sphere-static"}`} aria-hidden="true" />

        <div className={`sphere-globe ${motionEnabled ? "" : "sphere-static"}`}>
          <div className="sphere-shine" />
          <div className="sphere-mesh sphere-longitudes" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, index) => (
              <span key={index} style={{ transform: `translate(-50%, -50%) rotateY(${index * 15}deg)` }} />
            ))}
          </div>
          <div className="sphere-mesh sphere-latitudes" aria-hidden="true">
            {[-56, -38, -20, 0, 20, 38, 56].map((angle) => (
              <span key={angle} style={{ transform: `translate(-50%, -50%) rotateX(${angle}deg)` }} />
            ))}
          </div>
          <div className="sphere-core">
            <span className="sphere-core-icon"><BrainCircuit /></span>
            <span className="sphere-core-title">{coreTitle}</span>
            <span className="sphere-core-subtitle">{coreSubtitle}</span>
          </div>
          <div className="sphere-pulse" aria-hidden="true" />
        </div>

        {SIGNALS.map(({ x, y, icon: Icon }, index) => {
          const service = services[index] || DEFAULT_ORBIT_SERVICES[index];
          return (
            <motion.div
              key={service.label}
              className="sphere-signal"
              style={{ left: x, top: y }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.45 }}
            >
              <Icon />
              <span>{service.label}</span>
            </motion.div>
          );
        })}

        <div className="sphere-caption" aria-hidden="true">
          <Sparkles />
          <span>Intelligence, in motion</span>
        </div>
      </motion.div>
    </div>
  );
}
