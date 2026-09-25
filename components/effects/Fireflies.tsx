import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type FireflyStyle = CSSProperties & Record<`--${string}`, string>;

const fireflies = [
  {
    left: "8%",
    top: "14%",
    color: "text-green",
    float: "11s",
    blink: "4s",
    delay: "0s",
  },
  {
    left: "18%",
    top: "38%",
    color: "text-aqua",
    float: "9s",
    blink: "5s",
    delay: "0.6s",
  },
  {
    left: "29%",
    top: "10%",
    color: "text-yellow",
    float: "13s",
    blink: "3.5s",
    delay: "1.4s",
  },
  {
    left: "41%",
    top: "46%",
    color: "text-green",
    float: "10s",
    blink: "4.8s",
    delay: "2s",
  },
  {
    left: "53%",
    top: "20%",
    color: "text-aqua",
    float: "12s",
    blink: "4.2s",
    delay: "0.3s",
  },
  {
    left: "64%",
    top: "42%",
    color: "text-yellow",
    float: "9.5s",
    blink: "5.2s",
    delay: "1.8s",
  },
  {
    left: "75%",
    top: "16%",
    color: "text-green",
    float: "11.5s",
    blink: "4s",
    delay: "0.9s",
  },
  {
    left: "85%",
    top: "35%",
    color: "text-aqua",
    float: "10.5s",
    blink: "4.6s",
    delay: "2.4s",
  },
  {
    left: "93%",
    top: "12%",
    color: "text-yellow",
    float: "12.5s",
    blink: "3.8s",
    delay: "1.1s",
  },
  {
    left: "36%",
    top: "28%",
    color: "text-green",
    float: "14s",
    blink: "5.5s",
    delay: "0.2s",
  },
];

export function Fireflies() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden motion-safe:dark:block"
    >
      {fireflies.map(({ left, top, color, float, blink, delay }) => {
        const style: FireflyStyle = {
          left,
          top,
          animationDelay: delay,
          "--float-duration": float,
          "--blink-duration": blink,
        };

        return (
          <span
            key={`${left}-${top}`}
            className={cn(
              "firefly-glow absolute size-[5px] rounded-full opacity-0 animate-firefly",
              color,
            )}
            style={style}
          />
        );
      })}
    </div>
  );
}
