"use client";

import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import { HeroBackground } from "@/components/hero-background";
import { AIOrbitHero } from "@/components/ai-orbit-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ProjectCard } from "@/components/project-card";
import { CTABanner } from "@/components/cta-banner";
import { PROJECTS } from "@/data/projects";
import { motion, AnimatePresence } from "motion/react";

type CategoryFilter = "All" | "Web" | "Mobile" | "AI" | "SaaS";

const FILTERS: CategoryFilter[] = ["All", "Web", "Mobile", "AI", "SaaS"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <PageTransition>
      <div className="relative overflow-hidden">
        {/* HERO */}
        <section className="relative pt-12 sm:pt-20 pb-16">
          <HeroBackground />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] lg:gap-16 lg:px-8">
            <div className="space-y-6 text-center lg:text-left">
              <ScrollReveal variant="fade-up">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Portfolio Showcase
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-2">
                  Featured Client Work & Case Studies
                </h1>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.1}>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                  Explore a selection of sample projects demonstrating our work
                  across Web Applications, Mobile Apps, AI models, and SaaS
                  platforms.
                </p>
              </ScrollReveal>
            </div>
            <AIOrbitHero
              services={[
                { label: "WEB" },
                { label: "MOBILE" },
                { label: "AI" },
                { label: "FINTECH" },
                { label: "EDTECH" },
                { label: "AGTECH" },
                { label: "AUTOMATION" },
                { label: "CLOUD" },
              ]}
            />
          </div>
        </section>

        {/* PROJECTS SECTION WITH MOTION CATEGORY FILTERS */}
        <section className="py-16 bg-neutral-50/50 dark:bg-neutral-950/40 border-t border-neutral-200/60 dark:border-neutral-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {FILTERS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all relative ${activeFilter === cat
                      ? "text-white bg-blue-600 shadow-md"
                      : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Motion Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <CTABanner />
      </div>
    </PageTransition>
  );
}
