import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatusPillProps {
  children: ReactNode;
  className?: string;
}

export function StatusPill({ children, className }: StatusPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 font-mono text-[0.72rem] text-muted backdrop-blur-md",
        className,
      )}
    >
      <span aria-hidden="true" className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-green opacity-60 motion-reduce:animate-none" />
        <span className="relative inline-flex size-2 rounded-full bg-green" />
      </span>
      {children}
    </span>
  );
}
