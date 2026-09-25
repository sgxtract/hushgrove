"use client";

import { navLinks } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((link) => link.id);

export function NavTabs({ className }: { className?: string }) {
  const activeId = useActiveSection(sectionIds);

  return (
    <ul className={cn("flex", className)}>
      {navLinks.map(({ id, label }) => {
        const isActive = activeId === id;

        return (
          <li key={id} className="shrink-0">
            <a
              href={`#${id}`}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "flex h-full items-center border-b-2 px-3 font-mono text-xs transition-colors duration-200",
                "hover:border-green/50 hover:bg-surface hover:text-green",
                "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-green",
                isActive
                  ? "border-green text-green"
                  : "border-transparent text-muted",
              )}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
