"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  ChevronDown,
  FolderGit2,
  Layers,
  Menu,
  Box,
  User,
  Users2,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SITE_NAME } from "@/lib/constants";
import { ThemeToggle } from "./theme-toggle";

type MenuItem = {
  label: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const SOLUTIONS: MenuItem[] = [
  {
    label: "Services",
    href: "/services",
    description: "What we build",
    icon: Layers,
  },
  {
    label: "Products",
    href: "/products",
    description: "Our AI-powered products",
    icon: Box,
  },
  {
    label: "Projects",
    href: "/projects",
    description: "Featured client work",
    icon: FolderGit2,
  },
  {
    label: "Technologies",
    href: "/technologies",
    description: "Our technology stack",
    icon: Layers,
  },
];

const COMPANY: MenuItem[] = [
  { label: "About", href: "/about", description: "Who we are", icon: User },
  {
    label: "Team",
    href: "/team",
    description: "People behind ZeroParadox",
    icon: Users2,
  },
  {
    label: "Careers",
    href: "/careers",
    description: "Join our team",
    icon: Briefcase,
  },
  {
    label: "Blog",
    href: "/blog",
    description: "Ideas and insights",
    icon: BookOpen,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<
    "solutions" | "company" | null
  >(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [openMobileSection, setOpenMobileSection] = React.useState<
    "solutions" | "company" | null
  >(null);
  const closeTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const navbarRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
        setOpenMobileSection(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => setOpenDropdown(null), 140);
  };

  const closeMenus = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
    setOpenMobileSection(null);
  };

  const renderDropdownItem = (item: MenuItem) => {
    const Icon = item.icon;
    const isActive = pathname === item.href;

    return (
      <Link
        key={item.href}
        href={item.href}
        role="menuitem"
        onClick={closeMenus}
        className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${isActive
          ? "bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400"
          : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-white/6"
          }`}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 text-blue-600 transition-colors group-hover:border-blue-500/30 group-hover:bg-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-blue-400">
          <Icon className="h-4 w-4" />
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold leading-5">
            {item.label}
          </span>
          <span className="block truncate text-[11px] leading-4 text-neutral-500 dark:text-neutral-400">
            {item.description}
          </span>
        </span>
      </Link>
    );
  };

  const renderDropdown = (
    label: "Solutions" | "Company",
    key: "solutions" | "company",
    items: MenuItem[],
  ) => {
    const isOpen = openDropdown === key;

    return (
      <div
        className="relative"
        onMouseEnter={() => {
          cancelClose();
          setOpenDropdown(key);
        }}
        onMouseLeave={scheduleClose}
      >
        <button
          type="button"
          aria-expanded={isOpen}
          aria-haspopup="menu"
          onClick={() => {
            cancelClose();
            setOpenDropdown(isOpen ? null : key);
          }}
          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isOpen
            ? "bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400"
            : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800/50 dark:hover:text-white"
            }`}
        >
          <span>{label}</span>
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -5 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              role="menu"
              aria-label={`${label} navigation`}
              className="absolute left-1/2 top-[calc(100%+0.7rem)] w-[min(90vw,26rem)] -translate-x-1/2 rounded-2xl border border-neutral-200/80 bg-white/95 p-3 shadow-2xl shadow-neutral-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/90 dark:shadow-black/40"
            >
              <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                {label}
              </p>
              <div className="grid grid-cols-2 gap-1">
                {items.map(renderDropdownItem)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const renderMobileSection = (
    label: string,
    key: "solutions" | "company",
    items: MenuItem[],
  ) => {
    const isOpen = openMobileSection === key;
    return (
      <div key={key}>
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => setOpenMobileSection(isOpen ? null : key)}
          className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900"
        >
          <span>{label}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.18 }}
              className="overflow-hidden pl-3"
            >
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenus}
                  className="block rounded-lg px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-blue-600 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-blue-400"
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <header
      ref={navbarRef}
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${isScrolled
        ? "bg-white/88 dark:bg-neutral-950/88 backdrop-blur-xl border-neutral-200/80 dark:border-neutral-800/80 shadow-[0_8px_30px_rgba(15,23,42,0.06)] py-3"
        : "bg-white/62 dark:bg-neutral-950/62 backdrop-blur-lg border-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center group"
          aria-label={SITE_NAME}
        >
          <Image
            src="/logo.png"
            alt={`${SITE_NAME} logo`}
            width={220}
            height={54}
            priority
            className="h-8 w-auto object-contain drop-shadow-[0_0_18px_rgba(59,130,246,0.18)] sm:h-9"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 xl:gap-2"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${pathname === "/"
              ? "bg-blue-500/10 font-semibold text-blue-600 dark:bg-blue-500/15 dark:text-blue-400"
              : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800/50 dark:hover:text-white"
              }`}
          >
            Home
          </Link>
          {renderDropdown("Solutions", "solutions", SOLUTIONS)}
          {renderDropdown("Company", "company", COMPANY)}
          <Link
            href="/contact"
            className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800/50 dark:hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/* Right side Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />

          <button
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            id="mobile-navigation"
            className="md:hidden absolute inset-x-0 top-full border-b border-neutral-200 bg-white/95 px-4 pb-6 pt-3 shadow-2xl backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/95"
          >
            <div className="space-y-1 pt-2">
              <Link
                href="/"
                onClick={closeMenus}
                className="block rounded-xl px-3 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900"
              >
                Home
              </Link>
              {renderMobileSection("Solutions", "solutions", SOLUTIONS)}
              {renderMobileSection("Company", "company", COMPANY)}
              <Link
                href="/contact"
                onClick={closeMenus}
                className="block rounded-xl px-3 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900"
              >
                Contact
              </Link>
            </div>

            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-2">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-xl bg-linear-to-r from-blue-600 to-violet-600 text-white shadow-md"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
