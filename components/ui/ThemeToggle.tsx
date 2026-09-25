"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative flex h-7 w-13 shrink-0 cursor-pointer items-center rounded-full border border-line-strong bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
    >
      <span className="absolute left-0.5 top-0.5 flex size-[22px] translate-x-6 items-center justify-center rounded-full bg-green text-background transition-transform duration-300 dark:translate-x-0">
        <Moon className="hidden size-3 dark:block" aria-hidden />
        <Sun className="size-3 dark:hidden" aria-hidden />
      </span>
    </button>
  );
}
