import { EmailField } from "@/components/ui/EmailField";
import { SectionCard } from "@/components/ui/SectionCard";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { contact } from "@/data/contact";
import { sectionFiles } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <SectionCard
      id="contact"
      filename={sectionFiles.contact}
      tag={contact.tag}
      title={contact.title}
    >
      <p className="max-w-[60ch] text-[0.92rem] leading-relaxed text-muted">
        {contact.message}
      </p>

      <EmailField
        email={profile.email}
        subject={contact.emailSubject}
        className="mt-6"
      />

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <span className="font-mono text-xs text-muted">
          {contact.socialsLabel}
        </span>
        <SocialLinks links={profile.socials} />
      </div>
    </SectionCard>
  );
}
