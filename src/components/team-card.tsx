"use client";

import Image from "next/image";
import { TeamMember } from "@/data/team";
import { TiltCard } from "./tilt-card";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <TiltCard className="h-full">
      <article className="group relative grid gap-6 border-b border-neutral-200/80 px-1 py-8 shadow-none transition-colors duration-300 hover:border-blue-500/30 hover:bg-neutral-50/70 hover:shadow-lg dark:border-neutral-800/80 dark:hover:bg-neutral-900/40 sm:grid-cols-[88px_minmax(0,1fr)] sm:gap-7 sm:px-5">
        <div
          className={`relative flex h-20 w-20 items-center justify-center rounded-full border border-neutral-200/80 bg-linear-to-tr ${member.avatarColor} text-xl font-black text-white shadow-sm dark:border-neutral-700/80 sm:h-22 sm:w-22`}
          role="img"
          aria-label={`${member.placeholderName} profile placeholder`}
        >
          {member.image ? (
            <Image
              src={member.image}
              alt={member.placeholderName}
              fill
              sizes="88px"
              className="rounded-full object-cover"
            />
          ) : (
            member.initials
          )}
        </div>

        <div className="min-w-0 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400">
            {member.roleTitle}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
            {member.placeholderName}
          </h2>

          {member.specialization && (
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
              {member.specialization}
            </p>
          )}

          {member.bio && (
            <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-400 sm:text-base">
              {member.bio}
            </p>
          )}
        </div>
      </article>
    </TiltCard>
  );
}
