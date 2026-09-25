import type { ReactNode } from "react";
import { GlassCard } from "./GlassCard";
import { WindowBar } from "./WindowBar";

interface SectionCardProps {
  id: string;
  filename: string;
  tag: string;
  title: string;
  children: ReactNode;
}

export function SectionCard({
  id,
  filename,
  tag,
  title,
  children,
}: SectionCardProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="relative z-10 mx-auto max-w-4xl scroll-mt-20 px-6 pb-16"
    >
      <GlassCard>
        <WindowBar filename={filename} />
        <div className="p-7 sm:p-8">
          <p className="mb-2.5 font-mono text-xs text-green">{`// ${tag}`}</p>
          <h2
            id={titleId}
            className="mb-4 max-w-[34ch] font-display text-xl font-bold leading-snug tracking-tight sm:text-2xl"
          >
            {title}
          </h2>
          {children}
        </div>
      </GlassCard>
    </section>
  );
}
