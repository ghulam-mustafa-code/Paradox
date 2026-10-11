import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { HeroBackground } from "@/components/hero-background";
import { AIOrbitHero } from "@/components/ai-orbit-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ServiceCard } from "@/components/service-card";
import { CTABanner } from "@/components/cta-banner";
import { SERVICES } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";
import { DOMAIN, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata({
  title: "Software Development Services in Pakistan",
  description:
    "Explore custom software, web, mobile app, AI, SaaS, backend API, cloud and UI/UX development services from ZERO-PARADOX in Pakistan.",
  path: "/services",
});

export default function ServicesPage() {
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
                  End-to-End Capabilities
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-2">
                  Engineering Services
                </h1>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.1}>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                  As a Pakistan-based software development company, we build
                  scalable cloud architecture, intuitive frontends, AI
                  integrations, SaaS platforms, and mobile applications.
                </p>
              </ScrollReveal>
            </div>
            <AIOrbitHero
              services={[
                { label: "WEB" },
                { label: "MOBILE" },
                { label: "AI" },
                { label: "CLOUD" },
                { label: "API" },
                { label: "UI/UX" },
                { label: "AUTOMATION" },
                { label: "DATABASE" },
              ]}
            />
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-16 bg-neutral-50/50 dark:bg-neutral-950/40 border-t border-neutral-200/60 dark:border-neutral-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service, index) => (
                <div key={service.id} id={service.id} className="h-full">
                  <ServiceCard service={service} delay={index * 0.12} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              SERVICES.map((service) => ({
                "@context": "https://schema.org",
                "@type": "Service",
                name: service.title,
                description: service.description,
                provider: {
                  "@type": "Organization",
                  name: SITE_NAME,
                },
                areaServed: "Pakistan",
                url: `${DOMAIN}/services#${service.id}`,
              })),
            ),
          }}
        />

        <CTABanner />
      </div>
    </PageTransition>
  );
}
