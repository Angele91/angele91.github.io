import { ContactInfo } from "./contact-info";

export function ProfileSection() {
  return (
    <div className="flex-1 relative">
      <img
        src="/landing-rect.svg"
        alt="landing-rect"
        className="absolute top-0 left-0 w-full h-full object-fill hidden lg:block" 
      />
      <div className="flex flex-col justify-between relative z-10 h-full pt-24 pb-16 px-10 bg-[#0A011C] lg:bg-transparent rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl gap-4 lg:gap-0">
        <div className="flex flex-col gap-4 items-center lg:items-end w-full">
          <div className="w-[240px] h-[240px] rounded-full bg-white"></div>
          <h1 className="text-white text-4xl w-full tracking-[0.06em] text-[48px] leading-[56px] font-normal hidden lg:block">
            Hello, I&apos;m
            <br />
            Angel Gonzalez.
          </h1>
          <h1 className="text-white text-4xl w-full tracking-[0.06em] text-[48px] leading-[56px] text-center font-normal block lg:hidden">
            Hello,<br />
            I&apos;m Angel Gonzalez.
          </h1>
        </div>
        <ContactInfo />
      </div>
    </div>
  );
}
