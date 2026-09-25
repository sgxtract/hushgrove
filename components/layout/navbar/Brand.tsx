import { WindowDots } from "@/components/ui/WindowDots";
import { siteConfig } from "@/data/site";

export function Brand() {
  return (
    <a
      href="#"
      className="flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green"
    >
      <span className="font-mono text-sm font-bold">
        {siteConfig.handle}
        {/* <span className="text-green"> - </span> */}
        {/* {siteConfig.name} */}
      </span>
    </a>
  );
}
