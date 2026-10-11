"use client";

import { useState, FormEvent } from "react";
import { PageTransition } from "@/components/page-transition";
import { HeroBackground } from "@/components/hero-background";
import { AIOrbitHero } from "@/components/ai-orbit-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CONTACT_INFO } from "@/lib/constants";
import { SERVICES } from "@/data/services";
import {
  Mail,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "AI Model Development & Fine-Tuning",
    budget: "< $10k",
    details: "",
    website_url: "", // Hidden honeypot field
  });

  const [status, setStatus] = useState<"idle" | "prepared" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [preparedEmail, setPreparedEmail] = useState<{
    subject: string;
    body: string;
    mailtoUrl: string;
  } | null>(null);

  const [copiedField, setCopiedField] = useState<"email" | "body" | null>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handlePrepareEmail = (e: FormEvent) => {
    e.preventDefault();

    // 1. Required fields validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.details.trim()
    ) {
      setStatus("error");
      setErrorMessage("Please complete the required fields.");
      return;
    }

    // 2. Email format validation
    if (!validateEmail(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("idle");
    setErrorMessage("");

    // 3. Dynamic subject & body generation
    const recipient = CONTACT_INFO.email;
    const subject = `New Project Inquiry — ${formData.service} — ${formData.name.trim()}`;

    const body = `Hello ZeroParadox Team,

  I am interested in discussing a project with ZeroParadox.

PROJECT INQUIRY

Name:
${formData.name.trim()}

Email:
${formData.email.trim()}

Phone:
${formData.phone.trim() || "Not provided"}

Company:
${formData.company.trim() || "Not provided"}

Service:
${formData.service}

Budget:
${formData.budget}

PROJECT DETAILS:

${formData.details.trim()}

Regards,
${formData.name.trim()}`;

    // 4. Construct safe mailto URL
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setPreparedEmail({ subject, body, mailtoUrl });
    setStatus("prepared");

    // 5. Trigger native email client
    if (typeof window !== "undefined") {
      window.location.href = mailtoUrl;
    }
  };

  const copyToClipboard = async (text: string, field: "email" | "body") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <PageTransition>
      <div className="relative overflow-hidden">
        {/* HERO */}
        <section className="relative pt-12 sm:pt-20 pb-12">
          <HeroBackground />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] lg:gap-16 lg:px-8">
            <div className="space-y-4 text-center lg:text-left">
              <ScrollReveal variant="fade-up">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Start a Conversation
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-2">
                  Let&apos;s Build Something Great
                </h1>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.1}>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
                  Have a project idea, MVP requirement, or technical question?
                  Reach out to our engineering team.
                </p>
              </ScrollReveal>
            </div>
            <AIOrbitHero />
          </div>
        </section>

        {/* MAIN CONTACT CONTENT */}
        <section className="py-12 bg-neutral-50/50 dark:bg-neutral-950/40 border-t border-neutral-200/60 dark:border-neutral-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* CONTACT INFO SIDEBAR */}
              <ScrollReveal
                variant="slide-left"
                className="lg:col-span-5 space-y-6"
              >
                <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm space-y-8">
                  <div>
                    <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
                      Contact Details
                    </h2>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      Our response window is typically within 24 business hours.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                          Email Us
                        </span>
                        <a
                          href={`mailto:${CONTACT_INFO.email}`}
                          className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-blue-500 transition-colors"
                        >
                          {CONTACT_INFO.email}
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </ScrollReveal>

              {/* FORM */}
              <ScrollReveal variant="slide-right" className="lg:col-span-7">
                <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                      Send Us a Message
                    </h2>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      Tell us about your project requirements and expected
                      timeline.
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    {status === "prepared" && preparedEmail ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="p-6 sm:p-8 space-y-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                              Email Prepared!
                            </h3>
                            <p className="text-xs font-medium text-emerald-700 dark:text-emerald-300">
                              Email prepared &mdash; review the details and
                              click Send.
                            </p>
                          </div>
                        </div>

                        {/* Prepared Details Summary */}
                        <div className="p-4 rounded-xl bg-white/80 dark:bg-neutral-800/80 border border-neutral-200/60 dark:border-neutral-700/60 text-xs space-y-2 text-neutral-800 dark:text-neutral-200">
                          <div>
                            <span className="font-semibold text-neutral-500 dark:text-neutral-400">
                              To:{" "}
                            </span>
                            <span className="font-medium text-neutral-900 dark:text-white">
                              {CONTACT_INFO.email}
                            </span>
                          </div>
                          <div>
                            <span className="font-semibold text-neutral-500 dark:text-neutral-400">
                              Subject:{" "}
                            </span>
                            <span className="font-medium text-neutral-900 dark:text-white">
                              {preparedEmail.subject}
                            </span>
                          </div>
                        </div>

                        {/* Fallback Notice */}
                        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-neutral-700 dark:text-neutral-300 space-y-1 leading-relaxed">
                          <p className="font-medium">
                            Your email has been prepared. If your email app did
                            not open, you can copy the message or email us
                            directly at{" "}
                            <a
                              href={`mailto:${CONTACT_INFO.email}`}
                              className="font-bold underline hover:text-blue-500"
                            >
                              {CONTACT_INFO.email}
                            </a>
                            .
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          <a
                            href={preparedEmail.mailtoUrl}
                            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs"
                          >
                            <span>Open Mail App</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>

                          <button
                            type="button"
                            onClick={() =>
                              copyToClipboard(CONTACT_INFO.email, "email")
                            }
                            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-700/60 transition-colors shadow-xs"
                          >
                            {copiedField === "email" ? (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                <span>Email Copied!</span>
                              </>
                            ) : (
                              <>
                                <svg
                                  className="w-3.5 h-3.5 stroke-current fill-none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    x="8"
                                    y="8"
                                    rx="2"
                                    ry="2"
                                  />
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                </svg>
                                <span>Copy Email</span>
                              </>
                            )}
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              copyToClipboard(preparedEmail.body, "body")
                            }
                            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-700/60 transition-colors shadow-xs"
                          >
                            {copiedField === "body" ? (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                <span>Message Copied!</span>
                              </>
                            ) : (
                              <>
                                <svg
                                  className="w-3.5 h-3.5 stroke-current fill-none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    x="8"
                                    y="8"
                                    rx="2"
                                    ry="2"
                                  />
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                </svg>
                                <span>Copy Message</span>
                              </>
                            )}
                          </button>

                          <button
                            type="button"
                            onClick={() => setStatus("idle")}
                            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-xs"
                          >
                            <svg
                              className="w-3.5 h-3.5 stroke-current fill-none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 20h9" />
                              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                            <span>Edit Details</span>
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <form onSubmit={handlePrepareEmail} className="space-y-4">
                        {status === "error" && (
                          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            <span>{errorMessage}</span>
                          </div>
                        )}

                        {/* Hidden Honeypot Input */}
                        <div className="hidden" aria-hidden="true">
                          <input
                            type="text"
                            name="website_url"
                            tabIndex={-1}
                            autoComplete="off"
                            value={formData.website_url}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                website_url: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 text-xs rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 text-xs rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              placeholder="+1 (555) 000-0000"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  phone: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 text-xs rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                              Company / Organization
                            </label>
                            <input
                              type="text"
                              placeholder="Acme Corp"
                              value={formData.company}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  company: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 text-xs rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                              Primary Service Interest
                            </label>
                            <select
                              value={formData.service}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  service: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 text-xs rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                            >
                              {SERVICES.map((s) => (
                                <option key={s.id} value={s.title}>
                                  {s.title}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                              Estimated Budget
                            </label>
                            <select
                              value={formData.budget}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  budget: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 text-xs rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="< $5k">&lt; $5,000</option>
                              <option value="$5k - $15k">
                                $5,000 &ndash; $15,000
                              </option>
                              <option value="$15k - $50k">
                                $15,000 &ndash; $50,000
                              </option>
                              <option value="$50k+">$50,000+</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                            Project Details *
                          </label>
                          <textarea
                            rows={4}
                            required
                            placeholder="Tell us about your project goals, scope, and target launch timeline..."
                            value={formData.details}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                details: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 text-xs rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-bold rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-md"
                        >
                          <span>Prepare Email</span>
                          <Mail className="w-3.5 h-3.5" />
                        </button>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
