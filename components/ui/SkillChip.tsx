import type { IconComponent } from "@/types";
import { cn } from "@/lib/utils";

interface SkillChipProps {
  name: string;
  icon?: IconComponent;
  variant?: "primary" | "secondary";
}

const variants = {
  primary: "border-green/35 bg-green/12 font-bold text-green hover:bg-green/20",
  secondary: "border-line bg-surface font-semibold text-muted hover:bg-card",
};

export function SkillChip({
  name,
  icon: Icon,
  variant = "secondary",
}: SkillChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-[0.7rem] transition duration-150 hover:-translate-y-0.5",
        variants[variant],
      )}
    >
      {Icon && <Icon className="size-3 shrink-0" aria-hidden />}
      {name}
    </span>
  );
}
