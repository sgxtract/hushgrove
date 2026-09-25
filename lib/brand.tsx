export const brand = {
  dark: {
    background: "#2d353b",
    foreground: "#d3c6aa",
    muted: "#9da9a0",
  },
  light: {
    background: "#fdf6e3",
  },
  accent: {
    green: "#a7c080",
    aqua: "#83c092",
    yellow: "#dbbc7f",
    red: "#e67e80",
  },
} as const;

export function LeafMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 19C5 10.7 10.7 5 19 5c0 8.3-5.7 14-14 14Z"
        fill={brand.accent.green}
      />
      <path
        d="M5 19l8.5-8.5"
        stroke={brand.dark.background}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </svg>
  );
}
