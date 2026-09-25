import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "glass-rim overflow-hidden rounded-2xl bg-card shadow-glass",
        "backdrop-blur-xl backdrop-saturate-150",
        className,
      )}
      {...props}
    />
  );
}
