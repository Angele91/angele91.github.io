export function ContactLinks() {
  return (
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
  );
} 