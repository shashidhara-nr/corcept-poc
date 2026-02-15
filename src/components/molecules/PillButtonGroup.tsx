import React from "react";

export default function PillButtonGroup() {
  return (
    <div className="flex justify-center items-center gap-4 my-8">
      <a
        href="https://corcept.com/cortisolmodulation/"
        className="avia-button av-cq3lu-d38fbb6921407956c71023a69b3b17f0 avia-icon_select-no avia-size-medium av-icon-on-hover avia-font-color-theme-color avia-sonar-shadow bg-[#18398c] text-white text-lg font-normal px-4 py-1.5 rounded-full focus:outline-none"
        aria-label="Cortisol Modulation"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="avia_iconbox_title">Cortisol Modulation</span>
      </a>
      <a
        href="#"
        className="bg-[#4ba3dc] text-white text-lg font-normal px-4 py-1.5 rounded-full focus:outline-none"
      >
        Pipeline
      </a>
    </div>
  );
}
