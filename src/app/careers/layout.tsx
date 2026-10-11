import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Careers at ZERO-PARADOX",
  description:
    "Explore engineering opportunities at ZERO-PARADOX, a software house building web, AI, SaaS and mobile products.",
  path: "/careers",
});

export default function CareersLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
