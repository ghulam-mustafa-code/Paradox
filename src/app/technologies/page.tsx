import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { HeroBackground } from "@/components/hero-background";
import { AIOrbitHero } from "@/components/ai-orbit-hero";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";
import { TechnologyCard } from "@/components/technology-card";
import { CTABanner } from "@/components/cta-banner";
import { TECHNOLOGIES_DATA } from "@/data/technologies";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Next.js, React, Python and AI Development Technologies",
  description:
    "Explore the Next.js, React, Python, Flutter, PostgreSQL, AI/ML and cloud technologies used by ZERO-PARADOX to build reliable digital products.",
  path: "/technologies",
});

export default function TechnologiesPage() {
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
                  Engineering Stack
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-2">
                  Technologies We Work With
                </h1>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.1}>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                  Proven battle-tested frameworks, cloud infrastructure tools,
                  and AI libraries engineered for reliability and long-term
                  maintainability.
                </p>
              </ScrollReveal>
            </div>
            <AIOrbitHero
              services={[
                { label: "NEXT.JS" },
                { label: "REACT" },
                { label: "PYTHON" },
                { label: "FASTAPI" },
                { label: "FLUTTER" },
                { label: "POSTGRES" },
                { label: "SUPABASE" },
                { label: "AI" },
              ]}
            />
          </div>
        </section>

        {/* CATEGORIZED TECH GRID */}
        <section className="py-16 bg-neutral-50/50 dark:bg-neutral-950/40 border-t border-neutral-200/60 dark:border-neutral-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {TECHNOLOGIES_DATA.map((cat, idx) => (
              <ScrollReveal
                key={cat.category}
                variant="fade-up"
                delay={idx * 0.05}
              >
                <div className="space-y-6">
                  <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-3">
                      <span>{cat.category}</span>
                      <span className="text-xs font-normal text-neutral-500">
                        ({cat.items.length} tools)
                      </span>
                    </h2>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      {cat.description}
                    </p>
                  </div>

                  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cat.items.map((item) => (
                      <StaggerItem key={item.name}>
                        <TechnologyCard item={item} />
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <CTABanner />
      </div>
    </PageTransition>
  );
}
