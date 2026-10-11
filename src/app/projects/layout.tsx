import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Software, AI and SaaS Development Projects",
    description:
        "Review sample web, mobile, AI and SaaS projects that show how ZERO-PARADOX approaches custom software development.",
    path: "/projects",
});

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return children;
}
