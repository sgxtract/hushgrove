import Image from "next/image";
import { UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  alt: string;
  size?: number;
  className?: string;
}

export function Avatar({ src, alt, size = 78, className }: AvatarProps) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full border border-line-strong bg-surface",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${size}px`}
          className="object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex size-full items-center justify-center text-muted"
        >
          <UserRound className="size-1/2" />
        </div>
      )}
    </div>
  );
}
