"use client";

import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { TiltCard } from "./tilt-card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard className="h-full">
      <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-xs transition-shadow duration-300 hover:border-blue-500/30 hover:shadow-xl dark:border-neutral-800/80 dark:bg-neutral-900/80">
        <div>
          {/* Visual Header Image Container */}
          <div className="relative flex h-48 w-full flex-col justify-between overflow-hidden border-b border-neutral-200/40 dark:border-neutral-800/40">
            <Image
              src={project.image}
              alt={project.imageAlt || project.title}
              width={960}
              height={540}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/80" />

            {/* Header Overlay Badges & Icon */}
            <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-600/85 text-white backdrop-blur-md border border-white/20 shadow-xs">
                  {project.category}
                </span>
              </div>

              <div className="flex items-end justify-between">
                <div className="w-10 h-10 rounded-xl bg-neutral-900/80 text-white flex items-center justify-center shadow-lg border border-white/20 backdrop-blur-md">
                  <FolderGit2 className="w-5 h-5 text-blue-400" />
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-300 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-6">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
              {project.shortDescription}
            </p>
          </div>
        </div>

        {/* Footer Tags & Demo Link */}
        <div className="px-6 pb-6 pt-0">
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </TiltCard>
  );
}
