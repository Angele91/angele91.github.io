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
    <main className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-950 via-indigo-950/90 to-gray-950 flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.04),transparent_40%),radial-gradient(circle_at_70%_20%,rgba(99,102,241,0.03),transparent_45%)]" />
      <div className="relative flex flex-col lg:flex-row w-full h-full shadow-lg rounded-xl max-w-[1280px]">
        <ProfileSection />
        <SkillsSection />
      </div>
    </main>
  );
}
