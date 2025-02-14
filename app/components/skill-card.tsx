export interface SkillCardProps {
  iconSrc: string;
  iconAlt: string;
  name: string;
  experience: string;
}

export function SkillCard({ iconSrc, iconAlt, name, experience }: SkillCardProps) {
  return (
    <div className="flex flex-col gap-1 items-center">
      <img src={iconSrc} alt={iconAlt} className="w-6 h-6" />
      <p className="text-white text-sm font-light">{name}</p>
      <span className="text-gray-300 text-xs">{experience}</span>
    </div>
  );
}
