import { SkillCard } from "./skill-card";

export function SkillsSection() {
  return (
    <div className="flex-1 bg-[#0A011C] rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl [box-shadow:inset_4px_0px_33.3px_rgba(255,255,255,0.1)] flex flex-col items-center justify-between px-10 lg:px-20 pb-10 lg:pt-36 pt-20 gap-4 lg:gap-8 overflow-y-auto">
      <div className="flex flex-col gap-10 w-full">
        <div className="flex justify-between items-center w-full xl:px-20 md:px-10">
          <SkillCard
            iconSrc="/nextjs-icon.svg"
            iconAlt="nextjs-icon"
            name="Next.JS"
            experience="+3yrs"
          />
          <SkillCard
            iconSrc="/nestjs-icon.svg"
            iconAlt="nextjs-icon"
            name="Nest.JS"
            experience="+5yrs"
          />
          <SkillCard
            iconSrc="/nextjs-icon.svg"
            iconAlt="nextjs-icon"
            name=""
            experience="+5yrs"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-2xl xl:text-3xl">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-gray-300 text-sm">
            Hi! I&apos;m a FullStack Developer who loves{" "}
            <span className="font-bold text-blue-500">
              untangling tech puzzles
            </span>{" "}
            and{" "}
            <span className="font-bold text-blue-500">
              getting projects moving fast
            </span>
            . With 7+ years making websites and apps work smarter, I&apos;ve
            helped clients in law, eco-tech, restaurants, and SaaS companies
            turn their ideas into reality.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex gap-4 flex-col lg:flex-row">
          <a
            href="mailto:angele.gm91@gmail.com"
            className="text-blue-500 text-xl font-thin underline"
          >
            Contact
          </a>
          <a href="/cv.pdf" className="text-white text-xl font-thin underline">
            Download CV
          </a>
        </div>

        <div className="flex border-y border-y-border gap-4 py-4 flex-col lg:flex-row">
          <div className="flex-1 flex flex-col">
            <h4 className="text-white text-lg font-thin ">
              What I Bring to Your Team
            </h4>
            <span className="text-gray-300 text-xs">
              🛠️{" "}
              <span className="font-bold text-blue-500">Core Tech Skills</span>:
              React/Next.js frontends, Nest.js backends, AWS cloud setups.
            </span>
            <span className="text-gray-300 text-xs">
              🔄{" "}
              <span className="font-bold text-blue-500">System Connector</span>:
              Special talent for making different tech pieces work together
              smoothly.
            </span>
            <span className="text-gray-300 text-xs">
              🚀{" "}
              <span className="font-bold text-blue-500">Project Rescuer</span>:
              Great at finding stuck points and clearing
            </span>
            <span className="text-gray-300 text-xs">
              🤝 <span className="font-bold text-blue-500">Team Player</span>:
              Equally comfortable in startup sprints or corporate marathons
            </span>
          </div>
          <hr className="border-l border-l-border h-full" />
          <div className="flex-1 flex flex-col">
            <h4 className="text-white text-lg font-thin">Why Work With Me?</h4>

            <span className="text-gray-300 text-xs">
              🗣️ <span className="font-bold text-blue-500">No Tech Jargon</span>
              : I explain complex things in plain English
            </span>
            <span className="text-gray-300 text-xs">
              🏃‍♂️ <span className="font-bold text-blue-500">Fast Starter</span>:
              Get up to speed with your project in days, not weeks
            </span>
            <span className="text-gray-300 text-xs">
              🔧 <span className="font-bold text-blue-500">Fix-It Focus</span>:
              Love taking over tricky projects and making them work
            </span>
            <span className="text-gray-300 text-xs">
              💡 <span className="font-bold text-blue-500">Problem Solver</span>
              : Turn challenges into opportunities quickly
            </span>
            <span className="text-gray-300 text-xs">
              ⚡ <span className="font-bold text-blue-500">Quick Learner</span>:
              Adapt to new technologies and situations fast
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
