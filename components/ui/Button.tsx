import Link from "next/link";
import type { ReactNode } from "react";
import type { IconComponent } from "@/types";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  icon?: IconComponent;
  iconPosition?: "start" | "end";
  external?: boolean;
  className?: string;
}

const variants = {
  primary: "border-green bg-green text-background",
  ghost:
    "border-line-strong bg-card text-foreground backdrop-blur-md hover:border-green hover:text-green",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon: Icon,
  iconPosition = "start",
  external = false,
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-1.5 rounded-lg border px-4 py-2 text-[0.8rem] font-bold leading-none transition duration-200 hover:-translate-y-0.5",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green",
    variants[variant],
    className,
  );

  const iconEl = Icon && <Icon className="size-3.5 shrink-0" aria-hidden />;

  const content = (
    <>
      {iconPosition === "start" && iconEl}
      <span>{children}</span>
      {iconPosition === "end" && iconEl}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
