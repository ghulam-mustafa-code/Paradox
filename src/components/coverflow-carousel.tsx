"use client";

import * as React from "react";
import * as LucideIcons from "lucide-react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export interface CoverflowItem {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
  iconName?: string;
  actionLabel?: string;
  actionHref?: string;
}

interface CoverflowCarouselProps {
  items: CoverflowItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

function getOffset(index: number, activeIndex: number, length: number) {
  const rawOffset = index - activeIndex;
  if (rawOffset > length / 2) return rawOffset - length;
  if (rawOffset < -length / 2) return rawOffset + length;
  return rawOffset;
}

export function CoverflowCarousel({
  items,
  eyebrow = "WHAT WE BUILD",
  title = "Technology That Moves Your Business Forward",
  description = "Explore our services, products and technology solutions through our interactive ecosystem.",
}: CoverflowCarouselProps) {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth < 768);
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!carouselRef.current?.contains(document.activeElement)) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex(
          (current) => (current - 1 + items.length) % items.length,
        );
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((current) => (current + 1) % items.length);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [items.length]);

  if (!items.length) return null;

  const step = isMobile ? 132 : 238;
  const rotation = isMobile ? 18 : 32;
  const depth = isMobile ? 72 : 120;

  const goTo = (index: number) => {
    setActiveIndex((index + items.length) % items.length);
  };

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-20 text-white dark:bg-[#020617]">
      <div
        className="absolute inset-0 bg-tech-grid opacity-20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
            {eyebrow}
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">
            {description}
          </p>
        </div>

        <div
          ref={carouselRef}
          tabIndex={0}
          aria-roledescription="carousel"
          aria-label={title}
          className="relative mx-auto mt-10 h-[31rem] w-full max-w-[72rem] [perspective:1200px] outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-950"
        >
          {items.map((item, index) => {
            const offset = getOffset(index, activeIndex, items.length);
            const distance = Math.abs(offset);
            const isActive = offset === 0;
            const IconComponent =
              (
                LucideIcons as unknown as Record<
                  string,
                  React.ComponentType<{ className?: string }>
                >
              )[item.iconName || "Code2"] || LucideIcons.Code2;
            const hidden = distance > 2;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={item.id}
                className={`absolute left-1/2 top-1/2 box-border h-[26rem] w-[min(78vw,27rem)] ${hidden ? "pointer-events-none" : "cursor-pointer"}`}
                style={{
                  transformStyle: "preserve-3d",
                  zIndex: 100 - distance * 10,
                  backfaceVisibility: "hidden",
                }}
                initial={false}
                animate={{
                  x: offset * step,
                  z: -distance * depth,
                  rotateY: offset * -rotation,
                  scale: isHovered
                    ? isActive
                      ? 1.02
                      : 0.9
                    : isActive
                      ? 1
                      : distance === 1
                        ? 0.84
                        : 0.7,
                  opacity: hidden
                    ? 0
                    : isActive
                      ? 1
                      : distance === 1
                        ? 0.52
                        : 0.22,
                }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0.01 }
                    : { type: "spring", stiffness: 210, damping: 24, mass: 0.8 }
                }
                transformTemplate={(latest, generated) =>
                  `translate(-50%, -50%) ${generated}`
                }
                onClick={() => !isActive && goTo(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                onDragEnd={(_, info) => {
                  if (Math.abs(info.offset.x) > 60) {
                    goTo(activeIndex + (info.offset.x < 0 ? 1 : -1));
                  }
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${items.length}: ${item.title}`}
              >
                <article
                  className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[24px] border p-7 backdrop-blur-xl transition-colors sm:p-8 ${isActive ? "border-blue-400/70 bg-neutral-900/95 shadow-[0_24px_80px_rgba(37,99,235,0.25)]" : "border-white/10 bg-neutral-900/75 shadow-2xl"}`}
                >
                  <div
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <span className="text-4xl font-black text-white/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div
                    className={`relative mt-10 min-w-0 ${isActive ? "flex flex-1 flex-col" : "mt-6"}`}
                  >
                    <h3
                      className={`break-words font-bold tracking-tight text-white [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [overflow-wrap:break-word] overflow-hidden ${isActive ? "text-2xl sm:text-3xl" : "text-lg"}`}
                    >
                      {item.title}
                    </h3>
                    {isActive && (
                      <p className="mt-4 line-clamp-3 min-w-0 overflow-hidden text-sm leading-relaxed text-neutral-300">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {isActive && (
                    <div className="relative border-t border-white/10 pt-5">
                      <div className="flex min-w-0 flex-wrap gap-1.5 overflow-hidden">
                        {item.technologies?.slice(0, 4).map((technology) => (
                          <span
                            key={technology}
                            className="max-w-full rounded-md bg-white/[0.07] px-2.5 py-1 text-[11px] font-medium text-neutral-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                      {item.actionHref && (
                        <a
                          href={item.actionHref}
                          className="mt-5 inline-flex max-w-full items-center gap-2 truncate text-xs font-bold text-blue-300 hover:text-blue-200"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <span className="truncate">
                            {item.actionLabel || "Explore"}
                          </span>
                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </a>
                      )}
                    </div>
                  )}
                </article>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous service"
              onClick={() => goTo(activeIndex - 1)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-xs font-semibold text-neutral-200 transition hover:scale-[1.02] hover:border-blue-400/40 hover:bg-blue-500/10"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>
            <button
              type="button"
              aria-label="Next service"
              onClick={() => goTo(activeIndex + 1)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-xs font-semibold text-neutral-200 transition hover:scale-[1.02] hover:border-blue-400/40 hover:bg-blue-500/10"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div
            className="flex items-center gap-2"
            aria-label={`Slide ${activeIndex + 1} of ${items.length}`}
          >
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Show ${item.title}`}
                aria-current={index === activeIndex}
                onClick={() => goTo(index)}
                className={`h-1.5 rounded-full transition-all ${index === activeIndex ? "w-7 bg-blue-400" : "w-1.5 bg-white/25 hover:bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
