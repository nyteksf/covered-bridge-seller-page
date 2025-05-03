import React from "react";

const FilterByPill = ({ themeMode, index, label, onRemove }) => (
  <button
    key={index}
    className={`${
      themeMode === "dark-mode"
        ? "bg-[#333] border-[#3f3f3f] text-white"
        : "bg-[#f5f5f5] border-[#dae4d8] text-[#181818]"
    } border rounded px-2 pt-[1px] relative top-[0.5px] pb-[2px] flex items-center -tracking-[0.2px] gap-1`}
    onClick={onRemove}
  >
    {label}
    <span
      className={`duration-150 transition-all text-xs ml-1 ${
        themeMode === "dark-mode"
          ? "text-[#007e7e] hover:text-cyan-200"
          : "text-[#333]"
      }`}
    >
      ✕
    </span>
  </button>
);

export default FilterByPill;
