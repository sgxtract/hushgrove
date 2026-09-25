import { cn } from "@/lib/utils";

const dots = ["bg-red", "bg-yellow", "bg-green"];

export function WindowDots({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn("flex gap-1.5", className)}>
      {dots.map((color) => (
        <span key={color} className={cn("size-2 rounded-full", color)} />
      ))}
    </span>
  );
}
