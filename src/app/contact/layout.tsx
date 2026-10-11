import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact ZERO-PARADOX in Pakistan",
  description:
    "Contact ZERO-PARADOX to discuss custom software, web applications, AI solutions, SaaS platforms or mobile app development in Pakistan.",
  path: "/contact",
});

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
