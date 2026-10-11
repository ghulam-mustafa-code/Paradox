"use client";

import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { HeroBackground } from "@/components/hero-background";
import { AIOrbitHero } from "@/components/ai-orbit-hero";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-reveal";
import { TeamCard } from "@/components/team-card";
import { CTABanner } from "@/components/cta-banner";
import { TEAM_MEMBERS } from "@/data/team";
import { UserPlus } from "lucide-react";

export default function TeamPage() {
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
                  Leadership
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-2">
                  The team building ZeroParadox
                </h1>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.1}>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                  Our core team structure spans Executive Leadership, Cloud
                  Architecture, Full-Stack Development, AI Research, and UI/UX
                  Design.
                </p>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.2}>
                <div className="pt-2">
                  <Link
                    href="/careers"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all hover:scale-[1.02]"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Join Our Team</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <AIOrbitHero />
          </div>
        </section>

        {/* TEAM GRID */}
        <section className="py-16 bg-neutral-50/50 dark:bg-neutral-950/40 border-t border-neutral-200/60 dark:border-neutral-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <StaggerContainer className="mx-auto max-w-5xl border-t border-neutral-200/80 dark:border-neutral-800/80">
              {TEAM_MEMBERS.map((member) => (
                <StaggerItem key={member.id} className="h-full">
                  <TeamCard member={member} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <CTABanner />
      </div>
    </PageTransition>
  );
}
