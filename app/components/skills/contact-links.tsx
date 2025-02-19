export function ContactLinks() {
  return (
    <div className="flex gap-4 flex-col lg:flex-row w-full px-1">
      <a
        href="mailto:angele.gm91@gmail.com"
        className="text-indigo-400 text-xl xl:text-2xl font-medium hover:text-indigo-300 transition-colors underline decoration-indigo-500/30 hover:decoration-indigo-400/50"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </a>
      <a
        href="https://docs.google.com/document/d/1QrWhQ3DLzPMxnWK9HaBBhYgthsTR7JlkloShpsKabM4/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-400 text-xl xl:text-2xl font-medium hover:text-indigo-300 transition-colors underline decoration-indigo-500/30 hover:decoration-indigo-400/50"
      >
        CV
      </a>
    </div>
  );
}
