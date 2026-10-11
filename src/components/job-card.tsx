"use client";

import { useState } from "react";
import { JobPosting } from "@/data/careers";
import { MapPin, Briefcase, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { JobApplyDialog } from "./job-apply-dialog";

export function JobCard({ job }: { job: JobPosting }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <MapPin className="w-3 h-3" />
              {job.location}
            </span>

            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
              <Briefcase className="w-3 h-3" />
              {job.type}
            </span>

            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
              <Clock className="w-3 h-3" />
              {job.experience}
            </span>
          </div>

          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {job.title}
          </h3>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
            {job.description}
          </p>

          <div className="space-y-2 mb-6">
            <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Key Responsibilities</h4>
            <ul className="space-y-1">
              {job.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
          <button
            onClick={() => setIsOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {isOpen && <JobApplyDialog job={job} onClose={() => setIsOpen(false)} />}
    </>
  );
}
