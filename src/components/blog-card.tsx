"use client";

import Link from "next/link";
import { BlogPost } from "@/data/blog";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { TiltCard } from "./tilt-card";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <TiltCard className="h-full">
      <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-xs transition-shadow duration-300 hover:border-blue-500/30 hover:shadow-xl dark:border-neutral-800/80 dark:bg-neutral-900/80">
        <div>
          {/* Abstract Gradient Header Image Placeholder */}
          <div
            className={`h-44 w-full bg-linear-to-br ${post.gradient} p-6 flex flex-col justify-between relative overflow-hidden border-b border-neutral-200/40 dark:border-neutral-800/40`}
          >
            <div className="flex items-center justify-between z-10">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md text-neutral-800 dark:text-neutral-200 shadow-xs">
                {post.category}
              </span>
            </div>

            <div className="flex items-end justify-between z-10">
              <div className="w-10 h-10 rounded-xl bg-white/90 dark:bg-neutral-900/90 text-neutral-800 dark:text-neutral-100 flex items-center justify-center shadow-md">
                <BookOpen className="w-5 h-5 text-blue-500" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mb-3">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {post.title}
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3 mb-4">
              {post.excerpt}
            </p>
          </div>
        </div>

        <div className="px-6 pb-6 pt-0">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </TiltCard>
  );
}
