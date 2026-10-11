"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function TiltCard({
  children,
  className = "",
  intensity = 6,
}: TiltCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const [rotation, setRotation] = React.useState({ x: 0, y: 0 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setRotation({ x: -y * intensity, y: x * intensity });
  };

  const resetRotation = () => setRotation({ x: 0, y: 0 });

  return (
    <motion.div
      className={className}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
        scale: rotation.x || rotation.y ? 1.01 : 1,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.6 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetRotation}
    >
      {children}
    </motion.div>
  );
}
