import { SkillCard } from "../skill-card";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNestjs, SiPostgresql, SiAmazon, SiTypescript, SiReact, SiTailwindcss, SiNodedotjs } from "react-icons/si";

export function TechStack() {
  return (
    <div className="flex flex-col gap-6 px-1">
      <div className="flex flex-col gap-2">
        <h2 
          className="text-white text-xl xl:text-2xl font-semibold tracking-wide text-center [text-shadow:0_0_10px_rgba(255,255,255,0.1)]"
          id="tech-stack-heading"
        >
          My Current Tech Stack
        </h2>
        <p className="text-gray-200 text-sm xl:text-base font-light text-center">
          Technologies I work with on a daily basis
        </p>
      </div>

      <div 
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 w-full place-items-center"
        role="list"
        aria-labelledby="tech-stack-heading"
      >
        <SkillCard
          icon={<TbBrandNextjs className="w-full h-full" />}
          name="Next.JS"
          experience="+6yrs"
        />
        <SkillCard
          icon={<SiNestjs className="w-full h-full" />}
          name="Nest.JS"
          experience="+3yrs"
        />
        <SkillCard
          icon={<SiPostgresql className="w-full h-full" />}
          name="PostgreSQL"
          experience="+5yrs"
        />
        <SkillCard
          icon={<SiAmazon className="w-full h-full" />}
          name="AWS"
          experience="+4yrs"
        />
        <SkillCard
          icon={<SiTypescript className="w-full h-full" />}
          name="TypeScript"
          experience="+5yrs"
        />
        <SkillCard
          icon={<SiReact className="w-full h-full" />}
          name="React"
          experience="+6yrs"
        />
        <SkillCard
          icon={<SiTailwindcss className="w-full h-full" />}
          name="Tailwind"
          experience="+3yrs"
        />
        <SkillCard
          icon={<SiNodedotjs className="w-full h-full" />}
          name="Node.js"
          experience="+7yrs"
        />
      </div>
    </div>
  );
} 