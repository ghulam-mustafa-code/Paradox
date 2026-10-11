import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { HeroBackground } from "@/components/hero-background";
import { AIOrbitHero } from "@/components/ai-orbit-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { BlogCard } from "@/components/blog-card";
import { CTABanner } from "@/components/cta-banner";
import { BLOG_POSTS } from "@/data/blog";
import { ArrowLeft, Calendar, Clock, User, BookOpen } from "lucide-react";
import { DOMAIN, SITE_NAME } from "@/lib/constants";

interface BlogSlugProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogSlugProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Article Not Found", robots: { index: false, follow: false } };
  }

  const url = `${DOMAIN}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "en_PK",
      url,
      title: `${post.title} | ${SITE_NAME}`,
      description: post.excerpt,
      siteName: SITE_NAME,
      publishedTime: post.date,
      authors: [post.author.name],
      images: [{ url: "/logo.png", alt: `${SITE_NAME} software house logo` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${SITE_NAME}`,
      description: post.excerpt,
      images: ["/logo.png"],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogSlugProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);
  const articleUrl = `${DOMAIN}/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.png` },
    },
    image: `${DOMAIN}/logo.png`,
    mainEntityOfPage: articleUrl,
  };

  return (
    <PageTransition>
      <article className="relative overflow-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        {/* HEADER */}
        <section className="relative pt-10 sm:pt-16 pb-12">
          <HeroBackground />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] lg:gap-16 lg:px-8">
            <div className="max-w-4xl space-y-6">
              <ScrollReveal variant="fade-up">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-blue-500 transition-colors mb-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Articles</span>
                </Link>

                <div>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    {post.category}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-4 leading-tight">
                  {post.title}
                </h1>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.1}>
                <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-500 dark:text-neutral-400 pt-2 border-b border-neutral-200 dark:border-neutral-800 pb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-semibold text-neutral-800 dark:text-neutral-200 block">
                        {post.author.name}
                      </span>
                      <span className="text-[10px] text-neutral-500">
                        {post.author.role}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{post.date}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <AIOrbitHero />
          </div>
        </section>

        {/* COVER GRAPHIC */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div
            className={`h-64 sm:h-80 w-full rounded-3xl bg-linear-to-br ${post.gradient} p-8 flex items-end justify-between relative overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl`}
          >
            <div className="w-12 h-12 rounded-2xl bg-white/90 dark:bg-neutral-900/90 text-blue-500 flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6" />
            </div>

            <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">
              ZeroParadox Tech Insights
            </span>
          </div>
        </section>

        {/* BODY ARTICLE CONTENT */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 text-base sm:text-lg leading-relaxed space-y-6">
            {post.content
              .trim()
              .split("\n\n")
              .map((paragraph, index) => {
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white pt-4"
                    >
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }

                if (paragraph.startsWith("```")) {
                  const codeContent = paragraph
                    .replace(/```[a-z]*/g, "")
                    .trim();
                  return (
                    <pre
                      key={index}
                      className="p-4 sm:p-6 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs sm:text-sm overflow-x-auto border border-neutral-800"
                    >
                      <code>{codeContent}</code>
                    </pre>
                  );
                }

                if (paragraph.startsWith("* ")) {
                  const listItems = paragraph
                    .split("\n")
                    .map((line) => line.replace("* ", ""));
                  return (
                    <ul
                      key={index}
                      className="list-disc list-inside space-y-2 text-sm sm:text-base"
                    >
                      {listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p
                    key={index}
                    className="text-sm sm:text-base leading-relaxed"
                  >
                    {paragraph}
                  </p>
                );
              })}
          </div>
        </section>

        {/* RELATED POSTS */}
        <section className="py-16 bg-neutral-50/50 dark:bg-neutral-950/40 border-t border-neutral-200/60 dark:border-neutral-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                Related Articles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <BlogCard key={rPost.slug} post={rPost} />
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </article>
    </PageTransition>
  );
}
