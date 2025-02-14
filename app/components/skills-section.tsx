import { TechStack } from "./skills/tech-stack";
import { Introduction } from "./skills/introduction";
import { ContactLinks } from "./skills/contact-links";
import { SkillsInfo } from "./skills/skills-info";

export function SkillsSection() {
  return (
    <div className="flex-1 bg-[#0A011C] rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl [box-shadow:inset_4px_0px_33.3px_rgba(255,255,255,0.1)] flex flex-col items-center justify-between px-10 lg:px-20 pb-10 lg:pt-20 pt-20 gap-4 lg:gap-8 overflow-y-auto">
      <div className="flex flex-col gap-10 w-full">
        <Introduction />
        <TechStack />
      </div>
      <div className="w-full flex flex-col gap-4">
        <ContactLinks />
        <SkillsInfo />
      </div>
    </div>
  );
}
