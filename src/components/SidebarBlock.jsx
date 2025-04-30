import React from "react";

export default function SidebarBlock({
  themeMode,
  title,
  onClear = null,
  children,
}) {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-[1.95rem]">
        <h3
          className={`text-[24px] font-semibold leading-[30px] tracking-[-1px] ${
            themeMode === "dark-mode" ? "text-[#f5f5f5]" : "text-[#181818]"
          } `}
        >
          {title}
          <span className="block mt-[5px] h-[2px] w-[80%] bg-[#007e7e]" />
        </h3>
        {onClear ? (
          <button
            onClick={onClear}
            className="text-xs font-bold text-[#6e6e6e] border-b border-[#3f3f3f] pb-[2px] hover:text-[#006969] transition-all duration-200 tracking-[-0.1px]"
          >
            Clear
          </button>
        ) : (
          <div className="w-[24px]" /> // Placeholder if no Clear button
        )}
      </div>

      {/* Content (whatever you pass in) */}
      <div className="flex flex-col gap-2">{children}</div>

      {/* Divider */}
      <div className={`w-[calc(100%+1.25rem)] calc(1rem * calc(1 - var(--tw-space-y-reverse))); -ml-[0.66rem] border-t ${ themeMode === "dark-mode" ? "border-[#3f3f3f]" : "border-[#dae4d8]" } mb-8`} />
    </div>
  );
}
