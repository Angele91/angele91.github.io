import { SkillCard } from "../skill-card";

export function TechStack() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-gray-300 text-lg text-center">
          My current tech stack
        </span>
      </div>
      <div className="flex justify-between items-center w-full xl:px-20 md:px-10 flex-wrap">
        <SkillCard
          iconSrc="/nextjs-icon.svg"
          iconAlt="nextjs-icon"
          name="Next.JS"
          experience="+6yrs"
        />
        <SkillCard
          iconSrc="/nestjs-icon.svg"
          iconAlt="nestjs-icon"
          name="Nest.JS"
          experience="+3yrs"
        />
        <SkillCard
          iconSrc="/postgresql-icon.svg"
          iconAlt="postgresql-icon"
          name="PostgreSQL"
          experience="+5yrs"
        />
      </div>
    </div>
  );
} 