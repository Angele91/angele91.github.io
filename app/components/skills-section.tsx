import { TechStack } from "./skills/tech-stack";
import { Introduction } from "./skills/introduction";
import { BackgroundPattern } from "./skills/background-pattern";
import { DecorativeDivider } from "./shared/decorative-divider";

export function SkillsSection() {
  return (
    <section
      className="flex-1 bg-gradient-to-br from-[#0A011C] via-[#0F0326] to-[#150533] [box-shadow:inset_4px_0px_33.3px_rgba(255,255,255,0.1)] flex flex-col items-center justify-between gap-6 lg:gap-12 relative lg:h-screen pt-8"
      aria-label="Skills and Experience"
    >
      <div className="overflow-y-auto lg:max-h-screen">
        <BackgroundPattern />

        <div className="flex flex-col gap-9 w-full relative p-8 lg:pb-0">
          <Introduction />
          <DecorativeDivider />
          <TechStack />
        </div>
      </div>
    </section>
  );
}
