import React from "react";

export default function PillButtonGroup() {
  return (
    <div className="flex justify-center items-center gap-8 my-8">
      <a
        href="https://corcept.com/cortisolmodulation/"
        className="bg-[#18398c] text-white text-1xl font-semibold px-10 py-3 rounded-full shadow-lg focus:outline-none transition hover:bg-[#10245a]"
        aria-label="Cortisol Modulation"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cortisol Modulation
      </a>
      <a
        href="#"
        className="bg-[#4ba3dc] text-white text-1xl font-semibold px-10 py-3 rounded-full shadow-lg focus:outline-none transition hover:bg-[#357eb8]"
      >
        Pipeline
      </a>
    </div>
  );
}
