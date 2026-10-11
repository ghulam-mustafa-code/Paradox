import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "The ZERO-PARADOX Software Development Team",
    description:
        "Meet the engineering team behind ZERO-PARADOX software, AI, web application and digital product development.",
    path: "/team",
});

export default function TeamLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return children;
}
