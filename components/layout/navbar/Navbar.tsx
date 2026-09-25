import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Brand } from "./Brand";
import { MobileMenu } from "./MobileMenu";
import { NavTabs } from "./NavTabs";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-card backdrop-blur-xl">
      <nav
        aria-label="Main"
        className="mx-auto flex h-[54px] max-w-4xl items-center justify-between px-6"
      >
        <Brand />
        <NavTabs className="hidden self-stretch lg:flex" />
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
