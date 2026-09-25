"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CopyState = "idle" | "copied" | "error";

const stateText: Record<CopyState, string> = {
  idle: "Copy",
  copied: "Copied!",
  error: "Copy failed",
};

const badgeStyles: Record<CopyState, string> = {
  idle: "border-line bg-surface text-muted group-hover:text-green",
  copied: "border-green/35 bg-green/12 text-green",
  error: "border-red/35 bg-red/12 text-red",
};

interface CopyButtonProps {
  value: string;
  label?: string;
  className?: string;
}

export function CopyButton({
  value,
  label = value,
  className,
}: CopyButtonProps) {
  const [state, setState] = useState<CopyState>("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("error");
    }

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setState("idle"), 2000);
  }

  const Icon = state === "copied" ? Check : Copy;

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "group inline-flex max-w-full cursor-pointer items-center gap-3 rounded-xl border border-line-strong bg-card px-4 py-3 backdrop-blur-md transition duration-200 hover:border-green",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green",
        className,
      )}
    >
      <span className="truncate font-mono text-sm text-foreground sm:text-base">
        {label}
      </span>
      <span
        className={cn(
          "inline-flex shrink-0 items-center gap-1.5 rounded-md border px-2 py-1 font-mono text-[0.68rem] font-bold transition-colors duration-200",
          badgeStyles[state],
        )}
      >
        <Icon className="size-3" aria-hidden />
        <span aria-live="polite">{stateText[state]}</span>
      </span>
    </button>
  );
}
