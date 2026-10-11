"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode, useEffect, useState } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const animation = isMounted
    ? prefersReducedMotion
      ? { opacity: 1 }
      : { opacity: 1, y: 0 }
    : undefined;
  const exitAnimation = prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: -8 };

  return (
    <motion.div
      initial={false}
      animate={animation}
      exit={exitAnimation}
      transition={{
        duration: isMounted && prefersReducedMotion ? 0.01 : 0.35,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
