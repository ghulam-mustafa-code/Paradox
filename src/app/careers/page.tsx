"use client";

import { PageTransition } from "@/components/page-transition";
import { HeroBackground } from "@/components/hero-background";
import { AIOrbitHero } from "@/components/ai-orbit-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CTABanner } from "@/components/cta-banner";
import { CAREER_PERKS } from "@/data/careers";
import * as LucideIcons from "lucide-react";

export default function CareersPage() {
  const iconsMap = LucideIcons as unknown as Record<
    string,
    React.ComponentType<{ className?: string }>
  >;

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
                  We Are Hiring
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-2">
                  Build the Future With Us
                </h1>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.1}>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                  Join a dynamic engineering culture focused on code quality,
                  technical autonomy, modern tech stacks, and impactful software
                  products.
                </p>
              </ScrollReveal>
            </div>
            <AIOrbitHero />
          </div>
        </section>

        {/* WHY WORK WITH US PERKS */}
        <section className="py-16 bg-neutral-50/50 dark:bg-neutral-950/40 border-t border-b border-neutral-200/60 dark:border-neutral-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <ScrollReveal variant="fade-up">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Culture & Perks
                </span>
                <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                  Why Work With ZeroParadox?
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CAREER_PERKS.map((perk, idx) => {
                const IconComponent =
                  iconsMap[perk.iconName] || LucideIcons.Sparkles;

                return (
                  <ScrollReveal
                    key={perk.title}
                    variant="fade-up"
                    delay={idx * 0.1}
                  >
                    <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                        {perk.title}
                      </h3>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {perk.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* OPEN POSITIONS */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="space-y-2">
              <ScrollReveal variant="slide-left">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Current Opportunities
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-1">
                  Open Positions
                </h2>
              </ScrollReveal>
            </div>

            <div className="rounded-2xl border border-neutral-200/80 bg-white p-8 text-center shadow-xs dark:border-neutral-800 dark:bg-neutral-900">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                No Current Openings
              </h3>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                We don&apos;t have any open positions at the moment. Please
                check back later for future opportunities.
              </p>
            </div>
          </div>
        </section>

        <CTABanner />
      </div>
    </PageTransition>
  );
}
