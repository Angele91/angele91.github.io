import { ContactInfo } from "./contact-info";

export function ProfileSection() {
  return (
    <div className="flex-1 relative">
      <div className="flex flex-col justify-between relative z-10 h-full pt-16 pb-16 px-10 bg-[#0A011C] gap-4 lg:gap-0">
        <div className="flex flex-col gap-4 items-center lg:items-end w-full">
          <h1 className="text-white text-3xl w-full tracking-[0.06em] text-[48px] font-light leading-[1.2]">
            <span className="font-normal">Hello,</span> I&apos;m
            <br />
            <span className="font-semibold">Angel Gonzalez.</span>
          </h1>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
