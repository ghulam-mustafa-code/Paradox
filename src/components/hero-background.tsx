"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

export function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = React.useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, {
    stiffness: 80,
    damping: 24,
    mass: 0.5,
  });
  const smoothY = useSpring(pointerY, {
    stiffness: 80,
    damping: 24,
    mass: 0.5,
  });
  const gridX = useTransform(smoothX, [-0.5, 0.5], [8, -8]);
  const gridY = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const glowX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (!isMounted || prefersReducedMotion) return;

    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX / window.innerWidth - 0.5);
      pointerY.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [isMounted, pointerX, pointerY, prefersReducedMotion]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Grid Pattern */}
      <motion.div
        className="absolute inset-0 bg-tech-grid opacity-50 dark:opacity-30"
        style={isMounted && !prefersReducedMotion ? { x: gridX, y: gridY } : undefined}
      />

      {/* Subtle Glow Spheres */}
      <motion.div
        className="absolute -top-32 left-1/2 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-linear-to-tr from-blue-600/15 to-violet-600/15 blur-[120px] dark:from-blue-500/20 dark:to-violet-500/20"
        style={isMounted && !prefersReducedMotion ? { x: glowX, y: glowY } : undefined}
      />
      <motion.div
        className="absolute -right-20 top-1/3 h-[300px] w-[400px] rounded-full bg-linear-to-br from-indigo-500/10 to-blue-600/10 blur-[100px]"
        animate={
          !isMounted || prefersReducedMotion
            ? undefined
            : { y: [0, -10, 0], rotate: [0, 1.5, 0] }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <>
        <motion.div
          className="absolute left-[14%] top-[28%] h-2 w-2 rounded-full bg-blue-400/60 shadow-[0_0_18px_rgba(96,165,250,0.65)]"
          animate={
            isMounted && !prefersReducedMotion
              ? { y: [0, -12, 0], opacity: [0.4, 0.9, 0.4] }
              : undefined
          }
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[18%] top-[20%] h-1.5 w-1.5 rounded-full bg-violet-400/60 shadow-[0_0_15px_rgba(167,139,250,0.65)]"
          animate={
            isMounted && !prefersReducedMotion
              ? { y: [0, 10, 0], opacity: [0.35, 0.8, 0.35] }
              : undefined
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />
      </>

      {/* Bottom Fade Mask using CSS variable fallback */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-slate-100 dark:to-slate-950 opacity-90" />
    </div>
  );
}
