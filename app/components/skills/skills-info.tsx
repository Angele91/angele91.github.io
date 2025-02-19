export function SkillsInfo() {
  return (
    <div className="flex border-y-indigo-900/30 gap-6 py-6 px-1 flex-col lg:flex-row backdrop-blur-sm h-full">
      <div className="flex-1 flex flex-col gap-4">
        <h4 className="text-white text-xl xl:text-2xl font-semibold tracking-wide [text-shadow:0_0_10px_rgba(255,255,255,0.1)]">What I Bring to Your Team</h4>
        <span className="text-gray-200 text-sm xl:text-base font-light">
          🛠️ <span className="font-medium text-indigo-400">Core Tech Skills</span>:
          React/Next.js frontends, Nest.js backends, AWS cloud setups.
        </span>
        <span className="text-gray-200 text-sm xl:text-base font-light">
          🔄 <span className="font-medium text-indigo-400">System Connector</span>:
          Special talent for making different tech pieces work together smoothly.
        </span>
        <span className="text-gray-200 text-sm xl:text-base font-light">
          🚀 <span className="font-medium text-indigo-400">Project Rescuer</span>:
          Great at finding stuck points and clearing them.
        </span>
        <span className="text-gray-200 text-sm xl:text-base font-light">
          🤝 <span className="font-medium text-indigo-400">Team Player</span>: Equally
          comfortable in startup sprints or corporate marathons.
        </span>
      </div>
      <hr className="border-l border-l-indigo-900/30 h-full hidden lg:block" />
      <div className="flex-1 flex flex-col gap-4">
        <h4 className="text-white text-xl xl:text-2xl font-semibold tracking-wide [text-shadow:0_0_10px_rgba(255,255,255,0.1)]">Why Work With Me?</h4>
        <span className="text-gray-200 text-sm xl:text-base font-light">
          🗣️ <span className="font-medium text-indigo-400">No Tech Jargon</span>: I
          explain complex things in plain English.
        </span>
        <span className="text-gray-200 text-sm xl:text-base font-light">
          🏃‍♂️ <span className="font-medium text-indigo-400">Fast Starter</span>: Get
          up to speed with your project in days, not weeks.
        </span>
        <span className="text-gray-200 text-sm xl:text-base font-light">
          🔧 <span className="font-medium text-indigo-400">Fix-It Focus</span>: Love
          taking over tricky projects and making them work.
        </span>
        <span className="text-gray-200 text-sm xl:text-base font-light">
          💡 <span className="font-medium text-indigo-400">Problem Solver</span>: Turn
          challenges into opportunities quickly.
        </span>
        <span className="text-gray-200 text-sm xl:text-base font-light">
          ⚡ <span className="font-medium text-indigo-400">Quick Learner</span>: Adapt
          to new technologies and situations fast.
        </span>
      </div>
    </div>
  );
} 