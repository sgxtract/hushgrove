import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionCard } from "@/components/ui/SectionCard";
import { SkillChip } from "@/components/ui/SkillChip";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <main className="py-16">
      <div className="mx-auto mb-8 flex max-w-4xl justify-end px-6">
        <ThemeToggle />
      </div>

      <SectionCard
        id="preview"
        filename="preview.tsx"
        tag="step 2"
        title="UI primitives, all in one place."
      >
        <div className="mb-6 flex flex-wrap gap-2">
          <SkillChip name="Next.js" variant="primary" />
          <SkillChip name="TypeScript" variant="primary" />
          <SkillChip name="PHP" />
          <SkillChip name="Laravel" />
        </div>

        <div className="flex flex-wrap gap-2.5">
          <Button href="#preview" icon={Mail}>
            Get in touch
          </Button>
          <Button
            href="https://github.com"
            external
            variant="ghost"
            icon={ArrowUpRight}
            iconPosition="end"
          >
            Resume
          </Button>
        </div>
      </SectionCard>
    </main>
  );
}
