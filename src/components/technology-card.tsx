"use client";

import * as LucideIcons from "lucide-react";
import { TiltCard } from "./tilt-card";

interface TechItemProps {
  name: string;
  description: string;
  iconName: string;
  highlight?: boolean;
}

export function TechnologyCard({ item }: { item: TechItemProps }) {
  const iconsMap = LucideIcons as unknown as Record<
    string,
    React.ComponentType<{ className?: string }>
  >;
  const IconComponent = iconsMap[item.iconName] || LucideIcons.Code2;

  return (
    <TiltCard className="h-full">
      <div
        className={`flex h-full items-start gap-4 rounded-xl border p-4 transition-shadow duration-300 hover:border-blue-500/30 hover:shadow-lg sm:p-5 ${
          item.highlight
            ? "bg-blue-500/5 dark:bg-blue-500/10 border-blue-500/30 dark:border-blue-500/40 shadow-xs"
            : "bg-white dark:bg-neutral-900/60 border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700"
        }`}
      >
        <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
          <IconComponent className="w-5 h-5" />
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
              {item.name}
            </h4>
            {item.highlight && (
              <span className="px-2 py-0.2 text-[10px] font-semibold rounded bg-blue-500/20 text-blue-600 dark:text-blue-400">
                Primary Stack
              </span>
            )}
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </TiltCard>
  );
}
