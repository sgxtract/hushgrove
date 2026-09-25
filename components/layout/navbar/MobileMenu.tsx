"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { navLinks } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((link) => link.id);

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const panelId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const desktop = window.matchMedia("(min-width: 64rem)");

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function handleBreakpoint(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    desktop.addEventListener("change", handleBreakpoint);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      desktop.removeEventListener("change", handleBreakpoint);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
        className="flex size-9 cursor-pointer items-center justify-center rounded-lg border border-line-strong bg-surface text-foreground transition-colors duration-200 hover:border-green hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
      >
        {open ? (
          <X className="size-4" aria-hidden />
        ) : (
          <Menu className="size-4" aria-hidden />
        )}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-background/95 shadow-glass motion-safe:animate-menu-in"
      >
        <ul className="mx-auto max-w-4xl px-6 py-3">
          {navLinks.map(({ id, label }) => {
            const isActive = activeId === id;

            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 font-mono text-sm transition-colors duration-200",
                    "hover:bg-surface hover:text-green",
                    "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-green",
                    isActive ? "bg-surface text-green" : "text-muted",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "size-1.5 rounded-full",
                      isActive ? "bg-green" : "bg-line-strong",
                    )}
                  />
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
