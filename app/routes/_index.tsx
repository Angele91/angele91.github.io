import type { MetaFunction } from "@remix-run/node";
import { ProfileSection } from "~/components/profile-section";
import { SkillsSection } from "~/components/skills-section";


export const meta: MetaFunction = () => {
  return [
    { title: "👨‍💻 Angel Gonzalez | FullStack Web Developer" },
    {
      name: "description",
      content:
        "Hi! I'm Angel Gonzalez, a passionate FullStack Web Developer focused on creating elegant and efficient web solutions.",
    },
  ];
};


export default function Index() {
  return (
    <div className="bg-[#BFBFBD] lg:h-screen lg:w-screen flex items-center justify-center lg:py-16 lg:px-20 py-10 px-5">
      <div className="flex flex-col lg:flex-row w-full h-full [filter:drop-shadow(15px_15px_10px_rgba(3,3,3,0.6))_drop-shadow(0px_5px_15px_rgba(3,3,3,0.3))] max-w-[1280px]">
        <ProfileSection />
        <SkillsSection />
      </div>
    </div>
  );
}
