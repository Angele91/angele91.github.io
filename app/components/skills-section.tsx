import { TechStack } from "./skills/tech-stack";
import { Introduction } from "./skills/introduction";
import { ContactLinks } from "./skills/contact-links";
import { SkillsInfo } from "./skills/skills-info";
import { BackgroundPattern } from "./skills/background-pattern";

export function SkillsSection() {
  return (
    <section 
      aria-label="Skills and Experience"
      className="flex-1 bg-gradient-to-br from-[#0A011C] via-[#0F0326] to-[#150533] [box-shadow:inset_4px_0px_33.3px_rgba(255,255,255,0.1)] flex flex-col items-center justify-between px-10 lg:px-24 pb-12 lg:pt-24 pt-24 gap-6 lg:gap-12 overflow-y-auto relative h-screen"
    >
      <BackgroundPattern />
      
      <div className="flex flex-col gap-12 lg:gap-16 w-full relative">
        <Introduction />
        {/* Decorative divider */}
        <div 
          className="w-full flex items-center gap-4 px-1 opacity-30" 
          role="presentation" 
          aria-hidden="true"
        >
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="w-2 h-2 bg-indigo-400 rounded-full" />
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </div>
        <TechStack />
      </div>

      <div className="w-full flex flex-col gap-6 lg:gap-8 relative">
        <nav aria-label="Contact links">
          <ContactLinks />
        </nav>
        <SkillsInfo />
      </div>
    </section>
  );
}
