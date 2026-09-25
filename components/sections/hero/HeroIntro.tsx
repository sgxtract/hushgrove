import { ArrowUpRight, Mail } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { StatusPill } from "@/components/ui/StatusPill";
import { profile } from "@/data/profile";

export function HeroIntro() {
  return (
    <div>
      <StatusPill>
        {profile.location} • {profile.availability}
      </StatusPill>

      <div className="mt-5 flex items-center gap-4">
        <Avatar src={profile.avatar} alt={profile.name} size={78} />
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-1 font-medium text-aqua">{profile.role}</p>
        </div>
      </div>

      <p className="mt-5 max-w-[46ch] text-[0.95rem] leading-relaxed text-muted">
        {profile.bio}
      </p>

      <div className="mt-6 flex flex-wrap gap-2.5">
        <Button href="#contact" icon={Mail}>
          Get in touch
        </Button>
        <Button
          href={profile.resumeUrl}
          external
          variant="ghost"
          icon={ArrowUpRight}
          iconPosition="end"
        >
          Resume
        </Button>
      </div>

      <SocialLinks links={profile.socials} className="mt-6" />
    </div>
  );
}
