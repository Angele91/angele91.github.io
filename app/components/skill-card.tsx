import { ReactNode } from "react";

export interface SkillCardProps {
  icon: ReactNode;
  name: string;
  experience: string;
}

export function SkillCard({ icon, name, experience }: SkillCardProps) {
  return (
    <div 
      className="group flex flex-col gap-1 items-center justify-between w-full max-w-[160px] aspect-square p-6 rounded-xl bg-indigo-950/10 hover:bg-indigo-900/20 transition-all duration-300 backdrop-blur-sm border border-indigo-500/10 hover:border-indigo-500/20"
      role="listitem"
      aria-label={`${name} - ${experience} of experience`}
    >
      <div className="relative w-12 h-12 xl:w-14 xl:h-14 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full group-hover:bg-indigo-400/30 transition-all duration-300"
          aria-hidden="true"
        />
        <div className="relative w-full h-full text-white group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 text-center">
        <p 
          className="text-white text-sm xl:text-base font-medium group-hover:text-indigo-200 transition-colors duration-300"
          aria-hidden="true"
        >
          {name}
        </p>
        <span 
          className="text-indigo-400/80 text-xs xl:text-sm font-light"
          aria-hidden="true"
        >
          {experience}
        </span>
      </div>
    </div>
  );
}
