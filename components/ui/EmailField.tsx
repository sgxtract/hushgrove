"use client";

import { Check, Copy, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CopyState = "idle" | "copied" | "error";

const copyText: Record<CopyState, string> = {
  idle: "Copy",
  copied: "Copied!",
  error: "Copy failed",
};

const copyStyles: Record<CopyState, string> = {
  idle: "border-line bg-surface text-muted hover:border-green/50 hover:text-green",
  copied: "border-green/35 bg-green/12 text-green",
  error: "border-red/35 bg-red/12 text-red",
};

const actionBase =
  "inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-md border px-2 py-1 font-mono text-[0.68rem] font-bold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green";

interface EmailFieldProps {
  email: string;
  subject?: string;
  className?: string;
}

export function EmailField({ email, subject, className }: EmailFieldProps) {
  const [state, setState] = useState<CopyState>("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("error");
    }

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setState("idle"), 2000);
  }

  const mailtoHref = subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;

  const CopyIcon = state === "copied" ? Check : Copy;

  return (
    <div
      className={cn(
        "inline-flex max-w-full items-center gap-3 rounded-xl border border-line-strong bg-card py-2.5 pl-4 pr-2.5 backdrop-blur-md",
        className,
      )}
    >
      <span className="min-w-0 truncate font-mono text-sm text-foreground sm:text-base">
        {email}
      </span>

      <div className="flex shrink-0 items-center gap-1.5">
        <button
          type="button"
          onClick={handleCopy}
          className={cn(actionBase, copyStyles[state])}
        >
          <CopyIcon className="size-3" aria-hidden />
          <span aria-live="polite">{copyText[state]}</span>
        </button>

        <a
          href={mailtoHref}
          className={cn(
            actionBase,
            "border-green bg-green text-background hover:opacity-90",
          )}
        >
          <Send className="size-3" aria-hidden />
          Send Mail
        </a>
      </div>
    </div>
  );
}
