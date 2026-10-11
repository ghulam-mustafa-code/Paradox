"use client";

import { useEffect, useState } from "react";
import {
    ArrowRight,
    ArrowUpRight,
    BarChart3,
    CheckCircle2,
    Layers,
    Sparkles,
    X,
} from "lucide-react";

const SAAS_PRODUCT_URL = "https://myfrontend-bice.vercel.app/";

export function SuccessSaaSPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const closePopup = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-70 flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm"
            role="presentation"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) closePopup();
            }}
        >
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="saas-popup-title"
                className="relative w-full max-w-md overflow-hidden rounded-3xl border border-blue-200/80 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.25)] dark:border-neutral-700 dark:bg-neutral-950"
            >
                <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-blue-600 via-cyan-400 to-indigo-600" />
                <div className="relative p-4 sm:p-6">
                    <button
                        type="button"
                        onClick={closePopup}
                        aria-label="Close SaaS products popup"
                        className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200/80 bg-white/80 text-neutral-500 shadow-sm backdrop-blur transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900/80 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >
                        <X className="h-4 w-4" />
                    </button>

                    <div className="mb-4 overflow-hidden rounded-2xl border border-blue-100 bg-linear-to-br from-blue-50 via-white to-cyan-50 p-3 dark:border-blue-900/60 dark:from-blue-950/50 dark:via-neutral-900 dark:to-cyan-950/40">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                                    <Layers className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-neutral-950 dark:text-white">
                                        ZERO-PARADOX SaaS
                                    </p>
                                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                                        Built for real business operations
                                    </p>
                                </div>
                            </div>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-950/50 dark:text-emerald-300">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                Live
                            </span>
                        </div>

                        <div className="mt-3 grid grid-cols-3 gap-1.5">
                            <div className="rounded-lg border border-white/80 bg-white/80 p-2 dark:border-white/10 dark:bg-white/5">
                                <BarChart3 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                <p className="mt-1 text-base font-black text-neutral-950 dark:text-white">
                                    10x
                                </p>
                                <p className="text-[10px] text-neutral-500 dark:text-neutral-400">
                                    Clarity
                                </p>
                            </div>
                            <div className="rounded-lg border border-white/80 bg-white/80 p-2 dark:border-white/10 dark:bg-white/5">
                                <Sparkles className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                                <p className="mt-1 text-base font-black text-neutral-950 dark:text-white">
                                    AI
                                </p>
                                <p className="text-[10px] text-neutral-500 dark:text-neutral-400">
                                    Powered
                                </p>
                            </div>
                            <div className="rounded-lg border border-white/80 bg-white/80 p-2 dark:border-white/10 dark:bg-white/5">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                                <p className="mt-1 text-base font-black text-neutral-950 dark:text-white">
                                    Ready
                                </p>
                                <p className="text-[10px] text-neutral-500 dark:text-neutral-400">
                                    To scale
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="mb-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                        <Sparkles className="h-3.5 w-3.5" />
                        ZERO-PARADOX PRODUCTS
                    </p>
                    <h2
                        id="saas-popup-title"
                        className="max-w-md text-2xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-3xl"
                    >
                        Our Successful SaaS in Market
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                        Explore the AI-powered SaaS products we build to help businesses
                        manage operations, data, and growth with more clarity.
                    </p>

                    <div className="mt-4 grid gap-1.5 text-xs text-neutral-700 dark:text-neutral-200 sm:grid-cols-3">
                        {[
                            "AI-powered workflows",
                            "Built for real operations",
                            "Ready to scale",
                        ].map((item) => (
                            <div key={item} className="flex items-start gap-1.5 rounded-lg border border-neutral-200/80 bg-neutral-50/80 p-2 dark:border-neutral-800 dark:bg-neutral-900/70">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                        <a
                            href={SAAS_PRODUCT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closePopup}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700"
                        >
                            View Our SaaS Product
                            <ArrowRight className="h-4 w-4" />
                        </a>
                        <span className="inline-flex items-center justify-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                            Open in new tab
                            <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                        <button
                            type="button"
                            onClick={closePopup}
                            className="rounded-xl border border-neutral-200 px-4 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                        >
                            Maybe later
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}