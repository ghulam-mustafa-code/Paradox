"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/data/products";
import * as LucideIcons from "lucide-react";
import { ArrowRight, CheckCircle2, X } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const [isOpen, setIsOpen] = useState(false);

  const iconsMap = LucideIcons as unknown as Record<
    string,
    React.ComponentType<{ className?: string }>
  >;
  const IconComponent = iconsMap[product.iconName] || LucideIcons.Box;

  return (
    <>
      <div className="group relative rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full">
        {/* Upper Visual Image Header */}
        <div className="relative h-48 w-full overflow-hidden border-b border-neutral-200/40 dark:border-neutral-800/40">
          <Image
            src={product.image}
            alt={`${product.name} - ${product.shortDescription}`}
            width={960}
            height={540}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/80" />

          {/* Badges & Icon */}
          <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-600/85 text-white backdrop-blur-md border border-white/20 shadow-xs">
                {product.category}
              </span>
            </div>

            <div className="flex items-end justify-between">
              <div className="w-10 h-10 rounded-xl bg-neutral-900/80 text-white flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-md">
                <IconComponent className="w-5 h-5 text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Card Body Details */}
        <div className="p-6 flex flex-col justify-between grow">
          <div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {product.name}
            </h3>

            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-3 italic">
              &ldquo;{product.tagline}&rdquo;
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
              {product.shortDescription}
            </p>
          </div>

          <div>
            {/* Category / Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View Product Details CTA */}
            <button
              onClick={() => setIsOpen(true)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-md"
            >
              <span>View Product Details</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs">
          <div className="w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl relative space-y-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {product.name}
                </h3>
                <span className="text-xs text-blue-500 font-semibold uppercase tracking-wider">
                  {product.category}
                </span>
              </div>
            </div>

            <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 italic">
              {product.tagline}
            </p>

            {product.id === "cortexai" && (
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  CortexAI Product Video
                </h4>
                <video
                  className="aspect-video w-full rounded-xl border border-neutral-200 bg-neutral-950 object-cover dark:border-neutral-800"
                  src="/SocialSync_Edited.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label="CortexAI product video"
                />
              </div>
            )}

            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {product.shortDescription}
            </p>

            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                Key Capabilities & AI Features
              </h4>
              <ul className="space-y-2">
                {product.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-2.5 text-xs text-neutral-700 dark:text-neutral-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
