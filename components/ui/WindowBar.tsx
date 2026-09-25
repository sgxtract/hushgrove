import { WindowDots } from "./WindowDots";

export function WindowBar({ filename }: { filename: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
      <WindowDots />
      <span className="font-mono text-xs text-muted">{filename}</span>
    </div>
  );
}
