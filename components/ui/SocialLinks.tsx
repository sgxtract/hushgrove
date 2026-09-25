import type { SocialLink } from "@/types";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <ul className={cn("flex gap-2.5", className)}>
      {links.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex size-9 items-center justify-center rounded-full border border-line bg-card text-muted backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-green hover:bg-surface hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          >
            <Icon className="size-4" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
