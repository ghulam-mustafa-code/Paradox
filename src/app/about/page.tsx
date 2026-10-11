import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { HeroBackground } from "@/components/hero-background";
import { AIOrbitHero } from "@/components/ai-orbit-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CTABanner } from "@/components/cta-banner";
import {
  Lightbulb,
  ShieldCheck,
  Eye,
  Users2,
  Target,
  Compass,
} from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About ZERO-PARADOX, a Software Company in Pakistan",
  description:
    "Learn how ZERO-PARADOX combines software engineering, AI, web applications and product thinking for businesses and startups in Pakistan and beyond.",
  path: "/about",
});

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Constantly pushing technological limits with AI integration and modern web frameworks.",
      color: "text-blue-500 bg-blue-500/10",
    },
    {
      icon: ShieldCheck,
      title: "Quality",
      description:
        "Delivering robust, type-safe, and thoroughly tested software with zero shortcuts.",
      color: "text-emerald-500 bg-emerald-500/10",
    },
    {
      icon: Eye,
      title: "Transparency",
      description:
        "Open communication, clear roadmap milestones, and full code visibility for clients.",
      color: "text-amber-500 bg-amber-500/10",
    },
    {
      icon: Users2,
      title: "Collaboration",
      description:
        "Working hand-in-hand with non-technical founders and enterprise engineering teams alike.",
      color: "text-violet-500 bg-violet-500/10",
    },
  ];

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
                  Who We Are
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-2">
                  Technology Built Around Your Vision
                </h1>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.1}>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                  ZeroParadox is a modern software house building high-caliber
                  web applications, mobile platforms, and intelligent digital
                  products for businesses and startups in Pakistan.
                </p>
              </ScrollReveal>
            </div>
            <AIOrbitHero />
          </div>
        </section>

        {/* ABOUT PARAGRAPHS */}
        <section className="py-16 bg-neutral-50/50 dark:bg-neutral-950/40 border-t border-b border-neutral-200/60 dark:border-neutral-800/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-neutral-700 dark:text-neutral-300 leading-relaxed text-base sm:text-lg">
            <ScrollReveal variant="fade-up">
              <p>
                Founded on the belief that digital products should be fast,
                clean, and reliable,{" "}
                <strong className="text-neutral-900 dark:text-white">
                  ZeroParadox
                </strong>{" "}
                combines modern full-stack development with state-of-the-art
                artificial intelligence. We partner with ambitious startups and
                growing enterprises to convert complex ideas into streamlined
                software solutions.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.1}>
              <p>
                Our engineering process emphasizes maintainability, accessible
                design systems, and resilient cloud architecture. By leveraging
                tools like Next.js, React, TypeScript, Python, and Flutter, we
                eliminate architectural bloat and deliver applications that
                respond instantly to user interactions.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.2}>
              <p>
                Whether you are launching an early-stage SaaS MVP or refactoring
                an enterprise API stack, our team approaches every codebase with
                rigor, transparency, and a relentless focus on business
                outcomes.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal variant="slide-left">
                <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                    <Target className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                    Our Mission
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    To empower businesses worldwide by engineering intelligent,
                    high-performance digital tools that streamline operations
                    and accelerate digital growth.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="slide-right">
                <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-500/10 text-violet-500 flex items-center justify-center">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                    Our Vision
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    To become a trusted global software house recognized for
                    technical excellence, intuitive user experience design, and
                    pioneering AI-driven software.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* VALUES (ONLY 4 CARDS) */}
        <section className="py-20 bg-neutral-50/50 dark:bg-neutral-950/40 border-t border-neutral-200/60 dark:border-neutral-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <ScrollReveal variant="fade-up">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Guiding Principles
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-1">
                  Core Values
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <ScrollReveal
                    key={val.title}
                    variant="fade-up"
                    delay={idx * 0.1}
                  >
                    <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs space-y-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${val.color} flex items-center justify-center`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                        {val.title}
                      </h3>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <CTABanner />
      </div>
    </PageTransition>
  );
}
