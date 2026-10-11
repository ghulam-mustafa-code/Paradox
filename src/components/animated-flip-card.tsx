"use client";

import * as React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export interface AnimatedFlipCardProps {
  number: string;
  title: string;
  icon: React.ElementType;
  description: string;
  technologies?: string[];
  eyebrow?: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  delay?: number;
  compact?: boolean;
}

export function AnimatedFlipCard({
  number,
  title,
  icon: Icon,
  description,
  technologies = [],
  eyebrow = "ZERO PARADOX",
  ctaLabel = "Explore",
  ctaHref,
  onCtaClick,
  delay = 0,
  compact = false,
}: AnimatedFlipCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isFlipped, setIsFlipped] = React.useState(false);
  const isAction = Boolean(ctaHref || onCtaClick);

  const toggleFlip = () => setIsFlipped((flipped) => !flipped);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFlip();
    }
  };

  return (
    <motion.div
      initial={
        prefersReducedMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 40, z: -160, rotateX: 20 }
      }
      whileInView={
        prefersReducedMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0, z: 0, rotateX: 0 }
      }
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.7,
        delay,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      className="h-full [perspective:1100px]"
    >
      <div
        className={`group relative w-full cursor-pointer [transform-style:preserve-3d] ${compact ? "h-[20.5rem]" : "h-[27rem]"} ${isFlipped ? "is-flipped" : ""}`}
        onClick={toggleFlip}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") setIsFlipped(true);
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") setIsFlipped(false);
        }}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`${title}. ${isFlipped ? "Show front" : "Tap to explore"}`}
        aria-pressed={isFlipped}
      >
        <div
          className="relative h-full w-full [transform-style:preserve-3d] [transition:transform_650ms_cubic-bezier(0.2,0.8,0.2,1)]"
          style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          <div
            className={`absolute inset-0 flex h-full w-full flex-col overflow-hidden rounded-2xl border border-blue-500/20 bg-white shadow-xl [backface-visibility:hidden] dark:border-blue-400/20 dark:bg-neutral-900 ${compact ? "p-5 sm:p-6" : "p-7 sm:p-8"}`}
          >
            <div
              className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex items-start justify-between">
              <div
                className={`flex items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-300 ${compact ? "h-12 w-12" : "h-14 w-14"}`}
              >
                <Icon className={compact ? "h-6 w-6" : "h-7 w-7"} />
              </div>
              <span
                className={`${compact ? "text-3xl" : "text-4xl"} font-black text-neutral-200 dark:text-neutral-700`}
              >
                {number}
              </span>
            </div>
            <div className="relative mt-auto">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                {eyebrow}
              </p>
              <h3
                className={`break-words font-bold tracking-tight text-neutral-900 dark:text-white ${compact ? "text-xl [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden" : "text-2xl"}`}
              >
                {title}
              </h3>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                Tap to explore
              </span>
            </div>
          </div>

          <div
            className={`absolute inset-0 flex h-full w-full flex-col overflow-hidden rounded-2xl border border-violet-500/30 bg-neutral-50 shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)] dark:bg-neutral-900 ${compact ? "p-5 sm:p-6" : "p-7 sm:p-8"}`}
          >
            <div
              className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-violet-500/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
                  {eyebrow}
                </p>
                <h3
                  className={`mt-2 break-words font-bold tracking-tight text-neutral-900 dark:text-white ${compact ? "text-lg [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden" : "text-xl"}`}
                >
                  {title}
                </h3>
              </div>
              <span className="shrink-0 text-2xl font-black text-neutral-300 dark:text-neutral-700">
                {number}
              </span>
            </div>
            <p
              className={`relative line-clamp-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 ${compact ? "mt-5 line-clamp-3" : "mt-8"}`}
            >
              {description}
            </p>
            <div
              className={`relative mt-auto border-t border-neutral-200 dark:border-neutral-800 ${compact ? "pt-3" : "pt-5"}`}
            >
              <div className="flex flex-wrap gap-1.5 overflow-hidden">
                {technologies.slice(0, 4).map((technology) => (
                  <span
                    key={technology}
                    className="max-w-full rounded-md bg-neutral-200/70 px-2 py-1 text-[11px] font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              {isAction ? (
                ctaHref ? (
                  <a
                    href={ctaHref}
                    onClick={(event) => event.stopPropagation()}
                    className={`${compact ? "mt-3" : "mt-6"} inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300`}
                  >
                    {ctaLabel}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      onCtaClick?.();
                    }}
                    className={`${compact ? "mt-3" : "mt-6"} inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300`}
                  >
                    {ctaLabel}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                )
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
