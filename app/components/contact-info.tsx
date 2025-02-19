import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


export function ContactInfo() {
  return (
    <div className="flex flex-col gap-2 items-center lg:items-end w-full">
      <div className="flex gap-2 items-center w-full">
        <HiOutlineMail className="text-gray-300 text-2xl" />
        <a
          href="mailto:angel@angelgonzalez.dev"
          className="text-gray-300 text-lg font-light hover:text-gray-100 transition-colors underline"
          target="_blank"
          rel="noreferrer"
        >
          angele.gm91@gmail.com
        </a>
      </div>
      <div className="flex gap-2 items-center w-full">
        <FaLinkedin className="text-blue-300 text-2xl" />
        <a
          href="https://www.linkedin.com/in/angel-gonz%C3%A1lez-9b58681b2/"
          className="text-blue-300 text-lg font-light hover:text-blue-100 transition-colors underline"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div className="flex gap-2 items-center w-full">
        <FaGithub className="text-white text-2xl" />
        <a
          href="https://github.com/Angele91"
          className="text-white text-lg font-light hover:text-gray-100 transition-colors underline"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
