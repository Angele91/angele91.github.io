import { ContactInfo } from "./contact-info";
import { DecorativeDivider } from "./shared/decorative-divider";
import { ContactLinks } from "./skills/contact-links";
import { SkillsInfo } from "./skills/skills-info";
import { motion } from "framer-motion";

export function ProfileSection() {
  return (
    <div className="flex-1 relative lg:max-h-screen">
      <div className="flex flex-col justify-between relative z-10 h-full pt-16 pb-4 px-10 bg-[#0A011C] gap-4 lg:gap-0">
        <div className="flex flex-col gap-6 items-center w-full h-full">
          <div className="flex flex-col gap-4 items-center w-full">
            <h1 className="text-white text-3xl w-full tracking-[0.06em] text-[48px] font-light leading-[1.2]">
              <span className="font-normal">Hello,</span> I&apos;m
              <br />
              <motion.span 
                className="font-semibold relative"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: "linear-gradient(to right, rgb(129 140 248), rgb(99 102 241), rgb(129 140 248))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  backgroundSize: "200% 100%",
                }}
              >
                Angel Gonzalez.
              </motion.span>
            </h1>
            <ContactInfo />
          </div>
          <DecorativeDivider />
          <nav aria-label="Contact links" className="w-full">
              <ContactLinks />
            </nav>
          <SkillsInfo />
        </div>
      </div>
    </div>
  );
}
