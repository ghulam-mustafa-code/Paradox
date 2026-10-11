"use client";

import { Service } from "@/data/services";
import * as LucideIcons from "lucide-react";
import { AnimatedFlipCard } from "./animated-flip-card";

export function ServiceCard({
  service,
  delay = 0,
}: {
  service: Service;
  delay?: number;
}) {
  // Dynamically lookup Lucide Icon component safely
  const iconsMap = LucideIcons as unknown as Record<
    string,
    React.ComponentType<{ className?: string }>
  >;
  const IconComponent = iconsMap[service.iconName] || LucideIcons.Code2;

  return (
    <AnimatedFlipCard
      number={service.number}
      title={service.title}
      icon={IconComponent}
      description={service.description}
      technologies={service.technologies}
      ctaLabel="Explore service"
      ctaHref={`/services#${service.id}`}
      delay={delay}
    />
  );
}
