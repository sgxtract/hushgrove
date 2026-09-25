import { siteConfig } from "@/data/site";

const linkClass =
  "rounded-sm transition-colors duration-200 hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-6 py-6 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.author}
        </p>
        <p>
          Built with Next.js &amp; Tailwind ·{" "}
          <a
            href={siteConfig.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            view source
          </a>
        </p>
        <a href="#" className={linkClass}>
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
