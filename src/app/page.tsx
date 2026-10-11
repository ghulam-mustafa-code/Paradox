import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Code2, ShieldCheck, Zap } from "lucide-react";
import { PageTransition } from "@/components/page-transition";
import { HeroBackground } from "@/components/hero-background";
import { AIOrbitHero } from "@/components/ai-orbit-hero";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";
import { CoverflowCarousel } from "@/components/coverflow-carousel";
import { ProjectCard } from "@/components/project-card";
import { CTABanner } from "@/components/cta-banner";
import { SuccessSaaSPopup } from "@/components/success-saas-popup";
import { SERVICES } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { DOMAIN, SITE_NAME, TAGLINE, SUPPORTING_TEXT } from "@/lib/constants";

export const metadata: Metadata = {
  description: SUPPORTING_TEXT,
  alternates: { canonical: DOMAIN },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: DOMAIN,
    title: `${SITE_NAME} | Software House in Pakistan | AI, Web & Software Development`,
    description: SUPPORTING_TEXT,
    siteName: SITE_NAME,
    images: [{ url: "/logo.png", alt: `${SITE_NAME} software house logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Software House in Pakistan | AI, Web & Software Development`,
    description: SUPPORTING_TEXT,
    images: ["/logo.png"],
  },
};

export default function HomePage() {
  const previewProjects = PROJECTS.slice(0, 3);

  const keyTechStack = [
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "Flutter",
    "Node.js",
    "PostgreSQL",
  ];

  return (
    <PageTransition>
      <SuccessSaaSPopup />
      <div className="relative overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative pt-12 sm:pt-20 pb-20 sm:pb-28">
          <HeroBackground />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-4xl border border-sky-200/80 bg-white/88 p-4 shadow-[0_28px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl dark:border-sky-900/70 dark:bg-neutral-950/88 dark:shadow-[0_28px_80px_rgba(0,0,0,0.35)] sm:p-6 lg:p-8">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/70 to-transparent dark:via-cyan-400/60" />
              <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.9fr)] lg:gap-10">
                <div className="mx-auto w-full max-w-2xl space-y-5 text-center lg:text-left">
                  <ScrollReveal variant="fade-up">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700 dark:border-blue-400/25 dark:bg-blue-400/10 dark:text-blue-300">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Software House</span>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal variant="fade-up" delay={0.1}>
                    <h1 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-slate-950 dark:text-white sm:text-5xl lg:text-[5rem] lg:leading-[0.92]">
                      <span className="bg-linear-to-r from-blue-700 via-cyan-600 to-indigo-700 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-blue-500">
                        Building Digital Products That Solve Real Problems
                      </span>
                    </h1>
                  </ScrollReveal>

                  <ScrollReveal variant="fade-up" delay={0.15}>
                    <p className="text-xl font-medium tracking-tight text-slate-800 dark:text-slate-200 sm:text-2xl lg:text-[2.2rem] lg:leading-none">
                      {TAGLINE}
                    </p>
                  </ScrollReveal>

                  <ScrollReveal variant="fade-up" delay={0.2}>
                    <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base lg:text-lg">
                      {SUPPORTING_TEXT}
                    </p>
                  </ScrollReveal>

                  <ScrollReveal variant="fade-up" delay={0.25}>
                    <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row lg:justify-start">
                      <Link
                        href="/contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_16px_35px_rgba(37,99,235,0.28)] transition-all hover:scale-[1.02] hover:shadow-[0_18px_42px_rgba(37,99,235,0.38)] active:scale-[0.98] dark:from-cyan-500 dark:to-blue-600 dark:shadow-[0_16px_35px_rgba(6,182,212,0.2)]"
                      >
                        <span>Start a Project</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        href="/services"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-7 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-800"
                      >
                        <span>Explore Services</span>
                      </Link>
                    </div>
                  </ScrollReveal>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-105 overflow-visible rounded-3xl border border-slate-200/90 bg-slate-50/80 p-3 shadow-inner shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-inner dark:shadow-black/20 sm:p-4">
                    <div className="pointer-events-none absolute inset-3 rounded-2xl border border-dashed border-blue-200/70 dark:border-blue-800/60" />
                    <div className="relative z-10 flex items-center justify-between px-2 pt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      <span>Product systems</span>
                      <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Online
                      </span>
                    </div>
                    <AIOrbitHero />
                    <div className="relative z-10 flex items-center justify-between border-t border-slate-200/80 px-2 pb-1 pt-2 text-[10px] font-medium text-slate-500 dark:border-slate-800 dark:text-slate-400">
                      <span>AI / WEB / SAAS</span>
                      <span>Built to scale</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CoverflowCarousel
          items={SERVICES.map((service) => ({
            id: service.id,
            title: service.title,
            description: service.shortDescription,
            technologies: service.technologies,
            iconName: service.iconName,
            actionLabel: "Explore service",
            actionHref: `/services#${service.id}`,
          }))}
        />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 overflow-hidden rounded-4xl border border-neutral-200/80 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-neutral-800 dark:bg-neutral-900 sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  ZeroParadox
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                  Logic Meets Imagination.
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                  We design modern software systems that combine strategy,
                  engineering clarity, and creative product thinking to ship
                  experiences that stand out and scale with confidence.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-100 px-5 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
                  >
                    <span>Book a Call</span>
                  </Link>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-950 shadow-2xl dark:border-neutral-800">
                <div className="absolute inset-x-0 top-0 z-10 h-20 bg-linear-to-b from-neutral-950/80 to-transparent" />
                <video
                  className="aspect-video w-full object-cover"
                  src="/video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="ZeroParadox brand introduction video"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT PREVIEW */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 text-white relative overflow-hidden shadow-2xl border border-neutral-800">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                <ScrollReveal variant="slide-left" className="space-y-4">
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                    About ZeroParadox
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    Engineering Modern Digital Ecosystems
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    ZeroParadox is a technology house focused on delivering
                    clean, performant, and intelligent software. From full-stack
                    web platforms to cross-platform mobile apps and AI model
                    integration, we bring precision engineering to your product
                    roadmap.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold rounded-xl bg-white text-neutral-900 hover:bg-neutral-100 transition-all shadow-md"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </ScrollReveal>

                <ScrollReveal
                  variant="scale-in"
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="p-5 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 space-y-2">
                    <Zap className="w-6 h-6 text-blue-400" />
                    <h3 className="text-base font-bold text-white">
                      Fast Execution
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Agile milestones with rapid, iterative delivery.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 space-y-2">
                    <ShieldCheck className="w-6 h-6 text-violet-400" />
                    <h3 className="text-base font-bold text-white">
                      Quality Code
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Strict TypeScript standards and zero technical debt.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 space-y-2 col-span-2">
                    <Code2 className="w-6 h-6 text-emerald-400" />
                    <h3 className="text-base font-bold text-white">
                      Production-Ready Architecture
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Designed for resilience, security, and effortless scaling.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS PREVIEW */}
        <section className="py-20 bg-neutral-50/50 dark:bg-neutral-950/40 border-t border-neutral-200/60 dark:border-neutral-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <ScrollReveal variant="slide-left">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Featured Work
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-1">
                  Selected Sample Projects
                </h2>
              </ScrollReveal>

              <ScrollReveal variant="slide-right">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollReveal>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {previewProjects.map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* TECHNOLOGIES PREVIEW */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <ScrollReveal variant="fade-up">
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Technology Stack
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-1">
                Built With Modern Standards
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="scale-in">
              <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
                {keyTechStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-semibold rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 shadow-xs hover:border-blue-500 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up">
              <Link
                href="/technologies"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline pt-2"
              >
                <span>Explore Full Tech Stack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <CTABanner />
      </div>
    </PageTransition>
  );
}
