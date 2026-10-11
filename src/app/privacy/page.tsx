import type { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";
import { AIOrbitHero } from "@/components/ai-orbit-hero";
import { SITE_NAME, DOMAIN } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: `${SITE_NAME} Privacy Policy`,
  description: `Read the privacy policy for ${SITE_NAME} and learn how website inquiries and applications are handled.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.75fr)] lg:gap-16">
          <div className="space-y-8">
            <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Last updated: August 2026
            </p>
          </div>
          <AIOrbitHero />
        </div>

        <div className="prose mx-auto mt-12 max-w-4xl dark:prose-invert text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 space-y-4">
          <p>
            At <strong>{SITE_NAME}</strong> ({DOMAIN}), accessible from {DOMAIN}
            , one of our main priorities is the privacy of our visitors. This
            Privacy Policy document contains types of information that is
            collected and recorded by {SITE_NAME} and how we use it.
          </p>

          <h2 className="text-lg font-bold text-neutral-900 dark:text-white pt-2">
            1. Information We Collect
          </h2>
          <p>
            When you reach out via our contact forms or apply for careers at{" "}
            {SITE_NAME}, we may collect personal information such as your name,
            email address, phone number, company name, and project specification
            details.
          </p>

          <h2 className="text-lg font-bold text-neutral-900 dark:text-white pt-2">
            2. How We Use Your Information
          </h2>
          <p>
            We use the collected information to respond to client project
            inquiries, evaluate job applications, communicate software
            engineering proposals, and maintain platform security.
          </p>

          <h2 className="text-lg font-bold text-neutral-900 dark:text-white pt-2">
            3. Data Protection & Security
          </h2>
          <p>
            We deploy standard security measures to protect your personal
            information against unauthorized access or disclosure. We do not
            sell or rent client data to third parties.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
