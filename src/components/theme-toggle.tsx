"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [isOpen, setIsOpen] = React.useState(false);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-neutral-800/20 border border-neutral-700/30" />
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme"
        className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
      >
        {theme === "dark" ? (
          <Moon className="w-4 h-4" />
        ) : theme === "light" ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Laptop className="w-4 h-4" />
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-36 py-1 z-50 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl backdrop-blur-md">
            <button
              onClick={() => {
                setTheme("light");
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2 text-xs flex items-center gap-2.5 transition-colors ${
                theme === "light"
                  ? "text-blue-600 dark:text-blue-400 font-semibold bg-neutral-100 dark:bg-neutral-800/60"
                  : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/40"
              }`}
            >
              <Sun className="w-3.5 h-3.5" /> Light Mode
            </button>

            <button
              onClick={() => {
                setTheme("dark");
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2 text-xs flex items-center gap-2.5 transition-colors ${
                theme === "dark"
                  ? "text-blue-600 dark:text-blue-400 font-semibold bg-neutral-100 dark:bg-neutral-800/60"
                  : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/40"
              }`}
            >
              <Moon className="w-3.5 h-3.5" /> Dark Mode
            </button>

            <button
              onClick={() => {
                setTheme("system");
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2 text-xs flex items-center gap-2.5 transition-colors ${
                theme === "system"
                  ? "text-blue-600 dark:text-blue-400 font-semibold bg-neutral-100 dark:bg-neutral-800/60"
                  : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/40"
              }`}
            >
              <Laptop className="w-3.5 h-3.5" /> System Mode
            </button>
          </div>
        </>
      )}
    </div>
  );
}
