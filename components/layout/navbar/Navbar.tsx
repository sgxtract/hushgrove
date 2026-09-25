import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Brand } from "./Brand";
import { NavTabs } from "./NavTabs";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-card backdrop-blur-xl">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-4xl flex-wrap items-center justify-between px-6 lg:h-[54px] lg:flex-nowrap"
      >
        <div className="order-1 flex h-12 items-center lg:h-auto">
          <Brand />
        </div>

        <div className="order-2 lg:order-3">
          <ThemeToggle />
        </div>

        <NavTabs className="order-3 h-10 w-full border-t border-line lg:order-2 lg:h-auto lg:w-auto lg:self-stretch lg:border-t-0" />
      </nav>
    </header>
  );
}
