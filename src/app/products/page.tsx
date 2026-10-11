import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { HeroBackground } from "@/components/hero-background";
import { AIOrbitHero } from "@/components/ai-orbit-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ProductCard } from "@/components/product-card";
import { CTABanner } from "@/components/cta-banner";
import { PRODUCTS } from "@/data/products";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "AI Products and SaaS Platforms by ZERO-PARADOX",
  description:
    "Discover AI-powered products and SaaS platforms created by ZERO-PARADOX to solve operational challenges across retail, education, manufacturing and more.",
  path: "/products",
});

export default function ProductsPage() {
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
                  Proprietary Innovation
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-2">
                  Products & Platforms
                </h1>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.1}>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                  Internal software platforms and AI solutions created by
                  ZeroParadox to solve industry challenges.
                </p>
              </ScrollReveal>
            </div>
            <AIOrbitHero
              services={[
                { label: "LLM" },
                { label: "RAG" },
                { label: "AI AGENTS" },
                { label: "VISION" },
                { label: "NLP" },
                { label: "ML" },
                { label: "DATA" },
                { label: "API" },
              ]}
            />
          </div>
        </section>

        {/* PRODUCTS GRID */}
        <section className="py-16 bg-neutral-50/50 dark:bg-neutral-950/40 border-t border-neutral-200/60 dark:border-neutral-800/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((prod) => (
                <div key={prod.id} className="h-full">
                  <ProductCard product={prod} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </div>
    </PageTransition>
  );
}
