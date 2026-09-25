import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-line bg-card shadow-glass backdrop-blur-[18px]",
        className,
      )}
      {...props}
    />
  );
}