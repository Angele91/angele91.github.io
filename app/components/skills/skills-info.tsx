export function SkillsInfo() {
  return (
    <div className="flex border-y border-y-border gap-4 py-4 flex-col lg:flex-row">
      <div className="flex-1 flex flex-col">
        <h4 className="text-white text-lg font-thin ">What I Bring to Your Team</h4>
        <span className="text-gray-300 text-xs">
          🛠️ <span className="font-bold text-blue-500">Core Tech Skills</span>:
          React/Next.js frontends, Nest.js backends, AWS cloud setups.
        </span>
        <span className="text-gray-300 text-xs">
          🔄 <span className="font-bold text-blue-500">System Connector</span>:
          Special talent for making different tech pieces work together smoothly.
        </span>
        <span className="text-gray-300 text-xs">
          🚀 <span className="font-bold text-blue-500">Project Rescuer</span>:
          Great at finding stuck points and clearing
        </span>
        <span className="text-gray-300 text-xs">
          🤝 <span className="font-bold text-blue-500">Team Player</span>: Equally
          comfortable in startup sprints or corporate marathons
        </span>
      </div>
      <hr className="border-l border-l-border h-full" />
      <div className="flex-1 flex flex-col">
        <h4 className="text-white text-lg font-thin">Why Work With Me?</h4>
        <span className="text-gray-300 text-xs">
          🗣️ <span className="font-bold text-blue-500">No Tech Jargon</span>: I
          explain complex things in plain English
        </span>
        <span className="text-gray-300 text-xs">
          🏃‍♂️ <span className="font-bold text-blue-500">Fast Starter</span>: Get
          up to speed with your project in days, not weeks
        </span>
        <span className="text-gray-300 text-xs">
          🔧 <span className="font-bold text-blue-500">Fix-It Focus</span>: Love
          taking over tricky projects and making them work
        </span>
        <span className="text-gray-300 text-xs">
          💡 <span className="font-bold text-blue-500">Problem Solver</span>: Turn
          challenges into opportunities quickly
        </span>
        <span className="text-gray-300 text-xs">
          ⚡ <span className="font-bold text-blue-500">Quick Learner</span>: Adapt
          to new technologies and situations fast
        </span>
      </div>
    </div>
  );
} 