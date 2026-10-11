import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { AIOrbitHero } from "@/components/ai-orbit-hero";
import { SITE_NAME, DOMAIN } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: `${SITE_NAME} Terms of Service`,
  description: `Review the terms of service governing access to the ${SITE_NAME} website and software development inquiries.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.75fr)] lg:gap-16">
          <div className="space-y-8">
            <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white">
              Terms of Service
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Last updated: August 2026
            </p>
          </div>
          <AIOrbitHero />
        </div>

        <div className="prose mx-auto mt-12 max-w-4xl dark:prose-invert text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 space-y-4">
          <p>
            Welcome to <strong>{SITE_NAME}</strong>. By accessing our website at{" "}
            {DOMAIN}, you agree to comply with these terms of service.
          </p>

          <h2 className="text-lg font-bold text-neutral-900 dark:text-white pt-2">
            1. Intellectual Property
          </h2>
          <p>
            All website materials, logos, layout designs, and trademarks
            displayed on this site are the property of {SITE_NAME} unless
            otherwise noted.
          </p>

          <h2 className="text-lg font-bold text-neutral-900 dark:text-white pt-2">
            2. Services & Project Agreements
          </h2>
          <p>
            Engagements for custom software development, mobile app engineering,
            or AI integration are governed by separate master service agreements
            (MSA) signed between {SITE_NAME} and the client.
          </p>

          <h2 className="text-lg font-bold text-neutral-900 dark:text-white pt-2">
            3. Limitation of Liability
          </h2>
          <p>
            In no event shall {SITE_NAME} be liable for any indirect,
            incidental, or consequential damages arising out of your use or
            inability to use this website.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
