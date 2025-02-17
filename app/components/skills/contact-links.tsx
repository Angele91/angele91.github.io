export function ContactLinks() {
  return (
    <div className="flex gap-4 flex-col lg:flex-row">
      <a
        href="mailto:angele.gm91@gmail.com"
        className="text-blue-500 text-2xl font-bold underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </a>
      <a
        href="https://docs.google.com/document/d/1QrWhQ3DLzPMxnWK9HaBBhYgthsTR7JlkloShpsKabM4/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl font-bold underline"
      >
        CV
      </a>
    </div>
  );
}
